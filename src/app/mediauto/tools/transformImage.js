/*global Mediauto*/
/*global paper*/

export var ToolTransformImage = {
  transformImage: (function () {
    var tool = {

      /**
       * @function click
       * @desc home. Openseadragon initialisation parameter binds the function.
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: async function click(prevTool) {

        let zoom = Mediauto.viewer.viewport.getZoom();
        let center = Mediauto.viewer.viewport.getCenter();
        // 이미지 open 후 callback
        Mediauto.viewer.addOnceHandler('open', function () {
          $('#content-loading').fadeOut();
          $('#content-loading .message').text('');

          Mediauto.viewer.viewport.zoomTo(zoom);
          Mediauto.viewer.viewport.centerSpringX.target.value = center.x;
          Mediauto.viewer.viewport.centerSpringY.target.value = center.y;
          // Mediauto.viewer.viewport.zoomBy(1.000000001); // Calling it this way keeps the arguments consistent (if we passed callback into addOnceHandler it would get an event on this path but not on the setTimeout path above)
        })

        await this.transfromImage()

        Mediauto.backToPreviousTool(prevTool);
      },

      transfromImage: async function transfromImage() {
        $('#content-loading').fadeIn();
        $('#content-loading .message').text(`loading...`);
        if (Mediauto.imageType == 'jpeg') {
          Mediauto.dom.querySelector(".tools.JPG").classList.add('WSI');
          Mediauto.dom.querySelector(".tools.JPG").classList.remove('JPG');
          Mediauto.dom.querySelector("#image-format").innerText = 'WSI';

          let deepzoomCode;
          await axios.get(web_url + `/api/tumor/detail-slide/` + Mediauto.slide_id).then((result) => {
            deepzoomCode = result.data.deepzoomInfo?.statusCode;
          })
          Mediauto.imageType = 'origin'

          if (deepzoomCode == 200) {
            Mediauto.viewer.open(deepcis_url + Mediauto.slide_url)
            await Mediauto.dbDeepzoomInformationLoad();
            Mediauto.viewer.scalebar({
              type: OpenSeadragon.ScalebarType.MICROSCOPE,
              minWidth: '150px',
              pixelsPerMeter: 1000000 / Mediauto.umPerImagePixelX,
              color: 'black',
              fontColor: 'black',
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              barThickness: 4,
              location: OpenSeadragon.ScalebarLocation.CUSTOM_BOTTOM_RIGHT,
              xOffset: 24,
              yOffset: 24,
              unit: 'meter'
            });
            /* fixes https://github.com/r03ert0/Mediauto/issues/142  */
            Mediauto.viewer.scalebarInstance.divElt.style.pointerEvents = `none`;
          }
          else if (deepzoomCode == 423) {
            Mediauto.dom.querySelector("#openseadragon1").innerText = 'File is already being downloaded. Please refresh (F5) a little later.';
          }
        }
        else {
          Mediauto.dom.querySelector(".tools.WSI").classList.add('JPG');
          Mediauto.dom.querySelector(".tools.WSI").classList.remove('WSI');
          Mediauto.dom.querySelector("#image-format").innerText = 'JPG';

          Mediauto.viewer.open({
            type: 'image',
            url: Mediauto.jpegFilePath
          })

          Mediauto.viewer.scalebar({
            location: OpenSeadragon.ScalebarLocation.NONE,
            // type: OpenSeadragon.ScalebarType.MICROSCOPE,
            // minWidth:'150px',
            // pixelsPerMeter: (Mediauto.imageSize.x),
            // color:'black',
            // fontColor:'black',
            // backgroundColor:"rgba(255, 255, 255, 0.5)",
            // barThickness:4,
            // location: OpenSeadragon.ScalebarLocation.CUSTOM_BOTTOM_RIGHT,
            // xOffset:24,
            // yOffset:24,
            // unit: 'px'
          });

          Mediauto.dom.querySelector(".infor.Txt2.pixelX").innerText = 'N/A';
          Mediauto.dom.querySelector(".infor.Txt2.pixelY").innerText = 'N/A';
          Mediauto.dom.querySelector(".infor.Txt2.vendor").innerText = 'JPG';
          Mediauto.dom.querySelector(".infor.textarea.property").innerHTML = '';

          Mediauto.imageType = 'jpeg'
          Mediauto.umPerImagePixelX = 0;
        }
        return true;
      }
    };

    return tool;
  }())
};
