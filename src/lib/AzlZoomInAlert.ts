import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import '../azl-alert.js';
import { componentStyles } from './AzlZoomInAlert.style.js';

export class AzlZoomInAlert extends LitElement {
  /**
   * @attr text
   */
  @property({ type: String, attribute: 'text' })
  alertText!: string;

  /**
   * @attr status
   */
  @property({ type: String, attribute: 'status' })
  alertStatus: 'warning' | 'success' | 'danger' | 'default' = 'default';

  static override get styles() {
    return [componentStyles];
  }

  private static createSlottedElement(text?: string) {
    return text
      ? html`<span class="alert-text"> ${text} </span>`
      : html`<slot></slot>`;
  }

  override render() {
    return html`<azl-alert class="zoom-in" status=${this.alertStatus}>
      ${AzlZoomInAlert.createSlottedElement(this.alertText)}
    </azl-alert>`;
  }
}
