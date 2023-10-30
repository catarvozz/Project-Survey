import React from 'react';
import { HiOutlineArrowSmallLeft, HiDocumentCheck } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";



const SesiSatuSurveySatu = () => {
    let Navigate = useNavigate();
    

    const goNavigate = () => {
        Navigate('/survey2');
    }
    const backNavigate = () => {
        Navigate('/');
    }

    return (
        <>
            <section className="max-w-full w-full">
                <div className="w-full flex flex-col items-center justify-center bg-sekunder-60 p-5">
                    <div className="max-w-md w-full">
                        <div className="w-full flex items-center justify-between relative">
                            <HiOutlineArrowSmallLeft
                            onClick={() => backNavigate()}
                            className='text-2xl text-slate-50 cursor-pointer' />
                            <div className="flex items-center gap-1">
                                <HiDocumentCheck className='text-2xl text-slate-50' />
                                <span className='font-semibold text-sm text-slate-50'>Survey</span>
                            </div>
                            <span className='font-semibold text-sm'></span>
                            <div className="w-20 absolute right-0 top-0">
                                <img 
                                    src="./img/Loka 1.png" 
                                    alt="Loka"
                                    className='w-full h-full'
                                />
                            </div>
                        </div>
                        <div className="w-full pt-20">
                            <div className="bar">
                                <div className="bar-fill bar-fill-photoshop start"></div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-2 px-6 py-4">
                            <strong className='text-sm'>Silahkan Berikan Penilaian Atas Pengalaman Anda di Saloka</strong>
                            <span className='text-sm'>Masukan anda sangat penting bagi kami👋</span>
                        </div>
                        <div className="w-full">
                            <div className='flex justify-center gap-3'>
                                <div className='rounded-full bg-gradient-to-r from-[#054a2e] via-primer-80 to-primer-60 w-[12px] h-[12px]'></div>
                                <div className='rounded-full bg-white w-[12px] h-[12px]'></div>
                                <div className='rounded-full bg-white w-[12px] h-[12px]'></div>
                                <div className='rounded-full bg-white w-[12px] h-[12px]'></div>
                                <div className='rounded-full bg-white w-[12px] h-[12px]'></div>
                            </div>
                        </div>
                        <div className='bg-white bg-opacity-80 mt-7 flex rounded-xl mx-auto w-[330px]'>
                            <p className='text-center text-sm p-5 md:text-xl font-bold'>Bagaimana kualitas wahana bermain kami?</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex flex-col items-center min-h-screen h-full bg-gray-50 font-Poppins'>
                <div className='absolute w-[330px] md:w-[450px] bg-gradient-to-r from-primer-40 via-primer-80 to-primer-60 rounded-2xl text-white md:p-10 flex flex-col items-center gap-5 mt-7 md:mt-10'>
                    <button
                    onClick={() => goNavigate()} 
                    className=' mt-5 rounded-full bg-white text-white mb-4 p-3 w-[250px] md:w-full h-15 bg-gradient-to-r from-primer-60 to-sekunder-60'>Sangat Puas</button>
                    <button 
                    onClick={() => goNavigate()} 
                    className='rounded-full bg-white text-white mb-4 p-3 w-[250px] md:w-full h-15 bg-gradient-to-r from-primer-60 to-sekunder-60'>Puas</button>
                    <button 
                    onClick={() => goNavigate()} 
                    className='rounded-full bg-white text-white mb-4 p-3 w-[250px] md:w-full h-15 bg-gradient-to-r from-primer-60 to-sekunder-60'>Cukup</button>
                    <button 
                    onClick={() => goNavigate()} 
                    className='rounded-full bg-white text-white mb-4 p-3 w-[250px] md:w-full h-15 bg-gradient-to-r from-primer-60 to-sekunder-60'>Tidak Puas</button>
                </div>
            </div>
        </>
    );
}

export default SesiSatuSurveySatu;