/*global Mediauto*/
/*global paper*/

export var ToolPopupInfo = {
  popupInfo: (function () {
    var tool = {

      /**
       * @function click
       * @desc home. Openseadragon initialisation parameter binds the function.
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: function click(prevTool) {
        Mediauto.dom.querySelector("#labelDiv").style.visibility = 'hidden';
        Mediauto.dom.querySelector("#changeLabelDiv").style.visibility = 'hidden';

        if (Mediauto.dom.querySelector("#popup-info").style.visibility == 'visible') {
          Mediauto.dom.querySelector("#popup-info").style.visibility = 'hidden';
        }
        else {
          Mediauto.dom.querySelector("#popup-info").style.visibility = 'visible';
        }

        Mediauto.backToPreviousTool(prevTool);
      }
    };

    return tool;
  }())
};
