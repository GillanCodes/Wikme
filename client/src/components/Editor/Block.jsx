import React from 'react'
import { changeBlock } from './blocks';

export default function Block({block}) {

  switch(block.type){
    case "title":
      return (
        <div className="block title">
          <h1 onInput={(e) => changeBlock(block.type, block.UId, e.target.innerText)} contentEditable={true}>{block.content}</h1>
        </div>
      )
    case "subtitle":
      return (
        <div className="block subtitle">
          <h2 onInput={(e) => changeBlock(block.type, block.UId, e.target.innerText)} contentEditable={true}>{block.content}</h2>
        </div>
      )
    case "text":
      return (
        <div className="block text-only">
          <p onInput={(e) => changeBlock(block.type, block.UId, e.target.innerText)} contentEditable={true}>{block.content}</p>
        </div>
      );
    case "caption":
      return (
        <div class={block.isRight ? "block caption is-right" : "block caption"} >
          <div class="image-content">
            <img src={block.caption} class="caption-image" alt="Caption" />
          </div>
          <p class="text-caption" onInput={(e) => changeBlock(block.type, block.UId, {text: e.target.innerText, image: block.caption})} contentEditable={true}>{block.content}</p>
        </div>
      )
    default:
      break;
  }
}
