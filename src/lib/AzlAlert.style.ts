import { css } from 'lit';

export const componentStyle = css`
  .alert {
    border-radius: var(--alert-border-radius, 0.156rem);
    border-width: var(--alert-border-width, 0.05rem);
    border-style: solid;
  }
  .alert-items {
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    padding: var(--alert-padding, 0.5rem 1rem);
  }
  .alert-items > .alert-item {
    flex: 1 1 auto;
    display: flex;
    flex-wrap: nowrap;
    min-height: 0.9rem;
    margin-bottom: 0;
  }
  .alert-item ::slotted(span),
  .alert-item ::slotted(p) {
    display: inline-block;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 98%;
    max-width: 98%;
    margin-right: 0.6rem;
    text-align: left;
  }

  .alert.warning.light {
    background: var(--alert-warning-light-bg-color, #fff4c7);
    border-color: var(--alert-warning-light-border-color, #ad7600);
  }
  .alert.default.light {
    background: var(--alert-default-light-bg-color, #e3f5fc);
    border-color: var(--alert-default-light-border-color, #00567a);
  }
  .alert.danger.light {
    background: var(--alert-danger-light-bg-color, #feddd7);
    border-color: var(--alert-danger-light-border-color, #991700);
  }

  .alert.success.light {
    background: var(--alert-success-light-bg-color, #dff0d0);
    border-color: var(--alert-success-light-border-color, #306b00);
  }
  .alert.light ::slotted(*) {
    color: var(--alert-light-text-color, #666666) !important;
  }

  .alert.success.light svg > path,
  .alert.danger.light svg > path,
  .alert.default.light svg > path,
  .alert.warning.light svg > path {
    color: var(--alert-light-font-color, #666666);
    fill: var(--alert-light-font-color, #666666);
  }

  .alert.success svg > path,
  .alert.danger svg > path,
  .alert.default svg > path,
  .alert.warning svg > path {
    color: var(--alert-font-color, #fff);
    fill: var(--alert-font-color, #fff);
  }

  .alert.warning {
    background: var(--alert-warning-bg-color, hsl(26deg, 100%, 38%));
    border-color: var(--alert-warning-border-color, hsl(26deg, 100%, 38%));
  }

  .alert.default {
    background: var(--alert-default-bg-color, hsl(198deg, 100%, 32%));
    border-color: var(--alert-default-border-color, hsl(198deg, 100%, 32%));
  }

  .alert.danger {
    background: var(--alert-danger-bg-color, hsl(9deg, 100%, 38%));
    border-color: var(--alert-danger-border-color, hsl(9deg, 100%, 38%));
  }

  .alert.success {
    background: var(--alert-success-bg-color, #00b35d);
    border-color: var(--alert-success-border-color, #00b35d);
  }
  .alert ::slotted(*) {
    color: var(--alert-text-font-color, #fff) !important;
  }

  .alert svg {
    cursor: pointer;
  }
`;
