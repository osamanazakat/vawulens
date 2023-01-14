import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header
        title="About Us"
        image={HeaderImage}
        children="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ratione optio accusamus quibusdam ducimus aperiam porro quasi doloremque exercitationem rem?"
      />

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-img">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              doloremque adipisci tempora, at optio aperiam aut deleniti nulla
              modi, veritatis itaque id cumque maiores quaerat cupiditate,
              laudantium molestiae quae quasi odio sapiente fugit neque
              consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              voluptatibus distinctio fuga, delectus commodi, magni omnis totam,
              vero quidem numquam consequatur earum inventore dolore aspernatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              placeat velit rerum quas saepe nulla.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              doloremque adipisci tempora, at optio aperiam aut deleniti nulla
              modi, veritatis itaque id cumque maiores quaerat cupiditate,
              laudantium molestiae quae quasi odio sapiente fugit neque
              consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              voluptatibus distinctio fuga, delectus commodi, magni omnis totam,
              vero quidem numquam consequatur earum inventore dolore aspernatur?
            </p>
          </div>
          <div className="about__section-img">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-img">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              doloremque adipisci tempora, at optio aperiam aut deleniti nulla
              modi, veritatis itaque id cumque maiores quaerat cupiditate,
              laudantium molestiae quae quasi odio sapiente fugit neque
              consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              voluptatibus distinctio fuga, delectus commodi, magni omnis totam,
              vero quidem numquam consequatur earum inventore dolore aspernatur?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              placeat velit rerum quas saepe nulla.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
