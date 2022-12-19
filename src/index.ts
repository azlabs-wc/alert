import { AzlAlert } from './lib/AzlAlert.js';
import { AzlZoomInAlert } from './lib/AzlZoomInAlert.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-alert': AzlAlert;
  }

  interface HTMLElementTagNameMap {
    'zoom-in-out-alert': AzlZoomInAlert;
  }
}

export { AzlAlert };
