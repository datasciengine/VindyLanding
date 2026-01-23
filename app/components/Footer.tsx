import Image from "next/image";
import Link from "next/link";
import { RiTwitterXFill, RiFacebookFill, RiGoogleFill } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-200 pb-6 sm:flex-row">
          <Link 
            href="#hero" 
            className="flex items-center gap-3 min-h-[48px] min-w-[48px] touch-manipulation"
            aria-label="Vindy Home"
          >
            <Image
              src="/logo/Vindy-logo.svg"
              width={100}
              height={50}
              quality={90}
              alt="Vindy logo"
              title="Vindy Logo"
            />
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-6 text-[16px] text-gray-500"
          >
            <a 
              href="#features" 
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] px-2 hover:text-[#2962FF] touch-manipulation"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] px-2 hover:text-[#2962FF] touch-manipulation"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] px-2 hover:text-[#2962FF] touch-manipulation"
            >
              About
            </a>
            <a 
              href="#login" 
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] px-2 hover:text-[#2962FF] touch-manipulation"
            >
              Login
            </a>
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[12px] text-gray-500 opacity-70 ">
            © {new Date().getFullYear()} Vindy. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/vindy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] text-[#2962FF] transition hover:text-[#2f6dff] touch-manipulation"
            >
              <RiTwitterXFill className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/vindy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] text-[#2962FF] transition hover:text-[#2f6dff] touch-manipulation"
            >
              <RiFacebookFill className="h-5 w-5" />
            </a>
            <a
              href="https://plus.google.com/vindy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Plus"
              className="inline-flex items-center justify-center min-h-[48px] min-w-[48px] text-[#2962FF] transition hover:text-[#2f6dff] touch-manipulation"
            >
              <RiGoogleFill className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
