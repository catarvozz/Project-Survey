import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function App() {
    const [openModal, setOpenModal] = useState(true);
    let Navigate = useNavigate();
    const handleModal = () => {
        setOpenModal(!openModal);
    };

    const handleNavigate = () => {
        localStorage.setItem('Nama Lengkap', document.getElementById('name').value);
        localStorage.setItem('Alamat', document.getElementById('alamat').value);
        localStorage.setItem('Nomor WA', document.getElementById('nomor').value);
        Navigate('/survey1');
    }

    return (
        <>
            <div className="max-w-full w-full min-h-screen h-full bg-gray-50 font-Poppins">
                <div className="w-full min-h-screen h-full flex items-center justify-center px-5 lg:px-0">
                    <div className="max-w-sm w-full flex flex-col items-center justify-center bg-gradient-to-r from-primer-40 via-primer-80 to-primer-60 px-5 pt-14 pb-10 rounded-2xl shadow-xl relative">
                        <div className='w-32 absolute -top-14'>
                            <img src='./img/Loka 2.png' alt='logo' className='w-full h-full'/>
                        </div>
                        <div className='w-full pt-20'>
                            <form action=''>
                                <div className="w-full mb-6">
                                    <label htmlFor="name" className="block text-slate-50 font-semibold text-sm">Nama</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full text-sm placeholder:text-gray-300 py-2 outline-none bg-transparent border-b border-slate-50 focus:border-b focus:border-gray-950 focus:text-gray-950 transition-all duration-150 ease-in-out"
                                        placeholder="Masukan nama lengkap kamu"
                                    />
                                </div>
                                <div className="w-full mb-6">
                                    <label htmlFor="alamat" className="block text-slate-50 font-semibold text-sm">Alamat</label>
                                    <input
                                        type="text"
                                        id="alamat"
                                        name="alamat"
                                        className="w-full text-sm placeholder:text-gray-300 py-2 outline-none bg-transparent border-b border-slate-50 focus:border-b focus:border-gray-950 focus:text-gray-950 transition-all duration-150 ease-in-out"
                                        placeholder="Masukan alamat kamu"
                                    />
                                </div>
                                <div className="w-full mb-6">
                                    <label htmlFor="nomor" className="block text-slate-50 font-semibold text-sm">Nomo Handphone/WA</label>
                                    <input
                                        type="number"
                                        id="nomor"
                                        name="nomor"
                                        className="w-full text-sm placeholder:text-gray-300 py-2 outline-none bg-transparent border-b border-slate-50 focus:border-b focus:border-gray-950 focus:text-gray-950 transition-all duration-150 ease-in-out"
                                        placeholder="Masukan alamat kamu"
                                    />
                                </div>
                                <button onClick={() => handleNavigate()} type="button" className="px-4 py-4 w-full rounded-full bg-gradient-to-r from-primer-60 to-sekunder-60 uppercase font-semibold text-sm text-white mt-6">Selanjutnya</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                className={!openModal ? "container-modal max-w-full w-full min-h-screen h-full fixed top-0 left-0 items-center justify-center overflow-hidden px-5 py-5 hidden" : "container-modal max-w-full w-full min-h-screen h-full fixed top-0 left-0 items-center justify-center overflow-hidden px-5 py-5 flex"}
                >
                <motion.div 
                    className="modal max-w-full w-full md:max-w-xl rounded-lg px-6 py-6 bg-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <div className="w-full flex flex-col items-center justify-center gap-6">
                        <div className="w-28">
                            <img src='./img/Loka 4.png' alt='logo' className='w-full h-full'/>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center gap-1'>
                            <strong className='text-center'>
                                Terimakasih Telah Berkunjung Ke Saloka Theme Park🫶.
                            </strong>
                            <span className='text-center'>
                                Harap Isi Survei Berikut.
                            </span>
                        </div>
                        <button onClick={() => handleModal()} type="button" className="px-4 py-4 w-full rounded-full bg-primer-60 hover:bg-primer-80 uppercase font-semibold text-sm text-white mt-6 cursor-pointer transition-all duration-150 ease-in-out">MULAI</button>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default App;
