import "./write.css";
import AddIcon from '@mui/icons-material/Add';
import Writesomething from "./m_Forest Research Institute-5_l_395_640.webp";

function write() {
  return (
    <div className="write-container">
        <img src={Writesomething} alt="writesomething" className="writesomethingImg" ></img>

        <form className="writeform">
            <div className='writeformgroup'> 
            <label htmlFor='fileinput'>
            <AddIcon className="writeicon" />
            </label>
                <input type="file" id="fileInput" className="fileInput" />
                <input type="text" placeholder='Title' className='write-some' autoFocus={true} />
            </div>
            <div className="writeformgroup">
                <textarea placeholder="Tell Your Story about going .." type="text" className="write-some write-text"></textarea>
            </div>
            <button className="write-submit">Publish Blog</button>


        </form>


    </div>
  )
}

export default write