import React from 'react';
import { HiOutlineArrowSmallLeft, HiDocumentCheck } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";

const SesiSatuSurveyKomentar = () => {
    let Navigate = useNavigate();

    const goNavigate = () => {
        Navigate('/kunjungan1');
    }
    const backNavigate = () => {
        Navigate('/survey5');
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
                                <div className="bar-fill bar-fill-5 start"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2 px-6 py-4">
                            <strong className='text-sm'>Silahkan Berikan Penilaian Atas Pengalaman Anda di Saloka</strong>
                            <span className='text-sm'>Masukan anda sangat penting bagi kami👋</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex flex-col items-center min-h-screen h-full bg-gray-50 font-Poppins'>
                <div className='relative bg-gradient-to-r from-primer-80 via-primer-60 to-primer-40 rounded-xl text-white p-5 flex flex-col gap-5 w-[325px] md:w-[400px] mt-10'>
                    <div className='text-left'>
                        <p className='md:px-2 mb-8 md:mb-4 md:mx-5 font-bold md:text-2xl'>Komentar</p>
                    </div>
                    <div className='flex ml-40 mt-[-45%] md:mt-[-32%]'>
                        <img src="./img/comment.png" className=' w-[210px]' alt="" />
                    </div>
                    <textarea className='mt-2 rounded text-black p-2' name="komentar" id="" cols="30" rows="10" placeholder='Tuliskan komentar Anda di sini..'></textarea>
                </div>
                
                <div className='relative mt-4'>
                    <button
                        onClick={() => goNavigate()}
                        className='rounded-full font-bold bg-gradient-to-r from-primer-60 to-sekunder-60 w-[175px] md:w-[250px] h-[60px] md:h-[60px] text-white p-5 h-15'>SELANJUTNYA</button>
                </div>
            </div>


        </>
    );
}

export default SesiSatuSurveyKomentar;