import React from 'react';
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

const NotFound = () => (
<>
<Helmet>
			<meta charSet="utf-8" />
			<title>Frontend Developer | Not FOund</title>
			<meta name="description" content="Falah Failasuf Frontend Developer" />
</Helmet>
<Header></Header>
<div className="container">
    <div className="main-hero">
        <h1>404 - Not Found!</h1>
        <Link to="/">
        Go Home
        </Link>
    </div>
</div>
<Footer></Footer>
  </>
);

export default NotFound;