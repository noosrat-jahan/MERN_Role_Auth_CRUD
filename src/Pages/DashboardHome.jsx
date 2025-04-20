import React from 'react';
import welcome from '../assets/welcome.jpg'

const DashboardHome = () => {
    return (
        <div className='flex gap-5 items-center px-5 justify-around'>
            <h1 className='text-5xl text-left font-bold text-cyan-500'>Welcome to your <br /> Dashboard</h1>
            <img src={welcome} alt="" className='w-1/2' />
        </div>
    );
};

export default DashboardHome;