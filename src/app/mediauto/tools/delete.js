/*global Mediauto*/
/*global paper*/

export var ToolDelete = {
  delete: (function () {
    var tool = {

      /**
           * @function click
           * @desc add an additional point to the selected annotation
           * @param {string} prevTool The previous tool to which the selection goes back
           * @returns {void}
           */
      click: function click(prevTool) {
        Mediauto.cmdDeleteSelected();
        Mediauto.backToPreviousTool(prevTool);
        Mediauto.currentRegions();
      }
    };

    return tool;
  }())
};
