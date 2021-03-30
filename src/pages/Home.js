import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import {Helmet} from "react-helmet";

export default class Home extends Component {
  render() {
    return (
      <>
	    <Helmet>
			<meta charSet="utf-8" />
			<title>Frontend Developer</title>
			<meta name="description" content="Falah Failasuf Frontend Developer" />
		</Helmet>
        <Header></Header>

<section className="main-hero white">
	<div className=".navbar-spacer"></div>
	<div className="base-content">
		<div className="hero-content">
			<h1 id="sub">Frontend Developer, Full Stack Web </h1>
			<h2>LogRocket lets you replay what users do on your site, helping you reproduce bugs and fix issues faster.</h2>
			<div className="signup-form-wrapper">
				<a className="btn btn-outline-primary br-15" href="/request-demo/">Contact Me</a>&nbsp;&nbsp;
				<button className="btn btn-primary br-15">
					Get Started Free
				</button>
			</div>
		</div>
	</div>
	<img className="clouds" src="https://logrocket-assets.io/img/clouds_banner_long.jpg" />
	<img className="rocket-flying" src="https://logrocket-assets.io/img/rocket_flying.png" />
	<img className="rocket-shadow" src="https://logrocket-assets.io/img/rocket_shadow.png" />
</section>
<section className="trusted-by">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-5">
				Trusted by these great companies:
			</div>
			<div className="col-7">
				<div className="img-wrapper">
					<img className="reddit" src="https://logrocket-assets.io/img/reddit_logo.png" />
					<img className="airbnb" src="https://logrocket-assets.io/img/airbnb_logo.png" />
					<img className="nbc" src="https://logrocket-assets.io/img/nbc_logo.png" />
					<img className="wheniwork" src="https://logrocket-assets.io/img/when_i_work_logo.png" />
					<img className="carfax" src="https://logrocket-assets.io/img/carfax_logo.png" />
				</div>
      </div>
    </div>
	</div>
</section>
<section>
  <div className="container animated">
        <div className="row">
            <div className="col-6 d-flex align-items-center text-center">
            <h3>
Understanding problems in your web app shouldn't be this hard.
</h3>
            </div>
            <div className="col-6">
            <img src="https://logrocket-assets.io/img/confusion.png"/>
            </div>
        </div>
  </div>
</section>
<Footer></Footer>
      </>
    );
  }
}