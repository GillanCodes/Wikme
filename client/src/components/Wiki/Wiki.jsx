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
  const [page, setPage] = useState();

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
      setLoad(true);
    }
  }, [pages])

  return (
    <div className='container'>
      <div className="content">
        <div className="side-menu">
          {load && (
            <ul>
              {pages.map((page, key) => {
                return <li onClick={() => setPage(key)} id={page._id}>{page.name}</li>
              })}
            </ul>
          )}
        </div>

        <div className="page">
          {load && !isEmpty(page) && (
            <Editor page={pages[page]} />
          )}
        </div>

      </div>
    </div>
  )
}
