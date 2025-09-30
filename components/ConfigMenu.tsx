'use client';

import { useState, useEffect, useRef } from 'react';

interface ConfigMenuProps {
  onConfigChange: (config: ConfigState) => void;
}

export interface ConfigState {
  showTitle: boolean;
  halfScreen: boolean;
  parallaxEffect: boolean;
  vimeoMode: boolean;
  vimeoUrl: string;
}

export default function ConfigMenu({ onConfigChange }: ConfigMenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [config, setConfig] = useState<ConfigState>({
    showTitle: false,
    halfScreen: false,
    parallaxEffect: true,
    vimeoMode: true,
    vimeoUrl: 'https://vimeo.com/1118840788'
  });

  const configBtnRef = useRef<HTMLDivElement>(null);
  const configMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onConfigChange(config);
  }, [config, onConfigChange]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        configBtnRef.current &&
        configMenuRef.current &&
        !configBtnRef.current.contains(e.target as Node) &&
        !configMenuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleCheckboxChange = (key: keyof ConfigState) => {
    setConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleVimeoUrlChange = (url: string) => {
    setConfig(prev => ({ ...prev, vimeoUrl: url }));
  };

  return (
    <>
      {/* Config Button */}
      <div
        ref={configBtnRef}
        className="floating-config-btn fixed bottom-5 left-5 w-[50px] h-[50px] bg-white/70 backdrop-blur-xl rounded-full flex items-center justify-center cursor-pointer z-[2000] border border-black/5 transition-all hover:bg-white/90 hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fas fa-cog text-xl text-[var(--primary-color)]"></i>
      </div>

      {/* Config Menu */}
      <div
        ref={configMenuRef}
        className={`floating-config-menu fixed bottom-20 left-5 w-[300px] bg-white/70 backdrop-blur-xl rounded-xl border border-black/5 z-[2001] transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
        }`}
      >
        <div className="config-header flex justify-between items-center p-4 border-b border-black/10">
          <h3 className="m-0 text-[var(--primary-color)] text-lg font-medium">Configuración</h3>
          <button
            className="close-btn bg-none border-none cursor-pointer text-[var(--secondary-color)] text-base p-1 rounded transition-all hover:bg-black/10 hover:text-[var(--primary-color)]"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="config-options p-4">
          {/* Show Title Option */}
          <div className="config-option mb-4">
            <label className="checkbox-container flex items-center cursor-pointer text-sm text-[var(--primary-color)] select-none">
              <input
                type="checkbox"
                checked={config.showTitle}
                onChange={() => handleCheckboxChange('showTitle')}
                className="hidden"
              />
              <span className={`checkmark w-5 h-5 border-2 rounded mr-3 relative transition-all flex-shrink-0 ${
                config.showTitle
                  ? 'bg-[var(--primary-color)] border-[var(--primary-color)]'
                  : 'border-[var(--secondary-color)]'
              }`}>
                {config.showTitle && (
                  <span className="absolute left-1/2 top-1/2 w-[5px] h-[8px] border-[var(--off-white)] border-r-2 border-b-2 -translate-x-1/2 -translate-y-[60%] rotate-45"></span>
                )}
              </span>
              Mostrar título en el video
            </label>
          </div>

          {/* Half Screen Option */}
          <div className="config-option mb-4">
            <label className="checkbox-container flex items-center cursor-pointer text-sm text-[var(--primary-color)] select-none">
              <input
                type="checkbox"
                checked={config.halfScreen}
                onChange={() => handleCheckboxChange('halfScreen')}
                className="hidden"
              />
              <span className={`checkmark w-5 h-5 border-2 rounded mr-3 relative transition-all flex-shrink-0 ${
                config.halfScreen
                  ? 'bg-[var(--primary-color)] border-[var(--primary-color)]'
                  : 'border-[var(--secondary-color)]'
              }`}>
                {config.halfScreen && (
                  <span className="absolute left-1/2 top-1/2 w-[5px] h-[8px] border-[var(--off-white)] border-r-2 border-b-2 -translate-x-1/2 -translate-y-[60%] rotate-45"></span>
                )}
              </span>
              Video reducido (50vh)
            </label>
          </div>

          {/* Parallax Effect Option */}
          <div className="config-option mb-4">
            <label className="checkbox-container flex items-center cursor-pointer text-sm text-[var(--primary-color)] select-none">
              <input
                type="checkbox"
                checked={config.parallaxEffect}
                onChange={() => handleCheckboxChange('parallaxEffect')}
                className="hidden"
              />
              <span className={`checkmark w-5 h-5 border-2 rounded mr-3 relative transition-all flex-shrink-0 ${
                config.parallaxEffect
                  ? 'bg-[var(--primary-color)] border-[var(--primary-color)]'
                  : 'border-[var(--secondary-color)]'
              }`}>
                {config.parallaxEffect && (
                  <span className="absolute left-1/2 top-1/2 w-[5px] h-[8px] border-[var(--off-white)] border-r-2 border-b-2 -translate-x-1/2 -translate-y-[60%] rotate-45"></span>
                )}
              </span>
              Efecto parallax
            </label>
          </div>

          {/* Vimeo Mode Option */}
          <div className="config-option mb-0">
            <label className="checkbox-container flex items-center cursor-pointer text-sm text-[var(--primary-color)] select-none">
              <input
                type="checkbox"
                checked={config.vimeoMode}
                onChange={() => handleCheckboxChange('vimeoMode')}
                className="hidden"
              />
              <span className={`checkmark w-5 h-5 border-2 rounded mr-3 relative transition-all flex-shrink-0 ${
                config.vimeoMode
                  ? 'bg-[var(--primary-color)] border-[var(--primary-color)]'
                  : 'border-[var(--secondary-color)]'
              }`}>
                {config.vimeoMode && (
                  <span className="absolute left-1/2 top-1/2 w-[5px] h-[8px] border-[var(--off-white)] border-r-2 border-b-2 -translate-x-1/2 -translate-y-[60%] rotate-45"></span>
                )}
              </span>
              Usar enlace de Vimeo
            </label>

            {/* Vimeo URL Input */}
            <div
              className={`vimeo-url mt-2 pt-2 border-t border-black/10 transition-all duration-400 ${
                config.vimeoMode
                  ? 'max-h-[200px] opacity-100 translate-y-0'
                  : 'max-h-0 opacity-0 -translate-y-3 overflow-hidden'
              }`}
            >
              <label htmlFor="vimeoLink" className="block mb-2 text-xs text-[var(--secondary-color)]">
                URL de Vimeo:
              </label>
              <input
                type="url"
                id="vimeoLink"
                placeholder="https://vimeo.com/..."
                value={config.vimeoUrl}
                onChange={(e) => handleVimeoUrlChange(e.target.value)}
                className="w-full px-2 py-2 border border-[var(--secondary-color)] rounded-md text-xs bg-white/50 transition-all focus:outline-none focus:border-[var(--primary-color)] focus:bg-white/80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
