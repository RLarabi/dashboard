import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SideBar.css'
import {
    Link,
    useNavigate
} from "react-router-dom";
  import {VscDashboard} from 'react-icons/vsc';
  import {MdOutlineCategory} from 'react-icons/md';
  import {GoListUnordered} from 'react-icons/go';
  import {BsPeople} from 'react-icons/bs';
  import {BiLogOut} from 'react-icons/bi';
  

export default function SideBar() {
    const navigate =  useNavigate();
    const [sidebar, setsidebar] = useState(true);
    const [showSide,setshowSide] = useState("8vw");
    const [activeClass , setActiveClass ] = useState("text-white fs-5");
    const close = "bi bi-list-nested text-light fs-1";
    const open = "bi bi-x-lg text-light fs-1";
    const [changeClass, setCangeClass] = useState(close);
    const ShowSide  = () => {
        if(sidebar) setshowSide("20vw"); else setshowSide("8vw");
        if(sidebar) setCangeClass(open); else setCangeClass(close);
        // if(sidebar) setDisplayItem("text-white fs-5"); else setDisplayItem("text-white fs-5");
        setsidebar(!sidebar);
    };
    const sidebarNav = {
        background: "#15171c",
        width:`${showSide}`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyContent: "flex-start",
        position: "fixed",
        transition: "450ms",
        zIndex: "10",
        alignItems: "center"
    };
    const menuItem = {
        width:`${showSide}`,
        backgroundColor: "red"
    }
    const dataMenu = [
        {icon:<VscDashboard  className="fs-3 text-white"/>,to: "",text:"Dashboard"},
        {icon:<MdOutlineCategory className="fs-3 text-white"/>,to: "category",text:"Category"},
        {icon:<GoListUnordered className="fs-3 text-white"/>,to: "orders",text:"Orders"},
        {icon:<BsPeople className="fs-3 text-white"/>,to: "customers",text:"Customers"},
        {icon:<BiLogOut className="fs-3 text-white"/>,to: "logout",text:"Logout"}
    ]
    return ( 
      <> 
        <div className="" style={sidebarNav}>
           <div className="menu-icon">
                <i className={changeClass} onClick={ShowSide}></i>
           </div>
            <div>
                <ul className="list-unstyled ">
                    {dataMenu.map((e,index) => (
                        <li key={index} className="mt-5 test">
                            <Link to={e.to} key={index}>
                                {e.icon} 
                            {!sidebar && <span className="fs-5 text-white text" key={index} onClick={() =>{
                                if(e.text == "Logout") navigate('/login');
                            }}>{e.text}</span> 
                            }
                            </Link>
                        </li>   
                    ))}
                </ul>   
            </div> 
        </div>
      </>
    )
}

function getShowside ({sidebar}){
return sidebar;
}

export {getShowside};














{/* <li className="mt-5" style={menuItem}>
                        <Link to="/" className="" >
                            <VscDashboard className='fs-1 text-white'/>
                            {!sidebar && <span className="fs-5 text-white">Dashboard</span> }
                        </Link>
                    </li>

                    <li className=" mt-5">
                        <Link to="/category" className="" >
                            <MdOutlineCategory className='fs-1 text-white'/>
                            {!sidebar && <span className="fs-5 text-white">Category</span> }                        </Link>
                    </li>  

                    <li className=" mt-5">
                        <Link to="/orders" className="" >
                            <GoListUnordered className='fs-1 text-white'/>
                            {!sidebar && <span className="fs-5 text-white">Orders</span> }                        </Link>
                    </li> 

                    <li className=" mt-5">
                        <Link to="/customers" className="" >
                            <BsPeople className='fs-1 text-white'/>
                            {!sidebar && <span className="fs-5 text-white">Customers</span> }                        </Link>
                    </li> 

                    <li className=" mt-5">
                        <Link to="/logout" className="" >
                            <BiLogOut className='fs-1 text-white'/>
                            {!sidebar && <span className="fs-5 text-white ml-4">Logout</span> }                        </Link>
                    </li> */}









{/* <ul className="">
<li className="">
    <Link to="/dashboard" className="" >
    <VscDashboard/>
        Dashboard
    </Link>
</li>

<li className="">
    <Link to="/categories" className="" > 
        <MdOutlineCategory/> 
            Category
    </Link>

</li>

<li className="">
    <Link to="/orders" className="">
    <GoListUnordered/>
        Orders
    </Link>
</li>

<li className="">
    <Link to="/products" className="">
    <MdProductionQuantityLimits/>
        Products
    </Link>
</li>

<li className="">
    <Link to="/customers" className="">
    <BsPeople/>
        Customers
    </Link>
</li>

<li className="" onClick={
    () => {
        navigate('/login');
    }
}>
    <Link to="/login" className="" >
    <BiLogOut/>
        Logout
    </Link>
</li>
</ul> */}


























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