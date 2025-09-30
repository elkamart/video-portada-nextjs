'use client';

import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import VideoHero from '@/components/VideoHero';
import ConfigMenu, { ConfigState } from '@/components/ConfigMenu';
import ContentSections from '@/components/ContentSections';

export default function Home() {
  const [config, setConfig] = useState<ConfigState>({
    showTitle: false,
    halfScreen: false,
    parallaxEffect: true,
    vimeoMode: true,
    vimeoUrl: 'https://vimeo.com/1118840788'
  });

  const handleConfigChange = useCallback((newConfig: ConfigState) => {
    setConfig(newConfig);
  }, []);

  return (
    <>
      <Header />
      <VideoHero
        showTitle={config.showTitle}
        halfScreen={config.halfScreen}
        parallaxEffect={config.parallaxEffect}
        vimeoMode={config.vimeoMode}
        vimeoUrl={config.vimeoUrl}
      />
      <ContentSections />
      <ConfigMenu onConfigChange={handleConfigChange} />
    </>
  );
}