'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [originalNavOffset, setOriginalNavOffset] = useState<number | null>(null);

  useEffect(() => {
    const header = document.querySelector('.transparent-header');
    const mainNavigation = header?.querySelector('.main-navigation');
    
    if (mainNavigation) {
      const offset = (mainNavigation as HTMLElement).offsetTop;
      setOriginalNavOffset(offset);
    }

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const isMobileView = window.innerWidth <= 768;

      if (!isMobileView && originalNavOffset !== null) {
        setIsScrolled(scrolled >= originalNavOffset);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      const mainNavigation = header?.querySelector('.main-navigation');
      if (mainNavigation) {
        const offset = (mainNavigation as HTMLElement).offsetTop;
        setOriginalNavOffset(offset);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [originalNavOffset]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`transparent-header fixed top-0 left-0 w-full z-[1000] bg-white/70 backdrop-blur-xl border-b border-black/5 transition-shadow ${isScrolled ? 'shadow-[0_4px_25px_rgba(0,0,0,0.15)]' : ''}`}>
      {/* Header Content */}
      <div className={`header-content ${isScrolled ? 'hidden' : 'flex items-center justify-between px-8 py-4 max-w-[1400px] mx-auto'}`}>
        {/* Mobile Menu Section */}
        <div className="mobile-menu-section lg:hidden flex items-center gap-2">
          <button
            className="mobile-menu-btn flex items-center justify-center w-[42px] h-[42px] rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl text-[var(--primary-color)]`}></i>
          </button>
          <div className="mobile-search-left flex items-center justify-center w-[42px] h-[42px] rounded-lg bg-white/10 hover:bg-white/20 transition-all cursor-pointer">
            <i className="fas fa-search text-xl text-[var(--primary-color)]"></i>
          </div>
        </div>

        {/* Left Section - Contact Info */}
        <div className="header-left flex-1 hidden lg:block">
          <div className="contact-info flex flex-col gap-1">
            <div className="phone font-medium text-sm text-[var(--primary-color)]">+34 933 425 586</div>
            <div className="hours text-sm text-[var(--secondary-color)]">Lun a vie: 9.30 a 14 - 16 a 19</div>
          </div>
        </div>

        {/* Center Section - Logo */}
        <div className="header-center flex-1 flex justify-center items-center">
          <div className="logo-container flex items-center justify-center">
            <Image
              src="/Centhylon-Logo_Vectorial.svg"
              alt="Centhylon Logo"
              width={120}
              height={120}
              className="logo transition-transform hover:scale-105 hidden lg:block"
            />
            <Image
              src="/Logo_versió_text2.svg"
              alt="Centhylon Logo"
              width={140}
              height={35}
              className="logo-horizontal lg:hidden"
            />
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="header-right flex-1 flex flex-col items-end gap-2">
          <div className="header-actions flex items-center gap-6">
            <div className="language-selector hidden sm:flex items-center gap-2 cursor-pointer px-4 py-3 rounded-md transition-all hover:bg-[rgba(44,62,80,0.1)] text-sm text-[var(--primary-color)]">
              <i className="fas fa-globe text-sm"></i>
              <span className="hidden lg:inline">Idioma</span>
              <i className="fas fa-chevron-down text-xs transition-transform"></i>
            </div>
            <div className="session flex items-center gap-2 cursor-pointer px-4 py-3 rounded-md transition-all hover:bg-[rgba(44,62,80,0.1)] text-sm text-[var(--primary-color)]">
              <i className="fas fa-user text-sm"></i>
              <span className="hidden lg:inline">Sesión</span>
            </div>
            <div className="basket flex items-center gap-2 cursor-pointer px-4 py-3 rounded-md transition-all hover:bg-[rgba(44,62,80,0.1)] text-sm text-[var(--primary-color)]">
              <i className="fas fa-shopping-cart text-sm"></i>
              <span className="hidden lg:inline">Cesta</span>
            </div>
          </div>
          <div className="search-bar hidden lg:flex items-center bg-transparent border border-[rgba(44,62,80,0.3)] rounded-[20px] px-3 py-2 transition-all focus-within:bg-[rgba(44,62,80,0.1)] focus-within:border-[var(--primary-color)]">
            <i className="fas fa-search text-[var(--primary-color)] mr-2 text-sm"></i>
            <input
              type="text"
              placeholder="Encuentra tu fragancia"
              className="search-input border-none outline-none bg-transparent w-[200px] text-sm text-[var(--primary-color)] font-medium placeholder:text-[var(--secondary-color)]"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`main-navigation bg-transparent px-8 ${mobileMenuOpen ? 'lg:block' : 'hidden lg:block'}`}>
        <div className="nav-content flex justify-center items-center max-w-[1400px] mx-auto relative">
          <div className="logo-horizontal-container hidden lg:block">
            <Image
              src="/Logo_versió_text2.svg"
              alt="Centhylon Logo"
              width={120}
              height={30}
              className="logo-horizontal"
            />
          </div>
          <ul className={`nav-list flex flex-col lg:flex-row justify-center list-none m-0 p-0 flex-1 ${mobileMenuOpen ? 'mobile-open py-4' : ''}`}>
            <li>
              <a href="#servicios" onClick={closeMobileMenu} className="block px-6 py-4 text-[var(--primary-color)] no-underline font-medium text-sm tracking-wide transition-all rounded-md my-1 hover:bg-[rgba(44,62,80,0.1)] hover:text-[var(--hover-color)]">
                SERVICIOS A EMPRESAS
              </a>
            </li>
            <li>
              <a href="#productos" onClick={closeMobileMenu} className="block px-6 py-4 text-[var(--primary-color)] no-underline font-medium text-sm tracking-wide transition-all rounded-md my-1 hover:bg-[rgba(44,62,80,0.1)] hover:text-[var(--hover-color)]">
                PRODUCTOS
              </a>
            </li>
            <li>
              <a href="#quienes" onClick={closeMobileMenu} className="block px-6 py-4 text-[var(--primary-color)] no-underline font-medium text-sm tracking-wide transition-all rounded-md my-1 hover:bg-[rgba(44,62,80,0.1)] hover:text-[var(--hover-color)]">
                QUIÉN NOS ELIGE
              </a>
            </li>
            <li>
              <a href="#distribuidores" onClick={closeMobileMenu} className="block px-6 py-4 text-[var(--primary-color)] no-underline font-medium text-sm tracking-wide transition-all rounded-md my-1 hover:bg-[rgba(44,62,80,0.1)] hover:text-[var(--hover-color)]">
                DISTRIBUIDORES
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={closeMobileMenu} className="block px-6 py-4 text-[var(--primary-color)] no-underline font-medium text-sm tracking-wide transition-all rounded-md my-1 hover:bg-[rgba(44,62,80,0.1)] hover:text-[var(--hover-color)]">
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .main-navigation {
            position: fixed;
            top: var(--mobile-header-height, 70px);
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
            transform: scaleY(${mobileMenuOpen ? '1' : '0'});
            transform-origin: top center;
            opacity: ${mobileMenuOpen ? '1' : '0'};
            visibility: ${mobileMenuOpen ? 'visible' : 'hidden'};
            transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
            z-index: 1999;
            overflow: hidden;
          }

          .nav-list.mobile-open li {
            opacity: 1;
            transform: scale(1);
            transition: all 0.2s ease;
          }

          .nav-list.mobile-open li:nth-child(1) { transition-delay: 0.3s; }
          .nav-list.mobile-open li:nth-child(2) { transition-delay: 0.35s; }
          .nav-list.mobile-open li:nth-child(3) { transition-delay: 0.4s; }
          .nav-list.mobile-open li:nth-child(4) { transition-delay: 0.45s; }
          .nav-list.mobile-open li:nth-child(5) { transition-delay: 0.5s; }

          .header-actions > div {
            width: 42px;
            height: 42px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
          }

          .header-actions > div:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .header-actions span,
          .header-actions .fa-chevron-down {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
