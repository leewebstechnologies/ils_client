import Image from "next/image";
import "./otherservices.css";
import { otherservicesData } from "../../data";

const Otherservices = () => {
  return (
    <section
      id="video-feature"
      className="bg_cover pt-60 pb-110"
      style={{ backgroundImage: "url(images/bg-1.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-last order-lg-first">
            <div className="video text-lg-left text-center pt-50">
              <a
                className="Video-popup"
                href="https://www.youtube.com/watch?v=bRRtdzJH1oE"
              >
                <i className="fa fa-play" />
              </a>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
            <div className="feature pt-50">
              <div className="feature-title">
                <h3>Other Services</h3>
              </div>
              <ul>
                <li>
                  {otherservicesData.map((index) => (
                    <div key={index.id} className="singel-feature">
                      <div className="icon">
                        <Image
                          src={index.image}
                          alt="icon"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="cont">
                        <h4>{index.title}</h4>
                        {/* <p>
                         {index.description}
                        </p> */}
                      </div>
                    </div>
                  ))}
                </li>
                {/* <li>
                  <div className="singel-feature">
                    <div className="icon">
                      <img src="images/all-icon/f-2.png" alt="icon" />
                    </div>
                    <div className="cont">
                      <h4>Childcare Services on Weekend</h4>
                      <p>
                        Gravida nibh vel velit auctor aliquetn auci elit cons
                        solliazcitudirem sem quibibendum sem nibhutis.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                      <img src="images/all-icon/f-3.png" alt="icon" />
                    </div>
                    <div className="cont">
                      <h4>E-library</h4>
                      <p>
                        Gravida nibh vel velit auctor aliquetn auci elit cons
                        solliazcitudirem sem quibibendum sem nibhutis.
                      </p>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-bg" />
    </section>
  );
};
export default Otherservices;
