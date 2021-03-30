import React, { Component } from "react";
import Header from "../parts/Header";
import Card from "../parts/Cards";
import Footer from "../parts/Footer";
import {Helmet} from "react-helmet";

import axios from "axios";
export default class Movies extends Component {
  state = {
    data: [],
    popular: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=cab1bfdcab9dc7c24e9132e4fb6c85f2&language=en-US`
      )
      .then((res) => {
        const data = res.data.results;
        this.setState({ data });
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=cab1bfdcab9dc7c24e9132e4fb6c85f2&language=en-US&page=1`
      )
      .then((res) => {
        const popular = res.data.results;
        this.setState({ popular });
      });
  }
  render() {
    const movies = this.state;

    return (
      <>
          <Helmet>
			<meta charSet="utf-8" />
			<title>Frontend Developer | Movie List</title>
			<meta name="description" content="Movie List" />
		</Helmet>
        <Header></Header>
        <div className="container pt-5 mb-5">
            <div>
              <h3>Now Playing</h3>
            </div>
            <div class="scrolling-wrapper row flex-row flex-nowrap  pb-1 overflow-auto">
              <Card data={movies.data}></Card>
            </div>
            <div className="pt-5">
              <h3>Popular</h3>
            </div>
            <div class="scrolling-wrapper row flex-row flex-nowrap  pb-1 overflow-auto">
              <Card data={movies.popular}></Card>
            </div>
          </div>
        <Footer></Footer>
      </>
    );
  }
}