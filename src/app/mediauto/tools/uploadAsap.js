/*global Mediauto*/
/*global paper*/


export var ToolUploadAsap = {
    uploadAsap: (function () {
        var tool = {
            /**
             * @function click
             * @desc Perform an undo
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {

                $($('#content')[0].shadowRoot.querySelector('#create-attach-file')).click();
                Mediauto.backToPreviousTool(prevTool);
                Mediauto.currentRegions();
            }
        };

        return tool;
    }())
};
