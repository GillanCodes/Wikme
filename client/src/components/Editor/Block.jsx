import React from 'react'
import { changeBlock } from './blocks';

export default function Block({block}) {

  switch(block.type){
    case "text":
      return (
        <div className="block text-only">
          <p onInput={() => changeBlock(block.UId)} contentEditable={true}>{block.content}</p>
        </div>
      );
    case "caption":
      return (
        <div class={block.isRight ? "block caption is-right" : "block caption"}>
          <div class="image-content"><img src={block.caption} class="caption-image" alt="Caption" /></div>
          <p class="text-caption">{block.content}</p>
        </div>
      )
    default:
      break;
  }
}
