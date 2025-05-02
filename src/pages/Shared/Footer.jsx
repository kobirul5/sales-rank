import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" container mx-auto text-gray-700 px-5 pt-16 pb-8">
    {/* CTA Banner */}
    <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-lg p-8 text-center mb-16">
      <h2 className="text-2xl font-semibold">Ready to Hire Smarter?</h2>
      <p className="text-sm mt-2">Let us build an amazing team for you. Get in touch now.</p>
      <button className="mt-4 px-5 py-2 bg-[#FCE38A] text-gray-800 font-semibold rounded-full hover:bg-yellow-300 transition">
        Get a Demo
      </button>
    </div>

    {/* Footer Main */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo and Description */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="bg-green-400 w-6 h-6 rounded-sm"></div>
          <span className="text-lg font-bold">Logo</span>
        </div>
        <p className="text-sm">
          Simplify the hiring process with our intuitive platform. Save time, attract better talent,
          and ensure your team makes smarter decisions. 
        </p>
        <div className="flex space-x-3 mt-4">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaGithub /></a>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <h3 className="font-semibold mb-3">Navigation</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#">Home</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* License */}
      <div>
        <h3 className="font-semibold mb-3">License</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#">Public Notice</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Legal Advice</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-semibold mb-3">Contact</h3>
        <ul className="space-y-2 text-sm">
          <li>Email: hello@site.com</li>
          <li>Phone: +123 456 789</li>
          <li>Address: 123 Business St, Suite 456, City, Country</li>
        </ul>
      </div>
    </div>

    {/* effect0 */}
    
  </footer>
  )
}

export default Footer;