import React from 'react';
import './style.scss';

export default function Video() {
  return (
    <div class="cb-wrapper-video cb-hidden" data-js="cb-wrapper-video">
      <div class="medium-centered medium-20 large-20 xlarge-12">
        <div class="cb-video-topo-background" data-js="cb-player-root">
          <div
            data-player=""
            tabindex="9999"
            class="clappr-player"
            id="wp3-player-1"
            style={{ height: '360px', width: '640px' }}
          >
            <div class="dfp-ad-overlay dfp-ad-overlay--poster-mode">
              <div class="container" data-container="">
                <div class="poster">
                  <div
                    class="poster__background"
                    style={{
                      backgroundImage:
                        'url("https://s04.video.glbimg.com/x720/7580247.jpg")',
                    }}
                  ></div>
                  <div class="poster__background-overlay"></div>
                  <button class="poster__play-wrapper" tabindex="0">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                    <span class="visually-hidden">Reproduzir vídeo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
