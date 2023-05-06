import React, { useState } from 'react'
import Modal from '../Modules/Modal';
import PageModal from './PageModal';

export default function PageMenu({pages, wiki, createPageHandle, setNewPage, newPage, setPageKey, pageKey}) {

    const [pageModal, setPageModal] = useState({
        isOpen: false,
        page: null
    });

    return (
        <>
            <div className='page-menu'>
                <div className="container">
                    <div className="content">
                        <div className="head">
                            <h2 className='title'>{wiki.name}</h2>
                        </div>
                        <div className="body">
                            <div className="items">
                                {pages.map((item, key) => {
                                    return (
                                        <div className={pageKey === key ? 'item active' : 'item'}>
                                            <button className='button' onClick={() => setPageModal({...pageModal, isOpen:true, page:item})}> 
                                                <i className="fa-solid fa-gear setting"></i>
                                            </button>
                                            <p onClick={() => setPageKey(key)}>{item.name}</p>
                                        </div>
                                    )
                                })}
                                <div className="item">
                                    <button className="button is-success" onClick={() => createPageHandle()}>
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                    <input type="text" className="input" placeholder="New Page's name" value={newPage} onChange={(e) => setNewPage(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="foot">

                        </div>
                    </div>
                </div>
            </div>

            {pageModal.isOpen && (
                <Modal content={<PageModal setModal={setPageModal} pageModal={pageModal} />} />
            )}
        </>
    )
}
