import React from 'react';
import { useDispatch } from "react-redux";

export default function WikiModal({setModal}) {

    const dispatch = useDispatch();

    return (
        <div className='wiki-modal'>
            <div className="wiki-modal-container">
                <div className="wiki-modal-content">
                    <div className="head">
                        <h2></h2>
                    </div>
                    <div className="body">
                        <div className="items">
                            <div className="form">
                                <input type="text" className="input" placeholder="Page's name" />
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
