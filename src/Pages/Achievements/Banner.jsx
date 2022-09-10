import './Achievements.css'

const Banner = () => {
    return (
        <section id="banner">
            <div className="bannerContainer">
                <div className="years">
                    <a href="#2022">2022</a>
                    <a href="#2021">2021</a>
                    <a href="#2020">2020</a>
                    <a href="#2019">2019</a>
                    <a href="#2018">2018</a>
                </div>
                <div className="bannerContent">
                    <h3>TEAM KALPANA</h3>
                    <h2>OUR <br /> ACHIEVEMENTS</h2>
                </div>
            </div>
        </section>
    );
}

export default Banner;