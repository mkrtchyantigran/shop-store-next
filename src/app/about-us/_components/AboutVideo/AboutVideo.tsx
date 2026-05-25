'use client';

import { useState } from 'react';
import './aboutVideo.scss';

const VIDEO_ID = "mJVuZiK9a6I";

export default function AboutVideo() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="about-video">
            <div className="container">
                <div className="about-video-frame">
                    {isPlaying ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                            title="About video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ) : (
                        <div className="about-video-poster" onClick={() => setIsPlaying(true)}>
                            <img
                                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                                alt="About video"
                            />
                            <button className="about-video-play" aria-label="Play video">
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
                                    <polygon points="0,0 20,12 0,24" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
