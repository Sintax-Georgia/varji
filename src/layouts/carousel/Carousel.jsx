import wifeli from "../../assets/wifeli.webp";
import briketi from "../../assets/briketi.webp";
import paneli from "../../assets/avejis-paneli.webp";
import paneli2 from "../../assets/avejis-paneli-2.webp";
import kibe from "../../assets/kibe.webp";
import parketi from "../../assets/masiuri-parketi.webp";
import parketi2 from "../../assets/parketi2.webp";
import magida from "../../assets/magidis-zedapiri.webp";
// import { imgs } from "./Images";
import Image from "./Image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const imgs = [
  { src: wifeli, id: 1, name: "წიფელის ფიცარი" },
  { src: paneli, id: 2, name: "საავეჯე პანელი" },
  { src: kibe, id: 3, name: "ხის საფეხურები" },
  { src: parketi, id: 4, name: "მასიური პარკეტი" },
  { src: parketi2, id: 5, name: "ორშრიანი პარკეტი" },
  { src: briketi, id: 6, name: "საწვავი ბრიკეტი" },
  { src: paneli2, id: 7, name: "საავეჯე პანელი" },
  { src: magida, id: 8, name: "მაგიდის ზედაპირი" },
];

export default function Carousel() {
  return (
    <div className={StyleSheet.carouselContainer} id="products">
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
