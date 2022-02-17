import "./feed.css"
import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"
import { useEffect, useState } from "react"
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=> {
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/" + username) : await axios.get("posts/timeline/62040eaebc99b92512ea9bff");
      setPosts(res.data);
    }
    fetchPosts();
    
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
          <Share/>
          {posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
          
      </div>
    </div>
  )
}
