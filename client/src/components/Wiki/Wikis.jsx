import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import WikiModule from './WikiModule';
import { UIdContext } from '../../App.context';

export default function Wikis() {
  
  const wikis = useSelector((state) => state.wikiReducer);
  const [load, setLoad] = useState(false);

  const UId = useContext(UIdContext)

  useEffect(() => {
    if (!isEmpty(wikis))
    { 
      setLoad(true);
      console.log(wikis)
    }
  }, [wikis]);

  return (
    <div className='wikis-container container'>
        <h1 className='title'>Public Wikis</h1>
        <div className="wikis">
        
        {load && (
            <>
            {wikis.map((wiki) => {
                if (wiki.isPublic){
                return ( <WikiModule wiki={wiki} isOwned={wiki.ownerId === UId} /> )
                }
            })}
            </>
        )} 
        </div>
       
    </div>
  )
}
