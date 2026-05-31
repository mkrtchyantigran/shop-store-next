import Image from "next/image";
import "./contact-us.scss";

const contactDetails = [
  {
    label: "Physical address",
    value: "60 Fremont Ave. Hamden, CT 06514",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 11.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 18.333c3.333-3.333 6.667-6.318 6.667-10a6.667 6.667 0 0 0-13.334 0c0 3.682 3.334 6.667 6.667 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Phone number",
    value: "+437 402-2459",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18.333 14.1v2.5a1.667 1.667 0 0 1-1.816 1.666 16.5 16.5 0 0 1-7.192-2.558 16.25 16.25 0 0 1-5-5A16.5 16.5 0 0 1 1.766 3.483 1.667 1.667 0 0 1 3.425 1.667h2.5a1.667 1.667 0 0 1 1.666 1.433c.105.8.3 1.585.583 2.341a1.667 1.667 0 0 1-.375 1.759L6.741 8.258a13.333 13.333 0 0 0 5 5l1.058-1.058a1.667 1.667 0 0 1 1.76-.375c.755.283 1.541.478 2.341.583a1.667 1.667 0 0 1 1.433 1.692Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Email address",
    value: "fStore@email.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m18.333 5-8.333 5.833L1.667 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ContactUs() {
  return (
    <>
      <section className="contact-hero">
        <Image
          src="/images/about-us/home-image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="contact-card-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-info">
              <h1>Contact Us</h1>
              <p className="contact-info-desc">
                Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla
              </p>
              <ul className="contact-info-list">
                {contactDetails.map((item) => (
                  <li key={item.label}>
                    <div className="contact-info-row">
                      <span className="contact-info-icon">{item.icon}</span>
                      <span className="contact-info-label">{item.label}</span>
                    </div>
                    <div className="contact-info-value">{item.value}</div>
                  </li>
                ))}
              </ul>
            </div>

            <form className="contact-form">
              <h2>Get in touch</h2>
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" type="text" placeholder="Your name..." />
                </div>
                <div className="contact-form-field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input id="contact-phone" name="phone" type="tel" placeholder="Your phone number..." />
                </div>
              </div>
              <div className="contact-form-field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" placeholder="Your email address..." />
              </div>
              <div className="contact-form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows={5} placeholder="Your message..." />
              </div>
              <button type="submit" className="contact-form-submit">Send message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="container">
          <iframe
            title="Store location"
            src="https://maps.google.com/maps?q=60+Fremont+Ave+Hamden+CT+06514&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
