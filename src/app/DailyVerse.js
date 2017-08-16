import React from "react";
import { render } from "react-dom";
import axios from 'axios'
 
export default class DailyVerse extends React.Component{
	constructor()
	{
		super();

		this.state = {
			verse_of_the_day : '.....',
			chapter : 1,
			verse_number : 1
		}
	}

	componentDidMount() {
		var _this = this;
		axios.get('http://localhost:8081/api/random/eng/wahid')
		  .then(function (response) {
		    console.log(response.data.data[0].text);
		    _this.setState({
		    	verse_of_the_day: response.data.data[0].text,
		    	chapter: response.data.data[0].chapter,
		    	verse_number: response.data.data[0].verse_number
		    });

		    // state.verse_of_the_day = response.data.data[0].text;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	render()
	{
		
		return (		
    			<div>
    				<header className="bg-primary text-white">
				        <div className="container text-center">
				            <h2>{this.state.verse_of_the_day}</h2>
				            <p>Al'Quran | {this.state.chapter} | {this.state.verse_number} | Random</p>
				            <p>More to come, Insha Allah. Please be waited.</p>
				        </div>
				    </header>

				    <section id="about">
				        <div className="container">
				            <div className="row">
				                <div className="col-lg-8 mx-auto">
				                    <h2>About this page</h2>
				                    <p className="lead">I designed this page to send an email daily to it's subscribers, containing verse of the day. I will choose a verse and send you the mail containing the quran and it's translation.</p>
				               
				                </div>
				            </div>
				        </div>
				    </section>

				    <section id="services" className="bg-light">
				        <div className="container">
				            <div className="row">
				                <div className="col-lg-8 mx-auto">
				                    <h2>Services we offer</h2>
				                    <p className="lead">Apart from showing daily a verse from glorious Qur'an, I am working on some more alert based technology, such as SMSes alert, facebook chatbot alert etc. Would love to see more suggestions from you.</p>
				                </div>
				            </div>
				        </div>
				    </section>

				    <section id="contact">
				        <div className="container">
				            <div className="row">
				                <div className="col-lg-8 mx-auto">
				                    <h2>Contact us</h2>
				                    <p className="lead">I am currently working as a Software Engineer. I can be reached via my email ahmsjahan@gmail.com</p>
				                </div>
				            </div>
				        </div>
				    </section>

				    <footer className="py-5 bg-dark">
				        <div className="container">
				            <p className="m-0 text-center text-white">Copyright &copy; Daily Quranic verses 2017</p>
				        </div>
				    </footer>
    			</div>

			);
	}
}