export function InteractivePlaceholder() {
  return (
    <div
      className="relative w-full h-64 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-xl overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-500 opacity-20 rounded-xl animate-gradient-x"
      />
      <h2 className="text-2xl font-bold text-white text-center py-12">Module 3 Interactive UX</h2>
      <p className="text-white text-center opacity-80">Interactive graphics and motion animations will be added here.</p>
    </div>
  );
}