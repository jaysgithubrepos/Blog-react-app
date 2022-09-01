import "./sidebar.css";
import Aboutme from "./istockphoto-956316084-170667a.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'; 

function sidebar() {
  return (
    <div class="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img src={Aboutme} className="sidebarimg" alt="Aboutme"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul>
                <li>
                   Himalayas 
                </li>
                <li>
                   Mount Everest
                </li>
                <li>
                   Trekking 
                </li>
                <li>
                   Climbing 
                </li>
            </ul>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">FOLLOW US</span>
            <ul><li>
            <FacebookIcon className="icon facebook-icon"/>
            </li>
            <li>
            <InstagramIcon className="icon instagram-icon"/>
            </li>
            <li>
            <TwitterIcon className="icon twitter-icon" />

            </li>

            </ul>
        </div>

    </div>
  )
}

export default sidebar
