export default function ArrowDirection() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-between py-2 px-20 z-30">
      <div className="arrow-left cursor-pointer">
        <img src="/arrow-left.svg" alt="Arrow" className="w-20" />
      </div>
      <div className="arrow-right cursor-pointer">
        <img src="/arrow-right.svg" alt="Arrow" className="w-20" />
      </div>
    </div>
  );
}
