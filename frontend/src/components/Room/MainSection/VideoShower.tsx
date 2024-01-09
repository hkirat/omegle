const VideoShower = ({ remoteVideoRef, localVideoRef }: any) => {
  return (
    <div className='flex flex-col gap-16'>
      <div className='w-[35vw] h-[35vh] border rounded-lg shadow'>
        <video autoPlay width={400} height={400} ref={localVideoRef} />
      </div>
      <div className='w-[35vw] h-[35vh] border rounded-lg shadow'>
        <video autoPlay width={400} height={400} ref={remoteVideoRef} />
      </div>
    </div>
  );
};

export default VideoShower;
