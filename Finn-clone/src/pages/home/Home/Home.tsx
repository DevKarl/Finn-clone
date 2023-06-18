import Find from '../Find/Find';
import Categories from '../Categories/Categories';
import PopularAds from '../Popular Ads/PopularAds';
import RandomAd from '../Random Ad/RandomAd';

const Home = () => {
    
    return(
        <div style={{maxWidth: '1010px', width: '100vw'}}>
            <Find/>
            <Categories/>
            <RandomAd/>
            <PopularAds/>
        </div>
    )
}


export default Home;