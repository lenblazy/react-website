import PortfolioItem from "./PortfolioItem.jsx";

const portfolio = [
    {title: 'Threads', subTitle: 'Illustration', image: 'assets/img/portfolio/1.jpg', modalLink: '#portfolioModal1'},
    {title: 'Explore', subTitle: 'Graphic Design', image: 'assets/img/portfolio/2.jpg', modalLink: '#portfolioModal2'},
    {title: 'Finish', subTitle: 'Identity', image: 'assets/img/portfolio/3.jpg', modalLink: '#portfolioModal3'},
    {title: 'Lines', subTitle: 'Branding', image: 'assets/img/portfolio/4.jpg', modalLink: '#portfolioModal4'},
    {title: 'Southwest', subTitle: 'Website Design', image: 'assets/img/portfolio/5.jpg', modalLink: '#portfolioModal5'},
    {title: 'Window', subTitle: 'Photography', image: 'assets/img/portfolio/6.jpg', modalLink: '#portfolioModal6'},
];

const Portfolio = () => (
    <section className="page-section bg-light" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
                {
                    portfolio.map((portfolio, idx) => (
                        <PortfolioItem {...portfolio} key={idx} />
                    ))
                }
            </div>
        </div>
    </section>
)

export default Portfolio;