import React from 'react';
import './style.scss';

export default function Alive() {
  return (
    <div class="cb-label-wrapper">
      <div class="cb-widget__cobertura">
        <div
          id="widget-cobertura-badge"
          class="cb-widget__cobertura--badge cb-widget__cobertura--state-live"
          data-state-ended=""
        >
          <img
            class="label__icon blink"
            src="alive-icon.svg"
            alt="ícone ao vivo"
          />
          <span class="label__text blink">Ao vivo</span>
        </div>
      </div>
    </div>
  );
}
