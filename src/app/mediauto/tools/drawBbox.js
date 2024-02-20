/*global Mediauto*/
/*global paper*/
const _auth_level = ''
export var ToolDrawBbox = {
  drawBbox: (function () {
    var tool = {

      /**
            * @function mouseDown
            * @param {object} point The point where you click (x,y)
            * @returns {void}
            */
      mouseDown: function mouseDown(point) {
        if (Mediauto.isLocked || _auth_level == "UO") {
          return;
        }

        if (Mediauto.region) {
          Mediauto.region.path.selected = false;
        }

        if (point.x < 0 || point.x > Mediauto.projectSize.x ||
          point.y < 0 || point.y > Mediauto.projectSize.y) {
          return;
        }

        let selectedLabel = Mediauto.labelSelected.bbox;
        if (selectedLabel.labelNo == undefined) {
          // toast.warning('Need select a label.')
          return;
        }

        // var path = new paper.Path({ segments: [point] });
        // var path = new paper.Path.Rectangle(point, {x : point.x + 30, y: point.y + 30});
        var path = new paper.Path.Rectangle(point, point);
        path.strokeWidth = Mediauto.config.defaultStrokeWidth;
        // Mediauto.region = Mediauto.newRegion({ path: path }, 1, true);
        Mediauto.region = Mediauto.newRegion({ path: path, labelNo: selectedLabel.labelNo, labelName: selectedLabel.labelName, hex: selectedLabel.hex }, 1, true);
        // Mediauto.region.labelNo = "BBOX";
        // Mediauto.region.labelName = "BBOX";
        // Mediauto.region.hex = "";
        Mediauto.region.path.type = "BBOX";
        Mediauto.region.path.fillColor.alpha = 0.1;

        Mediauto.commitMouseUndo();
      },

      /**
             * @function mouseDrag
             * @param {object} point The point where you moved to (x,y)
             * @param {object} dpoint The movement of the point
             * @return {void}
            */
      mouseDrag: function mouseDrag(point) {
        // Mediauto.region.path.add(point);
        if (Mediauto.region == null) {
          return;
        }

        if (!Mediauto.region.path.fullySelected) {
          return;
        }

        let pointX = point.x;
        let pointY = point.y;

        if (point.x < 0) {
          pointX = 0;
        }
        if (point.x > Mediauto.projectSize.x) {
          pointX = Mediauto.projectSize.x;
        }
        if (point.y < 0) {
          pointY = 0;
        }
        if (point.y > Mediauto.projectSize.y) {
          pointY = Mediauto.projectSize.y;
        }

        let handle = Mediauto.handle

        if (handle == null) {
          Mediauto.region.path.segments[0].point.y = pointY;
          Mediauto.region.path.segments[2].point.x = pointX;
          Mediauto.region.path.segments[3].point.x = pointX;
          Mediauto.region.path.segments[3].point.y = pointY;
        }
        else {
          let segments = Mediauto.region.path.segments;

          switch (handle) {
            case segments[0].point: {
              Mediauto.region.path.segments[1].point.x = pointX;
              Mediauto.region.path.segments[3].point.y = pointY;
              Mediauto.region.path.segments[0].point.x = pointX;
              Mediauto.region.path.segments[0].point.y = pointY;
              break;
            }
            case segments[1].point: {
              Mediauto.region.path.segments[0].point.x = pointX;
              Mediauto.region.path.segments[2].point.y = pointY;
              Mediauto.region.path.segments[1].point.x = pointX;
              Mediauto.region.path.segments[1].point.y = pointY;
              break;
            }
            case segments[2].point: {
              Mediauto.region.path.segments[1].point.y = pointY;
              Mediauto.region.path.segments[3].point.x = pointX;
              Mediauto.region.path.segments[2].point.x = pointX;
              Mediauto.region.path.segments[2].point.y = pointY;
              break;
            }
            case segments[3].point: {
              Mediauto.region.path.segments[0].point.y = pointY;
              Mediauto.region.path.segments[2].point.x = pointX;
              Mediauto.region.path.segments[3].point.x = pointX;
              Mediauto.region.path.segments[3].point.y = pointY;
              break;
            }
          }
        }
      },

      /**
             * @function mouseUp
             * @returns {void}
             */
      mouseUp: function mouseUp(point) {

        // this handler may get called for multiple times in one drawing session
        if (!Mediauto.region) {
          return;
        }

        // do not keep paths with too little segments
        // if ((Mediauto.region.path.segments || []).length < Mediauto.tolerance) {
        //   Mediauto.removeRegion(Mediauto.region);
        //   paper.view.draw();

        //   return;
        // }

        // if (Mediauto.newRegionFlag === true) {
        Mediauto.region.path.closed = true;
        Mediauto.region.path.fullySelected = true;
        Mediauto.region.path.fillColor.alpha = Mediauto.config.defaultFillAlpha;

        // to delete all unnecessary segments while preserving the form of the
        // region to make it modifiable; & adding handles to the segments
        var origSegments = Mediauto.region.path.segments.length;

        if (Mediauto.debug) {
          var finalSegments = Mediauto.region.path.segments.length;
          console.log(finalSegments, parseInt(finalSegments / origSegments * 100, 10) + "% segments conserved");
        }

        Mediauto.initText(Mediauto.region);
        Mediauto.currentRegions();

        // }
        paper.view.draw();
      },

      /**
             * @function click
             * @desc Convert polygon path to bezier curve
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
      click: function click(prevTool) {
        Mediauto.navEnabled = false;
      }
    };

    return tool;
  }())
};
