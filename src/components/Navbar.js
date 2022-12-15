import React from 'react';
import {
	FaAngleRight,
	FaAngleLeft, 
    FaFile,
	FaBars
} from 'react-icons/fa';
import {
    BsTable
} from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
import navLogo from "../assets/graphics/imgs/logo.svg"

const ICON_SIZE = 20;
 
function Navbar({visible, show}) {

	return (
		<>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>
				<div>
					<NavLink
						className="logo"
						to="/"
					>
							<img
								src={navLogo}
								alt="logo"
							/>
					</NavLink>
					<div className="nav-top">
						<NavLink to="/dashboard" className="nav-link">
						</NavLink>
						<NavLink to="/article" className="nav-link">
							<span>ARTIKKEL</span>
							<FaFile className='nav-link-icon' size={ICON_SIZE} />
						</NavLink>
						<NavLink to="/table" className="nav-link">
							<span>TABEL</span> 
							<BsTable className='nav-link-icon' size={ICON_SIZE} />
						</NavLink>
					</div>
				</div>			
			</nav>
		</>
  );
}

export default Navbar;