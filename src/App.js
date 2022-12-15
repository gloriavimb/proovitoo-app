import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/index.css";
import bgDecoRigth from './assets\\graphics\\imgs\\bg-deco-right.svg';
import bgDecoLeft from './assets\\graphics\\imgs\\bg-deco-left.svg';
import Artikkel from './pages/Artikkel';
import Tabel from './pages/Tabel';


function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<BrowserRouter >
			<div className="App">
				<Navbar visible={navVisible} show={showNavbar} />
				<div className='content'>
					<Routes>
						<Route path="/" element={<Navigate to="/dashboard" />} />
						<Route path='/dashboard' element={
							<div className={!navVisible ? "page" : "page page-with-navbar"}>
								<h1 className='mainTitle'>TRINIDAD WISEMAN</h1>
								<h2 className='subTitle'>SPA proovitöö</h2>
							</div>
						} />
						<Route path='/article' element={<Artikkel />} />
						<Route path='/table' element={<Tabel />} />
					</Routes>
				</div>
				<div className='bgDecoRigth'>
					<img src={bgDecoRigth}></img>
				</div>
				<div className='bgDecoLeft' style={{ backgroundImage: `url(${bgDecoLeft})` }}></div>
			</div>
		</BrowserRouter>
	);
}

export default App;