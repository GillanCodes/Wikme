import React, { useState } from 'react'
import { blockDown, blockUp, deleteBlock } from '../Editor/blocks';

export default function BlocksMenu({page}) {

  const [selcBlock, setSelcBlock] = useState({key: null, current: null});

  return (
    <div className='blocks-menu'>
      <div className="container">
        <div className="content">
          <div className="head">
            <h2 className='title'>Edit Blocks</h2>
          </div>
          <div className="body" key="blocks-list-body">
            <div className="items">
              {page.content.map((block, key) => {
                return (
                  <div className="item" onClick={() => {if (selcBlock.key === key) {setSelcBlock({...selcBlock, key: null}) } else { setSelcBlock({...selcBlock, key: key})} }}>
                    {block.type === "images" ? (
                      <p>#{key+1} {block.type} - {block.content.length} pictures</p>
                    ) : (
                      <p>#{key+1} {block.type} - {block.content.slice(0, 10)}...</p>
                    )}

                    {selcBlock.key === key && (
                      <div className="controls">
                        <button className="button is-info" onClick={() => blockUp(key, page._id)}><i class="fa-solid fa-arrow-up"></i></button>
                        <button className="button is-danger" onClick={() => deleteBlock(block.UId, page._id)}><i className="fa-solid fa-trash"></i></button>
                        <button className="button is-info" onClick={() => blockDown(key, page._id)}><i class="fa-solid fa-arrow-down"></i></button>
                      </div>
                    )}
                    
                  </div>
                )
              })}
              

            </div>
          </div>
          <div className="foot">

          </div>
        </div>
      </div>
    </div>
  )
}