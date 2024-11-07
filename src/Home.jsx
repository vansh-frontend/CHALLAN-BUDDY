import './index.css'
const Home = () => {
    const services = [
      {
        icon: "fa-car",
        title: "Vehicle Details",
        description: "Get comprehensive information about any registered vehicle.",
        gradient: "from-blue-500 to-blue-600",
        bgGradient: "from-blue-50 to-blue-100",
      },
      {
        icon: "fa-file-invoice-dollar",
        title: "Challan Information",
        description: "Check for any pending challans or fines associated with a vehicle.",
        gradient: "from-emerald-500 to-emerald-600",
        bgGradient: "from-emerald-50 to-emerald-100",
      },
      {
        icon: "fa-history",
        title: "Ownership History",
        description: "View the complete ownership history of a vehicle.",
        gradient: "from-violet-500 to-violet-600",
        bgGradient: "from-violet-50 to-violet-100",
      },
      {
        icon: "fa-shield-alt",
        title: "Insurance Verification",
        description: "Verify the insurance status and details of a vehicle.",
        gradient: "from-orange-500 to-orange-600",
        bgGradient: "from-orange-50 to-orange-100",
      }
    ];
  
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section - Improved Responsiveness */}
        <header className="w-full bg-white px-4 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center space-x-3">
              <img 
                src="/img/rto-logo.jpg" 
                alt="RTO Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-lg" 
              />
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">CHALLAN BUDDY</span>
            </div>
  
            <div className="text-center mt-8 sm:mt-12 md:mt-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900">
                <span className="block mb-2">Your Smart Vehicle</span>
                <span className="block text-blue-600">Information Portal</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
                Access comprehensive vehicle information instantly with our advanced search system
              </p>
            </div>
          </div>
        </header>
  
        {/* Search Section - Enhanced Mobile Experience */}
        <section className="w-full px-4 -mt-6 sm:-mt-8 md:-mt-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
              Search Vehicle Information
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input 
                type="text" 
                placeholder="Enter vehicle number (e.g., UP16CD1996)" 
                className="flex-1 px-4 py-3 sm:px-5 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-base sm:text-lg transition-colors"
                pattern="^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$"
              />
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:shadow-lg">
                <span className="flex items-center justify-center space-x-2">
                  <i className="fas fa-search"></i>
                  <span>Search</span>
                </span>
              </button>
            </div>
          </div>
        </section>
  
        {/* Services Section - Responsive Grid */}
        <section className="w-full px-4 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-br ${service.bgGradient} border border-gray-100 hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`bg-gradient-to-r ${service.gradient} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-4`}>
                    <i className={`fas ${service.icon} text-lg sm:text-xl`}></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Footer - Improved Mobile Layout */}
        <footer className="w-full bg-gray-900 text-white mt-auto py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img src="/img/rto-logo.jpg" alt="RTO Logo" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
                  <span className="text-lg sm:text-xl font-bold">CHALLAN BUDDY</span>
                </div>
                <p className="text-sm text-gray-400">
                  Your trusted partner for vehicle information and challan services.
                </p>
              </div>
  
              {/* Contact Info */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Information</h4>
                <div className="space-y-2">
                  <a href="mailto:vansdhalor0001@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <i className="fas fa-envelope"></i>
                    <span className="break-all">vansdhalor0001@gmail.com</span>
                  </a>
                  <a href="mailto:anshupreet@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <i className="fas fa-envelope"></i>
                    <span className="break-all">anshupreet@gmail.com</span>
                  </a>
                  <a href="tel:+919888601907" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <i className="fas fa-phone"></i>
                    <span>+91 9888601907</span>
                  </a>
                </div>
              </div>
  
              {/* Quick Links */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                  <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
                </div>
              </div>
            </div>
  
            <div className="border-t border-gray-800 mt-6 pt-6">
              <p className="text-gray-400 text-xs sm:text-sm text-center">
                © {new Date().getFullYear()} Challan Buddy. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Home;