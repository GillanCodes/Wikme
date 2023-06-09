import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import WikiModule from './WikiModule';
import { createWiki } from '../../actions/wiki.actions';
import Modal from '../Modules/Modal';
import WikiModal from './Modals/WikiModal';
import { UIdContext } from '../../App.context';

export default function MyWikis() {
  
  const wikis = useSelector((state) => state.wikiReducer);
  const errorsData = useSelector(state => state.errorsReducer);
  const [load, setLoad] = useState(false);
  const [state, setState] = useState({name: "", description: ""})

  const [modal, setModal] = useState(0);
  const [currentWiki, setCurrentWiki] = useState();

  const dispatch = useDispatch();

  const UId = useContext(UIdContext);

  useEffect(() => {
    if (!isEmpty(wikis))
    { 
      setLoad(true);
    }
  }, [wikis]);

  const createWikiHandle = () => {
    dispatch(createWiki({name: state.name, desc: state.description}));
  }

  return (
    <div className='wikis-container container'>
      <h1 className='title'>My Wikis</h1>
      <div className="errors-content">
        {!isEmpty(errorsData) && !isEmpty(errorsData.wikiErrors) && (
            <div className="errors">
              {!isEmpty(errorsData.wikiErrors.name) && (<p>{errorsData.wikiErrors.name}</p>)}
              {!isEmpty(errorsData.wikiErrors.desc) && (<p>{errorsData.wikiErrors.desc}</p>)}
          </div>
        )}  
      </div> 
      <div className="wikis-content">
        <div className='article-module'>
          <div className="article-module-container">
              <div className="article-module-content">
                  <div className="article-module-head">
                      <p>New Wiki</p>
                  </div>
                  <div className="article-module-body">
                    <div className="form">
                      <input type="text" className="input" placeholder="Wiki's name" value={state.name} onChange={(e) => setState({...state, name: e.target.value})} />
                      <input type="text" className="input" placeholder="Wiki's Description" value={state.description} onChange={(e) => setState({...state, description: e.target.value})} />
                    </div>
                    
                  </div>
                  <div className="article-module-footer">
                      <p className='button' onClick={() => createWikiHandle()}>Create</p> 
                  </div>
              </div>
          </div>
        </div>
        {load && (
        <>
          {wikis.map((wiki) => {
            if (wiki.ownerId === UId){
              return ( <WikiModule wiki={wiki} setModal={setModal} setCurrentWiki={setCurrentWiki} /> )
            }
          })}

          {modal === 1 && (
            <Modal content={<WikiModal setModal={setModal} currentWiki={currentWiki} setCurrentWiki={setCurrentWiki} />} />
          )}
        </>
       )} 
      </div>
       
    </div>
  )
}
