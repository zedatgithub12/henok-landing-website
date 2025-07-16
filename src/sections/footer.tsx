const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Accelerate AI adoption</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-lg">Automate tasks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-lg">Find Answers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-lg">Boost Productivity</span>
          </div>
        </div>

        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mb-16">
          Try Aunt for Free
        </button>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© 2024 Aunt Labs, Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  in
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Twitter</span>𝕏
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
