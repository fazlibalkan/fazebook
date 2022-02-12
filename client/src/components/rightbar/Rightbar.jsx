import "./rightbar.css"
import {} from "@mui/icons-material"

export default function Rightbar() {
  return (
    <div className="rightbar">
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/2.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUsername">Ali Öztürk</span>
          </li>
          
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"> </span>
            </div>
            <span className="rightbarUsername">Ceren Yaman</span>
          </li>

        </ul>
    </div>
  )
}
