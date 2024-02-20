'use client'
import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script.js';
import Mediauto from './mediauto.js'

const View = () => {
    const contentRef = useRef<any>(null);
    const contentElem = useRef<any>(null);

    const ready = () => {
        const fn = async () => {
            Mediauto.init(contentElem.current)
        }
        fn()
    }
    return (
        <>
            <div id="content" ref={contentRef} style={{ 'height': '100vh' }}>
                <div
                    ref={contentElem}
                    id="mediautoView"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        overflow: "hidden"
                    }}
                >
                    {/* Toolbar */}
                    <div id="menuBar" className="table">
                        <div id="tools-side" style={{ display: "block", height: "100%" }}>
                            <div id="tools-minimized">
                                <div>
                                    <img id="bars-icon" alt="menu" src="/img/paperJs/bars.svg" />
                                </div>
                            </div>
                            <div id="tools-maximized">
                                {/* buttons */}
                                <div
                                    id="buttonsBlock"
                                    className="btnPosition"
                                    style={{ display: "flex" }}
                                >
                                    <div className="clear">
                                        <div
                                            className="floatL mui push btn noBorder"
                                            id="list"
                                            title="List"
                                            style={{ marginRight: 16 }}
                                        >
                                            <img className="icon" alt="list" src="/img/paperJs/ic-list.svg" />
                                        </div>
                                        <div className="floatL btnBoder btnArea1">
                                            <div
                                                className="floatL mui push btn noBorder no-lock"
                                                id="transformImage"
                                                title="Transform Image (alt + t)"
                                            >
                                                <svg className="tools JPG" />
                                            </div>
                                            <div
                                                className="floatL mui push btn noBorder no-lock"
                                                id="popupImageList"
                                                title="Image List"
                                                style={{ borderRight: "1px solid #b0b8c2" }}
                                            >
                                                <svg className="tools image-list" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="move"
                                                title="Move (ctrl + drag)"
                                            >
                                                <svg className="tools move" />
                                            </div>
                                            <div
                                                className="floatL mui push btn noBorder"
                                                id="rotateLeft"
                                                title="Rotate Left"
                                            >
                                                <svg className="tools rotate-left" />
                                            </div>
                                            <div
                                                className="floatL mui push btn noBorder"
                                                id="rotateRight"
                                                title="Rotate Right"
                                            >
                                                <svg className="tools rotate-right" />
                                            </div>
                                        </div>
                                        <div className="floatL btnBoder btnArea2">
                                            <div
                                                className="floatL mui push btn selected no-lock"
                                                id="select"
                                                title="Select (s + click)"
                                            >
                                                <svg className="tools select" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="drawPoint"
                                                title="Draw Point"
                                            >
                                                <svg className="tools draw-point" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="drawLine"
                                                title="Draw Line"
                                            >
                                                <svg className="tools draw-line" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="drawBbox"
                                                title="Draw Bbox"
                                            >
                                                <svg className="tools draw-bbox" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="drawSeg"
                                                title="Draw Polygon"
                                            >
                                                <svg className="tools draw-seg" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="region"
                                                title="Region Add/Sub (space + drag)"
                                            >
                                                <svg className="tools knife" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="pointAdd"
                                                title="Point Add"
                                            >
                                                <svg className="tools point-add" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="pointDelete"
                                                title="Point Delete"
                                            >
                                                <svg className="tools point-delete" />
                                            </div>
                                            <div
                                                className="floatL mui push btn"
                                                id="rotate"
                                                title="Rotate (r + drag)"
                                            >
                                                <svg className="tools rotate" />
                                            </div>
                                            <div
                                                className="floatL mui push btn noBorder"
                                                id="undo"
                                                title="Undo (ctrl + z)"
                                            >
                                                <svg className="tools undo" />
                                            </div>
                                            <div
                                                className="floatL mui push btn noBorder"
                                                id="redo"
                                                title="Redo (ctrl + y)"
                                            >
                                                <svg className="tools redo" />
                                            </div>
                                            <div
                                                className="floatL mui push btn noBorder"
                                                id="delete"
                                                title="Delete (delete)"
                                            >
                                                <svg className="tools delete" />
                                            </div>
                                        </div>
                                        <div className="floatL btnBoder btnArea3">
                                            <div
                                                className="floatL mui push btn noBorder no-lock"
                                                id="popupInfo"
                                                title="Image Info (alt + i)"
                                            >
                                                <svg className="tools info" />
                                            </div>
                                        </div>
                                        <div className="floatL btnBoder btnArea4">
                                            <div
                                                className="floatL mui push btn noBorder no-lock"
                                                id="popupObject"
                                                title="Object List (alt + o)"
                                            >
                                                <svg className="tools object" />
                                            </div>
                                            <div
                                                className="floatL mui push btn noBorder no-lock"
                                                id="popupMemo"
                                                title="Memo (alt + m)"
                                            >
                                                <svg className="tools memo" />
                                            </div>
                                            <div
                                                className="floatL mui push btn no-lock"
                                                id="drawMeasurement"
                                                title="Draw Measurement"
                                            >
                                                <svg className="tools ruler" />
                                            </div>
                                            <div
                                                className="floatL mui push btn noBorder no-lock"
                                                id="popupHint"
                                                title="Shortcuts (alt + h)"
                                            >
                                                <svg className="tools question" />
                                            </div>
                                            <div
                                                className="floatL mui push btn no-lock"
                                                id="drawComment"
                                                title="Comment"
                                            >
                                                <svg className="tools comment" />
                                            </div>
                                            {/*
                      
                      <div class="floatL mui push btn noBorder" id="filters" title="Filters" ><svg class="tools info"/></div>
                  */}
                                        </div>
                                        <div className="floatL btnBoder btnArea4">
                                            <div
                                                className="floatL mui push btn noBorder"
                                                id="uploadAsap"
                                                title="Upload ASAP"
                                            >
                                                <input
                                                    type="file"
                                                    id="create-attach-file"
                                                    name="files"
                                                    style={{ width: 0, height: 0, position: "absolute" }}
                                                    accept=".xml"
                                                />
                                                <svg className="tools upload" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="buttonsBlock2" className="btnZoom">
                                <div id="zoomIn" title="Zoom In (+)" className="mui push noBorder">
                                    <svg className="tools zoom-in" />
                                </div>
                                <div id="zoomOut" title="Zoom Out (-)" className="mui push noBorder">
                                    <svg className="tools zoom-out" />
                                </div>
                                <div id="zoomHome" title="Home (0)" className="mui push noBorder">
                                    <svg className="tools zoom-home" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <canvas
                        id="test1"
                        width={300}
                        height={300}
                        style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: 124,
                            left: 24
                        }}
                    />
                    <canvas
                        id="test2"
                        width={300}
                        height={300}
                        style={{
                            visibility: "hidden",
                            position: "absolute",
                            bottom: 124,
                            left: 24
                        }}
                    />
                    <div id="labelDiv" className="popup labelDiv">
                        <div className="close_btn" />
                    </div>
                    <div id="labelBar" style={{}}>
                        {/*<input type="checkbox" name="checker" id="chk1" class="chk"><label for="chk1">체크1</label>*/}
                    </div>
                    <div className="infotBox">
                        <div>
                            <div className="floatL" id="fileName" />
                            <div className="floatL bar">
                                <span>X:</span>
                                <span id="pointX" className="pointX" />
                                <span>Y:</span>
                                <span id="pointY" className="pointY" />
                            </div>
                        </div>
                        <div className="flex ai-center">
                            <div>
                                ( <span id="image-format">JPG</span> View )
                            </div>
                            <a
                                id="prevSlide"
                                className="glyphicon glyphicon-triangle-left"
                                aria-hidden="true"
                            />
                            <a
                                id="nextSlide"
                                className="glyphicon glyphicon-triangle-right"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                    {/* OpenSeadragon viewer */}
                    <div
                        id="openseadragon1"
                        style={{ width: "100%", height: "100%", background: "white" }}
                    ></div>
                    {/* paperjs container */}
                    <div id="paperjs-container"></div>
                    <button id="btnNavigator" className="btnNavigator reduce" />
                    <div id="popup-object" className="popup popup-list">
                        <div id="changeLabelDiv" className="popup labelDiv changeLabelDiv">
                            <div className="close_btn" />
                        </div>
                        <div className="titleText">Review</div>
                        <div className="drag-btn">
                            <div className="drag-ico" />
                        </div>
                        <div className="close_btn" />
                        <div className="viewArea">
                            <ul className="list">
                                {/* <li class="clear"><div class="object floatL"><span></span>Object 1</div><div class="floatR acceptOff">Accept</div></li>*/}
                            </ul>
                        </div>
                        <div id="sliderDiv">
                            <div id="opacityDiv">
                                <div>Opacity</div>
                                <div className="slider"></div>
                            </div>
                            <div id="strokeDiv">
                                <div>Stroke Width</div>
                                <div className="slider"></div>
                            </div>
                        </div>
                    </div>
                    <div id="popup-memo" className="popup popup-list">
                        <div className="titleText">Memo</div>
                        <div className="add_btn" id="btnAddMemo" />
                        <div className="drag-btn" id="btnDragInformation">
                            <div className="drag-ico" />
                        </div>
                        <div className="close_btn" />
                        <div className="memo-container">
                            <ul className="list"></ul>
                        </div>
                    </div>
                    <div id="popup-info" className="popup" style={{ visibility: "hidden" }}>
                        <div className="tabs">
                            <input type="radio" name="tabs" id="tab2" defaultChecked={true} />
                            <label htmlFor="tab2">Clinical Info</label>
                            <div className="tab tab2" style={{ overflowY: "scroll" }}>
                                <ul id="clinical-info" style={{ height: 380 }}>
                                    {/*
              <li class="listWrap">
                  <div class="infor Txt1">Age_year_at_surgery</div>
                  <div class="infor Txt2">61</div>
              </li>
              <li class="listWrap">
                  <div class="infor Txt1">Property</div>
                  <div class="infor Txt2">IV</div>
              </li>
              */}
                                </ul>
                            </div>
                            <input type="radio" name="tabs" id="tab1" />
                            <label htmlFor="tab1">Image Info</label>
                            <div className="tab">
                                <ul style={{ height: "100%" }}>
                                    <li className="listWrap">
                                        <div className="infor Txt1">Micrometers Per Pixel X</div>
                                        <div className="infor Txt2 pixelX">N/A</div>
                                    </li>
                                    <li className="listWrap">
                                        <div className="infor Txt1">Micrometers Per Pixel Y</div>
                                        <div className="infor Txt2 pixelY">N/A</div>
                                    </li>
                                    <li className="listWrap">
                                        <div className="infor Txt1">Width(pixes)</div>
                                        <div className="infor Txt2 width" />
                                    </li>
                                    <li className="listWrap">
                                        <div className="infor Txt1">Height(pixels)</div>
                                        <div className="infor Txt2 height" />
                                    </li>
                                    <li className="listWrap">
                                        <div className="infor Txt1">Vendor</div>
                                        <div className="infor Txt2 vendor">jpeg</div>
                                    </li>
                                    <li className="listWrap" style={{ height: "calc(100% - 174px)" }}>
                                        <div className="infor Txt1">Property</div>
                                        <div className="infor textarea property"></div>
                                    </li>
                                </ul>
                            </div>
                            <input type="radio" name="tabs" id="tab3" />
                            <label htmlFor="tab3">Worker</label>
                            <div className="tab tab3">
                                <table className="tabTable">
                                    <colgroup>
                                        <col width="30%" />
                                        <col width="30%" />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr style={{ backgroundColor: "#fff" }}>
                                            <th>State</th>
                                            <th>Worker</th>
                                            <th>Complete Date</th>
                                        </tr>
                                        <tr style={{ backgroundColor: "#fff" }}>
                                            <td>Annotation</td>
                                            <td id="annotation-ssid">-</td>
                                            <td id="annotation-dtc-dtm">-</td>
                                        </tr>
                                        <tr style={{ backgroundColor: "#fff" }}>
                                            <td>Review</td>
                                            <td id="review-ssid">-</td>
                                            <td id="review-dtc-dtm">-</td>
                                        </tr>
                                        <tr style={{ backgroundColor: "#fff" }}>
                                            <td>Termination</td>
                                            <td id="termination-ssid">-</td>
                                            <td id="termination-dtc-dtm">-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="drag-btn">
                            <div className="drag-ico" />
                        </div>
                        <div className="close_btn" />
                    </div>
                    <div id="popup-hint" className="popup">
                        <div className="drag-btn">
                            <div className="drag-ico" />
                        </div>
                        <div className="close_btn" />
                        <div className="titleText">Shortcuts</div>
                        <div className="hint-container">
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-ctrl" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-z" />
                                    </div>
                                </div>
                                <div className="hint-desc">Undo last action.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-ctrl" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-y" />
                                    </div>
                                </div>
                                <div className="hint-desc">Redo last action.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-ctrl" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-c" />
                                    </div>
                                </div>
                                <div className="hint-desc">Copy the selected object.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-ctrl" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-v" />
                                    </div>
                                </div>
                                <div className="hint-desc">Paste the copied object.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-ctrl" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint mouse-drag" />
                                    </div>
                                </div>
                                <div className="hint-desc">Move the image area.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-alt" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-r" />
                                    </div>
                                </div>
                                <div className="hint-desc">Draw measurement.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-alt" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-t" />
                                    </div>
                                </div>
                                <div className="hint-desc">Transform image view to JPG or WSI.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-alt" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-l" />
                                    </div>
                                </div>
                                <div className="hint-desc">Open or focus the image list popup.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-alt" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-o" />
                                    </div>
                                </div>
                                <div className="hint-desc">Open or close the object list popup.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-alt" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-m" />
                                    </div>
                                </div>
                                <div className="hint-desc">Open or close the memo popup.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-alt" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-i" />
                                    </div>
                                </div>
                                <div className="hint-desc">Open or close the info popup.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-alt" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint key-h" />
                                    </div>
                                </div>
                                <div className="hint-desc">Open or close the shortcuts popup.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-space" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint mouse-drag" />
                                    </div>
                                </div>
                                <div className="hint-desc">
                                    Draws an area to merge with or subtract from the selected object.
                                </div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-r" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint mouse-drag" />
                                    </div>
                                </div>
                                <div className="hint-desc">Rotates the selected object.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-s" />
                                    </div>
                                    <svg className="hint plus" />
                                    <div>
                                        <svg className="hint mouse-click" />
                                    </div>
                                </div>
                                <div className="hint-desc">Select an object.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-esc" />
                                    </div>
                                </div>
                                <div className="hint-desc">Close the info/label selection popup.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-plus" />
                                    </div>
                                </div>
                                <div className="hint-desc">Zoom in image area.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-minus" />
                                    </div>
                                </div>
                                <div className="hint-desc">Zoom out image area.</div>
                            </div>
                            <div className="hint-wrapper">
                                <div className="hint-command">
                                    <div>
                                        <svg className="hint key-del" />
                                    </div>
                                </div>
                                <div className="hint-desc">Delete the selected object.</div>
                            </div>
                        </div>
                    </div>
                    <div id="filtersDiv" className="popup">
                        <div id="brightnessDiv">
                            Brightness
                            <div className="slider">
                                <div className="tooltip">0</div>
                            </div>
                        </div>
                        <div id="contrastDiv">
                            Contrast
                            <div className="slider">
                                <div className="tooltip">1</div>
                            </div>
                        </div>
                        <input type="checkbox" name="checker" className="chk" id="chkInvert" />
                        <label htmlFor="chkInvert" style={{ marginRight: 4 }}>
                            Invert
                        </label>
                        <input type="checkbox" name="checker" className="chk" id="chkGray" />
                        <label htmlFor="chkGray" style={{ marginRight: 4 }}>
                            Gray Scale
                        </label>
                        <button id="btnResetFilters">Reset</button>
                        <div className="drag-btn">
                            <div className="drag-ico" />
                        </div>
                        <div className="close_btn" />
                    </div>
                </div>
            </div>

            <link rel="stylesheet" href="/css/ui.css" type="text/css" />
            <link rel="stylesheet" href="/css/custom.css" type="text/css" />
            <link rel="stylesheet" href="/css/display.css" type="text/css" />
            <link rel="stylesheet" href="/css/paperJs/mediauto.css" type="text/css" />
            <link rel="stylesheet" href="/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" type="text/css" />
            <Script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.17/paper-full.min.js"
                onReady={() => ready()}
            >
            </Script>
        </>
    )
}

export default View;
