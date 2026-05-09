

const HeroSection = () => {
  return (
    <div className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles w-4 h-4"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg><span className="text-sm font-medium">Optimize Your AI Infrastructure Costs</span>

              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">Reduce AI Spending by up to <span className="text-blue-600">60%</span></h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">Enterprise-grade AI spend auditing and optimization platform. Get real-time insights, identify waste, and maximize ROI on your AI infrastructure investments.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 font-medium">Start Free Audit<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button><button className="bg-white text-slate-700 px-8 py-4 rounded-lg border-2 border-slate-300 hover:border-slate-400 transition font-medium">View Features</button></div>
              <p className="text-sm text-slate-500 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
