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

  const pages = useSelector(state => state.pageReducer);
  
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
  }, [pages])

  return (
    <div className='wiki-container container'>
      <div className="wiki-content content">
        <div className="side-menu">
          {load && (
            <ul className='items'>
              {pages.map((page, key) => {
                return <li className={key === pageKey ? "item active" : "item"} onClick={() => setPageKey(key)} id={page._id}>{page.name}</li>
              })}
            </ul>
          )}
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
