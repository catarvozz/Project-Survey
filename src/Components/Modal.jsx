import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ModalWithBackground = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center ${isModalOpen ? 'block' : 'hidden'}`}>
            <motion.div 
                className="absolute modal max-w-full w-[325px] md:w-full md:max-w-xl rounded-lg px-6 py-6 bg-slate-50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <button onClick={closeModal} className="absolute top-5 right-5 text-gray-600">
                    <FaTimes />
                </button>

                <div className="w-full flex flex-col items-center justify-center gap-6">
                    <div className="w-28">
                        <img src='./img/Loka 4.png' alt='logo' className='w-full h-full'/>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center gap-1'>
                        <strong className='text-center text-black'>
                            Terimakasih Telah Berkunjung Ke Saloka Theme Park🫶.
                        </strong>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ModalWithBackground;
