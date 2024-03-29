/*global Mediauto*/
/*global paper*/

export const ToolNext = {
  next: (function () {
    const tool = {

      /**
       * @function click
       * @desc next. Next image.
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: function click(prevTool) {
        Mediauto.loadNextImage();
        Mediauto.backToPreviousTool(prevTool);
      }
    };

    return tool;
  }())
};
