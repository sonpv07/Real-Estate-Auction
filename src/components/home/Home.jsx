import Banner from "./banner/Banner";
import Discover from "./discover/Discover";
import Offer from "./offer/Offer";
import Type from "./type/Type";

const Home = () => {
    return (
        <div className="home-container">
            <Banner/>
            <Offer/>
            <Type/>
            <Discover/>
            
        </div>
    )
}

export default Home;