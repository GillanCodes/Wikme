import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, toTimestamp } from '../../utils';
import { postImage } from '../../actions/image.actions';
import { setCaptionImage, setImages } from '../Editor/blocks';

export default function UploadModal({setModal, currentBlock, pageId, imageKey}) {
  
  const [load, setLoad] = useState(false);
  const [picture, setPicture] = useState();

  const imagesData = useSelector(state => state.imagesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(imagesData))
    {
      setLoad(true);
    }
  }, [imagesData]);

  const imageAddHandle = () => {
    console.log(picture)
    var data = new FormData();
    data.append("picture", picture);
    dispatch(postImage(data));
  }

  const imageClickAction = (path) => {
    switch (currentBlock.type)
    {
      case 'caption':
        setCaptionImage(currentBlock.UId, path, pageId);
        break;
      case 'images':
        console.log(currentBlock)
        setImages(currentBlock.UId, path, pageId, imageKey);
        break;
      default:
        break;
    }
    setModal(0);
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
                          {imagesData.sort((a,b) => (toTimestamp(b.createdAt) - toTimestamp(a.createdAt))).map((image) => {
                            return (
                              <div className="image-box">
                                <img onClick={() => !isEmpty(imageClickAction) ? imageClickAction(image.path) : null} src={`${process.env.REACT_APP_CDN_URL}/uploads/${image.path}`} /> 
                              </div>
                            )
                          })}
                        </>
                      )}
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => setModal(0)}>Close</button>
                </div>

            </div>
        </div>
    </div>
  )
}
