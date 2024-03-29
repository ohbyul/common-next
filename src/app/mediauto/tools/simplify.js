/*global Mediauto*/
/*global paper*/

export var ToolSimplify = {
    simplify: (function () {
        var tool = {

            /**
             * @function click
             * @desc simplify. Simplify the selected path.
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                Mediauto.simplify(Mediauto.region);
                Mediauto.backToSelect();
            }
        };

        return tool;
    }())
};
