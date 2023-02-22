import React from 'react';

const Offer = () => {
  return (
    <div>
      <div className='flex items-center justify-between bg-cover eye'>
        <div
          style={{
            width: '490px',
            height: '490px',
            borderRadius: '245px',
          }}
          className='flex items-center justify-center h-screen bg-white text-center text-lg flex-col p-4 ml-8'
        >
          <p className='h1 mb-4'>Design</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <button className='bg-teal px-8 mt-8 py-4 rounded-full text-base font-medium'>
            Mehr zu Design
          </button>
        </div>

        <div
          style={{
            width: '490px',
            height: '490px',
            borderRadius: '245px',
          }}
          className='flex items-center justify-center h-screen bg-white text-center text-lg flex-col p-4 mr-8'
        >
          <p className='h1 mb-4'>Tech</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <button className='bg-teal px-8 mt-8 py-4 rounded-full text-base font-medium'>
            Mehr zu Tech
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
