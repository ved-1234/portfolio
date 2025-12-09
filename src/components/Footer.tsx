import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Ved Chaudhari. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-orange-500 fill-orange-500" size={16} />
            <span>by Ved Chaudhari</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
