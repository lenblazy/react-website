import Header from "../common/Header.jsx";
import image from "../assets/img/header-bg.jpg";
import Services from "../common/Services.jsx";
import Portfolio from "../common/Portfolio.jsx";

const Home = () => {
    return (
        <div>

            <Header title="Welcome To Our Studio!"
                    subTitle="It's Nice To Meet You"
                    showButton={true}
                    backgroundImage={image}
                    link={"/services"}
                    buttonText={"Tell Me More"}/>

            <Services/>
            <Portfolio/>
        </div>
    )
}

export default Home;