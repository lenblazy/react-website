import image from "../assets/img/welcome-banner.jpg";
import Header from "../common/Header.jsx";
import Timeline from "../common/Timeline.jsx";
import Team from "../common/Team.jsx";

const About = () => {
    return (
        <div>
            <Header title="About Us"
                    subTitle="It's really about Us"
                    showButton={false}
                    backgroundImage={image}
            />

            <Timeline />
            <Team />

        </div>
    );
}

export default About;