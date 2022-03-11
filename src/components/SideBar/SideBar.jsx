import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SideBar.css'
import {
    NavLink,
    useNavigate 
} from "react-router-dom";
  import {VscDashboard} from 'react-icons/vsc';
  import {MdOutlineCategory} from 'react-icons/md';
  import {GoListUnordered} from 'react-icons/go';
  import {BsPeople} from 'react-icons/bs';
  import {BiLogOut} from 'react-icons/bi';
  

export default function SideBar() {
    const [sidebar, setsidebar] = useState(true);
    const close = "bi bi-list-nested fs-1 ml-2 p-2";
    const open = "bi bi-x-lg fs-1 ml-2 p-2";
    const [changeClass, setCangeClass] = useState(close);

    const ShowSide  = () => {
        if(sidebar) setCangeClass(open); else setCangeClass(close); 
        setsidebar(!sidebar);
    };
    const sidebarNav = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "fixed",
        transition: "450ms",
        zIndex: "10",
    };
    
    const dataMenu = [
        {icon:<VscDashboard      className="fs-3 text-white pl-2"/>,to: "",    text:"Dashboard"},
        {icon:<MdOutlineCategory className="fs-3 text-white"/>,to: "category", text:"Category"},
        {icon:<GoListUnordered   className="fs-3 text-white"/>,to: "orders",   text:"Orders"},
        {icon:<BsPeople          className="fs-3 text-white"/>,to: "customers",text:"Customers"},
        {icon:<BiLogOut          className="fs-3 text-white"/>,to: "logout",   text:"Logout"}
    ]
    const linkStyle = {
            color: 'blue',
            textDecoration: "none",
            transition: "150ms",
        
    }
    return ( 
      <> 
        <div className="" style={sidebarNav}>
           <div className="menu-icon rounded mb-5" style={{width:"6vw",height:"8vh",background: "#B0A8B9"}}>
                <i className={changeClass} onClick={ShowSide} ></i>
           </div>

            <div className='rounded-end pt-5' style={{background: "#B0A8B9"}}>
                <ul className="list-unstyled" >
                    {dataMenu.map((e,index) => (
                        <li 
                            key={index} 
                            className="mb-5"
                            style={{borderRight: "4px solid blue",
                            height: '6vh', width:"100%"}}
                        >
                            <NavLink 
                                to={e.to} 
                                className="pt-2 pb-2" 
                                style={linkStyle}
                            >
                                {e.icon} 
                                {!sidebar && <span className="fs-5 text-white">{e.text}</span>}
                            </NavLink>
                        </li>   
                    ))}
                </ul>   
            </div> 
        </div>
      </>
    )
}
































{/*
    side-bar-nav d-flex flex-column flex-shrink-0 p-3 text-white bg-dark bg-gradient
    d-flex  mb-3 mb-md-0 me-md-auto text-white text-decoration-none
    nav nav-pills flex-column mb-auto mt-4
    nav-link text-white p-3
nav-link text-white p-3
nav-link text-white p-3
nav-link text-white p-3
nav-link text-white p-3
nav-link text-white p-3


className="mt-5"

    onClick={({isActive})=>{
                            isActive ? setIsActiveClass("mt-5") :setIsActiveClass("mt-5 li-class") ;
                        }}
    
    <div className="side-bar-nav d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
<a href="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
<i></i>
<span className="fs-4">Sidebar</span>
</a>
<div className="dropdown">
<a href="#" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1" >
 <i></i>
 <strong>Larabi</strong>
</a>
</div>
</div> */}