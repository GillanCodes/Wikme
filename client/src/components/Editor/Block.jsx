import React from 'react'
import { changeBlock } from './blocks';
import { isEmpty } from '../../utils';

export default function Block({block, fileHandle}) {

  switch(block.type){
    case "title":
      return (
        <div className="block title" id={block.UId}>
          <h1 onInput={(e) => changeBlock(block.type, block.UId, e.target.innerText)} contentEditable={true}>{block.content}</h1>
        </div>
      )
    case "subtitle":
      return (
        <div className="block subtitle" id={block.UId}>
          <h2 onInput={(e) => changeBlock(block.type, block.UId, e.target.innerText)} contentEditable={true}>{block.content}</h2>
        </div>
      )
    case "text":
      return (
        <div className="block text-only" id={block.UId}>
          <p onInput={(e) => changeBlock(block.type, block.UId, e.target.innerText)} contentEditable={true}>{block.content}</p>
        </div>
      );
    case "caption":
      return (
        <div class={block.isRight ? "block caption is-right" : "block caption"}  id={block.UId}>
          <div class="image-content">
            {!isEmpty(block.caption) ? (
              <img src={block.caption} class="caption-image" alt="Caption" />
            ) : (
              <>
                {!isEmpty(fileHandle) && (
                  <p onClick={fileHandle}>Images</p>
                )}
              </>
            )}
          </div>
          <p class="text-caption" onInput={(e) => changeBlock(block.type, block.UId, {text: e.target.innerText, image: block.caption})} contentEditable={true}>{block.content}</p>
        </div>
      )
    default:
      break;
  }
}
