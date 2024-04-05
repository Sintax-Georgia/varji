import { useState, useEffect } from "react";

// import paneli2 from "/products-ge/avejis-paneli-2.webp";
//GE Photos
import wifeli from "/products-ge/wifeli.webp";
import briketi from "/products-ge/briketi.webp";
import paneli from "/products-ge/avejis-paneli.webp";
import kibe from "/products-ge/kibe.webp";
import parketi from "/products-ge/parketi.webp";
import parketi2 from "/products-ge/parketi2.webp";
import magida from "/products-ge/magidis-zedapiri.webp";
//EN Photos
import wifeliEn from "/products-en/wifeli.webp";
import briketiEn from "/products-en/briketi.webp";
import paneliEn from "/products-en/avejis-paneli.webp";
import kibeEn from "/products-en/kibe.webp";
import parketiEn from "/products-en/parketi.webp";
import parketi2En from "/products-en/parketi2.webp";
import magidaEn from "/products-en/magidis-zedapiri.webp";
// import { imgs } from "./Images";
import Image from "./Image";
//language
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Carousel() {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 900);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const { i18n } = useTranslation();
  const georgian = i18n.language === "ge";
  const imgs = [
    {
      src: georgian ? wifeli : wifeliEn,
      id: 1,
      name: "წიფელის ფიცარი",
    },
    { src: georgian ? paneli : paneliEn, id: 2, name: "საავეჯე პანელი" },
    { src: georgian ? kibe : kibeEn, id: 3, name: "ხის საფეხურები" },
    { src: georgian ? parketi : parketiEn, id: 4, name: "მასიური პარკეტი" },
    { src: georgian ? parketi2 : parketi2En, id: 5, name: "ორშრიანი პარკეტი" },
    { src: georgian ? briketi : briketiEn, id: 6, name: "საწვავი ბრიკეტი" },
    { src: georgian ? magida : magidaEn, id: 7, name: "მაგიდის ზედაპირი" },
  ];
  function handleResize() {
    if (window.innerWidth < 900) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isTablet]);
  return (
    <div className={StyleSheet.carouselContainer} id="products">
      {!isTablet ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {imgs.map((img) => (
            <SwiperSlide key={img.id}>
              <Image src={img.src} alt={img.id} id={img.id} name={img.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : !isMobile ? (
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {imgs.map((img) => (
            <SwiperSlide key={img.id}>
              <Image src={img.src} alt={img.id} id={img.id} name={img.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {imgs.map((img) => (
            <SwiperSlide key={img.id}>
              <Image src={img.src} alt={img.id} id={img.id} name={img.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
// function Carousel() {
//   const [imgIndex, setImgIndex] = useState(0);
//   const [isGrabbing, setIsGrabbing] = useState(false);
//   const [images, setImages] = useState(imgs);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setImgIndex((prev) => prev + 1);
//       setImages((prev) => {
//         const firstImg = prev.shift();
//         prev.push(firstImg);
//         return prev;
//       });
//       // console.log(images);
//     }, DELAY);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const dragX = useMotionValue(0);

//   function handleMouseDown() {
//     setIsGrabbing(true);
//   }
//   function handleMouseUp() {
//     setIsGrabbing(false);
//   }

//   // function handleDragEnd() {
//   //   const x = dragX.get();
//   //   if (x <= -DRAG_BUFFER) {
//   //     setImgIndex((prev) => (prev + 2) % imgs.length);
//   //   } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//   //     setImgIndex((prev) => (prev - 2 + imgs.length) % imgs.length);
//   //   }
//   // }

//   return (
//     <div id="products" className={styles.carousel}>
//       <motion.div
//         // drag="x"
//         // dragConstraints={{ left: 0, right: 0 }}
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleMouseUp}
//         style={{
//           x: dragX,
//         }}
//         animate={{
//           translateX: `${-33.3 * imgIndex}%`,
//         }}
//         transition={{
//           delay: 2,
//           type: "just",
//           mass: 3,
//           stiffness: 400,
//           damping: 50,
//         }}
//         // onDragEnd={handleDragEnd}
//         className={
//           isGrabbing
//             ? `${styles.imgContainer} ${styles.active}`
//             : `${styles.imgContainer}`
//         }
//       >
//         <Images images={images} />
//       </motion.div>
//       <div className={styles.absolute}>
//         <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
//       </div>
//     </div>
//   );
// }

// export default Carousel;
