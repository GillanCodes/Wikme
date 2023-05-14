import React from 'react'
import { changeBlock } from './blocks_ressources';
import { isEmpty } from '../../../utils';

import * as DOMPurify from "dompurify";

export default function Block({block, editable, fileHandle, setImageKey, setImageModal}) {

  switch(block.type){
    case "title":
      return (
        <div className="block title" id={block.UId} key={block.UId}>
          <h1 onInput={editable ? (e) => changeBlock("text", block.UId, e.target.innerText) : null} contentEditable={editable} suppressContentEditableWarning={true} spellCheck="false">{block.content}</h1>
        </div>
      );
    case "subtitle":
      return (
        <div className="block subtitle" id={block.UId} key={block.UId}>
          <h2 onInput={editable ? (e) => changeBlock("text", block.UId, e.target.innerText) : null} contentEditable={editable} suppressContentEditableWarning={true} spellCheck="false">{block.content}</h2>
        </div>
      );
    case "text":
      return (
        <div className="block text-only" id={block.UId} key={block.UId}>
          <p onInput={editable ? (e) => changeBlock("text", block.UId, e.target.innerHTML): null} contentEditable={editable} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block.content)}} spellCheck="false"></p>
        </div>
      );
    case "caption":
      return (
        <div className={block.isRight ? "block caption is-right" : "block caption"}  id={block.UId} key={block.UId}>
          <div className="image-content">
            {!isEmpty(block.caption) ? (
              <img onClick={editable ? fileHandle : () => setImageModal(block.caption)} src={block.caption} className="caption-image" alt="Caption" />
            ) : (
              <>
                {!isEmpty(fileHandle) && (
                  <div className="image-form" onClick={editable ? fileHandle : null}>
                    <p>Images</p>
                  </div>
                )}
              </>
            )}
          </div>
          <p className="text-caption" onInput={editable ? (e) => changeBlock(block.type, block.UId, {text: e.target.innerHTML, image: block.caption}) : null} contentEditable={editable} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block.content)}} spellCheck="false"></p>
        </div>
      );
    case "code":
      return (
        <div className="block code">
          <div className="code-container">
            <p className="lang" spellCheck="false" contentEditable={editable} suppressContentEditableWarning={"true"} onInput={editable ? (e) => changeBlock('code', block.UId, {content : block.content, lang: e.target.innerText}) : null}>{block.lang}</p>
            <p onInput={editable ? (e) => changeBlock('code', block.UId, {content: e.target.innerHTML, lang: block.lang}) : null} contentEditable={editable} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block.content)}} spellCheck="false"></p>
          </div>
        </div>
      );
    case "images":
      return (
        <div className="block images" id={block.UId} key={block.UId}>
          {block.content.map((img, key) => {
            if (img === "empty_content") return ( 
              <div className="image-form" onClick={editable ? () => {fileHandle(); setImageKey(key); } : null}>
                <p>New Image</p> 
              </div>
            )
            return ( <img src={img} alt="test" onClick={editable ? () => { fileHandle(); setImageKey(key); } : () => setImageModal(img)} /> )
          })}
        </div>
      );
    case "banner":
      return(
        <div className="block banner">
          <img src={`${process.env.REACT_APP_CDN_URL}/uploads/${block.image}`} alt="banner" onClick={editable ? fileHandle : () => setImageModal(block.image)} />
        </div>
      );
    case "text-banner":
      return (
          <div className="block banner">
            <h2 className='banner-text' contentEditable={editable} suppressContentEditableWarning={true} spellCheck={false}>{block.content}</h2>
            <img src={`${process.env.REACT_APP_CDN_URL}/uploads/${block.image}` } alt="banner" onClick={editable ? fileHandle : () => setImageModal(block.image)} />
          </div>
      );
    default:
      break;
  }
}
