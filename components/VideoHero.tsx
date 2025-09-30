'use client';

import { useState, useEffect, useRef } from 'react';

interface VideoHeroProps {
  showTitle: boolean;
  halfScreen: boolean;
  parallaxEffect: boolean;
  vimeoMode: boolean;
  vimeoUrl: string;
}

export default function VideoHero({
  showTitle,
  halfScreen,
  parallaxEffect,
  vimeoMode,
  vimeoUrl
}: VideoHeroProps) {
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const [vimeoIframeLoaded, setVimeoIframeLoaded] = useState(false);
  const [titleReady, setTitleReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [vimeoRatio, setVimeoRatio] = useState(16 / 9);

  // Scroll effects
  useEffect(() => {
    let ticking = false;
    let currentParallaxOffset = 0;
    let targetParallaxOffset = 0;
    let parallaxAnimationId: number | null = null;

    const animateParallax = () => {
      if (!parallaxEffect) {
        if (parallaxAnimationId) {
          cancelAnimationFrame(parallaxAnimationId);
          parallaxAnimationId = null;
        }
        return;
      }

      const lerpFactor = 0.04;
      const difference = targetParallaxOffset - currentParallaxOffset;

      if (Math.abs(difference) > 0.05) {
        currentParallaxOffset += difference * lerpFactor;

        if (iframeRef.current && vimeoMode) {
          iframeRef.current.style.transform = `translate(-50%, -50%) translate3d(0, ${currentParallaxOffset}px, 0)`;
        } else if (videoRef.current) {
          videoRef.current.style.transform = `translate3d(0, ${currentParallaxOffset}px, 0)`;
        }

        parallaxAnimationId = requestAnimationFrame(animateParallax);
      } else {
        parallaxAnimationId = null;
      }
    };

    const updateScrollEffects = () => {
      const scrolled = window.pageYOffset;
      const isMobileView = window.innerWidth <= 768;

      // Hide scroll indicator
      setScrollIndicatorVisible(scrolled <= 100);

      // Parallax effect
      if (parallaxEffect && containerRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const delta = Math.max(0, scrolled - containerTop);

        if (isMobileView) {
          targetParallaxOffset = delta * 0.25;
          if (!parallaxAnimationId) {
            parallaxAnimationId = requestAnimationFrame(animateParallax);
          }
        } else {
          const offset = delta * 0.6;
          if (iframeRef.current && vimeoMode) {
            iframeRef.current.style.transform = `translate(-50%, -50%) translate3d(0, ${offset}px, 0)`;
          } else if (videoRef.current) {
            videoRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
          if (parallaxAnimationId) {
            cancelAnimationFrame(parallaxAnimationId);
            parallaxAnimationId = null;
          }
        }
      } else {
        targetParallaxOffset = 0;
        currentParallaxOffset = 0;
        if (parallaxAnimationId) {
          cancelAnimationFrame(parallaxAnimationId);
          parallaxAnimationId = null;
        }
        if (videoRef.current) videoRef.current.style.transform = '';
        if (iframeRef.current) iframeRef.current.style.transform = 'translate(-50%, -50%)';
      }

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
    return () => {
      window.removeEventListener('scroll', requestTick);
      if (parallaxAnimationId) cancelAnimationFrame(parallaxAnimationId);
    };
  }, [parallaxEffect, vimeoMode]);

  // Load title animation
  useEffect(() => {
    if (showTitle) {
      if (vimeoMode && vimeoIframeLoaded) {
        setTimeout(() => setTitleReady(true), 200);
      } else if (!vimeoMode) {
        setTimeout(() => setTitleReady(true), 200);
      }
    } else {
      setTitleReady(false);
    }
  }, [showTitle, vimeoMode, vimeoIframeLoaded]);

  // Vimeo iframe resize
  useEffect(() => {
    const resizeVimeoToCover = () => {
      if (!iframeRef.current || !containerRef.current) return;

      const containerW = containerRef.current.clientWidth || window.innerWidth;
      const containerH = containerRef.current.clientHeight || window.innerHeight;
      const overscan = 1.08;

      const containerRatio = containerW / containerH;
      let targetW, targetH;

      if (vimeoRatio > containerRatio) {
        targetH = containerH;
        targetW = containerH * vimeoRatio;
      } else {
        targetW = containerW;
        targetH = containerW / vimeoRatio;
      }

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const mobileBoost = isMobile ? 1.04 : 1.0;
      const finalW = targetW * overscan * mobileBoost;
      const finalH = targetH * overscan * mobileBoost;

      iframeRef.current.style.width = `${finalW}px`;
      iframeRef.current.style.height = `${finalH}px`;
    };

    if (vimeoMode && iframeRef.current) {
      resizeVimeoToCover();
      window.addEventListener('resize', resizeVimeoToCover);
      return () => window.removeEventListener('resize', resizeVimeoToCover);
    }
  }, [vimeoMode, vimeoRatio]);

  // Fetch Vimeo video dimensions
  useEffect(() => {
    if (vimeoMode && vimeoUrl) {
      fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          if (data && data.width && data.height) {
            setVimeoRatio(data.width / data.height);
          }
        })
        .catch(() => {});
    }
  }, [vimeoMode, vimeoUrl]);

  const handleScrollClick = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleIframeLoad = () => {
    setTimeout(() => setVimeoIframeLoaded(true), 500);
  };

  const getVimeoEmbedUrl = () => {
    if (!vimeoUrl) return '';
    return vimeoUrl
      .replace('vimeo.com/', 'player.vimeo.com/video/')
      .split('?')[0] + '?background=1&autoplay=1&muted=1&loop=1&byline=0&title=0&portrait=0&playsinline=1&dnt=1&quality=auto&speed=1';
  };

  return (
    <div
      ref={containerRef}
      className={`video-container relative w-screen overflow-hidden z-[1] mt-0 bg-white ${
        halfScreen ? 'h-[50vh]' : 'h-screen lg:h-screen h-[100dvh]'
      } ${parallaxEffect ? 'parallax' : ''}`}
      style={halfScreen ? {} : { height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Video MP4 */}
      {!vimeoMode && (
        <video
          ref={videoRef}
          id="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          poster="/fragrance transition_3.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/fragrance transition_3.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      )}

      {/* Vimeo iframe */}
      {vimeoMode && vimeoUrl && (
        <iframe
          ref={iframeRef}
          className={`vimeo-iframe absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-none -z-10 pointer-events-none bg-white transition-opacity duration-1000 ${
            vimeoIframeLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={getVimeoEmbedUrl()}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer"
          onLoad={handleIframeLoad}
        />
      )}

      {/* Scroll Indicator */}
      {!halfScreen && (
        <div
          className={`scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 transition-opacity duration-500 ${
            scrollIndicatorVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleScrollClick}
        >
          <div className="scroll-arrow w-8 h-8 border-r-[3px] border-b-[3px] border-white rotate-45 transition-all animate-bounce drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]" />
        </div>
      )}

      {/* Video Title */}
      <div
        className={`video-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-[5] transition-all duration-500 ${
          showTitle ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-[rgb(11,30,103,0.25)] -z-10 pointer-events-none transition-opacity duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`} />
        <h1 className={`text-5xl lg:text-6xl m-0 font-normal drop-shadow-[1px_1px_2px_#2D5691] transition-all duration-[1.5s] ${
          titleReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Bienvenido a Centhylon
        </h1>
      </div>
    </div>
  );
}
