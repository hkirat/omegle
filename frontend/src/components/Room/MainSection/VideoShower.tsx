const VideoShower = () => {
  return (
    <div className='flex flex-col gap-16'>
      <div className='w-[35vw] h-[35vh] border rounded-lg shadow'>
        <video width={400} height={200} />
      </div>
      <div className='w-[35vw] h-[35vh] border rounded-lg shadow'>
        <video width={400} height={200} />
      </div>
    </div>
  );
};

export default VideoShower;
