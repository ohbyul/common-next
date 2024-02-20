/*global Mediauto*/
/*global paper*/

export var ToolFilters = {
    filters: (function () {
        var tool = {

            /**
             * @function click
             * @desc home. Openseadragon initialisation parameter binds the function.
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                Mediauto.dom.querySelector("#labelDiv").style.display = 'none';
                Mediauto.dom.querySelector("#changeLabelDiv").style.display = 'none';
                Mediauto.dom.querySelector("#popup-info").style.display = 'none';

                var canvas = $($('#content')[0].shadowRoot.querySelector('.openseadragon-canvas canvas'))[0];

                Mediauto.tempCanvas = window.document.createElement("canvas");
                Mediauto.tempCanvas.width = canvas.width,
                    Mediauto.tempCanvas.height = canvas.height;
                Mediauto.tempCanvas.getContext("2d").drawImage(canvas, 0, 0)
                // Mediauto.tempCanvas = c;

                if (Mediauto.dom.querySelector("#filtersDiv").style.display == 'block') {
                    Mediauto.dom.querySelector("#filtersDiv").style.display = 'none';
                }
                else {
                    Mediauto.dom.querySelector("#filtersDiv").style.display = 'block';
                }

                Mediauto.backToPreviousTool(prevTool);
            }
        };

        return tool;
    }())
};
