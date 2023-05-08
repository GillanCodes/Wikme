import React, { useState } from 'react';
import { useDispatch } from "react-redux";

export default function WikiModal({setModal, currentWiki, setCurrentWiki}) {

    const dispatch = useDispatch();

    const [name, setName] = useState(currentWiki.name);
    const [desc, setDesc] = useState(currentWiki.description);

    const saveHandle = () => {
        
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
                                <button className="button is-success">Save</button>
                            </div>
                            <div className="form">
                                <div className="button is-danger">Delete</div>
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
