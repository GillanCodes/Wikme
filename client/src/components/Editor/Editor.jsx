import React, { useState } from 'react'
import Modal from '../Modules/Modal'
import BlockModal from './BlockModal'

export default function Editor() {

    const [modal, setModal] = useState(0);



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
                <div className="editor-content" id="wiki">
                        {/* <div className="block caption">
                            <div className="image-content">
                                <img src={`${process.env.PUBLIC_URL}/img_dev/caption.jpg`} alt="Caption" className='caption-image' />
                            </div>
                            <p className='caption-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a velit doloremque iste ab excepturi repudiandae dolor, accusamus suscipit. Voluptas impedit nam reprehenderit nemo? Soluta voluptatem nulla quidem voluptatum magnam.</p>
                        </div>

                        <div className="block text">
                            <p><b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit. Odit ipsa cupiditate ut id tempore suscipit fugiat iure repudiandae dignissimos, nisi iusto tempora nesciunt vero. Numquam dolorem laudantium eum. Aperiam, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, totam fugit iste repellat assumenda accusamus ullam illum omnis error tempore itaque nisi quos unde numquam quo illo. Architecto, maiores atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae optio accusamus eum consectetur atque tempore asperiores. Possimus pariatur reprehenderit deserunt hic voluptas mollitia reiciendis quae dolore, doloremque unde nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus laboriosam velit magni labore optio error laborum nihil, voluptatem similique inventore ipsa molestias reiciendis repellendus unde! Dolores aspernatur quidem sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum, quidem laborum, sequi dolorem atque reprehenderit dolor perferendis, quae illo molestias tempora blanditiis. Rerum, doloribus sapiente sit nostrum ex quam!</p>
                        </div>

                        <div className="block caption is-right is-centered">
                            <div className="image-content">
                                <img src={`${process.env.PUBLIC_URL}/img_dev/caption1.jpg`} alt="Caption" className='caption-image' />
                            </div>
                            <p className='caption-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a velit doloremque iste ab excepturi repudiandae dolor, accusamus suscipit. Voluptas impedit nam reprehenderit nemo? Soluta voluptatem nulla quidem voluptatum magnam.</p>
                        </div>

                        <div className="block caption">
                            <div className="image-content">
                                <img src={`${process.env.PUBLIC_URL}/img_dev/caption2.jpg`} alt="Caption" className='caption-image' />
                            </div>
                            <p className='caption-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a velit doloremque iste ab excepturi repudiandae dolor, accusamus suscipit. Voluptas impedit nam reprehenderit nemo? Soluta voluptatem nulla quidem voluptatum magnam.</p>
                        </div> */}

                        <div className="block new-block" onClick={() => setModal(1)}>
                            <p className='new-block-text'>Add a new block</p>
                        </div> 
                </div>
                </div>
            </div>

            {modal == 1 && (
                <Modal content={<BlockModal setModal={setModal} />} />
            )}

        </div>
    )
}
