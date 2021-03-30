import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import SectionHead from "../parts/SectionHead";
import {Helmet} from "react-helmet";
export default class Contact extends Component {
  render() {
    return (
      <>
	    <Helmet>
			<meta charSet="utf-8" />
			<title>Frontend Developer | Contact Me</title>
			<meta name="description" content="Falah Failasuf Frontend Developer" />
		</Helmet>
        <Header></Header>
        <SectionHead></SectionHead>
<section className="contact-me">      
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h3>Ways To Contact Me</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non proident, sunt in culpa qui officia</p>
            <div className="row">
            <div className="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            Falah.failasuf@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        +1 (818) 2489 XX
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-body">
                        live:shail_
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
        <Footer></Footer>
      </>
    );
  }
}