import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Topbar() {
    return (

        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Fazebook</span>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friends, posts or videos" type="text" className="searchInput" />
                </div>
            </div>

            <div className="topbarRight">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}