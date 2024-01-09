import { useState } from 'react';
import LeftChat from './LeftChat';
import RightChat from './RightChat';

const chatData = [
  {
    userid: 1,
    username: 'Jese Rodriguez',
    message: 'Hello, how are you?',
    time: '11:45 PM',
    status: 'sent',
  },
  {
    userid: 2,
    username: 'Bonnie Green',
    message:
      "That's awesome. I think our users will really appreciate the improvements.",
    time: '11:46 PM',
    status: 'delivered',
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const ChatSection = () => {
  const [data, setData]: any = useState(chatData);
  const [currentMessage, setCurentMessage] = useState({
    userid: 2,
    status: '',
    time: '',
    username: '',
    message: '',
  });

  const onChangeHandler = (e: any) => {
    setCurentMessage((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const onSendHandler = () => {
    const temp = {
      ...currentMessage,
      time: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      username: 'Bonnie Green',
      status: 'delivered',
    };
    setData((prevState: any) => [...prevState, temp]);
  };

  return (
    <div className='border w-[70vw] self-stretch rounded-lg shadow flex flex-col p-4'>
      <div className='max-h-[78vh] flex-1 flex flex-col overflow-y-auto'>
        {data.map((user: any, idx: number) => (
          <div
            key={idx}
            className={classNames(
              user.userid % 2 == 0 ? 'self-end' : 'self-start'
            )}
          >
            {user.userid % 2 == 0 ? (
              <RightChat
                username={user.username}
                message={user.message}
                time={user.time}
                status={user.status}
              />
            ) : (
              <LeftChat
                username={user.username}
                message={user.message}
                time={user.time}
                status={user.status}
              />
            )}
          </div>
        ))}
      </div>
      <div className='flex gap-4'>
        <input
          type='text'
          name='text'
          id='text'
          className='shadow-sm p-2 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md'
          placeholder='Type your message here!'
          onChange={onChangeHandler}
        />
        <button
          type='button'
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          onClick={onSendHandler}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
