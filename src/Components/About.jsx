import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';

const About = () => {
    return (
        <div>

<section className='flex flex-col relative justify-center items-center py-20 bg-[url(https://imgs.search.brave.com/STlpu5UQiLwHLWh6zJe2p3Z5h2gzfVQghMogqOeoS0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cnVuZ2UtcGVyZm9y/YXRlZC1tZXRhbGxp/Yy10ZXh0dXJlLWJh/Y2tncm91bmRfMTA0/OC0xNDYxNS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw)] bg-no-repeat lg:bg-cover lg:h-[350px] sm-h-[200px]'>
                <h1 className='lg:text-[75px] md:text-[60px] font-bold text-white'>About Us</h1>
            </section>
            
            <div className='lg:flex flex-col justify-center items-center my-10'>

<div className='lg:flex justify-center items-center my-10'>

<div className='my-10 mx-10'>
<div className='flex flex-col justify-around items-center w-[500px] h-[450px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5 my-10'>
    <img src={img4} alt="pitha" className='w-[400px]'/>
    <h3 className='text-[30px] font-semibold'>
        Name ?
    </h3>

    <p>Web Designer & Team Leader</p>
</div>

<div className='flex flex-col justify-around items-center w-[500px] h-[450px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5 my-10'>
    <img src={img3} alt="pitha" className='w-[400px]'/>
    <h3 className='text-[30px] font-semibold'>Name ? 
    </h3>
    <p>Marketing Directory</p>
</div>

<div className='flex flex-col justify-around items-center w-[500px] h-[450px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5 my-10'>
    <img src={img2} alt="pitha" className='w-[400px]'/>
    <h3 className='text-[30px] font-semibold'>Name ?</h3>
    <p>Editor & Content Creator</p>
</div>
</div>

<div>
<div className='flex flex-col justify-around items-center w-[500px] h-[450px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5 my-10'>
    <img src={img1} alt="pitha" className='w-[400px]'/>
    <h3 className='text-[30px] font-semibold'>Name ?</h3>
    <p>Editor & Content Creator</p>
</div>

<div className='flex flex-col justify-around items-center w-[500px] h-[450px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5 my-10'>
    <img src={img5} alt="pitha" className='w-[400px]'/>
    <h3 className='text-[30px] font-semibold'>Name ?</h3>
    <p>Editor & Content Creator</p>
</div>

<div className='flex flex-col justify-around items-center w-[500px] h-[450px] border-solid border-2 border-gray-200 rounded-md hover:shadow-2xl transition-shadow mx-5 my-10'>
    <img src={img6} alt="pitha" className='w-[400px]'/>
    <h3 className='text-[30px] font-semibold'>Name ?</h3>
    <p>Editor & Content Creator</p>
</div>
</div>



</div>

</div>
        </div>
    );
};

export default About;