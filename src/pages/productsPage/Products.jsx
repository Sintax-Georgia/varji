import Carousel from "../../layouts/carousel/Carousel";

import CustomHeading from "../../helpers/CustomHeading";
import WoodWeWorkWith from "./WoodWeWorkWith";
//languages
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation("products");
  return (
    <>
      <CustomHeading>{t("heading")}</CustomHeading>
      <div>
        <Carousel />
      </div>

      <WoodWeWorkWith />
    </>
  );
}

export default Products;
