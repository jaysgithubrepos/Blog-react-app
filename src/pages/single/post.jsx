import "./Post.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Post from "../SinglePost/singlepost.jsx";

function post() {
  return (
    <div className="post">
      <Post/>
      <Sidebar/>

    </div>
  )
}

export default post