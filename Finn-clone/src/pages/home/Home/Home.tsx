import Find from '../Find/Find';
import Categories from '../Categories/Categories';
import PopularAds from '../Popular Ads/PopularAds';
import RandomAd from '../Random Ad/RandomAd';
import { StyledHomeWrapper } from './Home.styles';

const Home = () => {
    
    return(
        <StyledHomeWrapper>
            <Find/>
            <Categories/>
            <RandomAd/>
            <PopularAds/>
        </StyledHomeWrapper>
    )
}


export default Home;