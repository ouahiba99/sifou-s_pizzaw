import { motion } from "framer-motion";
import pizzaSliceImage from "../assets/pizza.png"; // Replace with the actual path to your pizza slice image


const MotionPizza = () => {
  return (
    <motion.div
      initial={{ y: 0, x: "calc(100% - 200px)" }} // Initial position (top right)
      animate={{ y: [-30, 20, -30] }} // Animation sequence (up and down)
      transition={{
        duration: 3, // Duration of the animation (in seconds)
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "reverse", // Reverse the animation on each iteration
        damping: 100, // Controls the "bounciness" of the motion
      }}
      style={{
        position: "relative",
        top: 1,
        right:40,
        marginRight:"23%",
        
        
      }}
    >
      <img src={pizzaSliceImage} alt="Pizza Slice" style={{marginLeft:"70px", width: "200px", height: "200px"}}/>
    </motion.div>
  );
};

export default MotionPizza;
