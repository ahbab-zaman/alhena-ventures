import About from "../../Components/About";
import Banner from "../../Components/Banner";
import InnovativeIdea from "../../Components/InnovativeIdea";
import CustomMarquee from "../../Components/Marquee";
import ScrollTop from "../../Components/ScrollTop";
import SmartSolution from "../../Components/SmartSolution";
import Technology from "../../Components/Technology";

const Home = () => {
    return (
        <div >
            <Banner />
            <CustomMarquee />
            <About />
            <SmartSolution />
            <InnovativeIdea />
            <Technology />
            <ScrollTop />
        </div>
    );
};

export default Home;