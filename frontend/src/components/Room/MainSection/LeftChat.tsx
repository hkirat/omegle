const LeftChat = ({ username, message, time, status }: any) => {
  return (
    <div className='flex items-start gap-2.5'>
      <div className='w-8 h-8 rounded-full flex justify-center items-center bg-gray-200'>
        <span>{username.split('')[0]}</span>
      </div>
      <div className='flex flex-col gap-1 w-full max-w-[320px]'>
        <div className='flex items-center space-x-2 rtl:space-x-reverse'>
          <span className='text-sm font-semibold text-gray-900'>
            {username}
          </span>
          <span className='text-sm font-normal text-gray-500'>{time}</span>
        </div>
        <div className='flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl'>
          <p className='text-sm font-normal text-gray-900'>{message}</p>
        </div>
        <span className='text-sm font-normal text-gray-500'>{status}</span>
      </div>
    </div>
  );
};

export default LeftChat;
