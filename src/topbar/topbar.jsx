import "./topbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';  
import RedditIcon from '@mui/icons-material/Reddit';
import SearchIcon from '@mui/icons-material/Search';
import myImage from './media/jaichand.webp';



function topbar() {
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
            <li className="home">Home</li>
            <li className="News">News</li>
            <li className="Contact">Contact</li>
            <li className="About">About</li>
        </ul>

        </div>
        <div className="right-top-bar">
        <img className="profile-image" src={myImage} alt="horse" />
          
          <SearchIcon className="search-icon"/>
          </div>



    </div>
  )
}

export default topbar