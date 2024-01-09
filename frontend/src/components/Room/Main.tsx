import ChatSection from './MainSection/ChatSection';
import VideoShower from './MainSection/VideoShower';

const Main = () => {
  return (
    <div className='flex gap-5 px-4 max-w-7xl px-2 sm:px-6 lg:px-8'>
      <VideoShower />
      <ChatSection />
    </div>
  );
};

export default Main;
