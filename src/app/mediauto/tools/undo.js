/*global Mediauto*/
/*global paper*/


export var ToolUndo = {
    undo: (function () {
        var tool = {

            /**
             * @function undo
             * @desc Command to perform an undo by button click.
             * @returns {void}
             */
            undo: function undo() {
                if (Mediauto.UndoStack.length > 0) {
                    var redoInfo = Mediauto.getUndo();
                    var undoInfo = Mediauto.UndoStack.pop();
                    Mediauto.applyUndo(undoInfo);
                    Mediauto.RedoStack.push(redoInfo);
                    paper.view.draw();
                }
            },

            /**
             * @function click
             * @desc Perform an undo
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                tool.undo();
                Mediauto.backToPreviousTool(prevTool);
                Mediauto.currentRegions();
            }
        };

        return tool;
    }())
};
