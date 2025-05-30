import Image from "next/image";
import "./director.css";
import director from "../../images/slider/s-3.jpg";

const Director = () => {
  return (
    <>
      <div className="director-container">
        <div className="director">
          <h1 className="heading">Meet the School Director</h1>
          <div className="profile">
            <Image
              src={director}
              alt="School Director Mrs Adisa"
              className="image"
              width={220}
              height={220}
            />
            <div className="bio">
              <h2>Mrs Adisa</h2>
              <p>
                Hello and welcome to Imperial Legacy School. As the School
                Director, my role is to support our dedicated staff, ensure
                academic excellence, and nurture a positive and inclusive
                learning environment for every student.
              </p>
              <p>
                Our school is a place where young minds are encouraged to
                explore, discover, and grow. We believe in fostering a strong
                partnership between school and families to help each child reach
                their full potential.
              </p>
              <p>
                Our school is a place where young minds are encouraged to
                explore, discover, and grow. We believe in fostering a strong
                partnership between school and families to help each child reach
                their full potential.
              </p>
              <p>
                Our school is a place where young minds are encouraged to
                explore, discover, and grow. We believe in fostering a strong
                partnership between school and families to help each child reach
                their full potential.
              </p>
              <p>
                Thank you for being part of our community. I look forward to a
                successful year of learning and achievement together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Director;
