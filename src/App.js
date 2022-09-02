//Define Topbar 
import Topbar from './topbar/topbar';
//import Write from './pages/signup/signup.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from "./pages/home.jsx";
import Register from"./pages/signup/signup.jsx";
import Login from "./pages/login/login.jsx";

import Write from "./pages/write/write.jsx";
import Post from "./pages/single/post.jsx";
import Settings from "./pages/settings/settings.jsx";
import Singlepost from "./pages/SinglePost/singlepost.jsx";


function App() {
  const user=false;
  return (
    
      <Router>
        <Topbar />
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ?<Home/>:<Login/>}  />
      <Route path="/settings" element={user ?<Settings/>:<Register/>} />
      <Route path="/register" element={user ?<Home/>:<Register/>} />
      <Route path="/single-post" element={<Singlepost/>} />
      <Route path="/write" element={user ?<Write/>:<Register/>} />
      <Route path="/post" element={<Post />} />
      
     
      
    </Routes>
    
    </Router>
    
   
  );
}

export default App;
