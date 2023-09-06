import React from 'react';
import Alive from './Alive.js';
import Background from './Background.js';
import SpecialAds from './SpecialAds.js';
import Video from './Video.js';
import './style.scss';

export default function App() {
  return (
    <main
      class="theme main-content"
      itemscope=""
      itemtype="http://schema.org/LiveBlogPosting"
    >
      <div class="cb-flex-wrapper">
        {/* <Background /> */}
        <div class="content-head medium-centered medium-24 large-20 xlarge-12">
          <div data-js="cb-page-root"></div>
          <div class="content-ad">
            <div class="propaganda-retangular">propaganda</div>
          </div>
          <div class="sharebar">
            <img
              class="sharebar-icon"
              src="share-icon.svg"
              alt="ícone de compartilhamento"
            />
          </div>
          <div class="cover-bottom">
            <div class="container_tag-area">
              <Alive />
              <SpecialAds />
              <div class="live-at">Transmitido ao vivo em 12/05/2022 06h27</div>
            </div>
            <h1
              class="content-head__title"
              data-acceptance="titulo"
              data-js="header"
            >
              Cobertura ao vivo com título longo
            </h1>
          </div>
        </div>
        {/* <Video /> */}
      </div>
    </main>
  );
}
