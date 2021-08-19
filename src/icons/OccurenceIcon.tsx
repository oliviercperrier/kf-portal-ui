import { BaseSvg, IconProps } from 'icons';

export default ({ fill = '#a9adc0', width = '24px', height = '24px', style = {} }: IconProps) =>
  BaseSvg({
    // eslint-disable-next-line max-len
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="${fill}" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.3254 2.80978C8.38664 3.66417 8.2374 5.65988 9.07667 6.5816C10.9141 8.59816 14.5167 4.78626 12.2348 2.502C11.58 1.84478 10.5209 1.72295 9.3254 2.80978ZM8.68641 18.0305C8.81552 17.2896 8.94624 16.5395 8.95144 15.8597C8.9723 13.3542 7.82332 10.876 6.06295 9.14957C3.85646 6.98394 2.38493 4.40794 7.22316 6.94065C10.5008 8.6572 10.9505 8.39671 13.59 6.8678C13.8516 6.71624 14.1348 6.55221 14.4444 6.3764C17.7774 4.48328 17.3425 5.72078 15.8196 7.8784C14.6963 9.47017 13.9774 10.8519 14.6514 12.3155C15.3482 13.8269 16.8357 14.0756 17.8842 14.2509C17.9055 14.2545 17.9266 14.258 17.9475 14.2615C20 14.6058 21.9192 16.2444 16.285 16.7589C15.8255 16.8008 15.4317 16.8196 15.0873 16.8359C13.6135 16.906 13.0452 16.933 12.1047 18.5495C11.9389 18.8341 11.7731 19.1357 11.6072 19.4373C10.7567 20.9836 9.90495 22.5323 9.05094 21.8228C8.15522 21.0786 8.41732 19.5746 8.68641 18.0305Z" fill="white"/></svg>`,
    width,
    height,
    style: { ...style },
  });
