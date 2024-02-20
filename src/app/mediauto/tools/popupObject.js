/*global Mediauto*/
/*global paper*/

export var ToolPopupObject = {
  popupObject: (function () {
    var tool = {

      /**
       * @function click
       * @desc home. Openseadragon initialisation parameter binds the function.
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: function click(prevTool) {
        if (Mediauto.dom.querySelector("#popup-object").style.visibility == 'visible') {
          Mediauto.dom.querySelector("#popup-object").style.visibility = 'hidden';
        }
        else {
          Mediauto.dom.querySelector("#popup-object").style.visibility = 'visible';
        }

        Mediauto.backToPreviousTool(prevTool);
      }
    };

    return tool;
  }())
};
