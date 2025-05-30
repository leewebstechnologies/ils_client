import Image from "next/image";
import { extraData } from "../../data";
import "./extra.css";

const Extra = () => {
  return (
    <section id="course-part" className="pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-45">
              <h5>Activities</h5>
              <h2>Extra Curriculum Activities</h2>
            </div>
          </div>
        </div>
        <div className="row course-slied mt-30">
          {extraData.map((index) => (
            <div key={index.id} className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <Image
                      src={index.banner}
                      alt="Course"
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="price">
                    <span>{index.price}</span>
                  </div>
                </div>
                <div className="cont">
                  <a href="/curricular">
                    <h4>{index.curricular}</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <Image
                        src={index.tutorImage}
                        alt="teacher"
                        width={100}
                        height={250}
                      />
                    </div>
                    <div className="name">
                      <h6>{index.tutorName}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Extra;
