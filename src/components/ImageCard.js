import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ImageCard = (props) => {
  const tags = props.image.tags.split(',');
  // split() takes a string and turns it into an array 

  return (
    <div className="max-w-sm text-center rounded overflow-hidden shadow-lg">
      <img src={props.image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-900 text-xl mb-2">
          Photo by {props.image.user}
        </div>

        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3">
          <span>
            <FontAwesomeIcon icon={faEye} />
            &nbsp;
          </span>
          {props.image.views}{" "}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3">
          <FontAwesomeIcon icon={faDownload} />
          &nbsp; {props.image.downloads}{" "}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3">
          <FontAwesomeIcon icon={faHeart} />
          &nbsp; {props.image.likes}{" "}
        </span>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
           <span key={index} className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
           #{tag}
         </span> 
        ))}
      
      </div>
    </div>
  )
}

export default ImageCard