import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-xl mb-4 text-white">PROPELLER</div>
            <p className="text-gray-400">Content and Innovation Studio</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                Content Creation
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                Digital Strategy
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                Brand Development
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                Innovation Labs
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                About Us
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                Careers
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                Contact
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                <Link href="https://www.linkedin.com/company/globalpropeller">
                  LinkedIn
                </Link>
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                YouTube
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                <Link href="https://mingai01.substack.com/">Substack</Link>
              </li>
              <li className="text-gray-400 hover:text-primary-purple transition-colors cursor-pointer">
                <Link
                  href="mailto:business@globalpropeller.com"
                  className="flex justify-start items-center"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white">PROPELLER</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
