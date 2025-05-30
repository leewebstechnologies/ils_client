import "./category.css";
import { categories } from "../../data";
import Link from "next/link";
import Image from "next/image";
import crecheImg from "../../../images/alphabet.png";
import preschoolImg from "../../../images/amusement-park.png";
import gradeschoolImg from "../../../images/education.png";

const Category = () => {
  return (
    <section id="category-part">
      <div className="container">
        <div className="category pt-40 pb-80">
          <div className="row">
            <div className="col-lg-4">
              <div className="category-text pt-40">
                <h2>ENROLL IN OUR SCHOOL</h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
              <div className="row category-slied mt-40">
                <div className="col-lg-4">
                  <Link href="/creche">
                    <span className="singel-category text-center color-1">
                      <span className="icon">
                        <Image src={crecheImg} height={80} alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Creche</span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link href="/preschool">
                    <span className="singel-category text-center color-2">
                      <span className="icon">
                        <Image src={preschoolImg} height={80} alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Pre-school</span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="col-lg-4">
                  <Link href="/gradeschool">
                    <span className="singel-category text-center color-3">
                      <span className="icon">
                        <Image src={gradeschoolImg} height={80} alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Grade-school</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Category

