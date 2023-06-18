import Find from '../Find/Find';
import Categories from '../Categories/Categories';
import PopularAds from '../Popular Ads/PopularAds';
import RandomAd from '../Random Ad/RandomAd';

const Home = () => {
    
    return(
        <div>
            <Find/>
            <Categories/>
            <RandomAd/>
            <PopularAds/>
        </div>
    )
}


export default Home;