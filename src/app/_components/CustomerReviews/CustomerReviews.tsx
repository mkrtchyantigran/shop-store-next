import './customerReviews.scss'

export default function CustomerReviews() {
    return (
        <section className="customer-reviews">
            <div className="left-side">
                <h2>Customer Reviews</h2>
                <div className="stars">
                   {[...Array(5)].map((_, i) => <img key={i} src="/icons/star.svg" alt="star" />)}
                </div>
                <p>
                    Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut.
                </p>
                <p>
                    Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque
                </p>
                <div className="customer">
                    <img src="/images/customer-reviews/customer-avatar/account.png" alt="avatar" className="avatar" />
                    <div className="info">
                        <span className="full-name">Devon Simpson</span>
                        <span className="role">Customer</span>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <img src="/images/customer-reviews/reviews-img.jpg" alt="reaview-image" />
            </div>
        </section>
    )
}
