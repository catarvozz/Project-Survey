import React from 'react';
import { useState } from 'react';
import { HiOutlineArrowSmallLeft } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import Modal from '../../Components/Modal';

const SesiDuaKunjunganTiga = () => {
    let Navigate = useNavigate();
    const [showYaModal, setShowYaModal] = useState(false);
    const [showMungkinModal, setShowMungkinModal] = useState(false);

    const goNavigate = () => {
        Navigate('/alasan');
    }
    const backNavigate = () => {
        Navigate('/kunjungan2');
    }
    const openYaModal = () => {
        setShowYaModal(true);
    }

    const closeYaModal = () => {
        setShowYaModal(false);
    }

    const openMungkinModal = () => {
        setShowMungkinModal(true);
    }

    const closeMungkinModal = () => {
        setShowMungkinModal(false);
    }

    return (
        <>
            <section className="max-w-full w-full">
                <div className="w-full flex flex-col items-center justify-center bg-primer-60 p-5">
                    <div className="max-w-md w-full">
                        <div className="w-full flex items-center justify-between relative">
                            <div className='flex items-start mb-10'>
                                <HiOutlineArrowSmallLeft 
                                onClick={() => backNavigate()}
                                className='text-2xl text-slate-50 cursor-pointer' />
                            </div>
                            <div className="flex items-center">
                                <span className='font-semibold text-sm text-slate-50 ml-2'>Customer Survey</span>
                            </div>
                            <div className="w-20 flex top-0">
                                <img 
                                    src="./img/loka 6.png" 
                                    alt="Loka"
                                    className='w-full h-full'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex flex-col items-center min-h-screen h-full bg-gray-50 font-Poppins'>
                <div className="w-full mt-5">
                    <div className='flex justify-center gap-3'>
                        <div className='rounded-full bg-gray-300 w-[12px] h-[12px]'>
                        </div>
                        <div className='rounded-full bg-gray-300 w-[12px] h-[12px]'>
                        </div>
                        <div className='rounded-full bg-gradient-to-r from-[#054a2e] via-primer-80 to-primer-60 w-[12px] h-[12px]'>
                        </div>
                    </div>
                </div>
                <div className='absolute w-[330px] md:w-[450px] bg-gray-50 rounded-xl md:p-10 flex flex-col items-center gap-5 mt-12 md:mt-10'>
                    <p className=' text-center text-sm text-black p-5 md:text-xl font-bold'>Secara keseluruhan apakah anda merekomendasikan saloka? (teman, saudara, kerabat, dll)</p>
                    <button
                        onClick={openYaModal}
                        className='rounded-full bg-white text-black mb-4 p-3 w-[250px] md:w-full h-20 shadow-md shadow-gray-400 flex items-center'>
                        {showYaModal && <Modal isOpen={showYaModal} onClose={closeYaModal} />}
                        <div className='flex rounded-full bg-gradient-to-r from-[#054a2e] via-primer-80 to-primer-60 w-[40px] h-[40px]'>
                            <p className='text-white p-2 ml-2'>1</p>
                        </div>
                        <span className='ml-10'>Ya</span>
                    </button>
                    <button
                        onClick={openMungkinModal}
                        className='rounded-full bg-white text-black mb-4 p-3 w-[250px] md:w-full h-20 shadow-md shadow-gray-400 flex items-center'>
                        {showMungkinModal && <Modal isOpen={showMungkinModal} onClose={closeMungkinModal} />}
                        <div className='flex rounded-full bg-gradient-to-r from-[#054a2e] via-primer-80 to-primer-60 w-[40px] h-[40px]'>
                            <p className='text-white p-2 ml-2'>2</p>
                        </div>
                        <span className='ml-10'>Mungkin</span>
                    </button>
                    <button
                        onClick={() => goNavigate()}
                        className='rounded-full bg-white text-black mb-4 p-3 w-[250px] md:w-full h-20 shadow-md shadow-gray-400 flex items-center'>
                        <div className='flex rounded-full bg-gradient-to-r from-[#054a2e] via-primer-80 to-primer-60 w-[40px] h-[40px]'>
                            <p className='text-white p-2 ml-2'>3</p>
                        </div>
                        <span className='ml-10'>Tidak</span>
                    </button>
                </div>
            </div>

        </>
    );
}

export default SesiDuaKunjunganTiga;