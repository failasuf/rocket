import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import {Helmet} from "react-helmet";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player';
import "../Style/Detail.scss";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {SinglePost.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function SinglePost() {
  const { movieId } = useParams();
  const [modalShow, setModalShow] = React.useState(false);

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cab1bfdcab9dc7c24e9132e4fb6c85f2&append_to_response=videos`;
  const [SinglePost, setPost] = useState(null);
  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, [url]);

  if (SinglePost) {
    return (content = (
      <>
    <Helmet>
			<meta charSet="utf-8" />
			<title>Frontend Developer | {SinglePost.title}</title>
			<meta name="description" content={`${SinglePost.title}`} />
		</Helmet>
      <Header></Header>
      <div className="covere"  style={{ 
                                        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${SinglePost.poster_path})`
                                        }}>
      </div>
      <section className="detail-movie">
        
      <div className="container detaile">
        <div className="row">
          <div className="col row">
          <div className="col-4">
            <img src={`https://image.tmdb.org/t/p/original/${SinglePost.poster_path}`} alt="img" />
          </div>
          <div className="col-8">
              <h3>{SinglePost.title}</h3>
              <p><em>{SinglePost.release_date}</em> </p>
              <div className="row">
              <div className="average pl-3">
                <div className="progress" data-percentage={`${SinglePost.vote_average.toString().replace('.', '')}`}>
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">
                    <div>
                      {SinglePost.vote_average}%<br/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-2 average align-self-center">
                  <h5>Average</h5>
              </div>
              <div className="average pl-2">
              <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />                      
              </div>
              </div>
              <h5 className="pt-3 pb-3">Over view</h5>
              <p>{SinglePost.overview}</p>
              <p>
                <span className="badge badge-secondary">{SinglePost.genres[0].name}</span>&nbsp; 
                <span className="badge badge-secondary">{SinglePost.genres[1].name}</span>&nbsp;

              </p>
                                          
          </div>
      </div>
      </div> 
      </div>
      </section>
      
      <Footer></Footer>
      </>
    ));
  }

  return <div>{content}</div>;
}

export default SinglePost;