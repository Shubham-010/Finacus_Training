import React from "react";
// import * as RIcons from "react-icons/fa";
import * as AIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData=[
    {
        title:'Home',
        path: '/home',
        icon: <AIcons.AiFillHome/>,
        className:'nav-text'
    },
    {
        title:'Product',
        path: '/products',
        icon: <IoIcons.IoIosListBox/>,
        className:'nav-text'
    },
    {
        title:'About',
        path: '/about',
        icon: <IoIcons.IoIosPerson/>,
        className:'nav-text'
    },
    {
        title:'Contact',
        path: '/contact',
        icon: <IoIcons.IoIosContact/>,
        className:'nav-text'
    },



]