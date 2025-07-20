import { motion } from "framer-motion";

const AnimatedGradient = () => {
  return (
    <>
      <motion.div
        className="absolute inset-0 -z-20 opacity-80"
        style={{
          background:
            "linear-gradient(45deg, rgba(45, 0, 247, 0.15) 0%, rgba(200, 0, 255, 0.15) 25%, rgba(255, 0, 128, 0.15) 50%, rgba(0, 255, 255, 0.15) 75%, rgba(45, 0, 247, 0.15) 100%)",
          backgroundSize: "400% 400%",
          filter: "blur(3px)",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div 
        className="absolute inset-0 -z-20 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 128, 0.1) 25%, rgba(200, 0, 255, 0.1) 50%, rgba(45, 0, 247, 0.1) 75%, transparent 100%)",
          backgroundSize: "200% 200%",
          filter: "blur(5px)",
        }}
      />
      <div 
        className="absolute inset-0 -z-20"
        style={{
          boxShadow: "inset 0 0 100px rgba(0, 255, 255, 0.2), inset 0 0 80px rgba(255, 0, 128, 0.2), inset 0 0 60px rgba(200, 0, 255, 0.2)",
          background: "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      />
    </>
  );
};

export default AnimatedGradient;