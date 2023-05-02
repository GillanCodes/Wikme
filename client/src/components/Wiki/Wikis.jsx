import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils";
import WikiModule from './WikiModule';

export default function Wikis() {
  
  const wikis = useSelector((state) => state.wikiReducer);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (!isEmpty(wikis))
    { 
      setLoad(true);
      console.log(wikis)
    }
  }, [wikis]);

  return (
    <div className='wikis-container container'>
      <div className="wikis">
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
