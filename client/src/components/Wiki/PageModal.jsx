import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { deletePage, updatePage } from '../../actions/page.actions';

export default function PageModal({setModal, pageModal}) {

    const dispatch = useDispatch();

    const [pageName, setPageName] = useState(pageModal.page.name);

    const deletePageHandle = () => {
        setModal({...pageModal, isOpen:false});
        dispatch(deletePage(pageModal.page._id));
    }

    const renamePageHandle = () => {
        setModal({...pageModal, isOpen:false});
        dispatch(updatePage({id:pageModal.page._id,name: pageName}));
    }

    return (
        <div className='page-modal'>
            <div className="page-modal-container">
                <div className="page-modal-content">
                    <div className="head">
                        <h2>{pageModal.page.name}</h2>
                    </div>
                    <div className="body">
                        <div className="items">
                            <div className="form">
                                <input type="text" className="input" placeholder="Page's name" value={pageName} onChange={(e) => setPageName(e.target.value)} />
                                <button className="button is-success" onClick={() => renamePageHandle()}>Save</button>
                            </div>
                            <div className="form">
                                <div className="button is-danger" onClick={() => deletePageHandle()}>Delete</div>
                            </div>
                        </div> 
                    </div>
                    <div className="footer">
                        <button onClick={() => setModal({...pageModal, isOpen:false})}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
