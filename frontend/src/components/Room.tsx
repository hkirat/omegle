import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Socket, io } from "socket.io-client";

const URL = "http://localhost:3000";

export const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    const [lobby, setLobby] = useState(true);
    const [socket, setSocket] = useState<null | Socket>(null);
    const [sendingPc, setSendingPc] = useState<null | RTCPeerConnection>(null);
    const [receivingPc, setReceivingPc] = useState<null | RTCPeerConnection>(null);
    const [remoteVideoTrack, setRemoteVideoTrack] = useState<MediaStreamTrack | null>(null);
    const [localVideoTracck, setlocalVideoTracck] = useState<MediaStreamTrack, null>(null);
    const [remoteAudioTrack, setRemoteAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [localAudioTrack, setLocalAudioTrack] = useState<MediaStreamTrack, null>(null);

    useEffect(() => {
        const socket = io(URL);
        socket.on('send-offer', async ({roomId}) => {
            setLobby(false);
            const pc = new RTCPeerConnection();
            setSendingPc(pc);

            const sdp = await pc.createOffer();
            socket.emit("offer", {
                sdp,
                roomId
            })
        });

        socket.on("offer", async ({roomId, offer}) => {
            setLobby(false);
            const pc = new RTCPeerConnection();
            pc.setRemoteDescription({sdp: offer, type: "offer"})
            const sdp = await pc.createAnswer();
            // trickle ice 
            setReceivingPc(pc);
            pc.ontrack = (({track, type}) => {
                if (type == 'audio') {
                    setRemoteAudioTrack(track);
                } else {
                    setRemoteVideoTrack(track);
                }
            })
            socket.emit("answer", {
                roomId,
                sdp: sdp
            });
        });

        socket.on("answer", ({roomId, answer}) => {
            setLobby(false);
            setSendingPc(pc => {
                pc?.setRemoteDescription({
                    type: "answer",
                    sdp: answer
                })
                return pc;
            })
        })

        socket.on("lobby", () => {
            setLobby(true);
        })

        setSocket(socket)
    }, [name])

    if (lobby) {
        return <div>

            Waiting to connect you to someone
        </div>
    }

    return <div>
        Hi {name}
        <video width={400} height={400} />
        <video width={400} height={400} />
    </div>
}

