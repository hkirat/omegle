const VideoShower = ({ remoteVideoRef, localVideoRef }: any) => {
  return (
    <div className='flex flex-col gap-16'>
      <div className='w-[35vw] h-[35vh] border rounded-lg bg-gray-100 shadow'>
        <video autoPlay className="w-[35vw] h-[35vh] object-cover rounded-lg" ref={localVideoRef} />
      </div>
      <div className='w-[35vw] h-[35vh] border rounded-lg bg-gray-100 shadow'>
        <video autoPlay className="w-[35vw] h-[35vh] object-cover rounded-lg" ref={remoteVideoRef} />
      </div>
    </div>
  );
};

export default VideoShower;
