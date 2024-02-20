'use client'

import React, { Dispatch, SetStateAction } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     // <--- ADDED
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Link from '@ckeditor/ckeditor5-link/src/link';
// import List from '@ckeditor/ckeditor5-list/src/list';
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';


const editorConfiguration = {
    placeholder: "내용을 입력하세요.",
    toolbar: [
        'heading',
        '|', 'bold', 'italic', //'strikethrough', 'subscript', 'superscript', 'code',
        // '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
        '|', 'bulletedList', 'numberedList',// 'todoList',
        'outdent', 'indent',
        '|', 'insertTable',
        '|', 'link', 'imageUpload', 'mediaEmbed', 'blockQuote',
        '|', 'undo', 'redo',
        // 'alignment'
    ],
    // alignment: {
    //     options: ['left', 'right', 'center', 'justify']
    // },
    // cloudServices: {
    //     // All predefined builds include the Easy Image feature.
    //     // Provide correct configuration values to use it.
    //     tokenUrl: 'https://example.com/cs-token-endpoint',
    //     uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/'
    //     // Read more about Easy Image - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/easy-image.html.
    //     // For other image upload methods see the guide - https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html.
    // }
};

interface Props {
    initialData: string;
    setContent: Dispatch<SetStateAction<string>>;
}

export default function Editor(props: Props) {
    const { initialData, setContent } = props


    return (
        <CKEditor
            editor={ClassicEditor}
            config={editorConfiguration}
            onReady={(ready) => {
                console.log("editor ready", ready);
            }}
            data={initialData}
            onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
            }}
        />
    )
}
