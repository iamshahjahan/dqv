import React from "react";
import { render } from "react-dom";
 
export default class Header extends React.Component{
	render()
	{
		
		return (
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
			        <a className="navbar-brand" href="#page-top">Daily Quranic Verses</a>
			        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			            <span className="navbar-toggler-icon"></span>
			        </button>
			        <div className="collapse navbar-collapse" id="navbarResponsive">
			            <ul className="navbar-nav ml-auto">
			                <li className="nav-item">
			                    <a className="nav-link" href="#about">About</a>
			                </li>
			                <li className="nav-item">
			                    <a className="nav-link" href="#services">Services</a>
			                </li>
			                <li className="nav-item">
			                    <a className="nav-link" href="#contact">Contact</a>
			                </li>
			            </ul>
			        </div>
			    </nav>
			);
	}
}