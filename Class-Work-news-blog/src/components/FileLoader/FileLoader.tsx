import React from "react";
import ImageUploading, { ImageListType, ImageType } from "react-images-uploading";
import { IFileLoader } from "../../types";
import { Input } from "../Input";
import { Button } from "../Button";
import './FileLoader.css'


const FileLoader = ({ image, outerOnChange, outerOnRemove }: IFileLoader) => {
  const onChange = (
    imageList: ImageListType,
  ) => {
    outerOnChange(imageList)
  };

  return (
      <ImageUploading
        value={image && Object.keys(image).length !== 0 ? [image] : []}
        onChange={onChange}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
        }) => (
          <div className="upload__image-wrapper">
            <div className='input__button-container'>
              <div className='input-container'>
                <Input
                  className = 'input__file'
                  label='Image'
                  placeholder='Select file' 
                  value={imageList[0]?.file?.name || ''} 
                />
              </div>
              <div className='button-container'>
                <Button onClick={onImageUpload}
                        children={imageList[0] ? 'Change' : 'Upload'}
                        className='button__file'
                />
              </div>
            </div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="200" />
                <div className="image-item__btn-wrapper">
                  <button className='btn-remove'
                    onClick={() => {
                    onImageRemove(index);
                    outerOnRemove();
                  }}>Remove image
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
  );
}

export { FileLoader };