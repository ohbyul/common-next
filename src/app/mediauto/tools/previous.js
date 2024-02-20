/*global Mediauto*/
/*global paper*/

export const ToolPrevious = {
  previous: (function () {
    var tool = {

      /**
       * @function click
       * @desc previous. Previous image.
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: function click(prevTool) {
        Mediauto.loadPreviousImage();
        Mediauto.backToPreviousTool(prevTool);
      }
    }

    return tool;
  }())
};
