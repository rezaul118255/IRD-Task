import React from 'react';
import Categories from './Categories';
import CategoriesResult from './CategoriesResult';

const Dashboard = () => {
    return (
        <div>
            <div className='md:flex text-center mb-96'>
                {/* <div className='md:w-[20%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-[#ffffff] md:h-screen md:fixed md:pt-12 md:top-0'>
                <Sidebar />
            </div> */}
                <div className='md:w-[30%]  md:h-screen md:fixed md:pt-12 md:top-0'>
                    <Categories />
                </div>
                <div className='md:w-[60%] bg-white md:right-0 md:absolute pb-20'>
                    <CategoriesResult />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;