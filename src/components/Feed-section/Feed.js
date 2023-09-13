import TopNavBar from './FeedTopNavBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { useEffect, useState } from "react";
import Hot from './Hot';
import Community from './Community';
import Success from './Success';
import './Feed.css';


function Feed() {
  return (
      <div className='feed'>
        <TopNavBar />
        <Routes>
          <Route path="/" element={<Hot/>} />
          <Route path="/hot" element={<Hot/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/community" element={<Community/>} />
        </Routes>
        
      </div>
  );
}

export default Feed;
