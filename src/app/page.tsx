
import AddToCartCard from '@/components/ui/AddToCartCard/AddToCartCard';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='bg-red-500 w-8/12 h-screen'>left</div> 
        <div className='bg-green-500 w-4/12 h-screen'>
        <AddToCartCard/>
        </div>
        </div> 
    </div>
  );
};

export default HomePage;