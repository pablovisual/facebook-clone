import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Freinds" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryRoundedIcon} title="VIdeos" />
            <SidebarRow Icon={ExpandMoreRoundedIcon} title="Marketplace" />
        </div>
    )
}

export default Sidebar
