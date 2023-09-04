import React from 'react';
import Alive from './Alive.js';
import Background from './Background.js';
import './style.scss';

export default function App() {
  return (
    <div class="container">
      <Background />
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
        <Alive />
        <div class="live-at">Transmitido ao vivo em 12/05/2022 06h27</div>
        <h1
          class="content-head__title"
          data-acceptance="titulo"
          data-js="header"
        >
          Cobertura ao vivo do lançamento da nova coleção de primavera-verão da
          grife "Will be Mine"
        </h1>
      </div>
    </div>
  );
}
