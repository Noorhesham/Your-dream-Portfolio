export default function StrokeText() {
  return (
    <div className="flex items-center justify-center  bg-black">
      <h1 className="relative text-[200px] text-transparent font-bold font-stroke-text">
        801
        <span className="absolute top-[-10px] left-[-20px] w-8 h-8 border border-white rounded-full"></span>
      </h1>
    </div>
  );
}
