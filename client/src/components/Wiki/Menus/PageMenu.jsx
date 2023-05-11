import React, { useState } from 'react'
import Modal from '../../Modules/Modal';
import PageModal from '../Modals/PageModal';
import { isEmpty } from '../../../utils';

export default function PageMenu({pages, wiki, createPageHandle, setNewPage, newPage, setPageKey, pageKey, editable}) {

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
                        <div className="body" key={"pages-list-body"}>
                            <div className="items">
                                {!isEmpty(pages) && pages.map((item, key) => {
                                    return (
                                        <div className={pageKey === key ? 'item active' : 'item'} key={key}>
                                            {editable && (
                                                <button className='button' onClick={() => setPageModal({...pageModal, isOpen:true, page:item})}> 
                                                    <i className="fa-solid fa-gear setting"></i>
                                                </button>
                                            )} 
                                            <p onClick={() => setPageKey(key)}>{item.name}</p>
                                        </div>
                                    )
                                })}
                                {editable && (
                                    <div className="item">
                                        <button className="button is-success" onClick={() => createPageHandle()}>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <input type="text" className="input" placeholder="New Page's name" value={newPage} onChange={(e) => setNewPage(e.target.value)}/>
                                    </div>
                                )}
                                
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
