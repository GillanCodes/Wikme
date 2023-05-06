import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { isEmpty } from '../../utils';
import { createPage, getPages } from '../../actions/page.actions';
import Editor from "../Editor/Editor";
import PageMenu from './PageMenu';

export default function Wiki() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);
  const [pageKey, setPageKey] = useState();
  const [newPage, setNewPage] = useState("");
  const [currentWiki, setCurrentWiki] = useState();

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
        setLoad(true);
      }
    }
    if (!isEmpty(wikiData))
    {
      wikiData.map((wiki) => {
        if (wiki._id === id)
        {
          return setCurrentWiki(wiki);
        }
      })
    }
  }, [pages, wikiData]);

  const createPageHandle = () => {
    if (!isEmpty(newPage))
    {
      dispatch(createPage({name: newPage, id}));
      setNewPage("");
    }
  }

  return (
    <div className='wiki-container container'>
      <div className="wiki-content content">
        {load && (
          <PageMenu pages={pages} wiki={currentWiki} createPageHandle={createPageHandle} setNewPage={setNewPage} newPage={newPage} />
        )}

        <div className="page">
          {load && !isEmpty(pageKey) && (
            <Editor page={pages[pageKey]} />
          )}
        </div>
      </div>
    </div>
  )
}
