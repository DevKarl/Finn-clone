import { useEffect, useState } from "react";
import { StyledContainer, StyledAdWrapper } from "./PopularAds.styles";

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
      <h1>Populære annonser</h1>
      <StyledContainer>
        {adData.map(ad => (
          <StyledAdWrapper key={ad.id}>
            <img src={ad.images[0]} style={{width: '100px'}}></img>
            <div>
              <p>place</p>
              <h3>{ad.title}</h3>
              <p>{ad.price}</p>
            </div>
          </StyledAdWrapper>
        ))}
      </StyledContainer>
    </>
  );
};

export default PopularAds;