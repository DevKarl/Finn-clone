

import Find from './Find';
import Categories from './Categories';
import PopularAds from './PopularAds';
import RandomAd from './RandomAd';

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