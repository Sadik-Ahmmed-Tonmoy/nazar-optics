'use client'

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { decrement, increment } from '@/redux/features/counter/counterSlice';
import { RootState } from '@/redux/store';
import React from 'react';

const ReduxTest = () => {
    const count = useAppSelector((state: RootState) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <div>
            redux test

            <div>
      <div  className='flex  gap-5'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>

        </div>
    );
};

export default ReduxTest;