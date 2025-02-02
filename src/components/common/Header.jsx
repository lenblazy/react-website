import {Link} from "react-router";

const Header = (props) => {
    const {title, subTitle, showButton, link, buttonText, backgroundImage} = props;

    return (
        <header className="masthead" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container">
                <div className="masthead-subheading">{title}</div>
                <div className="masthead-heading text-uppercase">{subTitle}</div>
                {
                    showButton && <Link className="btn btn-primary btn-xl text-uppercase" to={link}>{buttonText}</Link>
                }
            </div>
        </header>
    )
}

export default Header;