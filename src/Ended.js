import React from 'react';
import './style.scss';

export default function Ended() {
  return (
    <div class="cb-label-wrapper">
      <div class="cb-widget__cobertura">
        <div
          id="widget-cobertura-badge"
          class="cb-widget__cobertura--badge cb-widget__cobertura--state-live"
          data-state-ended=""
        >
          <span class="label__text blink">Encerrado</span>
        </div>
      </div>
    </div>
  );
}
