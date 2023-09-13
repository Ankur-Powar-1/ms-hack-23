import TopNavBar from './FeedTopNavBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { useEffect, useState } from "react";
import Hot from './Hot';
import './Feed.css'


const Success = () => <div>Success</div>;
const Community = () => <div>Community</div>;

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
