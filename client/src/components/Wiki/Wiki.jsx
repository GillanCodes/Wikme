import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { isEmpty } from '../../utils';
import { getPages } from '../../actions/page.actions';
import Editor from "../Editor/Editor";

export default function Wiki() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);
  const [pageKey, setPageKey] = useState();
  const [newPage, setNewPage] = useState({isOpen: false, name:""});

  const pages = useSelector(state => state.pageReducer);
  const wikiData = useSelector(state => state.wikiReducer);
  
  useEffect(() => {
    if (!isEmpty(id))
    {
      dispatch(getPages(id));
    }
  }, [id]);

  useEffect(() => {
    if (!isEmpty(pages))
    {
      if (!isEmpty(pages[0])){
        setPageKey(0);
      }
      setLoad(true);
    }
  }, [pages, wikiData]);

  return (
    <div className='wiki-container container'>
      <div className="wiki-content content">
        <div className="side-menu">
          <div className="content">
            {!isEmpty(wikiData) && wikiData.map((wiki) => {
              if (wiki._id === id)
              {
                return (
                  <h2 className='wiki-title'>{wiki.name}</h2>
                )
              }
            })}
            <ul className='items'>
              <li className='item' onClick={() => setNewPage({isOpen: !newPage.isOpen})}>New Page</li>
              {newPage.isOpen && (
                <div className='item'>
                  <input type="text" placeholder="Page's name" className="input" onChange={(e) => setNewPage({...newPage, name:e.target.value})} />
                  <button className='button'>Create Page</button>
                </div>
              )}
            {load && (
              <>    
                  {pages.map((page, key) => {
                    return <li className={key === pageKey ? "item active" : "item"} onClick={() => setPageKey(key)} id={page._id}>{page.name}</li>
                  })}
              </>
            )}
            </ul>
          </div>
        </div>

        <div className="page">
          {load && !isEmpty(pageKey) && (
            <Editor page={pages[pageKey]} />
          )}
        </div>

      </div>
    </div>
  )
}
