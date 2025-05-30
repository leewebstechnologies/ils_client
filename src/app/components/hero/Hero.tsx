import "./hero.css";
import Link from "next/link";
import { sliderData } from "../../data";

const Hero = () => {
  return (
    <>
      <section id="slider-part" className="slider-active">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="single-slider bg_cover pt-150"
            style={{ backgroundImage: `url(${slide.image})` }}
            data-overlay={4}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-lg-9">
                  <div className="slider-cont">
                    <h1 data-animation="bounceInLeft" data-delay="1s">
                      {slide.title}
                    </h1>
                    <p data-animation="fadeInUp" data-delay="1.3s">
                      {slide.text}
                    </p>
                    <ul>
                      <li>
                        <Link
                          href="/ils"
                          className="main-btn"
                          data-animation="fadeInUp"
                          data-delay="1.6s"
                        >
                          Read More
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="main-btn main-btn-2"
                          data-animation="fadeInUp"
                          data-delay="1.9s"
                        >
                          Get Started
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Hero;
