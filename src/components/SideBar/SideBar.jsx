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
    const [showSide,setshowSide] = useState("8vw"); 
    const [widthClass , setWidthClass ] = useState(sidebar);
    const close = "bi bi-list-nested text-light fs-1";
    const open = "bi bi-x-lg text-light fs-1";
    const [changeClass, setCangeClass] = useState(close);

    const ShowSide  = () => {
        if(sidebar) setshowSide("20vw"); else setshowSide("8vw"); 
        if(sidebar) setCangeClass(open); else setCangeClass(close); 
        if(sidebar) setWidthClass(showSide); else setWidthClass(!showSide); 
        setsidebar(!sidebar);
    };
    const sidebarNav = {
        background: "#15171c",
        minWidth:`${showSide}`,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyContent: "flex-start",
        position: "fixed",
        transition: "450ms",
        zIndex: "10",
        alignItems: "center"
    };
    
    const dataMenu = [
        {icon:<VscDashboard      className="fs-3 text-white"/>,to: "",         text:"Dashboard"},
        {icon:<MdOutlineCategory className="fs-3 text-white"/>,to: "category", text:"Category"},
        {icon:<GoListUnordered   className="fs-3 text-white"/>,to: "orders",   text:"Orders"},
        {icon:<BsPeople          className="fs-3 text-white"/>,to: "customers",text:"Customers"},
        {icon:<BiLogOut          className="fs-3 text-white"/>,to: "logout",   text:"Logout"}
    ]
    const linkStyle = ({isActive}) => {
        // isActive ? setWidthClass("8vw") : setWidthClass("20vw") ;
        return {
            color: 'white',
            borderRight: isActive ? "4px solid blue" : "",
            textDecoration: "none",
            transition: "150ms",
        }
    }
    return ( 
      <> 
        <div className="" style={sidebarNav}>
           <div className="menu-icon">
                <i className={changeClass} onClick={ShowSide}></i>
           </div>

            <div>
                <ul className="list-unstyled" >
                    {dataMenu.map((e,index) => (
                        <li 
                            key={index} 
                            className="mt-5"
                            style={{width: `${widthClass}`}}
                        >
                            <NavLink 
                                to={e.to} 
                                className={({isActive}) => {
                                    const test = isActive ? "pt-2 pb-2" : "pt-2 pb-2";
                                    return test
                                }} 
                                style={linkStyle}
                            >
                                {e.icon} 
                                {!sidebar && <span className="fs-5">{e.text}</span>}
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