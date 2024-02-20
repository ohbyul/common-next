/*global Mediauto*/
/*global paper*/


export var ToolRedo = {
    redo: (function () {
        var tool = {

            /**
             * @function redo
             * @desc Command to perform a redo by button click.
             * @returns {void}
             */
            redo: function redo() {
                if (Mediauto.RedoStack.length > 0) {
                    var undoInfo = Mediauto.getUndo();
                    var redoInfo = Mediauto.RedoStack.pop();
                    Mediauto.applyUndo(redoInfo);
                    Mediauto.UndoStack.push(undoInfo);
                    paper.view.draw();
                }
            },

            /**
             * @function click
             * @desc Perform a redo
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                tool.redo();
                Mediauto.backToPreviousTool(prevTool);
                Mediauto.currentRegions();
            }
        };

        return tool;
    }())
};
