import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <section className='flex flex-col relative justify-center items-center py-20 bg-[url(https://imgs.search.brave.com/STlpu5UQiLwHLWh6zJe2p3Z5h2gzfVQghMogqOeoS0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtcGVyZm9y/YXRlZC1tZXRhbGxp/Yy10ZXh0dXJlLWJh/Y2tncm91bmRfMTA0/OC0xNDYxNS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw)] bg-no-repeat lg:bg-cover lg:h-[350px] sm-h-[200px]'>
                <h1 className='lg:text-[75px] md:text-[60px] font-bold text-white'>School Bulletin</h1>
            </section>

            <div>
                {/* card section */}

                {/* Projects */}
                <div className='lg:flex flex-col justify-center items-center my-10'>

                    <h3 className='text-[26px] font-semibold'>Recent Activities</h3>

                    <div className='lg:flex justify-center items-center my-10'>
                    <div className='flex flex-col justify-around items-center w-[500px] h-[500px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5'>
                        <img src="https://lh3.googleusercontent.com/7CxCfH3CRtWGRRyDF1Nh86aw8JQapSrDV_ZEVZ4966VULxryLiN2wdRpaQMgn1JeG-73wJW-v8cxoiQom3gPDyDFqfYcgGEkwKn7-qwHFg5h3yV35S0TVYiYpCd5MXBmOg=w1280" alt="pitha" className='w-[400px]'/>
                        <h3 className='text-[30px] font-semibold'>Pitha Utshab</h3>

                        <Link to="/activities" className='bg-gray-300 py-3 px-5 rounded-lg text-gray-700 font-bold hover:shadow-xl transition-shadow'>Read More</Link>
                    </div>

                    <div className='flex flex-col justify-around items-center w-[500px] h-[500px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5'>
                        <img src="https://lh4.googleusercontent.com/NXGgC4d4ZRNzyunRV-MSzo9KRpP1_gdaxppctyOxyp-zx8ee687-sj85Pc-VR4AqPZDseaiEzha9BkW4eGBGn_-9BGIMOuOYT8Y-EFsU5JYpFL4tweAQtGXY2WhF6-mEcQ=w1280" alt="pitha" className='w-[400px]'/>
                        <h3 className='text-[30px] font-semibold'>Annual Sports Day</h3>

                        <Link to="/activities" className='bg-gray-300 py-3 px-5 rounded-lg text-gray-700 font-bold hover:shadow-xl transition-shadow'>Read More</Link>
                    </div>

                    <div className='flex flex-col justify-around items-center w-[500px] h-[500px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5'>
                        <img src="https://lh3.googleusercontent.com/0Ky5Uv8OnATGerzxNzHePkIXT999jgs4R-V4pnQVEsb4_doVBgwvFwtT7VbwxWyJ9_0Rsc92CishWSlf-QdqiNj4nB4DZPjrTawXtA6KHCD6XNpkkR-6ZX8pWPcsEg947A=w1280" alt="pitha" className='w-[400px]'/>
                        <h3 className='text-[30px] font-semibold'>Celebrating Nobin Boron </h3>

                        <Link to="/activities" className='bg-gray-300 py-3 px-5 rounded-lg text-gray-700 font-bold hover:shadow-xl transition-shadow'>Read More</Link>
                    </div>
                    </div>

                </div>

                {/* Recent Projects */}
                <div className='lg:flex flex-col justify-center items-center my-10'>

                    <h3 className='text-[26px] font-semibold'>Our School Projects</h3>

                    <div className='lg:flex justify-center items-center my-10'>
                    <div className='flex flex-col justify-around items-center w-[500px] h-[600px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5'>
                        <img src="https://lh6.googleusercontent.com/WB9mu7N7NEMnTfRk51hB3g_0iI-LggeATt9r_HDbONWwBzTQTWBWati-SvLdkOurU6qJP9hmIir4IZrV-Jl6qhq8Uo8s7BVLW5kBoyXIGm0iK5SHwVpl91YdV3uAplt5Ug=w1280" alt="pitha" className='w-[400px]'/>
                        <h3 className='text-[30px] font-semibold'>Robotics Project</h3>

                        <Link to="/projects" className='bg-gray-300 py-3 px-5 rounded-lg text-gray-700 font-bold hover:shadow-xl transition-shadow'>Read More</Link>
                    </div>

                    <div className='flex flex-col justify-around items-center w-[500px] h-[600px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5'>
                        <img src="https://lh4.googleusercontent.com/Wk202JzrWLvKauKAURR7H4aw2jKGOceUaeQU-tixv-SE8GizW2gBrYGykiwUQeHeFIpcIvSlsUxQ04YNr29QGHUltzhP6TJtIhuQ1oBHerm_h_w_brDTA5IKgEtGrU18Rw=w1280" alt="pitha" className='w-[400px]'/>
                        <h3 className='text-[30px] font-semibold'>Tree Plantation 
                        </h3>

                        <Link to="/projects" className='bg-gray-300 py-3 px-5 rounded-lg text-gray-700 font-bold hover:shadow-xl transition-shadow'>Read More</Link>
                    </div>

                    <div className='flex flex-col justify-around items-center w-[500px] h-[600px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5'>
                        <img src="https://imgs.search.brave.com/woBq_cA2B0jj1Sx6SXqRqu8niRNtDkwZBkkRbAVo6Bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zb2xhci1wYW5l/bHMtcm9vZi1zb2xh/ci1jZWxsXzk1NDIy/Ni0yMDg3NzEuanBn/P3NpemU9NjI2JmV4/dD1qcGc" alt="pitha" className='w-[400px]'/>
                        <h3 className='text-[30px] font-semibold'>Solar Panel</h3>

                        <Link to="/projects" className='bg-gray-300 py-3 px-5 rounded-lg text-gray-700 font-bold hover:shadow-xl transition-shadow'>Read More</Link>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;