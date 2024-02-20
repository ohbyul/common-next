/*global Mediauto*/
/*global paper*/

export var ToolRotate = {
    rotate: (function () {
        var tool = {

            /**
             * @function mouseDrag
             * @param {object} point The point where you moved to (x,y)
             * @param {object} dpoint The movement of the point
             * @return {void}
             */
            mouseDrag: function mouseDrag(point, dpoint) {
                event.stopHandlers = true;

                if (!Mediauto.region.path.fullySelected || Mediauto.region.path.type.includes('COMMENT')) {
                    return;
                }

                var movePoint = Math.abs(dpoint.x) + Math.abs(dpoint.y);
                var position = Mediauto.region.path.position

                if ((dpoint.x <= 0 && dpoint.y >= 0) && (point.x < position.x && point.y < position.y) ||
                    (dpoint.x >= 0 && dpoint.y >= 0) && (point.x < position.x && point.y > position.y) ||
                    (dpoint.x >= 0 && dpoint.y <= 0) && (point.x > position.x && point.y > position.y) ||
                    (dpoint.x <= 0 && dpoint.y <= 0) && (point.x > position.x && point.y < position.y)) {
                    movePoint = movePoint * -1;
                }

                var degree = parseInt(movePoint, 10) / 2;
                // for( i in Mediauto.objInfo.regions ) {
                //     if( Mediauto.objInfo.regions[i].path.selected ) {
                //         Mediauto.objInfo.regions[i].path.rotate(degree, Mediauto.region.origin);
                //         Mediauto.commitMouseUndo();
                //     }
                // }

                if (Mediauto.region !== null) {
                    Mediauto.region.path.rotate(degree, Mediauto.region.origin);

                    if (Mediauto.region.path.type == 'MEASUREMENT') {
                        Mediauto.tools['drawMeasurement'].calcMeasurement();
                    }
                    else {
                        Mediauto.commitMouseUndo();
                    }
                }
            },

            /**
             * @function mouseDown
             * @param {object} point The point where you clicked (x,y), will be the centre of rotation
             * @returns {void}
             */
            mouseDown: function mouseDown(point) {
                Mediauto.tools['select'].mouseDown(point);

                var point = {
                    x: Mediauto.region.path.handleBounds.x + (Mediauto.region.path.handleBounds.width / 2),
                    y: Mediauto.region.path.handleBounds.y + (Mediauto.region.path.handleBounds.height / 2)
                };
                Mediauto.region.origin = point;
            },

            /**
             * @function click
             * @desc rotate the selected annotation
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                Mediauto.navEnabled = false;
                Mediauto.handle = null;
            },

            mouseUp: function mouseUp(point, dpoint) {
                // event.stopHandlers = true;

                var reg = Mediauto.region;
                // annotation이 이미지 범위를 넘을경우 값 조정
                // for( var reg of Mediauto.objInfo.regions ) {\
                if (reg !== null) {
                    if (reg.path.selected) {
                        for (var seg of reg.path.segments) {
                            var pointX = seg.point.x;
                            var pointY = seg.point.y;

                            if (pointX < 0) {
                                seg.point.x = 0;
                            }
                            if (pointX > Mediauto.projectSize.x) {
                                seg.point.x = Mediauto.projectSize.x;
                            }
                            if (pointY < 0) {
                                seg.point.y = 0;
                            }
                            if (pointY > Mediauto.projectSize.y) {
                                seg.point.y = Mediauto.projectSize.y;
                            }
                        }
                        reg.text.position = reg.path.position;
                        // Mediauto.commitMouseUndo();

                        if (reg.path.type == 'MEASUREMENT') {
                            Mediauto.tools['drawMeasurement'].calcMeasurement();
                            Mediauto.regionCircle.path.remove();
                            paper.view.draw();
                        }
                    }
                }
                Mediauto.selectedTool = Mediauto.prevTool;
                // }
            },
        }

        return tool;
    }())
}