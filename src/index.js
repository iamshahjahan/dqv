import React from "react";
import { render } from "react-dom";
import Header  from "./app/Header";
import DailyVerse  from "./app/DailyVerse";
 
class App extends React.Component{
	render()
	{
		
		return (
				<div>
					<Header/>
					<DailyVerse/>
				</div>
			);
	}
}

render(<App/>,window.document.getElementById("root"));