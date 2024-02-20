/*global Mediauto*/
/*global paper*/

export var ToolCopy = {
  copy: (function () {
    var tool = {

      /**
           * @function click
           * @desc copy. Copy selected annotation
           * @param {string} prevTool The previous tool to which the selection goes back
           * @returns {void}
           */
      click: function click(prevTool) {
        Mediauto.cmdCopy();
        Mediauto.backToSelect();
      }
    };

    return tool;
  }())
};
