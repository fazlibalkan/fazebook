import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router"

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER + "/";
    const [user, setUser] = useState({});
    const username = useParams().username;

    console.log(username);


    useEffect(()=> {
        const fetchUser = async () => {
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data);
          
        }
        fetchUser();
        
      }, [username]);


  return (
    <>
        <Topbar/>
        <div className="profile">
            
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src={user.coverPicture || PF + "person/nocover.png"} alt="" />
                        <img className="profileUserImg" src={user.coverPicture || PF + "person/noavatar.png"} alt="" />
                    </div>
                    <div className="profileInfo">
                        <span className="profileInfoName">{user.username}</span>
                        <span className="profileDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={username}/>
                    <Rightbar user={user}/>
                </div>
                
            </div>
        </div>
        
    </>
  )
}
