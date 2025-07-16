const Footer = () => {
  return (
    <>
      <section className="bg-[#020617] text-white pt-16 pb-6 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Accelerate AI adoption</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h4 className="text-2xl text-[#E9D5FF]">Automate tasks</h4>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h4 className="text-2xl text-[#BBF7D0]">Find Answers</h4>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h4 className="text-2xl text-[#FED7AA]">Boost Productivity</h4>
            </div>
          </div>

          <button className="bg-white text-[#3B0764] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-16">
            Try Aunt for Free
          </button>
        </div>
      </section>

      <section className="bg-white text-black py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-black">
          <p>© 2024 Aunt Labs, Inc. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white text-2xl">
                <span className="sr-only">LinkedIn</span>
                in
              </a>
              <a href="#" className="hover:text-white text-2xl">
                <span className="sr-only">Twitter</span>𝕏
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
