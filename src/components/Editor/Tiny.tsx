'use client'

import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

export default function TinyEditor({ height = 500, setContent }: { height?: number, setContent: Dispatch<SetStateAction<string>> }) {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const TINY_EDITOR_API_KEY = process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY

  return (
    <div className="App">
      <Editor
        apiKey={TINY_EDITOR_API_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        onEditorChange={(content) => setContent(content)}
        initialValue="<p></p>"
        init={{
          height,
          menubar: true,
          plugins: [
            'table',
            'image',
            'advlist', 'autosave',
            'lists', 'link', 'autolink', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
            'code', 'codesample', 'fullscreen', 'accordion', 'emoticons',
            'insertdatetime', 'media', 'table', 'help', 'wordcount',
          ],
          toolbar: 'undo redo | image link |' +
            'blocks fontfamily fontsize | bold italic underline forecolor backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | ' +
            'table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol |' +
            'accordion anchor media | charmap codesample emoticons |' +
            'removeformat searchreplace | fullscreen preview print | restoredraft help |',
          a11y_advanced_options: true,
          automatic_uploads: true,
          file_picker_types: 'image',
          images_upload_url: 'postAcceptor.php',
          images_upload_base_path: '/some/basepath',
          content_style: 'body {font - family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </div>
  );
}

