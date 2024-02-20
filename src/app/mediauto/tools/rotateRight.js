/*global Mediauto*/
/*global paper*/

export var ToolRotateRight = {
  rotateRight: (function () {
    var tool = {

      /**
       * @function click
       * @desc home. Openseadragon initialisation parameter binds the function.
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: function click(prevTool) {
        paper.view._matrix.rotate(90)

        Mediauto.viewer.viewport.setRotation(Number(Mediauto.viewer.viewport.degrees) + 90);
        Mediauto.viewer.viewport.zoomBy(1.000000001);
        // 줌을 1로 하면 화면 재조정이 발생하지 않음
        // Mediauto.viewer.viewport.zoomBy(1);

        for (var reg of Mediauto.ImageInfo[1].Regions) {
          reg.text.rotate(-90)
        }
        for (var reg of Mediauto.ImageInfo[1].Measurements) {
          reg.text.rotate(-90)
        }
        for (var reg of Mediauto.ImageInfo[1].Comments) {
          reg['area'].text.rotate(-90)
        }
        Mediauto.backToPreviousTool(prevTool);
      }
    };

    return tool;
  }())
};
