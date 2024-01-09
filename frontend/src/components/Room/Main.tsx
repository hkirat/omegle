import ChatSection from './MainSection/ChatSection';
import VideoShower from './MainSection/VideoShower';

const Main = ({remoteVideoRef, localVideoRef}:any) => {
  return (
    <div className='flex gap-5 px-4 px-2 sm:px-6 lg:px-8'>
      <VideoShower remoteVideoRef={remoteVideoRef} localVideoRef={localVideoRef}/>
      <ChatSection />
    </div>
  );
};

export default Main;
