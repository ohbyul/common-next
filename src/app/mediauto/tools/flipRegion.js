/*global Mediauto*/
/*global paper*/

export var ToolFlipRegion = {
  flipRegion: (function () {
    var tool = {

      /**
       * @function flipRegion
       * @desc Flip region along y-axis around its center point
       * @returns {void}
       */
      flip: function flip() {
        if (Mediauto.region !== null) {
          if (Mediauto.debug) { console.log("> flipping region"); }

          var i;
          for (i in Mediauto.objInfo.regions) {
            if (Mediauto.objInfo.regions[i].path.selected) {
              Mediauto.objInfo.regions[i].path.scale(-1, 1);
            }
          }
          paper.view.draw();
        }
      },

      /*
      * @function click
      * @desc Convert bezier curve into polygon path
      * @param {string} prevTool The previous tool to which the selection goes back
      * @returns {void}
      */
      click: function click(prevTool) {
        tool.flip();
        Mediauto.backToPreviousTool(prevTool);
      }
    };

    return tool;
  }())
};
