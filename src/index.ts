import { AzlAlert } from './lib/AzlAlert.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-alert': AzlAlert;
  }
}

export { AzlAlert };
