import { css } from 'lit';

export const componentStyles = css`
  span.alert-text {
    display: block;
    text-align: center;
  }

  azl-alert,
  .zoom-in {
    animation: zoomIn 300ms ease;
    -webkit-animation: zoomIn 300ms ease;
    font-weight: 300 !important;
    font-size: 0.8rem;
  }

  @keyframes zoomIn {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
      transform: scale(1.05);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
      transform: scale(1.05);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
