/*global Mediauto*/
/*global paper*/

export var ToolZoomIn = {
    zoomIn: (function () {
        var tool = {

            /**
             * @function click
             * @desc zoomIn. Openseadragon initialisation parameter binds the function.
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                if (Mediauto.viewer.viewport.getZoom() < Mediauto.viewer.viewport.getMaxZoom()) {
                    Mediauto.viewer.viewport.zoomBy(1.5);
                }
                Mediauto.backToPreviousTool(prevTool);
            }
        }

        return tool;
    }())
}