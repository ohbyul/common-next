/*global Mediauto*/
/*global paper*/

export var ToolDrawMeasurement = {
  drawMeasurement: (function () {
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

        // var path = new paper.Path({ segments: [point] });
        var path = new paper.Path.Line(point, point);
        // const path = new paper.Path({segments:[point]});
        path.strokeWidth = Mediauto.config.defaultStrokeWidth;
        Mediauto.region = Mediauto.newMeasurement({ path: path, type: 'MEASUREMENT' }, 1, true);
        // Mediauto.region.labelNo = "LINE";
        // Mediauto.region.labelName = "LINE";
        Mediauto.region.labelNo = "MEASUREMENT";
        Mediauto.region.labelName = "MEASUREMENT";
        Mediauto.region.hex = "";
        Mediauto.region.path.type = "MEASUREMENT";
        Mediauto.region.path.fillColor.alpha = 0.1;
        Mediauto.region.text.content = '';

        // 거리측정시 선,원 2개를 그려야하여 Mediauto.region, Mediauto.regionCircle 동시에 컨트롤
        var path2 = new paper.Path.Circle(point, 0);
        Mediauto.regionCircle = Mediauto.newCircle({ path: path2, type: 'MEASUREMENT' }, 1, true);
        // Mediauto.commitMouseUndo();
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

        // x1,y1, x2,y2 mouse down시 같은값으로 2개 좌표를 찍고 drag시 x2, y2 좌표 이동
        // 처음 그릴때만 적용, 수정시 mouseDraghandler에서 좌표 이동 처리
        if (!Mediauto.region.path.closed) {
          Mediauto.region.path.segments[1].point.x = point.x;
          Mediauto.region.path.segments[1].point.y = point.y;
        }

        this.calcMeasurement(point);
      },

      calcMeasurement: function calcMeasurement(point) {
        let x1 = Mediauto.region.path.segments[0].point.x;
        let x2 = Mediauto.region.path.segments[1].point.x;

        let y1 = Mediauto.region.path.segments[0].point.y;
        let y2 = Mediauto.region.path.segments[1].point.y;

        let x = Math.abs(x1 - x2)
        let y = Math.abs(y1 - y2)

        let resultUm

        if (Mediauto.umPerImagePixelX == 0) {
          let imageSize = Mediauto.imageSize;
          let projectPixel = Mediauto.projectSize;

          x = x * imageSize.x / projectPixel.x;
          y = y * imageSize.y / projectPixel.y;
          resultUm = (Math.sqrt(x * x + y * y)).toFixed(0) + 'px';

          // let webPixel = paper.view.projectToView(new paper.Point(x, y));
          // resultUm = Math.sqrt(webPixel.x * webPixel.x + webPixel.y * webPixel.y) + 'px';
        }
        else {
          // 선 거리 계산 * 픽셀당 um 거리
          resultUm = Math.sqrt(x * x + y * y) * Mediauto.umPerProjectPixelX;

          if (resultUm < 1000) {
            resultUm = (resultUm).toFixed(2) + 'um';
          }
          else {
            resultUm = (resultUm / 1000).toFixed(2) + 'mm';
          }
        }


        Mediauto.region.text.content = resultUm;

        Mediauto.initText(Mediauto.region);
        Mediauto.region.text.position = Mediauto.region.path.position;

        // 원 컨트롤
        let px = (x1 + x2) * 0.5;
        let py = (y1 + y2) * 0.5;

        let rx = px - x1;
        let ry = py - y1;

        var path2 = new paper.Path.Circle(new paper.Point(px, py), Math.sqrt(rx * rx + ry * ry));
        Mediauto.regionCircle = Mediauto.newCircle({ path: path2, type: 'MEASUREMENT' }, 1, true);

        paper.view.draw();
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
        Mediauto.region.path.closed = true;
        Mediauto.region.path.fullySelected = true;

        var segments = Mediauto.region.path.segments;
        if (segments[0].point.x == segments[1].point.x && segments[0].point.y == segments[1].point.y) {
          Mediauto.region.text.remove();
          Mediauto.region.path.remove();
        }
        else {
          Mediauto.initText(Mediauto.region);
          Mediauto.currentRegions();
        }

        Mediauto.regionCircle.path.remove();
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
