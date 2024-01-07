import React from 'react';
import vid1 from '../Assets/Videos/vid_1.mp4';
import vid2 from '../Assets/Videos/vid_2.mp4';
import vid3 from '../Assets/Videos/vid_3.mp4';
import vid4 from '../Assets/Videos/vid_4.mp4';

const videoSources = [vid2, vid3, vid4, vid1];

const Slider = () => {
    return (
        <div className='slider'>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    {videoSources.map((source, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {videoSources.map((source, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <video
                                src={source}
                                autoPlay
                                muted
                                loop
                                className="d-block w-100"
                                playsInline
                                loading="lazy"
                            >
                                <source src={source} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <div className="btn-color">
                        <span className="carousel-control-prev-icon main-color" aria-hidden="true"></span>
                    </div>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <div className="btn-color">
                        <span className="carousel-control-next-icon main-color" aria-hidden="true"></span>
                    </div>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;
