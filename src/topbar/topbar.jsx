import "./topbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';  
import RedditIcon from '@mui/icons-material/Reddit';
import SearchIcon from '@mui/icons-material/Search';
import myImage from './media/jaichand.webp';
import {NavLink} from "react-router-dom";


function topbar() {
  const user=false;
  return (
    <div className="top-bar">
        <div className="left-top-bar">
            <FacebookIcon className="icon facebook-icon"/>
            <InstagramIcon className="icon instagram-icon"/>
            <TwitterIcon className="icon twitter-icon" />
            <RedditIcon className="icon reddit-icon"/>
            
        </div>
        <div className="center-top-bar">
        <ul className="toplist">
            <li ><NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="/"
    exact
>
	Home
</NavLink></li>
            <li ><NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="/post"
    
>Post
</NavLink></li>
            <li className="Contact"><NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="/write"
    exact
>
	Write
</NavLink></li>
            <li className="About"><NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="/single-post"
    exact
>
	Singlepost
</NavLink></li>
        </ul>

        </div>
        <div className="right-top-bar">
          {user ?(<img className="profile-image" src={myImage} alt="horse" />):( <ul className="toplist">
            <li className="navbar-item">
            <NavLink className="navbar-item" to="/login">Login</NavLink>
            </li>
            <li ><NavLink className="navbar-item" to="/register" exact>Register</NavLink></li>
            </ul>)}
        
          
          <SearchIcon className="search-icon"/>
          </div>



    </div>
  )
}

export default topbar