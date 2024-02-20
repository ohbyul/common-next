/*global Mediauto*/
/*global paper*/


// var ToolSelect = {select: (function() {
//     var tool = {

//         /**
//          * @function mouseDrag
//          * @param {object} point The point where you moved to (x,y)
//          * @param {object} dpoint The movement of the point
//          * @return {void}
//         */
//         mouseDrag: function mouseDrag(point,dpoint) {
//             // event.stopHandlers = true;
//             if (!Mediauto.region?.path.fullySelected && !Mediauto.region?.path.type.includes('COMMENT')) {
//                 return;
//             }

//             var reg = Mediauto.region
//             // for( var reg of Mediauto.objInfo[Mediauto.currentImage].Regions ) {
//             if (reg !== null) {
//                 if( reg.path.selected ) {
//                     reg.path.position.x += dpoint.x;
//                     reg.path.position.y += dpoint.y;
//                     reg.text.position.x += dpoint.x;
//                     reg.text.position.y += dpoint.y;

//                     if (reg.path.type == 'MEASUREMENT') {
//                         Mediauto.tools['drawMeasurement'].calcMeasurement();
//                     }
//                     else {
//                         Mediauto.commitMouseUndo();
//                     }
//                 }
//             }

//             // }
//         },

//         /**
//          * @function mouseDown
//          * @param {object} point The point where you click (x,y)
//          * @returns {void}
//          */
//         mouseDown: function mouseDown(point) {
//             Mediauto.mouseUndo = Mediauto.getUndo();
//             var prevRegion = null;
//             var hitResult;

//             Mediauto.handle = null;
//             Mediauto.objComment = null;

//             hitResult = paper.project.hitTest(point, {
//                 tolerance: Mediauto.tolerance,
//                 stroke: true,
//                 segments: true,
//                 fill: true,
//                 handles: true
//             });

//             if (hitResult) {
//                 hitResult.item.type == 'COMMENTLINE' ? hitResult = null : hitResult.item.type;
//             }


//             var i = 0;
//             var reg;
//             var arrays = [];
//             Mediauto.newRegionFlag === false;
//             if( hitResult ) {
//                 //var i, re;
//                 // for( i = 0; i < Mediauto.objInfo[Mediauto.currentImage].Regions.length; i += 1 ) {
//                 //     if (hitResult.item.className == "PointText") {
//                 //         if (Mediauto.objInfo[Mediauto.currentImage].Regions[i].name === hitResult.item.name) {
//                 //             reg = Mediauto.objInfo[Mediauto.currentImage].Regions[i];
//                 //         }
//                 //     }

//                 //     else {
//                 //         if( Mediauto.objInfo[Mediauto.currentImage].Regions[i].path === hitResult.item ) {
//                 //             reg = Mediauto.objInfo[Mediauto.currentImage].Regions[i];
//                 //         }
//                 //     }
//                 // }

//                 // 글자 클릭시 className, name으로 비교
//                 if (hitResult.item.className == "PointText") {
//                     if (hitResult.item.name.includes('MEASUREMENT')) {
//                         arrays = Mediauto.objInfo[Mediauto.currentImage].Measurements;
//                     }
//                     else if (hitResult.item.name.includes('COMMENT')) {
//                         arrays = Mediauto.objInfo[Mediauto.currentImage].Comments;
//                     }
//                     else {
//                         arrays = Mediauto.objInfo[Mediauto.currentImage].Regions;
//                     }

//                     for( i = 0; i < arrays.length; i += 1 ) {
//                         if (arrays[i].name === hitResult.item.name) {
//                             reg = arrays[i];
//                         }
//                     }
//                 }

//                 // object 클릭시 item.type, path로 비교
//                 else {
//                     if (hitResult.item.type?.includes('COMMENT')) {
//                         arrays = Mediauto.objInfo[Mediauto.currentImage].Comments;

//                         let type;
//                         switch(hitResult.item.type) {
//                             case 'COMMENTAREA' : type = 'area'; break;
//                             case 'COMMENTBOX' : type = 'box'; break;
//                             case 'COMMENTLINE' : type = 'line'; break;
//                         }

//                         for( i = 0; i < arrays.length; i += 1 ) {
//                             if (arrays[i][type].path === hitResult.item) {
//                                 reg = arrays[i][type];
//                                 Mediauto.objComment = arrays[i];
//                             }
//                         }
//                     }

//                     else {
//                         if (hitResult.item.type?.includes('MEASUREMENT')) {
//                             arrays = Mediauto.objInfo[Mediauto.currentImage].Measurements;
//                         }

//                         else {
//                             arrays = Mediauto.objInfo[Mediauto.currentImage].Regions;
//                         }

//                         for( i = 0; i < arrays.length; i += 1 ) {
//                             if (arrays[i].path === hitResult.item) {
//                                 reg = arrays[i];
//                             }
//                         }
//                     }

//                 }

//                 // select path
//                 if( Mediauto.region && Mediauto.region != reg ) {
//                     Mediauto.region.path.selected = false;
//                     prevRegion = Mediauto.region;
//                 }

//                 if (reg.path.type?.includes('MEASUREMENT')) {
//                     Mediauto.selectMeasurement(reg);
//                     Mediauto.selectComment(null);
//                     Mediauto.selectRegion(null);
//                 }
//                 else if (reg.path.type?.includes('COMMENT')) {
//                     Mediauto.selectMeasurement(null);
//                     Mediauto.selectComment(reg);
//                     Mediauto.selectRegion(null);
//                 }
//                 else {
//                     Mediauto.selectMeasurement(null);
//                     Mediauto.selectComment(null);
//                     Mediauto.selectRegion(reg);
//                 }

//                 Mediauto.currentRegions();

//                 if (!Mediauto.region.path.fullySelected && !Mediauto.region.path.type?.includes('COMMENT')) {
//                     if (Mediauto.latestStatus == 'progressing') {
//                         // toast.warning('Accepted object cannot be modified.');
//                     }
//                 }
//                 // $("#labelName").val(re.labelNo).trigger('change');

//                 if( hitResult.type == 'handle-in' ) {
//                     Mediauto.handle = hitResult.segment.handleIn;
//                     Mediauto.handle.point = point;
//                 } else if( hitResult.type == 'handle-out' ) {
//                     Mediauto.handle = hitResult.segment.handleOut;
//                     Mediauto.handle.point = point;
//                 } else if( hitResult.type == 'segment') {
//                     Mediauto.handle = hitResult.segment.point;
//                     Mediauto.handle.point = point;

//                     if (Mediauto.region.path.type == 'COMMENTAREA') {
//                         let segments = Mediauto.region.path.segments

//                         switch (hitResult.segment.point) {
//                             case segments[0].point : {
//                               Mediauto.handleFrom = segments[2];
//                               break;
//                             }
//                             case segments[1].point : {
//                                 Mediauto.handleFrom = segments[3];
//                               break;
//                             }
//                             case segments[2].point : {
//                                 Mediauto.handleFrom = segments[0];
//                               break;
//                             }
//                             case segments[3].point : {
//                                 Mediauto.handleFrom = segments[1];
//                               break;
//                             }
//                           }
//                     }
//                 } else if( hitResult.type == 'bounds') {
//                     // Mediauto.handle = hitResult.item.bounds[hitResult.name];
//                     // snake to camel
//                     var targetBound = hitResult.name.toLowerCase().replace(/[-_][a-z]/g, (group) => group.slice(-1).toUpperCase());
//                     Mediauto.handle = hitResult.item.bounds[targetBound];
//                     Mediauto.handle.point = hitResult.item.bounds[targetBound];
//                 }
//             }

//             if( hitResult == null && Mediauto.region ) {
//                 //deselect paths
//                 Mediauto.region.path.selected = false;
//                 Mediauto.region = null;
//             }

//             Mediauto.objectListPopup();

//             paper.view.draw();

//             return hitResult;
//         },


//         mouseUp: function mouseUp(point,dpoint) {
//             // event.stopHandlers = true;

//             var reg = Mediauto.region
//             // annotation이 이미지 범위를 넘을경우 값 조정
//             // for( var reg of Mediauto.objInfo[Mediauto.currentImage].Regions ) {
//             if (reg !== null) {
//                 if (reg.path.type.includes("COMMENT")) {
//                     if (reg.path.type == "COMMENTAREA") {
//                         Mediauto.region = Mediauto.regionCircle;
//                     }
//                     Mediauto.tools['drawComment'].mouseUp();

//                     return;
//                 }


//                 if( reg.path.selected ) {
//                     for( var seg of reg.path.segments ) {
//                         var pointX = seg.point.x;
//                         var pointY = seg.point.y;

//                         if (pointX < 0) {
//                             seg.point.x = 0;
//                         }
//                         if (pointX > Mediauto.projectSize.x) {
//                             seg.point.x = Mediauto.projectSize.x;
//                         }
//                         if (pointY < 0) {
//                             seg.point.y = 0;
//                         } 
//                         if (pointY > Mediauto.projectSize.y) {
//                             seg.point.y = Mediauto.projectSize.y;
//                         }
//                     }

//                     reg.text.position = reg.path.position;
//                     Mediauto.calcRegArea(reg)
//                     // Mediauto.commitMouseUndo();

//                     if (reg.path.type == "MEASUREMENT") {
//                         Mediauto.tools['drawMeasurement'].calcMeasurement();
//                         Mediauto.regionCircle.path.remove();
//                         paper.view.draw();
//                     }
//                 }
//             }

//             Mediauto.selectedTool = Mediauto.prevTool;

//             // }

//             // if (Mediauto.region.path.type == "MEASUREMENT") {
//             //     Mediauto.tools["drawMeasurement"].mouseUp(point);
//             // }


//         },


//         /*
//          * @function click
//          * @desc Convert polygon path to bezier curve
//          * @param {string} prevTool The previous tool to which the selection goes back
//          * @returns {void}
//          */
//         click: function click(prevTool) {
//             Mediauto.navEnabled = false;
//             Mediauto.handle = null;
//             Mediauto.handleFrom = null;
//         }
//     };

//     return tool;
// }())};

export var ToolSelect = {
    select: (function () {
        var tool = {

            /**
             * @function mouseDrag
             * @param {object} point The point where you moved to (x,y)
             * @param {object} dpoint The movement of the point
             * @return {void}
            */
            mouseDrag: function mouseDrag(point, dpoint) {
                // event.stopHandlers = true;
                if (!Mediauto.region?.path.fullySelected && !Mediauto.region?.path.type.includes('COMMENT')) {
                    return;
                }

                var reg = Mediauto.region
                // for( var reg of Mediauto.objInfo[Mediauto.currentImage].Regions ) {
                if (reg !== null) {
                    if (reg.path.selected) {
                        reg.path.position.x += dpoint.x;
                        reg.path.position.y += dpoint.y;
                        reg.text.position.x += dpoint.x;
                        reg.text.position.y += dpoint.y;

                        if (reg.path.type == 'MEASUREMENT') {
                            Mediauto.tools['drawMeasurement'].calcMeasurement();
                        }
                        else {
                            Mediauto.commitMouseUndo();
                        }
                    }
                }

                // }
            },

            /**
             * @function mouseDown
             * @param {object} point The point where you click (x,y)
             * @returns {void}
             */
            mouseDown: function mouseDown(point) {
                Mediauto.mouseUndo = Mediauto.getUndo();
                var prevRegion = null;
                var hitResult;

                Mediauto.handle = null;
                Mediauto.objComment = null;

                hitResult = paper.project.hitTest(point, {
                    tolerance: Mediauto.tolerance,
                    stroke: true,
                    segments: true,
                    fill: true,
                    handles: true
                });

                if (hitResult) {
                    hitResult.item.type == 'COMMENTLINE' ? hitResult = null : hitResult.item.type;
                }


                var i = 0;
                var reg;
                var arrays = [];
                Mediauto.newRegionFlag === false;
                if (hitResult) {
                    //var i, re;
                    // for( i = 0; i < Mediauto.objInfo[Mediauto.currentImage].Regions.length; i += 1 ) {
                    //     if (hitResult.item.className == "PointText") {
                    //         if (Mediauto.objInfo[Mediauto.currentImage].Regions[i].name === hitResult.item.name) {
                    //             reg = Mediauto.objInfo[Mediauto.currentImage].Regions[i];
                    //         }
                    //     }

                    //     else {
                    //         if( Mediauto.objInfo[Mediauto.currentImage].Regions[i].path === hitResult.item ) {
                    //             reg = Mediauto.objInfo[Mediauto.currentImage].Regions[i];
                    //         }
                    //     }
                    // }

                    // 글자 클릭시 className, name으로 비교
                    if (hitResult.item.className == "PointText") {
                        if (hitResult.item.name.includes('MEASUREMENT')) {
                            arrays = Mediauto.objInfo[Mediauto.currentImage].Measurements;
                        }
                        else if (hitResult.item.name.includes('COMMENT')) {
                            arrays = Mediauto.objInfo[Mediauto.currentImage].Comments;
                        }
                        else {
                            arrays = Mediauto.objInfo[Mediauto.currentImage].Regions;
                        }

                        for (i = 0; i < arrays.length; i += 1) {
                            if (arrays[i].name === hitResult.item.name) {
                                reg = arrays[i];
                            }
                        }
                    }

                    // object 클릭시 item.type, path로 비교
                    else {
                        if (hitResult.item.type?.includes('COMMENT')) {
                            arrays = Mediauto.objInfo[Mediauto.currentImage].Comments;

                            let type;
                            switch (hitResult.item.type) {
                                case 'COMMENTAREA': type = 'area'; break;
                                case 'COMMENTBOX': type = 'box'; break;
                                case 'COMMENTLINE': type = 'line'; break;
                            }

                            for (i = 0; i < arrays.length; i += 1) {
                                if (arrays[i][type].path === hitResult.item) {
                                    reg = arrays[i][type];
                                    Mediauto.objComment = arrays[i];
                                }
                            }
                        }

                        else {
                            // if (hitResult.item.type?.includes('POINT')) {
                            //     arrays = Mediauto.objInfo[Mediauto.currentImage].Regions;

                            //     for( i = 0; i < arrays.length; i += 1 ) {
                            //         if (arrays[i].arrPath) {
                            //             for (let path of arrays[i].arrPath) {
                            //                 if (path === hitResult.item) {
                            //                     reg = arrays[i];
                            //                 }
                            //             }
                            //         }
                            //     }
                            // }
                            // else {
                            //     if (hitResult.item.type?.includes('MEASUREMENT')) {
                            //         arrays = Mediauto.objInfo[Mediauto.currentImage].Measurements;
                            //     }

                            //     else {
                            //         arrays = Mediauto.objInfo[Mediauto.currentImage].Regions;
                            //     }

                            //     for( i = 0; i < arrays.length; i += 1 ) {
                            //         if (arrays[i].path === hitResult.item) {
                            //             reg = arrays[i];
                            //         }
                            //     }
                            // }
                            if (hitResult.item.type?.includes('MEASUREMENT')) {
                                arrays = Mediauto.objInfo[Mediauto.currentImage].Measurements;
                            }

                            else {
                                arrays = Mediauto.objInfo.regions;
                            }

                            for (i = 0; i < arrays.length; i += 1) {
                                if (arrays[i].path._id === hitResult.item._id) {
                                    reg = arrays[i];
                                }
                            }
                        }

                    }

                    // select path
                    if (Mediauto.region && Mediauto.region != reg) {
                        Mediauto.region.path.selected = false;
                        prevRegion = Mediauto.region;
                    }

                    if (reg.path.type?.includes('MEASUREMENT')) {
                        Mediauto.selectMeasurement(reg);
                        Mediauto.selectComment(null);
                        Mediauto.selectRegion(null);
                    }
                    else if (reg.path.type?.includes('COMMENT')) {
                        Mediauto.selectMeasurement(null);
                        Mediauto.selectComment(reg);
                        Mediauto.selectRegion(null);
                    }
                    else {
                        Mediauto.selectMeasurement(null);
                        Mediauto.selectComment(null);
                        Mediauto.selectRegion(reg);
                    }

                    Mediauto.currentRegions();

                    if (!Mediauto.region.path.fullySelected && !Mediauto.region.path.type?.includes('COMMENT')) {
                        if (Mediauto.latestStatus == 'progressing') {
                            // toast.warning('Accepted object cannot be modified.');
                        }
                    }
                    // $("#labelName").val(re.labelNo).trigger('change');

                    if (hitResult.type == 'handle-in') {
                        Mediauto.handle = hitResult.segment.handleIn;
                        Mediauto.handle.point = point;
                    } else if (hitResult.type == 'handle-out') {
                        Mediauto.handle = hitResult.segment.handleOut;
                        Mediauto.handle.point = point;
                    } else if (hitResult.type == 'segment') {
                        Mediauto.handle = hitResult.segment.point;
                        Mediauto.handle.point = point;
                        Mediauto.handle.index = hitResult.segment.index;

                        if (Mediauto.region.path.type == 'COMMENTAREA') {
                            let segments = Mediauto.region.path.segments

                            switch (hitResult.segment.point) {
                                case segments[0].point: {
                                    Mediauto.handleFrom = segments[2];
                                    break;
                                }
                                case segments[1].point: {
                                    Mediauto.handleFrom = segments[3];
                                    break;
                                }
                                case segments[2].point: {
                                    Mediauto.handleFrom = segments[0];
                                    break;
                                }
                                case segments[3].point: {
                                    Mediauto.handleFrom = segments[1];
                                    break;
                                }
                            }
                        }
                    } else if (hitResult.type == 'bounds') {
                        // Mediauto.handle = hitResult.item.bounds[hitResult.name];
                        // snake to camel
                        var targetBound = hitResult.name.toLowerCase().replace(/[-_][a-z]/g, (group) => group.slice(-1).toUpperCase());
                        Mediauto.handle = hitResult.item.bounds[targetBound];
                        Mediauto.handle.point = hitResult.item.bounds[targetBound];
                    }
                }

                if (hitResult == null && Mediauto.region) {
                    //deselect paths
                    Mediauto.region.path.selected = false;
                    Mediauto.region = null;
                }

                Mediauto.objectListPopup();

                paper.view.draw();

                return hitResult;
            },


            mouseUp: function mouseUp(point, dpoint) {
                // event.stopHandlers = true;

                var reg = Mediauto.region
                // annotation이 이미지 범위를 넘을경우 값 조정
                // for( var reg of Mediauto.objInfo[Mediauto.currentImage].Regions ) {
                if (reg !== null) {
                    if (reg.path.type.includes("COMMENT")) {
                        if (reg.path.type == "COMMENTAREA") {
                            Mediauto.region = Mediauto.regionCircle;
                        }
                        Mediauto.tools['drawComment'].mouseUp();

                        return;
                    }


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
                        Mediauto.calcRegArea(reg)
                        // Mediauto.commitMouseUndo();

                        if (reg.path.type == "MEASUREMENT") {
                            Mediauto.tools['drawMeasurement'].calcMeasurement();
                            Mediauto.regionCircle.path.remove();
                            paper.view.draw();
                        }
                    }
                }

                Mediauto.selectedTool = Mediauto.prevTool;

                // }

                // if (Mediauto.region.path.type == "MEASUREMENT") {
                //     Mediauto.tools["drawMeasurement"].mouseUp(point);
                // }


            },


            /*
             * @function click
             * @desc Convert polygon path to bezier curve
             * @param {string} prevTool The previous tool to which the selection goes back
             * @returns {void}
             */
            click: function click(prevTool) {
                Mediauto.navEnabled = false;
                Mediauto.handle = null;
                Mediauto.handleFrom = null;
            }
        };

        return tool;
    }())
};
