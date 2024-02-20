/*global Mediauto*/
/*global paper*/
const _auth_level = "SM"

export var ToolDeletePoint = {
  pointDelete: (function () {
    var tool = {

      /**
           * @function mouseDown
           * @param {object} point The point where you clicked (x,y)
           * @returns {void}
           */
      mouseDown: function mouseDown(point) {
        if (Mediauto.isLocked || _auth_level == "UO") {
          return;
        }

        var hitResult = paper.project.hitTest(point, {
          tolerance: Mediauto.tolerance,
          stroke: true,
          segments: true,
          fill: true,
          handles: true
        });
        Mediauto.newRegionFlag = false;

        if (hitResult) {
          if (hitResult.item.type == "SEG") {
            var i, re;
            for (i = 0; i < Mediauto.objInfo.regions.length; i += 1) {
              if (Mediauto.objInfo.regions[i].path === hitResult.item) {
                re = Mediauto.objInfo.regions[i];
                break;
              }
            }

            // select path
            if (Mediauto.region && Mediauto.region !== re) {
              Mediauto.region.path.selected = false;
              prevRegion = Mediauto.region;
            }
            Mediauto.selectRegion(re);

            if (!Mediauto.region.path.fullySelected) {
              if (Mediauto.latestStatus == 'progressing') {
                // toast.warning('Accepted object cannot be modified.');
              }
              return;
            }

            if (hitResult.type === 'segment') {
              hitResult.segment.remove();
              Mediauto.commitMouseUndo();
            }
          }
        } else if (Mediauto.region) {
          Mediauto.region.path.selected = false;
          Mediauto.region = null;
        }
        paper.view.draw();
      },

      /**
           * @function click
           * @desc add an additional point to the selected annotation
           * @param {string} prevTool The previous tool to which the selection goes back
           * @returns {void}
           */
      click: function click(prevTool) {
        if (Mediauto.isLocked) {
          return;
        }
        Mediauto.navEnabled = false;
        Mediauto.handle = null;
      }
    };


    return tool;
  }())
};
