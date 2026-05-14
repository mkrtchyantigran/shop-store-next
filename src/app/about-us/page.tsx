import Image from "next/image"
import "./about-us.scss";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <section className='about-hero'>
        <Image
          src="/images/about-us/modern-room-decor.jpg"
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
    </>
  )
}
