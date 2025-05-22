import logo from "../assets/software-logo.svg";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Subscription Section */}
        <div className="md:col-span-1">
          <h3 className="text-3xl font-bold mb-4">Don't Missed Subscribed!</h3>
          <div className="flex items-center bg-gray-900 p-2 rounded-md">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
            />
            <button className="ml-2 bg-yellow-400 text-black p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Our Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 text-yellow-400">
                Careers <span className="ml-1">Hiring</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Solutions Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Solutions</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                App Application
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Cyber Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Cloud Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact Section */}
        <div className="md:col-span-1">
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          </div>
          <div>
            <p className="mb-2">Phone</p>
            <p className="mb-4">+991-763 684 4563</p>
            <p>Email Now</p>
            <p className="mb-4">info@Alhenaventures.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="Alhena Ventures Logo"
            className="w-44 h-10 mr-2"
          />
        </div>
        <p className="text-lg font-semibold">Copyright 2025 alhenaventures</p>
      </div>
    </footer>
  );
};

export default Footer;
