import { useEffect, useState } from "react";
import { 
    StyledContainer, 
    StyledAdLink, 
    StyledAdImg, 
    StyledAdImgWrapper,
    StyledHeader,
    StyledTextWrapper 
} from "./PopularAds.styles";

interface Ad {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

const PopularAds = () => {

  const [adData, setData] = useState<Ad[]>([]);


  // REPLACE THIS WITH ROUTER LOADER LATER
  useEffect(() => {
    const getAds = async function () {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      setData(data.products);
    };
    getAds();
  }, []);

  return (
    <>
      <StyledHeader>Populære annonser</StyledHeader>
        <StyledContainer>
            {adData.map(ad => (
                <StyledAdLink key={ad.id} to='./'>
                    <StyledAdImgWrapper>
                        <StyledAdImg src={ad.thumbnail}/>
                        <p>{ad.price*10} kr</p>
                    </StyledAdImgWrapper>
                    <StyledTextWrapper>
                        <p>place</p>
                        <h3>{ad.title}</h3>
                    </StyledTextWrapper>
                </StyledAdLink>
            ))}
        </StyledContainer>
    </>
  );
};

export default PopularAds;