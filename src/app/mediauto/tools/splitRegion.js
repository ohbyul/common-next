/*global Mediauto*/
/*global paper*/

export var ToolSplitRegion = {
  splitRegion: (function () {
    var tool = {

      _findHitItem: function (point) {
        const hitResult = paper.project.hitTest(point, {
          tolerance: Mediauto.tolerance,
          stroke: true,
          segments: true,
          fill: true,
          handles: true
        });
        if (!hitResult) {

          return;
        }
        let re;
        for (let i = 0; i < Mediauto.objInfo.regions.length; i += 1) {
          if (Mediauto.objInfo.regions[i].path === hitResult.item) {
            re = Mediauto.objInfo.regions[i];
            break;
          }
        }

        return re;
      },

      _selectPathToSplit: function (item) {
        let prevRegion = null;
        if (Mediauto.region && Mediauto.region !== item) {
          Mediauto.region.path.selected = false;
          prevRegion = Mediauto.region;
        }
        Mediauto.selectRegion(item);

        return prevRegion;
      },

      /**
       * Remove region from data structure and paperjs
       * @param {object} region Region to remove
       * @returns {void}
       */
      _removeRegion(region) {
        Mediauto.removeRegion(region);
        Mediauto.region.path.remove();
      },

      _addRegionsFromNewPath(newPath, prevColor) {
        newPath.remove();
        Mediauto.region.path = newPath._children[0];
        for (let i = 1; i < newPath._children.length; i += 1) {
          const newReg = Mediauto.newRegion({
            name: Mediauto.region.name,
            path: newPath._children[i]
          });
          newReg.path.fillColor = prevColor;
        }
        paper.project.activeLayer.addChildren(newPath._children);
      },

      _updateDisplay() {
        Mediauto.selectRegion(Mediauto.region);
        paper.view.draw();
      },

      _splitRegion(point) {
        const hitItem = tool._findHitItem(point);
        if (!hitItem) {

          return;
        }

        /* selected region is prevRegion region is the region that should be split based on prevRegion
        newRegionPath is outlining that part of region which has not been overlaid by prevRegion
        i.e. newRegion is what was region and prevRegion color should go to the other part */
        const prevRegion = tool._selectPathToSplit(hitItem);
        if (!prevRegion) {

          return;
        }

        const { fillColor: prevColor } = prevRegion.path;
        const newPath = Mediauto.region.path.divide(prevRegion.path);

        tool._removeRegion(prevRegion);
        tool._addRegionsFromNewPath(newPath, prevColor);
      },

      /**
       * @function mouseDown
       * @param {object} point The point where you click (x,y)
       * @returns {void}
       */
      mouseDown: function mouseDown(point) {
        Mediauto.newRegionFlag = false;
        tool._splitRegion(point);
        tool._updateDisplay();
        Mediauto.commitMouseUndo();
        Mediauto.backToSelect();
      },

      /**
           * @function mouseUp
           * @returns {void}
           */
      mouseUp: function mouseUp() {
      },

      /*
           * @function click
           * @param {string} prevTool The previous tool to which the selection goes back
           * @returns {void}
           */
      click: function click(prevTool) {
      }
    };

    return tool;
  }())
};
