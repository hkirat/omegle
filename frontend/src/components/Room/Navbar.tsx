const Navbar = () => {
  const people = 1;
  return (
    <nav className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4'>
        <div className='relative flex justify-between h-16 items-center'>
          <div className='flex-1 flex gap-8 items-center'>
            <p className='flex-shrink-0 text-4xl font-md'>
              <span className='text-sky-400'>O</span>
              <span className='text-amber-600'>megle 2.0</span>
            </p>
            <span className='text-xl'>Talk to strangers!</span>
          </div>
          <div className='absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <span className='text-sky-400'>{people} people online</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
