import './Banner.css'

const Banner = (props) => {
    return (
        <section id="banner">
            <div className="bannerContainer">
                <div className="years">
                    {/*Pass a function "setActiveYear" which takes argument and modifies content based on year.*/}
                    <a href="#achSectionContainer" onClick={() => props.setActiveYear(2022)} id="2022">2022</a>
                    <a href="#achSectionContainer" onClick={() => props.setActiveYear(2021)}>2021</a>
                    <a href="#achSectionContainer" onClick={() => props.setActiveYear(2020)}>2020</a>
                    <a href="#achSectionContainer" onClick={() => props.setActiveYear(2019)}>2019</a>
                    <a href="#achSectionContainer" onClick={() => props.setActiveYear(2018)}>2018</a>
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