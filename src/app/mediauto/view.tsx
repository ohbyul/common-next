'use client'
import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script.js';
import Mediauto from './mediauto.js'

const View = () => {
    const contentRef = useRef<any>(null);
    const _auth_level = "SM"

    const ready = () => {
        const fn = async () => {
            const res = await fetch("/js/paperJs/mediauto.mustache");
            const txt = await res.text();
            const parser = new DOMParser();
            const elem = parser.parseFromString(txt, 'text/html').documentElement;
            if (!contentRef.current?.shadowRoot) {
                const shadow = contentRef.current.attachShadow({ mode: 'open' });
                await shadow.appendChild(elem)
                Mediauto.init(contentRef.current?.shadowRoot)
            }
        }
        fn()
    }
    return (
        <>
            <div id="content" ref={contentRef} style={{ 'height': '100vh' }}>
            </div>
            <Script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.17/paper-full.min.js"
                onReady={() => ready()}
            >
            </Script>
        </>
    )
}

export default View;
