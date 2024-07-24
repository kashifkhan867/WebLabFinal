import Card from "./Card";
import Data from "./Data";

export default function Gallery() {
    return (
      <>
   
  
        {Data.map((data, index) => (
          <Card key={index} name={data.name} price={data.price} imageSrc={data.Image} />
        
        ))}
       
      </>
    );
  }