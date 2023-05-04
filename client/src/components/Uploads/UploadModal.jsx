import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { isEmpty } from '../../utils';

export default function UploadModal({setModal}) {
  
  const [load, setLoad] = useState(false);
  const [picture, setPicture] = useState();

  const imagesData = useSelector(state => state.imagesReducer);

  useEffect(() => {
    console.log(imagesData);
    if (!isEmpty(imagesData))
    {
      setLoad(true);
    }
  }, [imagesData]);

  const imageAddHandle = () => {
    console.log(picture)
  }

  return (
    <div className='image-manager'>
        <div className="image-manager-container">
            <div className="image-manager-content">
                <div className="head">
                    <h1>Image Manager</h1>
                </div>
                <div className="body">
                    <div className="items">
                      <div className="image-box">
                        <input type="file" name="picture" id="picture" onChange={(e) => setPicture(e.target.files[0])} />
                        <button className='button is-info' onClick={imageAddHandle}>Add</button>
                      </div>
                      {load && (
                        <>
                          {imagesData.map((image) => {
                            return (
                              <div className="image-box">
                                <img src={`${process.env.REACT_APP_CDN_URL}/uploads/${image.path}`} /> 
                              </div>
                            )
                          })}
                        </>
                      )}
                    </div>
                    {/* <div className="items">
                        <div className="item" id='title' onClick={() => addBlock("title")}>
                            <h2 className='title'>Title</h2>
                            <p>Bigger Text</p>
                        </div>

                        <div className="item" onClick={() => addBlock('subtitle')}>
                            <h2 className='title'>Sub Title</h2>
                            <p>A Smaller Text</p>
                        </div>
                        
                        <div className="item" id='text-only' onClick={() => addBlock("text-only")}>
                            <h2 className='title'>Text</h2>
                            <p>Just a text Box</p>
                        </div>

                        <div className="item" onClick={() => addBlock('caption')}>
                            <h2 className='title'>Caption</h2>
                            <p>Text Box with a image on side</p>
                        </div>

                        <div className="item" onClick={() => addBlock('caption-right')}>
                            <h2 className='title'>Caption Right</h2>
                            <p>Text Box with a image on Right side</p>
                        </div>
                    </div>  */}
                </div>
                <div className="footer">
                    <button onClick={() => setModal(0)}>Close</button>
                </div>

            </div>
        </div>
    </div>
  )
}
