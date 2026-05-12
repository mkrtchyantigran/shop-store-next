import './mainBanner.scss';

export default function MainBanner() {
    return (
        <section className="main-section">
                <div className='container'>

                    <div className='text-content'>
                        <span className='badge'>Furniture</span>
                        <h1>Where Traditional Meets Modern</h1>
                        <p>Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et cursus pharetra tellus tincidunt.</p>

                        <div className='main-buttons'>
                            <button className='btn btn-primary'>Shop Now</button>
                            <button className='btn btn-secondary'>Learn More</button>
                        </div>
                    </div>

                    <div className="left-side">
                        <div className="cards-wrapper">
                            <div className="cards-grid">
                                <div className="card">
                                    <span className="price">$199</span>
                                    <img src="/images/chair.jpg" alt="High chair" />
                                </div>

                                <div className="card promo-card">
                                    <h3>25% OFF</h3>
                                    <p>custom-made<br />furniture</p>
                                </div>

                                <div className="card">
                                    <span className="price">$99</span>
                                </div>

                                <div className="card">
                                    <span className="price">$199</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}
