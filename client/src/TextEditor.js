import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './TextEditor.css';

const socket = io('http://localhost:3001');

export default function TextEditor() {
  const editorRef = useRef();

  useEffect(() => {
    const handler = (data) => {
      if (editorRef.current) editorRef.current.innerText = data;
    };
    socket.on('receive-changes', handler);
    return () => socket.off('receive-changes', handler);
  }, []);

  const handleChange = () => {
    const text = editorRef.current.innerText;
    socket.emit('send-changes', text);
  };

  return (
    <div className='editor-container'>
      <div ref={editorRef} contentEditable className='editor' onInput={handleChange}></div>
    </div>
  );
}