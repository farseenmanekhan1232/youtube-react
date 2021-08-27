import React from 'react';
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Video(props) {
  if(!props.id) {
    return null;
  }
  //const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=1`;
  return (
    <div className='video-container'>
      <div className="video">
        <iframe className='video-player' src={"https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"} frameBorder='0'
                        allow='autoplay; encrypted-media' allowFullScreen title='video' />
              </div>
        
            </div>
          );
        }
