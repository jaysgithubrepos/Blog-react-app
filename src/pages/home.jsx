import "./home.css";
import Header from "../components/header/header.jsx";
import Homepost from '../components/post/homepost.jsx';
import Sidebar from '../components/sidebar/sidebar.jsx';

function home() {
  return (
    <div>
    <Header/>
    <div className="homediv" >
       <Homepost/>
       <Sidebar/>
    </div>
    </div>
    
  )
}

export default home