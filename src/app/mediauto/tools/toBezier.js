/*global Mediauto*/
/*global paper*/

export var ToolToBezier = {
    toBezier: (function () {
        var tool = {

            /**
             * @function polygonToBezier
             * @desc converts polygon into bezier curve
             * @returns {void}
             */
            polygonToBezier: function polygonToBezier() {
                console.log("> polygonToBezier");
                if (Mediauto.region !== null) {
                    if (Mediauto.region.path.hasHandles()) {
                        return;
                    }
                    var undoInfo = Mediauto.getUndo();
                    Mediauto.region.path.smooth();
                    Mediauto.saveUndo(undoInfo);
                    paper.view.draw();
                }
            },

            /*
             * @function click
             * @desc Convert polygon path to bezier curve
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                tool.polygonToBezier();
                Mediauto.backToPreviousTool(prevTool);
            }
        };

        return tool;
    }())
};
