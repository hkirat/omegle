import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { Room } from "./Room";

export const Landing = () => {
    const [name, setName] = useState("");
    const [localAudioTrack, setLocalAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [localVideoTrack, setlocalVideoTrack] = useState<MediaStreamTrack | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [joined, setJoined] = useState(false);

    const getCam = async () => {
        const stream = await window.navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        // MediaStream
        const audioTrack = stream.getAudioTracks()[0]
        const videoTrack = stream.getVideoTracks()[0]
        setLocalAudioTrack(audioTrack);
        setlocalVideoTrack(videoTrack);
        if (!videoRef.current) {
            return;
        }
        videoRef.current.srcObject = new MediaStream([videoTrack])
        videoRef.current.play();
        // MediaStream
    }

    useEffect(() => {
        if (videoRef && videoRef.current) {
            getCam()
        }
    }, [videoRef]);

    if (!joined) {
        return <div className="grid h-screen place-items-center font-mono">
            <div>
                <div className="">
                    <video className="rounded-lg h-auto" autoPlay ref={videoRef} ></video>
                </div>
                <div className="flex gap-10 mt-10">
                    <input
                        style={{"width" : "100%"}}
                        className="bg-gray-50 text-xl text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <button
                        style={{"width" : "38%"}}
                        className="mt-2 text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:text-black dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:hover:text-white dark:focus:ring-gray-700"
                        onClick={() => setJoined(true)}
                    >
                        Join
                    </button>
                </div>
            </div>
        </div>
    }

    return <div className="">
        <div>
            <Room name={name} localAudioTrack={localAudioTrack} localVideoTrack={localVideoTrack} />
        </div>
    </div>
}