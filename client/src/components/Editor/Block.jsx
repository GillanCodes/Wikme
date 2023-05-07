import React from 'react'
import { changeBlock } from './blocks';
import { isEmpty } from '../../utils';

export default function Block({block, fileHandle, setImageKey}) {

  switch(block.type){
    case "title":
      return (
        <div className="block title" id={block.UId} key={block.UId}>
          <h1 onInput={(e) => changeBlock("text", block.UId, e.target.innerText)} contentEditable={true} suppressContentEditableWarning={true}>{block.content}</h1>
        </div>
      )
    case "subtitle":
      return (
        <div className="block subtitle" id={block.UId} key={block.UId}>
          <h2 onInput={(e) => changeBlock("text", block.UId, e.target.innerText)} contentEditable={true} suppressContentEditableWarning={true}>{block.content}</h2>
        </div>
      )
    case "text":
      return (
        <div className="block text-only" id={block.UId} key={block.UId}>
          <p onInput={(e) => changeBlock("text", block.UId, e.target.innerText)} contentEditable={true} suppressContentEditableWarning={true}>{block.content}</p>
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
                  <p onClick={fileHandle}>Images</p>
                )}
              </>
            )}
          </div>
          <p className="text-caption" onInput={(e) => changeBlock(block.type, block.UId, {text: e.target.innerText, image: block.caption})} contentEditable={true} suppressContentEditableWarning={true}>{block.content}</p>
        </div>
      )
    case "images":
      return (
        <div className="block images" id={block.UId} key={block.UId}>
          {block.content.map((img, key) => {
            if (img === "empty_content") return ( <p onClick={() => {fileHandle(); setImageKey(key)} }>New Image</p> )
            return ( <img src={img} alt="test" /> )

          })}
        </div>
      )
    default:
      break;
  }
}
