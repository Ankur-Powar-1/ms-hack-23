import './App.css';
import BottomNavBar from './components/BottomNavBar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { useEffect, useState } from "react";
import Option2 from './components/Option2';
import Feed from './components/Feed-section/Feed';

const Home = () => <div className="cover">Home Page</div>;

const Option3 = () => <div className="cover">Option 3 Page</div>;
const Option4 = () => <div className="cover">Option 4 Page</div>;

function App() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" exact element={<Feed/>} />
          <Route path="/option2" element={<Option2/>} />
          <Route path="/option3" element={<Option3/>} />
          <Route path="/option4" element={<Option4/>} />
        </Routes>
        <BottomNavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
