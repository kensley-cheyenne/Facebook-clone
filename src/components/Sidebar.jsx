import "./Sidebar.css"
import SidebarRow from "./SidebarRow.jsx";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags"
import PeopleIcon from "@mui/icons-material/People"
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return <div className="sidebar">
    <SidebarRow src={user.photoURL} title={user.displayName} />
    <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
    <SidebarRow Icon={PeopleIcon} title='Friends' />
    <SidebarRow Icon={ChatIcon} title='Messenger' />
    <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
    <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
  </div>;
}

export default Sidebar;