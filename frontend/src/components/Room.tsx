import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from './Room/Navbar';
import Main from './Room/Main';

export const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {}, [name]);

  return (
    <div className='flex flex-col gap-12'>
      <Navbar />
      <Main />
    </div>
  );
};
