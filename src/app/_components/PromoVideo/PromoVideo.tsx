'use client';

import { useState } from 'react'
import "./promoVideo.scss";
const VIDEO_ID = "mJVuZiK9a6I";



export default function PromoVideo() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="promo-video">
            <div className="promo-video-content">
                <div className="promo-video-player">
                    {isPlaying ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                            title="Promo Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ) : (
                        <div className="poster" onClick={() => setIsPlaying(true)}>
                            <img
                                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                                alt="Promo video"
                            />
                            <button className="play-btn" aria-label="Play video">
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
                                    <polygon points="0,0 20,12 0,24" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                <div className="promo-video-text">
                    <h2>Affordable furniture for every home</h2>
                    <p>Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut.</p>
                    <p>Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo</p>
                </div>
            </div>
        </section>
    )
}

