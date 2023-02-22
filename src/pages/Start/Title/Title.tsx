import Logo from '@/components/elements/Logo/Logo';
import React from 'react';

const Title = () => {
  return (
    <div>
      <Logo />
      <div className='flex items-center justify-center h-screen bg-center bg-cover carpet'>
        <div
          style={{
            width: '588px',
            height: '588px',
            borderRadius: '294px',
          }}
          className='flex items-center justify-center bg-white text-center text-lg flex-col'
        >
          <p className='h2'>Als Experten in</p>
          <h1>Tech & Design</h1>
          <p className='h2'>geben wir Ihrem</p>
          <h2>Unternehmen frische</h2>
          <p className='h1 mb-8'>Strahlkraft</p>
          <button className='bg-teal px-8 py-4  rounded-full text-base font-medium'>
            Kennenlernen vereinbaren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Title;
