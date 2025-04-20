import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-3/12 bg-amber-200 min-h-screen'>
                <ul className='pt-10 space-y-5'>
                    <li><NavLink to="/" className="bg-cyan-300 p-2  rounded">Home</NavLink></li>
                    <li><NavLink to="register_user" className="bg-cyan-300 p-2 rounded">Register Users</NavLink></li>
                    <li><NavLink to="all_users" className="bg-cyan-300 p-2 rounded">View All Users</NavLink></li>
                    <li><NavLink to="profile" className="bg-cyan-300 p-2 rounded">My Profile</NavLink></li>
                </ul>
            </div>
            <div className='w-9/12 mt-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;