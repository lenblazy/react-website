import Header from "../common/Header.jsx";
import image from "../assets/img/header-bg.jpg";

const Home = () => {
    return (
        <Header title="Welcome To Our Studio!"
                subTitle="It's Nice To Meet You"
                showButton={true}
                backgroundImage={image}
                link={"/services"}
                buttonText={"Tell Me More"} />
    )
}

export default Home;