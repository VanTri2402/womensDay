import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

// 🌸 Trái tim bay ngẫu nhiên khắp màn hình
const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: Math.random() * window.innerHeight,
            x: Math.random() * window.innerWidth,
            scale: Math.random() * 1.5 + 0.8, // Làm trái tim lớn hơn
          }}
          animate={{
            opacity: [0, 1, 0],
            y: ["100vh", "-10vh"], // Bay từ dưới lên nhanh hơn
            transition: {
              duration: Math.random() * 3 + 2, // Bay nhanh hơn
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute text-pink-500 text-4xl" // Trái tim lớn hơn
        >
          <FaHeart />
        </motion.div>
      ))}
    </div>
  );
};

// ✉️ Thiệp chúc mừng 8/3
const Letter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center"
    >
      <h2 className="text-2xl font-serif mb-4 text-rose-600">
        8/3 Dui Dẻ Nhaa
      </h2>
      <p className="font-serif text-2xl text-gray-700 leading-relaxed mb-6 font-serif">
        "Nhân dịp 8/3 , Chúc bạn luôn giữ nụ cười trên môi và niêm vui trong
        tim. Chúc Ní luôn luôn gặp những điêu tôt đẹp trong cuộc sống và mọi
        điêu an lành sẽ luôn đên với Ní"
      </p>
      <p className="text-right text-rose-600 font-serif">
        Happy Women's Day! 💐
      </p>
    </motion.div>
  );
};

// ✉️ Phong bì chứa thiệp
const Envelope = ({ isOpen, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-96 h-64 bg-rose-100 rounded-lg shadow-xl transform transition-transform duration-500 ${
          isOpen ? "scale-95" : "scale-100"
        }`}
      >
        <motion.div
          animate={{ rotateY: isOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative flex items-center justify-center"
        >
          {!isOpen && (
            <motion.button
              whileHover={{ scale: 1.3 }}
              className="px-8 py-3 bg-rose-500 text-white rounded-full shadow-lg font-serif"
            >
              MỞ
            </motion.button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// 💖 Icon trái tim xoay trên phong bì
const RotatingIcon = () => {
  return (
    <motion.div
      animate={{ rotateY: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="text-5xl text-rose-500 mb-4"
    >
      <FaHeart />
    </motion.div>
  );
};

// 🎀 Thành phần chính hiển thị thiệp 8/3
const RomanticCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts /> {/* Hiệu ứng trái tim bay */}
      {[...Array(30)].map(
        (
          _,
          index // Tăng số lượng trái tim bay lên
        ) => (
          <motion.div
            key={index}
            initial={{
              y: "110vh",
              x: `${Math.random() * 100}vw`,
              opacity: 0.5,
            }}
            animate={{
              y: "-10vh",
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3, // Bay nhanh hơn
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-red-400 text-5xl" // Trái tim lớn hơn
          >
            <FaHeart />
          </motion.div>
        )
      )}
      <div className="relative z-10">
        <RotatingIcon /> {/* Icon trái tim xoay */}
        {isOpen ? (
          <Letter />
        ) : (
          <Envelope isOpen={isOpen} onClick={() => setIsOpen(true)} />
        )}
      </div>
    </div>
  );
};

export default RomanticCard;
