/*global Mediauto*/
export var ToolScreenshot = {
    screenshot: (function () {
        var tool = {

            /*
             * @function click
             * @desc Take a screenshot on click
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                Mediauto.viewer.screenshotInstance.toggleScreenshotMenu();
                Mediauto.backToPreviousTool(prevTool);
            }
        };

        return tool;
    }())
};
