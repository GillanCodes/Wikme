import React from 'react'
import { NavLink } from 'react-router-dom'

export default function WikiModule({wiki, setModal, setCurrentWiki}) {
  return (
    <div className='article-module'>
        <div className="article-module-container">
            <div className="article-module-content">
                <div className="article-module-head">
                    <p>{wiki.name}</p>
                </div>
                <div className="article-module-body">
                  <p>{wiki.description}</p>
                </div>
                <div className="article-module-footer">
                    <NavLink to={`/wiki/${wiki._id}`}>View</NavLink>
                    <p onClick={() => {setCurrentWiki(wiki); setModal(1)}}>Edit</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}