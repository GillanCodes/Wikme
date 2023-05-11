import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteWiki, updateWiki } from '../../../actions/wiki.actions';

export default function WikiModal({setModal, currentWiki, setCurrentWiki}) {

    const dispatch = useDispatch();

    const [name, setName] = useState(currentWiki.name);
    const [desc, setDesc] = useState(currentWiki.description);
    const [isPublic, setIsPublic] = useState(currentWiki.isPublic);

    const saveHandle = () => {
        dispatch(updateWiki({id: currentWiki._id, name, desc, isPublic}));
        setModal(0);
    }

    const deleteHandle = () => {
        dispatch(deleteWiki(currentWiki._id));
        setCurrentWiki(null);
        setModal(0);
    }

    return (
        <div className='wiki-modal'>
            <div className="wiki-modal-container">
                <div className="wiki-modal-content">
                    <div className="head">
                        <h2>{currentWiki.name}</h2>
                    </div>
                    <div className="body">
                        <div className="items">
                            <div className="form">
                                <input type="text" className="input" placeholder="Wiki's name" value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="text" className="input" placeholder="Wiki's description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                                <label>Public <input type="checkbox" name="" id="" checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} /></label>
                                <button className="button is-success" onClick={() => saveHandle()}>Save</button>
                            </div>
                            <div className="form">
                                <div className="button is-danger" onClick={() => deleteHandle()}>Delete</div>
                            </div>
                        </div> 
                    </div>
                    <div className="footer">
                        <button className='button is-link' onClick={() => setModal(0)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
