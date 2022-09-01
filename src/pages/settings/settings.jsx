import "./settings.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import myImage from "../../Assets/pexels-stephan-seeber-1054218.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function settings() {
  return (
    <div className="settings">
        <div className="settingswrapper">
            <div className="settingsTitle">
                <span className="settingsupdatetitle">Update Your Account</span>
                <span className="settingsdeletetitle">Delete Your Account  </span>


            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div class="settingsprofilepicture">
                    <img src={myImage} alt="Profilepic" className="Profilepic"></img>
                    <label htmlFor="fileinput">
                    <AccountCircleIcon className="acc-icon"/>
                        

                    </label>
                    <input type="file" id="fileInput" />

                </div>
                <label>Username:</label>
                <input type="text" className="username" placeholder="Username"/>
                <label>Email:</label>
                <input type="email" className="Email" placeholder="Email@email.com "></input>
                <label> Password:</label>
                <input type="password" className="password" placeholder="Enter Your Password"></input>  
                <button className="settingsupdate">Update Your Settings</button>

            </form>

        </div>

        <Sidebar/>
    </div>
  )
}

export default settings