import React from 'react';
import Alive from './Alive.js';
import Background from './Background.js';
import Ended from './Ended.js';
import SpecialAds from './SpecialAds.js';
import { Title } from './Title.js';
import Video from './Video.js';
import './style.scss';

const text20 = 'Surfe: Rio Pro 2023';
const text52 = 'WSL define surfistas que estarão no Circuito Mundial';
const text90 =
  'Com 11 brasileiros, WSL define surfistas que estarão no Circuito Mundial de Surfe em 2023';

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
              <Ended />
            </div>
            <Title text={text20} />
          </div>
        </div>
        {/* <Video /> */}
      </div>
    </main>
  );
}
