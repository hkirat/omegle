import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

const URL = "http://localhost:3000";
declare global {
    interface Window {
        pcr: RTCPeerConnection;
    }
}
interface RoomProps {
    name: string;
    localAudioTrack: MediaStreamTrack | null;
    localVideoTrack: MediaStreamTrack | null;
}


export const Room = ({ name, localAudioTrack, localVideoTrack }: RoomProps) => {
    const [lobby, setLobby] = useState(true);
    const [socket, setSocket] = useState<null | Socket>(null);
    const [sendingPc, setSendingPc] = useState<null | RTCPeerConnection>(null);
    const [receivingPc, setReceivingPc] = useState<null | RTCPeerConnection>(null);
    const [remoteVideoTrack, setRemoteVideoTrack] = useState<MediaStreamTrack | null>(null);
    const [remoteAudioTrack, setRemoteAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [remoteMediaStream, setRemoteMediaStream] = useState<MediaStream | null>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);
    const localVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        try {
            const socket = io(URL);
            // Handle connection errors
            socket.on('connect_error', (error: Error) => {
                console.error(`Socket connection error: ${error.message}`);
            });

            // Handle connection timeout
            socket.on('connect_timeout', () => {
                console.error('Socket connection timeout');
            });

            // Handle reconnection errors
            socket.on('reconnect_error', (error: Error) => {
                console.error(`Socket reconnection error: ${error.message}`);
            });

            // Handle reconnection failure
            socket.on('reconnect_failed', () => {
                console.error('Socket reconnection failed');
            });
            
            socket.on('send-offer', async ({ roomId }) => {
                console.log("sending offer");
                setLobby(false);
                const pc = new RTCPeerConnection();
                setSendingPc(pc);
                if (localVideoTrack) {
                    console.error("added tack");
                    console.log(localVideoTrack)
                    pc.addTrack(localVideoTrack)
                }
                if (localAudioTrack) {
                    console.error("added tack");
                    console.log(localAudioTrack)
                    pc.addTrack(localAudioTrack)
                }

                pc.onicecandidate = async (e: RTCPeerConnectionIceEvent) => {
                    console.log("receiving ice candidate locally");
                    if (e.candidate) {
                        socket.emit("add-ice-candidate", {
                            candidate: e.candidate,
                            type: "sender",
                            roomId
                        })
                    }
                }

                pc.onnegotiationneeded = async () => {
                    console.log("on negotiation neeeded, sending offer");
                    const sdp = await pc.createOffer();
                    pc.setLocalDescription(new RTCSessionDescription(sdp))
                    socket.emit("offer", {
                        sdp,
                        roomId
                    })
                }
            });

            socket.on("offer", async ({ roomId, sdp: remoteSdp }) => {
                console.log("received offer");
                setLobby(false);
                const pc = new RTCPeerConnection();
                pc.setRemoteDescription(new RTCSessionDescription(remoteSdp))
                const sdp = await pc.createAnswer();
                pc.setLocalDescription(sdp);
                const stream = new MediaStream();
                if (remoteVideoRef.current) {
                    remoteVideoRef.current.srcObject = stream;
                }
                setRemoteMediaStream(stream);
                // trickle ice 
                setReceivingPc(pc);
                window.pcr = pc;

                pc.ontrack = (e: RTCTrackEvent) => {
                    alert("ontrack");
                    // console.error("inside ontrack");
                    // const {track, type} = e;
                    // if (type == 'audio') {
                    //     // setRemoteAudioTrack(track);
                    //     // @ts-ignore
                    //     remoteVideoRef.current.srcObject.addTrack(track)
                    // } else {
                    //     // setRemoteVideoTrack(track);
                    //     // @ts-ignore
                    //     remoteVideoRef.current.srcObject.addTrack(track)
                    // }
                    // //@ts-ignore
                    // remoteVideoRef.current.play();
                }

                pc.onicecandidate = async (e) => {
                    if (!e.candidate) {
                        return;
                    }
                    console.log("on ice candidate on receiving side");
                    if (e.candidate) {
                        socket.emit("add-ice-candidate", {
                            candidate: e.candidate,
                            type: "receiver",
                            roomId
                        })
                    }
                }

                socket.emit("answer", {
                    roomId,
                    sdp: sdp
                });
                setTimeout(() => {
                    const track1 = pc.getTransceivers()[0].receiver.track;
                    const track2 = pc.getTransceivers()[1].receiver.track;
                    console.log(track1);
                    if (track1.kind === "video") {
                        setRemoteAudioTrack(track2);
                        setRemoteVideoTrack(track1);
                    } else {
                        setRemoteAudioTrack(track1);
                        setRemoteVideoTrack(track2);
                    }
                    if (remoteVideoRef.current && track1 && track2) {
                        const mediaStream: MediaStream = remoteVideoRef.current.srcObject as MediaStream;
                        mediaStream.addTrack(track1);
                        mediaStream.addTrack(track2);
                        remoteVideoRef.current.play();
                    }

                    // if (type == 'audio') {
                    //     // setRemoteAudioTrack(track);
                    //     // @ts-ignore
                    //     remoteVideoRef.current.srcObject.addTrack(track)
                    // } else {
                    //     // setRemoteVideoTrack(track);
                    //     // @ts-ignore
                    //     remoteVideoRef.current.srcObject.addTrack(track)
                    // }
                    // //@ts-ignore
                }, 5000)
            });

            socket.on("answer", ({ roomId, sdp: remoteSdp }) => {
                setLobby(false);
                setSendingPc(pc => {
                    pc?.setRemoteDescription(new RTCSessionDescription(remoteSdp))
                    return pc;
                });
                console.log("loop closed");
            })

            socket.on("lobby", () => {
                setLobby(true);
            })

            socket.on("add-ice-candidate", ({ candidate, type }: { candidate: RTCIceCandidate, type: string }) => {
                console.log("add ice candidate from remote");
                console.log({ candidate, type })
                if (type == "sender") {
                    setReceivingPc(pc => {
                        if (!pc) {
                            console.error("receicng pc nout found")
                        } else {
                            console.error(pc.ontrack)
                        }
                        pc?.addIceCandidate(candidate)
                        return pc;
                    });
                } else {
                    setSendingPc(pc => {
                        if (!pc) {
                            console.error("sending pc nout found")
                        } else {
                            // console.error(pc.ontrack)
                        }
                        pc?.addIceCandidate(candidate)
                        return pc;
                    });
                }
            })
            setSocket(socket)
        } catch (error) {
            console.error(`Error:${JSON.stringify(error)}`)
        }


    }, [name])

    useEffect(() => {
        if (localVideoRef.current) {
            if (localVideoTrack) {
                localVideoRef.current.srcObject = new MediaStream([localVideoTrack]);
                localVideoRef.current.play();
            }
        }
    }, [localVideoRef])

    return <div>
        Hi {name}
        <video autoPlay width={400} height={400} ref={localVideoRef} />
        {lobby ? "Waiting to connect you to someone" : null}
        <video autoPlay width={400} height={400} ref={remoteVideoRef} />
    </div>
}