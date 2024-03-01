import Buttons from "./Button";
import ic1 from "../assets/Mail.png";
import linkedin from "../assets/linkedin.png";

const Container = () => {
  return (
    <div className="container">
      <div>
        <h4 className="card-name">Laura Smith</h4>
        <h6 className="title">Frontend Developer</h6>
        <h6 className="webname">laurasmith.website</h6>
      </div>
      <div class="btn">
        <Buttons text="Email" icon={ic1} className="primary" />
        <Buttons text="LinkedIn" icon={linkedin} className="secondary" />
      </div>
      <div className="words">
        <div className="top">
          <h4>About</h4>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="down">
          <h4>Interests</h4>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Container;
