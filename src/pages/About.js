import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import SectionHead from "../parts/SectionHead";
export default class Home extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <SectionHead></SectionHead>

        <Footer></Footer>
      </>
    );
  }
}