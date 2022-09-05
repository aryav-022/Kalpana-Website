import './Banner.css'

const Banner = (props) => {
    return (
        <section id="banner">
            <div className="bannerContainer">
                <div className="years">
                    {/*Pass a function "setActiveYear" which takes argument and modifies content based on year.*/}
                    <div className="bannerLink" id="2022" onClick={() => props.setActiveYear(2022)}>2022</div>
                    <div className="bannerLink" onClick={() => props.setActiveYear(2021)}>2021</div>
                    <div className="bannerLink" onClick={() => props.setActiveYear(2020)}>2020</div>
                    <div className="bannerLink" onClick={() => props.setActiveYear(2019)}>2019</div>
                    <div className="bannerLink" onClick={() => props.setActiveYear(2018)}>2018</div>
                </div>
                <div className="bannerContent">
                    <h3>TEAM KALPANA</h3>
                    {/* Pass the title for the Banner 2 WORDS ONLY RECOMMENDED */}
                    <h2>{props.title}</h2>
                </div>
            </div>
        </section>
    );
}

export default Banner;