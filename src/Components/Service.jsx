import React from 'react';

const NewSletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-[#00df9a] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
             What services do I offer?
          </h1>
          <p>I am currently offering services as a freelance front-end developer, I have already done some work such as a page for a therapist and an ecommerce for a restaurant chain</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>Here are some of my projects
            {' '}<br />
            <a href="#" className='text-[#00df9a]'>See Proyects.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewSletter;