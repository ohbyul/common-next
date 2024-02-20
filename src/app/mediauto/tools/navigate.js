/*global Mediauto*/
/*global paper*/

export var ToolNavigate = {
  navigate: (function () {
    var tool = {

      /**
       * @function click
       * @desc navigate the canvas
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: function click(prevTool) {
        Mediauto.navEnabled = true;
        Mediauto.handle = null;
      }
    };

    return tool;
  }())
};
