import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Image({ src, alt, id }) {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`/products/${id}`);
  }
  return (
    <motion.img onClick={() => handleClick(id)} src={src} key={id} alt={alt} />
  );
}

export default Image;
