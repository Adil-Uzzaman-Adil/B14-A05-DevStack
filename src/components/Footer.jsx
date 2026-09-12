export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <img
            src="/logo-text.png"
            alt="Dev Stack"
            className="h-9 w-auto mb-3"
          />
          <p className="text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-600">
            <a href="#" className="hover:text-pink-500">GitHub</a>
            <a href="#" className="hover:text-pink-500">Twitter</a>
            <a href="#" className="hover:text-pink-500">LinkedIn</a>
          </div>
        </div>

        {/* Link groups */}
        <div>
          <h4 className="font-semibold text-sm text-gray-800 mb-3 uppercase">
            Product
          </h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">Home</a></li>
            <li><a href="#" className="hover:text-pink-500">Technologies</a></li>
            <li><a href="#" className="hover:text-pink-500">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-800 mb-3 uppercase">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">About</a></li>
            <li><a href="#" className="hover:text-pink-500">Contact</a></li>
            <li><a href="#" className="hover:text-pink-500">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-gray-800 mb-3 uppercase">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-500">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-pink-500">Privacy</a>
            <a href="#" className="hover:text-pink-500">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}