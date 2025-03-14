import { useState } from 'react'
import { VIDEOS } from './videos.js'
import reactLogo from './assets/react.svg'
import './App.css'
import Video from './Video/Video.jsx'

function App() {

  return (
    <>
      <div className='video-container'>
        {
          VIDEOS.map(video => (
            <Video key={video.id} title={video.title} channelName={video.channelName} img={video.img} />
          ))
        }
        
      </div>
    </>
  )
}

export default App
