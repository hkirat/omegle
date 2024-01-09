import bgVideo from "../assets/Bg-video.mp4"

const BackgroundVideo = () => {
  return (
    <div style={{ position: 'relative' }}>
      <video
        autoPlay
        loop
        muted
        playsInline 
        style={{
          position: "fixed",
          width: "100%", 
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default BackgroundVideo
