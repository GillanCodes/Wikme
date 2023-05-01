import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { isEmpty } from '../../utils';
import { getPages } from '../../actions/page.actions';

export default function Wiki() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

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
              {pages.map((page) => {
                return <li>{page.name}</li>
              })}
            </ul>
          )}
        </div>


      </div>
    </div>
  )
}
