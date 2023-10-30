import React, { useState } from 'react';
import { HiOutlineArrowSmallLeft } from 'react-icons/hi2';
import { useNavigate } from "react-router-dom";
import { BsExclamationCircle } from 'react-icons/bs';

const SesiDuaKunjunganAlasan = () => {
    const Navigate = useNavigate();
    const [komentar, setKomentar] = useState('');
    const [error, setError] = useState('');

    const goNavigate = () => {
        if (komentar.trim() === '') {
            setError('Anda harus mengisi alasan untuk melanjutkan');
        } else {
            Navigate('/kunjungan1');
        }
    }

    const backNavigate = () => {
        Navigate('/kunjungan3');
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
                <div className='text-left mt-5 px-2'>
                    <p className='md:px-2 md:mb-4 md:mx-5 font-bold md:text-2xl text-center'>
                        Alasan kenapa anda tidak merekomendasikan:
                    </p>
                </div>
                <div className='relative bg-gradient-to-r from-primer-40 via-primer-80 to-primer-60 rounded-xl text-white p-5 flex flex-col gap-5 w-[325px] md:w-[400px] mt-5'>
                    <textarea className='rounded text-black p-2' name="komentar" id="komentar" cols="30" rows="10" placeholder='Tuliskan komentar Anda di sini..' value={komentar}
                        onChange={(e) => {
                            setKomentar(e.target.value);
                            setError('');
                        }}required>
                    </textarea>
                </div>
                {error && (
                    <div className="bg-red-500 text-white text-sm p-2 mt-2 rounded-xl flex items-center">
                        <BsExclamationCircle className="mr-2" /> {error}
                    </div>
                )}
                <div className='relative mt-4'>
                    <button
                        onClick={goNavigate}
                        className='rounded-full font-bold bg-gradient-to-r from-primer-60 to-sekunder-60 w-[175px] md:w-[250px] h-[60px] md:h-[60px] text-white p-5 h-15'>SELANJUTNYA</button>
                </div>
            </div>
        </>
    );
}

export default SesiDuaKunjunganAlasan;
