import React, { useState } from 'react'
import Block from '../Editor/Block'
import { isEmpty } from '../../../utils'
import Modal from '../../Modules/Modal';
import ImageModal from './ImageModal';

export default function Viewer({page}) {

  const [modal, setModal] = useState(null);

  return (
    <>
      <div className="page">
        <div className='editor-container'>
          <div className='content'>
            <div className="editor">
              <div className="editor-content" id="editor">
                {!isEmpty(page) && (
                  <>
                    {page.content.map((item, key) => {
                      return (
                        <div className='box' key={key}>
                          <Block block={item} editable={false} setImageModal={setModal} />
                        </div>
                      )
                    })}
                    </> 
                  )}
                </div>
              </div>
          </div>
        </div>

        {!isEmpty(modal) && (
          <Modal content={<ImageModal modal={modal} setModal={setModal} />} />
        )}

      </div>
    </>
  )
}
