import React from 'react'

export default function PageMenu({pages, wiki, createPageHandle, setNewPage, newPage}) {
  return (
    <div className='page-menu'>
        <div className="container">
            <div className="content">
                <div className="head">
                    <h2 className='title'>{wiki.name}</h2>
                </div>
                <div className="body">
                    <div className="items">
                        {pages.map((item) => {
                            return (
                                <div className="item">
                                    <button className='button'> 
                                        <i className="fa-solid fa-gear setting"></i>
                                    </button>
                                    <p>{item.name}</p>
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
  )
}
