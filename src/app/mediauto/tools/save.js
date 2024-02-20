/*global Mediauto*/
/*global $*/
import axios from 'axios'
const web_url = "http://localhost:3003"

export var ToolSave = {
  save: (function () {

    const configureValuesToSave = function (sl) {
      var section = Mediauto.ImageInfo[sl];
      var value = {};
      value.Regions = [];
      value.RegionsToRemove = [];

      for (const reg of section.Regions) {
        var coordinate_info = Mediauto.coordinateInfo(reg);

        value.Regions.push({
          annotation_id: reg.uid,
          label_id: reg.labelNo,
          coordinate_kind_cd: reg.path.type,
          coordinate_info: coordinate_info,
          review_yn: 'N',
          termination_yn: 'N',
          del_yn: "N",
        });
      }

      for (const uid of section.RegionsToRemove) {
        value.RegionsToRemove.push(uid);
      }

      return value;
    };

    const saveAnnotationToDB = function (data) {
      Object.assign(data, { action: "save" });
      const { slice, Hash } = data;

      var pr = new Promise((resolve, reject) => {
        // $.ajax({
        //   url: 'http://172.30.1.124:3003/annotation/input',
        //   type: "POST",
        //   data: data,
        //   success: (result) => {
        //     console.log("< MediautoDBSave. Successfully saved regions:",
        //       Mediauto.ImageInfo[data.slice].Regions.length,
        //       "section: " + slice.toString(),
        //       "response:",
        //       result
        //     );
        //     // update hash
        //     Mediauto.ImageInfo[slice].Hash = Hash;
        //     resolve("section " + slice);
        //   },
        //   error: (jqXHR, textStatus, err) => {
        //     console.log("< MediautoDBSave. ERROR: " + textStatus + " " + err, "section: " + slice.toString());
        //     reject(err);
        //   }
        // });

        axios
          .post(web_url + `/annotation/input`, data)
          .then((result) => {
            console.log("< MediautoDBSave. Successfully saved regions:",
              "response:", result
            );
            // update hash
            Mediauto.ImageInfo[1].Hash = Hash;
            resolve("section " + 1);
          })
          .catch(errorHandler)
          .finally(() => {
            // $('#content-loading').fadeOut();
          });
      })
        .catch(console.log);

      return pr;
    };

    /**
       * @function MediautoDBSave
       * @desc Save SVG overlay to MediautoDB
       * @returns {void}
       */
    var MediautoDBSave = function MediautoDBSave() {
      if (Mediauto.debug) {
        console.log("> save promise");
      }

      var promiseArray = [];
      var savedSections = "Saving sections: ";

      // eslint-disable-next-line max-statements
      Object.keys(Mediauto.ImageInfo).forEach((sl) => {
        if ((Mediauto.config.multiImageSave === false) && (sl !== Mediauto.currentImage)) {
          return;
        }

        if (Mediauto.ImageInfo[sl].Regions.length < 1) {
          return;
        }

        // configure value to be saved
        const value = configureValuesToSave(sl);

        // check if the section annotations have changed since loaded by computing a hash
        const h = Mediauto.hash(JSON.stringify(value)).toString(16);
        const section = Mediauto.ImageInfo[sl];

        if (Mediauto.debug > 1) {
          console.log("hash:", h, "original hash:", section.Hash);
        }

        // if the section hash is undefined, this section has not yet been loaded.
        // Do not save anything for this section
        // if( typeof section.Hash === "undefined" || h === section.Hash ) {
        //   if(Mediauto.debug > 1) {
        //     console.log(`sl ${sl}`, "No change, no save");
        //   }

        //   return;
        // }

        value.Hash = h;
        savedSections += sl.toString() + ' ';

        // post data to database
        promiseArray.push(saveAnnotationToDB({
          slide_id: Mediauto.slide_id,
          annotation_list: value.Regions,
        }));
      });

      Promise.all(promiseArray).then((values) => {
        console.log(values);
      })
        .catch(console.log);

      //show dialog box with timeout
      $('#saveDialog')
        .html(savedSections)
        .fadeIn();
      setTimeout(function () {
        $("#saveDialog")
          .fadeOut(500);
      }, 2000);
    };

    var tool = {

      /**
           * @function click
           * @desc save the annotations
           * @param {string} prevTool The previous tool to which the selection goes back
           * @returns {void}
           */
      click: function click(prevTool) {
        Mediauto.selectRegion(null);
        MediautoDBSave();
        Mediauto.backToPreviousTool(prevTool);
      }
    };

    return tool;
  }())
};

/**
 * @function MediautoDBLoad
 * @desc Load SVG overlay from MediautoDB
 * @returns {Promise} A promise to return an array of paths of the current section.

 */
export const annotationLoad = function () {
  return new Promise((resolve, reject) => {
    if (Mediauto.debug) {
      console.log("> save.js MediautoDBLoad promise");
    }
    const query = {
      action: "load_last",
      source: Mediauto.source,
      slice: Mediauto.currentImage
    };
    if (typeof Mediauto.project !== 'undefined') {
      query.project = Mediauto.project;
    }

    axios
      .post(web_url + `/annotation/list/` + Mediauto.slide_id)
      .then((data) => {
        // $.getJSON('http://172.30.1.124:3003/annotation/list', query)
        //   .success(function (data) {
        Mediauto.annotationLoadingFlag = false;

        // Because of asynchrony, the section that just loaded may not be the one that the user
        // intended to get. If the section that was just loaded does not correspond to the current section,
        // do not display this one and load the current section.

        if (Mediauto.section !== Mediauto.currentImage) {
          console.log("> save.js MediautoDBLoad: Loaded section does not correspond with the current section.");
          Mediauto.dbAnnotationLoad()
            .then(resolve)
            .catch(reject);

        } 
        // else if ($.isEmptyObject(data)) {
        //   Mediauto.ImageInfo[Mediauto.currentImage].Hash = Mediauto.hash(JSON.stringify(Mediauto.objInfo.regions)).toString(16);
        //   if (Mediauto.debug) {
        //     console.log("< save.js MediautoDBLoad: returned data is an empty object");
        //   }
        //   resolve([]);
        // } else {
        //   resolve(data);
        // }
      })
    // .error(function(jqXHR, textStatus, err) {
    //   console.log("< MediautoDBLoad resolve ERROR: " + textStatus + " " + err);
    //   Mediauto.annotationLoadingFlag = false;
    //   reject(err);
    // });
  });
};
