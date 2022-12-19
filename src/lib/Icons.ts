import { html } from 'lit';

export const timesIcon = (width: number = 32, height: number = 32) => html` <svg
  version="1.1"
  width="${width}"
  height="${height}"
  viewBox="0 0 36 36"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <title>times-line</title>
  <path
    d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"
  ></path>
  <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
</svg>`;
