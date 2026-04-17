function HomeLoading() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#244D3F] mb-4"></div>
        <p className="text-slate-600 text-lg">Loading...</p>
      </div>
    </div>
  );
}

export default HomeLoading;
