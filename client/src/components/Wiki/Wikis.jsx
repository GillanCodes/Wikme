import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import WikiModule from './WikiModule';
import { createWiki } from '../../actions/wiki.actions';

export default function Wikis() {
  
  const wikis = useSelector((state) => state.wikiReducer);
  const [load, setLoad] = useState(false);
  const [state, setState] = useState({name: "", description: ""})

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(wikis))
    { 
      setLoad(true);
      console.log(wikis)
    }
  }, [wikis]);

  const createWikiHandle = () => {
    dispatch(createWiki({name: state.name, desc: state.description}));
  }

  return (
    <div className='wikis-container container'>
      <div className="wikis">
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
          {/* <WikiModule wiki={wikis[0]} /> */}
          {wikis.map((wiki) => {
            return ( <WikiModule wiki={wiki} /> )
          })}
        </>
       )} 
      </div>
       
    </div>
  )
}
