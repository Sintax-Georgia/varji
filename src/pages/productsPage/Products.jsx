import Carousel from "../../layouts/carousel/Carousel";

import CustomHeading from "../../helpers/CustomHeading";
import WoodWeWorkWith from "./WoodWeWorkWith";

function Products() {
  return (
    <>
      <CustomHeading>ჩვენი პროდუქცია</CustomHeading>
      <div>
        <Carousel />
      </div>

      <WoodWeWorkWith />
    </>
  );
}

export default Products;
