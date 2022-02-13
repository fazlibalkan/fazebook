import "./rightbar.css"
import {} from "@mui/icons-material"
import {Users} from "../../dummyData"
import Online from "../online/Online.jsx"

export default function Rightbar() {
  return (
    <div className="rightbar">
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
    </div>
  )
}
