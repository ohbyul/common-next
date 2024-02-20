/*global Mediauto*/
/*global paper*/

export var ToolZoomOut = {
    zoomOut: (function () {
        var tool = {

            /**
             * @function click
             * @desc zoomOut. Openseadragon initialisation parameter binds the function.
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                if (Mediauto.viewer.viewport.getZoom() > Mediauto.viewer.viewport.getMinZoom()) {
                    Mediauto.viewer.viewport.zoomBy(1 / 1.5);
                }
                Mediauto.backToPreviousTool(prevTool);
            }
        }

        return tool;
    }())
}