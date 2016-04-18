// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
// import the other things.
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, Link} from 'react-router';
import Header from './components/header';
import Voted from './components/voteResults';
import BandSearch from './components/bandSearch';


const router = (
	<Router history={hashHistory}>
		<Route path="/" component={BandSearch}/>
		<Route path="/voted" component={Voted}/>
	</Router>
)

ReactDOM.render(router, document.querySelector('main'));