import Link from "next/link";
import "./footer.css";
import Image from "next/image";
// import logo from "../../images/logo1.png";
import logo from "../../../images/logo1.png";

const Footer = () => {
  return (
    <footer id="footer-part">
      <div className="footer-top pt-40 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about mt-40">
                <div className="logo">
                  <Link href="/" className="logo">
                    <Image src={logo} alt="logo" width={70} height={70} />
                    <span className="imperial-legacy">
                      IMPERIAL&nbsp;LEGACY&nbsp;SCHOOL
                    </span>
                  </Link>
                </div>
                <p>
                  Gravida nibh vel velit auctor aliquetn quibibendum auci elit
                  cons equat ipsutis sem nibh id elit. Duis sed odio sit amet
                  nibh vulputate.
                </p>
                <ul className="mt-20">
                  <li className="social-media-icons">
                    <Link className="a" href="#">
                      <i className="fa fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="#">
                      <i className="icon fa-brands fa-tiktok"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="#">
                      <i className="icon fa-brands fa-square-whatsapp"></i>
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              {/* footer about */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-link mt-40">
                <div className="footer-title pb-25">
                  <h6>Sitemap</h6>
                </div>
                <ul>
                  <li>
                    <Link className="a" href="/">
                      <i className="fa fa-angle-right" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="/about">
                      <i className="fa fa-angle-right" />
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="courses.html">
                      <i className="fa fa-angle-right" />
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="blog.html">
                      <i className="fa fa-angle-right" />
                      News
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="events.html">
                      <i className="fa fa-angle-right" />
                      Event
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link className="a" href="#">
                      <i className="fa fa-angle-right" />
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="shop.html">
                      <i className="fa fa-angle-right" />
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="teachers.html">
                      <i className="fa fa-angle-right" />
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="#">
                      <i className="fa fa-angle-right" />
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="contact.html">
                      <i className="fa fa-angle-right" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>{" "}
              {/* footer link */}
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-link support mt-40">
                <div className="footer-title pb-25">
                  <h6>Support</h6>
                </div>
                <ul>
                  <li>
                    <Link className="a" href="#">
                      <i className="fa fa-angle-right" />
                      FAQS
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="#">
                      <i className="fa fa-angle-right" />
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="#">
                      <i className="fa fa-angle-right" />
                      Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="#">
                      <i className="fa fa-angle-right" />
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link className="a" href="#">
                      <i className="fa fa-angle-right" />
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-address mt-40">
                <div className="footer-title pb-25">
                  <h6>Contact Us</h6>
                </div>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fa fa-home" />
                    </div>
                    <div className="cont">
                      <p>
                        Plot 8 Great Imperial Estate, Off Miracle Avenue,
                        Magboro, Ogun State.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="cont">
                      <p>08139604432, 07074681927, 09060006230</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-envelope-o" />
                    </div>
                    <div className="cont">
                      <p>info@imperiallegacy.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
