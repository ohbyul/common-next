/*global Mediauto*/
/*global paper*/

export var ToolDrawComment = {
  drawComment: (function () {
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
        // if (point.x < 0 || point.x > Mediauto.projectSize.x || 
        //   point.y < 0 || point.y > Mediauto.projectSize.y) {
        //   return;
        // }

        Mediauto.objComment = null;
        // 첫 클릭시 첫점을 handleFrom
        // 마우스 드래그시 좌표를 handle
        var path = new paper.Path.Circle(point, 1);
        Mediauto.handleFrom = point;
        Mediauto.handleFrom.point = point;
        path.type = 'COMMENTAREA'
        Mediauto.region = Mediauto.newCommentArea({ path: path }, 1, true);
        Mediauto.regionCircle = Mediauto.region;
      },

      /**
       * @function mouseDrag
       * @param {object} point The point where you moved to (x,y)
       * @param {object} dpoint The movement of the point
       * @return {void}
      */
      mouseDrag: function mouseDrag(point) {
        // Mediauto.region.path.add(point);
        // if (point.x < 0 || point.x > Mediauto.projectSize.x || 
        //   point.y < 0 || point.y > Mediauto.projectSize.y) {
        //   return;
        // }

        if (Mediauto.region == null) {
          return;
        }

        let type;
        switch (Mediauto.region?.path.type) {
          case 'COMMENTAREA': type = 'area'; break;
          case 'COMMENTBOX': type = 'box'; break;
          case 'COMMENTLINE': type = 'line'; return;
        }

        if (type == 'area') {
          Mediauto.handleTo = point;
          Mediauto.handleTo.point = point;

          this.calcCircle(point);
        }

        else if (type == 'box') {
          this.calcBox(point);
        }
      },

      calcCircle: function calcCircle(point) {
        let handleFrom = Mediauto.handleFrom;
        let handleTo = Mediauto.handleTo

        let x2 = handleTo.point.x;
        let x1 = handleFrom.point.x;
        let y2 = handleTo.point.y;
        let y1 = handleFrom.point.y;

        // 원 컨트롤
        let px = (x1 + x2) * 0.5;
        let py = (y1 + y2) * 0.5;

        let rx = px - x1;
        let ry = py - y1;

        var tempPath = new paper.Path.Circle(new paper.Point(px, py), Math.sqrt(rx * rx + ry * ry));
        tempPath.uid = Mediauto.region.uid;
        tempPath.type = 'COMMENTAREA';
        tempPath.fillColor = Mediauto.color.commentArea;
        Mediauto.regionCircle = Mediauto.newCircle({ path: tempPath }, 1, true);
        Mediauto.initText(Mediauto.regionCircle);

        // Mediauto.regionCircle.text.position = Mediauto.regionCircle.path.position;

        paper.view.draw();
      },

      calcBox: function calcBox(point) {
        // Mediauto.region.path.add(point);
        if (Mediauto.region == null) {
          return;
        }

        if (!Mediauto.region.path.fullySelected) {
          return;
        }

        let pointX = point.x;
        let pointY = point.y;
        let handle = Mediauto.handle

        if (handle == null) {
          // Mediauto.region.path.segments[0].point.y = pointY;
          // Mediauto.region.path.segments[2].point.x = pointX;
          // Mediauto.region.path.segments[3].point.x = pointX;
          // Mediauto.region.path.segments[3].point.y = pointY;
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

        let commentArea;
        let commentBox;
        let commentLine;

        if (Mediauto.region.path.type == 'COMMENTAREA') {
          Mediauto.region.path = Mediauto.regionCircle?.path;

          Mediauto.region.path.fillColor = Mediauto.color.commentArea;
          commentArea = Mediauto.region;
        }
        else {
          commentArea = Mediauto.objComment.area;
        }



        // push the new region to the Regions array
        var circleTopPoint = commentArea.path.segments[1].point;
        var circleRightPoint = commentArea.path.segments[2].point;

        var boxStartX;
        var boxStartY;
        var boxEndX;
        var boxEndY;

        if (Mediauto.objComment) {
          commentBox = Mediauto.objComment['box']

          let pointMinMax = Mediauto.calcPointMinMax(commentBox.path.segments)
          var newPath = new paper.Path.Rectangle(new paper.Point(pointMinMax.minX, pointMinMax.minY), new paper.Point(pointMinMax.maxX, pointMinMax.maxY));
          newPath.strokeWidth = Mediauto.config.defaultStrokeWidth;

          commentBox.path.segments = newPath.segments
          newPath.remove();
          // Mediauto.objComment.line.path.remove();

          boxStartX = commentBox.path.segments[0].point.x;
          boxStartY = commentBox.path.segments[0].point.y;
          boxEndY = commentBox.path.segments[1].point.y;
        }
        else {
          boxStartX = circleTopPoint.x + circleRightPoint.x - circleTopPoint.x + 20;
          boxStartY = circleTopPoint.y;
          boxEndX = boxStartX + 100;
          boxEndY = circleTopPoint.y + 50;

          var boxStartPoint = new paper.Point(boxStartX, boxStartY)
          var boxEndPoint = new paper.Point(boxEndX, boxEndY)

          var path = new paper.Path.Rectangle(boxStartPoint, boxEndPoint);
          path.strokeWidth = Mediauto.config.defaultStrokeWidth;
          commentBox = Mediauto.newCommentBox({ path: path }, 1, '');
          // commentBox.path.type = "COMMENTBOX";
          // commentBox.path.fillColor.alpha = 0.1;
        }


        var lineStartPoint = circleRightPoint;
        var lineEndY = (boxStartY + boxEndY) / 2;
        var lineEndPoint = new paper.Point(boxStartX, lineEndY);

        var path = new paper.Path.Line(lineStartPoint, lineEndPoint);
        // const path = new paper.Path({segments:[point]});
        path.strokeWidth = Mediauto.config.defaultStrokeWidth;
        commentLine = Mediauto.newCommentLine(commentArea, commentBox, { path: path }, 1, true);
        // commentLine = Mediauto.newCommentLine({ path: path }, 1, true);
        // commentLine.path.type = "COMMENTLINE";
        // commentLine.path.fillColor.alpha = 0.1;

        if (Mediauto.objComment) {
          // Mediauto.objComment.area = Mediauto.region;
          // Mediauto.objComment.box.path.remove();
          // Mediauto.objComment.box.path = commentBox.path;
          Mediauto.objComment.line.path.remove();
          Mediauto.objComment.line.path = commentLine.path;
        }
        else {
          Mediauto.ImageInfo[Mediauto.currentImage].Comments.push({ uid: `tempCOMMENT${Mediauto.commentSeq}`, name: `Comment${Mediauto.commentSeq}`, area: commentArea, box: commentBox, line: commentLine });
          Mediauto.commentSeq += 1;
        }

        Mediauto.region.path.closed = true;
        Mediauto.region.text.position = Mediauto.region.path.position;

        Mediauto.selectComment(Mediauto.region);

        // to delete all unnecessary segments while preserving the form of the
        // region to make it modifiable; & adding handles to the segments
        var origSegments = Mediauto.region.path.segments.length;

        if (Mediauto.debug) {
          var finalSegments = Mediauto.region.path.segments.length;
          console.log(finalSegments, parseInt(finalSegments / origSegments * 100, 10) + "% segments conserved");
        }
        // Mediauto.initText(Mediauto.region);
        if (Mediauto.region.path.type == "COMMENTAREA") Mediauto.initText(Mediauto.region);
        Mediauto.currentRegions();
        Mediauto.regionCircle = null;
        Mediauto.resizeCommentBox();
        Mediauto.dbCommentSave();
        // Mediauto.regionCircle.path.remove();
        // }

        if (Mediauto.selectedTool == 'drawComment') {
          Mediauto.prevTool = 'select';
          Mediauto.selectedTool = 'select';
          Mediauto.selectTool();
        }


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
