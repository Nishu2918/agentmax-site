export function VideoBackground({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#060b14]">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={src}
      />
      <div className="absolute inset-0 bg-[#060b14]/25" />
    </div>
  );
}
