/*global Mediauto*/
/*global paper*/

export var ToolBack = {
  back: (function () {
    var tool = {

      /**
       * Regions are stored in two different places: Inside Mediauto.ImageInfo[].Regions, and
       * inside paper.projects[], which is the structure paperjs uses for display. This function
       * checks that the order of the regions is the same (it should always be).
       * @returns {boolean} true if the check is ok
       */
      _isPaperRegionsOrderOk: function () {
        const { currentImage } = Mediauto;
        const { Regions: regions, projectID } = Mediauto.ImageInfo[currentImage];
        let isOk = true;
        for (let i = 0; i < regions.length; i += 1) {
          if (regions[i].path !== paper.projects[projectID].activeLayer.children[i]) {
            isOk = false;
            break;
          }
        }

        return isOk;
      },

      _isRegionSelected: function () {
        const { region } = Mediauto;
        let isOk = true;

        if (region === null) {
          isOk = false;
        }

        return isOk;
      },

      _findSelectedRegion: function () {
        const { currentImage, region } = Mediauto;
        const { Regions: regions } = Mediauto.ImageInfo[currentImage];
        let regionIndex = null;
        for (let i = 0; i < regions.length; i += 1) {
          if (regions[i].uid === region.uid) {
            regionIndex = i;
            break;
          }
        }

        return regionIndex;
      },

      _sendSelectedRegionToBack: function () {
        const regionIndex = tool._findSelectedRegion();
        if (regionIndex === null) {
          console.log("ERROR: cannot find selected region");

          return;
        }

        const { currentImage, region } = Mediauto;
        const { Regions: regions, projectID } = Mediauto.ImageInfo[currentImage];
        regions.splice(regionIndex, 1);
        regions.unshift(region);
        region.path.remove();
        paper.projects[projectID].activeLayer.insertChild(0, region.path);
      },

      /**
         * @function click
         * @desc back. Move selection to the back.
         * @param {string} prevTool The previous tool to which the selection goes back
         * @returns {void}
         */
      click: function click(prevTool) {
        if (!tool._isRegionSelected()) {
          console.log("ERROR: no region selected");

          return;
        }

        if (!tool._isPaperRegionsOrderOk()) {
          console.log("ERROR: region order is incorrect");

          return;
        }

        tool._sendSelectedRegionToBack();
        paper.view.draw();

        Mediauto.backToSelect();

        /*
        Mediauto.objInfo.regions[index_1].path === paper.projects[0].activeLayer.children[index_2]
        ch0 = paper.projects[0].activeLayer.children[0];
        ch0.remove();
        paper.projects[0].activeLayer.insertChild(3,ch0);
        */

      }
    };

    return tool;
  }())
};
