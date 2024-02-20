/*global Mediauto*/
/*global paper*/

export var ToolToPolygon = {
    toPolygon: (function () {
        var tool = {

            /**
             * @function bezierToPolygon
             * @desc Convert bezier curve into polygon path
             * @returns {void}
             */
            bezierToPolygon: function bezierToPolygon() {
                console.log("> bezierToPolygon");
                if (Mediauto.region !== null) {
                    if (Mediauto.region.path.hasHandles()) {
                        if (confirm('Convert bezier curve into polygon?')) {
                            var undoInfo = Mediauto.getUndo();
                            Mediauto.region.path.clearHandles();
                            Mediauto.saveUndo(undoInfo);
                        }
                    } else {
                        return;
                    }
                    paper.view.draw();
                }
            },

            /*
             * @function click
             * @desc Convert bezier curve into polygon path
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                tool.bezierToPolygon();
                Mediauto.backToPreviousTool(prevTool);
            }
        };

        return tool;
    }())
};
