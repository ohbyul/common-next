

export const ToolDrawLine = {
  drawLine: (function () {
    var tool = {

      /**
            * @function mouseDown
            * @param {object} point The point where you click (x,y)
            * @returns {void}
            */
      mouseDown: function mouseDown(point) {
        // if (Mediauto.isLocked || _auth_level == "UO") {
        //   return;
        // }

        if (Mediauto.region) {
          Mediauto.region.path.selected = false;
        }

        if (point.x < 0 || point.x > Mediauto.projectSize.x ||
          point.y < 0 || point.y > Mediauto.projectSize.y) {
          return;
        }

        // let selectedLabel = Mediauto.labelSelected.line;
        let selectedLabel = {
          "labelNo": "4913",
          "labelName": "LN_normal",
          "hex": "0x06e49c"
        };
        if (selectedLabel.labelNo == undefined) {
          // toast.warning('Need select a label.')
          return;
        }

        // var path = new paper.Path({ segments: [point] });
        var path = new paper.Path.Line(point, point);
        // const path = new paper.Path({segments:[point]});
        path.strokeWidth = Mediauto.config.defaultStrokeWidth;
        // Mediauto.region = Mediauto.newRegion({ path: path }, 1, true);
        Mediauto.region = Mediauto.newRegion({ path: path, labelNo: selectedLabel.labelNo, labelName: selectedLabel.labelName, hex: selectedLabel.hex }, 1, true);
        // Mediauto.region.labelNo = "LINE";
        // Mediauto.region.labelName = "LINE";
        // Mediauto.region.hex = "";
        Mediauto.region.path.type = "LINE";
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
        if (point.x < 0 || point.x > Mediauto.projectSize.x ||
          point.y < 0 || point.y > Mediauto.projectSize.y) {
          return;
        }

        if (Mediauto.region == null) {
          return;
        }

        Mediauto.region.path.segments[1].point.x = point.x;
        Mediauto.region.path.segments[1].point.y = point.y;
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
        // var segments = Mediauto.region.path.segments;
        // if (segments[0].point.x != segments[1].point.x && segments[0].point.y != segments[1].point.y) {
        Mediauto.region.path.closed = false;
        Mediauto.region.path.fullySelected = true;

        // to delete all unnecessary segments while preserving the form of the
        // region to make it modifiable; & adding handles to the segments
        var origSegments = Mediauto.region.path.segments.length;

        if (Mediauto.debug) {
          var finalSegments = Mediauto.region.path.segments.length;
          console.log(finalSegments, parseInt(finalSegments / origSegments * 100, 10) + "% segments conserved");
        }
        Mediauto.initText(Mediauto.region);
        // Mediauto.currentRegions();

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

// export default ToolDrawLine;
