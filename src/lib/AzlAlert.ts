import '@azlabs-wc/layouts/azl-hbox.js';
import { LitElement, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyle } from './AzlAlert.style.js';
import { timesIcon } from './Icons.js';

export class AzlAlert extends LitElement {
  static override get styles() {
    return [componentStyle];
  }

  // #region Component reactive properties
  /**
   * @attr
   */
  @property({ type: String })
  status: 'warning' | 'success' | 'danger' | 'default' = 'default';

  /**
   * @attr
   */
  @property({ type: Boolean })
  closable: boolean = false;

  /**
   * @attr
   */
  @property({ type: Boolean })
  light: boolean = false;
  // #endregion Component reactive properties

  private getClassMap() {
    const _classMap: Record<string, string | boolean | number> = {
      light: this.light || false,
    };
    if (this.status) {
      _classMap[this.status] = true;
    }
    return _classMap;
  }

  override render() {
    return html`
      <azl-box margin=".3rem 0rem">
        <div class="alert${classMap(this.getClassMap())}">
          <div class="alert-items">
            <div class="alert-item">
              <slot name="icon-text"></slot>
              <slot></slot>
              ${this.closable ? timesIcon(24, 24) : nothing}
            </div>
          </div>
        </div>
      </azl-box>
    `;
  }
}
