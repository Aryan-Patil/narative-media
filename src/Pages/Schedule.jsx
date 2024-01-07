import React from 'react';
import call_me from '../Assets/Videos/call_me.mp4';

const Schedule = () => {
    return (
        <div className='Schedule'>
            <div className="p-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <video autoPlay loop muted className='animation-width' playsInline  loading="lazy">
                            <source src={call_me} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ms-5">
                            <h1 className="schedule-title pb-5">We unlock your brand's potential to scale using content & marketing</h1>
                            <p className="schedule-text mb-4">Narative Media is a social media marketing agency that empowers content creators and businesses to achieve their online goals. We specialize in creating captivating visual content, crafting engaging social media campaigns, and developing effective content strategies that resonate with your target audience.</p>
                            <div className="schedule-btn-margin">
                                <a target="_blank" className='schedule-call' href="https://calendly.com/narative_media/content-strategy-planing">Schedule a Call</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
