import React from 'react'

export default function Editor() {
  return (
    <div className='editor-container'>
        <div className="head">
            <h1>Editor</h1>
        </div>

        <div className='content'>
            <div className="side-bar">
                <ul>
                    <li>List</li>
                    <li>De</li>
                    <li>Fou</li>
                </ul>
            </div>

            <div className="editor">
               <div className="editor-content">

                    <div className="caption">
                        <div className="image-content">
                            <img src={`${process.env.PUBLIC_URL}/img_dev/caption.jpg`} alt="Caption" className='caption-image' />
                        </div>
                        <p className='caption-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a velit doloremque iste ab excepturi repudiandae dolor, accusamus suscipit. Voluptas impedit nam reprehenderit nemo? Soluta voluptatem nulla quidem voluptatum magnam.</p>
                    </div>

                    <div className="new-block">
                        <p className='new-block-text'>Add a new block</p>
                    </div>
               </div>
            </div>
        </div>

        

    </div>
  )
}
