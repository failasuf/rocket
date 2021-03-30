import React, { Component } from "react";

export default class SectionHead extends Component {
  render() {
    return (
      <>
<section className="main-hero white">
	<div className=".navbar-spacer"></div>
	<div className="base-content">
		<div className="hero-content">
			<h2>earn how engineers, support agents, designers, and product managers use LogRocket every day to make users happier.</h2>
		</div>
	</div>
	<img className="clouds" src="https://logrocket-assets.io/img/clouds_banner_long.jpg" />
	<img className="rocket-flying" src="https://logrocket-assets.io/img/rocket_flying.png" />
	<img className="rocket-shadow" src="https://logrocket-assets.io/img/rocket_shadow.png" />
</section>
      </>
    );
  }
}