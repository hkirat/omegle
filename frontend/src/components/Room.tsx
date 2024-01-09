import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    // logic to init user to the room
  }, [name]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex">
        <div className="flex flex-col w-full md:w-3/4 space-y-4 p-4 max-h-screen">
          <div className="flex-1 bg-gray-300 rounded-lg overflow-hidden">
            <img
              alt="Participant 1"
              className="object-cover w-full h-full"
              height="400"
              src="https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&w=600"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>

          <div className="flex-1 bg-gray-300 rounded-lg overflow-hidden">
            <img
              alt="Participant 2"
              className="object-cover w-full h-full"
              height="400"
              src="https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&w=600"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="flex flex-col h-full bg-gray-200 rounded-md">
            <div className="flex-1 p-4 space-y-4">
              <p className="bg-white p-2 rounded-md shadow">
                User 1: Hello, how are you?
              </p>
              <p className="bg-white p-2 rounded-md shadow">
                User 2: I'm good, thanks!
              </p>
              <p className="bg-white p-2 rounded-md shadow">
                User 1: Let's start the meeting.
              </p>
            </div>

            <div className="mt-4 flex gap-2 p-2">
              <input
                className="flex-1 p-2 "
                placeholder="Type your message here"
                type="text"
              />
              <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
