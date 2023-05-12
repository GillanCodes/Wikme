import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { isEmpty } from '../../utils';
import { createPage, getPages } from '../../actions/page.actions';
import Editor from "./Editor/Editor";
import PageMenu from './Menus/PageMenu';
import { UIdContext } from '../../App.context';
import Viewer from './Viewer/Viewer';

export default function Wiki({isViewer}) {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);
  const [wikiLoad, setWikiLoad] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  const [pageKey, setPageKey] = useState();
  const [newPage, setNewPage] = useState("");
  const [currentWiki, setCurrentWiki] = useState();

  const pages = useSelector(state => state.pageReducer);
  const wikiData = useSelector(state => state.wikiReducer);
  const UId = useContext(UIdContext);
  
  useEffect(() => {
    if (!isEmpty(id))
    {
      dispatch(getPages(id));
      setDispatched(true);
    }
  }, [id]);

  useEffect(() => {
    if (!isEmpty(pages) && dispatched)
    {
      if (!isEmpty(pages[0])){
        setPageKey(0);
      }
      setLoad(true);
    }
    if (!isEmpty(wikiData))
    {
      wikiData.map((wiki) => {
        if (wiki._id === id)
        {
          setCurrentWiki(wiki);
          setWikiLoad(true);
          return;
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
        {wikiLoad ? (
          <>
            {isViewer ? (
              <>
                <PageMenu 
                  pages={pages} 
                  wiki={currentWiki} 
                  setPageKey={setPageKey}
                  pageKey={pageKey}
                  editable={false}
                  isOwner={currentWiki.ownerId === UId}
                />
                <Viewer page={pages[pageKey]} />
              </>
            ) : (
              <>
              {currentWiki.ownerId === UId ? (
                <>
                  <PageMenu 
                    pages={pages} 
                    wiki={currentWiki} 
                    createPageHandle={createPageHandle} 
                    setNewPage={setNewPage} 
                    newPage={newPage}
                    setPageKey={setPageKey}
                    pageKey={pageKey}
                    editable={true}
                    isOwner={currentWiki.ownerId === UId}
                    />
                  {load && !isEmpty(pageKey) && (
                    <Editor page={pages[pageKey]} />
                  )}
                </>
                ) : (
                  <>
                    {currentWiki.isPublic ? (
                      <>
                        <PageMenu 
                          pages={pages} 
                          wiki={currentWiki} 
                          setPageKey={setPageKey}
                          pageKey={pageKey}
                          editable={false}
                        />
                        <Viewer page={pages[pageKey]} />
                      </>
                    ) : (
                      <>
                        <p>This wiki does not exist or is private</p> 
                        {/* TODO : Error page */}
                      </>
                    )}
                  </>
                )} 
              </>
            )}
          </>
        ): (
          <>
            <p>This wiki does not exist or is not public</p>
          </>
        )}
      </div>
    </div>
  )
}
