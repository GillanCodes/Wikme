import React from 'react'
import { changeBlock } from './blocks_ressources';
import { isEmpty } from '../../../utils';

import * as DOMPurify from "dompurify";

export default function Block({block, fileHandle, setImageKey}) {

  switch(block.type){
    case "title":
      return (
        <div className="block title" id={block.UId} key={block.UId}>
          <h1 onInput={(e) => changeBlock("text", block.UId, e.target.innerText)} contentEditable={true} suppressContentEditableWarning={true} spellCheck="false">{block.content}</h1>
        </div>
      );
    case "subtitle":
      return (
        <div className="block subtitle" id={block.UId} key={block.UId}>
          <h2 onInput={(e) => changeBlock("text", block.UId, e.target.innerText)} contentEditable={true} suppressContentEditableWarning={true} spellCheck="false">{block.content}</h2>
        </div>
      );
    case "text":
      return (
        <div className="block text-only" id={block.UId} key={block.UId}>
          <p onInput={(e) => changeBlock("text", block.UId, e.target.innerHTML)} contentEditable={true} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block.content)}} spellCheck="false"></p>
        </div>
      );
    case "caption":
      return (
        <div className={block.isRight ? "block caption is-right" : "block caption"}  id={block.UId} key={block.UId}>
          <div className="image-content">
            {!isEmpty(block.caption) ? (
              <img onClick={fileHandle} src={block.caption} className="caption-image" alt="Caption" />
            ) : (
              <>
                {!isEmpty(fileHandle) && (
                  <div className="image-form" onClick={fileHandle}>
                    <p>Images</p>
                  </div>
                )}
              </>
            )}
          </div>
          <p className="text-caption" onInput={(e) => changeBlock(block.type, block.UId, {text: e.target.innerHTML, image: block.caption})} contentEditable={true} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block.content)}} spellCheck="false"></p>
        </div>
      );
    case "code":
      return (
        <div className="block code">
          <div className="code-container">
            <p className="lang" spellCheck="false" contentEditable={true} suppressContentEditableWarning={"true"} onInput={(e) => changeBlock('code', block.UId, {content : block.content, lang: e.target.innerText})}>{block.lang}</p>
            <p onInput={(e) => changeBlock('code', block.UId, {content: e.target.innerHTML, lang: block.lang})} contentEditable={true} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(block.content)}} spellCheck="false"></p>
          </div>
        </div>
      );
    case "images":
      return (
        <div className="block images" id={block.UId} key={block.UId}>
          {block.content.map((img, key) => {
            if (img === "empty_content") return ( 
              <div className="image-form" onClick={() => {fileHandle(); setImageKey(key); } }>
                <p>New Image</p> 
              </div>
            )
            return ( <img src={img} alt="test" onClick={() => { fileHandle(); setImageKey(key); }} /> )

          })}
        </div>
      );
    default:
      break;
  }
}
