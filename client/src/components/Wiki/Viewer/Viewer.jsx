import React from 'react'
import Block from '../Editor/Block'
import { isEmpty } from '../../../utils'

export default function Viewer({page}) {
  return (
    <div className="page">
      <div className='editor-container'>
        <div className='content'>
          <div className="editor">
            <div className="editor-content" id="editor">
              {!isEmpty(page) && (
                <>
                  {page.content.map((item, key, arr) => {
                    return (
                      <div className='box' key={key}>
                        <p className='block-nb'>#{key+1}</p>
                        <Block block={item} editable={false} />
                      </div>
                    )
                  })}
                  </> 
                )}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
