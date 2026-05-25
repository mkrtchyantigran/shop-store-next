import Image from "next/image"
import Link from "next/link";
import AboutVideo from "./_components/AboutVideo/AboutVideo";
import "./about-us.scss";


const stats = [
    { icon: "/icons/about-stats/armchair.svg", value: "860+", label: "Armchairs" },
    { icon: "/icons/about-stats/cabinet.svg", value: "1800", label: "Cabinets" },
    { icon: "/icons/about-stats/sofa.svg", value: "2k+", label: "Sofas" },
    { icon: "/icons/about-stats/chair.svg", value: "2500", label: "Chairs" },
];

const team = [
    { name: "Ian Dyer", role: "Consultant" },
    { name: "Brianna Fitzgerald", role: "Manager" },
    { name: "Heath Barry", role: "Consultant" },
];

const instagramPosts = [
    "/images/instagram/post-1.jpg",
    "/images/instagram/post-2.jpg",
    "/images/instagram/post-3.jpg",
    "/images/instagram/post-4.jpg",
    "/images/instagram/post-5.jpg",
];

export default function AboutUs() {
  return (
    <>
      <section className='about-hero'>
        <Image
          src="/images/about-us/home-image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="about-description">
        <div className="container">
          <h1>Lectus morbi eget justo tellus facilisi orci venenatis aliquet. Egestas rutrum volutpat pretium curabitur scelerisque.</h1>
          <div className="about-description-columns">
            <p>Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Pellentesque ipsum consequat velit blandit vel ornare augue magna Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Pellentesque ipsum consequat velit blandit vel ornare augue magna</p>
            <p>Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum. Mi tristique est nunc sapien orci tortor ac.</p>
            <Link href="#" className="about-description-read-more">READ MORE</Link>
          </div>
        </div>
      </section>

      <section className="about-promo">
        <div className="about-promo-image">
          <Image
            src="/images/about-us/modern-room-decor.jpg"
            alt=""
            sizes="100vw"
            fill
          />
        </div>
        <div className="about-promo-bar">
          <div className="container">
            <div className="about-promo-text">
              <h2>Live comfortably inside your home</h2>
              <p>Est nulla tincidunt commodo massa. Nunc interdum cras id augue</p>
            </div>
            <Link href="/shop" className="about-promo-button">Shop now</Link>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <ul className="about-stats-list">
            {stats.map((stat) => (
              <li key={stat.label} className="about-stats-item">
                <img src={stat.icon} alt="" aria-hidden="true" />
                <span className="about-stats-value">{stat.value}</span>
                <span className="about-stats-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-cards">
        <div className="container">
          <div className="about-cards-grid">
            <div className="about-cards-photo">
              <Image
                src="/images/about-us/room_2.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="about-cards-text">
              <h3>Live Comfortably Inside Your Home</h3>
              <p>Ullamcorper velit lacus sed risus congue integer amet eget risus. Euismod lacus lacinia a dignissim velit. Facilisi lorem vitae purus habitant ut eget non posuere sociis adipiscing.</p>
              <Link href="/shop" className="about-cards-button">Shop now</Link>
            </div>
            <div className="about-cards-text">
              <h3>Furniture That Will Last A Lifetime</h3>
              <p>Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in et tortor. Magnis tristique blandit nunc tincidunt et dui adipiscing ac. Nulla dictum semper commodo at habitant nam neque vitae leo.</p>
              <Link href="#" className="about-cards-button">Learn more</Link>
            </div>
            <div className="about-cards-photo">
              <Image
                src="/images/about-us/room_v2.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Our Team</h2>
          <ul className="about-team-list">
            {team.map((member) => (
              <li key={member.name} className="about-team-member">
                <div className="about-team-photo" />
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AboutVideo />

      <section className="about-collections">
        <div className="container">
          <div className="about-collections-grid">
            <article className="about-collection">
              <div className="about-collection-photo">
                <Image
                  src="/images/about-us/home-image.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3>New Collection Quisque Libero</h3>
              <p>Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum sed.</p>
              <Link href="/shop" className="about-collection-link">Shop Now →</Link>
            </article>
            <article className="about-collection">
              <div className="about-collection-photo">
                <Image
                  src="/images/about-us/room_v2.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3>New Collection Nisi Imperdiet</h3>
              <p>Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas vel nisi imperdiet sed lorem sed quis sagittis in.</p>
              <Link href="/shop" className="about-collection-link">Shop Now →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="about-instagram">
        <div className="container">
          <h2>Follow Us on Instagram</h2>
          <ul className="about-instagram-grid">
            {instagramPosts.map((src) => (
              <li key={src} className="about-instagram-item">
                <Image src={src} alt="" fill sizes="(max-width: 768px) 50vw, 20vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
