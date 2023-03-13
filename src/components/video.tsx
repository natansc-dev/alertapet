export default function VideoSection() {
  return (
    <div className="flex items-center justify-center -mt-[98px] mb-24">
      <div className="w-full">
        <div className="row justify-center">
          <div className="w-11/12 mx-auto flex justify-center">
            <video autoPlay loop muted preload="auto" className="border-8 border-white">
              <source src='/video-02.mp4' type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}