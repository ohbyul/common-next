/*global Mediauto*/
/*global paper*/

export var ToolHome = {
  zoomHome: (function () {
    var tool = {

      /**
       * @function click
       * @desc home. Openseadragon initialisation parameter binds the function.
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: function click(prevTool) {
        for (var reg of Mediauto.ImageInfo[1].Regions) {
          reg.text.rotate(360 - (Number(Mediauto.viewer.viewport.degrees) * -1))
        }
        for (var reg of Mediauto.ImageInfo[1].Measurements) {
          reg.text.rotate(360 - (Number(Mediauto.viewer.viewport.degrees) * -1))
        }

        paper.view._matrix.rotate(360 - Number(Mediauto.viewer.viewport.degrees))
        Mediauto.viewer.viewport.setRotation(0);
        Mediauto.viewer.viewport.goHome();

        for (var reg of Mediauto.ImageInfo[1].Regions) {
          reg.text.setFontSize(13)
        }

        Mediauto.backToPreviousTool(prevTool);
      }
    };

    return tool;
  }())
};
