/*global Mediauto*/
/*global paper*/

// var ToolSubtractRegion = { drawRegionSub : (function(){
//     var tool = {

//         /**
//          * @function mouseDown
//          * @param {object} point The point where you clicked (x,y)
//          * @returns {void}
//          */
//         mouseDown : function mouseDown(point) {
//             var prevRegion = null
//             var hitResult = paper.project.hitTest(point, {
//                 tolerance : Mediauto.tolerance,
//                 stroke : true,
//                 segments : true,
//                 fill : true,
//                 handles : true
//             })
//             Mediauto.newRegionFlag = false;

//             if( hitResult ) {
//                 var re = Mediauto.objInfo.regions.find(region=>region.path === hitResult.item)

//                 // select path
//                 if( Mediauto.region && Mediauto.region !== re ) {
//                     Mediauto.region.path.selected = false;
//                     prevRegion = Mediauto.region;
//                 }
//                 Mediauto.selectRegion(re);

//                 if( prevRegion ) {
//                     var newPath = Mediauto.region.path.subtract(prevRegion.path);
//                     Mediauto.removeRegion(prevRegion);
//                     Mediauto.region.path.remove();
//                     Mediauto.region.path = newPath;
//                     // Mediauto.updateRegionList();
//                     Mediauto.selectRegion(Mediauto.region);
//                     paper.view.draw();
//                     Mediauto.commitMouseUndo();
//                     Mediauto.backToSelect();
//                 }
//             } else {
//                 if( Mediauto.region ){
//                     Mediauto.region.path.selected = false
//                     Mediauto.region = null
//                 };
//             };
//             paper.view.draw();
//         },

//         /**
//          * @function click
//          * @desc add an additional point to the selected annotation
//          * @param {string} prevTool The previous tool to which the selection goes back
//          * @returns {void}
//          */
//         click : function click(prevTool) {
//             Mediauto.navEnabled = false;
//             Mediauto.handle = null;
//         }
//     }

//     return tool;
// }())}

export var ToolRegionSub = {
  regionSub: (function () {
    var tool = {

      /**
       * @function mouseDown
       * @param {object} point The point where you clicked (x,y)
       * @returns {void}
       */
      mouseDown: function mouseDown(point) {
        // is already drawing a polygon or not?

        if (Mediauto.drawingPolygonFlag === false) {
          Mediauto.prevRegion = Mediauto.region;

          // deselect previously selected region
          if (Mediauto.region) { Mediauto.region.path.selected = false; }

          // Start a new Region with alpha 0
          const path = new paper.Path({ segments: [point] });
          path.strokeWidth = Mediauto.config.defaultStrokeWidth;
          Mediauto.region = Mediauto.newRegion({ path: path, uid: 'regionTemp', name: 'regionTemp' }, 1, true);
          Mediauto.region.path.type = "SEG";
          Mediauto.region.path.fillColor.alpha = 0.1;
          Mediauto.region.path.selected = true;

          // drawingPolygonFlag = true;
          Mediauto.drawingPolygonFlag = true;

        } else {
          // test if user is closing the polygon
          // 폴리곤 첫 점의 X,Y
          let firstX = Mediauto.region.path.segments[0].point._x;
          let firstY = Mediauto.region.path.segments[0].point._y;

          let distX = Math.abs(point.x - firstX)
          let distY = Math.abs(point.y - firstY)

          // 줌 값에 따라 간격 기준 조정
          let zoom = Mediauto.viewer.viewport.zoomSpring.target.value;

          // 첫 점 클릭 완료 판정 늘리기
          // 타겟 X, Y와 첫 점의 X, Y 거리 차이 비교하여 조건 충족시 아래 hitTest true 되도록 point 값 수정
          if (distX + distY < (5 / zoom)) {
            point.x = firstX;
            point.y = firstY;
          }

          const hitResult = paper.project.hitTest(point, { tolerance: Mediauto.tolerance, segments: true });
          if (hitResult
            && hitResult.item === Mediauto.region.path
            && hitResult.segment.point === Mediauto.region.path.segments[0].point) {
            // clicked on first point of current path
            // --> close path and remove drawing flag
            finishDrawingRegionSub(true);
          } else {
            // add point to region
            Mediauto.region.path.add(point);
          }
        }
      },

      mouseDrag: function mouseDrag(point, dpoint) {
        if (Mediauto.drawingPolygonFlag) {
          // if (point.x < 0 || point.x > Mediauto.projectSize.x || 
          //   point.y < 0 || point.y > Mediauto.projectSize.y) {
          //   return;
          // }

          // const hitResult = paper.project.hitTest(point, {tolerance:Mediauto.tolerance, fill:true});
          // if( !hitResult || hitResult?.item != Mediauto.prevRegion.path) {
          //   Mediauto.regionFlag = true;
          // }
          // else {
          //   Mediauto.regionFlag = false;
          // }

          let path = Mediauto.region.path._segments;

          let firstX = path[0].point._x;
          let firstY = path[0].point._y;

          let distX = Math.abs(point.x - firstX)
          let distY = Math.abs(point.y - firstY)

          // 줌 값에 따라 간격 기준 조정
          let zoom = Mediauto.viewer.viewport.zoomSpring.target.value;

          // 드래그 하여 첫점 근처 도달시 드로잉 종료
          if (distX + distY < (5 / zoom) && path.length > 1) {
            // drawingPolygonFlag = false로 변경됨
            // finishDrawingRegionSub(true);
          }

          let pathLen = path['length'];
          let lastPoint = path[pathLen - 1]._point;

          // 마우스 포인터와 폴리곤에서 마지막에 찍힌 점의 X, Y 거리 비교
          distX = Math.abs(point.x - lastPoint._x)
          distY = Math.abs(point.y - lastPoint._y)

          // 드래그시 일정 간격마다 포인트 추가
          if (distX + distY > (15 / zoom)) {
            Mediauto.region.path.add(point);
          }

        }
      },

      mouseUp: function mouseUp(point, dpoint) {
        if (Mediauto.prevRegion.path.type?.includes('COMMENT')) {
          this.finishDrawingRegion(false)
        }
        else {
          let hitResult;
          for (var reg of Mediauto.objInfo.regions) {
            if (reg != Mediauto.region) {
              hitResult = reg.path.hitTest(point, { tolerance: 0, stroke: false, fill: true });
              if (reg == Mediauto.prevRegion && hitResult) {
                break;
              }
            }
          }

          if (!hitResult || hitResult?.item != Mediauto.prevRegion.path) {
            // clicked on first point of current path
            // --> close path and remove drawing flag
            Mediauto.region.path.add(point);
            this.finishDrawingRegion(true);
          }
          else {
            this.finishDrawingRegion(false);
          }
        }

      },

      /**
       * @function click
       * @desc add an additional point to the selected annotation
       * @param {string} prevTool The previous tool to which the selection goes back
       * @returns {void}
       */
      click: function click(prevTool) {
        Mediauto.navEnabled = false;
        Mediauto.handle = null;
      },

      /**
       * @function finishDrawingPolygon
       * @description cleanup finishing drawing polygon
       * @param {bool} closed True if the polygon has to be closed
       * @returns {void}
       */
      finishDrawingRegion: function finishDrawingRegion(closed) {
        // finished the drawing of the polygon
        if (closed) {
          if (Mediauto.prevRegion) {
            Mediauto.region.path.closed = true;
            var newPath = Mediauto.prevRegion.path.subtract(Mediauto.region.path);

            if (newPath.children || newPath.segments.length == 0) {
              newPath.remove()
            }
            else {
              newPath.type = Mediauto.prevRegion.path.type;
              Mediauto.prevRegion.path.remove();
              Mediauto.prevRegion.path = newPath;
              Mediauto.commitMouseUndo();
            }
            paper.view.draw();
          }
        }

        Mediauto.removeRegion(Mediauto.region);
        Mediauto.selectRegion(Mediauto.prevRegion);
        Mediauto.drawingPolygonFlag = false;
        Mediauto.currentRegions();
        Mediauto.selectedTool = Mediauto.prevTool;

        // if( closed ) {
        //   if( Mediauto.prevRegion ) {
        //     Mediauto.region.path.closed = true;
        //     var newPath = Mediauto.prevRegion.path.subtract(Mediauto.region.path);

        //     if (newPath.children || newPath.segments.length == 0) {
        //       let regionTemp = Mediauto.region;
        //       let children = [...newPath.children];
        //       let childPath;
        //       let childObject;

        //       for (let index in children) {
        //         childPath = new paper.Path({segments:children[index].segments, closed: true});
        //         children[index].remove();
        //         childObject = Mediauto.newRegion({
        //           labelNo: Mediauto.prevRegion.labelNo,
        //           labelName: Mediauto.prevRegion.labelName,
        //           hex: Mediauto.prevRegion.hex,
        //           annoSeq: Mediauto.annoSeq,
        //           uid: 'temp' + Mediauto.annoSeq,
        //           path: childPath
        //         });

        //         childObject.path.type = Mediauto.prevRegion.path.type;
        //       }



        //       Mediauto.removeRegion(Mediauto.prevRegion);
        //       Mediauto.prevRegion = childObject;
        //       Mediauto.region = regionTemp;
        //       // newPath.remove();
        //       Mediauto.commitMouseUndo();
        //     }
        //     else {
        //       newPath.type = Mediauto.prevRegion.path.type;
        //       Mediauto.prevRegion.path.remove();
        //       Mediauto.prevRegion.path = newPath;
        //       Mediauto.commitMouseUndo();
        //     }
        //     paper.view.draw();
        //   }
        // } 

        // Mediauto.removeRegion(Mediauto.region);
        // Mediauto.selectRegion(Mediauto.prevRegion);
        // Mediauto.drawingPolygonFlag = false;
        // Mediauto.currentRegions();
        // Mediauto.selectedTool = Mediauto.prevTool;
      },
    };
    return tool;
  }())
}

