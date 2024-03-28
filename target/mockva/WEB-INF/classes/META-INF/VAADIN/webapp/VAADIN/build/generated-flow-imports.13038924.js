import{o as Yl,i as M,a as Ul,A as ee,t as Wl,T as jl,e as ql,D as Pn,b as Gl,r as Ql,x as Kl,_ as Xl}from"./indexhtml.8be683d2.js";/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zl extends HTMLElement{static get version(){return"23.3.5"}}customElements.define("vaadin-lumo-styles",Zl);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mr=r=>class extends r{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(t){this._set_theme(t)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jt=[];function A(r,e,t={}){r&&ah(r)&&console.warn(`The custom element definition for "${r}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=eh(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(r,e,t):jt.push({themeFor:r,styles:e,include:t.include,moduleId:t.moduleId})}function Xr(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():jt}function Jl(r,e){return(r||"").split(" ").some(t=>new RegExp(`^${t.split("*").join(".*")}$`).test(e))}function th(r=""){let e=0;return r.startsWith("lumo-")||r.startsWith("material-")?e=1:r.startsWith("vaadin-")&&(e=2),e}function eh(r=[]){return[r].flat(1/0).filter(e=>e instanceof Yl?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Hs(r){const e=[];return r.include&&[].concat(r.include).forEach(t=>{const i=Xr().find(a=>a.moduleId===t);i?e.push(...Hs(i),...i.styles):console.warn(`Included moduleId ${t} not found in style registry`)},r.styles),e}function ih(r,e){const t=document.createElement("style");t.innerHTML=r.map(i=>i.cssText).join(`
`),e.content.appendChild(t)}function rh(r){const e=`${r}-default-theme`,t=Xr().filter(i=>i.moduleId!==e&&Jl(i.themeFor,r)).map(i=>({...i,styles:[...Hs(i),...i.styles],includePriority:th(i.moduleId)})).sort((i,a)=>a.includePriority-i.includePriority);return t.length>0?t:Xr().filter(i=>i.moduleId===e)}function ah(r){return Vs(customElements.get(r))}function Vs(r){return r&&Object.prototype.hasOwnProperty.call(r,"__themes")}const Y=r=>class extends Mr(r){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;!t||Vs(this)||ih(this.getStylesForThis(),t)}static finalizeStyles(t){const i=this.getStylesForThis();return t?[...super.finalizeStyles(t),...i]:i}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),i=(t?t.constructor.__themes:[])||[];this.__themes=[...i,...rh(this.is)];const a=this.__themes.flatMap(n=>n.styles);return a.filter((n,o)=>o===a.lastIndexOf(n))}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nh=M`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,Ys=document.createElement("template");Ys.innerHTML=`<style>${nh.toString().replace(":host","html")}</style>`;document.head.appendChild(Ys.content);const Sn=M`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;A("",Sn,{moduleId:"lumo-color"});const oh=M`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;A("",[Sn,oh],{moduleId:"lumo-color-legacy"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Us=document.createElement("template");Us.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(Us.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sh=M`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,Ws=document.createElement("template");Ws.innerHTML=`<style>${sh.toString().replace(":host","html")}</style>`;document.head.appendChild(Ws.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lh=M`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,js=document.createElement("template");js.innerHTML=`<style>${lh.toString().replace(":host","html")}</style>`;document.head.appendChild(js.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hh=M`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;M`
  html {
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
  }
`;const qs=document.createElement("template");qs.innerHTML=`<style>${hh.toString().replace(":host","html")}$</style>`;document.head.appendChild(qs.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ch=M`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Gs=M`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;A("",Gs,{moduleId:"lumo-typography"});const Qs=document.createElement("template");Qs.innerHTML=`<style>${ch.toString().replace(":host","html")}</style>`;document.head.appendChild(Qs.content);A("vaadin-checkbox",M`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--_checkbox-size) + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(r,e){return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let dh=/(url\()([^)]*)(\))/g,uh=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Be,st;function we(r,e){if(r&&uh.test(r)||r==="//")return r;if(Be===void 0){Be=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",Be=t.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),Be)try{return new URL(r,e).href}catch{return r}return st||(st=document.implementation.createHTMLDocument("temp"),st.base=st.createElement("base"),st.head.appendChild(st.base),st.anchor=st.createElement("a"),st.body.appendChild(st.anchor)),st.base.href=e,st.anchor.href=r,st.anchor.href||r}function In(r,e){return r.replace(dh,function(t,i,a,n){return i+"'"+we(a.replace(/["']/g,""),e)+"'"+n})}function kn(r){return r.substring(0,r.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ks=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const ph=Ks&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const r=new CSSStyleSheet;r.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[r],e.shadowRoot.adoptedStyleSheets[0]===r}catch{return!1}})();let vh=window.Polymer&&window.Polymer.rootPath||kn(document.baseURI||window.location.href),Ii=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,r4=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Ee=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,fh=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Xs=window.Polymer&&window.Polymer.legacyOptimizations||!1,Zs=window.Polymer&&window.Polymer.legacyWarnings||!1,_h=window.Polymer&&window.Polymer.syncInitialRender||!1,Zr=window.Polymer&&window.Polymer.legacyUndefined||!1,mh=window.Polymer&&window.Polymer.orderedComputed||!1,gh=!0;const yh=function(r){gh=r};let f0=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Js=window.Polymer&&window.Polymer.fastDomIf||!1,Jr=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,a4=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,bh=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Mh=0;const U=function(r){let e=r.__mixinApplications;e||(e=new WeakMap,r.__mixinApplications=e);let t=Mh++;function i(a){let n=a.__mixinSet;if(n&&n[t])return a;let o=e,s=o.get(a);if(!s){s=r(a),o.set(a,s);let l=Object.create(s.__mixinSet||n||null);l[t]=!0,s.__mixinSet=l}return s}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Dn={},t1={};function _0(r,e){Dn[r]=t1[r.toLowerCase()]=e}function m0(r){return Dn[r]||t1[r.toLowerCase()]}function zh(r){r.querySelector("style")&&console.warn("dom-module %s has style outside template",r.id)}class ie extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=m0(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,a){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=we(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=kn(t)}return this.__assetpath}register(e){if(e=e||this.id,e){if(Ee&&m0(e)!==void 0)throw _0(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,_0(e,this),zh(this)}}}ie.prototype.modules=Dn;customElements.define("dom-module",ie);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wh="link[rel=import][type~=css]",Ah="include",g0="shady-unscoped";function Rn(r){return ie.import(r)}function y0(r){let e=r.body?r.body:r;const t=In(e.textContent,r.baseURI),i=document.createElement("style");return i.textContent=t,i}function Ch(r){const e=r.trim().split(/\s+/),t=[];for(let i=0;i<e.length;i++)t.push(...xh(e[i]));return t}function xh(r){const e=Rn(r);if(!e)return console.warn("Could not find style data in module named",r),[];if(e._styles===void 0){const t=[];t.push(...$n(e));const i=e.querySelector("template");i&&t.push(...zr(i,e.assetpath)),e._styles=t}return e._styles}function zr(r,e){if(!r._styles){const t=[],i=r.content.querySelectorAll("style");for(let a=0;a<i.length;a++){let n=i[a],o=n.getAttribute(Ah);o&&t.push(...Ch(o).filter(function(s,l,h){return h.indexOf(s)===l})),e&&(n.textContent=In(n.textContent,e)),t.push(n)}r._styles=t}return r._styles}function Eh(r){let e=Rn(r);return e?$n(e):[]}function $n(r){const e=[],t=r.querySelectorAll(wh);for(let i=0;i<t.length;i++){let a=t[i];if(a.import){const n=a.import,o=a.hasAttribute(g0);if(o&&!n._unscopedStyle){const s=y0(n);s.setAttribute(g0,""),n._unscopedStyle=s}else n._style||(n._style=y0(n));e.push(o?n._unscopedStyle:n._style)}}return e}function n4(r){let e=r.trim().split(/\s+/),t="";for(let i=0;i<e.length;i++)t+=Th(e[i]);return t}function Th(r){let e=Rn(r);if(e&&e._cssText===void 0){let t=Ph(e),i=e.querySelector("template");i&&(t+=Oh(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",r),e&&e._cssText||""}function Oh(r,e){let t="";const i=zr(r,e);for(let a=0;a<i.length;a++){let n=i[a];n.parentNode&&n.parentNode.removeChild(n),t+=n.textContent}return t}function Ph(r){let e="",t=$n(r);for(let i=0;i<t.length;i++)e+=t[i].textContent;return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const T=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?r=>ShadyDOM.patch(r):r=>r;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ta(r){return r.indexOf(".")>=0}function Et(r){let e=r.indexOf(".");return e===-1?r:r.slice(0,e)}function e1(r,e){return r.indexOf(e+".")===0}function Te(r,e){return e.indexOf(r+".")===0}function Oe(r,e,t){return e+t.slice(r.length)}function Sh(r,e){return r===e||e1(r,e)||Te(r,e)}function Me(r){if(Array.isArray(r)){let e=[];for(let t=0;t<r.length;t++){let i=r[t].toString().split(".");for(let a=0;a<i.length;a++)e.push(i[a])}return e.join(".")}else return r}function i1(r){return Array.isArray(r)?Me(r).split("."):r.toString().split(".")}function rt(r,e,t){let i=r,a=i1(e);for(let n=0;n<a.length;n++){if(!i)return;let o=a[n];i=i[o]}return t&&(t.path=a.join(".")),i}function b0(r,e,t){let i=r,a=i1(e),n=a[a.length-1];if(a.length>1){for(let o=0;o<a.length-1;o++){let s=a[o];if(i=i[s],!i)return}i[n]=t}else i[e]=t;return a.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ki={},Ih=/-[a-z]/g,kh=/([A-Z])/g;function r1(r){return ki[r]||(ki[r]=r.indexOf("-")<0?r:r.replace(Ih,e=>e[1].toUpperCase()))}function wr(r){return ki[r]||(ki[r]=r.replace(kh,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Dh=0,a1=0,Kt=[],Rh=0,ea=!1,n1=document.createTextNode("");new window.MutationObserver($h).observe(n1,{characterData:!0});function $h(){ea=!1;const r=Kt.length;for(let e=0;e<r;e++){let t=Kt[e];if(t)try{t()}catch(i){setTimeout(()=>{throw i})}}Kt.splice(0,r),a1+=r}const ia={after(r){return{run(e){return window.setTimeout(e,r)},cancel(e){window.clearTimeout(e)}}},run(r,e){return window.setTimeout(r,e)},cancel(r){window.clearTimeout(r)}},Lh={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},Fh={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},Ar={run(r){return ea||(ea=!0,n1.textContent=Rh++),Kt.push(r),Dh++},cancel(r){const e=r-a1;if(e>=0){if(!Kt[e])throw new Error("invalid async handle: "+r);Kt[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nh=Ar,o1=U(r=>{class e extends r{static createProperties(i){const a=this.prototype;for(let n in i)n in a||a._createPropertyAccessor(n)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,a){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,a))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let a=this.__dataAttributes[i];return a||(a=this.constructor.attributeNameForProperty(i),this.__dataAttributes[a]=i),a}_definePropertyAccessor(i,a){Object.defineProperty(this,i,{get(){return this.__data[i]},set:a?function(){}:function(n){this._setPendingProperty(i,n,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,a){this._setPendingProperty(i,a)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,a,n){let o=this.__data[i],s=this._shouldPropertyChange(i,a,o);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=o),this.__data[i]=a,this.__dataPending[i]=a),s}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Nh.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,a=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(i,a,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,a,n)),this.__dataCounter--}_shouldPropertiesChange(i,a,n){return Boolean(a)}_propertiesChanged(i,a,n){}_shouldPropertyChange(i,a,n){return n!==a&&(n===n||a===a)}attributeChangedCallback(i,a,n,o){a!==n&&this._attributeToProperty(i,n),super.attributeChangedCallback&&super.attributeChangedCallback(i,a,n,o)}_attributeToProperty(i,a,n){if(!this.__serializing){const o=this.__dataAttributes,s=o&&o[i]||i;this[s]=this._deserializeValue(a,n||this.constructor.typeForProperty(s))}}_propertyToAttribute(i,a,n){this.__serializing=!0,n=arguments.length<3?this[i]:n,this._valueToNodeAttribute(this,n,a||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,a,n){const o=this._serializeValue(a);(n==="class"||n==="name"||n==="slot")&&(i=T(i)),o===void 0?i.removeAttribute(n):i.setAttribute(n,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i!=null?i.toString():void 0}}_deserializeValue(i,a){switch(a){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const s1={};let He=HTMLElement.prototype;for(;He;){let r=Object.getOwnPropertyNames(He);for(let e=0;e<r.length;e++)s1[r[e]]=!0;He=Object.getPrototypeOf(He)}const Bh=(()=>window.trustedTypes?r=>trustedTypes.isHTML(r)||trustedTypes.isScript(r)||trustedTypes.isScriptURL(r):()=>!1)();function Hh(r,e){if(!s1[e]){let t=r[e];t!==void 0&&(r.__data?r._setPendingProperty(e,t):(r.__dataProto?r.hasOwnProperty(JSCompiler_renameProperty("__dataProto",r))||(r.__dataProto=Object.create(r.__dataProto)):r.__dataProto={},r.__dataProto[e]=t))}}const Vh=U(r=>{const e=o1(r);class t extends e{static createPropertiesForAttributes(){let a=this.observedAttributes;for(let n=0;n<a.length;n++)this.prototype._createPropertyAccessor(r1(a[n]))}static attributeNameForProperty(a){return wr(a)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(a){for(let n in a)this._setProperty(n,a[n])}_ensureAttribute(a,n){const o=this;o.hasAttribute(a)||this._valueToNodeAttribute(o,n,a)}_serializeValue(a){switch(typeof a){case"object":if(a instanceof Date)return a.toString();if(a){if(Bh(a))return a;try{return JSON.stringify(a)}catch{return""}}default:return super._serializeValue(a)}}_deserializeValue(a,n){let o;switch(n){case Object:try{o=JSON.parse(a)}catch{o=a}break;case Array:try{o=JSON.parse(a)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${a}`)}break;case Date:o=isNaN(a)?String(a):Number(a),o=new Date(o);break;default:o=super._deserializeValue(a,n);break}return o}_definePropertyAccessor(a,n){Hh(this,a),super._definePropertyAccessor(a,n)}_hasAccessor(a){return this.__dataHasAccessor&&this.__dataHasAccessor[a]}_isPropertyPending(a){return Boolean(this.__dataPending&&a in this.__dataPending)}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yh={"dom-if":!0,"dom-repeat":!0};let M0=!1,z0=!1;function Uh(){if(!M0){M0=!0;const r=document.createElement("textarea");r.placeholder="a",z0=r.placeholder===r.textContent}return z0}function Wh(r){Uh()&&r.localName==="textarea"&&r.placeholder&&r.placeholder===r.textContent&&(r.textContent=null)}const jh=(()=>{const r=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,t,i)=>{const a=t.getAttribute(i);if(r&&i.startsWith("on-")){e.setAttribute(i,r.createScript(a,i));return}e.setAttribute(i,a)}})();function qh(r){let e=r.getAttribute("is");if(e&&Yh[e]){let t=r;for(t.removeAttribute("is"),r=t.ownerDocument.createElement(e),t.parentNode.replaceChild(r,t),r.appendChild(t);t.attributes.length;){const{name:i}=t.attributes[0];jh(r,t,i),t.removeAttribute(i)}}return r}function l1(r,e){let t=e.parentInfo&&l1(r,e.parentInfo);if(t){for(let i=t.firstChild,a=0;i;i=i.nextSibling)if(e.parentIndex===a++)return i}else return r}function Gh(r,e,t,i){i.id&&(e[i.id]=t)}function Qh(r,e,t){if(t.events&&t.events.length)for(let i=0,a=t.events,n;i<a.length&&(n=a[i]);i++)r._addMethodEventListenerToNode(e,n.name,n.value,r)}function Kh(r,e,t,i){t.templateInfo&&(e._templateInfo=t.templateInfo,e._parentTemplateInfo=i)}function Xh(r,e,t){return r=r._methodHost||r,function(a){r[t]?r[t](a,a.detail):console.warn("listener method `"+t+"` not defined")}}const Zh=U(r=>{class e extends r{static _parseTemplate(i,a){if(!i._templateInfo){let n=i._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(a),n.stripWhiteSpace=a&&a.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,n,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,a,n){return this._parseTemplateNode(i.content,a,n)}static _parseTemplateNode(i,a,n){let o=!1,s=i;return s.localName=="template"&&!s.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(s,a,n)||o:s.localName==="slot"&&(a.hasInsertionPoint=!0),Wh(s),s.firstChild&&this._parseTemplateChildNodes(s,a,n),s.hasAttributes&&s.hasAttributes()&&(o=this._parseTemplateNodeAttributes(s,a,n)||o),o||n.noted}static _parseTemplateChildNodes(i,a,n){if(!(i.localName==="script"||i.localName==="style"))for(let o=i.firstChild,s=0,l;o;o=l){if(o.localName=="template"&&(o=qh(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)o.textContent+=c.textContent,l=c.nextSibling,i.removeChild(c),c=l;if(a.stripWhiteSpace&&!o.textContent.trim()){i.removeChild(o);continue}}let h={parentIndex:s,parentInfo:n};this._parseTemplateNode(o,a,h)&&(h.infoIndex=a.nodeInfoList.push(h)-1),o.parentNode&&s++}}static _parseTemplateNestedTemplate(i,a,n){let o=i,s=this._parseTemplate(o,a);return(s.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),n.templateInfo=s,!0}static _parseTemplateNodeAttributes(i,a,n){let o=!1,s=Array.from(i.attributes);for(let l=s.length-1,h;h=s[l];l--)o=this._parseTemplateNodeAttribute(i,a,n,h.name,h.value)||o;return o}static _parseTemplateNodeAttribute(i,a,n,o,s){return o.slice(0,3)==="on-"?(i.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:s}),!0):o==="id"?(n.id=s,!0):!1}static _contentForTemplate(i){let a=i._templateInfo;return a&&a.content||i.content}_stampTemplate(i,a){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),a=a||this.constructor._parseTemplate(i);let n=a.nodeInfoList,o=a.content||i.content,s=document.importNode(o,!0);s.__noInsertionPoint=!a.hasInsertionPoint;let l=s.nodeList=new Array(n.length);s.$={};for(let h=0,c=n.length,d;h<c&&(d=n[h]);h++){let _=l[h]=l1(s,d);Gh(this,s.$,_,d),Kh(this,_,d,a),Qh(this,_,d)}return s=s,s}_addMethodEventListenerToNode(i,a,n,o){o=o||i;let s=Xh(o,a,n);return this._addEventListenerToNode(i,a,s),s}_addEventListenerToNode(i,a,n){i.addEventListener(a,n)}_removeEventListenerFromNode(i,a,n){i.removeEventListener(a,n)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Pe=0;const Se=[],S={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},h1="__computeInfo",Jh=/[A-Z]/;function $r(r,e,t){let i=r[e];if(!i)i=r[e]={};else if(!r.hasOwnProperty(e)&&(i=r[e]=Object.create(r[e]),t))for(let a in i){let n=i[a],o=i[a]=Array(n.length);for(let s=0;s<n.length;s++)o[s]=n[s]}return i}function ze(r,e,t,i,a,n){if(e){let o=!1;const s=Pe++;for(let l in t){let h=a?Et(l):l,c=e[h];if(c)for(let d=0,_=c.length,m;d<_&&(m=c[d]);d++)(!m.info||m.info.lastRun!==s)&&(!a||Ln(l,m.trigger))&&(m.info&&(m.info.lastRun=s),m.fn(r,l,t,i,m.info,a,n),o=!0)}return o}return!1}function tc(r,e,t,i,a,n,o,s){let l=!1,h=o?Et(i):i,c=e[h];if(c)for(let d=0,_=c.length,m;d<_&&(m=c[d]);d++)(!m.info||m.info.lastRun!==t)&&(!o||Ln(i,m.trigger))&&(m.info&&(m.info.lastRun=t),m.fn(r,i,a,n,m.info,o,s),l=!0);return l}function Ln(r,e){if(e){let t=e.name;return t==r||!!(e.structured&&e1(t,r))||!!(e.wildcard&&Te(t,r))}else return!0}function w0(r,e,t,i,a){let n=typeof a.method=="string"?r[a.method]:a.method,o=a.property;n?n.call(r,r.__data[o],i[o]):a.dynamicFn||console.warn("observer method `"+a.method+"` not defined")}function ec(r,e,t,i,a){let n=r[S.NOTIFY],o,s=Pe++;for(let h in e)e[h]&&(n&&tc(r,n,s,h,t,i,a)||a&&ic(r,h,t))&&(o=!0);let l;o&&(l=r.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ic(r,e,t){let i=Et(e);if(i!==e){let a=wr(i)+"-changed";return c1(r,a,t[e],e),!0}return!1}function c1(r,e,t,i){let a={value:t,queueProperty:!0};i&&(a.path=i),T(r).dispatchEvent(new CustomEvent(e,{detail:a}))}function rc(r,e,t,i,a,n){let s=(n?Et(e):e)!=e?e:null,l=s?rt(r,s):r.__data[e];s&&l===void 0&&(l=t[e]),c1(r,a.eventName,l,s)}function ac(r,e,t,i,a){let n,o=r.detail,s=o&&o.path;s?(i=Oe(t,i,s),n=o&&o.value):n=r.currentTarget[t],n=a?!n:n,(!e[S.READ_ONLY]||!e[S.READ_ONLY][i])&&e._setPendingPropertyOrPath(i,n,!0,Boolean(s))&&(!o||!o.queueProperty)&&e._invalidateProperties()}function nc(r,e,t,i,a){let n=r.__data[e];Ii&&(n=Ii(n,a.attrName,"attribute",r)),r._propertyToAttribute(e,a.attrName,n)}function oc(r,e,t,i){let a=r[S.COMPUTE];if(a)if(mh){Pe++;const n=lc(r),o=[];for(let l in e)A0(l,a,o,n,i);let s;for(;s=o.shift();)d1(r,"",e,t,s)&&A0(s.methodInfo,a,o,n,i);Object.assign(t,r.__dataOld),Object.assign(e,r.__dataPending),r.__dataPending=null}else{let n=e;for(;ze(r,a,n,t,i);)Object.assign(t,r.__dataOld),Object.assign(e,r.__dataPending),n=r.__dataPending,r.__dataPending=null}}const sc=(r,e,t)=>{let i=0,a=e.length-1,n=-1;for(;i<=a;){const o=i+a>>1,s=t.get(e[o].methodInfo)-t.get(r.methodInfo);if(s<0)i=o+1;else if(s>0)a=o-1;else{n=o;break}}n<0&&(n=a+1),e.splice(n,0,r)},A0=(r,e,t,i,a)=>{const n=a?Et(r):r,o=e[n];if(o)for(let s=0;s<o.length;s++){const l=o[s];l.info.lastRun!==Pe&&(!a||Ln(r,l.trigger))&&(l.info.lastRun=Pe,sc(l.info,t,i))}};function lc(r){let e=r.constructor.__orderedComputedDeps;if(!e){e=new Map;const t=r[S.COMPUTE];let{counts:i,ready:a,total:n}=hc(r),o;for(;o=a.shift();){e.set(o,e.size);const s=t[o];s&&s.forEach(l=>{const h=l.info.methodInfo;--n,--i[h]===0&&a.push(h)})}n!==0&&console.warn(`Computed graph for ${r.localName} incomplete; circular?`),r.constructor.__orderedComputedDeps=e}return e}function hc(r){const e=r[h1],t={},i=r[S.COMPUTE],a=[];let n=0;for(let o in e){const s=e[o];n+=t[o]=s.args.filter(l=>!l.literal).length+(s.dynamicFn?1:0)}for(let o in i)e[o]||a.push(o);return{counts:t,ready:a,total:n}}function d1(r,e,t,i,a){let n=ra(r,e,t,i,a);if(n===Se)return!1;let o=a.methodInfo;return r.__dataHasAccessor&&r.__dataHasAccessor[o]?r._setPendingProperty(o,n,!0):(r[o]=n,!1)}function cc(r,e,t){let i=r.__dataLinkedPaths;if(i){let a;for(let n in i){let o=i[n];Te(n,e)?(a=Oe(n,o,e),r._setPendingPropertyOrPath(a,t,!0,!0)):Te(o,e)&&(a=Oe(o,n,e),r._setPendingPropertyOrPath(a,t,!0,!0))}}}function Lr(r,e,t,i,a,n,o){t.bindings=t.bindings||[];let s={kind:i,target:a,parts:n,literal:o,isCompound:n.length!==1};if(t.bindings.push(s),fc(s)){let{event:h,negate:c}=s.parts[0];s.listenerEvent=h||wr(a)+"-changed",s.listenerNegate=c}let l=e.nodeInfoList.length;for(let h=0;h<s.parts.length;h++){let c=s.parts[h];c.compoundIndex=h,dc(r,e,s,c,l)}}function dc(r,e,t,i,a){if(!i.literal)if(t.kind==="attribute"&&t.target[0]==="-")console.warn("Cannot set attribute "+t.target+' because "-" is not a valid attribute starting character');else{let n=i.dependencies,o={index:a,binding:t,part:i,evaluator:r};for(let s=0;s<n.length;s++){let l=n[s];typeof l=="string"&&(l=p1(l),l.wildcard=!0),r._addTemplatePropertyEffect(e,l.rootProperty,{fn:uc,info:o,trigger:l})}}}function uc(r,e,t,i,a,n,o){let s=o[a.index],l=a.binding,h=a.part;if(n&&h.source&&e.length>h.source.length&&l.kind=="property"&&!l.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[l.target]){let c=t[e];e=Oe(h.source,l.target,e),s._setPendingPropertyOrPath(e,c,!1,!0)&&r._enqueueClient(s)}else{let c=a.evaluator._evaluateBinding(r,h,e,t,i,n);c!==Se&&pc(r,s,l,h,c)}}function pc(r,e,t,i,a){if(a=vc(e,a,t,i),Ii&&(a=Ii(a,t.target,t.kind,e)),t.kind=="attribute")r._valueToNodeAttribute(e,a,t.target);else{let n=t.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?(!e[S.READ_ONLY]||!e[S.READ_ONLY][n])&&e._setPendingProperty(n,a)&&r._enqueueClient(e):r._setUnmanagedPropertyToNode(e,n,a)}}function vc(r,e,t,i){if(t.isCompound){let a=r.__dataCompoundStorage[t.target];a[i.compoundIndex]=e,e=a.join("")}return t.kind!=="attribute"&&(t.target==="textContent"||t.target==="value"&&(r.localName==="input"||r.localName==="textarea"))&&(e=e==null?"":e),e}function fc(r){return Boolean(r.target)&&r.kind!="attribute"&&r.kind!="text"&&!r.isCompound&&r.parts[0].mode==="{"}function _c(r,e){let{nodeList:t,nodeInfoList:i}=e;if(i.length)for(let a=0;a<i.length;a++){let n=i[a],o=t[a],s=n.bindings;if(s)for(let l=0;l<s.length;l++){let h=s[l];mc(o,h),gc(o,r,h)}o.__dataHost=r}}function mc(r,e){if(e.isCompound){let t=r.__dataCompoundStorage||(r.__dataCompoundStorage={}),i=e.parts,a=new Array(i.length);for(let o=0;o<i.length;o++)a[o]=i[o].literal;let n=e.target;t[n]=a,e.literal&&e.kind=="property"&&(n==="className"&&(r=T(r)),r[n]=e.literal)}}function gc(r,e,t){if(t.listenerEvent){let i=t.parts[0];r.addEventListener(t.listenerEvent,function(a){ac(a,e,t.target,i.source,i.negate)})}}function C0(r,e,t,i,a,n){n=e.static||n&&(typeof n!="object"||n[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:a,dynamicFn:n};for(let s=0,l;s<e.args.length&&(l=e.args[s]);s++)l.literal||r._addPropertyEffect(l.rootProperty,t,{fn:i,info:o,trigger:l});return n&&r._addPropertyEffect(e.methodName,t,{fn:i,info:o}),o}function ra(r,e,t,i,a){let n=r._methodHost||r,o=n[a.methodName];if(o){let s=r._marshalArgs(a.args,e,t);return s===Se?Se:o.apply(n,s)}else a.dynamicFn||console.warn("method `"+a.methodName+"` not defined")}const yc=[],u1="(?:[a-zA-Z_$][\\w.:$\\-*]*)",bc="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Mc="(?:'(?:[^'\\\\]|\\\\.)*')",zc='(?:"(?:[^"\\\\]|\\\\.)*")',wc="(?:"+Mc+"|"+zc+")",x0="(?:("+u1+"|"+bc+"|"+wc+")\\s*)",Ac="(?:"+x0+"(?:,\\s*"+x0+")*)",Cc="(?:\\(\\s*(?:"+Ac+"?)\\)\\s*)",xc="("+u1+"\\s*"+Cc+"?)",Ec="(\\[\\[|{{)\\s*",Tc="(?:]]|}})",Oc="(?:(!)\\s*)?",Pc=Ec+Oc+xc+Tc,E0=new RegExp(Pc,"g");function T0(r){let e="";for(let t=0;t<r.length;t++){let i=r[t].literal;e+=i||""}return e}function Fr(r){let e=r.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let i={methodName:e[1],static:!0,args:yc};if(e[2].trim()){let a=e[2].replace(/\\,/g,"&comma;").split(",");return Sc(a,i)}else return i}return null}function Sc(r,e){return e.args=r.map(function(t){let i=p1(t);return i.literal||(e.static=!1),i},this),e}function p1(r){let e=r.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),t={name:e,value:"",literal:!1},i=e[0];switch(i==="-"&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':t.value=e.slice(1,-1),t.literal=!0;break;case"#":t.value=Number(e),t.literal=!0;break}return t.literal||(t.rootProperty=Et(e),t.structured=ta(e),t.structured&&(t.wildcard=e.slice(-2)==".*",t.wildcard&&(t.name=e.slice(0,-2)))),t}function O0(r,e,t){let i=rt(r,t);return i===void 0&&(i=e[t]),i}function v1(r,e,t,i){const a={indexSplices:i};Zr&&!r._overrideLegacyUndefined&&(e.splices=a),r.notifyPath(t+".splices",a),r.notifyPath(t+".length",e.length),Zr&&!r._overrideLegacyUndefined&&(a.indexSplices=[])}function he(r,e,t,i,a,n){v1(r,e,t,[{index:i,addedCount:a,removed:n,object:e,type:"splice"}])}function Ic(r){return r[0].toUpperCase()+r.substring(1)}const Fn=U(r=>{const e=Zh(Vh(r));class t extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return S}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ce.length){let a=ce[ce.length-1];a._enqueueClient(this),this.__dataHost=a}}_initializeProtoProperties(a){this.__data=Object.create(a),this.__dataPending=Object.create(a),this.__dataOld={}}_initializeInstanceProperties(a){let n=this[S.READ_ONLY];for(let o in a)(!n||!n[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=a[o])}_addPropertyEffect(a,n,o){this._createPropertyAccessor(a,n==S.READ_ONLY);let s=$r(this,n,!0)[a];s||(s=this[n][a]=[]),s.push(o)}_removePropertyEffect(a,n,o){let s=$r(this,n,!0)[a],l=s.indexOf(o);l>=0&&s.splice(l,1)}_hasPropertyEffect(a,n){let o=this[n];return Boolean(o&&o[a])}_hasReadOnlyEffect(a){return this._hasPropertyEffect(a,S.READ_ONLY)}_hasNotifyEffect(a){return this._hasPropertyEffect(a,S.NOTIFY)}_hasReflectEffect(a){return this._hasPropertyEffect(a,S.REFLECT)}_hasComputedEffect(a){return this._hasPropertyEffect(a,S.COMPUTE)}_setPendingPropertyOrPath(a,n,o,s){if(s||Et(Array.isArray(a)?a[0]:a)!==a){if(!s){let l=rt(this,a);if(a=b0(this,a,n),!a||!super._shouldPropertyChange(a,n,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(a,n,o))return cc(this,a,n),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[a])return this._setPendingProperty(a,n,o);this[a]=n}return!1}_setUnmanagedPropertyToNode(a,n,o){(o!==a[n]||typeof o=="object")&&(n==="className"&&(a=T(a)),a[n]=o)}_setPendingProperty(a,n,o){let s=this.__dataHasPaths&&ta(a),l=s?this.__dataTemp:this.__data;return this._shouldPropertyChange(a,n,l[a])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),a in this.__dataOld||(this.__dataOld[a]=this.__data[a]),s?this.__dataTemp[a]=n:this.__data[a]=n,this.__dataPending[a]=n,(s||this[S.NOTIFY]&&this[S.NOTIFY][a])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[a]=o),!0):!1}_setProperty(a,n){this._setPendingProperty(a,n,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(a){this.__dataPendingClients=this.__dataPendingClients||[],a!==this&&this.__dataPendingClients.push(a)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let a=this.__dataPendingClients;if(a){this.__dataPendingClients=null;for(let n=0;n<a.length;n++){let o=a[n];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(a,n){for(let o in a)(n||!this[S.READ_ONLY]||!this[S.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,a[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(a,n,o){let s=this.__dataHasPaths;this.__dataHasPaths=!1;let l;oc(this,n,o,s),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(n,o,s),this._flushClients(),ze(this,this[S.REFLECT],n,o,s),ze(this,this[S.OBSERVE],n,o,s),l&&ec(this,l,n,o,s),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(a,n,o){this[S.PROPAGATE]&&ze(this,this[S.PROPAGATE],a,n,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,a,n,o)}_runEffectsForTemplate(a,n,o,s){const l=(h,c)=>{ze(this,a.propertyEffects,h,o,c,a.nodeList);for(let d=a.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,h,o,c)};a.runEffects?a.runEffects(l,n,s):l(n,s)}linkPaths(a,n){a=Me(a),n=Me(n),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[a]=n}unlinkPaths(a){a=Me(a),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[a]}notifySplices(a,n){let o={path:""},s=rt(this,a,o);v1(this,s,o.path,n)}get(a,n){return rt(n||this,a)}set(a,n,o){o?b0(o,a,n):(!this[S.READ_ONLY]||!this[S.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,n,!0)&&this._invalidateProperties()}push(a,...n){let o={path:""},s=rt(this,a,o),l=s.length,h=s.push(...n);return n.length&&he(this,s,o.path,l,n.length,[]),h}pop(a){let n={path:""},o=rt(this,a,n),s=Boolean(o.length),l=o.pop();return s&&he(this,o,n.path,o.length,0,[l]),l}splice(a,n,o,...s){let l={path:""},h=rt(this,a,l);n<0?n=h.length-Math.floor(-n):n&&(n=Math.floor(n));let c;return arguments.length===2?c=h.splice(n):c=h.splice(n,o,...s),(s.length||c.length)&&he(this,h,l.path,n,s.length,c),c}shift(a){let n={path:""},o=rt(this,a,n),s=Boolean(o.length),l=o.shift();return s&&he(this,o,n.path,0,0,[l]),l}unshift(a,...n){let o={path:""},s=rt(this,a,o),l=s.unshift(...n);return n.length&&he(this,s,o.path,0,n.length,[]),l}notifyPath(a,n){let o;if(arguments.length==1){let s={path:""};n=rt(this,a,s),o=s.path}else Array.isArray(a)?o=Me(a):o=a;this._setPendingPropertyOrPath(o,n,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(a,n){this._addPropertyEffect(a,S.READ_ONLY),n&&(this["_set"+Ic(a)]=function(o){this._setProperty(a,o)})}_createPropertyObserver(a,n,o){let s={property:a,method:n,dynamicFn:Boolean(o)};this._addPropertyEffect(a,S.OBSERVE,{fn:w0,info:s,trigger:{name:a}}),o&&this._addPropertyEffect(n,S.OBSERVE,{fn:w0,info:s,trigger:{name:n}})}_createMethodObserver(a,n){let o=Fr(a);if(!o)throw new Error("Malformed observer expression '"+a+"'");C0(this,o,S.OBSERVE,ra,null,n)}_createNotifyingProperty(a){this._addPropertyEffect(a,S.NOTIFY,{fn:rc,info:{eventName:wr(a)+"-changed",property:a}})}_createReflectedProperty(a){let n=this.constructor.attributeNameForProperty(a);n[0]==="-"?console.warn("Property "+a+" cannot be reflected to attribute "+n+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(a,S.REFLECT,{fn:nc,info:{attrName:n}})}_createComputedProperty(a,n,o){let s=Fr(n);if(!s)throw new Error("Malformed computed expression '"+n+"'");const l=C0(this,s,S.COMPUTE,d1,a,o);$r(this,h1)[a]=l}_marshalArgs(a,n,o){const s=this.__data,l=[];for(let h=0,c=a.length;h<c;h++){let{name:d,structured:_,wildcard:m,value:y,literal:C}=a[h];if(!C)if(m){const b=Te(d,n),x=O0(s,o,b?n:d);y={path:b?n:d,value:x,base:b?rt(s,d):x}}else y=_?O0(s,o,d):s[d];if(Zr&&!this._overrideLegacyUndefined&&y===void 0&&a.length>1)return Se;l[h]=y}return l}static addPropertyEffect(a,n,o){this.prototype._addPropertyEffect(a,n,o)}static createPropertyObserver(a,n,o){this.prototype._createPropertyObserver(a,n,o)}static createMethodObserver(a,n){this.prototype._createMethodObserver(a,n)}static createNotifyingProperty(a){this.prototype._createNotifyingProperty(a)}static createReadOnlyProperty(a,n){this.prototype._createReadOnlyProperty(a,n)}static createReflectedProperty(a){this.prototype._createReflectedProperty(a)}static createComputedProperty(a,n,o){this.prototype._createComputedProperty(a,n,o)}static bindTemplate(a){return this.prototype._bindTemplate(a)}_bindTemplate(a,n){let o=this.constructor._parseTemplate(a),s=this.__preBoundTemplateInfo==o;if(!s)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(n)if(o=Object.create(o),o.wasPreBound=s,!this.__templateInfo)this.__templateInfo=o;else{const l=a._parentTemplateInfo||this.__templateInfo,h=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=h,h?h.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(a,n,o){let s=a.hostProps=a.hostProps||{};s[n]=!0;let l=a.propertyEffects=a.propertyEffects||{};(l[n]=l[n]||[]).push(o)}_stampTemplate(a,n){n=n||this._bindTemplate(a,!0),ce.push(this);let o=super._stampTemplate(a,n);if(ce.pop(),n.nodeList=o.nodeList,!n.wasPreBound){let s=n.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)s.push(l)}return o.templateInfo=n,_c(this,n),this.__dataClientsReady&&(this._runEffectsForTemplate(n,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(a){const n=a.templateInfo,{previousSibling:o,nextSibling:s,parent:l}=n;o?o.nextSibling=s:l&&(l.firstChild=s),s?s.previousSibling=o:l&&(l.lastChild=o),n.nextSibling=n.previousSibling=null;let h=n.childNodes;for(let c=0;c<h.length;c++){let d=h[c];T(T(d).parentNode).removeChild(d)}}static _parseTemplateNode(a,n,o){let s=e._parseTemplateNode.call(this,a,n,o);if(a.nodeType===Node.TEXT_NODE){let l=this._parseBindings(a.textContent,n);l&&(a.textContent=T0(l)||" ",Lr(this,n,o,"text","textContent",l),s=!0)}return s}static _parseTemplateNodeAttribute(a,n,o,s,l){let h=this._parseBindings(l,n);if(h){let c=s,d="property";Jh.test(s)?d="attribute":s[s.length-1]=="$"&&(s=s.slice(0,-1),d="attribute");let _=T0(h);return _&&d=="attribute"&&(s=="class"&&a.hasAttribute("class")&&(_+=" "+a.getAttribute(s)),a.setAttribute(s,_)),d=="attribute"&&c=="disable-upgrade$"&&a.setAttribute(s,""),a.localName==="input"&&c==="value"&&a.setAttribute(c,""),a.removeAttribute(c),d==="property"&&(s=r1(s)),Lr(this,n,o,d,s,h,_),!0}else return e._parseTemplateNodeAttribute.call(this,a,n,o,s,l)}static _parseTemplateNestedTemplate(a,n,o){let s=e._parseTemplateNestedTemplate.call(this,a,n,o);const l=a.parentNode,h=o.templateInfo,c=l.localName==="dom-if",d=l.localName==="dom-repeat";f0&&(c||d)&&(l.removeChild(a),o=o.parentInfo,o.templateInfo=h,o.noted=!0,s=!1);let _=h.hostProps;if(Js&&c)_&&(n.hostProps=Object.assign(n.hostProps||{},_),f0||(o.parentInfo.noted=!0));else{let m="{";for(let y in _){let C=[{mode:m,source:y,dependencies:[y],hostProp:!0}];Lr(this,n,o,"property","_host_"+y,C)}}return s}static _parseBindings(a,n){let o=[],s=0,l;for(;(l=E0.exec(a))!==null;){l.index>s&&o.push({literal:a.slice(s,l.index)});let h=l[1][0],c=Boolean(l[2]),d=l[3].trim(),_=!1,m="",y=-1;h=="{"&&(y=d.indexOf("::"))>0&&(m=d.substring(y+2),d=d.substring(0,y),_=!0);let C=Fr(d),b=[];if(C){let{args:x,methodName:E}=C;for(let J=0;J<x.length;J++){let W=x[J];W.literal||b.push(W)}let $=n.dynamicFns;($&&$[E]||C.static)&&(b.push(E),C.dynamicFn=!0)}else b.push(d);o.push({source:d,mode:h,negate:c,customEvent:_,signature:C,dependencies:b,event:m}),s=E0.lastIndex}if(s&&s<a.length){let h=a.substring(s);h&&o.push({literal:h})}return o.length?o:null}static _evaluateBinding(a,n,o,s,l,h){let c;return n.signature?c=ra(a,o,s,l,n.signature):o!=n.source?c=rt(a,n.source):h&&ta(o)?c=rt(a,o):c=a.__data[o],n.negate&&(c=!c),c}}return t}),ce=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function o4(r){}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function kc(r){const e={};for(let t in r){const i=r[t];e[t]=typeof i=="function"?{type:i}:i}return e}const Dc=U(r=>{const e=o1(r);function t(n){const o=Object.getPrototypeOf(n);return o.prototype instanceof a?o:null}function i(n){if(!n.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",n))){let o=null;if(n.hasOwnProperty(JSCompiler_renameProperty("properties",n))){const s=n.properties;s&&(o=kc(s))}n.__ownProperties=o}return n.__ownProperties}class a extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(s=>this.prototype._addPropertyToAttributeMap(s)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=t(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=i(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=t(this);this.__properties=Object.assign({},o&&o._properties,i(this))}return this.__properties}static typeForProperty(o){const s=this._properties[o];return s&&s.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return a});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Rc="3.5.1",P0=window.ShadyCSS&&window.ShadyCSS.cssBuild,f1=U(r=>{const e=Dc(Fn(r));function t(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let h=l._properties;for(let c in h){let d=h[c];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=d)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function a(l,h,c,d){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(h)?console.warn(`Cannot redefine computed property '${h}'.`):l._createComputedProperty(h,c.computed,d)),c.readOnly&&!l._hasReadOnlyEffect(h)?l._createReadOnlyProperty(h,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(h)&&console.warn(`Cannot make readOnly property '${h}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(h)?l._createReflectedProperty(h):c.reflectToAttribute===!1&&l._hasReflectEffect(h)&&console.warn(`Cannot make reflected property '${h}' non-reflected.`),c.notify&&!l._hasNotifyEffect(h)?l._createNotifyingProperty(h):c.notify===!1&&l._hasNotifyEffect(h)&&console.warn(`Cannot make notify property '${h}' non-notify.`),c.observer&&l._createPropertyObserver(h,c.observer,d[c.observer]),l._addPropertyToAttributeMap(h)}function n(l,h,c,d){if(!P0){const _=h.content.querySelectorAll("style"),m=zr(h),y=Eh(c),C=h.content.firstElementChild;for(let x=0;x<y.length;x++){let E=y[x];E.textContent=l._processStyleText(E.textContent,d),h.content.insertBefore(E,C)}let b=0;for(let x=0;x<m.length;x++){let E=m[x],$=_[b];$!==E?(E=E.cloneNode(!0),$.parentNode.insertBefore(E,$)):b++,E.textContent=l._processStyleText(E.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(h,c),bh&&P0&&ph){const _=h.content.querySelectorAll("style");if(_){let m="";Array.from(_).forEach(y=>{m+=y.textContent,y.parentNode.removeChild(y)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(m)}}}function o(l){let h=null;if(l&&(!Ee||fh)&&(h=ie.import(l,"template"),Ee&&!h))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return h}class s extends e{static get polymerElementVersion(){return Rc}static _finalizeClass(){e._finalizeClass.call(this);const h=i(this);h&&this.createObservers(h,this._properties),this._prepareTemplate()}static _prepareTemplate(){let h=this.template;h&&(typeof h=="string"?(console.error("template getter must return HTMLTemplateElement"),h=null):Xs||(h=h.cloneNode(!0))),this.prototype._template=h}static createProperties(h){for(let c in h)a(this.prototype,c,h[c],h)}static createObservers(h,c){const d=this.prototype;for(let _=0;_<h.length;_++)d._createMethodObserver(h[_],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let h=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof h=="function"&&(h=h()),this._template=h!==void 0?h:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(h){this._template=h}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const h=this.importMeta;if(h)this._importPath=kn(h.url);else{const c=ie.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=vh,this.importPath=this.constructor.importPath;let h=t(this.constructor);if(!!h)for(let c in h){let d=h[c];if(this._canApplyPropertyDefault(c)){let _=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(c)?this._setPendingProperty(c,_,!0):this[c]=_}}}_canApplyPropertyDefault(h){return!this.hasOwnProperty(h)}static _processStyleText(h,c){return In(h,c)}static _finalizeTemplate(h){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const d=this.importPath,_=d?we(d):"";n(this,c,h,_),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(h){const c=T(this);if(c.attachShadow)return h?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:h}),c.shadowRoot.appendChild(h),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),_h&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(h){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,h)}resolveUrl(h,c){return!c&&this.importPath&&(c=we(this.importPath)),we(h,c)}static _parseTemplateContent(h,c,d){return c.dynamicFns=c.dynamicFns||this._properties,e._parseTemplateContent.call(this,h,c,d)}static _addTemplatePropertyEffect(h,c,d){return Zs&&!(c in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!h.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,h,c,d)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const S0=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:r=>r});class _1{constructor(e,t){g1(e,t);const i=t.reduce((a,n,o)=>a+m1(n)+e[o+1],e[0]);this.value=i.toString()}toString(){return this.value}}function m1(r){if(r instanceof _1)return r.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${r}`)}function $c(r){if(r instanceof HTMLTemplateElement)return r.innerHTML;if(r instanceof _1)return m1(r);throw new Error(`non-template value passed to Polymer's html function: ${r}`)}const R=function(e,...t){g1(e,t);const i=document.createElement("template");let a=t.reduce((n,o,s)=>n+$c(o)+e[s+1],e[0]);return S0&&(a=S0.createHTML(a)),i.innerHTML=a,i},g1=(r,e)=>{if(!Array.isArray(r)||!Array.isArray(r.raw)||e.length!==r.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O=f1(HTMLElement);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cr=U(r=>class extends r{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let I0=0,y1=0;const Xt=[];let k0=0,aa=!1;const b1=document.createTextNode("");new window.MutationObserver(Lc).observe(b1,{characterData:!0});function Lc(){aa=!1;const r=Xt.length;for(let e=0;e<r;e++){const t=Xt[e];if(t)try{t()}catch(i){setTimeout(()=>{throw i})}}Xt.splice(0,r),y1+=r}const lt={after(r){return{run(e){return window.setTimeout(e,r)},cancel(e){window.clearTimeout(e)}}},run(r,e){return window.setTimeout(r,e)},cancel(r){window.clearTimeout(r)}},Lt={run(r){return window.requestAnimationFrame(r)},cancel(r){window.cancelAnimationFrame(r)}},M1={run(r){return window.requestIdleCallback?window.requestIdleCallback(r):window.setTimeout(r,16)},cancel(r){window.cancelIdleCallback?window.cancelIdleCallback(r):window.clearTimeout(r)}},Ft={run(r){aa||(aa=!0,b1.textContent=k0,k0+=1),Xt.push(r);const e=I0;return I0+=1,e},cancel(r){const e=r-y1;if(e>=0){if(!Xt[e])throw new Error(`invalid async handle: ${r}`);Xt[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Fc=!1,Nc=r=>r,Nn=typeof document.head.style.touchAction=="string",Di="__polymerGestures",Nr="__polymerGesturesHandled",na="__polymerGesturesTouchAction",D0=25,R0=5,Bc=2,Hc=["mousedown","mousemove","mouseup","click"],Vc=[0,1,4,2],Yc=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Bn(r){return Hc.indexOf(r)>-1}let z1=!1;(function(){try{const r=Object.defineProperty({},"passive",{get(){z1=!0}});window.addEventListener("test",null,r),window.removeEventListener("test",null,r)}catch{}})();function w1(r){if(!(Bn(r)||r==="touchend")&&Nn&&z1&&Fc)return{passive:!0}}const Uc=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Wc={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function $t(r){const e=r.type;if(!Bn(e))return!1;if(e==="mousemove"){let i=r.buttons===void 0?1:r.buttons;return r instanceof window.MouseEvent&&!Yc&&(i=Vc[r.which]||0),Boolean(i&1)}return(r.button===void 0?0:r.button)===0}function jc(r){if(r.type==="click"){if(r.detail===0)return!0;const e=St(r);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const t=e.getBoundingClientRect(),i=r.pageX,a=r.pageY;return!(i>=t.left&&i<=t.right&&a>=t.top&&a<=t.bottom)}return!1}const wt={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function qc(r){let e="auto";const t=C1(r);for(let i=0,a;i<t.length;i++)if(a=t[i],a[na]){e=a[na];break}return e}function A1(r,e,t){r.movefn=e,r.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function Zt(r){document.removeEventListener("mousemove",r.movefn),document.removeEventListener("mouseup",r.upfn),r.movefn=null,r.upfn=null}const C1=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:r=>r.composedPath&&r.composedPath()||[],xt={},Rt=[];function Gc(r,e){let t=document.elementFromPoint(r,e),i=t;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const a=i;if(i=i.shadowRoot.elementFromPoint(r,e),a===i)break;i&&(t=i)}return t}function St(r){const e=C1(r);return e.length>0?e[0]:r.target}function x1(r){const e=r.type,i=r.currentTarget[Di];if(!i)return;const a=i[e];if(!a)return;if(!r[Nr]&&(r[Nr]={},e.startsWith("touch"))){const o=r.changedTouches[0];if(e==="touchstart"&&r.touches.length===1&&(wt.touch.id=o.identifier),wt.touch.id!==o.identifier)return;Nn||(e==="touchstart"||e==="touchmove")&&Qc(r)}const n=r[Nr];if(!n.skip){for(let o=0,s;o<Rt.length;o++)s=Rt[o],a[s.name]&&!n[s.name]&&s.flow&&s.flow.start.indexOf(r.type)>-1&&s.reset&&s.reset();for(let o=0,s;o<Rt.length;o++)s=Rt[o],a[s.name]&&!n[s.name]&&(n[s.name]=!0,s[e](r))}}function Qc(r){const e=r.changedTouches[0],t=r.type;if(t==="touchstart")wt.touch.x=e.clientX,wt.touch.y=e.clientY,wt.touch.scrollDecided=!1;else if(t==="touchmove"){if(wt.touch.scrollDecided)return;wt.touch.scrollDecided=!0;const i=qc(r);let a=!1;const n=Math.abs(wt.touch.x-e.clientX),o=Math.abs(wt.touch.y-e.clientY);r.cancelable&&(i==="none"?a=!0:i==="pan-x"?a=o>n:i==="pan-y"&&(a=n>o)),a?r.preventDefault():re("track")}}function at(r,e,t){return xt[e]?(Kc(r,e,t),!0):!1}function E1(r,e,t){return xt[e]?(Xc(r,e,t),!0):!1}function Kc(r,e,t){const i=xt[e],a=i.deps,n=i.name;let o=r[Di];o||(r[Di]=o={});for(let s=0,l,h;s<a.length;s++)l=a[s],!(Uc&&Bn(l)&&l!=="click")&&(h=o[l],h||(o[l]=h={_count:0}),h._count===0&&r.addEventListener(l,x1,w1(l)),h[n]=(h[n]||0)+1,h._count=(h._count||0)+1);r.addEventListener(e,t),i.touchAction&&T1(r,i.touchAction)}function Xc(r,e,t){const i=xt[e],a=i.deps,n=i.name,o=r[Di];if(o)for(let s=0,l,h;s<a.length;s++)l=a[s],h=o[l],h&&h[n]&&(h[n]=(h[n]||1)-1,h._count=(h._count||1)-1,h._count===0&&r.removeEventListener(l,x1,w1(l)));r.removeEventListener(e,t)}function xr(r){Rt.push(r);for(let e=0;e<r.emits.length;e++)xt[r.emits[e]]=r}function Zc(r){for(let e=0,t;e<Rt.length;e++){t=Rt[e];for(let i=0,a;i<t.emits.length;i++)if(a=t.emits[i],a===r)return t}return null}function T1(r,e){Nn&&r instanceof HTMLElement&&Ft.run(()=>{r.style.touchAction=e}),r[na]=e}function Hn(r,e,t){const i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=t,Nc(r).dispatchEvent(i),i.defaultPrevented){const a=t.preventer||t.sourceEvent;a&&a.preventDefault&&a.preventDefault()}}function re(r){const e=Zc(r);e.info&&(e.info.prevent=!0)}xr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Zt(this.info)},mousedown(r){if(!$t(r))return;const e=St(r),t=this,i=n=>{$t(n)||(de("up",e,n),Zt(t.info))},a=n=>{$t(n)&&de("up",e,n),Zt(t.info)};A1(this.info,i,a),de("down",e,r)},touchstart(r){de("down",St(r),r.changedTouches[0],r)},touchend(r){de("up",St(r),r.changedTouches[0],r)}});function de(r,e,t,i){!e||Hn(e,r,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i,prevent(a){return re(a)}})}xr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(r){this.moves.length>Bc&&this.moves.shift(),this.moves.push(r)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Zt(this.info)},mousedown(r){if(!$t(r))return;const e=St(r),t=this,i=n=>{const o=n.clientX,s=n.clientY;$0(t.info,o,s)&&(t.info.state=t.info.started?n.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&re("tap"),t.info.addMove({x:o,y:s}),$t(n)||(t.info.state="end",Zt(t.info)),e&&Br(t.info,e,n),t.info.started=!0)},a=n=>{t.info.started&&i(n),Zt(t.info)};A1(this.info,i,a),this.info.x=r.clientX,this.info.y=r.clientY},touchstart(r){const e=r.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(r){const e=St(r),t=r.changedTouches[0],i=t.clientX,a=t.clientY;$0(this.info,i,a)&&(this.info.state==="start"&&re("tap"),this.info.addMove({x:i,y:a}),Br(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend(r){const e=St(r),t=r.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),Br(this.info,e,t))}});function $0(r,e,t){if(r.prevent)return!1;if(r.started)return!0;const i=Math.abs(r.x-e),a=Math.abs(r.y-t);return i>=R0||a>=R0}function Br(r,e,t){if(!e)return;const i=r.moves[r.moves.length-2],a=r.moves[r.moves.length-1],n=a.x-r.x,o=a.y-r.y;let s,l=0;i&&(s=a.x-i.x,l=a.y-i.y),Hn(e,"track",{state:r.state,x:t.clientX,y:t.clientY,dx:n,dy:o,ddx:s,ddy:l,sourceEvent:t,hover(){return Gc(t.clientX,t.clientY)}})}xr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(r){$t(r)&&(this.info.x=r.clientX,this.info.y=r.clientY)},click(r){$t(r)&&L0(this.info,r)},touchstart(r){const e=r.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(r){L0(this.info,r.changedTouches[0],r)}});function L0(r,e,t){const i=Math.abs(e.clientX-r.x),a=Math.abs(e.clientY-r.y),n=St(t||e);!n||Wc[n.localName]&&n.hasAttribute("disabled")||(isNaN(i)||isNaN(a)||i<=D0&&a<=D0||jc(e))&&(r.prevent||Hn(n,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Le=U(r=>class extends r{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t);break}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Er=r=>class extends Cr(Le(r)){get _activeKeys(){return[" "]}ready(){super.ready(),at(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),at(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",i=>{this._activeKeys.includes(i.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pt=U(r=>class extends r{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),this.$!==void 0&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}}),Jc=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ge=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function td(){function r(){return!0}return O1(r)}function ed(){try{return id()?!0:rd()?Ge?!ad():!td():!1}catch{return!1}}function id(){return localStorage.getItem("vaadin.developmentmode.force")}function rd(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ad(){return!!(Ge&&Object.keys(Ge).map(e=>Ge[e]).filter(e=>e.productionMode).length>0)}function O1(r,e){if(typeof r!="function")return;const t=Jc.exec(r.toString());if(t)try{r=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return r(e)}window.Vaadin=window.Vaadin||{};const F0=function(r,e){if(window.Vaadin.developmentMode)return O1(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ed());function nd(){}const od=function(){if(typeof F0=="function")return F0(nd)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class L{static debounce(e,t,i){return e instanceof L?e._cancelAsync():e=new L,e.setConfig(t,i),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Ie.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ie.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}let Ie=new Set;function P1(r){Ie.add(r)}function sd(){const r=Boolean(Ie.size);return Ie.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),r}const Ae=()=>{let r;do r=sd();while(r)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jt{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,i){const{scrollLeft:a}=i;if(t!=="rtl"||!e)return a;switch(e){case"negative":return i.scrollWidth-i.clientWidth+a;case"reverse":return i.scrollWidth-i.clientWidth-a;default:return a}}static setNormalizedScrollLeft(e,t,i,a){if(t!=="rtl"||!e){i.scrollLeft=a;return}switch(e){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+a;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-a;break;default:i.scrollLeft=a;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zt=[];function ld(){const r=sa();zt.forEach(e=>{oa(e,r)})}let Ve;const hd=new MutationObserver(ld);hd.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function oa(r,e,t=r.getAttribute("dir")){e?r.setAttribute("dir",e):t!=null&&r.removeAttribute("dir")}function sa(){return document.documentElement.getAttribute("dir")}const Ht=r=>class extends r{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}static finalize(){super.finalize(),Ve||(Ve=Jt.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),oa(this,sa(),null))}attributeChangedCallback(t,i,a){if(super.attributeChangedCallback(t,i,a),t!=="dir")return;const n=sa(),o=a===n&&zt.indexOf(this)===-1,s=!a&&i&&zt.indexOf(this)===-1;o||s?(this.__subscribe(),oa(this,n,a)):a!==n&&i===n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=zt.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,i,a){a==="dir"&&i===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,i,a)}_attributeToProperty(t,i,a){t==="dir"&&!i?this.dir="":super._attributeToProperty(t,i,a)}__subscribe(){zt.includes(this)||zt.push(this)}__unsubscribe(){zt.includes(this)&&zt.splice(zt.indexOf(this),1)}__getNormalizedScrollLeft(t){return Jt.getNormalizedScrollLeft(Ve,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,i){return Jt.setNormalizedScrollLeft(Ve,this.getAttribute("dir")||"ltr",t,i)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */yh(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){od()};let Hr;const N0=new Set,tt=r=>class extends Ht(r){static get version(){return"23.3.5"}static finalize(){super.finalize();const{is:t}=this;t&&!N0.has(t)&&(window.Vaadin.registrations.push(this),N0.add(t),window.Vaadin.developmentModeCallback&&(Hr=L.debounce(Hr,M1,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),P1(Hr)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ue(r,e,t){return{index:r,removed:e,addedCount:t}}const S1=0,I1=1,la=2,ha=3;function cd(r,e,t,i,a,n){let o=n-a+1,s=t-e+1,l=new Array(o);for(let h=0;h<o;h++)l[h]=new Array(s),l[h][0]=h;for(let h=0;h<s;h++)l[0][h]=h;for(let h=1;h<o;h++)for(let c=1;c<s;c++)if(Vn(r[e+c-1],i[a+h-1]))l[h][c]=l[h-1][c-1];else{let d=l[h-1][c]+1,_=l[h][c-1]+1;l[h][c]=d<_?d:_}return l}function dd(r){let e=r.length-1,t=r[0].length-1,i=r[e][t],a=[];for(;e>0||t>0;){if(e==0){a.push(la),t--;continue}if(t==0){a.push(ha),e--;continue}let n=r[e-1][t-1],o=r[e-1][t],s=r[e][t-1],l;o<s?l=o<n?o:n:l=s<n?s:n,l==n?(n==i?a.push(S1):(a.push(I1),i=n),e--,t--):l==o?(a.push(ha),e--,i=o):(a.push(la),t--,i=s)}return a.reverse(),a}function ud(r,e,t,i,a,n){let o=0,s=0,l,h=Math.min(t-e,n-a);if(e==0&&a==0&&(o=pd(r,i,h)),t==r.length&&n==i.length&&(s=vd(r,i,h-o)),e+=o,a+=o,t-=s,n-=s,t-e==0&&n-a==0)return[];if(e==t){for(l=ue(e,[],0);a<n;)l.removed.push(i[a++]);return[l]}else if(a==n)return[ue(e,[],t-e)];let c=dd(cd(r,e,t,i,a,n));l=void 0;let d=[],_=e,m=a;for(let y=0;y<c.length;y++)switch(c[y]){case S1:l&&(d.push(l),l=void 0),_++,m++;break;case I1:l||(l=ue(_,[],0)),l.addedCount++,_++,l.removed.push(i[m]),m++;break;case la:l||(l=ue(_,[],0)),l.addedCount++,_++;break;case ha:l||(l=ue(_,[],0)),l.removed.push(i[m]),m++;break}return l&&d.push(l),d}function pd(r,e,t){for(let i=0;i<t;i++)if(!Vn(r[i],e[i]))return i;return t}function vd(r,e,t){let i=r.length,a=e.length,n=0;for(;n<t&&Vn(r[--i],e[--a]);)n++;return n}function fd(r,e){return ud(r,0,r.length,e,0,e.length)}function Vn(r,e){return r===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Yt(r){return r.localName==="slot"}let ut=class{static getFlattenedNodes(r){const e=T(r);return Yt(r)?(r=r,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>Yt(t)?(t=t,T(t).assignedNodes({flatten:!0})):[t]).reduce((t,i)=>t.concat(i),[])}constructor(r,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=r,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Yt(this._target)?this._listenSlots([this._target]):T(this._target).children&&(this._listenSlots(T(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,r=>{this._processMutations(r)}):(this._nativeChildrenObserver=new MutationObserver(r=>{this._processMutations(r)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Yt(this._target)?this._unlistenSlots([this._target]):T(this._target).children&&(this._unlistenSlots(T(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Ar.run(()=>this.flush()))}_processMutations(r){this._processSlotMutations(r),this.flush()}_processSlotMutations(r){if(r)for(let e=0;e<r.length;e++){let t=r[e];t.addedNodes&&this._listenSlots(t.addedNodes),t.removedNodes&&this._unlistenSlots(t.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let r={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),t=fd(e,this._effectiveNodes);for(let a=0,n;a<t.length&&(n=t[a]);a++)for(let o=0,s;o<n.removed.length&&(s=n.removed[o]);o++)r.removedNodes.push(s);for(let a=0,n;a<t.length&&(n=t[a]);a++)for(let o=n.index;o<n.index+n.addedCount;o++)r.addedNodes.push(e[o]);this._effectiveNodes=e;let i=!1;return(r.addedNodes.length||r.removedNodes.length)&&(i=!0,this.callback.call(this._target,r)),i}_listenSlots(r){for(let e=0;e<r.length;e++){let t=r[e];Yt(t)&&t.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(r){for(let e=0;e<r.length;e++){let t=r[e];Yt(t)&&t.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let _d=0;function Yn(){return _d++}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vt extends EventTarget{static generateId(e,t){return`${e||"default"}-${t.localName}-${Yn()}`}constructor(e,t,i,a,n){super(),this.host=e,this.slotName=t,this.slotFactory=i,this.slotInitializer=a,n&&(this.defaultId=Vt.generateId(t,e))}hostConnected(){if(!this.initialized){let e=this.getSlotChild();e?(this.node=e,this.initCustomNode(e)):e=this.attachDefaultNode(),this.initNode(e),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:e,slotName:t,slotFactory:i}=this;let a=this.defaultNode;return!a&&i&&(a=i(e),a instanceof Element&&(t!==""&&a.setAttribute("slot",t),this.node=a,this.defaultNode=a)),a&&e.appendChild(a),a}getSlotChild(){const{slotName:e}=this;return Array.from(this.host.childNodes).find(t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&e==="")}initNode(e){const{slotInitializer:t}=this;t&&t(this.host,e)}initCustomNode(e){}teardownNode(e){}observe(){const{slotName:e}=this,t=e===""?"slot:not([name])":`slot[name=${e}]`,i=this.host.shadowRoot.querySelector(t);this.__slotObserver=new ut(i,a=>{const n=this.node,o=a.addedNodes.find(s=>s!==n);a.removedNodes.length&&a.removedNodes.forEach(s=>{this.teardownNode(s)}),o&&(n&&n.isConnected&&this.host.removeChild(n),this.node=o,o!==this.defaultNode&&(this.initCustomNode(o),this.initNode(o)))})}}/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class It extends Vt{constructor(e){super(e,"tooltip"),this.setTarget(e)}initCustomNode(e){e.target=this.target,this.context!==void 0&&(e.context=this.context),this.manual!==void 0&&(e.manual=this.manual),this.opened!==void 0&&(e.opened=this.opened),this.position!==void 0&&(e._position=this.position),this.shouldShow!==void 0&&(e.shouldShow=this.shouldShow)}setContext(e){this.context=e;const t=this.node;t&&(t.context=e)}setManual(e){this.manual=e;const t=this.node;t&&(t.manual=e)}setOpened(e){this.opened=e;const t=this.node;t&&(t.opened=e)}setPosition(e){this.position=e;const t=this.node;t&&(t._position=e)}setShouldShow(e){this.shouldShow=e;const t=this.node;t&&(t.shouldShow=e)}setTarget(e){this.target=e;const t=this.node;t&&(t.target=e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Un=!1;window.addEventListener("keydown",()=>{Un=!0},{capture:!0});window.addEventListener("mousedown",()=>{Un=!1},{capture:!0});function Wn(){return Un}function k1(r){const e=r.style;if(e.visibility==="hidden"||e.display==="none")return!0;const t=window.getComputedStyle(r);return t.visibility==="hidden"||t.display==="none"}function md(r){if(!bd(r))return-1;const e=r.getAttribute("tabindex")||0;return Number(e)}function gd(r,e){const t=Math.max(r.tabIndex,0),i=Math.max(e.tabIndex,0);return t===0||i===0?i>t:t>i}function yd(r,e){const t=[];for(;r.length>0&&e.length>0;)gd(r[0],e[0])?t.push(e.shift()):t.push(r.shift());return t.concat(r,e)}function ca(r){const e=r.length;if(e<2)return r;const t=Math.ceil(e/2),i=ca(r.slice(0,t)),a=ca(r.slice(t));return yd(i,a)}function D1(r,e){if(r.nodeType!==Node.ELEMENT_NODE||k1(r))return!1;const t=r,i=md(t);let a=i>0;i>=0&&e.push(t);let n=[];return t.localName==="slot"?n=t.assignedNodes({flatten:!0}):n=(t.shadowRoot||t).children,[...n].forEach(o=>{a=D1(o,e)||a}),a}function B0(r){return r.offsetParent===null?!0:k1(r)}function bd(r){return r.matches('[tabindex="-1"]')?!1:r.matches("input, select, textarea, button, object")?r.matches(":not([disabled])"):r.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function jn(r){return r.getRootNode().activeElement===r}function Md(r){const e=[];return D1(r,e)?ca(e):e}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const R1=U(r=>class extends r{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((i,a)=>{this._delegateAttribute(i,t[a])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((i,a)=>{this._delegateProperty(i,t[a])})}_delegateAttribute(t,i){!this.stateTarget||(t==="invalid"&&this._delegateAttribute("aria-invalid",i?"true":!1),typeof i=="boolean"?this.stateTarget.toggleAttribute(t,i):i?this.stateTarget.setAttribute(t,i):this.stateTarget.removeAttribute(t))}_delegateProperty(t,i){!this.stateTarget||(this.stateTarget[t]=i)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $1=U(r=>class extends r{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){!this.inputElement||(t!=null?this.inputElement.value=t:this.inputElement.value="")}_inputElementChanged(t,i){t?this._addInputListeners(t):i&&this._removeInputListeners(i)}_hasInputValueChanged(t,i){(t||i)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const i=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=i.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,i){this._toggleHasValue(this._hasValue),!(t===""&&i===void 0)&&(this.__userInput||this._forwardInputValue(t))}get _hasValue(){return this.value!=null&&this.value!==""}_setHasInputValue(t){const i=t.composedPath()[0];this._hasInputValue=i.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L1=U(r=>class extends R1(Cr($1(r))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(t){const i=t.target;this._toggleChecked(i.checked),jn(i)||i.focus()}_toggleChecked(t){this.checked=t}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oe=U(r=>class extends r{get _keyboardActive(){return Wn()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qn=r=>class extends Cr(r){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,i){super._disabledChanged(t,i),t?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):i&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&t!==-1&&(this._lastTabIndex=t,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tr=U(r=>class extends oe(qn(r)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,i){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):i&&this._removeFocusListeners(i)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,i){super._disabledChanged(t,i),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){t!==void 0&&this.focusElement&&(this.focusElement.tabIndex=t,t!==-1&&(this.tabindex=void 0)),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Or extends Vt{constructor(e,t){super(e,"input",()=>document.createElement("input"),(i,a)=>{i.value&&a.setAttribute("value",i.value),i.type&&a.setAttribute("type",i.type),a.id=this.defaultId,typeof t=="function"&&t(a)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zd extends Vt{constructor(e){super(e,"label",()=>document.createElement("label"),(t,i)=>{this.__updateLabelId(i),this.__updateDefaultLabel(this.label),this.__observeLabel(i)},!0)}get labelId(){return this.node.id}initCustomNode(e){this.__updateLabelId(e);const t=this.__hasLabel(e);this.__toggleHasLabel(t)}teardownNode(e){this.__labelObserver&&this.__labelObserver.disconnect();let t=this.getSlotChild();!t&&e!==this.defaultNode&&(t=this.attachDefaultNode(),this.initNode(t));const i=this.__hasLabel(t);this.__toggleHasLabel(i)}setLabel(e){this.label=e,this.__updateDefaultLabel(e)}__hasLabel(e){return e?e.children.length>0||this.__isNotEmpty(e.textContent):!1}__isNotEmpty(e){return Boolean(e&&e.trim()!=="")}__observeLabel(e){this.__labelObserver=new MutationObserver(t=>{t.forEach(i=>{const a=i.target,n=a===this.node;if(i.type==="attributes")n&&a.id!==this.defaultId&&this.__updateLabelId(a);else if(n||a.parentElement===this.node){const o=this.__hasLabel(this.node);this.__toggleHasLabel(o)}})}),this.__labelObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(e){this.host.toggleAttribute("has-label",e),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:e,node:this.node}}))}__updateDefaultLabel(e){if(this.defaultNode&&(this.defaultNode.textContent=e,this.defaultNode===this.node)){const t=this.__isNotEmpty(e);this.__toggleHasLabel(t)}}__updateLabelId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gn=U(r=>class extends pt(r){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new zd(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pr{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("label-changed",i=>{this.__initLabel(i.detail.node)}),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class F1{constructor(e,t,i){this.sourceSlot=e,this.targetFactory=t,this.copyCallback=i,e&&e.addEventListener("slotchange",()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()})}hostConnected(){this.__sourceSlotObserver=new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget()),this.__copying||this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const e=this.targetFactory();if(!e)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach(i=>{i.parentElement===e&&e.removeChild(i)}),delete this.__slotTargetClones);const t=this.sourceSlot.assignedNodes({flatten:!0}).filter(i=>!(i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""));t.length>0&&(e.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(t,e))}__copyNodesToSlotTarget(e,t){this.__slotTargetClones=this.__slotTargetClones||[],e.forEach(i=>{const a=i.cloneNode(!0);this.__slotTargetClones.push(a),t.appendChild(a),this.__sourceSlotObserver.observe(i,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}),typeof this.copyCallback=="function"&&this.copyCallback(e)}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class H0 extends Gn(L1(Tr(Er(tt(Y(pt(O))))))){static get is(){return"vaadin-checkbox"}static get template(){return R`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='checkbox'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='checkbox'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='checkbox'] {
          width: var(--vaadin-checkbox-size, 1em);
          height: var(--vaadin-checkbox-size, 1em);
        }

        [part='checkbox']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-checkbox-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div part="checkbox"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}ready(){super.ready(),this.addController(new Or(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Pr(this.inputElement,this._labelController)),this.addController(new F1(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())),this._tooltipController=new It(this),this.addController(this._tooltipController)}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`)}_shouldSetActive(e){return e.target.localName==="a"?!1:super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}}customElements.define(H0.is,H0);A("vaadin-grid",M`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Sr(r){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(r);return}r.querySelector("template")&&console.warn(`WARNING: <template> inside <${r.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N1=r=>class extends r{static get properties(){return{resizable:{type:Boolean,value(){if(this.localName==="vaadin-grid-column-group")return;const t=this.parentNode;return t&&t.localName==="vaadin-grid-column-group"&&t.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{!this._grid||this._allCells.forEach(t=>{t._content.parentNode||this._grid.appendChild(t._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)})}),this._gridValue=void 0}ready(){super.ready(),Sr(this)}_findHostGrid(){let t=this;for(;t&&!/^vaadin.*grid(-pro)?$/.test(t.localName);)t=t.assignedSlot?t.assignedSlot.parentNode:t.parentNode;return t||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(t=>t)}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(i=>{i.style.flexGrow=t})}_orderChanged(t){this._allCells.forEach(i=>{i.style.order=t})}_widthChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(i=>{i.style.width=t})}_frozenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",t),this._allCells.forEach(i=>i.toggleAttribute("frozen",t)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",t),this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||i.toggleAttribute("frozen-to-end",t)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(t){this._allCells.forEach(i=>i.toggleAttribute("last-frozen",t)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=t)}_firstFrozenToEndChanged(t){this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||i.toggleAttribute("first-frozen-to-end",t)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=t)}_generateHeader(t){return t.substr(t.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,i=>i.toUpperCase())}_reorderStatusChanged(t){this._allCells.forEach(i=>i.setAttribute("reorder-status",t))}_resizableChanged(t,i){t===void 0||i===void 0||i&&[i].concat(this._emptyCells).forEach(a=>{if(a){const n=a.querySelector('[part~="resize-handle"]');if(n&&a.removeChild(n),t){const o=document.createElement("div");o.setAttribute("part","resize-handle"),a.appendChild(o)}}})}_textAlignChanged(t){if(t===void 0)return;if(["start","end","center"].indexOf(t)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let i;getComputedStyle(this._grid).direction==="ltr"?t==="start"?i="left":t==="end"&&(i="right"):t==="start"?i="right":t==="end"&&(i="left"),this._allCells.forEach(a=>{a._content.style.textAlign=t,getComputedStyle(a._content).textAlign!==t&&(a._content.style.textAlign=i)})}_hiddenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",t),!!t!=!!this._previousHidden&&this._grid&&(t===!0&&this._allCells.forEach(i=>{i._content.parentNode&&i._content.parentNode.removeChild(i._content)}),this._grid._debouncerHiddenChanged=L.debounce(this._grid._debouncerHiddenChanged,Lt,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=t}_runRenderer(t,i,a){const n=[i._content,this];a&&a.item&&n.push(a),t.apply(this,n)}__renderCellsContent(t,i){this.hidden||!this._grid||i.forEach(a=>{if(!a.parentElement)return;const n=this._grid.__getRowModel(a.parentElement);!t||(a._renderer!==t&&this._clearCellContent(a),a._renderer=t,(n.item||t===this._headerRenderer||t===this._footerRenderer)&&this._runRenderer(t,a,n))})}_clearCellContent(t){t._content.innerHTML="",delete t._content._$litPart$}_renderHeaderCellContent(t,i){!i||!t||(this.__renderCellsContent(t,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onHeaderRendererOrBindingChanged(t,i,...a){this._renderHeaderCellContent(t,i)}_renderBodyCellsContent(t,i){!i||!t||this.__renderCellsContent(t,i)}_onRendererOrBindingChanged(t,i,...a){this._renderBodyCellsContent(t,i)}_renderFooterCellContent(t,i){!i||!t||(this.__renderCellsContent(t,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onFooterRendererOrBindingChanged(t,i){this._renderFooterCellContent(t,i)}__setTextContent(t,i){t.textContent!==i&&(t.textContent=i)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){!this.path||this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(t,i,{item:a}){!this.path||this.__setTextContent(t,this.get(this.path,a))}_defaultFooterRenderer(){}_computeHeaderRenderer(t,i){return t||(i!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(t){return t||this._defaultRenderer}_computeFooterRenderer(t){return t||this._defaultFooterRenderer}};class da extends N1(Ht(O)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}customElements.define(da.is,da);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-grid",M`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ri=!1,B1=[],H1=[];function V1(){Ri=!0,requestAnimationFrame(function(){Ri=!1,wd(B1),setTimeout(function(){Ad(H1)})})}function wd(r){for(;r.length;)Y1(r.shift())}function Ad(r){for(let e=0,t=r.length;e<t;e++)Y1(r.shift())}function Y1(r){const e=r[0],t=r[1],i=r[2];try{t.apply(e,i)}catch(a){setTimeout(()=>{throw a})}}function Cd(r,e,t){Ri||V1(),B1.push([r,e,t])}function U1(r,e,t){Ri||V1(),H1.push([r,e,t])}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ir=r=>r.test(navigator.userAgent),ua=r=>r.test(navigator.platform),xd=r=>r.test(navigator.vendor),V0=Ir(/Android/),Ed=Ir(/Chrome/)&&xd(/Google Inc/),W1=Ir(/Firefox/),Td=ua(/^iPad/)||ua(/^Mac/)&&navigator.maxTouchPoints>1,Od=ua(/^iPhone/),ae=Od||Td,j1=Ir(/^((?!chrome|android).)*safari/i),kr=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Y0=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Pd=Y0&&Y0[1]>=8,U0=3,Sd={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const r=this._virtualCount;return Math.max(0,r-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(r){r=this._clamp(r,0,this._maxVirtualStart),this._virtualStartVal=r},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(r){r%=this._physicalCount,r<0&&(r=this._physicalCount+r),this._physicalStartVal=r},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(r){this._physicalCountVal=r},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let r=this._firstVisibleIndexVal;if(r==null){let e=this._physicalTop+this._scrollOffset;r=this._iterateItems((t,i)=>{if(e+=this._getPhysicalSizeIncrement(t),e>this._scrollPosition)return i})||0,this._firstVisibleIndexVal=r}return r},get lastVisibleIndex(){let r=this._lastVisibleIndexVal;if(r==null){let e=this._physicalTop+this._scrollOffset;this._iterateItems((t,i)=>{e<this._scrollBottom&&(r=i),e+=this._getPhysicalSizeIncrement(t)}),this._lastVisibleIndexVal=r}return r},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const r=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let e=r-this._scrollPosition;const t=e>=0;if(this._scrollPosition=r,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e-=this._scrollOffset;const i=Math.round(e/this._physicalAverage);this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const i=this._getReusables(t);t?(this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length):(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length),this._update(i.indexes,t?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ft)}},_getReusables(r){let e,t,i;const a=[],n=this._hiddenContentSize*this._ratio,o=this._virtualStart,s=this._virtualEnd,l=this._physicalCount;let h=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,d=this._scrollPosition,_=this._scrollBottom;for(r?(e=this._physicalStart,t=d-h):(e=this._physicalEnd,t=c-_);i=this._getPhysicalSizeIncrement(e),t-=i,!(a.length>=l||t<=n);)if(r){if(s+a.length+1>=this._virtualCount||h+i>=d-this._scrollOffset)break;a.push(e),h+=i,e=(e+1)%l}else{if(o-a.length<=0||h+this._physicalSize-i<=_)break;a.push(e),h-=i,e=e===0?l-1:e-1}return{indexes:a,physicalTop:h-this._scrollOffset}},_update(r,e){if(!(r&&r.length===0||this._physicalCount===0)){if(this._assignModels(r),this._updateMetrics(r),e)for(;e.length;){const t=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(t)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(r){const t=this._clamp(this._physicalCount+r,U0,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(this._physicalCount*.5);if(!(t<0)){if(t>0){const a=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let n=0;n<t;n++)this._physicalSizes.push(0);this._physicalCount+=t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=t),this._update(),this._templateCost=(window.performance.now()-a)/t,i=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||i===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),M1):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),Ft))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const r=this._getReusables(!0);this._physicalTop=r.physicalTop,this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length,this._update(r.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(U0))},_itemsChanged(r){r.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Lt))},_iterateItems(r,e){let t,i,a,n;if(arguments.length===2&&e){for(n=0;n<e.length;n++)if(t=e[n],i=this._computeVidx(t),(a=r.call(this,t,i))!=null)return a}else{for(t=this._physicalStart,i=this._virtualStart;t<this._physicalCount;t++,i++)if((a=r.call(this,t,i))!=null)return a;for(t=0;t<this._physicalStart;t++,i++)if((a=r.call(this,t,i))!=null)return a}},_computeVidx(r){return r>=this._physicalStart?this._virtualStart+(r-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+r},_updateMetrics(r){Ae();let e=0,t=0;const i=this._physicalAverageCount,a=this._physicalAverage;this._iterateItems((n,o)=>{t+=this._physicalSizes[n],this._physicalSizes[n]=this._physicalItems[n].offsetHeight,e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},r),this._physicalSize=this._physicalSize+e-t,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((a*i+e)/this._physicalAverageCount))},_positionItems(){this._adjustScrollPosition();let r=this._physicalTop;this._iterateItems(e=>{this.translate3d(0,`${r}px`,0,this._physicalItems[e]),r+=this._physicalSizes[e]})},_getPhysicalSizeIncrement(r){return this._physicalSizes[r]},_adjustScrollPosition(){const r=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(r!==0){this._physicalTop-=r;const e=this._scrollPosition;!Pd&&e>0&&this._resetScrollPosition(e-r)}},_resetScrollPosition(r){this.scrollTarget&&r>=0&&(this._scrollTop=r,this._scrollPosition=this._scrollTop)},_updateScrollerSize(r){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,r=r||this._scrollHeight===0,r=r||this._scrollPosition>=this._estScrollHeight-this._physicalSize,(r||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(r){if(typeof r!="number"||r<0||r>this.items.length-1||(Ae(),this._physicalCount===0))return;r=this._clamp(r,0,this._virtualCount-1),(!this._isIndexRendered(r)||r>=this._maxVirtualStart)&&(this._virtualStart=r-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let e=this._physicalStart,t=this._virtualStart,i=0;const a=this._hiddenContentSize;for(;t<r&&i<=a;)i+=this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,t+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Lt)},_isIndexRendered(r){return r>=this._virtualStart&&r<=this._virtualEnd},_getPhysicalIndex(r){return(this._physicalStart+(r-this._virtualStart))%this._physicalCount},_clamp(r,e,t){return Math.min(t,Math.max(e,r))},_debounce(r,e,t){this._debouncers=this._debouncers||{},this._debouncers[r]=L.debounce(this._debouncers[r],t,e.bind(this)),P1(this._debouncers[r])}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Id=1e5,Vr=1e3;class q1{constructor({createElements:e,updateElement:t,scrollTarget:i,scrollContainer:a,elementsContainer:n,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=e,this.updateElement=t,this.scrollTarget=i,this.scrollContainer=a,this.elementsContainer=n||a,this.reorderElements=o,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",s=>this.__onWheel(s)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(e){if(typeof e!="number"||isNaN(e)||this.size===0||!this.scrollTarget.offsetHeight)return;e=this._clamp(e,0,this.size-1);const t=this.__getVisibleElements().length;let i=Math.floor(e/this.size*this._virtualCount);this._virtualCount-i<t?(i=this._virtualCount-(this.size-e),this._vidxOffset=this.size-this._virtualCount):i<t?e<Vr?(i=e,this._vidxOffset=0):(i=Vr,this._vidxOffset=e-i):this._vidxOffset=e-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler()}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),Ae(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(e=0,t=this.size-1){this.__getVisibleElements().forEach(i=>{i.__virtualIndex>=e&&i.__virtualIndex<=t&&this.__updateElement(i,i.__virtualIndex,!0)})}__updateElement(e,t,i){e.style.paddingTop&&(e.style.paddingTop=""),!this.__preventElementUpdates&&(e.__lastUpdatedIndex!==t||i)&&(this.updateElement(e,t),e.__lastUpdatedIndex=t);const a=e.offsetHeight;if(a===0)e.style.paddingTop=`${this.__placeholderHeight}px`,requestAnimationFrame(()=>this._resizeHandler());else{this.__elementHeightQueue.push(a),this.__elementHeightQueue.shift();const n=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(n.reduce((o,s)=>o+s,0)/n.length)}}__getIndexScrollOffset(e){const t=this.__getVisibleElements().find(i=>i.__virtualIndex===e);return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(e){if(e===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let t,i;if(e>0&&(t=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(t)),this.__size=e,this._itemsChanged({path:"items"}),Ae(),e>0){t=Math.min(t,e-1),this.scrollToIndex(t);const a=this.__getIndexScrollOffset(t);i!==void 0&&a!==void 0&&(this._scrollTop+=i-a)}this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this.__preventElementUpdates=!1,this._resizeHandler(),Ae()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,Id)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean(e.direction==="rtl"),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){const t=this.createElements(e),i=document.createDocumentFragment();return t.forEach(a=>{a.style.position="absolute",i.appendChild(a),this.__resizeObserver.observe(a)}),this.elementsContainer.appendChild(i),t}_assignModels(e){this._iterateItems((t,i)=>{const a=this._physicalItems[t];a.hidden=i>=this.size,a.hidden?delete a.__lastUpdatedIndex:(a.__virtualIndex=i+(this._vidxOffset||0),this.__updateElement(a,a.__virtualIndex))},e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(e,t,i,a){a.style.transform=`translateY(${t})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const e=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const t=e>=0,i=this._getReusables(!t);i.indexes.length&&(this._physicalTop=i.physicalTop,t?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}e&&(this.__fixInvalidItemPositioningDebouncer=L.debounce(this.__fixInvalidItemPositioningDebouncer,lt.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=L.debounce(this.__scrollReorderDebouncer,lt.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(e)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const e=this._physicalTop>this._scrollTop,t=this._physicalBottom<this._scrollBottom,i=this.adjustedFirstVisibleIndex===0,a=this.adjustedLastVisibleIndex===this.size-1;if(e&&!i||t&&!a){const n=t,o=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(n?-1:1),this._scrollHandler(),this._ratio=o}}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let t=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame){this._deltaYAcc+=t,e.preventDefault();return}t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=L.debounce(this.__debouncerWheelAnimationFrame,Lt,()=>{this._wheelAnimationFrame=!1});const i=Math.abs(e.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,e.deltaX,t)?(e.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=L.debounce(this._debouncerIgnoreNewWheel,lt.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(e,t,i){if(e===this.scrollTarget||e===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(e,t,i)&&["auto","scroll"].indexOf(getComputedStyle(e).overflow)!==-1)return!0;if(e!==this&&e.parentElement)return this._hasScrolledAncestor(e.parentElement,t,i)}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(e=>!e.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const e=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),a=t.find(s=>s.contains(this.elementsContainer.getRootNode().activeElement)||s.contains(this.scrollTarget.getRootNode().activeElement))||t[0];if(!a)return;const n=a.__virtualIndex-e,o=t.indexOf(a)-n;if(o>0)for(let s=0;s<o;s++)this.elementsContainer.appendChild(t[s]);else if(o<0)for(let s=t.length+o;s<t.length;s++)this.elementsContainer.insertBefore(t[s],t[0]);if(j1){const{transform:s}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=s})}}_adjustVirtualIndexOffset(e){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(e)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),i=t*this.size;this._vidxOffset=Math.round(i-t*this._virtualCount)}else{const t=this._vidxOffset,i=Vr,a=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<i&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,a),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset)));const n=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=n,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-i&&this._vidxOffset<n&&(this._vidxOffset+=Math.min(n-this._vidxOffset,a),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(q1.prototype,Sd);class kd{constructor(e){this.__adapter=new q1(e)}get size(){return this.__adapter.size}set size(e){this.__adapter.size=e}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(e=0,t=this.size-1){this.__adapter.update(e,t)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dd=r=>class extends r{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(t){return t.filter(i=>i.some(a=>a.headerRenderer||a.path||a.header)).length}_a11yGetFooterRowCount(t){return t.filter(i=>i.some(a=>a.headerRenderer)).length}_a11yUpdateGridSize(t,i){if(t===void 0||i===void 0)return;const a=i[i.length-1];this.$.table.setAttribute("aria-rowcount",t+this._a11yGetHeaderRowCount(i)+this._a11yGetFooterRowCount(i)),this.$.table.setAttribute("aria-colcount",a&&a.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((t,i)=>t.setAttribute("aria-rowindex",i+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((t,i)=>t.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1))}_a11yUpdateRowRowindex(t,i){t.setAttribute("aria-rowindex",i+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(t,i){t.setAttribute("aria-selected",Boolean(i)),Array.from(t.children).forEach(a=>a.setAttribute("aria-selected",Boolean(i)))}_a11yUpdateRowExpanded(t){this.__isRowExpandable(t)?t.setAttribute("aria-expanded","false"):this.__isRowCollapsible(t)?t.setAttribute("aria-expanded","true"):t.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(t,i){i>0||this.__isRowCollapsible(t)||this.__isRowExpandable(t)?t.setAttribute("aria-level",i+1):t.removeAttribute("aria-level")}_a11ySetRowDetailsCell(t,i){Array.from(t.children).forEach(a=>{a!==i&&a.setAttribute("aria-controls",i.id)})}_a11yUpdateCellColspan(t,i){t.setAttribute("aria-colspan",Number(i))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(t=>{let i=t.parentNode;for(;i&&i.localName!=="vaadin-grid-cell-content";)i=i.parentNode;i&&i.assignedSlot&&i.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(t.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rd=r=>class extends r{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(t){const i=t.detail.model,a=i?i.item:null;a&&(this.activeItem=this._itemsEqual(this.activeItem,a)?null:a)}_onClick(t){if(t.defaultPrevented)return;const i=t.composedPath(),a=i[i.indexOf(this.$.table)-3];if(!a||a.getAttribute("part").indexOf("details-cell")>-1)return;const n=a._content,o=this.getRootNode().activeElement;!n.contains(o)&&!this._isFocusable(t.target)&&!(t.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(a.parentElement)}}))}_isFocusable(t){return G1(t)}},G1=r=>{if(!r.parentNode)return!1;const t=Array.from(r.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(i=>{const a=i.getAttribute("part");return!(a&&a.includes("body-cell"))}).includes(r);return!r.disabled&&t&&r.offsetParent&&getComputedStyle(r).visibility!=="hidden"};function qt(r,e){return r.split(".").reduce((t,i)=>t[i],e)}function W0(r,e,t){if(t.length===0)return!1;let i=!0;return r.forEach(({path:a})=>{if(!a||a.indexOf(".")===-1)return;const n=a.replace(/\.[^.]*$/,"");qt(n,t[0])===void 0&&(console.warn(`Path "${a}" used for ${e} does not exist in all of the items, ${e} is disabled.`),i=!1)}),i}function $d(r,e){return r.sort((t,i)=>e.map(a=>a.direction==="asc"?j0(qt(a.path,t),qt(a.path,i)):a.direction==="desc"?j0(qt(a.path,i),qt(a.path,t)):0).reduce((a,n)=>a!==0?a:n,0))}function $i(r){return[void 0,null].indexOf(r)>=0?"":isNaN(r)?r.toString():r}function j0(r,e){return r=$i(r),e=$i(e),r<e?-1:r>e?1:0}function Ld(r,e){return r.filter(t=>e.every(i=>{const a=$i(qt(i.path,t)),n=$i(i.value).toString().toLowerCase();return a.toString().toLowerCase().includes(n)}))}const Fd=r=>(e,t)=>{let i=r?[...r]:[];e.filters&&W0(e.filters,"filtering",i)&&(i=Ld(i,e.filters)),Array.isArray(e.sortOrders)&&e.sortOrders.length&&W0(e.sortOrders,"sorting",i)&&(i=$d(i,e.sortOrders));const a=Math.min(i.length,e.pageSize),n=e.page*a,o=n+a,s=i.slice(n,o);t(s,i.length)};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nd=r=>class extends r{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(t){const i=Fd(this.items);i.__items=t,this.setProperties({_arrayDataProvider:i,size:t.length,dataProvider:i})}__dataProviderOrItemsChanged(t,i,a){!a||(this._arrayDataProvider?t!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):i?this._arrayDataProvider.__items===i?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(i):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):i&&this.__setArrayDataProvider(i))}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Q1(r,e,t){let i=1;r.forEach(a=>{i%10===0&&(i+=1),a._order=t+i*e,i+=1})}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bd=r=>class extends r{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),at(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(t){this.hasAttribute("reordering")&&t.preventDefault()}_onTouchStart(t){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:t.touches[0].clientX,y:t.touches[0].clientY}})},100)}_onTouchMove(t){this._draggedColumn&&t.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(t){if(t.detail.state==="start"){const i=t.composedPath(),a=i[i.indexOf(this.$.header)-2];if(!a||!a._content||a._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(t)}else t.detail.state==="track"?this._onTrack(t):t.detail.state==="end"&&this._onTrackEnd(t)}_onTrackStart(t){if(!this.columnReorderingAllowed)return;const i=t.composedPath&&t.composedPath();if(i&&i.some(n=>n.hasAttribute&&n.hasAttribute("draggable")))return;const a=this._cellFromPoint(t.detail.x,t.detail.y);if(!(!a||!a.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=a._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(a),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._autoScroller()}}_onTrack(t){if(!this._draggedColumn)return;const i=this._cellFromPoint(t.detail.x,t.detail.y);if(!i)return;const a=this._getTargetColumn(i,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,a)&&this._isSwappableByPosition(a,t.detail.x)){const n=this._columnTree.findIndex(c=>c.includes(a)),o=this._getColumnsInOrder(n),s=o.indexOf(this._draggedColumn),l=o.indexOf(a),h=s<l?1:-1;for(let c=s;c!==l;c+=h)this._swapColumnOrders(this._draggedColumn,o[c+h])}this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._lastDragClientX=t.detail.x}_onTrackEnd(){!this._draggedColumn||(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(t=this._columnTree.length-1){return this._columnTree[t].filter(i=>!i.hidden).sort((i,a)=>i._order-a._order)}_cellFromPoint(t,i){t=t||0,i=i||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const a=this.shadowRoot.elementFromPoint(t,i);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),a&&a._column)return a}_updateGhostPosition(t,i){const a=this._reorderGhost.getBoundingClientRect(),n=t-a.width/2,o=i-a.height/2,s=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=s-(a.left-n),this._reorderGhost._top=l-(a.top-o),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(t){const i=this._reorderGhost;i.textContent=t._content.innerText;const a=window.getComputedStyle(t);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(n=>{i.style[n]=a[n]}),i}_updateOrders(t){t!==void 0&&(t[0].forEach(i=>{i._order=0}),Q1(t[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(t,i){Array.from(t.parentNode.children).filter(a=>/column/.test(a.localName)&&this._isSwapAllowed(a,t)).forEach(a=>{a._reorderStatus=i})}_autoScroller(){if(this._lastDragClientX){const t=this._lastDragClientX-this.getBoundingClientRect().right+50,i=this.getBoundingClientRect().left-this._lastDragClientX+50;t>0?this.$.table.scrollLeft+=t/10:i>0&&(this.$.table.scrollLeft-=i/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(t,i){if(t&&i){const a=t!==i,n=t.parentElement===i.parentElement,o=t.frozen&&i.frozen||t.frozenToEnd&&i.frozenToEnd||!t.frozen&&!t.frozenToEnd&&!i.frozen&&!i.frozenToEnd;return a&&n&&o}}_isSwappableByPosition(t,i){const a=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(s=>t.contains(s._column)),n=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),o=a.getBoundingClientRect();return o.left>n.left?i>o.right-n.width:i<o.left+n.width}_swapColumnOrders(t,i){[t._order,i._order]=[i._order,t._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(t,i){if(t&&i){let a=t._column;for(;a.parentElement!==i.parentElement&&a!==this;)a=a.parentElement;return a.parentElement===i.parentElement?a:t._column}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hd=r=>class extends r{ready(){super.ready();const t=this.$.scroller;at(t,"track",this._onHeaderTrack.bind(this)),t.addEventListener("touchmove",i=>t.hasAttribute("column-resizing")&&i.preventDefault()),t.addEventListener("contextmenu",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault()),t.addEventListener("mousedown",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault())}_onHeaderTrack(t){const i=t.target;if(i.getAttribute("part")==="resize-handle"){let n=i.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);n.localName==="vaadin-grid-column-group";)n=n._childColumns.slice(0).sort((c,d)=>c._order-d._order).filter(c=>!c.hidden).pop();const o=t.detail.x,s=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),l=s.find(c=>c._column===n);if(l.offsetWidth){const c=getComputedStyle(l._content),d=10+parseInt(c.paddingLeft)+parseInt(c.paddingRight)+parseInt(c.borderLeftWidth)+parseInt(c.borderRightWidth)+parseInt(c.marginLeft)+parseInt(c.marginRight);let _;const m=l.offsetWidth,y=l.getBoundingClientRect();l.hasAttribute("frozen-to-end")?_=m+(this.__isRTL?o-y.right:y.left-o):_=m+(this.__isRTL?y.left-o:o-y.right),n.width=`${Math.max(d,_)}px`,n.flexGrow=0}s.sort((c,d)=>c._column._order-d._column._order).forEach((c,d,_)=>{d<_.indexOf(l)&&(c._column.width=`${c.offsetWidth}px`,c._column.flexGrow=0)});const h=this._frozenToEndCells[0];if(h&&this.$.table.scrollWidth>this.$.table.offsetWidth){const c=h.getBoundingClientRect(),d=o-(this.__isRTL?c.right:c.left);(this.__isRTL&&d<=0||!this.__isRTL&&d>=0)&&(this.$.table.scrollLeft+=d)}t.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:n}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dt=class K1{constructor(e,t,i){this.grid=e,this.parentCache=t,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])}getItemForIndex(e){const{cache:t,scaledIndex:i}=this.getCacheAndIndex(e);return t.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((e,t)=>{const i=this.itemCaches[t];return i.updateSize(),e+i.effectiveSize},0):0}ensureSubCacheForScaledIndex(e){if(!this.itemCaches[e]){const t=new K1(this.grid,this,this.items[e]);this.itemCaches[e]=t,this.grid._loadPage(0,t)}}getCacheAndIndex(e){let t=e;const i=Object.keys(this.itemCaches);for(let a=0;a<i.length;a++){const n=Number(i[a]),o=this.itemCaches[n];if(t<=n)return{cache:this,scaledIndex:t};if(t<=n+o.effectiveSize)return o.getCacheAndIndex(t-n-1);t-=o.effectiveSize}return{cache:this,scaledIndex:t}}},Vd=r=>class extends r{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new dt(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(t){const i=t-this._cache.size;this._cache.size+=i,this._cache.effectiveSize+=i,this._effectiveSize=this._cache.effectiveSize}_getItem(t,i){if(t>=this._effectiveSize)return;i.index=t;const{cache:a,scaledIndex:n}=this._cache.getCacheAndIndex(t),o=a.items[n];o?(i.toggleAttribute("loading",!1),this._updateItem(i,o),this._isExpanded(o)&&a.ensureSubCacheForScaledIndex(n)):(i.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(n),a))}getItemId(t){return this.itemIdPath?this.get(this.itemIdPath,t):t}_isExpanded(t){return this.__expandedKeys.has(this.getItemId(t))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(t,i){const a=i.base||[],n=new Set;return a.forEach(o=>{n.add(this.getItemId(o))}),n}expandItem(t){this._isExpanded(t)||(this.expandedItems=[...this.expandedItems,t])}collapseItem(t){this._isExpanded(t)&&(this.expandedItems=this.expandedItems.filter(i=>!this._itemsEqual(i,t)))}_getIndexLevel(t){let{cache:i}=this._cache.getCacheAndIndex(t),a=0;for(;i.parentCache;)i=i.parentCache,a+=1;return a}_loadPage(t,i){if(!i.pendingRequests[t]&&this.dataProvider){this._setLoading(!0),i.pendingRequests[t]=!0;const a={page:t,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:i.parentItem};this.dataProvider(a,(n,o)=>{o!==void 0?i.size=o:a.parentItem&&(i.size=n.length);const s=Array.from(this.$.items.children).map(l=>l._item);n.forEach((l,h)=>{const c=t*this.pageSize+h;i.items[c]=l,this._isExpanded(l)&&s.indexOf(l)>-1&&i.ensureSubCacheForScaledIndex(c)}),this._hasData=!0,delete i.pendingRequests[t],this._debouncerApplyCachedData=L.debounce(this._debouncerApplyCachedData,lt.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(l=>!l.hidden).forEach(l=>{this._cache.getItemForIndex(l.index)&&this._getItem(l.index,l)}),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()})}}_getPageForIndex(t){return Math.floor(t/this.pageSize)}clearCache(){this._cache=new dt(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(t,i){i!==void 0&&t!==i&&this.clearCache()}_checkSize(){this.size===void 0&&this._effectiveSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`\u2019s `callback` call.")}_dataProviderChanged(t,i){i!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=L.debounce(this._debouncerCheckSize,lt.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(t,i){return this.getItemId(t)===this.getItemId(i)}_getItemIndexInArray(t,i){let a=-1;return i.forEach((n,o)=>{this._itemsEqual(n,t)&&(a=o)}),a}scrollToIndex(t){super.scrollToIndex(t),!isNaN(t)&&(this._cache.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndex=t)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const t=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(t)}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pe={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},Ot={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Yd=!("draggable"in document.createElement("div")),Ud=r=>class extends r{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",t=>{this.dropMode&&(t.preventDefault(),t.stopPropagation())})}_onDragStart(t){if(this.rowsDraggable){let i=t.target;if(i.localName==="vaadin-grid-cell-content"&&(i=i.assignedSlot.parentNode.parentNode),i.parentNode!==this.$.items)return;if(t.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const s=i.style.transform;i.style.top=/translateY\((.*)\)/.exec(s)[1],i.style.transform="none",requestAnimationFrame(()=>{i.style.top="",i.style.transform=s})}const a=i.getBoundingClientRect();Yd?t.dataTransfer.setDragImage(i):t.dataTransfer.setDragImage(i,t.clientX-a.left,t.clientY-a.top);let n=[i];this._isSelected(i._item)&&(n=this.__getViewportRows().filter(s=>this._isSelected(s._item)).filter(s=>!this.dragFilter||this.dragFilter(this.__getRowModel(s)))),t.dataTransfer.setData("text",this.__formatDefaultTransferData(n)),i.setAttribute("dragstart",n.length>1?n.length:""),this.style.setProperty("--_grid-drag-start-x",`${t.clientX-a.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${t.clientY-a.top+10}px`),requestAnimationFrame(()=>{i.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const o=new CustomEvent("grid-dragstart",{detail:{draggedItems:n.map(s=>s._item),setDragData:(s,l)=>t.dataTransfer.setData(s,l),setDraggedItemsCount:s=>i.setAttribute("dragstart",s)}});o.originalEvent=t,this.dispatchEvent(o)}}_onDragEnd(t){this.toggleAttribute("dragging-rows",!1),t.stopPropagation();const i=new CustomEvent("grid-dragend");i.originalEvent=t,this.dispatchEvent(i)}_onDragLeave(t){t.stopPropagation(),this._clearDragStyles()}_onDragOver(t){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(t.clientY)){this._clearDragStyles();return}let i=t.composedPath().find(a=>a.localName==="tr");if(!this._effectiveSize||this.dropMode===pe.ON_GRID)this._dropLocation=Ot.EMPTY;else if(!i||i.parentNode!==this.$.items){if(i)return;if(this.dropMode===pe.BETWEEN||this.dropMode===pe.ON_TOP_OR_BETWEEN)i=Array.from(this.$.items.children).filter(a=>!a.hidden).pop(),this._dropLocation=Ot.BELOW;else return}else{const a=i.getBoundingClientRect();if(this._dropLocation=Ot.ON_TOP,this.dropMode===pe.BETWEEN){const n=t.clientY-a.top<a.bottom-t.clientY;this._dropLocation=n?Ot.ABOVE:Ot.BELOW}else this.dropMode===pe.ON_TOP_OR_BETWEEN&&(t.clientY-a.top<a.height/3?this._dropLocation=Ot.ABOVE:t.clientY-a.top>a.height/3*2&&(this._dropLocation=Ot.BELOW))}if(i&&i.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}t.stopPropagation(),t.preventDefault(),this._dropLocation===Ot.EMPTY?this.toggleAttribute("dragover",!0):i?(this._dragOverItem=i._item,i.getAttribute("dragover")!==this._dropLocation&&i.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(t){if(this.__dndAutoScrolling)return!0;const i=this.$.header.getBoundingClientRect().bottom,a=this.$.footer.getBoundingClientRect().top,n=i-t+this.__dndAutoScrollThreshold,o=t-a+this.__dndAutoScrollThreshold;let s=0;if(o>0?s=o*2:n>0&&(s=-n*2),s){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=s,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(a=>{const n=a.getBoundingClientRect();return n.bottom>t&&n.top<i})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(t=>t.removeAttribute("dragover"))}_onDrop(t){if(this.dropMode){t.stopPropagation(),t.preventDefault();const i=t.dataTransfer.types&&Array.from(t.dataTransfer.types).map(n=>({type:n,data:t.dataTransfer.getData(n)}));this._clearDragStyles();const a=new CustomEvent("grid-drop",{bubbles:t.bubbles,cancelable:t.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:i}});a.originalEvent=t,this.dispatchEvent(a)}}__formatDefaultTransferData(t){return t.map(i=>Array.from(i.children).filter(a=>!a.hidden&&a.getAttribute("part").indexOf("details-cell")===-1).sort((a,n)=>a._column._order>n._column._order?1:-1).map(a=>a._content.textContent.trim()).filter(a=>a).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(t=>!t.hidden).forEach(t=>{this._filterDragAndDrop(t,this.__getRowModel(t))})}_filterDragAndDrop(t,i){const a=this.loading||t.hasAttribute("loading"),n=!this.rowsDraggable||a||this.dragFilter&&!this.dragFilter(i),o=!this.dropMode||a||this.dropFilter&&!this.dropFilter(i);Array.from(t.children).map(l=>l._content).forEach(l=>{n?l.removeAttribute("draggable"):l.setAttribute("draggable",!0)}),t.toggleAttribute("drag-disabled",!!n),t.toggleAttribute("drop-disabled",!!o)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function X1(r,e){if(!r||!e||r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]instanceof Array&&e[t]instanceof Array){if(!X1(r[t],e[t]))return!1}else if(r[t]!==e[t])return!1;return!0}const Wd=r=>class extends r{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(t){for(let i=0;i<t.length;i++)if(t[i].localName==="vaadin-grid-column-group")return!0;return!1}_getChildColumns(t){return ut.getFlattenedNodes(t).filter(this._isColumnElement)}_flattenColumnGroups(t){return t.map(i=>i.localName==="vaadin-grid-column-group"?this._getChildColumns(i):[i]).reduce((i,a)=>i.concat(a),[])}_getColumnTree(){const t=ut.getFlattenedNodes(this).filter(this._isColumnElement),i=[t];let a=t;for(;this._hasColumnGroups(a);)a=this._flattenColumnGroups(a),i.push(a);return i}_updateColumnTree(){const t=this._getColumnTree();X1(t,this._columnTree)||(this._columnTree=t)}_addNodeObserver(){this._observer=new ut(this,t=>{const i=a=>a.filter(this._isColumnElement).length>0;if(i(t.addedNodes)||i(t.removedNodes)){const a=t.removedNodes.flatMap(o=>o._allCells),n=o=>a.filter(s=>s._content.contains(o)).length;this.__removeSorters(this._sorters.filter(n)),this.__removeFilters(this._filters.filter(n)),this._updateColumnTree()}this._debouncerCheckImports=L.debounce(this._debouncerCheckImports,lt.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(t=>{const i=this.querySelector(t);i&&!(i instanceof O)&&console.warn(`Make sure you have imported the required module for <${t}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(t=>this._updateFirstAndLastColumnForRow(t))}_updateFirstAndLastColumnForRow(t){Array.from(t.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((i,a)=>i._column._order-a._column._order).forEach((i,a,n)=>{i.toggleAttribute("first-column",a===0),i.toggleAttribute("last-column",a===n.length-1)})}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(t.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jd=r=>class extends r{getEventContext(t){const i={},a=t.__composedPath||t.composedPath(),n=a[a.indexOf(this.$.table)-3];return n&&(i.section=["body","header","footer","details"].find(o=>n.getAttribute("part").indexOf(o)>-1),n._column&&(i.column=n._column),(i.section==="body"||i.section==="details")&&Object.assign(i,this.__getRowModel(n.parentElement))),i}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qd=r=>class extends r{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(t){t.stopPropagation(),this.__addFilter(t.target),this.__applyFilters()}__removeFilters(t){t.length!==0&&(this._filters=this._filters.filter(i=>t.indexOf(i)<0),this.__applyFilters())}__addFilter(t){this._filters.indexOf(t)===-1&&this._filters.push(t)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(t=>({path:t.path,value:t.value}))}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Gd(r){const e=[];for(;r;){if(r.nodeType===Node.DOCUMENT_NODE){e.push(r);break}if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(r),r=r.host;continue}if(r.assignedSlot){r=r.assignedSlot;continue}r=r.parentNode}return e}function Z1(r){return r?new Set(r.split(" ")):new Set}function J1(r){return[...r].join(" ")}function Qn(r,e,t){const i=Z1(r.getAttribute(e));i.add(t),r.setAttribute(e,J1(i))}function Kn(r,e,t){const i=Z1(r.getAttribute(e));if(i.delete(t),i.size===0){r.removeAttribute(e);return}r.setAttribute(e,J1(i))}function S4(r){return r.nodeType===Node.TEXT_NODE&&r.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qd=r=>class extends r{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(t){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(i=>{const a=this[i];if(t){const n=a&&a.parentElement;this.__isCell(a)?this[i]=n:this.__isCell(n)&&(this[i]=n.parentElement)}else if(!t&&this.__isRow(a)){const n=a.firstElementChild;this[i]=n._focusButton||n}})}_focusableChanged(t,i){i&&i.setAttribute("tabindex","-1"),t&&this._updateGridSectionFocusTarget(t)}_focusedCellChanged(t,i){i&&Kn(i,"part","focused-cell"),t&&Qn(t,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const t=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach(i=>{if(i.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=i;else{let a=this._itemsFocusable.parentElement,n=this._itemsFocusable;if(a){this.__isCell(a)&&(n=a,a=a.parentElement);const o=[...a.children].indexOf(n);this._itemsFocusable=this.__getFocusable(i,i.children[o])}}}),t&&this._itemsFocusable.focus()}_onKeyDown(t){const i=t.key;let a;switch(i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":a="Navigation";break;case"Enter":case"Escape":case"F2":a="Interaction";break;case"Tab":a="Tab";break;case" ":a="Space";break}this._detectInteracting(t),this.interacting&&a!=="Interaction"&&(a=void 0),a&&this[`_on${a}KeyDown`](t,i)}_ensureScrolledToIndex(t){[...this.$.items.children].find(a=>a.index===t)?this.__scrollIntoViewport(t):this.scrollToIndex(t)}__isRowExpandable(t){if(this.itemHasChildrenPath){const i=t._item;return i&&this.get(this.itemHasChildrenPath,i)&&!this._isExpanded(i)}}__isRowCollapsible(t){return this._isExpanded(t._item)}__isDetailsCell(t){return t.matches('[part~="details-cell"]')}__isCell(t){return t instanceof HTMLTableCellElement}__isRow(t){return t instanceof HTMLTableRowElement}__getIndexOfChildElement(t){return Array.prototype.indexOf.call(t.parentNode.children,t)}_onNavigationKeyDown(t,i){t.preventDefault();const a=this._lastVisibleIndex-this._firstVisibleIndex-1;let n=0,o=0;switch(i){case"ArrowRight":n=this.__isRTL?-1:1;break;case"ArrowLeft":n=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||t.ctrlKey?o=-1/0:n=-1/0;break;case"End":this.__rowFocusMode||t.ctrlKey?o=1/0:n=1/0;break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=a;break;case"PageUp":o=-a;break}const s=t.composedPath().find(d=>this.__isRow(d)),l=t.composedPath().find(d=>this.__isCell(d));if(this.__rowFocusMode&&!s||!this.__rowFocusMode&&!l)return;const h=this.__isRTL?"ArrowLeft":"ArrowRight",c=this.__isRTL?"ArrowRight":"ArrowLeft";if(i===h){if(this.__rowFocusMode){if(this.__isRowExpandable(s)){this.expandItem(s._item);return}this.__rowFocusMode=!1,this._onCellNavigation(s.firstElementChild,0,0);return}}else if(i===c)if(this.__rowFocusMode){if(this.__isRowCollapsible(s)){this.collapseItem(s._item);return}}else{const d=[...s.children].sort((_,m)=>_._order-m._order);if(l===d[0]||this.__isDetailsCell(l)){this.__rowFocusMode=!0,this._onRowNavigation(s,0);return}}this.__rowFocusMode?this._onRowNavigation(s,o):this._onCellNavigation(l,n,o)}_onRowNavigation(t,i){const{dstRow:a}=this.__navigateRows(i,t);a&&a.focus()}__getIndexInGroup(t,i){return t.parentNode===this.$.items?i!==void 0?i:t.index:this.__getIndexOfChildElement(t)}__navigateRows(t,i,a){const n=this.__getIndexInGroup(i,this._focusedItemIndex),o=i.parentNode,s=(o===this.$.items?this._effectiveSize:o.children.length)-1;let l=Math.max(0,Math.min(n+t,s));if(o!==this.$.items){if(l>n)for(;l<s&&o.children[l].hidden;)l+=1;else if(l<n)for(;l>0&&o.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:o.children[l]}}let h=!1;if(a){const c=this.__isDetailsCell(a);if(o===this.$.items){const d=i._item,_=this._cache.getItemForIndex(l);c?h=t===0:h=t===1&&this._isDetailsOpened(d)||t===-1&&l!==n&&this._isDetailsOpened(_),h!==c&&(t===1&&h||t===-1&&!h)&&(l=n)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...o.children].find(c=>!c.hidden&&c.index===l),dstIsRowDetails:h}}_onCellNavigation(t,i,a){const n=t.parentNode,{dstRow:o,dstIsRowDetails:s}=this.__navigateRows(a,n,t);if(!o)return;const l=this.__getIndexOfChildElement(t),h=this.__isDetailsCell(t),c=n.parentNode,d=this.__getIndexInGroup(n,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(h?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,d).filter(_=>!_.hidden)[l]._order),s)[...o.children].find(m=>this.__isDetailsCell(m)).focus();else{const _=this.__getIndexInGroup(o,this._focusedItemIndex),m=this._getColumns(c,_).filter(W=>!W.hidden),y=m.map(W=>W._order).sort((W,N)=>W-N),C=y.length-1,b=y.indexOf(y.slice(0).sort((W,N)=>Math.abs(W-this._focusedColumnOrder)-Math.abs(N-this._focusedColumnOrder))[0]),x=a===0&&h?b:Math.max(0,Math.min(b+i,C));x!==b&&(this._focusedColumnOrder=void 0);const $=m.reduce((W,N,et)=>(W[N._order]=et,W),{})[y[x]],J=o.children[$];this._scrollHorizontallyToCell(J),J.focus()}}_onInteractionKeyDown(t,i){const a=t.composedPath()[0],n=a.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(a.type);let o;switch(i){case"Enter":o=this.interacting?!n:!0;break;case"Escape":o=!1;break;case"F2":o=!this.interacting;break}const{cell:s}=this._getGridEventLocation(t);if(this.interacting!==o&&s!==null)if(o){const l=s._content.querySelector("[focus-target]")||[...s._content.querySelectorAll("*")].find(h=>this._isFocusable(h));l&&(t.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else t.preventDefault(),this._focusedColumnOrder=void 0,s.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);i==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(t,i){const a=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let n=a.indexOf(t);for(n+=i;n>=0&&n<=a.length-1;){let o=a[n];if(o&&!this.__rowFocusMode&&(o=a[n].parentNode),!o||o.hidden)n+=i;else break}return a[n]}_onTabKeyDown(t){const i=this._predictFocusStepTarget(t.composedPath()[0],t.shiftKey?-1:1);if(!!i){if(t.stopPropagation(),i===this.$.table)this.$.table.focus();else if(i===this.$.focusexit)this.$.focusexit.focus();else if(i===this._itemsFocusable){let a=i;const n=this.__isRow(i)?i:i.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),n.index!==this._focusedItemIndex&&this.__isCell(i)){const o=Array.from(n.children).indexOf(this._itemsFocusable),s=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);s&&(a=s.children[o])}t.preventDefault(),a.focus()}else t.preventDefault(),i.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(t){t.preventDefault();const i=t.composedPath()[0],a=this.__isRow(i);(a||!i._content||!i._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(a?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(a?i:i.parentElement)}}))}_onKeyUp(t){if(!/^( |SpaceBar)$/.test(t.key)||this.interacting)return;t.preventDefault();const i=t.composedPath()[0];if(i._content&&i._content.firstElementChild){const a=this.hasAttribute("navigating");i._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:t.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",a)}}_onFocusIn(t){this._isMousedown||this.toggleAttribute("navigating",!0);const i=t.composedPath()[0];i===this.$.table||i===this.$.focusexit?(this._predictFocusStepTarget(i,i===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(t)}_onFocusOut(t){this.toggleAttribute("navigating",!1),this._detectInteracting(t),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(t){const{section:i,cell:a,row:n}=this._getGridEventLocation(t);if(!(!a&&!this.__rowFocusMode)){if(this._detectInteracting(t),i&&(a||n))if(this._activeRowGroup=i,this.$.header===i?this._headerFocusable=this.__getFocusable(n,a):this.$.items===i?this._itemsFocusable=this.__getFocusable(n,a):this.$.footer===i&&(this._footerFocusable=this.__getFocusable(n,a)),a){const o=this.getEventContext(t);a.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:o}})),this._focusedCell=a._focusButton||a,Wn()&&t.target===a&&this._showTooltip(t)}else this._focusedCell=null;this._detectFocusedItemIndex(t)}}__getFocusable(t,i){return this.__rowFocusMode?t:i._focusButton||i}_detectInteracting(t){const i=t.composedPath().some(a=>a.localName==="vaadin-grid-cell-content");this._setInteracting(i),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(t){const{section:i,row:a}=this._getGridEventLocation(t);i===this.$.items&&(this._focusedItemIndex=a.index)}_updateGridSectionFocusTarget(t){if(!t)return;const i=this._getGridSectionFromFocusTarget(t),a=this.interacting&&i===this._activeRowGroup;t.tabIndex=a?-1:0}_preventScrollerRotatingCellFocus(t,i){t.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),i===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(t,i){let a=this._columnTree.length-1;return t===this.$.header?a=i:t===this.$.footer&&(a=this._columnTree.length-1-i),this._columnTree[a]}__isValidFocusable(t){return this.$.table.contains(t)&&t.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach(t=>{if(!this.__isValidFocusable(this[`_${t}Focusable`])){const i=[...this.$[t].children].find(n=>n.offsetHeight),a=i?[...i.children].find(n=>!n.hidden):null;i&&a&&(this[`_${t}Focusable`]=this.__getFocusable(i,a))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const t=this.__getFirstVisibleItem(),i=t?[...t.children].find(a=>!a.hidden):null;i&&t&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(t,i))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(t){if(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end")||this.__isDetailsCell(t))return;const i=t.getBoundingClientRect(),a=t.parentNode,n=Array.from(a.children).indexOf(t),o=this.$.table.getBoundingClientRect();let s=o.left,l=o.right;for(let h=n-1;h>=0;h--){const c=a.children[h];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){s=c.getBoundingClientRect().right;break}}for(let h=n+1;h<a.children.length;h++){const c=a.children[h];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().left;break}}i.left<s&&(this.$.table.scrollLeft+=Math.round(i.left-s)),i.right>l&&(this.$.table.scrollLeft+=Math.round(i.right-l))}_getGridEventLocation(t){const i=t.composedPath(),a=i.indexOf(this.$.table),n=a>=1?i[a-1]:null,o=a>=2?i[a-2]:null,s=a>=3?i[a-3]:null;return{section:n,row:o,cell:s}}_getGridSectionFromFocusTarget(t){return t===this._headerFocusable?this.$.header:t===this._itemsFocusable?this.$.items:t===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kd=r=>class extends r{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(t=>{t.forEach(({target:i})=>{this._updateDetailsCellHeight(i.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(t){!t||this._columnTree&&Array.from(this.$.items.children).forEach(i=>{if(!i.querySelector("[part~=details-cell]")){this._updateRow(i,this._columnTree[this._columnTree.length-1]);const a=this._isDetailsOpened(i._item);this._toggleDetailsCell(i,a)}})}_detailsOpenedItemsChanged(t,i){t.path==="detailsOpenedItems.length"||!t.value||[...this.$.items.children].forEach(a=>{if(a.hasAttribute("details-opened")){this._updateItem(a,a._item);return}i&&this._isDetailsOpened(a._item)&&this._updateItem(a,a._item)})}_configureDetailsCell(t){t.setAttribute("part","cell details-cell"),t.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(t)}_toggleDetailsCell(t,i){const a=t.querySelector('[part~="details-cell"]');!a||(a.hidden=!i,!a.hidden&&this.rowDetailsRenderer&&(a._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(t){const i=t.querySelector('[part~="details-cell"]');!i||(i.hidden?t.style.removeProperty("padding-bottom"):t.style.setProperty("padding-bottom",`${i.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach(t=>{this._updateDetailsCellHeight(t)})}_isDetailsOpened(t){return this.detailsOpenedItems&&this._getItemIndexInArray(t,this.detailsOpenedItems)!==-1}openItemDetails(t){this._isDetailsOpened(t)||(this.detailsOpenedItems=[...this.detailsOpenedItems,t])}closeItemDetails(t){this._isDetailsOpened(t)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(i=>!this._itemsEqual(i,t)))}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ye=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(e=>{e.target.resizables?e.target.resizables.forEach(t=>{t._onResize(e.contentRect)}):e.target._onResize(e.contentRect)})})}),Xd=U(r=>class extends r{connectedCallback(){if(super.connectedCallback(),Ye.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,Ye.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),Ye.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const i=t.resizables;i&&(i.delete(this),i.size===0&&Ye.unobserve(t)),this.__parent=null}}get _observeParent(){return!1}_onResize(t){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zd={SCROLLING:500},Jd=r=>class extends Xd(r){static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(t){this.$.table.scrollTop=t}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",t=>{const i=t.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=t.composedPath()[i-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){this._updateOverflow(),this.__updateHorizontalScrollPosition()}scrollToIndex(t){t=Math.min(this._effectiveSize-1,Math.max(0,t)),this.__virtualizer.scrollToIndex(t),this.__scrollIntoViewport(t)}__scrollIntoViewport(t){const i=[...this.$.items.children].find(a=>a.index===t);if(i){const a=i.getBoundingClientRect(),n=this.$.footer.getBoundingClientRect().top,o=this.$.header.getBoundingClientRect().bottom;a.bottom>n?this.$.table.scrollTop+=a.bottom-n:a.top<o&&(this.$.table.scrollTop-=o-a.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=L.debounce(this._debounceScrolling,lt.after(Zd.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow()}_updateOverflow(){let t="";const i=this.$.table;i.scrollTop<i.scrollHeight-i.clientHeight&&(t+=" bottom"),i.scrollTop>0&&(t+=" top");const a=this.__getNormalizedScrollLeft(i);a>0&&(t+=" start"),a<i.scrollWidth-i.clientWidth&&(t+=" end"),this.__isRTL&&(t=t.replace(/start|end/gi,n=>n==="start"?"end":"start")),i.scrollLeft<i.scrollWidth-i.clientWidth&&(t+=" right"),i.scrollLeft>0&&(t+=" left"),this._debounceOverflow=L.debounce(this._debounceOverflow,Lt,()=>{const n=t.trim();n.length>0&&this.getAttribute("overflow")!==n?this.setAttribute("overflow",n):n.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_frozenCellsChanged(){this._debouncerCacheElements=L.debounce(this._debouncerCacheElements,Ft,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(t=>{t.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=L.debounce(this.__debounceUpdateFrozenColumn,Ft,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const t=this._columnTree[this._columnTree.length-1].slice(0);t.sort((n,o)=>n._order-o._order);let i,a;for(let n=0;n<t.length;n++){const o=t[n];o._lastFrozen=!1,o._firstFrozenToEnd=!1,a===void 0&&o.frozenToEnd&&!o.hidden&&(a=n),o.frozen&&!o.hidden&&(i=n)}i!==void 0&&(t[i]._lastFrozen=!0),a!==void 0&&(t[a]._firstFrozenToEnd=!0)}__updateHorizontalScrollPosition(){const t=this.$.table.scrollWidth,i=this.$.table.clientWidth,a=Math.max(0,this.$.table.scrollLeft),n=this.__getNormalizedScrollLeft(this.$.table),o=`translate(${-a}px, 0)`;this.$.header.style.transform=o,this.$.footer.style.transform=o,this.$.items.style.transform=o;const s=this.__isRTL?n+i-t:a,l=`translate(${s}px, 0)`;for(let d=0;d<this._frozenCells.length;d++)this._frozenCells[d].style.transform=l;const c=`translate(${this.__isRTL?n:a+i-t}px, 0)`;for(let d=0;d<this._frozenToEndCells.length;d++)this._frozenToEndCells[d].style.transform=c;this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-s}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tu=r=>class extends r{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(t){return this.__selectedKeys.has(this.getItemId(t))}selectItem(t){this._isSelected(t)||(this.selectedItems=[...this.selectedItems,t])}deselectItem(t){this._isSelected(t)&&(this.selectedItems=this.selectedItems.filter(i=>!this._itemsEqual(i,t)))}_toggleItem(t){this._isSelected(t)?this.deselectItem(t):this.selectItem(t)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(t,i){const a=i.base||[],n=new Set;return a.forEach(o=>{n.add(this.getItemId(o))}),n}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let q0="prepend";const eu=r=>class extends r{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>q0},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(t){q0=["append","prepend"].includes(t)?t:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(t){const i=t.target;t.stopPropagation(),i._grid=this,this.__updateSorter(i,t.detail.shiftClick,t.detail.fromSorterClick),this.__applySorters()}__removeSorters(t){t.length!==0&&(this._sorters=this._sorters.filter(i=>t.indexOf(i)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((t,i)=>{t._order=this._sorters.length>1?i:null})}__appendSorter(t){t.direction?this._sorters.includes(t)||this._sorters.push(t):this._removeArrayItem(this._sorters,t),this.__updateSortOrders()}__prependSorter(t){this._removeArrayItem(this._sorters,t),t.direction&&this._sorters.unshift(t),this.__updateSortOrders()}__updateSorter(t,i,a){if(!(!t.direction&&this._sorters.indexOf(t)===-1)){if(t._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!a)||this.multiSortOnShiftClick&&i)this.multiSortPriority==="append"?this.__appendSorter(t):this.__prependSorter(t);else if(t.direction||this.multiSortOnShiftClick){const n=this._sorters.filter(o=>o!==t);this._sorters=t.direction?[t]:[],n.forEach(o=>{o._order=null,o.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(t=>({path:t.path,direction:t.direction}))}_removeArrayItem(t,i){const a=t.indexOf(i);a>-1&&t.splice(a,1)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iu=r=>class extends r{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(t=>!t.hidden&&!t.hasAttribute("loading")).forEach(t=>this._generateCellClassNames(t,this.__getRowModel(t)))}_generateCellClassNames(t,i){Array.from(t.children).forEach(a=>{if(a.__generatedClasses&&a.__generatedClasses.forEach(n=>a.classList.remove(n)),this.cellClassNameGenerator){const n=this.cellClassNameGenerator(a._column,i);a.__generatedClasses=n&&n.split(" ").filter(o=>o.length>0),a.__generatedClasses&&a.__generatedClasses.forEach(o=>a.classList.add(o))}})}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ce extends tt(Y(Vd(Nd(Wd(Rd(Jd(tu(eu(Kd(Qd(Dd(qd(Bd(Hd(pt(jd(Ud(iu(qn(O)))))))))))))))))))){static get template(){return R`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:j1},_ios:{type:Boolean,value:ae},_firefox:{type:Boolean,value:W1},_android:{type:Boolean,value:V0},_touchDevice:{type:Boolean,value:kr},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getVisibleRows().find(e=>this._isInViewport(e))}get _firstVisibleIndex(){const e=this.__getFirstVisibleItem();return e?e.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find(e=>this._isInViewport(e))}get _lastVisibleIndex(){const e=this.__getLastVisibleItem();return e?e.index:void 0}_isInViewport(e){const t=this.$.table.getBoundingClientRect(),i=e.getBoundingClientRect(),a=this.$.header.getBoundingClientRect().height,n=this.$.footer.getBoundingClientRect().height;return i.bottom>t.top+a&&i.top<t.bottom-n}_getVisibleRows(){return Array.from(this.$.items.children).filter(e=>!e.hidden).sort((e,t)=>e.index-t.index)}ready(){super.ready(),this.__virtualizer=new kd({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer),Sr(this),this._tooltipController=new It(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e==="dir"&&(this.__isRTL=i==="rtl")}__getBodyCellCoordinates(e){if(this.$.items.contains(e)&&e.localName==="td")return{item:e.parentElement._item,column:e._column}}__focusBodyCell({item:e,column:t}){const i=this._getVisibleRows().find(n=>n._item===e),a=i&&[...i.children].find(n=>n._column===t);a&&a.focus()}_effectiveSizeChanged(e,t,i,a){if(t&&i&&a){const n=this.shadowRoot.activeElement,o=this.__getBodyCellCoordinates(n);t.size=e,t.update(),t.flush(),o&&n.parentElement.hidden&&this.__focusBodyCell(o),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(e=>e.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(e){if(this.__intrinsicWidthCache.has(e))return this.__intrinsicWidthCache.get(e);const t=this.__calculateIntrinsicWidth(e);return this.__intrinsicWidthCache.set(e,t),t}__calculateIntrinsicWidth(e){const t=e.width,i=e.flexGrow;e.width="auto",e.flexGrow=0;const a=e._allCells.filter(n=>!this.$.items.contains(n)||this._isInViewport(n.parentElement)).reduce((n,o)=>Math.max(n,o.offsetWidth+1),0);return e.flexGrow=i,e.width=t,a}__getDistributedWidth(e,t){if(e==null||e===this)return 0;const i=Math.max(this.__getIntrinsicWidth(e),this.__getDistributedWidth(e.parentElement,e));if(!t)return i;const a=e,n=i,o=a._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,d)=>c+d,0),s=Math.max(0,n-o),h=this.__getIntrinsicWidth(t)/o*s;return this.__getIntrinsicWidth(t)+h}_recalculateColumnWidths(e){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(t=>{t.__debounceUpdateHeaderFooterRowVisibility&&t.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map,e.forEach(t=>{t.width=`${this.__getDistributedWidth(t)}px`})}recalculateColumnWidths(){if(!!this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter(t=>!t.hidden&&t.autoWidth);this._recalculateColumnWidths(e)}}_createScrollerRows(e){const t=[];for(let i=0;i<e;i++){const a=document.createElement("tr");a.setAttribute("part","row"),a.setAttribute("role","row"),a.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(a,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(a)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(i=>i.isConnected&&i.notifyPath&&i.notifyPath("_cells.*",i._cells)),Cd(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()}),t}_createCell(e,t){const a=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,n=document.createElement("vaadin-grid-cell-content");n.setAttribute("slot",a);const o=document.createElement(e);o.id=a.replace("-content-","-"),o.setAttribute("role",e==="td"?"gridcell":"columnheader"),!V0&&!ae&&(o.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),o.addEventListener("mouseleave",()=>{this._hideTooltip()}),o.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const s=document.createElement("slot");if(s.setAttribute("name",a),t&&t._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),o.appendChild(l),o._focusButton=l,o.focus=function(){o._focusButton.focus()},l.appendChild(s)}else o.setAttribute("tabindex","-1"),o.appendChild(s);return o._content=n,n.addEventListener("mousedown",()=>{if(Ed){const l=h=>{const c=n.contains(this.getRootNode().activeElement),d=h.composedPath().includes(n);!c&&d&&o.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{n.contains(this.getRootNode().activeElement)||o.focus()})}),o}_updateRow(e,t,i,a,n){i=i||"body";const o=document.createDocumentFragment();Array.from(e.children).forEach(s=>{s._vacant=!0}),e.innerHTML="",t.filter(s=>!s.hidden).forEach((s,l,h)=>{let c;if(i==="body"){if(s._cells=s._cells||[],c=s._cells.find(d=>d._vacant),c||(c=this._createCell("td",s),s._cells.push(c)),c.setAttribute("part","cell body-cell"),e.appendChild(c),l===h.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const d=this._detailsCells.find(_=>_._vacant)||this._createCell("td");this._detailsCells.indexOf(d)===-1&&this._detailsCells.push(d),d._content.parentElement||o.appendChild(d._content),this._configureDetailsCell(d),e.appendChild(d),this._a11ySetRowDetailsCell(e,d),d._vacant=!1}s.notifyPath&&!n&&s.notifyPath("_cells.*",s._cells)}else{const d=i==="header"?"th":"td";a||s.localName==="vaadin-grid-column-group"?(c=s[`_${i}Cell`]||this._createCell(d),c._column=s,e.appendChild(c),s[`_${i}Cell`]=c):(s._emptyCells=s._emptyCells||[],c=s._emptyCells.find(_=>_._vacant)||this._createCell(d),c._column=s,e.appendChild(c),s._emptyCells.indexOf(c)===-1&&s._emptyCells.push(c)),c.setAttribute("part",`cell ${i}-cell`)}c._content.parentElement||o.appendChild(c._content),c._vacant=!1,c._column=s}),i!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(e),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__debounceUpdateHeaderFooterRowVisibility(e){e.__debounceUpdateHeaderFooterRowVisibility=L.debounce(e.__debounceUpdateHeaderFooterRowVisibility,Ft,()=>this.__updateHeaderFooterRowVisibility(e))}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter(i=>{const a=i._column;if(a._emptyCells&&a._emptyCells.indexOf(i)>-1)return!1;if(e.parentElement===this.$.header){if(a.headerRenderer)return!0;if(a.header===null)return!1;if(a.path||a.header!==void 0)return!0}else if(a.footerRenderer)return!0;return!1});e.hidden!==!t.length&&(e.hidden=!t.length),this._resetKeyboardNavigation()}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(e.toggleAttribute("first",t===0),e.toggleAttribute("last",t===this._effectiveSize-1),e.toggleAttribute("odd",t%2),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach(t=>this._updateRow(t,e[e.length-1],null,!1,!0));this.$.header.children.length<e.length;){const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.header.appendChild(t);const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((t,i)=>this._updateRow(t,e[i],"header",i===e.length-1)),Array.from(this.$.footer.children).forEach((t,i)=>this._updateRow(t,e[e.length-1-i],"footer",i===0)),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(e,t){e._item=t;const i=this.__getRowModel(e);this._toggleDetailsCell(e,i.detailsOpened),this._a11yUpdateRowLevel(e,i.level),this._a11yUpdateRowSelected(e,i.selected),e.toggleAttribute("expanded",i.expanded),e.toggleAttribute("selected",i.selected),e.toggleAttribute("details-opened",i.detailsOpened),this._generateCellClassNames(e,i),this._filterDragAndDrop(e,i),Array.from(e.children).forEach(a=>{if(a._renderer){const n=a._column||this;a._renderer.call(n,a._content,n,i)}}),this._updateDetailsCellHeight(e),this._a11yUpdateRowExpanded(e,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(e){e.animationName.indexOf("vaadin-grid-appear")===0&&(e.stopPropagation(),this.__itemsReceived(),requestAnimationFrame(()=>{this.__scrollToPendingIndex()}))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(e._item)}}_showTooltip(e){const t=this._tooltipController.node;t&&t.isConnected&&(this._tooltipController.setTarget(e.target),this._tooltipController.setContext(this.getEventContext(e)),t._stateController.open({focus:e.type==="focusin",hover:e.type==="mouseenter"}))}_hideTooltip(e){const t=this._tooltipController.node;t&&t._stateController.close(e)}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach(e=>{e.forEach(t=>{t._renderHeaderAndFooter&&t._renderHeaderAndFooter()})}),this.__updateVisibleRows())}__updateVisibleRows(e,t){this.__virtualizer&&this.__virtualizer.update(e,t)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(Ce.is,Ce);const ru=M`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;A("vaadin-button",ru,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const au=r=>class extends Er(qn(oe(r))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class G0 extends au(tt(Y(pt(O)))){static get is(){return"vaadin-button"}static get template(){return R`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new It(this),this.addController(this._tooltipController)}}customElements.define(G0.is,G0);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dr=M`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;A("",Dr,{moduleId:"lumo-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tl=M`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;A("",tl,{moduleId:"lumo-menu-overlay-core"});const nu=M`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,Xn=[Dr,tl,nu];A("",Xn,{moduleId:"lumo-menu-overlay"});const ou=M`
  :host([phone]) {
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;A("vaadin-context-menu-overlay",[Xn,ou],{moduleId:"lumo-context-menu-overlay"});A("vaadin-context-menu-list-box",M`
    :host(.vaadin-menu-list-box) {
      --_lumo-list-box-item-selected-icon-display: block;
    }

    /* Normal item */
    [part='items'] ::slotted(.vaadin-menu-item) {
      -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
      cursor: default;
    }

    [part='items'] ::slotted(.vaadin-menu-item) {
      outline: none;
      border-radius: var(--lumo-border-radius-m);
      padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    }

    :host(.vaadin-menu-list-box) [part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-border-radius-m) / 4);
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    }

    /* Hovered item */
    /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
    [part='items'] ::slotted(.vaadin-menu-item:hover:not([disabled])),
    [part='items'] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* RTL styles */
    :host([dir='rtl'])[part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
      padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    }

    :host([dir='rtl'].vaadin-menu-list-box) [part='items'] ::slotted(.vaadin-menu-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
      padding-right: calc(var(--lumo-border-radius-m) / 4);
    }

    /* Focused item */
    @media (pointer: coarse) {
      [part='items'] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
        background-color: transparent;
      }
    }
  `,{moduleId:"lumo-context-menu-list-box"});A("vaadin-context-menu-item",M`
    /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
    :host(:hover) {
      user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
    }

    :host(.vaadin-menu-item[menu-item-checked]) [part='checkmark']::before {
      opacity: 1;
    }

    :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-xs);
      content: var(--lumo-icons-angle-right);
      color: var(--lumo-tertiary-text-color);
    }

    :host(:not([dir='rtl']).vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      margin-right: calc(var(--lumo-space-m) * -1);
      padding-left: var(--lumo-space-m);
    }

    :host([expanded]) {
      background-color: var(--lumo-primary-color-10pct);
    }

    /* RTL styles */
    :host([dir='rtl'].vaadin-menu-item.vaadin-context-menu-parent-item)::after {
      content: var(--lumo-icons-angle-left);
      margin-left: calc(var(--lumo-space-m) * -1);
      padding-right: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-context-menu-item"});const su=M`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--lumo-primary-text-color);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    :host([focus-ring]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon),
  :host ::slotted(iron-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;A("vaadin-item",su,{moduleId:"lumo-item"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lu=r=>class extends Er(oe(r)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(t){this._value=t}ready(){super.ready();const t=this.getAttribute("value");t!==null&&(this.value=t)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(t){return!this.disabled&&!(t.type==="keydown"&&t.defaultPrevented)}_selectedChanged(t){this.setAttribute("aria-selected",t)}_disabledChanged(t){super._disabledChanged(t),t&&(this.selected=!1,this.blur())}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&!t.defaultPrevented&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Li extends lu(Y(Ht(O))){static get template(){return R`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-item"}constructor(){super(),this.value}}customElements.define(Li.is,Li);A("vaadin-list-box",M`
    :host {
      -webkit-tap-highlight-color: transparent;
      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
    }

    /* Dividers */
    [part='items'] ::slotted(hr) {
      height: 1px;
      border: 0;
      padding: 0;
      margin: var(--lumo-space-s) var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-list-box"});/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hu=r=>class extends Le(r){focus(){const t=this._getItems();if(Array.isArray(t)){const i=this._getAvailableIndex(t,0,null,a=>!B0(a));i>=0&&t[i].focus()}}get focused(){return(this._getItems()||[]).find(jn)}get _vertical(){return!0}_getItems(){return Array.from(this.children)}_onKeyDown(t){if(super._onKeyDown(t),t.metaKey||t.ctrlKey)return;const{key:i}=t,a=this._getItems()||[],n=a.indexOf(this.focused);let o,s;const h=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(i)?(s=-h,o=n-h):this.__isNextKey(i)?(s=h,o=n+h):i==="Home"?(s=1,o=0):i==="End"&&(s=-1,o=a.length-1),o=this._getAvailableIndex(a,o,s,c=>!B0(c)),o>=0&&(t.preventDefault(),this._focus(o,!0))}__isPrevKey(t){return this._vertical?t==="ArrowUp":t==="ArrowLeft"}__isNextKey(t){return this._vertical?t==="ArrowDown":t==="ArrowRight"}_focus(t,i=!1){const a=this._getItems();this._focusItem(a[t],i)}_focusItem(t){t&&(t.focus(),t.setAttribute("focus-ring",""))}_getAvailableIndex(t,i,a,n){const o=t.length;let s=i;for(let l=0;typeof s=="number"&&l<o;l+=1,s+=a||1){s<0?s=o-1:s>=o&&(s=0);const h=t[s];if(!h.hasAttribute("disabled")&&this.__isMatchingItem(h,n))return s}return-1}__isMatchingItem(t,i){return typeof i=="function"?i(t):!0}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cu=r=>class extends hu(r){static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t)),this._observer=new ut(this,()=>{this._setItems(this._filterItems(ut.getFlattenedNodes(this)))})}_getItems(){return this.items}_enhanceItems(t,i,a,n){if(!n&&t){this.setAttribute("aria-orientation",i||"vertical"),this.items.forEach(s=>{i?s.setAttribute("orientation",i):s.removeAttribute("orientation")}),this._setFocusable(a||0);const o=t[a];t.forEach(s=>{s.selected=s===o}),o&&!o.disabled&&this._scrollToItem(a)}}_filterItems(t){return t.filter(i=>i._hasVaadinItemMixin)}_onClick(t){if(t.metaKey||t.shiftKey||t.ctrlKey||t.defaultPrevented)return;const i=this._filterItems(t.composedPath())[0];let a;i&&!i.disabled&&(a=this.items.indexOf(i))>=0&&(this.selected=a)}_searchKey(t,i){this._searchReset=L.debounce(this._searchReset,lt.after(500),()=>{this._searchBuf=""}),this._searchBuf+=i.toLowerCase(),this.items.some(n=>this.__isMatchingKey(n))||(this._searchBuf=i.toLowerCase());const a=this._searchBuf.length===1?t+1:t;return this._getAvailableIndex(this.items,a,1,n=>this.__isMatchingKey(n)&&getComputedStyle(n).display!=="none")}__isMatchingKey(t){return t.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}_onKeyDown(t){if(t.metaKey||t.ctrlKey)return;const i=t.key,a=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(i)&&i.length===1){const n=this._searchKey(a,i);n>=0&&this._focus(n);return}super._onKeyDown(t)}_isItemHidden(t){return getComputedStyle(t).display==="none"}_setFocusable(t){t=this._getAvailableIndex(this.items,t,1);const i=this.items[t];this.items.forEach(a=>{a.tabIndex=a===i?0:-1})}_focus(t){this.items.forEach((i,a)=>{i.focused=a===t}),this._setFocusable(t),this._scrollToItem(t),super._focus(t)}focus(){this._observer&&this._observer.flush();const t=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);this._focusItem(t)}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}_scrollToItem(t){const i=this.items[t];if(!i)return;const a=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],n=this._scrollerElement.getBoundingClientRect(),o=(this.items[t+1]||i).getBoundingClientRect(),s=(this.items[t-1]||i).getBoundingClientRect();let l=0;!this._isRTL&&o[a[1]]>=n[a[1]]||this._isRTL&&o[a[1]]<=n[a[1]]?l=o[a[1]]-n[a[1]]:(!this._isRTL&&s[a[0]]<=n[a[0]]||this._isRTL&&s[a[0]]>=n[a[0]])&&(l=s[a[0]]-n[a[0]]),this._scroll(l)}get _vertical(){return this.orientation!=="horizontal"}_scroll(t){if(this._vertical)this._scrollerElement.scrollTop+=t;else{const i=this.getAttribute("dir")||"ltr",a=Jt.detectScrollType(),n=Jt.getNormalizedScrollLeft(a,i,this._scrollerElement)+t;Jt.setNormalizedScrollLeft(a,i,this._scrollerElement,n)}}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const du=r=>class extends cu(r){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:()=>[]}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",t=>this._onMultipleClick(t)),super.ready()}_enhanceMultipleItems(t,i,a,n){if(!(!t||!i)){if(n){const o=n.map(s=>t[s]);t.forEach(s=>{s.selected=o.includes(s)})}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){const t=this.selectedValues.slice(-1)[0];t&&!t.disabled&&this._scrollToItem(t)}_onMultipleClick(t){const i=this._filterItems(t.composedPath())[0],a=i&&!i.disabled?this.items.indexOf(i):-1;a<0||!this.multiple||(t.preventDefault(),this.selectedValues.includes(a)?this.selectedValues=this.selectedValues.filter(n=>n!==a):this.selectedValues=this.selectedValues.concat(a))}_multipleChanged(t,i){!t&&i&&(this.selectedValues=[],this.items.forEach(a=>{a.selected=!1})),t&&!i&&this.selected!==void 0&&(this.selectedValues=[...this.selectedValues,this.selected],this.selected=void 0)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pa extends tt(du(Y(pt(O)))){static get template(){return R`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-list-box"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3),this._tooltipController=new It(this),this.addController(this._tooltipController)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){const e=this.querySelector("vaadin-item");e&&!(e instanceof O)&&console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(pa.is,pa);A("vaadin-overlay",Dr,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Zn(r,e,t,i,a){let n;a&&(n=typeof t=="object"&&t!==null,n&&(i=r.__dataTemp[e]));let o=i!==t&&(i===i||t===t);return n&&o&&(r.__dataTemp[e]=t),o}const Jn=U(r=>{class e extends r{_shouldPropertyChange(i,a,n){return Zn(this,i,a,n,!0)}}return e}),uu=U(r=>{class e extends r{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(i,a,n){return Zn(this,i,a,n,this.mutableData)}}return e});Jn._mutablePropertyChange=Zn;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let va=null;function fa(){return va}fa.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:fa,writable:!0}});const el=Fn(fa),pu=Jn(el);function vu(r,e){va=r,Object.setPrototypeOf(r,e.prototype),new e,va=null}const fu=Fn(class{});function il(r,e){for(let t=0;t<e.length;t++){let i=e[t];if(Boolean(r)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)r?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if(i.localName==="slot")if(r)i.__polymerReplaced__=document.createComment("hidden-slot"),T(T(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const a=i.__polymerReplaced__;a&&T(T(a).parentNode).replaceChild(i,a)}else i.style&&(r?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=r,i._showHideChildren&&i._showHideChildren(r)}}class kt extends fu{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let a=this.root.firstChild;a;a=a.nextSibling)t.push(a),a.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let i in this.__hostProps)this._setPendingProperty(i,this.__dataHost["_host_"+i]);for(let i in e)this._setPendingProperty(i,e[i])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,a=>{a.model=this,i(a)});else{let a=this.__dataHost.__dataHost;a&&a._addEventListenerToNode(e,t,i)}}_showHideChildren(e){il(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&t=="textContent"?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do e=e.__dataHost.__dataHost;while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}kt.prototype.__dataHost;kt.prototype.__templatizeOptions;kt.prototype._methodHost;kt.prototype.__templatizeOwner;kt.prototype.__hostProps;const _u=Jn(kt);function Q0(r){let e=r.__dataHost;return e&&e._methodHost||e}function mu(r,e,t){let i=t.mutableData?_u:kt;Nt.mixin&&(i=Nt.mixin(i));let a=class extends i{};return a.prototype.__templatizeOptions=t,a.prototype._bindTemplate(r),bu(a,r,e,t),a}function gu(r,e,t,i){let a=t.forwardHostProp;if(a&&e.hasHostProps){const n=r.localName=="template";let o=e.templatizeTemplateClass;if(!o){if(n){let l=t.mutableData?pu:el;class h extends l{}o=e.templatizeTemplateClass=h}else{const l=r.constructor;class h extends l{}o=e.templatizeTemplateClass=h}let s=e.hostProps;for(let l in s)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:yu(l,a)}),o.prototype._createNotifyingProperty("_host_"+l);Zs&&i&&wu(e,t,i)}if(r.__dataProto&&Object.assign(r.__data,r.__dataProto),n)vu(r,o),r.__dataTemp={},r.__dataPending=null,r.__dataOld=null,r._enableProperties();else{Object.setPrototypeOf(r,o.prototype);const s=e.hostProps;for(let l in s)if(l="_host_"+l,l in r){const h=r[l];delete r[l],r.__data[l]=h}}}}function yu(r,e){return function(i,a,n){e.call(i.__templatizeOwner,a.substring(6),n[a])}}function bu(r,e,t,i){let a=t.hostProps||{};for(let n in i.instanceProps){delete a[n];let o=i.notifyInstanceProp;o&&r.prototype._addPropertyEffect(n,r.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Mu(n,o)})}if(i.forwardHostProp&&e.__dataHost)for(let n in a)t.hasHostProps||(t.hasHostProps=!0),r.prototype._addPropertyEffect(n,r.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:zu()})}function Mu(r,e){return function(i,a,n){e.call(i.__templatizeOwner,i,a,n[a])}}function zu(){return function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}}function Nt(r,e,t){if(Ee&&!Q0(r))throw new Error("strictTemplatePolicy: template owner not trusted");if(t=t||{},r.__templatizeOwner)throw new Error("A <template> can only be templatized once");r.__templatizeOwner=e;let a=(e?e.constructor:kt)._parseTemplate(r),n=a.templatizeInstanceClass;n||(n=mu(r,a,t),a.templatizeInstanceClass=n);const o=Q0(r);gu(r,a,t,o);let s=class extends n{};return s.prototype._methodHost=o,s.prototype.__dataHost=r,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=a.hostProps,s=s,s}function wu(r,e,t){const i=t.constructor._properties,{propertyEffects:a}=r,{instanceProps:n}=e;for(let o in a)if(!i[o]&&!(n&&n[o])){const s=a[o];for(let l=0;l<s.length;l++){const{part:h}=s[l].info;if(!(h.signature&&h.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Au(r,e){let t;for(;e;)if(t=e.__dataHost?e:e.__templatizeInstance)if(t.__dataHost!=r)e=t.__dataHost;else return t;else e=T(e).parentNode;return null}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yr=[];class Cu{constructor(e){this.host=e,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(e){if(this.__trapNode=e,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Yr.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Yr.pop()}__onKeyDown(e){if(!!this.__trapNode&&this===Array.from(Yr).pop()&&e.key==="Tab"){e.preventDefault();const t=e.shiftKey;this.__focusNextElement(t)}}__focusNextElement(e=!1){const t=this.__focusableElements,i=e?-1:1,a=this.__focusedElementIndex,n=(t.length+a+i)%t.length,o=t[n];o.focus(),o.localName==="input"&&o.select()}get __focusableElements(){return Md(this.__trapNode)}get __focusedElementIndex(){const e=this.__focusableElements;return e.indexOf(e.filter(jn).pop())}}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _t extends Y(Ht(pt(O))){static get template(){return R`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new ut(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),ae&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new Cu(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,i=window.innerWidth>e,a=document.documentElement.clientHeight;i&&a>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${a-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(e){this.template=e.find(t=>t.localName&&t.localName==="template")||this.template}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._last)return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(!!this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),U1(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const i=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(i)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):t&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this).getPropertyValue("animation-name");return!(getComputedStyle(this).getPropertyValue("display")==="none")&&e&&e!=="none"}_enqueueAnimation(e,t){const i=`__${e}Handler`,a=n=>{n&&n.target!==this||(t(),this.removeEventListener("animationend",a),delete this[i])};this[i]=a,this.addEventListener("animationend",a)}_flushAnimation(e){const t=`__${e}Handler`;typeof this[t]=="function"&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const e=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&e){const t=this._getActiveElement();(t===document.body||this._deepContains(t))&&setTimeout(()=>e.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof _t&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===_t.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),_t.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=_t.__attachedInstances;let t;for(;(t=e.pop())&&!(t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!t.modeless)););}_removeOldContent(){!this.content||!this._contentNodes||(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e){this._removeOldContent(),e._Templatizer||(e._Templatizer=Nt(e,this,{forwardHostProp(i,a){this._instance&&this._instance.forwardHostProp(i,a)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const t=e._templateRoot||(e._templateRoot=e.getRootNode());if(t!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let i=Array.from(t.querySelectorAll("style")).reduce((a,n)=>a+n.textContent,"");if(i=i.replace(/:host/g,":host-nomatch"),i){const a=document.createElement("style");a.textContent=i,this.$.content.shadowRoot.appendChild(a),this._contentNodes.unshift(a)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,i,a){e!==t?this.template=void 0:i!==a&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,i,a,n){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const o=this._oldOwner!==i||this._oldModel!==a;this._oldModel=a,this._oldOwner=i;const s=this._oldTemplate!==e;this._oldTemplate=e;const l=this._oldRenderer!==t;this._oldRenderer=t;const h=this._oldOpened!==n;this._oldOpened=n,l&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),e&&s?this._stampOverlayTemplate(e):t&&(l||h||o)&&n&&this.requestContentUpdate()}_getActiveElement(){let e=document.activeElement||document.body;for(;e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;let t=e;const i=e.ownerDocument;for(;t&&t!==i&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){let e="";const t=_t.__attachedInstances.filter(i=>i!==this).pop();t&&(e=t.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(_t.is,_t);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */xr({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(r){this.info.sourceEvent=r;const e=r.composedPath();this.info.sourceEvent.__composedPath=e},touchstart(r){this._setSourceEvent(r),this.info.touchStartCoords={x:r.changedTouches[0].clientX,y:r.changedTouches[0].clientY};const e=r.composedPath()[0]||r.target;this._timerId=setTimeout(()=>{const t=r.changedTouches[0];r.shiftKey||(ae&&(this._fired=!0,this.fire(e,t.clientX,t.clientY)),re("tap"))},500)},touchmove(r){const t=this.info.touchStartCoords;(Math.abs(t.x-r.changedTouches[0].clientX)>15||Math.abs(t.y-r.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(r){this._fired&&r.preventDefault(),this._cancelTimer()},contextmenu(r){r.shiftKey||(this._setSourceEvent(r),this.fire(r.target,r.clientX,r.clientY),re("tap"))},fire(r,e,t){const i=this.info.sourceEvent,a=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});a.detail={x:e,y:t,sourceEvent:i},r.dispatchEvent(a),a.defaultPrevented&&i&&i.preventDefault&&i.preventDefault()}});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur={start:"top",end:"bottom"},Wr={start:"left",end:"right"},K0=new ResizeObserver(r=>{setTimeout(()=>{r.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),t0=r=>class extends r{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=Gd(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(t=>{t.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(t=>{t.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(t,i){if(this.__removeUpdatePositionEventListeners(),i&&(i.__overlay=null,K0.unobserve(i),t&&(this.__addUpdatePositionEventListeners(),i.__overlay=this,K0.observe(i))),t){const a=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(a[n],10)})),this.setAttribute("dir",a.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}__onScroll(t){this.contains(t.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const t=this.positionTarget.getBoundingClientRect(),i=this.__shouldAlignStartVertically(t);this.style.justifyContent=i?"flex-start":"flex-end";const a=this.__shouldAlignStartHorizontally(t,this.__isRTL),n=!this.__isRTL&&a||this.__isRTL&&!a;this.style.alignItems=n?"flex-start":"flex-end";const o=this.getBoundingClientRect(),s=this.__calculatePositionInOneDimension(t,o,this.noVerticalOverlap,Ur,this,i),l=this.__calculatePositionInOneDimension(t,o,this.noHorizontalOverlap,Wr,this,a);Object.assign(this.style,s,l),this.toggleAttribute("bottom-aligned",!i),this.toggleAttribute("top-aligned",i),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(t,i){const a=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const n=Math.min(window.innerWidth,document.documentElement.clientWidth),o=!i&&this.horizontalAlign==="start"||i&&this.horizontalAlign==="end";return this.__shouldAlignStart(t,a,n,this.__margins,o,this.noHorizontalOverlap,Wr)}__shouldAlignStartVertically(t){const i=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const a=Math.min(window.innerHeight,document.documentElement.clientHeight),n=this.verticalAlign==="top";return this.__shouldAlignStart(t,i,a,this.__margins,n,this.noVerticalOverlap,Ur)}__shouldAlignStart(t,i,a,n,o,s,l){const h=a-t[s?l.end:l.start]-n[l.end],c=t[s?l.start:l.end]-n[l.start],d=o?h:c,m=d>(o?c:h)||d>i;return o===m}__adjustBottomProperty(t,i,a){let n;if(t===i.end){if(i.end===Ur.end){const o=Math.min(window.innerHeight,document.documentElement.clientHeight);if(a>o&&this.__oldViewportHeight){const s=this.__oldViewportHeight-o;n=a-s}this.__oldViewportHeight=o}if(i.end===Wr.end){const o=Math.min(window.innerWidth,document.documentElement.clientWidth);if(a>o&&this.__oldViewportWidth){const s=this.__oldViewportWidth-o;n=a-s}this.__oldViewportWidth=o}}return n}__calculatePositionInOneDimension(t,i,a,n,o,s){const l=s?n.start:n.end,h=s?n.end:n.start,c=parseFloat(o.style[l]||getComputedStyle(o)[l]),d=this.__adjustBottomProperty(l,n,c),_=i[s?n.start:n.end]-t[a===s?n.end:n.start],m=d?`${d}px`:`${c+_*(s?-1:1)}px`;return{[l]:m,[h]:""}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-context-menu-overlay",M`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }

    :host([right-aligned]),
    :host([end-aligned]) {
      align-items: flex-end;
    }

    :host([bottom-aligned]) {
      justify-content: flex-end;
    }

    [part='overlay'] {
      background-color: #fff;
    }
  `,{moduleId:"vaadin-context-menu-overlay-styles"});class X0 extends t0(_t){static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),e.keyCode===38?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let i=e.bottom-t.height;const a=this.parentOverlay;if(a&&a.hasAttribute("bottom-aligned")){const n=getComputedStyle(a);i=i-parseFloat(n.bottom)-parseFloat(n.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:i}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const e=this.$.content,t=getComputedStyle(e);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(t.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(t.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(t.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(t.paddingTop)}px`}}}customElements.define(X0.is,X0);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class e0{constructor(e,t){this.query=e,this.callback=t,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(e){typeof this.callback=="function"&&this.callback(e.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Z0 extends Li{static get is(){return"vaadin-context-menu-item"}}customElements.define(Z0.is,Z0);class J0 extends pa{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(J0.is,J0);const xu=r=>class extends r{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=t=>{t.composedPath().some(i=>i.localName==="vaadin-context-menu-overlay")||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}get __isRTL(){return this.getAttribute("dir")==="rtl"}__forwardFocus(){const t=this.$.overlay,i=t.getFirstChild();if(t.parentOverlay){const a=t.parentOverlay.querySelector("[expanded]");a&&a.hasAttribute("focused")&&i?i.focus():t.$.overlay.focus()}else i&&i.focus()}__openSubMenu(t,i){t.items=i._item.children,t.listenOn=i;const a=this.$.overlay,n=t.$.overlay;n.positionTarget=i,n.noHorizontalOverlap=!0,n._setParentOverlay(a),a.hasAttribute("theme")?t.setAttribute("theme",a.getAttribute("theme")):t.removeAttribute("theme");const o=t.$.overlay.$.content;o.style.minWidth="",i.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:i._item.children}}))}__itemsRenderer(t,i,a){this.__initMenu(t,i);const n=t.querySelector(this.constructor.is);n.closeOn=i.closeOn;const o=t.querySelector("vaadin-context-menu-list-box");o.innerHTML="",Array.from(a.detail.children||i.items).forEach(l=>{let h;l.component instanceof HTMLElement?h=l.component:h=document.createElement(l.component||"vaadin-context-menu-item"),h instanceof Li?(h.setAttribute("role","menuitem"),h.classList.add("vaadin-menu-item")):h.localName==="hr"&&h.setAttribute("role","separator"),this._setMenuItemTheme(h,l,this._theme),h._item=l,l.text&&(h.textContent=l.text),this.__toggleMenuComponentAttribute(h,"menu-item-checked",l.checked),this.__toggleMenuComponentAttribute(h,"disabled",l.disabled),h.setAttribute("aria-haspopup","false"),h.classList.remove("vaadin-context-menu-parent-item"),l.children&&l.children.length&&(h.classList.add("vaadin-context-menu-parent-item"),h.setAttribute("aria-haspopup","true"),h.setAttribute("aria-expanded","false"),h.removeAttribute("expanded")),o.appendChild(h)})}_setMenuItemTheme(t,i,a){let n=t.getAttribute("theme")||a;i.theme!=null&&(n=Array.isArray(i.theme)?i.theme.join(" "):i.theme),n?t.setAttribute("theme",n):t.removeAttribute("theme")}__toggleMenuComponentAttribute(t,i,a){a?(t.setAttribute(i,""),t[`__has-${i}`]=!0):t[`__has-${i}`]&&(t.removeAttribute(i),t[`__has-${i}`]=!1)}__initMenu(t,i){if(t.firstElementChild){const a=t.querySelector("vaadin-context-menu-list-box");this._theme?a.setAttribute("theme",this._theme):a.removeAttribute("theme")}else{const a=document.createElement("vaadin-context-menu-list-box");t.appendChild(a),this._theme&&a.setAttribute("theme",this._theme),a.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>a.setAttribute("role","menu"));const n=document.createElement(this.constructor.is);n.setAttribute("hidden",""),t.appendChild(n),n.$.overlay.modeless=!0,n.openOn="opensubmenu",i.addEventListener("opened-changed",s=>!s.detail.value&&n.close()),n.addEventListener("opened-changed",s=>{if(!s.detail.value){const l=a.querySelector("[expanded]");l&&(l.setAttribute("aria-expanded","false"),l.removeAttribute("expanded"))}}),a.addEventListener("selected-changed",s=>{if(typeof s.detail.value=="number"){const l=s.target.items[s.detail.value]._item;if(!l.children){const h={value:l};i.dispatchEvent(new CustomEvent("item-selected",{detail:h}))}a.selected=null}}),n.addEventListener("item-selected",s=>{i.dispatchEvent(new CustomEvent("item-selected",{detail:s.detail}))}),n.addEventListener("close-all-menus",()=>{i.dispatchEvent(new CustomEvent("close-all-menus"))}),i.addEventListener("close-all-menus",i.close),i.addEventListener("item-selected",i.close),i.$.overlay.$.backdrop.addEventListener("click",()=>i.close()),i.$.overlay.addEventListener("keydown",s=>{const l=this.__isRTL;!l&&s.keyCode===37||l&&s.keyCode===39?(i.close(),i.listenOn.focus()):(s.key==="Escape"||s.key==="Tab")&&i.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>{this.__openListenerActive=!0});const o=(s,l=s.composedPath().find(h=>h.localName==="vaadin-context-menu-item"))=>{if(!!this.__openListenerActive){if(i.$.overlay.hasAttribute("opening")){requestAnimationFrame(()=>o(s,l));return}if(l){if(n.items!==l._item.children&&n.close(),!i.opened)return;l._item.children&&l._item.children.length?(l.setAttribute("aria-expanded","true"),l.setAttribute("expanded",""),this.__openSubMenu(n,l)):n.listenOn.focus()}}};i.$.overlay.addEventListener(kr?"click":"mouseover",o),i.$.overlay.addEventListener("keydown",s=>{const l=this.__isRTL;(!l&&s.keyCode===39||l&&s.keyCode===37||s.keyCode===13||s.keyCode===32)&&o(s)})}}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class to extends pt(tt(Mr(xu(O)))){static get template(){return R`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>

      <vaadin-context-menu-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-vaadin-overlay-open="_onVaadinOverlayOpen"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        model="[[_context]]"
        theme$="[[_theme]]"
      >
      </vaadin-context-menu-overlay>
    `}static get is(){return"vaadin-context-menu"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_phone:{type:Boolean},_touch:{type:Boolean,value:kr},_wide:{type:Boolean},_wideMediaQuery:{type:String,value:"(min-device-width: 750px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_touchOrWideChanged(_touch, _wide)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._overlayElement=this.$.overlay,this.addController(new e0(this._wideMediaQuery,e=>{this._wide=e})),Sr(this)}_onOverlayOpened(e){this._setOpened(e.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_touchOrWideChanged(e,t){this._phone=!t&&e}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){const i="vaadin-overlay-outside-click";t&&(this._unlisten(this.$.overlay,t,this._boundClose),this._unlisten(this.$.overlay.root,t,this._boundClose)),e?(this._listen(this.$.overlay,e,this._boundClose),this._listen(this.$.overlay.root,e,this._boundClose),this._unlisten(this.$.overlay,i,this._preventDefault)):this._listen(this.$.overlay,i,this._preventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=e}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(e,t){if(t){if(e)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),e=this.__itemsRenderer}this.$.overlay.setProperties({owner:this,renderer:e})}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,i=>e.composedPath().indexOf(i)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(this._preventDefault(e),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const a=this.$.overlay.style;a[e]=`${(parseInt(a[e])||0)+t}px`}__alignOverlayPosition(){const e=this.$.overlay;if(e.positionTarget)return;const t=e.style;["top","right","bottom","left"].forEach(c=>t.removeProperty(c)),["right-aligned","end-aligned","bottom-aligned"].forEach(c=>e.removeAttribute(c));const{xMax:i,xMin:a,yMax:n}=e.getBoundaries(),o=this.__x,s=this.__y,l=document.documentElement.clientWidth,h=document.documentElement.clientHeight;this.__isRTL?o>l/2||o>a?t.right=`${Math.max(0,l-o)}px`:(t.left=`${o}px`,this._setEndAligned(e)):o<l/2||o<i?t.left=`${o}px`:(t.right=`${Math.max(0,l-o)}px`,this._setEndAligned(e)),s<h/2||s<n?t.top=`${s}px`:(t.bottom=`${Math.max(0,h-s)}px`,e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(e.detail instanceof Object){if(e.detail[t])return e.detail[t];if(e.detail.sourceEvent)return this._getEventCoordinate(e.detail.sourceEvent,t)}else{const i=`client${t.toUpperCase()}`,a=e.changedTouches?e.changedTouches[0][i]:e[i];if(a===0){const n=e.target.getBoundingClientRect();return t==="x"?n.left:n.top+n.height}return a}}_listen(e,t,i){xt[t]?at(e,t,i):e.addEventListener(t,i)}_unlisten(e,t,i){xt[t]?E1(e,t,i):e.removeEventListener(t,i)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}}customElements.define(to.is,to);A("vaadin-input-container",M`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class eo extends Y(Ht(O)){static get is(){return"vaadin-input-container"}static get template(){return R`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}}customElements.define(eo.is,eo);const Eu=M`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;A("vaadin-date-picker-overlay",[Xn,Eu],{moduleId:"lumo-date-picker-overlay"});A("vaadin-date-picker-overlay-content",M`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    /* Month scroller */

    [part='months'] {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    /* Year scroller */
    [part='years'] {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    [part='year-number']:not([current]),
    [part='year-separator'] {
      opacity: 0.7;
      transition: 0.2s opacity;
    }

    [part='years']:hover [part='year-number'],
    [part='years']:hover [part='year-separator'] {
      opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
    #scrollers[desktop] [part='months'] {
      right: auto;
    }

    /* Year scroller position indicator */
    [part='years']::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='years'] [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '•';
    }

    /* Current year */

    [part='years'] [part='year-number'][current] {
      color: var(--lumo-primary-text-color);
    }

    /* Toolbar (footer) */

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    /* Today and Cancel buttons */

    [part='toolbar'] [part\$='button'] {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='years'] {
        background-color: var(--lumo-shade-5pct);
      }

      [part='toolbar'],
      [part='months'] {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      [part='years'] {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
      }

      :host([years-visible]) [part='months'] {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});A("vaadin-month-calendar",M`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part='date'] {
      transition: color 0.1s;
    }

    [part='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part='date'][today] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part='date'][focused]::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part='date'][focused]::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part='date']:not(:empty):not([disabled]):not([selected]):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part='date'][selected] {
      color: var(--lumo-primary-contrast-color);
    }

    [part='date'][selected]::before {
      background-color: var(--lumo-primary-color);
    }

    [part='date'][disabled] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part='date']:hover:not([selected])::before,
      [part='date'][focused]:not([selected])::before {
        display: none;
      }

      [part='date']:not(:empty):not([disabled]):active::before {
        display: block;
      }

      [part='date'][selected]::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const rl=document.createElement("template");rl.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
`;document.head.appendChild(rl.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const i0=M`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;A("",i0,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const al=M`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const r0=M`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;A("",r0,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tu=M`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,a0=[r0,i0,al,Tu];A("",a0,{moduleId:"lumo-input-field-shared-styles"});const Ou=M`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;A("vaadin-date-picker",[a0,Ou],{moduleId:"lumo-date-picker"});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const jr="disable-upgrade",Pu=r=>{for(;r;){const e=Object.getOwnPropertyDescriptor(r,"observedAttributes");if(e)return e.get;r=Object.getPrototypeOf(r.prototype).constructor}return()=>[]},Su=U(r=>{const e=f1(r);let t=Pu(e);class i extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return t.call(this).concat(jr)}_initializeProperties(){this.hasAttribute(jr)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(n){return super._canApplyPropertyDefault(n)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(n))}attributeChangedCallback(n,o,s,l){n==jr?this.__isUpgradeDisabled&&s==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,T(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(n,o,s,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return i});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Iu=M`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`,ku=M`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-date-picker-overlay",ku,{moduleId:"vaadin-date-picker-overlay-styles"});let Ue;class io extends Su(t0(_t)){static get is(){return"vaadin-date-picker-overlay"}static get template(){return Ue||(Ue=super.template.cloneNode(!0),Ue.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),Ue}}customElements.define(io.is,io);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Ct{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,ke.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ke.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,t,i){return e instanceof Ct?e._cancelAsync():e=new Ct,e.setConfig(t,i),e}}let ke=new Set;const nl=function(r){ke.add(r)},Du=function(){const r=Boolean(ke.size);return ke.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ol=function(){let r,e;do r=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Du();while(r||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ro=!1;function sl(){if(Xs&&!Ks){if(!ro){ro=!0;const r=document.createElement("style");r.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(r)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ru=uu(O);class ao extends Ru{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Jr,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),sl()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=T(T(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let a=new MutationObserver(()=>{if(this.querySelector("template"))a.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return a.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Nt(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(a,n){let o=this.__instances;for(let s=0,l;s<o.length&&(l=o[s]);s++)l.forwardHostProp(a,n)},notifyInstanceProp:function(a,n,o){if(Sh(this.as,n)){let s=a[this.itemsIndexAs];n==this.as&&(this.items[s]=o);let l=Oe(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,n);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)e.indexOf(t[i])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Ct.debounce(this.__renderDebouncer,t>0?ia.after(t):Ar,e.bind(this)),nl(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ol()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Jr||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter((i,a,n)=>this.__filterFn(e[i],a,n))),this.__sortFn&&t.sort((i,a)=>this.__sortFn(e[i],e[a])),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let a;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),a=Math.max(t-i,0),this.__chunkCount=a||1):(a=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+a,e)),this.__shouldMeasureChunk=a===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const a=this.__itemsIdxToInstIdx={};let n;for(n=0;n<t;n++){let o=this.__instances[n],s=i[n],l=e[s];a[s]=n,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,n),o._setPendingProperty(this.itemsIndexAs,s),o._flushProperties()):this.__insertInstance(l,n,s)}for(let o=this.__instances.length-1;o>=n;o--)this.__detachAndRemoveInstance(o)}__detachInstance(e){let t=this.__instances[e];const i=T(t.root);for(let a=0;a<t.children.length;a++){let n=t.children[a];i.appendChild(n)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let a={};return a[this.as]=e,a[this.indexAs]=t,a[this.itemsIndexAs]=i,new this.__ctor(a)}__insertInstance(e,t,i){const a=this.__stampInstance(e,t,i);let n=this.__instances[t+1],o=n?n.children[0]:this;return T(T(this).parentNode).insertBefore(a.root,o),this.__instances[t]=a,a}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),a=i.indexOf("."),n=a<0?i:i.substring(0,a);if(n==parseInt(n,10)){let o=a<0?"":i.substring(a+1);this.__handleObservedPaths(o);let s=this.__itemsIdxToInstIdx[n],l=this.__instances[s];if(l){let h=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(h,t,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Au(this.template,e)}}customElements.define(ao.is,ao);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function $u(r){let e=r.getDay();e===0&&(e=7);const t=4-e,i=new Date(r.getTime()+t*24*3600*1e3),a=new Date(0,0);a.setFullYear(i.getFullYear());const n=i.getTime()-a.getTime(),o=Math.round(n/(24*3600*1e3));return Math.floor(o/7+1)}function At(r,e){return r instanceof Date&&e instanceof Date&&r.getFullYear()===e.getFullYear()&&r.getMonth()===e.getMonth()&&r.getDate()===e.getDate()}function xe(r,e,t){return(!e||r>=e)&&(!t||r<=t)}function ll(r,e){return e.filter(t=>t!==void 0).reduce((t,i)=>{if(!i)return t;if(!t)return i;const a=Math.abs(r.getTime()-i.getTime()),n=Math.abs(t.getTime()-r.getTime());return a<n?i:t})}function n0(r){return{day:r.getDate(),month:r.getMonth(),year:r.getFullYear()}}function Lu(r,e,t=0,i=1){if(e>99)throw new Error("The provided year cannot have more than 2 digits.");if(e<0)throw new Error("The provided year cannot be negative.");let a=e+Math.floor(r.getFullYear()/100)*100;return r<new Date(a-50,t,i)?a-=100:r>new Date(a+50,t,i)&&(a+=100),a}function Wt(r){const e=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(r);if(!e)return;const t=new Date(0,0);return t.setFullYear(parseInt(e[1],10)),t.setMonth(parseInt(e[2],10)-1),t.setDate(parseInt(e[3],10)),t}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class no extends oe(Y(O)){static get template(){return R`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part='date'] {
          outline: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part="date"
                  date="[[item]]"
                  today$="[[_isToday(item)]]"
                  focused$="[[__isDayFocused(item, focusedDate)]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  selected$="[[__isDaySelected(item, selectedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}ready(){super.ready(),at(this.$.monthGrid,"tap",this._handleTap.bind(this))}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part=date]")].find(e=>At(e.date,this.focusedDate))}_isDisabled(e,t,i){const a=new Date(0,0);a.setFullYear(e.getFullYear()),a.setMonth(e.getMonth()),a.setDate(1);const n=new Date(0,0);return n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()+1),n.setDate(0),t&&i&&t.getMonth()===i.getMonth()&&t.getMonth()===e.getMonth()&&i.getDate()-t.getDate()>=0?!1:!xe(a,t,i)&&!xe(n,t,i)}_getTitle(e,t){if(!(e===void 0||t===void 0))return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(!(e===void 0||t===void 0))return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,i,a){if(!(e===void 0||t===void 0||i===void 0||a===void 0))return e=this._applyFirstDayOfWeek(e,a),t=this._applyFirstDayOfWeek(t,a),e=e.map((n,o)=>({weekDay:n,weekDayShort:t[o]})),e}__focusedDateChanged(e,t){t.some(i=>At(i,e))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&t===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&t===1}_isToday(e){return At(new Date,e)}_getDays(e,t){if(e===void 0||t===void 0)return;const i=new Date(0,0);for(i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);i.getDay()!==t;)this._dateAdd(i,-1);const a=[],n=i.getMonth(),o=e.getMonth();for(;i.getMonth()===o||i.getMonth()===n;)a.push(i.getMonth()===o?new Date(i.getTime()):null),this._dateAdd(i,1);return a}_getWeeks(e){return e.reduce((t,i,a)=>(a%7===0&&t.push([]),t[t.length-1].push(i),t),[])}_handleTap(e){!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")&&(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__getWeekNumber(e){const t=e.reduce((i,a)=>!i&&a?a:i);return $u(t)}__isDayFocused(e,t){return At(e,t)}__isDaySelected(e,t){return At(e,t)}__getDayAriaSelected(e,t){if(this.__isDaySelected(e,t))return"true"}__isDayDisabled(e,t,i){return!xe(e,t,i)}__getDayAriaDisabled(e,t,i){if(!(e===void 0||t===void 0||i===void 0)&&this.__isDayDisabled(e,t,i))return"true"}__getDayAriaLabel(e){if(!e)return"";let t=`${this._getDate(e)} ${this.i18n.monthNames[e.getMonth()]} ${e.getFullYear()}, ${this.i18n.weekdays[e.getDay()]}`;return this._isToday(e)&&(t+=`, ${this.i18n.today}`),t}__getDayTabindex(e,t){return this.__isDayFocused(e,t)?"0":"-1"}}customElements.define(no.is,no);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class De extends O{static get template(){return R`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`;const e=this.querySelector("template");this._TemplateClass=Nt(e,this,{forwardHostProp(t,i){t!=="index"&&this._buffers.forEach(a=>{[...a.children].forEach(n=>{n._itemWrapper.instance[t]=i})})}}),W1&&(this.$.scroller.tabIndex=-1)}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[...e.children].forEach(t=>{this._ensureStampedInstance(t._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){const t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform=`translate3d(0, ${this._buffers[t].translateY}px, 0)`,this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const t=this.itemHeight+this.bufferOffset,i=e>this._buffers[1].translateY+t,a=e<this._buffers[0].translateY+t;(i||a)&&(this._translateBuffer(a),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=L.debounce(this._debouncerScrollFinish,lt.after(200),()=>{const n=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],n)&&!this._isVisible(this._buffers[1],n)&&(this.position=this.position)})}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get itemHeight(){if(!this._itemHeightVal){const e=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,e);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform=`translate3d(0, ${e.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=L.debounce(this._debouncerUpdateClones,lt.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const e=this.getBoundingClientRect();this._buffers.forEach(t=>{for(let i=0;i<this.bufferSize;i++){const a=document.createElement("div");a.style.height=`${this.itemHeight}px`,a.instance={};const o=`vaadin-infinite-scroller-item-content-${De._contentIndex=De._contentIndex+1||0}`,s=document.createElement("slot");s.setAttribute("name",o),s._itemWrapper=a,t.appendChild(s),a.setAttribute("slot",o),this.appendChild(a),setTimeout(()=>{this._isVisible(a,e)&&this._ensureStampedInstance(a)},1)}}),setTimeout(()=>{U1(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(e.firstElementChild)return;const t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(i=>{e.instance.set(i,t[i])})}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,a)=>{if(!i.updated){const n=this._firstIndex+this.bufferSize*a;[...i.children].forEach((o,s)=>{const l=o._itemWrapper;(!e||this._isVisible(l,t))&&(l.instance.index=n+s)}),i.updated=!0}})}_isVisible(e,t){const i=e.getBoundingClientRect();return i.bottom>t.top&&i.top<t.bottom}}customElements.define(De.is,De);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oo extends pt(Y(Ht(O))){static get template(){return R`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [hidden] {
          display: none !important;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        [part='months'],
        [part='years'] {
          height: 100%;
        }

        [part='months'] {
          --vaadin-infinite-scroller-item-height: 270px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #scrollers[desktop] [part='months'] {
          right: 50px;
          transform: none !important;
        }

        [part='years'] {
          --vaadin-infinite-scroller-item-height: 80px;
          width: 50px;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          /* Center the year scroller position. */
          --vaadin-infinite-scroller-buffer-offset: 50%;
        }

        #scrollers[desktop] [part='years'] {
          position: absolute;
          transform: none !important;
        }

        [part='years']::before {
          content: '';
          display: block;
          background: transparent;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #000;
        }

        :host(.animate) [part='months'],
        :host(.animate) [part='years'] {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers" desktop$="[[_desktopMode]]">
        <vaadin-infinite-scroller
          id="monthScroller"
          on-custom-scroll="_onMonthScroll"
          on-touchstart="_onMonthScrollTouchStart"
          buffer-size="3"
          active="[[initialPosition]]"
          part="months"
        >
          <template>
            <vaadin-month-calendar
              i18n="[[i18n]]"
              month="[[_dateAfterXMonths(index)]]"
              selected-date="{{selectedDate}}"
              focused-date="[[focusedDate]]"
              ignore-taps="[[_ignoreTaps]]"
              show-week-numbers="[[showWeekNumbers]]"
              min-date="[[minDate]]"
              max-date="[[maxDate]]"
              part="month"
              theme$="[[_theme]]"
              on-keydown="__onMonthCalendarKeyDown"
            >
            </vaadin-month-calendar>
          </template>
        </vaadin-infinite-scroller>
        <vaadin-infinite-scroller
          id="yearScroller"
          on-custom-scroll="_onYearScroll"
          on-touchstart="_onYearScrollTouchStart"
          buffer-size="12"
          active="[[initialPosition]]"
          part="years"
          aria-hidden="true"
        >
          <template>
            <div
              part="year-number"
              current$="[[_isCurrentYear(index)]]"
              selected$="[[_isSelectedYear(index, selectedDate)]]"
            >
              [[_yearAfterXYears(index)]]
            </div>
            <div part="year-separator" aria-hidden="true"></div>
          </template>
        </vaadin-infinite-scroller>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <vaadin-button
          id="todayButton"
          part="today-button"
          theme="tertiary"
          disabled="[[!_isTodayAllowed(minDate, maxDate)]]"
          on-keydown="__onTodayButtonKeyDown"
        >
          [[i18n.today]]
        </vaadin-button>
        <vaadin-button id="cancelButton" part="cancel-button" theme="tertiary" on-keydown="__onCancelButtonKeyDown">
          [[i18n.cancel]]
        </vaadin-button>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date,value:null},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String}}get __isRTL(){return this.getAttribute("dir")==="rtl"}get __useSubMonthScrolling(){return this.$.monthScroller.clientHeight<this.$.monthScroller.itemHeight+this.$.monthScroller.bufferOffset}get calendars(){return[...this.shadowRoot.querySelectorAll("vaadin-month-calendar")]}get focusableDateElement(){return this.calendars.map(e=>e.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),at(this.$.scrollers,"track",this._track.bind(this)),at(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),at(this.shadowRoot.querySelector('[part="today-button"]'),"tap",this._onTodayTap.bind(this)),at(this.shadowRoot.querySelector('[part="cancel-button"]'),"tap",this._cancel.bind(this)),at(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),at(this.shadowRoot.querySelector('[part="years"]'),"tap",this._onYearTap.bind(this)),at(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new e0(this._desktopMediaQuery,e=>{this._desktopMode=e}))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),T1(this.$.scrollers,"pan-y")}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){const i=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(e):0;this._scrollToPosition(this._differenceInMonths(e,this._originDate)+i,t),this.$.monthScroller.forceUpdate()}_selectDate(e){this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0}))}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return e===0}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e,t=!0){if(!e)return;const i=this._differenceInMonths(e,this._originDate);if(this.__useSubMonthScrolling){const l=this._calculateWeekScrollOffset(e);this._scrollToPosition(i+l,t);return}const a=this.$.monthScroller.position>i,o=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-this.$.monthScroller.bufferOffset*2)/this.$.monthScroller.itemHeight,s=this.$.monthScroller.position+o-1<i;a?this._scrollToPosition(i,t):s&&this._scrollToPosition(i-o+1,t)}_calculateWeekScrollOffset(e){const t=new Date(0,0);t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(1);let i=0;for(;t.getDate()<e.getDate();)t.setDate(t.getDate()+1),t.getDay()===this.i18n.firstDayOfWeek&&(i+=1);return i/6}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=this.$.yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=L.debounce(this._debouncer,lt.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(e,t,i){return e?t(n0(e)):i}_onTodayTap(){const e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){const i=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+i*12,!0)}}_scrollToPosition(e,t){if(this._targetPosition!==void 0){this._targetPosition=e;return}if(!t){this.$.monthScroller.position=e,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=e;let i;this._revealPromise=new Promise(l=>{i=l});const a=(l,h,c,d)=>(l/=d/2,l<1?c/2*l*l+h:(l-=1,-c/2*(l*(l-2)-1)+h));let n=0;const o=this.$.monthScroller.position,s=l=>{n=n||l;const h=l-n;if(h<this.scrollDuration){const c=a(h,o,this._targetPosition-o,this.scrollDuration);this.$.monthScroller.position=c,window.requestAnimationFrame(s)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:o}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0,i(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(s)}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)return;Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform=`translateX(${e-this._yearScrollerWidth}px)`,this.$.yearScroller.style.transform=`translateX(${e}px)`)}_yearAfterXYears(e){const t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){const t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return(e.getFullYear()-t.getFullYear())*12-t.getMonth()+e.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}__toggleDate(e){At(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let t=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),t=!0;break;case"ArrowUp":this._moveFocusByDays(-7),t=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),t=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),t=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),t=!0;break;case" ":this.__toggleDate(this.focusedDate),t=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),t=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),t=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),t=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),t=!0;break;case"Tab":this._onTabKeyDown(e,"calendar");break}t&&(e.preventDefault(),e.stopPropagation())}_onTabKeyDown(e,t){switch(e.stopPropagation(),t){case"calendar":e.shiftKey&&(e.preventDefault(),this.hasAttribute("fullscreen")?this.$.cancelButton.focus():this.__focusInput());break;case"today":e.shiftKey&&(e.preventDefault(),this.focusDateElement());break;case"cancel":e.shiftKey||(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"today")}__onCancelButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const t=this.focusableDateElement;t&&At(t.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,t.focus())}}async focusDate(e,t){const i=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=i,t||(this._focusedMonthDate=i.getDate()),await this.focusDateElement(!1)}async focusDateElement(e=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(t=>{setTimeout(t)}),e&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(ll(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){const t=this.focusedDate,i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()),i.setDate(t.getDate()+e),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){const t=this.focusedDate,i=new Date(0,0);i.setFullYear(t.getFullYear()),i.setMonth(t.getMonth()+e);const a=i.getMonth();i.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),i.getMonth()!==a&&i.setDate(0),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i,!0):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){const i=new Date(0,0);i.setFullYear(e.getFullYear()),t==="minDate"?(i.setMonth(e.getMonth()),i.setDate(1)):(i.setMonth(e.getMonth()+1),i.setDate(0)),this._dateAllowed(i,this.minDate,this.maxDate)?this.focusDate(i):this._dateAllowed(e,this.minDate,this.maxDate)?this.focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,i){return(!t||e>=t)&&(!i||e<=i)}_isTodayAllowed(e,t){const i=new Date,a=new Date(0,0);return a.setFullYear(i.getFullYear()),a.setMonth(i.getMonth()),a.setDate(i.getDate()),this._dateAllowed(a,e,t)}}customElements.define(oo.is,oo);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fu extends Vt{constructor(e){super(e,"error-message",()=>document.createElement("div"),(t,i)=>{this.__updateErrorId(i),this.__updateHasError()},!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(e){this.errorMessage=e,this.__updateHasError()}setInvalid(e){this.invalid=e,this.__updateHasError()}initCustomNode(e){this.__updateErrorId(e),e.textContent&&!this.errorMessage&&(this.errorMessage=e.textContent.trim()),this.__updateHasError()}teardownNode(e){let t=this.getSlotChild();!t&&e!==this.defaultNode&&(t=this.attachDefaultNode(),this.initNode(t)),this.__updateHasError()}__isNotEmpty(e){return Boolean(e&&e.trim()!=="")}__updateHasError(){const e=this.node,t=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));e&&(e.textContent=t?this.errorMessage:"",e.hidden=!t,t?e.setAttribute("role","alert"):e.removeAttribute("role")),this.host.toggleAttribute("has-error-message",t)}__updateErrorId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Nu{constructor(e){this.host=e,this.__required=!1}setTarget(e){this.__target=e,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(e){this.__setAriaRequiredAttribute(e),this.__required=e}setLabelId(e){this.__setLabelIdToAriaAttribute(e,this.__labelId),this.__labelId=e}setErrorId(e){this.__setErrorIdToAriaAttribute(e,this.__errorId),this.__errorId=e}setHelperId(e){this.__setHelperIdToAriaAttribute(e,this.__helperId),this.__helperId=e}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(e,t){this.__setAriaAttributeId("aria-labelledby",e,t)}__setErrorIdToAriaAttribute(e,t){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",e,t):this.__setAriaAttributeId("aria-describedby",e,t)}__setHelperIdToAriaAttribute(e,t){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",e,t):this.__setAriaAttributeId("aria-describedby",e,t)}__setAriaRequiredAttribute(e){!this.__target||["input","textarea"].includes(this.__target.localName)||(e?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(e,t,i){!this.__target||(i&&Kn(this.__target,e,i),t&&Qn(this.__target,e,t))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bu extends Vt{constructor(e){super(e,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(e){this.__updateHelperId(e),this.__observeHelper(e);const t=this.__hasHelper(e);this.__toggleHasHelper(t)}teardownNode(e){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const t=this.getSlotChild();if(t&&t!==this.defaultNode){const i=this.__hasHelper(t);this.__toggleHasHelper(i)}else this.__applyDefaultHelper(this.helperText,t)}setHelperText(e){this.helperText=e;const t=this.getSlotChild();(!t||t===this.defaultNode)&&this.__applyDefaultHelper(e,t)}__hasHelper(e){return e?e.children.length>0||e.nodeType===Node.ELEMENT_NODE&&customElements.get(e.localName)||this.__isNotEmpty(e.textContent):!1}__isNotEmpty(e){return e&&e.trim()!==""}__applyDefaultHelper(e,t){const i=this.__isNotEmpty(e);i&&!t&&(this.slotFactory=()=>document.createElement("div"),t=this.attachDefaultNode(),this.__updateHelperId(t),this.__observeHelper(t)),t&&(t.textContent=e),this.__toggleHasHelper(i)}__observeHelper(e){this.__helperObserver=new MutationObserver(t=>{t.forEach(i=>{const a=i.target,n=a===this.node;if(i.type==="attributes")n&&a.id!==this.defaultId&&this.__updateHelperId(a);else if(n||a.parentElement===this.node){const o=this.__hasHelper(this.node);this.__toggleHasHelper(o)}})}),this.__helperObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(e){this.host.toggleAttribute("has-helper",e),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:e,node:this.node}}))}__updateHelperId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hl=U(r=>class extends r{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cl=r=>class extends hl(Gn(pt(r))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new Nu(this),this._helperController=new Bu(this),this._errorController=new Fu(this),this._labelController.addEventListener("label-changed",t=>{const{hasLabel:i,node:a}=t.detail;this.__labelChanged(i,a)}),this._helperController.addEventListener("helper-changed",t=>{const{hasHelper:i,node:a}=t.detail;this.__helperChanged(i,a)})}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,i){t?this._fieldAriaController.setHelperId(i.id):this._fieldAriaController.setHelperId(null)}__labelChanged(t,i){t?this._fieldAriaController.setLabelId(i.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{t?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o0=U(r=>class extends R1(hl($1(r))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(i=>this.__isValidConstraint(i))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...i){if(!t)return;const a=this._hasValidConstraints(i),n=this.__previousHasConstraints&&!a;(this._hasValue||this.invalid)&&a?this.validate():n&&this._setInvalid(!1),this.__previousHasConstraints=a}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||t===0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=new WeakMap;function Hu(r){return qr.has(r)||qr.set(r,new Set),qr.get(r)}function Vu(r,e){const t=document.createElement("style");t.textContent=r,e===document?document.head.appendChild(t):e.insertBefore(t,e.firstChild)}const Yu=U(r=>class extends r{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),i=Hu(t);this.slotStyles.forEach(a=>{i.has(a)||(Vu(a,t),i.add(a))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dl=r=>class extends Yu(Tr(o0(cl(Le(r))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&!!this.value&&(t.stopPropagation(),this.__clear())}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=L.debounce(this._preventInputDebouncer,lt.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||t.key.length!==1||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const i=t.clipboardData.getData("text");this.__allowedTextRegExp.test(i)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const i=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(i)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`),this.__allowedTextRegExp=new RegExp(`^${t}*$`)}catch(i){console.error(i)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uu=M`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wu=M`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ju=M`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ul=[Wu,ju,Uu];/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qu{constructor(e){this.host=e,e.addEventListener("opened-changed",()=>{e.opened||this.__setVirtualKeyboardEnabled(!1)}),e.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),e.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(e){this.host.inputElement&&(this.host.inputElement.inputMode=e?"":"none")}}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gu=r=>class extends pt(Tr(o0(Le(r)))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",today:"Today",cancel:"Cancel",referenceDate:"",formatDate(t){const i=String(t.year).replace(/\d+/,a=>"0000".substr(a.length)+a);return[t.month+1,t.day,i].join("/")},parseDate(t){const i=t.split("/"),a=new Date;let n,o=a.getMonth(),s=a.getFullYear();if(i.length===3){if(o=parseInt(i[0])-1,n=parseInt(i[1]),s=parseInt(i[2]),i[2].length<3&&s>=0){const l=this.referenceDate?Wt(this.referenceDate):new Date;s=Lu(l,s,o,n)}}else i.length===2?(o=parseInt(i[0])-1,n=parseInt(i[1])):i.length===1&&(n=parseInt(i[0]));if(n!==void 0)return{day:n,month:o,year:s}},formatTitle:(t,i)=>`${t} ${i}`})},min:{type:String},max:{type:String},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:ae},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)"]}static get constraints(){return[...super.constraints,"min","max"]}get clearElement(){return null}get _inputValue(){return this.inputElement?this.inputElement.value:void 0}set _inputValue(t){this.inputElement&&(this.inputElement.value=t)}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this)}_onFocus(t){super._onFocus(t),this._noInput&&t.target.blur()}_onBlur(t){super._onBlur(t),this.opened||(this.autoOpenDisabled&&this._selectParsedOrFocusedDate(),this.validate(),this._inputValue===""&&this.value!==""&&(this.value=""))}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new e0(this._fullscreenMediaQuery,t=>{this._fullscreen=t})),this.addController(new qu(this))}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(t,i,a){super._propertiesChanged(t,i,a),"value"in i&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",t=>{this.opened=t.detail.value}),this.$.overlay.addEventListener("vaadin-overlay-escape-press",()=>{this._focusedDate=this._selectedDate,this._close()}),this._overlayContent.addEventListener("close",()=>{this._close()}),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this._overlayContent.addEventListener("date-tap",t=>{this.__userConfirmedDate=!0,this._selectDate(t.detail.date),this._close()}),this._overlayContent.addEventListener("date-selected",t=>{this.__userConfirmedDate=!0,this._selectDate(t.detail.date)}),this._overlayContent.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}checkValidity(){const t=!this._inputValue||!!this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),i=!this._selectedDate||xe(this._selectedDate,this._minDate,this._maxDate);let a=!0;return this.inputElement&&(this.inputElement.checkValidity?a=this.inputElement.checkValidity():this.inputElement.validate&&(a=this.inputElement.validate())),t&&i&&a}_shouldSetFocus(t){return!this._shouldKeepFocusRing}_shouldRemoveFocus(t){return!this.opened}_setFocused(t){super._setFocused(t),this._shouldKeepFocusRing=t&&this._keyboardActive}_selectDate(t){const i=this._formatISO(t);this.value!==i&&(this.__dispatchChange=!0),this._selectedDate=t}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(t,i,a,n,o,s){return!t||i&&(!s||o)||a&&o||!n.parseDate}_formatISO(t){if(!(t instanceof Date))return"";const i=(c,d="00")=>(d+c).substr((d+c).length-d.length);let a="",n="0000",o=t.getFullYear();o<0?(o=-o,a="-",n="000000"):t.getFullYear()>=1e4&&(a="+",n="000000");const s=a+i(o,n),l=i(t.getMonth()+1),h=i(t.getDate());return[s,l,h].join("-")}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.autocomplete="off",t.setAttribute("role","combobox"),t.setAttribute("aria-haspopup","dialog"),t.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(t){t&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=t),this.inputElement&&this.inputElement.setAttribute("aria-expanded",t)}_selectedDateChanged(t,i){if(t===void 0||i===void 0)return;const a=this._formatISO(t);this.__keepInputValue||this._applyInputValue(t),a!==this.value&&(this.validate(),this.value=a),this._ignoreFocusedDateChange=!0,this._focusedDate=t,this._ignoreFocusedDateChange=!1}_focusedDateChanged(t,i){t===void 0||i===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(t)}__getOverlayTheme(t,i){if(i)return t}_valueChanged(t,i){const a=Wt(t);if(t&&!a){this.value=i;return}t?At(this._selectedDate,a)||(this._selectedDate=a,i!==void 0&&this.validate()):this._selectedDate=null,this._toggleHasValue(this._hasValue)}_onOverlayOpened(){const t=Wt(this.initialPosition),i=this._selectedDate||this._overlayContent.initialPosition||t||new Date;t||xe(i,this._minDate,this._maxDate)?this._overlayContent.initialPosition=i:this._overlayContent.initialPosition=ll(i,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&(this.focusElement.blur(),this._overlayContent.focusDateElement())}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const t=this._inputValue||"",i=this._getParsedDate(t);this._isValidDate(i)?this._selectDate(i):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}_onScroll(t){(t.target===window||!this._overlayContent.contains(t.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(t){this._inputValue=t?this._getFormattedDate(this.i18n.formatDate,t):""}_getFormattedDate(t,i){return t(n0(i))}_setSelectionRange(t,i){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(t,i)}_isValidDate(t){return t&&!isNaN(t.getTime())}_onChange(t){this._inputValue===""&&(this.__dispatchChange=!0),t.stopPropagation()}_onClick(t){this._isClearButton(t)||this._onHostClick(t)}_onHostClick(t){(!this.autoOpenDisabled||this._noInput)&&(t.preventDefault(),this.open())}_onClearButtonClick(t){t.preventDefault(),this.value="",this._inputValue="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(t){switch(super._onKeyDown(t),this._noInput&&[9].indexOf(t.keyCode)===-1&&t.preventDefault(),t.key){case"ArrowDown":case"ArrowUp":t.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(t.preventDefault(),t.stopPropagation(),this._setSelectionRange(0,0),t.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(t){const i=this.value;this.opened?this.close():this._selectParsedOrFocusedDate(),i===this.value&&this.validate()}_onEscape(t){if(!this.opened){if(this.clearButtonVisible&&!!this.value){t.stopPropagation(),this._onClearButtonClick(t);return}this.autoOpenDisabled?(this.inputElement.value===""&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate())}}_getParsedDate(t=this._inputValue){const i=this.i18n.parseDate&&this.i18n.parseDate(t);return i&&Wt(`${i.year}-${i.month+1}-${i.day}`)}_isClearButton(t){return t.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this.inputElement.value&&!this.autoOpenDisabled&&this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this._inputValue){const t=this._getParsedDate();this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,At(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}__computeMinOrMaxDate(t){return Wt(t)}};/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-date-picker",[ul,Iu],{moduleId:"vaadin-date-picker-styles"});class so extends Gu(dl(Y(tt(O)))){static get is(){return"vaadin-date-picker"}static get template(){return R`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        disable-upgrade
      >
        <template>
          <vaadin-date-picker-overlay-content
            id="overlay-content"
            i18n="[[i18n]]"
            fullscreen$="[[_fullscreen]]"
            label="[[label]]"
            selected-date="[[_selectedDate]]"
            focused-date="{{_focusedDate}}"
            show-week-numbers="[[showWeekNumbers]]"
            min-date="[[_minDate]]"
            max-date="[[_maxDate]]"
            part="overlay-content"
            theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
          ></vaadin-date-picker-overlay-content>
        </template>
      </vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Or(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new Pr(this.inputElement,this._labelController)),this._tooltipController=new It(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setShouldShow(t=>!t.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",t=>t.preventDefault())}_initOverlay(){super._initOverlay(),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(e){e.detail.sourceEvent&&e.detail.sourceEvent.composedPath().includes(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_openedChanged(e){super._openedChanged(e),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(so.is,so);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lo extends N1(O){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(e,t){e==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/.test(e)&&this._updateFlexAndWidth(),e==="frozen"&&(this.frozen=this.frozen||t),e==="lastFrozen"&&(this._lastFrozen=this._lastFrozen||t),e==="frozenToEnd"&&(this.frozenToEnd=this.frozenToEnd||t),e==="firstFrozenToEnd"&&(this._firstFrozenToEnd=this._firstFrozenToEnd||t)}_groupOrderChanged(e,t){if(t){const i=t.slice(0);if(!e){i.forEach(s=>{s._order=0});return}const a=/(0+)$/.exec(e).pop().length,n=~~(Math.log(t.length)/Math.LN10)+1,o=10**(a-n);i[0]&&i[0]._order&&i.sort((s,l)=>s._order-l._order),Q1(i,o,e)}}_groupReorderStatusChanged(e,t){e===void 0||t===void 0||t.forEach(i=>{i._reorderStatus=e})}_groupResizableChanged(e,t){e===void 0||t===void 0||t.forEach(i=>{i.resizable=e})}_updateVisibleChildColumns(e){this._visibleChildColumns=Array.prototype.filter.call(e,t=>!t.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(!!this._visibleChildColumns){if(this._visibleChildColumns.length>0){const e=this._visibleChildColumns.reduce((t,i)=>(t+=` + ${(i.width||"0px").replace("calc","")}`,t),"").substring(3);this._setWidth(`calc(${e})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(e,t)=>e+t.flexGrow,0))}}__scheduleAutoFreezeWarning(e,t){if(this._grid){const i=t.replace(/([A-Z])/g,"-$1").toLowerCase(),a=e[0][t]||e[0].hasAttribute(i);e.every(o=>(o[t]||o.hasAttribute(i))===a)||(this._grid.__autoFreezeWarningDebouncer=L.debounce(this._grid.__autoFreezeWarningDebouncer,Lt,()=>{console.warn(`WARNING: Joining ${t} and non-${t} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${t}. Otherwise, exclude the ${t} columns from the joined group.`)}))}}_groupFrozenChanged(e,t){t===void 0||e===void 0||e!==!1&&(this.__scheduleAutoFreezeWarning(t,"frozen"),Array.from(t).forEach(i=>{i.frozen=e}))}_groupFrozenToEndChanged(e,t){t===void 0||e===void 0||e!==!1&&(this.__scheduleAutoFreezeWarning(t,"frozenToEnd"),Array.from(t).forEach(i=>{i.frozenToEnd=e}))}_groupHiddenChanged(e){(e||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const e=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(e||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(e=>{e.hidden=this.hidden})}_colSpanChanged(e,t,i){t&&(t.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(t,e)),i&&(i.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(i,e))}_getChildColumns(e){return ut.getFlattenedNodes(e).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new ut(this,e=>{(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,Ft.run(()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()}))}),this._observer.flush()}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}customElements.define(lo.is,lo);A("vaadin-grid-sorter",M`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pl=document.createElement("template");pl.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(pl.content);class ho extends Y(Ht(O)){static get template(){return R`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,!this.parentNode&&this._grid&&this._grid.__removeSorters([this])}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,t){t!==!1&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this._isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:Boolean(this._shiftClick),fromSorterClick:Boolean(this._fromSorterClick)},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}}customElements.define(ho.is,ho);const Qu=M`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;A("vaadin-horizontal-layout",Qu,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class co extends tt(Y(O)){static get template(){return R`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(co.is,co);A("vaadin-icon",M`
    :host {
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }
  `,{moduleId:"lumo-icon"});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ku={HTML:1,SVG:2},vl=(r,e)=>e===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _a extends Ul{constructor(e){if(super(e),this.et=ee,e.type!==Wl.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ee||e==null)return this.ft=void 0,this.et=e;if(e===jl)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}_a.directiveName="unsafeHTML",_a.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ma extends _a{}ma.directiveName="unsafeSVG",ma.resultType=2;const Xu=ql(ma);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Zu(r){let e=ee;if(r){const t=r.cloneNode(!0);t.removeAttribute("id"),e=Gl`${Xu(t.outerHTML)}`}return e}function Ju(r){return vl(r,Ku.SVG)||r===ee}function fl(r){let e=r==null||r===""?ee:r;return Ju(e)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),e=ee),e}function t2(r,e){const t=fl(r);Pn(t,e)}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ve={};class Re extends tt(O){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(e){let t=ve[e];return t||(t=document.createElement("vaadin-iconset"),t.name=e,ve[e]=t),t}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(e){this._icons=this._icons||this.__createIconMap();const t=this._icons[this.__getIconId(e)];return{svg:Zu(t),size:this.size,viewBox:t?t.getAttribute("viewBox"):null}}__createIconMap(){const e={};return this.querySelectorAll("[id]").forEach(t=>{e[this.__getIconId(t.id)]=t}),e}__getIconId(e){return(e||"").replace(`${this.name}:`,"")}__nameChanged(e,t){t&&(ve[e]=Re.getIconset(t),delete ve[t]),e&&(ve[e]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:e})))}}customElements.define(Re.is,Re);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const e2="vaadin";class uo extends Y(tt(pt(O))){static get template(){return R`
      <style>
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          vertical-align: middle;
          width: 24px;
          height: 24px;
          fill: currentColor;
        }

        :host([hidden]) {
          display: none !important;
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      </style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="[[__computeViewBox(size, __viewBox)]]"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      ></svg>

      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-icon"}static get properties(){return{icon:{type:String,observer:"__iconChanged"},svg:{type:Object},size:{type:Number,value:24},__svgElement:Object,__viewBox:String}}static get observers(){return["__svgChanged(svg, __svgElement)"]}constructor(){super(),this.__onIconsetRegistered=this.__onIconsetRegistered.bind(this)}ready(){super.ready(),this.__svgElement=this.shadowRoot.querySelector("svg"),this._tooltipController=new It(this),this.addController(this._tooltipController)}__getIconsetName(e){return e?e.split(":")[0]||e2:void 0}__onIconsetRegistered(e){e.detail===this.__getIconsetName(this.icon)&&this.__iconChanged(this.icon)}connectedCallback(){super.connectedCallback(),document.addEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("vaadin-iconset-registered",this.__onIconsetRegistered)}__iconChanged(e){if(e){this.__checkDeprecatedIcon(e);const t=this.__getIconsetName(e),i=Re.getIconset(t),{svg:a,size:n,viewBox:o}=i.applyIcon(e);o&&(this.__viewBox=o),n!==this.size&&(this.size=n),this.svg=a}else this.svg=fl(null)}__checkDeprecatedIcon(e){const t={"vaadin:buss":"vaadin:bus","vaadin:funcion":"vaadin:function","vaadin:megafone":"vaadin:megaphone","vaadin:palete":"vaadin:palette","vaadin:trendind-down":"vaadin:trending-down"};e in t&&console.warn(`WARNING: The icon "${e}" is deprecated. Use "${t[e]}" instead`)}__svgChanged(e,t){!t||t2(e,t)}__computeViewBox(e,t){return t||`0 0 ${e} ${e}`}}customElements.define(uo.is,uo);/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _l=document.createElement("template");_l.innerHTML=`<vaadin-iconset name="vaadin" size="16">
<svg><defs>
<g id="vaadin:abacus"><path d="M0 0v16h16v-16h-16zM14 2v3h-0.1c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-3h12zM13.9 10c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-0.2c-0.2-0.6-0.8-1-1.4-1s-1.2 0.4-1.4 1h-3.2c-0.2-0.6-0.7-1-1.4-1s-1.2 0.4-1.4 1h-0.1v-4h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1l-0.1 4zM2 14v-3h0.1c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h3.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.2c0.2 0.6 0.8 1 1.4 1s1.2-0.4 1.4-1h0.1v3h-12z"></path></g>
<g id="vaadin:absolute-position"><path d="M0 0v16h16v-16h-16zM15 15h-14v-6h3v1l3-2-3-2v1h-3v-6h6v3h-1l2 3 2-3h-1v-3h6v14z"></path></g>
<g id="vaadin:academy-cap"><path d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path><path d="M8 0l-8 4 8 5 8-5-8-4z"></path><path d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path></g>
<g id="vaadin:accessibility"><path d="M10.4 10h-0.5c0.1 0.3 0.1 0.7 0.1 1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.1 1.6-3.8 3.7-4l-0.2-1c-2.6 0.4-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5 2.4 0 4.4-1.7 4.9-3.9l-0.5-2.1z"></path><path d="M13.1 13l-1.1-5h-4.1l-0.2-1h3.3v-1h-3.5l-0.6-2.5c0.9-0.1 1.6-0.8 1.6-1.7 0-1-0.8-1.8-1.8-1.8s-1.7 0.8-1.7 1.8c0 0.6 0.3 1.2 0.8 1.5l1.3 5.7h4.1l1.2 5h2.6v-1h-1.9z"></path></g>
<g id="vaadin:accordion-menu"><path d="M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M0 13h16v3h-16v-3z"></path></g>
<g id="vaadin:add-dock"><path d="M0 11v5h16v-5h-16zM12 15h-3v-3h3v3z"></path><path d="M12 7v-2c0-5-8-5-8-5s5 0 5 5v2h-2l3.5 3 3.5-3h-2z"></path></g>
<g id="vaadin:adjust"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM2 8c0-3.3 2.7-6 6-6v12c-3.3 0-6-2.7-6-6z"></path></g>
<g id="vaadin:adobe-flash"><path d="M0 0v16h16v-16h-16zM13 4.4c-3 0-3.3 2.6-3.3 2.6h1.3v2h-2.4c-1.8 5.8-5.6 5-5.6 5v-2.5c0 0 2.5 0.6 3.9-4 1.8-6.1 6.1-5.5 6.1-5.5v2.4z"></path></g>
<g id="vaadin:airplane"><path d="M12.3 6.5c0.5-0.5 0.9-0.8 1.2-1.1 1.6-1.6 3.2-4.1 2.2-5.1s-3.4 0.6-5 2.2c-0.3 0.3-0.6 0.7-1.1 1.2l-7-3.2c-0.7-0.3-1.5-0.2-2 0.3l-0.6 0.5 6.6 5.7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-0.6c-0.5-0.3-1.2-0.3-1.6 0.2l-0.3 0.3 2.8 2.1 2 2.8 0.3-0.3c0.4-0.4 0.5-1.1 0.2-1.6l-0.5-1.1c0.9-0.7 2.4-2.1 4-3.4l5.7 6.6 0.5-0.5c0.5-0.5 0.6-1.3 0.3-2l-3.2-7z"></path></g>
<g id="vaadin:alarm"><path d="M8 5h-1v5h4v-1l-2.93 0.070-0.070-4.070z"></path><path d="M5.46 0.87c-0.387-0.522-1-0.856-1.692-0.856-0.41 0-0.793 0.118-1.117 0.321l-0.991 0.765c-0.41 0.384-0.666 0.929-0.666 1.534 0 0.496 0.172 0.951 0.459 1.31z"></path><path d="M14.34 1.1l-1-0.77c-0.315-0.198-0.698-0.316-1.108-0.316-0.692 0-1.305 0.334-1.688 0.85l3.996 3.076c0.287-0.356 0.46-0.813 0.46-1.312 0-0.602-0.253-1.145-0.659-1.528z"></path><path d="M12.87 14c1.308-1.268 2.122-3.038 2.13-4.998-0.028-3.856-3.145-6.973-6.997-7.002-3.857 0.028-6.975 3.145-7.003 6.997 0.008 1.965 0.822 3.735 2.128 5.001l-0.938 0.942c-0.075 0.102-0.12 0.231-0.12 0.37 0 0.348 0.282 0.63 0.63 0.63 0.139 0 0.268-0.045 0.372-0.122l0.998-0.999c1.092 0.758 2.446 1.211 3.905 1.211s2.813-0.453 3.928-1.226l0.977 1.015c0.102 0.075 0.231 0.12 0.37 0.12 0.348 0 0.63-0.282 0.63-0.63 0-0.139-0.045-0.268-0.122-0.372zM2.87 9c0.028-2.822 2.308-5.102 5.127-5.13 2.825 0.028 5.105 2.308 5.133 5.127-0.028 2.825-2.308 5.105-5.127 5.133-2.825-0.028-5.105-2.308-5.133-5.127z"></path></g>
<g id="vaadin:align-center"><path d="M5 0h6v3h-6v-3z"></path><path d="M1 4h14v3h-14v-3z"></path><path d="M3 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-justify"><path d="M0 0h16v3h-16v-3z"></path><path d="M0 4h16v3h-16v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 8h16v3h-16v-3z"></path></g>
<g id="vaadin:align-left"><path d="M0 0h11v3h-11v-3z"></path><path d="M0 4h15v3h-15v-3z"></path><path d="M0 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:align-right"><path d="M5 0h11v3h-11v-3z"></path><path d="M1 4h15v3h-15v-3z"></path><path d="M3 8h13v3h-13v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:alt-a"><path d="M14 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0 1 0.56 1.44 2 1.44v-1c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M9 3h1v9h-1v-9z"></path><path d="M3 12l0.57-2h2.82l0.61 2h1l-2.27-8h-1.46l-2.27 8h1zM5 5.1l1.11 3.9h-2.22z"></path></g>
<g id="vaadin:alt"><path d="M3.89 9h2.22l-1.11-3.9-1.11 3.9z"></path><path d="M0 0v16h16v-16h-16zM7 12l-0.61-2h-2.78l-0.61 2h-1l2.27-8h1.46l2.27 8h-1zM10 12h-1v-9h1v9zM14 7h-1v3.5s0 0.5 1 0.5v1c-1 0-2-0.44-2-1.44v-3.56h-0.5v-1h0.5v-1h1v1h1v1z"></path></g>
<g id="vaadin:ambulance"><path d="M6.18 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M14 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M5 6h-1v1h-1v1h1v1h1v-1h1v-1h-1v-1z"></path><path d="M15.76 8.64l-3-4.53c-0.455-0.673-1.215-1.11-2.078-1.11-0.008 0-0.015 0-0.023 0l-2.659-0v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-4.5c-0.828 0-1.5 0.672-1.5 1.5v8.5h1.37c0.474-1.135 1.546-1.931 2.812-2 1.278 0.072 2.345 0.868 2.81 1.978l2.188 0.021c0.474-1.135 1.546-1.931 2.812-2 1.303 0.003 2.405 0.827 2.822 1.979l1.187 0.021v-3.57c-0.001-0.294-0.090-0.568-0.243-0.795zM6.92 8.12c-0.266 1.117-1.255 1.935-2.435 1.935-1.381 0-2.5-1.119-2.5-2.5 0-1.18 0.818-2.17 1.918-2.432 0.195-0.049 0.399-0.075 0.609-0.075 1.37 0 2.48 1.11 2.48 2.48 0 0.21-0.026 0.414-0.075 0.609zM10 8v-3h0.85c0.003-0 0.006-0 0.009-0 0.777 0 1.461 0.394 1.866 0.992l1.325 2.008z"></path></g>
<g id="vaadin:anchor"><path d="M13 9v2c0 0-0.8 1.7-4 1.9v-6.9h2.2c0.2 0.3 0.5 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.8 0.5h-2.2v-1.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v1.3h-2.2c-0.1-0.3-0.4-0.5-0.8-0.5-0.6 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5h2.2v7c-3.3-0.3-4-2-4-2v-2h-3c0 0 2.8 7 8 7 5 0 8-7 8-7h-3zM8 1c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1 0.4-1 1-1z"></path></g>
<g id="vaadin:angle-double-down"><path d="M3 2v2l5 5 5-5v-2l-5 5z"></path><path d="M3 7v2l5 5 5-5v-2l-5 5z"></path></g>
<g id="vaadin:angle-double-left"><path d="M14 3h-2l-5 5 5 5h2l-5-5z"></path><path d="M9 3h-2l-5 5 5 5h2l-5-5z"></path></g>
<g id="vaadin:angle-double-right"><path d="M2 13h2l5-5-5-5h-2l5 5z"></path><path d="M7 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-double-up"><path d="M13 14v-2l-5-5-5 5v2l5-5z"></path><path d="M13 9v-2l-5-5-5 5v2l5-5z"></path></g>
<g id="vaadin:angle-down"><path d="M13 4v2l-5 5-5-5v-2l5 5z"></path></g>
<g id="vaadin:angle-left"><path d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></g>
<g id="vaadin:angle-right"><path d="M4 13h2l5-5-5-5h-2l5 5z"></path></g>
<g id="vaadin:angle-up"><path d="M3 12v-2l5-5 5 5v2l-5-5z"></path></g>
<g id="vaadin:archive"><path d="M0 1h16v3h-16v-3z"></path><path d="M1 5v11h14v-11h-14zM11 9h-6v-2h6v2z"></path></g>
<g id="vaadin:archives"><path d="M11 2h-6v4h6v-4zM9 4h-2v-1h2v1z"></path><path d="M3 0v16h2v-1h6v1h2v-16h-10zM12 14h-8v-6h8v6zM12 7h-8v-6h8v6z"></path><path d="M11 9h-6v4h6v-4zM9 11h-2v-1h2v1z"></path></g>
<g id="vaadin:area-select"><path d="M7.9 7.9l2.1 7.5 1.7-2.6 3.2 3.2 1.1-1.1-3.3-3.2 2.7-1.6z"></path><path d="M8 12h-7v-9h12v5.4l1 0.2v-6.6h-14v11h8.2z"></path></g>
<g id="vaadin:arrow-backward"><path d="M0 7.9l6-4.9v3c0 0 1.1 0 2 0 8 0 8 8 8 8s-1-4-7.8-4c-1.1 0-1.8 0-2.2 0v2.9l-6-5z"></path></g>
<g id="vaadin:arrow-circle-down-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-4.4 0-8 3.6-8 8zM9 9.6l1.8-1.8 1.4 1.4-4.2 4.2-4.2-4.2 1.4-1.4 1.8 1.8v-6.6h2v6.6z"></path></g>
<g id="vaadin:arrow-circle-left-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6.4 9l1.8 1.8-1.4 1.4-4.2-4.2 4.2-4.2 1.4 1.4-1.8 1.8h6.6v2h-6.6z"></path></g>
<g id="vaadin:arrow-circle-right-o"><path d="M8 15c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8v0z"></path><path d="M9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM9.6 7l-1.8-1.8 1.4-1.4 4.2 4.2-4.2 4.2-1.4-1.4 1.8-1.8h-6.6v-2h6.6z"></path></g>
<g id="vaadin:arrow-circle-up-o"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8v0z"></path><path d="M7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z"></path></g>
<g id="vaadin:arrow-down"><path d="M12.5 8.6l-3.5 3.6v-12.2h-2v12.2l-3.5-3.6-1.4 1.5 5.9 5.9 5.9-5.9z"></path></g>
<g id="vaadin:arrow-forward"><path d="M16 7.9l-6-4.9v3c-0.5 0-1.1 0-2 0-8 0-8 8-8 8s1-4 7.8-4c1.1 0 1.8 0 2.2 0v2.9l6-5z"></path></g>
<g id="vaadin:arrow-left"><path d="M7.4 12.5l-3.6-3.5h12.2v-2h-12.2l3.6-3.5-1.5-1.4-5.9 5.9 5.9 5.9z"></path></g>
<g id="vaadin:arrow-long-down"><path d="M7 1h2v11h2l-3 3-3-3h2z"></path></g>
<g id="vaadin:arrow-long-left"><path d="M15 7v2h-11v2l-3-3 3-3v2z"></path></g>
<g id="vaadin:arrow-right"><path d="M8.6 3.5l3.5 3.5h-12.1v2h12.1l-3.5 3.5 1.4 1.4 6-5.9-6-5.9z"></path></g>
<g id="vaadin:arrow-up"><path d="M3.4 7.4l3.6-3.6v12.2h2v-12.2l3.5 3.6 1.4-1.5-5.9-5.9-6 5.9z"></path></g>
<g id="vaadin:arrows-cross"><path d="M15 5v-4h-4l1.3 1.3-4.3 4.3-4.3-4.3 1.3-1.3h-4v4l1.3-1.3 4.3 4.3-4.3 4.3-1.3-1.3v4h4l-1.3-1.3 4.3-4.3 4.3 4.3-1.3 1.3h4v-4l-1.3 1.3-4.3-4.3 4.3-4.3z"></path></g>
<g id="vaadin:arrows-long-h"><path d="M16 8l-3-3v2h-10v-2l-3 3 3 3v-2h10v2z"></path></g>
<g id="vaadin:arrows-long-right"><path d="M1 9v-2h11v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:arrows-long-up"><path d="M9 15h-2v-11h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:arrows-long-v"><path d="M9 3h2l-3-3-3 3h2v10h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:arrows"><path d="M16 8l-3-3v2h-4v-4h2l-3-3-3 3h2v4h-4v-2l-3 3 3 3v-2h4v4h-2l3 3 3-3h-2v-4h4v2z"></path></g>
<g id="vaadin:asterisk"><path d="M15.9 5.7l-2-3.4-3.9 2.2v-4.5h-4v4.5l-4-2.2-2 3.4 3.9 2.3-3.9 2.3 2 3.4 4-2.2v4.5h4v-4.5l3.9 2.2 2-3.4-4-2.3z"></path></g>
<g id="vaadin:at"><path d="M7.5 12.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2c0.1 2.3-1.9 4.2-4.2 4.2zM7.5 5.2c-1.5 0-2.7 1.3-2.7 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.4-2.8-2.9-2.8z"></path><path d="M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.5-0.4 3-1.2 4.2-0.3 0.5-1.1 1.2-2.3 1.2-0.8 0-1.3-0.3-1.6-0.6-0.7-0.7-0.6-1.8-0.6-1.9v-6.9h1.5v7c0 0.2 0 0.6 0.2 0.8 0 0 0.2 0.2 0.5 0.2 0.7 0 1.1-0.5 1.1-0.5 0.6-1 1-2.2 1-3.4 0-3.6-2.9-6.5-6.5-6.5s-6.6 2.8-6.6 6.4 2.9 6.5 6.5 6.5c0.7 0 1.3-0.1 1.9-0.3l0.4 1.4c-0.7 0.3-1.5 0.4-2.3 0.4z"></path></g>
<g id="vaadin:automation"><path d="M14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M11.7 16v0c-0.8 0-1.6-0.2-2.3-0.7l-6.2-3.3c-0.5-0.4-0.9-0.6-1.3-1-1.2-1.2-1.9-2.9-1.9-4.6s0.7-3.3 1.9-4.5c1.2-1.2 2.8-1.9 4.5-1.9s3.3 0.7 4.6 1.9c0.4 0.4 0.6 0.7 1 1.2l3.5 6.4c1 1.7 0.7 3.8-0.7 5.2-0.9 0.9-1.9 1.3-3.1 1.3zM6.4 1c-1.4 0-2.8 0.6-3.8 1.6s-1.6 2.4-1.6 3.8c0 1.5 0.6 2.8 1.6 3.8 0.3 0.3 0.6 0.5 1.1 0.8l6.3 3.4c0.6 0.4 1.2 0.5 1.8 0.5v0c0.9 0 1.7-0.3 2.3-1 1.1-1.1 1.3-2.7 0.5-4l-3.5-6.4c-0.3-0.4-0.5-0.7-0.8-1-1.1-0.9-2.4-1.5-3.9-1.5z"></path><path d="M11 7v-1l-1.4-0.5c-0.1-0.2-0.1-0.3-0.2-0.5l0.6-1.3-0.7-0.7-1.3 0.6c-0.2-0.1-0.3-0.1-0.5-0.2l-0.5-1.4h-1l-0.5 1.4c-0.2 0.1-0.3 0.1-0.5 0.2l-1.3-0.6-0.7 0.7 0.6 1.3c-0.1 0.2-0.1 0.3-0.2 0.5l-1.4 0.5v1l1.4 0.5c0.1 0.2 0.1 0.3 0.2 0.5l-0.6 1.3 0.7 0.7 1.3-0.6c0.2 0.1 0.3 0.2 0.5 0.2l0.5 1.4h1l0.5-1.4c0.2-0.1 0.3-0.1 0.5-0.2l1.3 0.6 0.7-0.7-0.6-1.3c0.1-0.2 0.2-0.3 0.2-0.5l1.4-0.5zM6.5 8c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:backspace-a"><path d="M5 12l-5-4 5-4v2h11v4h-11v2z"></path></g>
<g id="vaadin:backspace"><path d="M0 2v12h16v-12h-16zM13 9h-7v2l-3-3 3-3v2h7v2z"></path></g>
<g id="vaadin:backwards"><path d="M16 15v-14l-8 7z"></path><path d="M8 15v-14l-8 7z"></path></g>
<g id="vaadin:ban"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 2c1.3 0 2.5 0.4 3.5 1.1l-8.4 8.4c-0.7-1-1.1-2.2-1.1-3.5 0-3.3 2.7-6 6-6zM8 14c-1.3 0-2.5-0.4-3.5-1.1l8.4-8.4c0.7 1 1.1 2.2 1.1 3.5 0 3.3-2.7 6-6 6z"></path></g>
<g id="vaadin:bar-chart-h"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M2 8h4v6h-4v-6z"></path><path d="M7 2h4v12h-4v-12z"></path><path d="M12 6h4v8h-4v-8z"></path></g>
<g id="vaadin:bar-chart-v"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M8 0v4h-6v-4h6z"></path><path d="M14 5v4h-12v-4h12z"></path><path d="M10 10v4h-8v-4h8z"></path></g>
<g id="vaadin:bar-chart"><path d="M0 15h15v1h-15v-1z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M4 9h3v5h-3v-5z"></path><path d="M8 5h3v9h-3v-9z"></path><path d="M12 0h3v14h-3v-14z"></path></g>
<g id="vaadin:barcode"><path d="M0 3h1v10h-1v-10z"></path><path d="M8 3h2v10h-2v-10z"></path><path d="M11 3h1v10h-1v-10z"></path><path d="M13 3h1v10h-1v-10z"></path><path d="M15 3h1v10h-1v-10z"></path><path d="M2 3h3v10h-3v-10z"></path><path d="M6 3h1v10h-1v-10z"></path></g>
<g id="vaadin:bed"><path d="M4.28 7h2.72l-1.15-1.68c-0.542-0.725-1.36-1.216-2.295-1.319l-0.555-0.001v1.54c-0.011 0.063-0.018 0.136-0.018 0.211 0 0.69 0.56 1.25 1.25 1.25 0.017 0 0.034-0 0.050-0.001z"></path><path d="M13 7v-0.28c0-0.003 0-0.007 0-0.010 0-0.934-0.749-1.693-1.678-1.71l-4.692-0c0.5 0.62 1.37 2 1.37 2h5z"></path><path d="M15 5.1c-0.552 0-1 0.448-1 1v1.9h-12v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v9h2v-2h12v2h2v-6.9c0-0.552-0.448-1-1-1z"></path></g>
<g id="vaadin:bell-o"><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0 0-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v2h4c0 0-0.1 2 2 2s2-2 2-2h4v-2l-1.3-0.6zM13 13h-10v-0.4l0.7-0.4c0.8-0.3 1.3-1.1 1.3-2v-5.2c0-0.1 0-1.6 2.2-1.9l0.8-0.2 0.8 0.1c2 0.4 2.2 1.7 2.2 2v5.2c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.3z"></path></g>
<g id="vaadin:bell-slash-o"><path d="M15.2 0l-3.6 3.6c-0.4-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-3 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1.3l-2 2v0.7h0.7l15.3-15.4v-0.6h-0.8zM5 10.3c0-0.1 0-0.1 0 0v-5.3c0-0.1 0.1-1.6 2.2-1.9l0.8-0.2 0.8 0.1c1.2 0.2 1.8 0.8 2 1.3l-5.8 6z"></path><path d="M12 10.2v-4.6l-1 1v3.5c0 0.9 0.5 1.7 1.3 2.1l0.7 0.4v0.4h-8.3l-1 1h2.4c0 0-0.1 2 2 2s2-2 2-2h3.9v-2l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell-slash"><path d="M15.2 0l-3.6 3.6c-0.5-0.6-1.2-1.3-2.6-1.5v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h0.3l-2.3 2.3v0.7h0.7l15.3-15.4v-0.6h-0.8zM6 4.8v4.5l-1 1v-5.3c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path><path d="M8 16c2.1 0 2-2 2-2h-4c0 0-0.1 2 2 2z"></path><path d="M12 10.2v-4.6l-6 6-0.3 0.4-1 1h9.3v-1l-1.3-0.6c-0.4-0.3-0.7-0.7-0.7-1.2z"></path></g>
<g id="vaadin:bell"><path d="M6 14h4c0 0 0.1 2-2 2s-2-2-2-2z"></path><path d="M12.7 11.4c-0.5-0.2-0.7-0.7-0.7-1.2v-5.2c0 0-0.2-2.4-3-2.9v-1.1c0 0 0.1-1-1-1s-1 1-1 1v1.1c-2.8 0.5-3 2.9-3 2.9v5.2c0 0.5-0.3 1-0.7 1.2l-1.3 0.6v1h12v-1l-1.3-0.6zM6 4.8v7.2h-2c0.8 0 1-1 1-1v-6c0 0 0-0.8 0.7-1.4 0.7-0.7 1.3-0.6 1.3-0.6s-1 0.7-1 1.8z"></path></g>
<g id="vaadin:boat"><path d="M1.5 9.6c1.1 0.7 2.5 1.9 2.5 3.3 0 0.4 0 0.7 0 1.1 0 0 0.1 0 0.1 0s0.9 0 2-1c1 1 2 1 2 1s1 0 2-1c1 1 1.9 1 1.9 1s0.1 0 0.1 0c0-0.3 0-0.7 0-1.1 0-1.4 1.4-2.6 2.5-3.3 0.6-0.4 0.5-1.2-0.2-1.4l-1.4-0.4v-3.8h-1v-1h-3v-2h-2v2h-3v1h-1v3.8l-1.3 0.4c-0.8 0.2-0.8 1-0.2 1.4zM4 5h1v-1h6v1h1v2.5l-3.3-1c-0.5-0.1-1-0.1-1.5 0l-3.2 1v-2.5z"></path><path d="M14 14c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1s-1 0-2-1c-1 1-2 1-2 1v1h16v-1c0 0-1 0-2-1z"></path></g>
<g id="vaadin:bold"><path d="M11 7.5c0 0 2-0.8 2-3.6 0-4.1-5.1-3.9-7-3.9h-4v16h4c3.7 0 8 0 8-4.4 0-3.8-3-4.1-3-4.1zM9 4.4c0 1.8-1.5 1.6-3 1.6v-3c1.8 0 3 0.1 3 1.4zM6 13v-4c1.8 0 4-0.3 4 2.2 0 1.9-2.5 1.8-4 1.8z"></path></g>
<g id="vaadin:bolt"><path d="M7.99 0l-7.010 9.38 6.020-0.42-4.96 7.040 12.96-10-7.010 0.47 7.010-6.47h-7.010z"></path></g>
<g id="vaadin:bomb"><path d="M12 1h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M14 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M14.6 2.1l0.7-0.7-0.7-0.7-1.4 1.4 0.7 0.7z"></path><path d="M13.9 4.2l-0.7 0.7 1.4 1.4 0.7-0.7-0.7-0.7z"></path><path d="M11.1 2.8l0.7-0.7-1.4-1.4-0.7 0.7 0.7 0.7z"></path><path d="M10.4 6.4l2-2-0.7-0.7-2 2-0.7-0.7-0.7 0.8c-0.8-0.5-1.8-0.8-2.8-0.8-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5c0-1-0.3-1.9-0.7-2.8l0.7-0.7-0.6-0.6zM6 7.2c-2 0-3.4 1.8-3.4 2.8h-1c0-2 2.4-3.8 4.4-3.8v1z"></path></g>
<g id="vaadin:book-dollar"><path d="M12.9 2.5c-1.6-1.2-1.4-2.5-1.4-2.5h-9.5v12.5c0 1.9 2.1 3.5 4 3.5h8v-13c0 0-0.8-0.2-1.1-0.5zM7 6.3c-0.9-0.3-2.3-0.8-2.3-1.9 0.1-0.8 1.3-1.4 1.3-1.6v-0.8h1v0.7c1 0.1 1.8 0.4 1.9 0.4l-0.3 0.9c0 0-0.7-0.3-1.5-0.3-0.7 0-1.1 0.3-1.2 0.8 0 0.3 0.5 0.6 1.3 0.9 1.5 0.5 1.9 1.1 1.9 1.9 0 0.7-0.1 1.6-2.1 1.8v0.9h-1v-0.8c0-0.1-1.4-0.5-1.5-0.5l0.5-0.9c0 0 1.1 0.5 2 0.4s1.3-0.6 1.3-1c0.1-0.3-0.4-0.6-1.3-0.9zM13 15h-7c-1 0-1.8-0.6-2-1.3-0.1-0.3 0-0.7 0.4-0.7h6.6v-10.3c1 0.6 2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:book-percent"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM5.5 3.2c0.8 0 1.5 0.7 1.5 1.6s-0.7 1.4-1.5 1.4-1.5-0.6-1.5-1.4 0.7-1.6 1.5-1.6zM9 3h1l-5 7h-1l5-7zM10 8.5c0 0.8-0.7 1.5-1.5 1.5s-1.5-0.7-1.5-1.5 0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0 0.6 1 1.1 2 1.3v11z"></path><path d="M9 8.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path><path d="M6 4.8c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:book"><path d="M12.6 2.5c-1.6-1.2-1.6-2.5-1.6-2.5h-9v12.5c0 1.9 1.6 3.5 3.5 3.5h8.5v-13c0 0-1-0.2-1.4-0.5zM4 2h5v2h-5v-2zM13 15h-7.5c-1 0-1.8-0.6-2-1.3-0.1-0.4 0-0.7 0.4-0.7h7.1v-10.3c0.4 0.6 1.2 1.1 2 1.3v11z"></path></g>
<g id="vaadin:bookmark-o"><path d="M3 0v16l5-5 5 5v-16h-10zM12 13.7l-4-3.9-4 3.9v-10.7h8v10.7zM12 2h-8v-1h8v1z"></path></g>
<g id="vaadin:bookmark"><path d="M3 0v0 1h10l0.1-1z"></path><path d="M3 2h10v14l-5-5-5 5z"></path></g>
<g id="vaadin:briefcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM10 3h-4v-1h4v1z"></path></g>
<g id="vaadin:browser"><path d="M15 1v-1h-15v15h1v1h15v-15h-1zM3 1h9v1h-9v-1zM1 1h1v1h-1v-1zM1 3h13v11h-13v-11z"></path></g>
<g id="vaadin:bug-o"><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.681 1.007 1.714 1.731 2.92 1.994l0.031-0.994h2v1c1.237-0.269 2.271-0.993 2.939-1.983 0.013-0.017 0.016-0.017 0.019-0.017 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM6 13.5c-0.44-0.253-0.805-0.589-1.083-0.989l-0.247-0.411-0.15-0.39c-0.302-0.802-0.49-1.73-0.52-2.697l-0-0.013v-1.65c0.578 0.326 1.254 0.556 1.973 0.647l0.027 5.573zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1zM12 9c-0.030 0.98-0.218 1.908-0.54 2.77l-0.13 0.33-0.24 0.4c-0.285 0.411-0.65 0.747-1.074 0.992l-0.016-5.492c0.743-0.081 1.421-0.297 2.029-0.624l-0.029 1.624z"></path><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path></g>
<g id="vaadin:bug"><path d="M8 6.2c1.433-0.018 2.767-0.429 3.903-1.129 0.046-0.036 0.098-0.126 0.098-0.229 0-0.008-0-0.016-0.001-0.023-0.066-1.142-0.781-2.103-1.781-2.522-0.137-0.050-0.219-0.16-0.219-0.29 0-0.002 0-0.005 0-0.008v-1.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.2c0 0.166-0.134 0.3-0.3 0.3 0 0 0 0 0 0h-1.4c-0.166 0-0.3-0.134-0.3-0.3v-1.2c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v1.5c-0.006 0.125-0.086 0.229-0.198 0.269-1.026 0.43-1.744 1.4-1.802 2.544-0.001 0.014-0.001 0.021-0.001 0.029 0 0.102 0.051 0.193 0.13 0.247 0.959 0.703 2.161 1.125 3.462 1.125 0.144 0 0.287-0.005 0.428-0.015zM10 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM6 3c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"></path><path d="M13 8v-1c1.216-1.124 1.981-2.721 2-4.497 0-0.28-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c-0.018 1.112-0.431 2.125-1.105 2.906-0.876 0.978-2.15 1.594-3.569 1.594-0.020 0-0.040-0-0.059-0l-2.537 0c-0.022 0-0.049 0.001-0.075 0.001-1.414 0-2.684-0.612-3.561-1.586-0.669-0.781-1.079-1.793-1.094-2.901-0-0.279-0.224-0.503-0.5-0.503s-0.5 0.224-0.5 0.5c0.022 1.776 0.786 3.368 1.996 4.486l0.004 1.004c-3 0.060-3 1.42-3 3.47 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-1.72 0-2.4 2-2.47 0.031 1.11 0.245 2.161 0.612 3.136-0.383 0.006-0.696 0.176-0.942 0.414-0.445 0.624-0.711 1.402-0.711 2.242 0 0.2 0.015 0.397 0.044 0.589l-0.003 0.118c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c-0.022-0.144-0.035-0.311-0.035-0.48 0-0.587 0.154-1.139 0.424-1.616 0.165-0.152 0.401-0.257 0.66-0.264 0.588 1.095 1.667 1.859 2.934 1.998l0.017-0.998h2v1c1.284-0.141 2.364-0.905 2.94-1.98 0.012-0.020 0.015-0.020 0.018-0.020 0.254 0 0.486 0.095 0.663 0.251 0.262 0.462 0.418 1.015 0.418 1.605 0 0.178-0.014 0.352-0.041 0.522l0.002 0.121c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.14c0.025-0.165 0.039-0.356 0.039-0.551 0-0.839-0.266-1.616-0.717-2.251-0.238-0.226-0.551-0.396-0.9-0.466 0.336-0.917 0.55-1.975 0.578-3.080 2-0.012 2 0.708 2 2.458 0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5c0-2.030 0-3.39-3-3.47zM9 13h-2v-1h2v1zM9 11h-2v-1h2v1zM9 9h-2v-1h2v1z"></path></g>
<g id="vaadin:building-o"><path d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"></path><path d="M4 9h2v2h-2v-2z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M10 9h2v2h-2v-2z"></path><path d="M4 6h2v2h-2v-2z"></path><path d="M7 6h2v2h-2v-2z"></path><path d="M10 6h2v2h-2v-2z"></path><path d="M4 3h2v2h-2v-2z"></path><path d="M7 3h2v2h-2v-2z"></path><path d="M10 3h2v2h-2v-2z"></path></g>
<g id="vaadin:building"><path d="M3 0v16h4v-3h2v3h4v-16h-10zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM6 6h-2v-2h2v2zM6 3h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM9 6h-2v-2h2v2zM9 3h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM12 6h-2v-2h2v2zM12 3h-2v-2h2v2z"></path></g>
<g id="vaadin:bullets"><path d="M0 2.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 7.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M0 12.5v0c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v0c0-0.8-0.7-1.5-1.5-1.5v0c-0.8 0-1.5 0.7-1.5 1.5z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:bullseye"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14.9c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path><path d="M8 2.3c-3.2 0-5.7 2.5-5.7 5.7s2.6 5.7 5.7 5.7 5.7-2.6 5.7-5.7-2.5-5.7-5.7-5.7zM8 12.6c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"></path><path d="M8 4.6c-1.9 0-3.4 1.5-3.4 3.4s1.5 3.4 3.4 3.4c1.9 0 3.4-1.5 3.4-3.4s-1.5-3.4-3.4-3.4z"></path></g>
<g id="vaadin:bus"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:buss"><path d="M14.67 4h-0.67v-2c0-1.105-0.895-2-2-2h-8c-1.105 0-2 0.895-2 2v2h-0.68c-0 0-0 0-0 0-0.177 0-0.32 0.143-0.32 0.32 0 0.004 0 0.007 0 0.011l-0 2.339c-0 0.003-0 0.006-0 0.010 0 0.177 0.143 0.32 0.32 0.32 0 0 0 0 0 0h0.68v6c0 0.55 0 1 1 1v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5h4v1.5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-1.5c1 0 1-0.45 1-1v-6h0.67c0.182 0 0.33-0.148 0.33-0.33s-0.148-0.33-0.33-0.33c-0.182 0-0.33 0.148-0.33 0.33s0.148 0.33 0.33 0.33c0.182 0 0.33-0.148 0.33-0.33v-2.34c0-0.182-0.148-0.33-0.33-0.33 0 0 0 0 0 0zM6 1h4v1h-4v-1zM4 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM3 8v-5h10v5h-10zM12 12c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:button"><path d="M15.7 5.3l-1-1c-0.2-0.2-0.4-0.3-0.7-0.3h-13c-0.6 0-1 0.4-1 1v5c0 0.3 0.1 0.6 0.3 0.7l1 1c0.2 0.2 0.4 0.3 0.7 0.3h13c0.6 0 1-0.4 1-1v-5c0-0.3-0.1-0.5-0.3-0.7zM14 10h-13v-5h13v5z"></path></g>
<g id="vaadin:calc-book"><path d="M11.9 0c-1.3 0-2 0.4-2.4 0.8-0.4-0.4-1.1-0.8-2.5-0.8-3.4 0-4 2-4 2v0 0 4h-3v10h7v-4.6l1.5-0.2c0 0 0.2-0.3 0.3 0.7h1.3c0.1-1 0.4-0.7 0.4-0.7l5.5 0.7v-9.8c0 0-0.6-2.1-4.1-2.1zM1 7h5v2h-5v-2zM6 10v1h-1v-1h1zM4 10v1h-1v-1h1zM2 15h-1v-1h1v1zM2 13h-1v-1h1v1zM2 11h-1v-1h1v1zM4 15h-1v-1h1v1zM4 13h-1v-1h1v1zM6 15h-1v-1h1v1zM6 13h-1v-1h1v1zM9 9.5c-0.9-0.1-1.3-0.3-2-0.3v-3.2h-3v-3.9c0-0.4 0.8-1.5 3-1.5 1.8 0 1.9 0.8 1.9 1 0 0 0 0 0 0v7.9zM15 9.9c-1-0.4-1.1-0.7-2.5-0.7-0.1 0-0.2 0-0.2 0-1 0-1.3 0.2-2.3 0.4v-7.6c0 0 0-0.1 0-0.1s0-0.1 0-0.1c0-0.2 0.2-1.1 1.9-1.1 2.3 0 3.1 0.9 3.1 1.4v7.8z"></path></g>
<g id="vaadin:calc"><path d="M9 3h6v2h-6v-2z"></path><path d="M9 11h6v2h-6v-2z"></path><path d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"></path><path d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:calendar-briefcase"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M13 1v3h-3v-3h-5v3h-3v-3h-2v14h5v-1h-4v-8h13v3h1v-8z"></path><path d="M13 10v-2h-4v2h-3v6h10v-6h-3zM10 9h2v1h-2v-1z"></path></g>
<g id="vaadin:calendar-clock"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"></path><path d="M14 12h-3v-3h1v2h2z"></path><path d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"></path></g>
<g id="vaadin:calendar-envelope"><path d="M3 0h1v2h-1v-2z"></path><path d="M9 0h1v2h-1v-2z"></path><path d="M13 7v-6h-2v2h-3v-2h-3v2h-3v-2h-2v12h4v3h12v-9h-3zM4 12h-3v-7h11v2h-8v5zM5 10.2l2.6 1.5-2.6 2.6v-4.1zM5.7 15l2.8-2.8 1.5 0.9 1.5-0.8 2.8 2.8h-8.6zM15 14.3l-2.6-2.6 2.6-1.4v4zM15 9.2l-5 2.7-5-2.9v-1h10v1.2zM15.4 9.6v0 0 0z"></path></g>
<g id="vaadin:calendar-o"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:calendar-user"><path d="M3 0h1v3h-1v-3z"></path><path d="M11 0h1v3h-1v-3z"></path><path d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"></path><path d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"></path></g>
<g id="vaadin:calendar"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM3 15h-2v-2h2v2zM3 12h-2v-2h2v2zM3 9h-2v-2h2v2zM6 15h-2v-2h2v2zM6 12h-2v-2h2v2zM6 9h-2v-2h2v2zM9 15h-2v-2h2v2zM9 12h-2v-2h2v2zM9 9h-2v-2h2v2zM12 15h-2v-2h2v2zM12 12h-2v-2h2v2zM12 9h-2v-2h2v2zM15 15h-2v-2h2v2zM15 12h-2v-2h2v2zM15 9h-2v-2h2v2z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path></g>
<g id="vaadin:camera"><path d="M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path><path d="M11 4v-3h-6v3h-5v9h5c0.8 0.6 1.9 1 3 1s2.2-0.4 3-1h5v-9h-5zM6 2h4v2h-4v-2zM8 13c-2.2 0-4-1.8-4-4s1.8-4 4-4c2.2 0 4 1.8 4 4s-1.8 4-4 4zM15 6h-2v-1h2v1z"></path></g>
<g id="vaadin:car"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-1.9-1.2h-7.4c-0.8 0-1.5 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0.4 1.1 1 1.2v2c0 0.6 0.5 1.1 1.1 1.1h0.9c0.5 0 1-0.5 1-1.1v-1.9h8v1.9c0 0.6 0.5 1.1 1.1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c0.6-0.1 1-0.6 1-1.2v-3.5c-0.1-0.5-0.5-1-1.1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:caret-down"><path d="M3 4h10l-5 7z"></path></g>
<g id="vaadin:caret-left"><path d="M11 3v10l-7-5z"></path></g>
<g id="vaadin:caret-right"><path d="M5 13v-10l7 5z"></path></g>
<g id="vaadin:caret-square-down-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M4 6h8l-4 5z"></path></g>
<g id="vaadin:caret-square-left-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M10 4v8l-5-4z"></path></g>
<g id="vaadin:caret-square-right-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M5.9 12v-8l5 4z"></path></g>
<g id="vaadin:caret-square-up-o"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path><path d="M12 10h-8l4-5z"></path></g>
<g id="vaadin:caret-up"><path d="M13 12h-10l5-7z"></path></g>
<g id="vaadin:cart-o"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"></path></g>
<g id="vaadin:cart"><path d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4z"></path></g>
<g id="vaadin:cash"><path d="M16 14h-14v-1h13v-7h1v8z"></path><path d="M13 4v7h-12v-7h12zM14 3h-14v9h14v-9z"></path><path d="M3 6h-1v3h1v1h4c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h-4v1z"></path><path d="M11 6v-1h-4c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5h4v-1h1v-3h-1z"></path></g>
<g id="vaadin:chart-3d"><path d="M12 4v-2l-4-2-4 2v1l-4 2v5l12 6 4-2v-8zM4 10.88l-3-1.5v-3.3l3 1.53v3.27zM4 6.49l-2.34-1.2 2.34-1.17v2.37zM8 12.88l-3-1.5v-8.31l3 1.54v8.27zM5.66 2.29l2.34-1.17 2.34 1.17-2.34 1.2zM12 14.88l-3-1.5v-6.31l3 1.54v6.27zM12 7.49l-2.34-1.2 2.34-1.17 2.34 1.17z"></path></g>
<g id="vaadin:chart-grid"><path d="M0 9v7h16v-7h-16zM5 15h-4v-1h4v1zM5 13h-4v-1h4v1zM5 11h-4v-1h4v1zM10 15h-4v-1h4v1zM10 13h-4v-1h4v1zM10 11h-4v-1h4v1zM15 15h-4v-1h4v1zM15 13h-4v-1h4v1zM15 11h-4v-1h4v1z"></path><path d="M16 8h-16v-8h1v7h15v1z"></path><path d="M15 1.57l-5.020 2.86-3.96-1.98-4.020 1.61v1.080l3.98-1.59 4.040 2.020 4.98-2.85v-1.15z"></path></g>
<g id="vaadin:chart-line"><path d="M0 16h16v-16h-1v2.6l-4 3.4v-6h-1v6.4l-4-0.9v-5.5h-1v5.7l-4 2.9v-8.6h-1zM5 14h-4v-1.7l4-2.9v4.6zM10 14h-4v-5.3l0.1-0.1 3.9 0.9v4.5zM15 14h-4v-4.3h0.1l3.9-3.2v7.5z"></path></g>
<g id="vaadin:chart-timeline"><path d="M16 13v-1h-15v-12h-1v13h5v2h-5v1h16v-1h-5v-2h5z"></path><path d="M9 7l-3-3-4 4v3h14v-11l-7 7z"></path></g>
<g id="vaadin:chart"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0h1v16h-1v-16z"></path><path d="M9 8l-2.9-3-4.1 4v5h14v-13.1z"></path></g>
<g id="vaadin:chat"><path d="M14 14.2c0 0 0 0 0 0 0-0.6 2-1.8 2-3.1 0-1.5-1.4-2.7-3.1-3.2 0.7-0.8 1.1-1.7 1.1-2.8 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.6 0 2.9-0.5 3.7-1.1 0 0.1 0 0.1 0 0.2 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0.1-0.1-0.7-0.5-0.7-1.9zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:check-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7.1 11.7l-4.2-4.1 1.4-1.4 2.8 2.7 4.9-4.9 1.4 1.4z"></path></g>
<g id="vaadin:check-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7.1 11.7l-4.2-4.1 1.4-1.4 2.7 2.7 5-4.9 1.4 1.4-6.3 6.3z"></path></g>
<g id="vaadin:check-square-o"><path d="M14 6.2v7.8h-12v-12h10.5l1-1h-12.5v14h14v-9.8z"></path><path d="M7.9 10.9l-4.2-4.2 1.5-1.4 2.7 2.8 6.7-6.7 1.4 1.4z"></path></g>
<g id="vaadin:check-square"><path d="M13 0.9l-1 1.1h-12v14h14v-10.5l1.7-2-2.7-2.6zM6.5 11.7l-4.2-4.2 1.4-1.4 2.7 2.7 6.6-6.6 1.4 1.4-7.9 8.1z"></path></g>
<g id="vaadin:check"><path d="M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z"></path></g>
<g id="vaadin:chevron-circle-down-o"><path d="M13 6.6l-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path></g>
<g id="vaadin:chevron-circle-down"><path d="M0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8zM11.6 5.2l1.4 1.4-5 5-5-5 1.4-1.4 3.6 3.6 3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-left-o"><path d="M9.4 13l-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-left"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM10.8 11.6l-1.4 1.4-5-5 5-5 1.4 1.4-3.6 3.6 3.6 3.6z"></path></g>
<g id="vaadin:chevron-circle-right-o"><path d="M6.6 13l5-5-5-5-1.4 1.4 3.6 3.6-3.6 3.6z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:chevron-circle-right"><path d="M8 16c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zM5.2 4.4l1.4-1.4 5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6z"></path></g>
<g id="vaadin:chevron-circle-up-o"><path d="M3 9.4l5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path><path d="M15 8c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7 7 3.1 7 7zM16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8v0z"></path></g>
<g id="vaadin:chevron-circle-up"><path d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM4.4 10.8l-1.4-1.4 5-5 5 5-1.4 1.4-3.6-3.6-3.6 3.6z"></path></g>
<g id="vaadin:chevron-down-small"><path d="M8 12l-6.32-6.32 1.67-1.68 4.65 4.65 4.65-4.65 1.67 1.68-6.32 6.32z"></path></g>
<g id="vaadin:chevron-down"><path d="M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z"></path></g>
<g id="vaadin:chevron-left-small"><path d="M4 8l6.32-6.32 1.68 1.67-4.65 4.65 4.65 4.65-1.68 1.67-6.32-6.32z"></path></g>
<g id="vaadin:chevron-left"><path d="M2.9 8l8-8 2.2 2.1-5.9 5.9 5.9 5.9-2.2 2.1z"></path></g>
<g id="vaadin:chevron-right-small"><path d="M12 8l-6.32-6.32-1.68 1.67 4.65 4.65-4.65 4.65 1.68 1.67 6.32-6.32z"></path></g>
<g id="vaadin:chevron-right"><path d="M13.1 8l-8 8-2.2-2.1 5.9-5.9-5.9-5.9 2.2-2.1z"></path></g>
<g id="vaadin:chevron-up-small"><path d="M8 4l-6.32 6.32 1.67 1.68 4.65-4.65 4.65 4.65 1.67-1.68-6.32-6.32z"></path></g>
<g id="vaadin:chevron-up"><path d="M8 2.9l8 8-2.1 2.2-5.9-5.9-5.9 5.9-2.1-2.2z"></path></g>
<g id="vaadin:child"><path d="M10 5c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 10.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v6.47h1.5v-4h1v4h1.5v-6.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:circle-thin"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path></g>
<g id="vaadin:clipboard-check"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M7.39 12.47l-3-2.73 1.35-1.48 1.58 1.44 2.87-2.9 1.42 1.4-4.22 4.27z"></path></g>
<g id="vaadin:clipboard-cross"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M11 8h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></path></g>
<g id="vaadin:clipboard-heart"><path d="M9.5 7c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-pulse"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M9.3 13c0 0 0 0 0 0-0.2 0-0.3-0.1-0.4-0.3l-0.8-4.8-0.7 3.1c0 0.1-0.1 0.2-0.3 0.3-0.1 0-0.3 0-0.4-0.1l-1-1.3h-1.3c-0.2 0-0.4-0.2-0.4-0.4s0.2-0.4 0.4-0.4h1.6c0.1 0 0.2 0.1 0.3 0.1l0.6 0.8 0.9-4.3c0-0.2 0.2-0.3 0.4-0.3 0 0 0 0 0 0 0.2 0 0.3 0.2 0.3 0.4l0.9 5.3 0.6-1.7c0.1-0.1 0.2-0.2 0.3-0.2h1.3c0.2 0 0.4 0.2 0.4 0.4s-0.2 0.4-0.4 0.4h-1l-1 2.9c0 0-0.2 0.1-0.3 0.1z"></path></g>
<g id="vaadin:clipboard-text"><path d="M4 6h8v1h-8v-1z"></path><path d="M4 8h8v1h-8v-1z"></path><path d="M4 10h5v1h-5v-1z"></path><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clipboard-user"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path><path d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"></path></g>
<g id="vaadin:clipboard"><path d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"></path></g>
<g id="vaadin:clock"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M8 3h-1v6h5v-1h-4z"></path></g>
<g id="vaadin:close-big"><path d="M16 0l-1 0.010-7 6.99-7-6.99-1-0.010v1l7 7-7 7v1h1l7-7 7 7h1v-1l-7-7 7-7v-1z"></path></g>
<g id="vaadin:close-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M12.2 10.8l-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8-2.8-2.8-1.4 1.4 2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></g>
<g id="vaadin:close-small"><path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path></g>
<g id="vaadin:close"><path d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></g>
<g id="vaadin:cloud-download-o"><path d="M14.1 9.8c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0.1-0.6 0.1-0.9 0.1v-3h-2v2.4c-0.4-0.3-0.9-0.4-1.3-0.4-1.6 0-2.9 1.3-2.9 2.9 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.6 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.5 2.4-2.7s-0.8-2.3-1.9-2.5zM13.6 14h-10.3c-1.2 0-2.3-1.3-2.3-2.6s1.1-2.6 2.3-2.6c0.1 0 0.3 0 0.4 0l1.4 0.2-0.9-1c-0.2-0.3-0.4-0.7-0.4-1.2 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v2.4h-1.9l3 4 3-4h-2v-1.9c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6 0.8 0.1c0.7 0 1.4 0.7 1.4 1.5 0 0.7-0.6 1.6-1.4 1.6z"></path></g>
<g id="vaadin:cloud-download"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4v-4h-4v3.1c-0.2-0.1-0.3-0.1-0.5-0.1-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM8 11.4l-2.9-3.4h1.9v-6h2v6h1.9l-2.9 3.4z"></path></g>
<g id="vaadin:cloud-o"><path d="M14.1 8.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.6 0-1.2 0.1-1.8 0.4-0.5-0.7-1.5-1.2-2.4-1.2-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 13h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.8 0 1.5 0.5 1.7 1.2l0.3 0.6 0.5-0.3c0.5-0.3 1.1-0.5 1.8-0.5 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0 0.6-0.6 1.5-1.4 1.5z"></path></g>
<g id="vaadin:cloud-upload-o"><path d="M14.1 10.9c0-0.2 0-0.4 0-0.6 0-2.4-1.9-4.3-4.2-4.3-0.3 0-0.6 0-0.9 0.1v-2.1h2l-3-4-3 4h2v1.5c-0.4-0.2-0.9-0.3-1.3-0.3-1.6 0-2.9 1.2-2.9 2.8 0 0.3 0.1 0.6 0.2 0.9-1.6 0.2-3 1.8-3 3.5 0 1.9 1.5 3.6 3.3 3.6h10.3c1.4 0 2.4-1.4 2.4-2.6s-0.8-2.2-1.9-2.5zM13.6 15h-10.3c-1.2 0-2.3-1.2-2.3-2.5s1.1-2.5 2.3-2.5c0.1 0 0.3 0 0.4 0l1.3 0.3-0.8-1.2c-0.2-0.3-0.4-0.7-0.4-1.1 0-1 0.8-1.8 1.8-1.8 0.5 0 1 0.2 1.3 0.6v3.2h2v-2.8c0.3-0.1 0.6-0.1 0.9-0.1 1.8 0 3.2 1.5 3.2 3.3 0 0.3 0 0.6-0.1 0.9l-0.2 0.6h0.8c0.7 0 1.4 0.7 1.4 1.5 0.1 0.7-0.5 1.6-1.3 1.6z"></path></g>
<g id="vaadin:cloud-upload"><path d="M14 10c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-1.6-1-3-2.4-3.6l-3.6-4.4-2.5 3c-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11c1.1 0 2-0.9 2-2s-0.9-2-2-2zM9 6v6h-2v-6h-1.9l2.9-3.4 2.9 3.4h-1.9z"></path></g>
<g id="vaadin:cloud"><path d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"></path></g>
<g id="vaadin:cluster"><path d="M14 12c-0.372 0.011-0.716 0.121-1.008 0.305l-2.212-2.155c0.434-0.547 0.708-1.239 0.74-1.993l1.57-0.157c0.225 0.556 0.76 0.941 1.385 0.941 0.823 0 1.49-0.667 1.49-1.49s-0.667-1.49-1.49-1.49c-0.749 0-1.368 0.552-1.474 1.271l-1.591 0.128c-0.224-1.136-0.973-2.060-1.978-2.521l0.308-0.839h0.26c1.099-0.008 1.986-0.9 1.986-2 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.742 0.404 1.39 1.004 1.735l-0.27 0.855c-0.227-0.054-0.487-0.084-0.754-0.084-0.83 0-1.59 0.296-2.181 0.789l-2.994-3.004c0.141-0.224 0.225-0.497 0.225-0.79 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 0.823 0.663 1.492 1.484 1.5 0.281-0.001 0.544-0.079 0.767-0.214l2.993 3.004c-0.474 0.588-0.76 1.344-0.76 2.168 0 0.015 0 0.030 0 0.045-0 0.058-0 0.108-0 0.158l-0.66 0.11c-0.313-0.72-1.019-1.214-1.839-1.214-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.020-0-0.039-0.001-0.059l0.63-0.097c0.242 0.843 0.768 1.538 1.466 1.992l-0.556 1.188c-0.161-0.049-0.347-0.078-0.539-0.080-0.006-0-0.012-0-0.017-0-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2 0-0.64-0.301-1.211-0.769-1.577l0.566-1.153c0.364 0.146 0.787 0.231 1.229 0.231 0.847 0 1.621-0.311 2.216-0.824l2.176 2.124c-0.25 0.33-0.4 0.748-0.4 1.2 0 1.105 0.895 2 2 2s2-0.895 2-2c0-1.105-0.895-2-2-2 0 0 0 0 0 0zM5 15c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"></path></g>
<g id="vaadin:code"><path d="M5.2 14l4.5-12h1.1l-4.5 12z"></path><path d="M11.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path><path d="M4.9 13h-1.2l-3.7-5 3.7-5h1.3l-3.8 5z"></path></g>
<g id="vaadin:coffee"><path d="M14 13l-4 1h-6l-4-1v-1h14z"></path><path d="M14.7 3h-1.7v-1h-12v5c0 1.5 0.8 2.8 2 3.4v0.6h8v-0.6c0.9-0.5 1.6-1.4 1.9-2.4 0 0 0.1 0 0.1 0 2.3 0 2.9-2 3-3.5 0.1-0.8-0.5-1.5-1.3-1.5zM13 7v-3h1.7c0.1 0 0.2 0.1 0.2 0.1s0.1 0.1 0.1 0.3c-0.2 2.6-1.6 2.6-2 2.6z"></path></g>
<g id="vaadin:cog-o"><path d="M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"></path><path d="M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:cog"><path d="M16 9v-2l-1.7-0.6c-0.2-0.6-0.4-1.2-0.7-1.8l0.8-1.6-1.4-1.4-1.6 0.8c-0.5-0.3-1.1-0.6-1.8-0.7l-0.6-1.7h-2l-0.6 1.7c-0.6 0.2-1.2 0.4-1.7 0.7l-1.6-0.8-1.5 1.5 0.8 1.6c-0.3 0.5-0.5 1.1-0.7 1.7l-1.7 0.6v2l1.7 0.6c0.2 0.6 0.4 1.2 0.7 1.8l-0.8 1.6 1.4 1.4 1.6-0.8c0.5 0.3 1.1 0.6 1.8 0.7l0.6 1.7h2l0.6-1.7c0.6-0.2 1.2-0.4 1.8-0.7l1.6 0.8 1.4-1.4-0.8-1.6c0.3-0.5 0.6-1.1 0.7-1.8l1.7-0.6zM8 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path><path d="M10.6 7.9c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5z"></path></g>
<g id="vaadin:cogs"><path d="M12 7v-2l-1.2-0.4c-0.1-0.3-0.2-0.7-0.4-1l0.6-1.2-1.5-1.3-1.1 0.5c-0.3-0.2-0.6-0.3-1-0.4l-0.4-1.2h-2l-0.4 1.2c-0.3 0.1-0.7 0.2-1 0.4l-1.1-0.5-1.4 1.4 0.6 1.2c-0.2 0.3-0.3 0.6-0.4 1l-1.3 0.3v2l1.2 0.4c0.1 0.3 0.2 0.7 0.4 1l-0.5 1.1 1.4 1.4 1.2-0.6c0.3 0.2 0.6 0.3 1 0.4l0.3 1.3h2l0.4-1.2c0.3-0.1 0.7-0.2 1-0.4l1.2 0.6 1.4-1.4-0.6-1.2c0.2-0.3 0.3-0.6 0.4-1l1.2-0.4zM3 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3z"></path><path d="M7.5 6c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M16 3v-1h-0.6c0-0.2-0.1-0.4-0.2-0.5l0.4-0.4-0.7-0.7-0.4 0.4c-0.2-0.1-0.3-0.2-0.5-0.2v-0.6h-1v0.6c-0.2 0-0.4 0.1-0.5 0.2l-0.4-0.4-0.7 0.7 0.4 0.4c-0.1 0.2-0.2 0.3-0.2 0.5h-0.6v1h0.6c0 0.2 0.1 0.4 0.2 0.5l-0.4 0.4 0.7 0.7 0.4-0.4c0.2 0.1 0.3 0.2 0.5 0.2v0.6h1v-0.6c0.2 0 0.4-0.1 0.5-0.2l0.4 0.4 0.7-0.7-0.4-0.4c0.1-0.2 0.2-0.3 0.2-0.5h0.6zM13.5 3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path><path d="M15.4 11.8c-0.1-0.3-0.2-0.6-0.4-0.9l0.3-0.6-0.7-0.7-0.5 0.4c-0.3-0.2-0.6-0.3-0.9-0.4l-0.2-0.6h-1l-0.2 0.6c-0.3 0.1-0.6 0.2-0.9 0.4l-0.6-0.3-0.7 0.7 0.3 0.6c-0.2 0.3-0.3 0.6-0.4 0.9l-0.5 0.1v1l0.6 0.2c0.1 0.3 0.2 0.6 0.4 0.9l-0.3 0.6 0.7 0.7 0.6-0.3c0.3 0.2 0.6 0.3 0.9 0.4l0.1 0.5h1l0.2-0.6c0.3-0.1 0.6-0.2 0.9-0.4l0.6 0.3 0.7-0.7-0.4-0.5c0.2-0.3 0.3-0.6 0.4-0.9l0.6-0.2v-1l-0.6-0.2zM12.5 14c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5z"></path></g>
<g id="vaadin:coin-piles"><path d="M10.5 0c-3.040 0-5.5 0.88-5.5 2 0 0 0 0 0 0v2c-3 0.1-5 0.94-5 2 0 0 0 0 0 0v2s0 0 0 0v2s0 0 0 0v2c0 1.090 2.46 2 5.5 2 0.020 0 0.043 0 0.067 0 0.732 0 1.45-0.055 2.153-0.16 0.698 1.305 2.094 2.158 3.69 2.158 2.017 0 3.715-1.363 4.224-3.217 0.209-0.199 0.344-0.442 0.367-0.717l0-2.064v-8c0-1.12-2.46-2-5.5-2zM5.5 5c2.5 0 4.5 0.45 4.5 1s-2 1-4.5 1-4.5-0.45-4.5-1 2-1 4.5-1zM5.5 13c-2.71 0-4.25-0.71-4.5-1v-0.8c1.199 0.512 2.595 0.809 4.060 0.809 0.155 0 0.309-0.003 0.462-0.010 0.508-0.001 1.030-0.030 1.544-0.085-0.043 0.371 0.022 0.712 0.123 1.037-0.452 0.021-0.967 0.051-1.488 0.051-0.070 0-0.141-0.001-0.211-0.002zM7.070 10.91c-0.467 0.057-1.008 0.090-1.556 0.090-0.005 0-0.010 0-0.014 0-2.709 0-4.249-0.71-4.499-1v-0.84c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.632-0.001 1.271-0.044 1.897-0.128-0.197 0.306-0.291 0.654-0.342 1.015zM5.5 9c-2.71 0-4.25-0.71-4.5-1v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.366c-0.777 0.265-1.432 0.717-1.935 1.304-0.752 0.165-1.611 0.256-2.491 0.256-0.026 0-0.052-0-0.077-0zM11.41 15c-1.883 0-3.41-1.527-3.41-3.41s1.527-3.41 3.41-3.41c1.883 0 3.41 1.527 3.41 3.41s-1.527 3.41-3.41 3.41zM15 8c-0.175 0.167-0.385 0.3-0.617 0.386-0.288-0.244-0.6-0.46-0.938-0.634 0.575-0.153 1.101-0.352 1.593-0.61l-0.038 0.858zM15 6c-0.24 0.31-1.61 0.94-4 1v-1c0.003 0 0.007 0 0.011 0 1.443 0 2.814-0.305 4.053-0.855l-0.064 0.855zM15 4c-0.25 0.33-1.79 1-4.5 1h-0.23c-1.213-0.63-2.648-1-4.169-1-0.014 0-0.029 0-0.043 0l-0.058-0v-0.9c1.223 0.535 2.649 0.846 4.147 0.846 0.124 0 0.248-0.002 0.371-0.006 0.088 0.004 0.212 0.006 0.337 0.006 1.498 0 2.923-0.311 4.214-0.872l-0.068 0.926zM10.5 3c-2.5 0-4.5-0.45-4.5-1s2-1 4.5-1 4.5 0.45 4.5 1-2 1-4.5 1z"></path><path d="M10.5 11h0.5v3h1v-5h-0.5l-1 2z"></path></g>
<g id="vaadin:coins"><path d="M11.5 0c-2.485 0-4.5 2.015-4.5 4.5 0.004 0.261 0.029 0.513 0.074 0.758-0.479-0.176-1.025-0.261-1.591-0.261-3.043 0-5.51 2.467-5.51 5.51s2.467 5.51 5.51 5.51c3.043 0 5.51-2.467 5.51-5.51 0-0.566-0.085-1.112-0.244-1.626 0.23 0.077 0.484 0.099 0.742 0.099 2.48 0 4.49-2.010 4.49-4.49 0-2.477-2.005-4.485-4.481-4.49zM10 10.5c0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.485 2.015-4.5 4.5-4.5 2.483 0.006 4.494 2.017 4.5 4.499zM12.5 7h-2v-0.5h0.5v-3h-0.5l1-1.5h0.5v4.5h0.5v0.5z"></path><path d="M5.63 8c0.033-0.003 0.072-0.005 0.111-0.005 0.696 0 1.26 0.564 1.26 1.26 0 0.016-0 0.031-0.001 0.047 0 1.698-1.86 2.698-1.86 2.698h1.37v-0.5h0.49v1.5h-3v-1s2-1.27 2-2.33c0-0.37 0-0.67-0.42-0.67-0.69 0-0.65 1-0.65 1h-0.93s-0.23-2 1.63-2z"></path></g>
<g id="vaadin:combobox"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM10 11h-9v-6h9v6zM13 8.4l-2-1.4h4l-2 1.4z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:comment-ellipsis-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.6 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.2l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.8-2.3-2.8-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path><path d="M6 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 7c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:comment-ellipsis"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5zM5 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM8 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM11 8c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:comment-o"><path d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path><path d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path></g>
<g id="vaadin:comment"><path d="M8 1c-4.4 0-8 2.5-8 5.5 0 2 2 3.8 4 4.8 0 0 0 0 0 0 0 2.1-2 2.8-2 2.8 2.8 0 4.4-1.3 5.1-2.1 0.3 0 0.6 0 0.9 0 4.4 0 8-2.5 8-5.5s-3.6-5.5-8-5.5z"></path></g>
<g id="vaadin:comments-o"><path d="M14.2 14c0.6-0.5 1.8-1.6 1.8-3.2 0-1.4-1.2-2.6-2.8-3.3 0.5-0.6 0.8-1.5 0.8-2.4 0-2.8-2.9-5.1-6.6-5.1-3.5 0-7.4 2.1-7.4 5.1 0 2.1 1.6 3.6 2.3 4.2-0.1 1.2-0.6 1.7-0.6 1.7l-1.2 1h1.5c1.2 0 2.2-0.3 3-0.7 0.3 1.9 2.5 3.4 5.3 3.4 0.1 0 0.3 0 0.5 0 0.6 0.5 1.8 1.3 3.5 1.3h1.4l-1.1-0.9c0 0-0.3-0.3-0.4-1.1zM10.3 13.7c-2.3 0-4.3-1.3-4.3-2.8 0-0.1 0-0.1 0-0.2 0.2-0.2 0.4-0.3 0.5-0.5 0.2 0 0.5 0 0.7 0 2.1 0 4-0.7 5.2-1.9 1.5 0.5 2.6 1.5 2.6 2.5s-0.9 2-1.7 2.5l-0.3 0.2v0.3c0 0.5 0.2 0.8 0.3 1.1-1-0.2-1.7-0.7-1.9-1l-0.1-0.2h-0.2c-0.3 0-0.6 0-0.8 0zM7.4 1c3.1 0 5.6 1.9 5.6 4.1s-2.6 4.1-5.8 4.1c-0.2 0-0.6 0-0.8 0h-0.3l-0.1 0.2c-0.3 0.4-1.5 1.2-3.1 1.5 0.1-0.4 0.1-1 0.1-1.8v-0.3c-1-0.8-2.1-2.2-2.1-3.6 0-2.2 3.2-4.2 6.5-4.2z"></path></g>
<g id="vaadin:comments"><path d="M16 11.1c0-1.5-1.5-2.8-3.2-3.3-1.3 1.5-3.9 2.4-6.4 2.4-0.1 0-0.3 0-0.4 0 0 0 0 0-0.1 0-0.1 0.3-0.1 0.5-0.1 0.8 0 2 2.2 3.6 5 3.6 0.2 0 0.4 0 0.6 0 0.4 0.5 1.7 1.4 3.4 1.4 0 0-0.8-0.4-0.8-1.8 0 0 0 0 0 0 0-0.6 2-1.8 2-3.1z"></path><path d="M13 4.6c0-2.5-2.8-4.6-6.4-4.6s-6.6 2.1-6.6 4.6c0 1.7 2 3.2 3 4 0 0 0 0 0 0 0 1.8-1.4 2.4-1.4 2.4 2.3 0 3.6-1.1 4.2-1.8 0.2 0 0.5 0 0.8 0 3.5 0.1 6.4-2 6.4-4.6z"></path></g>
<g id="vaadin:compile"><path d="M1 12h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M11 12h4v4h-4v-4z"></path><path d="M1 7h4v4h-4v-4z"></path><path d="M1 2h4v4h-4v-4z"></path><path d="M6 7h4v4h-4v-4z"></path><path d="M7 1h4v4h-4v-4z"></path><path d="M11 7h4v4h-4v-4z"></path><path d="M13 0h3v3h-3v-3z"></path></g>
<g id="vaadin:compress-square"><path d="M12 0h-12v12l1-1v-10h10z"></path><path d="M4 16h12v-12l-1 1v10h-10z"></path><path d="M7 9h-5l1.8 1.8-3.8 3.8 1.4 1.4 3.8-3.8 1.8 1.8z"></path><path d="M16 1.4l-1.4-1.4-3.8 3.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:compress"><path d="M5.3 9.3l-5 5 1.4 1.4 5-5 1.3 1.3v-4h-4z"></path><path d="M15.7 1.7l-1.4-1.4-4 4-1.3-1.3v4h4l-1.3-1.3z"></path></g>
<g id="vaadin:connect-o"><path d="M12.5 9c-1 0-1.8 0.4-2.4 1l-3.2-1.7c0.1-0.3 0.1-0.5 0.1-0.8 0-0.2 0-0.3 0-0.4l2.9-1.3c0.6 0.7 1.5 1.2 2.6 1.2 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5c0 0.2 0 0.3 0 0.4l-2.9 1.3c-0.6-0.7-1.5-1.2-2.6-1.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c1 0 1.8-0.4 2.4-1l3.1 1.7c0 0.3 0 0.5 0 0.8 0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM12.5 1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5zM3.5 10c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5zM12.5 15c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:connect"><path d="M12 10c-0.8 0-1.4 0.3-2 0.8l-3.2-1.8c0.1-0.3 0.2-0.7 0.2-1s-0.1-0.7-0.2-1l3.2-1.8c0.6 0.5 1.2 0.8 2 0.8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 0.2 0 0.3 0 0.5l-3.5 1.9c-0.4-0.2-0.9-0.4-1.5-0.4-1.6 0-3 1.3-3 3v0c0 1.6 1.4 3 3 3 0.6 0 1.1-0.2 1.5-0.4l3.5 1.9c0 0.2 0 0.3 0 0.5 0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z"></path></g>
<g id="vaadin:controller"><path d="M5.951 0.249l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M8.877 14.966l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M0.055 9.071l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M14.773 6.145l0.981-0.195 0.195 0.981-0.981 0.195-0.195-0.981z"></path><path d="M11.471 1.897l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M3.139 14.441l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M1.069 3.989l0.56-0.83 0.83 0.56-0.56 0.83-0.83-0.56z"></path><path d="M13.547 12.299l0.556-0.831 0.831 0.556-0.556 0.831-0.831-0.556z"></path><path d="M8.875 1.039l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M5.953 15.745l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M0.061 6.931l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M14.767 9.854l0.195-0.981 0.981 0.195-0.195 0.981-0.981-0.195z"></path><path d="M3.139 1.628l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M11.477 14.101l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M1.071 12.033l0.831-0.556 0.556 0.831-0.831 0.556-0.556-0.831z"></path><path d="M13.539 3.63l0.83-0.56 0.56 0.83-0.83 0.56-0.56-0.83z"></path><path d="M14 8c-0.003-1.895-0.884-3.583-2.258-4.681l-3.322 4.991-0.84-0.59 3.32-5c-0.836-0.47-1.836-0.747-2.9-0.747-3.314 0-6 2.686-6 6s2.686 6 6 6c3.304 0 5.984-2.671 6-5.971z"></path></g>
<g id="vaadin:copy-o"><path d="M13 3h-3l-3-3h-7v13h6v3h10v-10l-3-3zM7 1l2 2h-2v-2zM1 12v-11h5v3h3v8h-8zM15 15h-8v-2h3v-9h2v3h3v8zM13 6v-2l2 2h-2z"></path></g>
<g id="vaadin:copy"><path d="M6 0v3h3z"></path><path d="M9 4h-4v-4h-5v12h9z"></path><path d="M13 4v3h3z"></path><path d="M12 4h-2v9h-3v3h9v-8h-4z"></path></g>
<g id="vaadin:copyright"><path d="M8 1.5c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M9.9 10.3c-0.5 0.4-1.2 0.7-1.9 0.7-1.7 0-3-1.3-3-3s1.3-3 3-3c0.8 0 1.6 0.3 2.1 0.9l1.1-1.1c-0.8-0.8-2-1.3-3.2-1.3-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.1 0 2-0.4 2.8-1l-0.9-1.2z"></path></g>
<g id="vaadin:corner-lower-left"><path d="M16 16l-16-16v16z"></path></g>
<g id="vaadin:corner-lower-right"><path d="M16 16h-16l16-16z"></path></g>
<g id="vaadin:corner-upper-left"><path d="M0 16l16-16h-16z"></path></g>
<g id="vaadin:corner-upper-right"><path d="M16 16l-16-16h16z"></path></g>
<g id="vaadin:credit-card"><path d="M0 2v12h16v-12h-16zM15 13h-14v-5h14v5zM15 5h-14v-2h14v2z"></path><path d="M10 11h3v1h-3v-1z"></path><path d="M2 11h6v1h-6v-1z"></path></g>
<g id="vaadin:crop"><path d="M16 0.7v-0.7h-0.7l-3 3h-7.3v-3h-2v3h-3v2h3v8h8v3h2v-3h3v-2h-3v-7.3l3-3zM5 5h5.3l-5.3 5.3v-5.3zM11 11h-5.3l5.3-5.3v5.3z"></path></g>
<g id="vaadin:cross-cutlery"><path d="M10.9 8.6c0 0 0 0 0 0 0.6-0.1 1.2-0.4 1.6-0.9l3.1-3.1c0.4-0.4 0.4-1 0-1.4l-0.1-0.2-3 3c-0.2 0.2-0.6 0.2-0.9 0s-0.2-0.6 0-0.9l2.6-2.6c0.2-0.2 0.2-0.6 0-0.9-0.2-0.2-0.6-0.2-0.9 0l-2.6 2.6c-0.2 0.2-0.6 0.2-0.9 0-0.2-0.2-0.2-0.6 0-0.9l3-3-0.1-0.1c-0.4-0.4-1-0.4-1.4 0l-3.1 3.3c-0.4 0.4-0.7 1-0.8 1.6l-4.9-4.8c-0.4-0.4-1-0.3-1.3 0l-0.2 0.2c-1.4 1.4-0.9 4.2 1.5 6.6l0.8 0.8c0.4 0.4 0.9 0.7 1.5 0.8-0.5 0.4-0.8 0.8-0.8 0.8l-3.4 3.4c-0.7 0.7-0.7 1.9 0 2.6s1.9 0.7 2.6 0l3.3-3.5c0.2-0.2 0.7-0.8 1.3-1.5 0.3 0.4 0.5 0.6 0.5 0.6l4.3 4.3c0.7 0.7 1.9 0.7 2.6 0s0.7-1.9 0-2.6l-4.3-4.2z"></path></g>
<g id="vaadin:crosshairs"><path d="M7.5 0h1v4l-0.5 2-0.5-2v-4z"></path><path d="M8.5 16h-1v-4l0.5-2 0.5 2v4z"></path><path d="M16 7.5v1h-4l-2-0.5 2-0.5h4z"></path><path d="M0 8.5v-1h4l2 0.5-2 0.5h-4z"></path><path d="M8 2.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5c-3.038 0-5.5-2.462-5.5-5.5 0.006-3.035 2.465-5.494 5.499-5.5zM8 1c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7v0z"></path></g>
<g id="vaadin:css"><path d="M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z"></path></g>
<g id="vaadin:ctrl-a"><path d="M9 7v-1h-1v-1h-1v1h-0.5v1h0.5v3.56c0.176 0.835 0.907 1.453 1.783 1.453 0.077 0 0.152-0.005 0.226-0.014l-0.009-0.999c-0.055 0.012-0.119 0.019-0.185 0.019-0.359 0-0.669-0.21-0.813-0.514l-0.002-3.505h1z"></path><path d="M14 3h1v9h-1v-9z"></path><path d="M13 6c-0.025-0.001-0.055-0.001-0.085-0.001-0.773 0-1.462 0.358-1.911 0.917l-0.004-0.915h-1v6h1v-3c-0.003-0.037-0.004-0.080-0.004-0.124 0-1.038 0.842-1.88 1.88-1.88 0.044 0 0.087 0.001 0.13 0.004l-0.006-1z"></path><path d="M4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47z"></path></g>
<g id="vaadin:ctrl"><path d="M0 0v16h16v-16h-16zM4.19 12c-2.030 0-3.19-1.46-3.19-4s1.16-4 3.19-4c0.009-0 0.019-0 0.029-0 0.539 0 1.052 0.114 1.515 0.32l-0.424 0.901c-0.319-0.139-0.69-0.22-1.080-0.22-0.014 0-0.028 0-0.042 0-1.808-0-2.188 1.63-2.188 3s0.38 3 2.19 3c0.497-0.013 0.96-0.145 1.366-0.368l0.444 0.898c-0.524 0.285-1.146 0.458-1.806 0.47zM9 7h-1v3.5c0.147 0.309 0.457 0.519 0.815 0.519 0.065 0 0.129-0.007 0.19-0.020l-0.006 1.001c-0.065 0.008-0.141 0.013-0.217 0.013-0.875 0-1.606-0.618-1.781-1.441l-0.002-3.572h-0.51v-1h0.51v-1h1v1h1v1zM11 9v3h-1v-6h1v0.92c0.453-0.564 1.142-0.921 1.915-0.921 0.030 0 0.060 0.001 0.090 0.002l-0.004 1c-0.037-0.003-0.080-0.004-0.124-0.004-1.038 0-1.88 0.842-1.88 1.88 0 0.044 0.001 0.087 0.004 0.13zM15 12h-1v-9h1v9z"></path></g>
<g id="vaadin:cube"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM14.4 2.6l-5.9 2.2-6.6-2.2 6.1-1.6 6.4 1.6zM1 11.4v-8.1l7 2.4v9.2l-7-3.5z"></path></g>
<g id="vaadin:cubes"><path d="M12 6v-4l-4-2-4 2v4l-4 2v5l4 2 4-2 4 2 4-2v-5zM8.090 1.12l2.91 1.44-2.6 1.3-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5v-3.6zM4 13.88l-3-1.5v-3.6l3 1.5v3.6zM4.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44zM12 13.88l-3-1.5v-3.6l3 1.5v3.6zM12.28 9.88l-2.88-1.46 2.6-1.3 2.88 1.44z"></path></g>
<g id="vaadin:curly-brackets"><path d="M2.1 3.1c0.2 1.3 0.4 1.6 0.4 2.9 0 0.8-1.5 1.5-1.5 1.5v1c0 0 1.5 0.7 1.5 1.5 0 1.3-0.2 1.6-0.4 2.9-0.3 2.1 0.8 3.1 1.8 3.1s2.1 0 2.1 0v-2c0 0-1.8 0.2-1.8-1 0-0.9 0.2-0.9 0.4-2.9 0.1-0.9-0.5-1.6-1.1-2.1 0.6-0.5 1.2-1.1 1.1-2-0.3-2-0.4-2-0.4-2.9 0-1.2 1.8-1.1 1.8-1.1v-2c0 0-1 0-2.1 0s-2.1 1-1.8 3.1z"></path><path d="M13.9 3.1c-0.2 1.3-0.4 1.6-0.4 2.9 0 0.8 1.5 1.5 1.5 1.5v1c0 0-1.5 0.7-1.5 1.5 0 1.3 0.2 1.6 0.4 2.9 0.3 2.1-0.8 3.1-1.8 3.1s-2.1 0-2.1 0v-2c0 0 1.8 0.2 1.8-1 0-0.9-0.2-0.9-0.4-2.9-0.1-0.9 0.5-1.6 1.1-2.1-0.6-0.5-1.2-1.1-1.1-2 0.2-2 0.4-2 0.4-2.9 0-1.2-1.8-1.1-1.8-1.1v-2c0 0 1 0 2.1 0s2.1 1 1.8 3.1z"></path></g>
<g id="vaadin:cursor-o"><path d="M5 2.6l5.75 6.4h-2.46l0.63 1.41 1.8 4-0.91 0.34-1.88-4.3-0.5-1.11-1 0.71-1.43 1.020v-8.47zM4 0v13l3-2.14 2.26 5.14 2.8-1-2.23-5h3.17l-9-10z"></path></g>
<g id="vaadin:cursor"><path d="M4 0v13l3.31-3.47 2.69 6.47 1.37-0.63-2.72-6.37h4.35l-9-9z"></path></g>
<g id="vaadin:cutlery"><path d="M13 0.8c0-0.5-0.4-0.8-0.8-0.8h-0.2c-1.7 0-3 1.9-3 4.7v0.9c0 1 0.5 1.9 1.4 2.4-0.3 1.2-0.4 2.5-0.4 2.5v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.4-0.1-1.4-0.3-2.3 0.2-0.2 0.3-0.4 0.3-0.7v-6.7z"></path><path d="M7.2 0h-0.2v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5s-0.5 0.2-0.5 0.5v3c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-0.2c-0.4 0-0.8 0.4-0.8 0.8v3.7c0 1 0.6 1.9 1.5 2.3-0.4 1.6-0.5 3.7-0.5 3.7v4c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-4c0-0.5-0.1-2.3-0.4-3.7 0.8-0.4 1.4-1.3 1.4-2.3v-3.7c0-0.4-0.4-0.8-0.8-0.8z"></path></g>
<g id="vaadin:dashboard"><path d="M16 10.1c0-4.4-3.6-8.1-8-8.1s-8 3.7-8 8.1c0 1.4 0.3 2.9 0.9 3.9h4.9c0.5 0.6 1.3 1 2.2 1s1.7-0.4 2.2-1h4.9c0.6-1 0.9-2.5 0.9-3.9zM14 7v1l-4.1 3.5c0 0.1 0.1 0.3 0.1 0.5 0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2c0.3 0 0.6 0.1 0.8 0.2l4.2-3.2h1zM10 4h1v1h-1v-1zM5 4h1v1h-1v-1zM2 12h-1v-1h1v1zM3 8h-1v-1h1v1zM15 12h-1v-1h1v1z"></path><path d="M9 12c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:database"><path d="M14 2.5c0 0.828-2.686 1.5-6 1.5s-6-0.672-6-1.5c0-0.828 2.686-1.5 6-1.5s6 0.672 6 1.5z"></path><path d="M8 5c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 9c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path><path d="M8 13c-3.3 0-6-0.7-6-1.5v3c0 0.8 2.7 1.5 6 1.5s6-0.7 6-1.5v-3c0 0.8-2.7 1.5-6 1.5z"></path></g>
<g id="vaadin:date-input"><path d="M14 1v3h-3v-3h-6v3h-3v-3h-2v15h16v-15h-2zM15 15h-14v-9h14v9z"></path><path d="M3 0h1v3h-1v-3z"></path><path d="M12 0h1v3h-1v-3z"></path><path d="M3 8h1v5h-1v-5z"></path></g>
<g id="vaadin:deindent"><path d="M4 10.5v-6l-4 3z"></path><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path></g>
<g id="vaadin:del-a"><path d="M14 3h1v9h-1v-9z"></path><path d="M3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM2 11h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5h-1v7z"></path><path d="M13 9v-0.5c-0.017-0.77-0.31-1.468-0.783-2.003-0.419-0.412-0.999-0.668-1.638-0.668-0.031 0-0.063 0.001-0.094 0.002-0.013-0.001-0.034-0.001-0.054-0.001-0.594 0-1.132 0.241-1.521 0.631-0.566 0.685-0.91 1.572-0.91 2.54 0 0.003-0 0.006-0 0.009 0 0.881 0.322 1.686 0.854 2.306 0.43 0.429 1.030 0.697 1.692 0.697 0.030 0 0.059-0.001 0.089-0.002 0.861-0.026 1.642-0.372 2.228-0.922l-0.712-0.708c-0.401 0.368-0.931 0.603-1.515 0.63-0.026 0.001-0.051 0.002-0.076 0.002-0.385 0-0.734-0.153-0.99-0.402-0.355-0.435-0.57-0.997-0.57-1.61l4-0zM10.5 6.8c0.020-0.001 0.043-0.002 0.066-0.002 0.362 0 0.691 0.141 0.935 0.372 0.209 0.224 0.361 0.505 0.427 0.818l-2.778 0.011c0.11-0.661 0.661-1.165 1.337-1.2z"></path></g>
<g id="vaadin:del"><path d="M0 0v16h16v-16h-16zM3 12h-2v-9h2c2.23 0.051 4.019 1.871 4.019 4.109 0 0.138-0.007 0.274-0.020 0.408 0.013 0.1 0.020 0.236 0.020 0.374 0 2.238-1.788 4.058-4.014 4.109zM13 9h-4c-0 0.004-0 0.008-0 0.012 0 0.607 0.211 1.164 0.564 1.603 0.252 0.244 0.601 0.397 0.986 0.397 0.025 0 0.049-0.001 0.074-0.002 0.586-0.027 1.115-0.261 1.518-0.631l0.708 0.712c-0.584 0.548-1.364 0.893-2.225 0.92-0.030 0.001-0.060 0.002-0.090 0.002-0.662 0-1.261-0.268-1.696-0.702-0.522-0.613-0.84-1.414-0.84-2.289 0-0.007 0-0.014 0-0.022-0-0.005-0-0.012-0-0.019 0-0.968 0.344-1.855 0.915-2.547 0.384-0.383 0.922-0.624 1.516-0.624 0.021 0 0.041 0 0.062 0.001 0.024-0.001 0.055-0.002 0.086-0.002 0.639 0 1.219 0.256 1.641 0.672 0.47 0.532 0.762 1.23 0.78 1.996l0 0.524zM15 12h-1v-9h1v9z"></path><path d="M3 4h-1v7h1c0.31 0 3-0.12 3-3.5s-2.88-3.5-3-3.5z"></path><path d="M10.49 6.8c-0.679 0.035-1.23 0.539-1.339 1.192l2.779 0.008c-0.069-0.324-0.22-0.606-0.431-0.831-0.242-0.229-0.571-0.371-0.934-0.371-0.027 0-0.053 0.001-0.079 0.002z"></path></g>
<g id="vaadin:dental-chair"><path d="M11.5 8.2c-0.3-0.1-0.6-0.2-0.8-0.2h-2.7v-1h3c0-0.6-0.4-1-1-1h-4c0 0.6 0.4 1 1 1v1c-0.5 0-1-0.2-1.2-0.6l-1.1-1.8c-0.3-0.4-0.7-0.6-1.1-0.6h-0.6v-0.7c0-0.3-0.1-0.5-0.2-0.8l-0.3-0.7c-0.3-0.5-0.9-0.8-1.5-0.8h-1l5 7c0.4 0.6 1.1 1 1.8 1h1.2v1h-1v2h-0.6c-0.9 0-1.8 0.4-2.4 1v0h-1v1h11v-1h-1c-0.6-0.6-1.5-1-2.4-1h-0.6v-2h-1v-1h1.6c0.2 0 0.5 0.1 0.7 0.2l1.7 0.9c0.9 0.5 2 0.5 2.9 0h0.1l-4.5-2.9z"></path></g>
<g id="vaadin:desktop"><path d="M16 0h-16v13h6v2h-2v1h8v-1h-2v-2h6v-13zM9 12h-2v-1h2v1zM15 10h-14v-8.9c0-0.1 0-0.1 0-0.1h14c0 0 0 0 0 0.1v8.9z"></path></g>
<g id="vaadin:diamond-o"><path d="M13 2h-10l-3 3.5 8 9.5 8-9.5zM4.64 5h-2.89l1.52-1.78zM6.42 5l1.58-1.84 1.58 1.84h-3.16zM10 6l-2 6.68-2-6.68h4zM5.26 6l1.89 6.44-5.42-6.44h3.53zM10.75 6h3.53l-5.43 6.44zM11.37 5l1.37-1.78 1.51 1.78h-2.9zM12 3l-1.44 1.81-1.46-1.81h2.9zM5.43 4.83l-1.43-1.83h2.9z"></path></g>
<g id="vaadin:diamond"><path d="M0 6h4l3 8.6-7-8.6z"></path><path d="M16 6h-4l-3 8.6 7-8.6z"></path><path d="M8 15l-3-9h6l-3 9z"></path><path d="M4 5h-4l2-3 2 3z"></path><path d="M16 5h-4l2-3 2 3z"></path><path d="M10 5h-4l2-3 2 3z"></path><path d="M3.34 2h3.66l-2 3-1.66-3z"></path><path d="M9 2h4l-2 3-2-3z"></path></g>
<g id="vaadin:diploma-scroll"><path d="M12.61 8.41c-0.53-0.079-1.008-0.223-1.454-0.424 2.104-1.876 4.424-3.536 4.454-3.556l0.1-0.070 0.060-0.11c0.177-0.367 0.281-0.797 0.281-1.252 0-0.901-0.407-1.707-1.046-2.244-0.523-0.482-1.219-0.776-1.983-0.776-0.538 0-1.043 0.146-1.476 0.4l-0.126 0.133c-1.578 2.181-3.182 4.099-4.908 5.899-1.836 1.638-3.87 3.195-6.018 4.592l-0.394 0.248v0.23c-0.077 0.314-0.122 0.675-0.122 1.046 0 0.97 0.304 1.87 0.822 2.609 0.507 0.53 1.237 0.87 2.045 0.87 0.055 0 0.109-0.002 0.162-0.005 0.026 0.002 0.065 0.003 0.104 0.003 0.701 0 1.317-0.36 1.674-0.905 0.245-0.308 2.065-2.608 4.005-4.708 0.268 0.464 0.476 1.003 0.594 1.575 0.032 0.249 0.046 0.496 0.046 0.747 0 0.823-0.158 1.61-0.445 2.331l1.685-2.043 1.33 1c-0.041-1.174-0.243-2.286-0.584-3.336-0.227-0.416-0.542-0.845-0.915-1.214 0.406 0.346 0.871 0.643 1.372 0.874 0.94 0.338 1.989 0.572 3.076 0.672l-0.949-1.266 2-1.73c-0.83 0.273-1.785 0.431-2.777 0.431-0.216 0-0.43-0.007-0.642-0.022zM12.16 1.18c0.246-0.123 0.536-0.194 0.842-0.194 0.506 0 0.966 0.196 1.309 0.516 0.441 0.356 0.721 0.897 0.721 1.504 0 0.242-0.045 0.474-0.126 0.688-0.486 0.307-2.346 1.717-4.146 3.307-0.055-0.521-0.302-0.975-0.668-1.298-0.28-0.239-0.643-0.384-1.039-0.384-0.068 0-0.135 0.004-0.201 0.012 1.568-1.771 2.978-3.691 3.308-4.151zM2.7 11.81c0.073-0.051 0.164-0.082 0.262-0.082 0.014 0 0.027 0.001 0.040 0.002l0.068-0c0.179 0.052 0.334 0.142 0.461 0.261l-0.871 0.719c-0.081-0.165-0.128-0.358-0.128-0.563 0-0.052 0.003-0.103 0.009-0.153 0.027-0.077 0.084-0.144 0.158-0.183zM4 14.5c-0.175 0.306-0.499 0.508-0.871 0.508-0.046 0-0.090-0.003-0.134-0.009-0.046 0.006-0.106 0.008-0.167 0.008-0.515 0-0.981-0.209-1.318-0.548-0.365-0.54-0.583-1.206-0.583-1.922 0-0.251 0.027-0.495 0.077-0.73l0.706-0.457c-0.094 0.14-0.164 0.304-0.199 0.481-0.007 0.076-0.010 0.154-0.010 0.234 0 0.642 0.202 1.237 0.545 1.724l0.354 0.44 1.7-1.4c0.066 0.209 0.104 0.45 0.104 0.7 0 0.351-0.075 0.685-0.21 0.985zM4.86 12.050c-0.345-0.6-0.889-1.053-1.54-1.274-0.071-0.012-0.13-0.016-0.19-0.016s-0.119 0.004-0.177 0.010c-0.046-0.007-0.106-0.011-0.168-0.011s-0.122 0.004-0.182 0.011c1.489-1.018 2.766-2.003 3.988-3.052 0.398 0.071 0.812 0.25 1.131 0.533 0.297 0.313 0.48 0.739 0.48 1.209 0 0.032-0.001 0.063-0.002 0.094-1.14 1.226-2.25 2.536-3 3.506-0.054-0.379-0.177-0.719-0.357-1.023z"></path></g>
<g id="vaadin:diploma"><path d="M14 10.58c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167l-0.479-0.698c-0.009-0.013-0.014-0.028-0.014-0.045s0.005-0.032 0.014-0.045l0.48-0.7c0.024-0.048 0.038-0.105 0.038-0.165s-0.014-0.117-0.039-0.167c-0.040-0.11-0.127-0.196-0.236-0.237l-0.823-0.301c-0.031-0.011-0.054-0.037-0.060-0.069l-0-0.841c-0.007-0.125-0.072-0.233-0.169-0.299-0.066-0.045-0.145-0.071-0.231-0.071-0.004 0-0.007 0-0.011 0l-0.159-0-0.85 0.22c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l-0.549-0.65c-0.079-0.085-0.191-0.137-0.315-0.137s-0.236 0.053-0.315 0.137l-0.55 0.65c-0.010 0.004-0.022 0.007-0.035 0.007s-0.025-0.003-0.036-0.007l0.001 0-0.9-0.23h-0.1c-0.002-0-0.005-0-0.008-0-0.087 0-0.167 0.026-0.234 0.071-0.096 0.066-0.161 0.174-0.168 0.298l-0 0.841c-0.006 0.033-0.029 0.059-0.059 0.070l-0.821 0.3c-0.134 0.023-0.245 0.11-0.299 0.228-0.025 0.051-0.039 0.107-0.039 0.167s0.014 0.117 0.039 0.167l0.479 0.698c0.009 0.013 0.014 0.028 0.014 0.045s-0.005 0.032-0.014 0.045l-0.48 0.7c-0.024 0.048-0.038 0.105-0.038 0.165s0.014 0.117 0.039 0.167c0.040 0.11 0.127 0.196 0.236 0.237l0.823 0.301c0.031 0.011 0.054 0.037 0.060 0.069l0 0.841c0.007 0.125 0.072 0.233 0.169 0.299 0.067 0.045 0.147 0.071 0.234 0.071 0.003 0 0.005-0 0.008-0h0.16l0.31-0.070v3.69l1.53-2 1.47 2v-3.69l0.31 0.080h0.11c0.002 0 0.005 0 0.008 0 0.087 0 0.167-0.026 0.234-0.071 0.096-0.066 0.161-0.174 0.168-0.298l0-0.841c0.006-0.033 0.029-0.059 0.059-0.070l0.821-0.3c0.13-0.026 0.236-0.112 0.289-0.227z"></path><path d="M0 1v12h8l-0.11-0.050c-0.282-0.195-0.469-0.508-0.49-0.867l-0-0.083h-6.4v-10h14v10h-1.43v0.080c-0.021 0.361-0.208 0.675-0.486 0.868l-0.084 0.052h3v-12h-16z"></path><path d="M7.43 6.91c0.007-0.377 0.198-0.708 0.486-0.908 0.016-0.005 0.030-0.006 0.044-0.006s0.028 0.001 0.041 0.004l-5.001-0v1h4.43v-0.090z"></path><path d="M6.42 8h-3.42v1h3.36c-0.074-0.136-0.117-0.298-0.117-0.47 0-0.13 0.025-0.253 0.070-0.367 0.014-0.063 0.054-0.122 0.107-0.163z"></path><path d="M3 4h10v1h-10v-1z"></path></g>
<g id="vaadin:disc"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM15 8c0 1.1-0.2 2.1-0.7 3l-2.7-1.2c0.2-0.6 0.4-1.2 0.4-1.8 0-2.2-1.8-4-4-4-0.5 0-0.9 0.1-1.4 0.3l-1.2-2.8c0.6-0.2 1.2-0.4 1.8-0.5l0.3 3h0.5v-3c3.9 0 7 3.1 7 7zM8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM1 8c0-1.1 0.2-2.1 0.7-3l2.7 1.2c-0.2 0.6-0.4 1.2-0.4 1.8 0 2.2 1.8 4 4 4 0.5 0 0.9-0.1 1.4-0.3l1.2 2.8c-0.6 0.2-1.2 0.4-1.8 0.5l-0.3-3h-0.5v3c-3.9 0-7-3.1-7-7z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:doctor-briefcase"><path d="M16 12l-1.4-6.7c-0.2-0.7-0.9-1.3-1.7-1.3h-1.9v-1.2c0-1-0.8-1.8-1.8-1.8h-2.4c-1 0-1.8 0.8-1.8 1.8v1.2h-1.9c-0.8 0-1.5 0.6-1.7 1.3l-1.4 6.7c-0.2 1 0.6 2 1.7 2h12.5c1.2 0 2-1 1.8-2zM6 2.8c0-0.4 0.4-0.8 0.8-0.8h2.4c0.4 0 0.8 0.4 0.8 0.8v1.2h-4v-1.2zM11 10h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"></path></g>
<g id="vaadin:doctor"><path d="M14 11.3c-1-1.9-2-1.6-3.1-1.7 0.1 0.3 0.1 0.6 0.1 1 1.6 0.4 2 2.3 2 3.4v1h-2v-1h1c0 0 0-2.5-1.5-2.5s-1.5 2.4-1.5 2.5h1v1h-2v-1c0-1.1 0.4-3.1 2-3.4 0-0.6-0.1-1.1-0.2-1.3-0.2-0.1-0.4-0.3-0.4-0.6 0-0.6 0.8-0.4 1.4-1.5 0 0 0.9-2.3 0.6-4.3h-1c0-0.2 0.1-0.3 0.1-0.5s0-0.3-0.1-0.5h0.8c-0.3-1-1.3-1.9-3.2-1.9 0 0 0 0 0 0s0 0 0 0 0 0 0 0c-1.9 0-2.9 0.9-3.3 2h0.8c0 0.2-0.1 0.3-0.1 0.5s0 0.3 0.1 0.5h-1c-0.2 2 0.6 4.3 0.6 4.3 0.6 1 1.4 0.8 1.4 1.5 0 0.5-0.5 0.7-1.1 0.8-0.2 0.2-0.4 0.6-0.4 1.4 0 0.4 0 0.8 0 1.2 0.6 0.2 1 0.8 1 1.4 0 0.7-0.7 1.4-1.5 1.4s-1.5-0.7-1.5-1.5c0-0.7 0.4-1.2 1-1.4 0-0.3 0-0.7 0-1.2s0.1-0.9 0.2-1.3c-0.7 0.1-1.5 0.4-2.2 1.7-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0.1 0-0.2-3.6-0.8-4.7zM6.5 2.5c0-0.8 0.7-1.5 1.5-1.5s1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5-1.5-0.7-1.5-1.5z"></path><path d="M5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></g>
<g id="vaadin:dollar"><path d="M8.2 6.8c-0.1 0-0.1-0.1-0.2-0.1v-3.1c1.2 0.1 2.2 0.6 2.2 0.6l0.9-1.8c-0.1 0-1.5-0.8-3.1-0.8v-1.6h-1v1.6c-0.8 0.2-1.4 0.5-2 0.9-0.6 0.6-1 1.4-1 2.3 0 0.7 0.2 2.3 3 3.6v3.9c-0.9-0.2-2-0.7-2.4-0.9l-1 1.7c0.2 0.1 1.8 1 3.4 1.2v1.7h1v-1.7c0 0 0 0 0 0 2.3-0.3 3.6-2.1 3.6-3.8 0-1.5-1-2.7-3.4-3.7zM7 6.2c-0.8-0.5-1-1-1-1.3 0-0.4 0.1-0.7 0.4-0.9 0.2-0.1 0.4-0.2 0.6-0.3v2.5zM8 12.3v-3.4c1.1 0.5 1.6 1.1 1.6 1.6 0 0.6-0.3 1.6-1.6 1.8z"></path></g>
<g id="vaadin:dot-circle"><path d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path></g>
<g id="vaadin:download-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 13l5-5h-3v-8h-4v8h-3z"></path></g>
<g id="vaadin:download"><path d="M16 10h-5.5l-2.5 2.5-2.5-2.5h-5.5v6h16v-6zM4 14h-2v-2h2v2z"></path><path d="M10 6v-6h-4v6h-3l5 5 5-5z"></path></g>
<g id="vaadin:drop"><path d="M8 0c0 0-5 8.2-5 11s2.2 5 5 5 5-2.2 5-5-5-11-5-11zM8.9 14.9l-0.2-1c1.4-0.3 2.4-1.7 2.4-3.2 0-0.3-0.1-1.1-0.8-2.6l0.9-0.4c0.6 1.4 0.8 2.4 0.8 3 0 2-1.3 3.8-3.1 4.2z"></path></g>
<g id="vaadin:edit"><path d="M16 4c0 0 0-1-1-2s-1.9-1-1.9-1l-1.1 1.1v-2.1h-12v16h12v-8l4-4zM6.3 11.4l-0.6-0.6 0.3-1.1 1.5 1.5-1.2 0.2zM7.2 9.5l-0.6-0.6 5.2-5.2c0.2 0.1 0.4 0.3 0.6 0.5zM14.1 2.5l-0.9 1c-0.2-0.2-0.4-0.3-0.6-0.5l0.9-0.9c0.1 0.1 0.3 0.2 0.6 0.4zM11 15h-10v-14h10v2.1l-5.9 5.9-1.1 4.1 4.1-1.1 2.9-3v6z"></path></g>
<g id="vaadin:eject"><path d="M1 11h14l-7-10z"></path><path d="M1 12h14v3h-14v-3z"></path></g>
<g id="vaadin:elastic"><path d="M4.7 16v0c-1.7 0-3.1-0.8-4-2.1-1.1-1.7-0.9-4 0.4-5.8 0.9-1.3 2.1-2.1 3.6-2.4 1.2-0.3 2.2-1.1 2.5-2.2 0.2-0.8 0.7-1.5 1.3-2 0.9-1 2.2-1.5 3.5-1.5 1.1 0 2.2 0.4 2.9 1.2 1.5 1.6 1.5 4.2-0.1 6-0.5 0.6-1.2 1.1-2 1.4-1.2 0.5-2.2 1.6-2.6 3-0.3 1-0.8 1.9-1.5 2.6-1.1 1.2-2.6 1.8-4 1.8zM12 1c-1 0-2 0.4-2.8 1.2-0.5 0.5-0.8 1-1 1.6-0.5 1.5-1.8 2.5-3.3 2.9-1.2 0.2-2.2 0.9-3 2-1.1 1.5-1.2 3.3-0.3 4.7 0.6 1 1.8 1.6 3.1 1.6v0c1.2 0 2.4-0.5 3.3-1.4 0.6-0.6 1.1-1.4 1.3-2.2 0.4-1.7 1.6-3 3.2-3.6 0.6-0.2 1.2-0.7 1.6-1.2 1.2-1.4 1.3-3.5 0.1-4.7-0.6-0.6-1.4-0.9-2.2-0.9z"></path></g>
<g id="vaadin:ellipsis-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M4 7h2v2h-2v-2z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 7h2v2h-2v-2z"></path></g>
<g id="vaadin:ellipsis-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 9h-2v-2h2v2zM9 9h-2v-2h2v2zM12 9h-2v-2h2v2z"></path></g>
<g id="vaadin:ellipsis-dots-h"><path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-dots-v"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:ellipsis-h"><path d="M0 6h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path></g>
<g id="vaadin:ellipsis-v"><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path></g>
<g id="vaadin:enter-arrow"><path d="M0 9l7 4v-3h9v-7l-3 2v2h-6v-3l-7 5z"></path></g>
<g id="vaadin:enter"><path d="M4 0v6h-3v10h14v-16h-11zM12 11h-5v2l-3-2.5 3-2.5v2h4v-3h1v4z"></path></g>
<g id="vaadin:envelope-o"><path d="M0 3v11h16v-11h-16zM1 7.1l3.9 2-3.9 3.4v-5.4zM1.9 13l4-3.5 2.1 1.1 2.1-1.1 4 3.5h-12.2zM15 12.5l-3.9-3.5 3.9-2v5.5zM15 5.9l-7 3.5-7-3.5v-1.9h14v1.9z"></path></g>
<g id="vaadin:envelope-open-o"><path d="M14 3.7v-0.7h-1.5l-4.5-3-4.6 3h-1.4v0.7l-2 1.3v11h16v-10.9l-2-1.4zM8 1.2l2.7 1.8h-5.5l2.8-1.8zM3 4h10v3.7l-3.5 1.7-1.5-1.3-1.5 1.4-3.5-1.7v-3.8zM1 5.5l1-0.7v2.4l-1-0.4v-1.3zM1 7.9l4.6 2.3-4.6 4v-6.3zM1.9 15l6.1-5.3 6.1 5.3h-12.2zM15 14.2l-4.7-4.1 4.7-2.3v6.4zM15 6.7l-1 0.5v-2.3l1 0.7v1.1z"></path></g>
<g id="vaadin:envelope-open"><path d="M14 3.7v3.7l2-1v-1.4z"></path><path d="M2 3.8l-2 1.2v1.5l2 1z"></path><path d="M11.2 2l-3.2-2-3.2 2z"></path><path d="M13 3h-10v4.9l3.4 1.7 1.6-1.2 1.6 1.2 3.4-1.7z"></path><path d="M16 7.6l-5.5 2.7 5.5 4.4z"></path><path d="M8 9.6l-8 6.4h16z"></path><path d="M5.5 10.3l-5.5-2.7v7.1z"></path></g>
<g id="vaadin:envelope"><path d="M0 3h16v2.4l-8 4-8-4z"></path><path d="M0 14l5.5-4.8 2.5 1.4 2.5-1.4 5.5 4.8z"></path><path d="M4.6 8.8l-4.6-2.3v6.5z"></path><path d="M11.4 8.8l4.6-2.3v6.5z"></path></g>
<g id="vaadin:envelopes-o"><path d="M14 2h-14v10h14v-10zM5.71 8l1.29 0.55 1.29-0.55 4.71 3h-12zM1 9.83v-4l3.64 1.63zM9.36 7.46l3.64-1.68v4zM13 3v1.68l-6 2.77-6-2.77v-1.68h12z"></path><path d="M15 4v9h-13v1h14v-10h-1z"></path></g>
<g id="vaadin:envelopes"><path d="M16 14h-14v-1h13v-9h1v10z"></path><path d="M14 10.77v-5.48l-4.68 2.18 4.68 3.3z"></path><path d="M8.28 7.96l-1.28 0.59-1.28-0.59-5.72 4.030v0.010l14-0.010-5.72-4.030z"></path><path d="M7 7.45l7-3.27v-2.18h-14v2.18l7 3.27z"></path><path d="M4.68 7.47l-4.68-2.18v5.48l4.68-3.3z"></path></g>
<g id="vaadin:eraser"><path d="M8.1 14l6.4-7.2c0.6-0.7 0.6-1.8-0.1-2.5l-2.7-2.7c-0.3-0.4-0.8-0.6-1.3-0.6h-1.8c-0.5 0-1 0.2-1.4 0.6l-6.7 7.6c-0.6 0.7-0.6 1.9 0.1 2.5l2.7 2.7c0.3 0.4 0.8 0.6 1.3 0.6h11.4v-1h-7.9zM6.8 13.9c0 0 0-0.1 0 0l-2.7-2.7c-0.4-0.4-0.4-0.9 0-1.3l3.4-3.9h-1l-3 3.3c-0.6 0.7-0.6 1.7 0.1 2.4l2.3 2.3h-1.3c-0.2 0-0.4-0.1-0.6-0.2l-2.8-2.8c-0.3-0.3-0.3-0.8 0-1.1l3.5-3.9h1.8l3.5-4h1l-3.5 4 3.1 3.7-3.5 4c-0.1 0.1-0.2 0.1-0.3 0.2z"></path></g>
<g id="vaadin:esc-a"><path d="M8 12c-0.726-0.029-1.409-0.177-2.043-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.85 0.33 2 0.77 1.8 2.080-0.067 0.511-0.364 0.94-0.782 1.186-0.323 0.163-0.696 0.256-1.090 0.256-0.034 0-0.069-0.001-0.103-0.002z"></path><path d="M13.71 12c-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.646-0.548-1.059-1.37-1.059-2.289 0-0.079 0.003-0.157 0.009-0.235-0.011-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.010 0.063-0.016 0.148-0.016 0.234 0 0.599 0.255 1.138 0.663 1.514 0.346 0.177 0.754 0.28 1.185 0.28 0.292 0 0.573-0.047 0.835-0.134l0.331 0.905c-0.383 0.121-0.823 0.19-1.279 0.19-0.004 0-0.008 0-0.012-0z"></path><path d="M5 4v-1h-4v9h4v-1h-3v-3h3v-1h-3v-3h3z"></path></g>
<g id="vaadin:esc"><path d="M0 0v16h16v-16h-16zM5 4h-3v3h3v1h-3v3h3v1h-4v-9h4v1zM10 10.54c-0.067 0.511-0.364 0.94-0.782 1.186-0.333 0.175-0.719 0.276-1.129 0.276-0.031 0-0.062-0.001-0.093-0.002-0.722-0.029-1.405-0.177-2.038-0.425l0.403-0.915c0.435 0.202 0.945 0.319 1.482 0.319 0.326 0 0.643-0.043 0.943-0.125 0.121-0.109 0.215-0.285 0.215-0.484 0-0 0-0 0-0 0.070-0.43-0.22-0.62-1.17-1-0.83-0.29-2.040-0.76-1.83-2.080 0.072-0.594 0.46-1.082 0.989-1.296 0.223-0.053 0.466-0.081 0.715-0.081 0.724 0 1.393 0.235 1.934 0.633l-0.569 0.754c-0.366-0.248-0.817-0.396-1.302-0.396-0.123 0-0.243 0.009-0.361 0.028-0.215 0.084-0.377 0.296-0.387 0.547-0.080 0.401 0.14 0.581 1.15 1.001 0.83 0.3 2.020 0.75 1.83 2.060zM12.67 10.72c0.345 0.176 0.752 0.279 1.183 0.279 0.292 0 0.573-0.047 0.835-0.134l0.311 0.945c-0.383 0.121-0.823 0.19-1.279 0.19-0 0-0.001 0-0.001 0-0.027 0.001-0.058 0.001-0.089 0.001-0.583 0-1.124-0.18-1.57-0.488-0.651-0.548-1.069-1.374-1.069-2.297 0-0.076 0.003-0.152 0.008-0.227-0.010-0.079-0.016-0.183-0.016-0.288 0-0.899 0.413-1.701 1.060-2.228 0.5-0.282 1.091-0.446 1.72-0.446 0.443 0 0.868 0.081 1.259 0.23l-0.374 0.922c-0.276-0.111-0.595-0.176-0.93-0.176-0.388 0-0.756 0.087-1.086 0.242-0.395 0.361-0.652 0.893-0.652 1.485 0 0.095 0.007 0.188 0.019 0.279-0.008 0.055-0.013 0.13-0.013 0.206 0 0.592 0.25 1.126 0.65 1.502z"></path></g>
<g id="vaadin:euro"><path d="M10.89 3c1.166 0.009 2.244 0.383 3.127 1.011l-0.017-2.321c-0.918-0.433-1.994-0.686-3.129-0.686-3.606 0-6.616 2.551-7.323 5.947l-1.548 0.049v1h1.41c0 0.17 0 0.33 0 0.5-0.005 0.075-0.008 0.162-0.008 0.25s0.003 0.175 0.008 0.262l-1.411-0.012v1h1.54c0.882 3.353 3.805 5.818 7.331 5.999 1.149-0.002 2.218-0.256 3.175-0.708l-0.045-2.291c-0.866 0.617-1.944 0.991-3.108 1-2.461-0.128-4.512-1.744-5.28-3.959l6.388-0.041v-1h-6.59c-0.006-0.075-0.009-0.162-0.009-0.25s0.003-0.175 0.010-0.261c-0.001-0.159-0.001-0.319-0.001-0.489h6.59v-1h-6.4c0.678-2.325 2.788-3.996 5.29-4z"></path></g>
<g id="vaadin:exchange"><path d="M16 5v2h-13v2l-3-3 3-3v2z"></path><path d="M0 12v-2h13v-2l3 3-3 3v-2z"></path></g>
<g id="vaadin:exclamation-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 3h2v7h-2v-7z"></path><path d="M7 11h2v2h-2v-2z"></path></g>
<g id="vaadin:exclamation-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-2h2v2zM9 10h-2v-7h2v7z"></path></g>
<g id="vaadin:exclamation"><path d="M6 0h4v4l-1 7h-2l-1-7z"></path><path d="M10 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:exit-o"><path d="M10 0c1.1 0 2 0.9 2 2 0 0.9-0.6 1.7-1.5 1.9 0 0 0 0.1 0 0.1 0.4 0 0.7 0.2 1 0.5l1.3 1.3c0.1 0.1 0.3 0.2 0.5 0.2h1.7v-6h-5z"></path><path d="M11.8 14.5l-3.8-4.5v2.5c0 0.8-0.7 1.5-1.5 1.5h-3.5c-0.6 0-1-0.4-1-1s0.4-1 1-1h2.5c0.3 0 0.5-0.2 0.5-0.5v-2c0-0.7 0.1-1.3 0.4-2l0.7-1.5h-0.8c-0.5 0-0.9 0.2-1.2 0.6l-0.5 0.7c-0.2 0.4-0.7 0.5-1.2 0.3-0.4-0.3-0.6-0.9-0.2-1.3l0.6-0.8c0.7-1 1.9-1.5 3.1-1.5h2l0.1-0.3c-0.6-0.3-1-1-1-1.7 0-1.1 0.9-2 2-2h-7v4.9l-0.6 0.8c-0.3 0.4-0.5 0.9-0.4 1.5 0.1 0.5 0.4 1 0.9 1.3 0 0 0 0 0 0v2.5c-1.1 0-2 0.9-2 2s0.9 2 2 2v1h11.6c-1.1 0-2.1-0.6-2.7-1.5z"></path><path d="M11.4 7.3l-0.7-0.8-0.6 1.5c-0.2 0.5-0.3 0.9 0 1.3l4.9 6.1v-7.4h-2.1c-0.6 0-1.1-0.2-1.5-0.7z"></path></g>
<g id="vaadin:exit"><path d="M14 6h-1.7c-0.2 0-0.4-0.1-0.6-0.2l-1.3-1.3c-0.2-0.3-0.6-0.5-1.1-0.5h-0.3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7l-0.2 0.3h-2c-1.1 0-2.3 0.5-3 1.5l-0.6 0.8c-0.4 0.4-0.2 1 0.2 1.3 0.4 0.2 0.9 0.1 1.2-0.3l0.5-0.7c0.3-0.4 0.7-0.6 1.2-0.6h0.8l-0.7 1.6c-0.3 0.6-0.4 1.2-0.4 1.9v2c0 0.3-0.2 0.5-0.5 0.5h-2.5c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.5c0.8 0 1.5-0.7 1.5-1.5v-2.5l3.8 4.5c0.6 0.9 1.7 1.5 2.8 1.5h0.9l-5.4-6.7c-0.3-0.4-0.2-0.8 0-1.3l0.6-1.5 0.7 0.8c0.4 0.4 1 0.7 1.6 0.7h2c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path></g>
<g id="vaadin:expand-full"><path d="M5.3 6.7l1.4-1.4-3-3 1.3-1.3h-4v4l1.3-1.3z"></path><path d="M6.7 10.7l-1.4-1.4-3 3-1.3-1.3v4h4l-1.3-1.3z"></path><path d="M10.7 9.3l-1.4 1.4 3 3-1.3 1.3h4v-4l-1.3 1.3z"></path><path d="M11 1l1.3 1.3-3 3 1.4 1.4 3-3 1.3 1.3v-4z"></path></g>
<g id="vaadin:expand-square"><path d="M11 2h-9v9l1-1v-7h7z"></path><path d="M5 14h9v-9l-1 1v7h-7z"></path><path d="M16 0h-5l1.8 1.8-4.5 4.5 1.4 1.4 4.5-4.5 1.8 1.8z"></path><path d="M7.7 9.7l-1.4-1.4-4.5 4.5-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:expand"><path d="M15 1h-4l1.3 1.3-4.5 4.5 1.4 1.4 4.5-4.5 1.3 1.3z"></path><path d="M6.8 7.8l-4.5 4.5-1.3-1.3v4h4l-1.3-1.3 4.5-4.5z"></path></g>
<g id="vaadin:external-browser"><path d="M11 10l-2.9-3.2-3.3 3.2h2.2v1.8c0 1.7-0.9 4.2-4 4.2 4.8 0 6-1.4 6-4.3v-1.7h2z"></path><path d="M0 0v13h6v-1h-5v-9h14v9h-5v1h6v-13h-16zM2 2h-1v-1h1v1zM13 2h-10v-1h10v1z"></path></g>
<g id="vaadin:external-link"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path></g>
<g id="vaadin:eye-slash"><path d="M12.9 5.2l-0.8 0.8c1.7 0.9 2.5 2.3 2.8 3-0.7 0.9-2.8 3.1-7 3.1-0.7 0-1.2-0.1-1.8-0.2l-0.8 0.8c0.8 0.3 1.7 0.4 2.6 0.4 5.7 0 8.1-4 8.1-4s-0.6-2.4-3.1-3.9z"></path><path d="M12 7.1c0-0.3 0-0.6-0.1-0.8l-4.8 4.7c0.3 0 0.6 0.1 0.9 0.1 2.2 0 4-1.8 4-4z"></path><path d="M15.3 0l-4.4 4.4c-0.8-0.2-1.8-0.4-2.9-0.4-6.7 0-8 5.1-8 5.1s1 1.8 3.3 3l-3.3 3.2v0.7h0.7l15.3-15.3v-0.7h-0.7zM4 11.3c-1.6-0.7-2.5-1.8-2.9-2.3 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 1.1 0.5 2.2 1.3 2.9l-1.3 1.3zM6.2 7.9l-1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.5 0.4-1.5 0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.7c-0.1 0.7 0.1 1.1 0.1 1.1z"></path></g>
<g id="vaadin:eye"><path d="M8 3.9c-6.7 0-8 5.1-8 5.1s2.2 4.1 7.9 4.1 8.1-4 8.1-4-1.3-5.2-8-5.2zM5.3 5.4c0.5-0.3 1.3-0.3 1.3-0.3s-0.5 0.9-0.5 1.6c0 0.7 0.2 1.1 0.2 1.1l-1.1 0.2c0 0-0.3-0.5-0.3-1.2 0-0.8 0.4-1.4 0.4-1.4zM7.9 12.1c-4.1 0-6.2-2.3-6.8-3.2 0.3-0.7 1.1-2.2 3.1-3.2-0.1 0.4-0.2 0.8-0.2 1.3 0 2.2 1.8 4 4 4s4-1.8 4-4c0-0.5-0.1-0.9-0.2-1.3 2 0.9 2.8 2.5 3.1 3.2-0.7 0.9-2.8 3.2-7 3.2z"></path></g>
<g id="vaadin:eyedropper"><path d="M15 1c-1.8-1.8-3.7-0.7-4.6 0.1-0.4 0.4-0.7 0.9-0.7 1.5v0c0 1.1-1.1 1.8-2.1 1.5l-0.1-0.1-0.7 0.8 0.7 0.7-6 6-0.8 2.3-0.7 0.7 1.5 1.5 0.8-0.8 2.3-0.8 6-6 0.7 0.7 0.7-0.6-0.1-0.2c-0.3-1 0.4-2.1 1.5-2.1v0c0.6 0 1.1-0.2 1.4-0.6 0.9-0.9 2-2.8 0.2-4.6zM3.9 13.6l-2 0.7-0.2 0.1 0.1-0.2 0.7-2 5.8-5.8 1.5 1.5-5.9 5.7z"></path></g>
<g id="vaadin:facebook-square"><path d="M0 0v16h16v-16h-16zM12.9 8.4h-2.1v5.6h-2.1v-5.6h-1.5v-2h1.5c0 0 0-0.8 0-1.7 0-1.5 0.9-2.7 2.9-2.7 0.8 0 1.4 0.1 1.4 0.1v1.9c0 0-0.6 0-1.3 0s-0.8 0.3-0.8 0.9c0 0.1 0 0.1 0 0.1 0 0.2 0 0.5 0 1.4h2.1l-0.1 2z"></path></g>
<g id="vaadin:facebook"><path d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z"></path></g>
<g id="vaadin:factory"><path d="M4.4 1.3c-0.6 0.3-0.8 1.1-0.4 1.5 0.5-0.9 1.3-0.6 2.5 0.4 0.8 0.7 1.9 0.1 1.9 0.1s0.2 1.2 1.7 1.4c1.7 0.2 2.3-0.8 2.3-0.8s0.4 1 1.9 0.4c1.1-0.4 0.7-1.1 0.7-1.1s1 0 1-0.7c0-0.9-1.1-0.8-1.1-0.8s0.2-1-0.9-1.1c-1-0.1-1.3 0.5-1.3 0.5s-0.3-1.1-1.8-1.1c-1.4 0-1.9 1.3-1.9 1.3s-0.4-0.6-1.6-0.6c-0.9 0-1.3 0.7-1.3 0.7s-1.1-0.5-1.7-0.1z"></path><path d="M12 12.1v-2.1l-4 2.1v-2.1h-2.4l-0.6-7h-2l-0.6 7h-2.4v6h16v-6l-4 2.1zM6 14h-4v-2h4v2z"></path></g>
<g id="vaadin:family"><path d="M9.5 7.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M14.27 4h-2.54c0 0 0 0 0 0-0.955 0-1.73 0.775-1.73 1.73v3.27c0 0.552 0.448 1 1 1v6h4v-6c0.552 0 1-0.448 1-1v-3.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M15 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M4.27 5h-2.54c-0.955 0-1.73 0.775-1.73 1.73s0.775 1.73 1.73 1.73c0.955 0 1.73-0.775 1.73-1.73s-0.775-1.73-1.73-1.73c-0.955 0-1.73 0.775-1.73 1.73v2.27c0 0.552 0.448 1 1 1l-1 3h1v3h4v-3h1l-1-3c0.552 0 1-0.448 1-1v-2.27c0-0.955-0.775-1.73-1.73-1.73 0 0 0 0 0 0z"></path><path d="M5 3c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M7 13v3h2v-3c0.552 0 1-0.448 1-1v-1.54c0-0.806-0.654-1.46-1.46-1.46 0 0 0 0 0 0h-1.080c-0.806 0-1.46 0.654-1.46 1.46 0 0 0 0 0 0v1.54c0 0.552 0.448 1 1 1z"></path></g>
<g id="vaadin:fast-backward"><path d="M16 15v-14l-7 7z"></path><path d="M9 15v-14l-7 7z"></path><path d="M0 1h2v14h-2v-14z"></path></g>
<g id="vaadin:fast-forward"><path d="M0 1v14l7-7z"></path><path d="M7 1v14l7-7z"></path><path d="M14 1h2v14h-2v-14z"></path></g>
<g id="vaadin:female"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 8v-1.5l1.8 1.8c0.3 0.3 0.7 0.3 1 0s0.3-0.8 0-1l-2.6-2.6c-0.4-0.5-1-0.7-1.7-0.7h-1c-0.7 0-1.3 0.2-1.7 0.7l-2.6 2.6c-0.3 0.3-0.3 0.8 0 1 0.3 0.3 0.7 0.3 1 0l1.8-1.8v1.5l-4 5h4v3h4v-3h4l-4-5z"></path></g>
<g id="vaadin:file-add"><path d="M12 15h-10v-14h6v4h4v1h1v-2l-4-4h-8v16h12v-2h-1v1zM9 1l3 3h-3v-3z"></path><path d="M13 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:file-code"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6.2 13h-0.7l-2-2.5 2-2.5h0.7l-2 2.5z"></path><path d="M9.8 13h0.7l2-2.5-2-2.5h-0.7l2 2.5z"></path><path d="M6.7 14h0.6l2.1-7h-0.8z"></path></g>
<g id="vaadin:file-font"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M5 7v2h2v5h2v-5h2v-2z"></path></g>
<g id="vaadin:file-movie"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M10 10v-2h-6v5h6v-2l2 2v-5z"></path></g>
<g id="vaadin:file-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path></g>
<g id="vaadin:file-picture"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 11.5v2.5h8v-1.7c0 0 0.1-1.3-1.3-1.5-1.3-0.2-1.5 0.4-2.5 0.5-0.8 0-0.6-1.3-2.2-1.3-1.2 0-2 1.5-2 1.5z"></path><path d="M12 8.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:file-presentation"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M9 6h-2v1h-3v6h2v1h1v-1h2v1h1v-1h2v-6h-3v-1zM11 8v4h-6v-4h6z"></path><path d="M7 9v2l2-1z"></path></g>
<g id="vaadin:file-process"><path d="M12 0h-7v6h0.7l0.2 0.7 0.1 0.1v-5.8h5v4h4v9h-6l0.3 0.5-0.5 0.5h7.2v-11l-4-4zM12 4v-3l3 3h-3z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:file-refresh"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M4.7 7.7l-0.7-0.7v3h3l-1.2-1.2c0.4-0.8 1.3-1.3 2.2-1.3 1.4 0 2.5 1.1 2.5 2.5h1.5c0-2.2-1.8-4-4-4-1.3 0-2.5 0.7-3.3 1.7z"></path><path d="M9.8 11.8c-0.5 0.5-1.1 0.8-1.8 0.7-1 0-1.9-0.6-2.3-1.5h-1.6c0.4 1.7 2 3 3.8 3 1.1 0 2.1-0.5 2.8-1.2l1.3 1.2v-3h-3l0.8 0.8z"></path></g>
<g id="vaadin:file-remove"><path d="M12 15h-10v-14h6v4h4v2.59l1-1v-2.59l-4-4h-8v16h12v-2.59l-1-1v2.59zM9 1l3 3h-3v-3z"></path><path d="M15 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:file-search"><path d="M12 13.47v1.53h-10v-14h6v4h4v0.56c0.386 0.229 0.716 0.504 0.996 0.825l0.004-2.385-4-4h-8v16h12v-1.53zM9 1l3 3h-3v-3z"></path><path d="M14.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM10 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:file-sound"><path d="M11.4 10.5c0 1.2-0.4 2.2-1 3l0.4 0.5c0.7-0.9 1.2-2.1 1.2-3.5s-0.5-2.6-1.2-3.5l-0.4 0.5c0.6 0.8 1 1.9 1 3z"></path><path d="M9.9 8l-0.4 0.5c0.4 0.5 0.7 1.2 0.7 2s-0.3 1.5-0.7 2l0.4 0.5c0.5-0.6 0.8-1.5 0.8-2.5s-0.3-1.8-0.8-2.5z"></path><path d="M9.1 9l-0.4 0.5c0.2 0.3 0.3 0.6 0.3 1s-0.1 0.7-0.3 1l0.4 0.5c0.3-0.4 0.5-0.9 0.5-1.5s-0.2-1.1-0.5-1.5z"></path><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M6 9h-2v3h2l2 2v-7z"></path></g>
<g id="vaadin:file-start"><path d="M10 0h-8v16h12v-12l-4-4zM13 15h-10v-14h6v4h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6v6l6-3z"></path></g>
<g id="vaadin:file-table"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7v6h8v-6h-8zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM9 12h-2v-1h2v1zM9 10h-2v-1h2v1zM11 12h-1v-1h1v1zM11 10h-1v-1h1v1z"></path></g>
<g id="vaadin:file-text-o"><path d="M10 0h-8v16h12v-12l-4-4zM9 5h4v10h-10v-14h6v4zM10 4v-3l3 3h-3z"></path><path d="M4 7h8v1h-8v-1z"></path><path d="M4 9h8v1h-8v-1z"></path><path d="M4 11h8v1h-8v-1z"></path></g>
<g id="vaadin:file-text"><path d="M10 0v4h4z"></path><path d="M9 0h-7v16h12v-11h-5v-5zM12 12h-8v-1h8v1zM12 10h-8v-1h8v1zM12 7v1h-8v-1h8z"></path></g>
<g id="vaadin:file-tree-small"><path d="M5 12v2h11v-5h-11v2h-2v-4h9v-5h-12v5h2v5z"></path></g>
<g id="vaadin:file-tree-sub"><path d="M8 11v1h-1v-2h5v-4h-8v1h-1v-2h6v-4h-9v4h2v3h2v2h2v3h2v2h8v-4z"></path></g>
<g id="vaadin:file-tree"><path d="M16 10v-4h-11v1h-2v-3h9v-4h-12v4h2v10h3v2h11v-4h-11v1h-2v-5h2v2z"></path></g>
<g id="vaadin:file-zip"><path d="M10 0h-8v16h12v-12l-4-4zM9 15h-4v-2.8l0.7-2.2h2.4l0.9 2.2v2.8zM13 15h-3v-3l-1-3h-2v-1h-2v1l-1 3v3h-1v-14h4v1h2v1h-2v1h2v1h4v10zM10 4v-3l3 3h-3z"></path><path d="M5 6h2v1h-2v-1z"></path><path d="M5 2h2v1h-2v-1z"></path><path d="M5 4h2v1h-2v-1z"></path><path d="M7 5h2v1h-2v-1z"></path><path d="M7 7h2v1h-2v-1z"></path><path d="M6 12h2v2h-2v-2z"></path></g>
<g id="vaadin:file"><path d="M9 5h5v11h-12v-16h7v5zM10 4v-4l4 4h-4z"></path></g>
<g id="vaadin:fill"><path d="M13 14.5c0.468-2.207 0.985-4.050 1.604-5.846 0.411 1.796 0.928 3.638 1.337 5.521 0.059 1.153-0.612 1.825-1.441 1.825s-1.5-0.672-1.5-1.5z"></path><path d="M8 1l-1.44 1.44-2-2c-0.276-0.262-0.649-0.423-1.060-0.423s-0.784 0.161-1.061 0.423c-0.27 0.271-0.438 0.645-0.438 1.059s0.168 0.789 0.439 1.060l2 2-4.44 4.44 7 7 8-8zM8 2.41l5.59 5.59h-11.18l2.75-2.75c0.071 0.042 0.156 0.067 0.247 0.067 0.271 0 0.49-0.219 0.49-0.49 0-0.091-0.025-0.176-0.068-0.249l0.721-0.718 1.54 1.53c0.091 0.091 0.216 0.147 0.355 0.147 0.277 0 0.502-0.225 0.502-0.502 0-0.139-0.056-0.264-0.147-0.355l-1.53-1.53zM3.15 1.85c-0.091-0.091-0.148-0.216-0.148-0.355s0.057-0.264 0.148-0.355c0.092-0.089 0.217-0.144 0.355-0.144s0.263 0.055 0.355 0.144l2 2-0.71 0.71z"></path></g>
<g id="vaadin:film"><path d="M0 0v16h1v-1h1v1h12v-1h1v1h1v-16h-16zM2 14h-1v-1h1v1zM2 12h-1v-1h1v1zM2 10h-1v-1h1v1zM2 8h-1v-1h1v1zM2 6h-1v-1h1v1zM2 4h-1v-1h1v1zM2 2h-1v-1h1v1zM13 15h-10v-6h10v6zM13 7h-10v-6h10v6zM15 14h-1v-1h1v1zM15 12h-1v-1h1v1zM15 10h-1v-1h1v1zM15 8h-1v-1h1v1zM15 6h-1v-1h1v1zM15 4h-1v-1h1v1zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:filter"><path d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path><path d="M1 0h14v1h-14v-1z"></path></g>
<g id="vaadin:fire"><path d="M4.9 15.8c0 0-3.9-0.4-3.9-5.7 0-4.1 3.1-6.5 3.1-6.5s1.3 1.4 2.3 1.9c1 0.6 1.4-5.5 1.4-5.5s7.2 3.9 7.2 9.8c0 6.1-4 5.9-4 5.9s1.8-2.4 1.8-5.2c0-3-3.9-6.7-3.9-6.7s-0.5 4.4-2.1 5c-1.6-0.9-2.5-2.3-2.5-2.3s-3.7 5.8 0.6 9.3z"></path><path d="M8.2 16.1c-2-0.1-3.7-1.4-3.7-3.2s0.7-2.6 0.7-2.6 0.5 1 1.1 1.5 1.8 0.8 2.4 0.1c0.6-0.6 0.8-2.3 0.8-2.3s1.4 1.1 1.2 3c-0.1 2-0.9 3.5-2.5 3.5z"></path></g>
<g id="vaadin:flag-checkered"><path d="M2 0c-1.1 0-2 0.9-2 2 0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7 0-1.1-0.9-2-2-2z"></path><path d="M12 2c-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8c0 0-1.6 1-4 1zM15 4.5c-0.2 0.2-0.8 0.4-2 0.6v-2.2c0.8-0.1 1.5-0.2 2-0.4v2zM5 7.9v-2.6c0.4-0.6 1.1-1.1 2-1.1v-2.1c0.2-0.1 0.4-0.1 0.6-0.1 1.2 0 1.6 0.2 2.1 0.4 0.1 0.1 0.2 0.2 0.3 0.2v2.2c0.5 0.2 1.1 0.4 2 0.4 0.4 0 0.7 0 1-0.1v2.6c-0.3 0-0.6 0.1-1 0.1-1.1 0-1.5-0.2-2-0.5v2.3c-0.7-0.3-1.5-0.6-3-0.6v-2.2c-0.9 0.2-1.5 0.6-2 1.1zM13 9.9v-2.2c1.1-0.2 1.7-0.6 2-0.8v1.8c-0.2 0.3-0.7 1-2 1.2z"></path><path d="M10 7.2v-2.4c0 0-1.2-0.6-3-0.6v2.6c1.7-0.4 3 0.4 3 0.4z"></path></g>
<g id="vaadin:flag-o"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M7.6 2c1.2 0 1.6 0.2 2.1 0.4 0.5 0.3 1.1 0.6 2.3 0.6s2.2-0.2 3-0.5v6.3c-0.2 0.3-0.9 1.2-3 1.2-0.9 0-1.3-0.2-1.9-0.4-0.7-0.3-1.5-0.6-3.1-0.6-0.8 0-1.5 0.2-2 0.5v-5.3c0.2-0.5 1-2.2 2.6-2.2zM16 1c0 0-1.6 1-4 1-2.1 0-1.8-1-4.4-1s-3.6 3-3.6 3v8c0 0 0.7-2 3-2 2.7 0 2.8 1 5 1 3.3 0 4-2 4-2v-8z"></path></g>
<g id="vaadin:flag"><path d="M4 2c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 0.7 0.4 1.4 1 1.7v12.3h2v-12.3c0.6-0.3 1-1 1-1.7z"></path><path d="M4 4c0 0 1-3 3.6-3 2.7 0 2.3 1 4.4 1 2.4 0 4-1 4-1v8c0 0-0.7 2-4 2-2.2 0-2.3-1-5-1-2.3 0-3 2-3 2v-8z"></path></g>
<g id="vaadin:flash"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6z"></path></g>
<g id="vaadin:flask"><path d="M2 16h12l-4-8v-7h1v-1h-6v1h1v7l-4 8zM9 1v7.2l1.9 3.8h-5.8l1.9-3.8v-7.2h2z"></path></g>
<g id="vaadin:flight-landing"><path d="M13.64 7c-0.71-0.2-1.89-0.43-3.23-0.67l-3.82-4.24c-0.209-0.23-0.462-0.416-0.746-0.544l-1.194-0.546c-0.090 0-0.15 0-0.1 0.11s1.45 2.89 2.29 4.59c-1.84-0.29-3.5-0.53-4.23-0.63-0.258-0.047-0.474-0.198-0.608-0.406l-0.722-1.074c-0.115-0.168-0.28-0.294-0.474-0.358l-0.806-0.232 0.61 3.26c0.067 0.34 0.318 0.609 0.644 0.699 1.326 0.381 4.816 1.341 7.526 1.921 6 1.28 6.8 1.28 7.12 0.91s-0.67-2.38-2.26-2.79z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flight-takeoff"><path d="M12.57 2.26c-0.65 0.29-1.66 0.85-2.8 1.5l-5.46-0.76c-0.093-0.014-0.2-0.022-0.309-0.022-0.211 0-0.414 0.030-0.607 0.086l-1.185 0.336c-0.1 0-0.1 0.1 0 0.14l4.56 2c-1.54 0.92-2.91 1.76-3.51 2.14-0.13 0.082-0.288 0.13-0.458 0.13-0.094 0-0.184-0.015-0.268-0.042l-1.194-0.378c-0.086-0.031-0.186-0.049-0.29-0.049s-0.204 0.018-0.296 0.051l-0.754 0.308 2.52 2.1c0.152 0.127 0.349 0.205 0.565 0.205 0.129 0 0.251-0.028 0.361-0.077 1.204-0.538 4.374-1.998 6.734-3.228 5.24-2.78 5.82-3.26 5.82-3.7 0-0.69-2-1.4-3.43-0.74z"></path><path d="M0 13h16v1h-16v-1z"></path></g>
<g id="vaadin:flip-h"><path d="M0 15l6-5-6-4.9z"></path><path d="M9 10.1l6 4.9v-10l-6 5.1zM14 12.9l-3.4-2.8 3.4-3v5.8z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M7 7h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M7.5 1v0c1.3 0 2.6 0.7 3.6 1.9l-1.1 1.1h3v-3l-1.2 1.2c-1.2-1.4-2.7-2.2-4.3-2.2 0 0 0 0 0 0-1.9 0-3.6 1-4.9 2.9l0.8 0.6c1.1-1.6 2.5-2.5 4.1-2.5z"></path></g>
<g id="vaadin:flip-v"><path d="M1 1l5 6 4.94-6h-9.94z"></path><path d="M5.94 10l-4.94 6h10zM3.12 15l2.83-3.44 3 3.44h-5.83z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 8.47v0c-0.059 1.485-0.782 2.789-1.879 3.632l-1.121-1.102v3h3l-1.18-1.18c1.293-1.031 2.128-2.588 2.18-4.342l0-0.008c-0.092-2.083-1.223-3.883-2.884-4.905l-0.596 0.805c1.423 0.857 2.383 2.357 2.479 4.087z"></path></g>
<g id="vaadin:folder-add"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14v-1h-13v-9h0.62l1-2h2.57l1.19 2h6.62v1h1z"></path><path d="M14 7h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path></g>
<g id="vaadin:folder-o"><path d="M7 4l-1-2h-4l-1 2h-1v11h16v-11h-9zM15 14h-14v-9h0.6l1-2h2.6l1.2 2h8.6v9z"></path></g>
<g id="vaadin:folder-open-o"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v11h14l2-9h-2zM14.9 7l-1.6 7-11.9-0.1 2.3-6.9h11.2zM1 5h0.6l1-2h2.6l1.2 2h6.6v1h-10l-2 5.9v-6.9z"></path></g>
<g id="vaadin:folder-open"><path d="M14 6v-2h-7l-1-2h-4l-1 2h-1v9.5l3-7.5z"></path><path d="M3.7 7l-3.2 8h12.8l2.5-8z"></path></g>
<g id="vaadin:folder-remove"><path d="M13 12.41v1.59h-12v-9h0.62l1-2h2.57l1.19 2h6.62v2.59l1-1v-2.59h-7l-1-2h-4l-1 2h-1v11h14v-1.59l-1-1z"></path><path d="M16 8l-1-1-2 2-2-2-1 1 2 2-2 2 1 1 2-2 2 2 1-1-2-2 2-2z"></path></g>
<g id="vaadin:folder-search"><path d="M13 13.47v0.53h-12v-9h0.62l1-2h2.57l1.19 2h6.62v0.91c0.385 0.179 0.716 0.407 1.001 0.681l-0.001-2.591h-7l-1-2h-4l-1 2h-1v11h14v-0.53z"></path><path d="M15.78 12.72l-1.92-1.92c-0.089-0.085-0.201-0.148-0.325-0.179 0.292-0.458 0.468-1.018 0.468-1.618 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3 0.6 0 1.16-0.176 1.629-0.48 0.020 0.136 0.083 0.248 0.169 0.337l1.92 1.92c0.134 0.125 0.313 0.201 0.511 0.201 0.414 0 0.75-0.336 0.75-0.75 0-0.198-0.077-0.378-0.202-0.512zM11 11c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z"></path></g>
<g id="vaadin:folder"><path d="M16 15h-16v-11h1l1-2h4l1 2h9z"></path></g>
<g id="vaadin:font"><path d="M12 16h3l-6-16h-2l-6 16h3l1.9-5h4.2l1.9 5zM6.7 9l1.3-3.6 1.3 3.6h-2.6z"></path></g>
<g id="vaadin:form"><path d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z"></path><path d="M0 1h4v4h-4v-4z"></path><path d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z"></path><path d="M0 11h4v4h-4v-4z"></path></g>
<g id="vaadin:forward"><path d="M0 1v14l8-7z"></path><path d="M8 1v14l8-7z"></path></g>
<g id="vaadin:frown-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path></g>
<g id="vaadin:funcion"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:function"><path d="M10 0c0 0-2.1 0-2.7 3l-0.4 2h-1.9l-0.5 1h2.2l-1.4 7c-0.4 2-1.9 2-1.9 2h-1l-0.4 1h3c0 0 2.1 0 2.7-3l1.4-7h2.4l0.5-1h-2.7l0.4-2c0.4-2 1.8-2 1.8-2h1l0.5-1h-3z"></path></g>
<g id="vaadin:funnel"><path d="M6 11h4v4h-4v-4z"></path><path d="M13.6 5l2.4-4h-16l2.4 4h11.2z"></path><path d="M3 6l2.4 4h5.2l2.4-4h-10z"></path></g>
<g id="vaadin:gamepad"><path d="M12.16 2c-1.215 0.603-2.641 0.968-4.149 1-1.53-0.032-2.956-0.397-4.229-1.026-2.611 0.026-3.781 1.196-3.781 3.866v6c0.017 1.197 0.991 2.16 2.19 2.16 0 0 0 0 0 0h0.23c0 0 0.001 0 0.002 0 0.963 0 1.78-0.621 2.074-1.485 0.305-0.915 1.145-2.515 2.085-2.515h2.84c0.94 0 1.78 1.6 2.080 2.5 0.298 0.879 1.116 1.5 2.078 1.5 0.001 0 0.001 0 0.002 0h0.23c1.21 0 2.19-0.98 2.19-2.19v-6c0-2.64-1.17-3.81-3.84-3.81zM5 7h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zM10.060 8.11c-0.585 0-1.060-0.475-1.060-1.060s0.475-1.060 1.060-1.060c0.585 0 1.060 0.475 1.060 1.060s-0.475 1.060-1.060 1.060zM13 8c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:gavel"><path d="M6.4 4.1v0c-0.4-0.4-0.4-0.9-0.1-1.2l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.5c-0.3 0.3-0.9 0.3-1.2 0z"></path><path d="M12 9.7v0c-0.4-0.4-0.4-0.9-0.1-1.3l2.6-2.6c0.3-0.3 0.8-0.3 1.2 0l0.1 0.1c0.3 0.3 0.3 0.8 0 1.2l-2.6 2.6c-0.4 0.3-0.9 0.3-1.2 0z"></path><path d="M10 7.7l-1.7-1.7c-0.4-0.4-0.4-1 0-1.4l2.3-2.3c0.4-0.4 1-0.4 1.4 0l1.7 1.7c0.4 0.4 0.4 1 0 1.4l-2.3 2.3c-0.4 0.4-1 0.4-1.4 0z"></path><path d="M4 14.2c0.6-0.6 4-5.6 4.5-5.3 0.4 0.2 1-0.5 1-0.5l-1.9-1.9c0 0-0.7 0.6-0.5 1 0.3 0.5-4.7 3.9-5.3 4.5 0 0-2.8 2.2-1.4 3.6s3.6-1.4 3.6-1.4z"></path></g>
<g id="vaadin:gift"><path d="M10.1 5c2-0.3 3.9-1.1 2.2-3.6-0.7-1-1.4-1.4-2-1.4-1 0-1.7 1.1-2.3 2.2-0.6-1.1-1.3-2.2-2.3-2.2-0.6 0-1.3 0.4-2 1.4-1.8 2.5 0.2 3.3 2.2 3.6h-5.9v3h16v-3h-5.9zM10.3 1c0.1 0 0.5 0.1 1.2 1 0.5 0.7 0.6 1.1 0.5 1.3-0.2 0.3-1.3 0.7-3.3 0.8 0-0.2-0.1-0.4-0.2-0.6 0.6-1.4 1.3-2.5 1.8-2.5zM4 3.3c-0.1-0.2 0-0.6 0.5-1.3 0.7-0.9 1.1-1 1.2-1 0.5 0 1.2 1.1 1.8 2.5-0.1 0.2-0.2 0.4-0.2 0.6-2-0.1-3.1-0.5-3.3-0.8zM7 7v-2h2v2h-2z"></path><path d="M9 15h-2v-6h-6v7h14v-7h-6z"></path></g>
<g id="vaadin:glass"><path d="M11 15h-2v-8l6-7h-15l6 7v8h-2c-2 0-2 1-2 1h11c0 0 0-1-2-1zM12.9 1l-1.8 2h-7.2l-1.7-2h10.7zM7 15v-8h1v8h-1z"></path></g>
<g id="vaadin:glasses"><path d="M15.5 7h-0.5c-0.1 0-0.1 0-0.2 0-0.4-1.2-1.5-2-2.8-2s-2.4 0.9-2.8 2.1c-0.3-0.4-0.7-0.6-1.2-0.6s-0.9 0.2-1.2 0.6c-0.4-1.2-1.5-2.1-2.8-2.1s-2.4 0.9-2.8 2c-0.1 0-0.1 0-0.2 0h-0.5c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5h0.5c0 1.7 1.3 3 3 3 1.5 0 2.7-1.1 3-2.5 0 0 0 0 0 0 0.3 0 0.5-0.2 0.5-0.5s0.2-0.5 0.5-0.5 0.5 0.2 0.5 0.5c0 0.3 0.2 0.5 0.5 0.5 0 0 0 0 0 0 0.2 1.4 1.5 2.5 3 2.5 1.7 0 3-1.3 3-3h0.5c0.3 0 0.5-0.2 0.5-0.5s-0.2-0.5-0.5-0.5zM4 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zM12 10c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"></path></g>
<g id="vaadin:globe-wire"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM14.8 9.5c0 0.5-0.7 0.66-2 1 0.124-0.589 0.206-1.277 0.229-1.98l2.001-0.020c0 0.36-0.080 0.5-0.16 1v0zM1.2 9.5v0c-0.1-0.5-0.15-0.64-0.2-1h2c0.024 0.723 0.106 1.411 0.244 2.079-1.344-0.419-2.044-0.579-2.044-1.079zM1.2 6.5c0-0.5 0.7-0.66 2-1-0.115 0.594-0.187 1.284-0.2 1.989l-2 0.011c0-0.36 0.080-0.5 0.16-1v0zM8.5 5c1.13 0.013 2.226 0.107 3.298 0.277 0.047 0.643 0.165 1.41 0.201 2.199l-3.499 0.025v-2.5zM8.5 4v-2.94c1.17 0.27 2.2 1.47 2.84 3.15-0.836-0.116-1.819-0.192-2.817-0.21zM7.5 1.060v2.94c-1.017 0.015-2.001 0.087-2.968 0.214 0.768-1.684 1.798-2.884 2.968-3.154zM7.5 5v2.5h-3.5c0.031-0.806 0.142-1.571 0.326-2.307 0.932-0.080 2.035-0.177 3.158-0.193zM4 8.5h3.5v2.5c-1.13-0.013-2.226-0.107-3.298-0.277-0.047-0.643-0.165-1.41-0.201-2.199zM7.5 12v2.94c-1.17-0.27-2.2-1.47-2.84-3.15 0.836 0.116 1.819 0.192 2.817 0.21zM8.5 14.94v-2.94c1.017-0.015 2.001-0.087 2.968-0.214-0.768 1.684-1.798 2.884-2.968 3.154zM8.5 11v-2.5h3.5c-0.031 0.806-0.142 1.571-0.326 2.307-0.932 0.080-2.035 0.177-3.158 0.193zM15 7.5h-2c-0.024-0.723-0.106-1.411-0.244-2.079 1.354 0.399 2.014 0.559 2.014 1.079v0c0.13 0.5 0.18 0.64 0.23 1zM14.3 4.91c-0.506-0.204-1.106-0.38-1.726-0.5-0.361-1.019-0.809-1.898-1.389-2.672 1.355 0.726 2.413 1.811 3.067 3.131zM4.84 1.76c-0.568 0.752-1.019 1.631-1.305 2.581-0.699 0.189-1.299 0.365-1.874 0.593 0.751-1.39 1.823-2.475 3.139-3.156zM1.73 11.090c0.506 0.204 1.106 0.38 1.726 0.5 0.361 1.019 0.809 1.898 1.389 2.672-1.367-0.722-2.436-1.807-3.097-3.131zM11.17 14.24c0.564-0.753 1.012-1.631 1.295-2.581 0.699-0.189 1.299-0.365 1.874-0.593-0.751 1.39-1.823 2.475-3.139 3.156z"></path></g>
<g id="vaadin:globe"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13.2 5.3c0.4 0 0.7 0.3 1.1 0.3-0.3 0.4-1.6 0.4-2-0.1 0.3-0.1 0.5-0.2 0.9-0.2zM1 8c0-0.4 0-0.8 0.1-1.3 0.1 0 0.2 0.1 0.3 0.1 0 0 0.1 0.1 0.1 0.2 0 0.3 0.3 0.5 0.5 0.5 0.8 0.1 1.1 0.8 1.8 1 0.2 0.1 0.1 0.3 0 0.5-0.6 0.8-0.1 1.4 0.4 1.9 0.5 0.4 0.5 0.8 0.6 1.4 0 0.7 0.1 1.5 0.4 2.2-2.5-1.2-4.2-3.6-4.2-6.5zM8 15c-0.7 0-1.5-0.1-2.1-0.3-0.1-0.2-0.1-0.4 0-0.6 0.4-0.8 0.8-1.5 1.3-2.2 0.2-0.2 0.4-0.4 0.4-0.7 0-0.2 0.1-0.5 0.2-0.7 0.3-0.5 0.2-0.8-0.2-0.9-0.8-0.2-1.2-0.9-1.8-1.2s-1.2-0.5-1.7-0.2c-0.2 0.1-0.5 0.2-0.5-0.1 0-0.4-0.5-0.7-0.4-1.1-0.1 0-0.2 0-0.3 0.1s-0.2 0.2-0.4 0.1c-0.2-0.2-0.1-0.4-0.1-0.6 0.1-0.2 0.2-0.3 0.4-0.4 0.4-0.1 0.8-0.1 1 0.4 0.3-0.9 0.9-1.4 1.5-1.8 0 0 0.8-0.7 0.9-0.7s0.2 0.2 0.4 0.3c0.2 0 0.3 0 0.3-0.2 0.1-0.5-0.2-1.1-0.6-1.2 0-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.7-0.3 0.6-0.6 0-0.4-0.4-0.6-0.8-0.6-0.2 0-0.4 0-0.6 0.1-0.4 0.2-0.9 0.4-1.5 0.4 1.1-0.8 2.5-1.2 3.9-1.2 0.3 0 0.5 0 0.8 0-0.6 0.1-1.2 0.3-1.6 0.5 0.6 0.1 0.7 0.4 0.5 0.9-0.1 0.2 0 0.4 0.2 0.5s0.4 0.1 0.5-0.1c0.2-0.3 0.6-0.4 0.9-0.5 0.4-0.1 0.7-0.3 1-0.7 0-0.1 0.1-0.1 0.2-0.2 0.6 0.2 1.2 0.6 1.8 1-0.1 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.3-0.2 0.7 0.1 0.2 0 0.3-0.1 0.4-0.2 0.1-0.3 0-0.4-0.1s-0.1-0.3-0.4-0.3c-0.1 0.2-0.4 0.3-0.4 0.6 0.5 0 0.4 0.4 0.5 0.7-0.6 0.1-0.8 0.4-0.5 0.9 0.1 0.2-0.1 0.3-0.2 0.4-0.4 0.6-0.8 1-0.8 1.7s0.5 1.4 1.3 1.3c0.9-0.1 0.9-0.1 1.2 0.7 0 0.1 0.1 0.2 0.1 0.3 0.1 0.2 0.2 0.4 0.1 0.6-0.3 0.8 0.1 1.4 0.4 2 0.1 0.2 0.2 0.3 0.3 0.4-1.3 1.4-3 2.2-5 2.2z"></path></g>
<g id="vaadin:golf"><path d="M7 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M9.8 1.8c-0.2-0.5-1.7-0.1-2 0.5-0.2 0.3-0.2 1.2-1.2 1.9-0.8 0.5-1.6 0.5-1.6 0.5-0.3 0.6-0.1 1.1 0.2 1.6 0.5 0.9 0.6 1.8 0.7 2.8 0.1 1.3-0.5 2.4-2.3 3.2-0.8 0.3-1.3 0.9-1 1.9 0 0 2-0.3 3.1-1.2 1.5-1.2 1.8-2.3 1.8-2.3s0.1 0.7 0 1.9c-0.1 1-0.2 1.5-0.4 2.2s0.3 1.2 0.9 1.2 1-0.4 1-1l0.3-1.9c0.3-2.1 0-4.3-0.8-6.3 0-0.1-0.1-0.1-0.1-0.2-0.6-1.6 0.2-2.6 0.6-3 0.3-0.4 1.2-1.2 0.8-1.8z"></path><path d="M12 0v10h1v-6l3-2z"></path><path d="M16 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M1 8.4l3.7-3.7-0.7-0.3-3.8 3.6c0 0-0.4 0.7 0.1 1.7s1.6 0.3 1.6 0.3c0.4-0.2 0.2-0.4 0-0.6s-0.9-1-0.9-1z"></path></g>
<g id="vaadin:google-plus-square"><path d="M5 3.4c-0.8 0-1.3 0.8-1.2 1.8 0.1 1.1 0.9 1.9 1.7 2 0.8 0 1.3-0.8 1.2-1.9-0.1-1-0.9-1.9-1.7-1.9z"></path><path d="M5.4 9.3c-1.2 0-2.3 0.7-2.3 1.6s0.9 1.7 2.1 1.7c1.7 0 2.3-0.7 2.3-1.6 0-0.1 0-0.2 0-0.3-0.1-0.5-0.6-0.8-1.3-1.2-0.2-0.2-0.5-0.2-0.8-0.2z"></path><path d="M0 0v16h16v-16h-16zM7.9 5.3c0 0.7-0.4 1.2-0.9 1.6s-0.6 0.6-0.6 0.9c0 0.3 0.5 0.8 0.8 1 0.8 0.6 1.1 1.1 1.1 2 0 1.1-1.1 2.3-3.1 2.3-1.7 0-3.2-0.7-3.2-1.8 0-1.2 1.3-2.3 3.1-2.3 0.2 0 0.4 0 0.5 0-0.2-0.3-0.4-0.6-0.4-0.9 0-0.2 0.1-0.4 0.2-0.6-0.1 0-0.2 0-0.3 0-1.4 0-2.4-1-2.4-2.3 0-1.2 1.3-2.3 2.7-2.3 0.8 0 3.1 0 3.1 0l-0.7 0.6h-1c0.7 0.2 1.1 1 1.1 1.8zM14 5.5h-2.1v2h-0.5v-2h-2v-0.5h2v-2h0.5v2h2.1v0.5z"></path></g>
<g id="vaadin:google-plus"><path d="M16 3.9h-2.8v-2.6h-0.6v2.6h-2.7v0.8h2.7v2.6h0.6v-2.6h2.8z"></path><path d="M6.9 9c-0.4-0.2-1.1-0.9-1.1-1.3s0.1-0.7 0.8-1.2c0.7-0.5 1.2-1.2 1.2-2.1 0-1.1-0.5-2.1-1.3-2.4h1.3l0.9-0.7c0 0-3.1 0-4.2 0-1.9 0-3.6 1.4-3.6 3.1s1.3 3 3.2 3c0.1 0 0.3 0 0.4 0-0.2 0.2-0.2 0.4-0.2 0.7 0 0.5 0.3 0.8 0.6 1.2-0.2 0-0.5 0-0.7 0-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3-0.1-1.3-0.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6s0.5-2.5 1.6-2.5c1.1 0 2.1 1.2 2.3 2.6s-0.5 2.6-1.6 2.5zM4.3 14.1c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c0.4 0 0.7 0.1 1 0.2 0.9 0.6 1.5 0.9 1.7 1.6 0 0.1 0.1 0.3 0.1 0.4 0 1.2-0.8 2.2-3 2.2z"></path></g>
<g id="vaadin:grab"><path d="M12.6 4c-0.2 0-0.4 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.5-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.8 0-1.2 0.5-1.4 1-0.1 0-0.3-0.1-0.5-0.1-0.5 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.5v0.4c-0.6 0-1.1 0.2-1.4 0.5-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.5 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM10.5 3.8c0.4 0 0.5 0.4 0.5 0.6v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0 0 0-0.4 0.4-0.3 0.6 0.2 0.7 1.1 0.7 1.3 0 0 0 0 0 0v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.7-1.1-1.1-1.1-2.1 0-0.2 0-0.3 0-0.6 0-1 0-1.8 0.3-2.1 0.1-0.2 0.4-0.3 0.7-0.3v0.8l-0.3 1.2c0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0l1-1.2c0 0 0-0.1 0-0.1v-2c0-0.1 0-0.6 0.2-0.8 0.1-0.1 0.2-0.2 0.4-0.2 0.3 0 0.4 0.2 0.4 0.4v0.4c0 0.2 0.2 0.5 0.5 0.5s0.5-0.3 0.5-0.5v-1.3c0-0.1 0-0.5 0.5-0.5 0.3 0 0.5 0.2 0.5 0.5v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.5c0-0.3 0.2-0.5 0.5-0.5z"></path></g>
<g id="vaadin:grid-bevel"><path d="M14 2v-1h-13v13h1v1h13v-13h-1zM5 13h-3v-3h3v3zM5 9h-3v-3h3v3zM5 5h-3v-3h3v3zM9 13h-3v-3h3v3zM9 9h-3v-3h3v3zM9 5h-3v-3h3v3zM13 13h-3v-3h3v3zM13 9h-3v-3h3v3zM13 5h-3v-3h3v3z"></path></g>
<g id="vaadin:grid-big-o"><path d="M0 7h7v-7h-7v7zM1 1h5v5h-5v-5z"></path><path d="M9 0v7h7v-7h-7zM15 6h-5v-5h5v5z"></path><path d="M0 16h7v-7h-7v7zM1 10h5v5h-5v-5z"></path><path d="M9 16h7v-7h-7v7zM10 10h5v5h-5v-5z"></path></g>
<g id="vaadin:grid-big"><path d="M0 0h7v7h-7v-7z"></path><path d="M9 0h7v7h-7v-7z"></path><path d="M0 9h7v7h-7v-7z"></path><path d="M9 9h7v7h-7v-7z"></path></g>
<g id="vaadin:grid-h"><path d="M0 0v16h16v-16h-16zM5 15h-4v-14h4v14zM10 15h-4v-14h4v14zM15 15h-4v-14h4v14z"></path></g>
<g id="vaadin:grid-small-o"><path d="M0 4h4v-4h-4v4zM1 1h2v2h-2v-2z"></path><path d="M0 10h4v-4h-4v4zM1 7h2v2h-2v-2z"></path><path d="M0 16h4v-4h-4v4zM1 13h2v2h-2v-2z"></path><path d="M6 4h4v-4h-4v4zM7 1h2v2h-2v-2z"></path><path d="M6 10h4v-4h-4v4zM7 7h2v2h-2v-2z"></path><path d="M6 16h4v-4h-4v4zM7 13h2v2h-2v-2z"></path><path d="M12 0v4h4v-4h-4zM15 3h-2v-2h2v2z"></path><path d="M12 10h4v-4h-4v4zM13 7h2v2h-2v-2z"></path><path d="M12 16h4v-4h-4v4zM13 13h2v2h-2v-2z"></path></g>
<g id="vaadin:grid-small"><path d="M0 0h4v4h-4v-4z"></path><path d="M0 6h4v4h-4v-4z"></path><path d="M0 12h4v4h-4v-4z"></path><path d="M6 0h4v4h-4v-4z"></path><path d="M6 6h4v4h-4v-4z"></path><path d="M6 12h4v4h-4v-4z"></path><path d="M12 0h4v4h-4v-4z"></path><path d="M12 6h4v4h-4v-4z"></path><path d="M12 12h4v4h-4v-4z"></path></g>
<g id="vaadin:grid-v"><path d="M16 0h-16v16h16v-16zM1 5v-4h14v4h-14zM1 10v-4h14v4h-14zM1 15v-4h14v4h-14z"></path></g>
<g id="vaadin:grid"><path d="M0 0v16h16v-16h-16zM5 15h-4v-4h4v4zM5 10h-4v-4h4v4zM5 5h-4v-4h4v4zM10 15h-4v-4h4v4zM10 10h-4v-4h4v4zM10 5h-4v-4h4v4zM15 15h-4v-4h4v4zM15 10h-4v-4h4v4zM15 5h-4v-4h4v4z"></path></g>
<g id="vaadin:group"><path d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path><path d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path></g>
<g id="vaadin:hammer"><path d="M6 2l7 7 3-3-4.48-4.48s-2.97 1.030-4.52-0.52z"></path><path d="M8.8 5.79l-8.53 8.52c-0.165 0.178-0.267 0.417-0.267 0.68s0.101 0.502 0.267 0.681c0.181 0.183 0.433 0.297 0.711 0.297 0.253 0 0.484-0.094 0.66-0.248l8.569-8.519z"></path></g>
<g id="vaadin:hand"><path d="M13.5 2.4c-0.4-0.4-1-0.5-1.5-0.3 0-0.3-0.1-0.6-0.4-0.9-0.2-0.2-0.6-0.4-1.1-0.4-0.3 0-0.5 0.1-0.7 0.1 0-0.2-0.1-0.3-0.2-0.5-0.5-0.6-1.5-0.6-2 0-0.2 0.2-0.4 0.4-0.4 0.6-0.2 0-0.4-0.1-0.6-0.1-0.5 0-0.8 0.2-1.1 0.5-0.5 0.5-0.5 1.3-0.5 1.3v3.8c-0.3-0.3-0.8-0.8-1.5-0.8-0.2 0-0.5 0.1-0.7 0.2-0.4 0.2-0.6 0.5-0.7 0.9-0.3 1 0.6 2.4 0.6 2.5 0.1 0.1 1.2 2.7 2.2 3.8 1 1.2 2.1 1.9 4.9 1.9 2.9 0 4.2-1.6 4.2-5.1v-5.5c0-0.1 0.1-1.3-0.5-2zM8 2c0-0.3-0.1-1 0.5-1 0.5 0 0.5 0.5 0.5 1v4c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-3.8c0 0 0-0.4 0.5-0.4 0.6 0 0.5 0.9 0.5 0.9v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5v-2.4c0-0.1 0-0.6 0.5-0.6s0.5 1 0.5 1v5.9c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.5-4.1-1.6-0.9-1-2.1-3.6-2.1-3.7-0.3-0.3-0.7-1.2-0.6-1.6 0-0.1 0.1-0.2 0.2-0.3 0.1 0 0.2-0.1 0.2-0.1 0.4 0 0.8 0.5 0.9 0.7l0.6 0.9c0.1 0.2 0.4 0.3 0.6 0.2 0.4 0 0.5-0.2 0.5-0.4v-5.2c0-0.4 0-1 0.5-1 0.4 0 0.5 0.3 0.5 0.8v3.3c0 0.3 0.2 0.5 0.5 0.5s0.5-0.2 0.5-0.5z"></path></g>
<g id="vaadin:handle-corner"><path d="M6.7 16l9.3-9.3v-1.4l-10.7 10.7z"></path><path d="M9.7 16l6.3-6.3v-1.4l-7.7 7.7z"></path><path d="M12.7 16l3.3-3.3v-1.4l-4.7 4.7z"></path><path d="M15.7 16l0.3-0.3v-1.4l-1.7 1.7z"></path></g>
<g id="vaadin:hands-up"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M6 16h1.5v-5h1v5h1.5v-9c-0-0.016-0.001-0.034-0.001-0.052 0-0.521 0.194-0.997 0.513-1.36l3.278-3.318c0.216-0.129 0.358-0.362 0.358-0.628 0-0.403-0.327-0.73-0.73-0.73-0.266 0-0.499 0.142-0.626 0.355l-2.362 2.383c-0.212 0.216-0.508 0.35-0.835 0.35-0.002 0-0.004 0-0.006-0h-3.18c-0.002 0-0.004 0-0.005 0-0.327 0-0.622-0.134-0.834-0.35l-2.32-2.39c-0.129-0.216-0.362-0.358-0.628-0.358-0.403 0-0.73 0.327-0.73 0.73 0 0.266 0.142 0.499 0.355 0.626l3.243 3.332c0.317 0.361 0.511 0.836 0.511 1.358 0 0.018-0 0.037-0.001 0.055l0 8.997z"></path></g>
<g id="vaadin:handshake"><path d="M13 3c-0.538 0.515-1.185 0.92-1.902 1.178-0.748 0.132-2.818-0.828-3.838 0.152-0.17 0.17-0.38 0.34-0.6 0.51-0.48-0.21-1.22-0.53-1.76-0.84s-1.9-1-1.9-1l-3 3.5s0.74 1 1.2 1.66c0.3 0.44 0.67 1.11 0.91 1.56l-0.34 0.4c-0.058 0.115-0.093 0.25-0.093 0.393 0 0.235 0.092 0.449 0.243 0.607 0.138 0.103 0.311 0.165 0.5 0.165s0.362-0.062 0.502-0.167c-0.094 0.109-0.149 0.249-0.149 0.402 0 0.193 0.088 0.365 0.226 0.479 0.144 0.085 0.317 0.135 0.501 0.135s0.357-0.050 0.505-0.137c-0.112 0.139-0.177 0.313-0.177 0.503s0.065 0.364 0.174 0.502c0.099 0.035 0.214 0.056 0.334 0.056 0.207 0 0.399-0.063 0.558-0.17-0.043 0.095-0.065 0.203-0.065 0.317 0 0.234 0.096 0.445 0.252 0.595 0.13 0.059 0.283 0.093 0.443 0.093 0.226 0 0.437-0.068 0.611-0.185l0.516-0.467c0.472 0.47 1.123 0.761 1.842 0.761 0.020 0 0.041-0 0.061-0.001 0.494-0.042 0.908-0.356 1.094-0.791 0.146 0.056 0.312 0.094 0.488 0.094 0.236 0 0.455-0.068 0.64-0.185 0.585-0.387 0.445-0.687 0.445-0.687 0.125 0.055 0.27 0.087 0.423 0.087 0.321 0 0.61-0.142 0.806-0.366 0.176-0.181 0.283-0.427 0.283-0.697 0-0.19-0.053-0.367-0.145-0.518 0.008 0.005 0.015 0.005 0.021 0.005 0.421 0 0.787-0.232 0.978-0.574 0.068-0.171 0.105-0.363 0.105-0.563 0-0.342-0.11-0.659-0.296-0.917l0.003 0.005c0.82-0.16 0.79-0.57 1.19-1.17 0.384-0.494 0.852-0.902 1.387-1.208zM12.95 10.060c-0.44 0.44-0.78 0.25-1.53-0.32s-2.24-1.64-2.24-1.64c0.061 0.305 0.202 0.57 0.401 0.781 0.319 0.359 1.269 1.179 1.719 1.599 0.28 0.26 1 0.78 0.58 1.18s-0.75 0-1.44-0.56-2.23-1.94-2.23-1.94c-0.001 0.018-0.002 0.038-0.002 0.059 0 0.258 0.104 0.491 0.272 0.661 0.17 0.2 1.12 1.12 1.52 1.54s0.75 0.67 0.41 1-1.030-0.19-1.41-0.58c-0.59-0.57-1.76-1.63-1.76-1.63-0.001 0.016-0.001 0.034-0.001 0.053 0 0.284 0.098 0.544 0.263 0.75 0.288 0.378 0.848 0.868 1.188 1.248s0.54 0.7 0 1-1.34-0.44-1.69-0.8c0-0.001 0-0.001 0-0.002 0-0.103-0.038-0.197-0.1-0.269-0.159-0.147-0.374-0.238-0.609-0.238-0.104 0-0.204 0.018-0.297 0.050 0.128-0.114 0.204-0.274 0.204-0.452s-0.076-0.338-0.198-0.45c-0.126-0.095-0.284-0.152-0.455-0.152s-0.33 0.057-0.457 0.153c0.117-0.113 0.189-0.268 0.189-0.441 0-0.213-0.109-0.4-0.274-0.509-0.153-0.097-0.336-0.153-0.532-0.153-0.244 0-0.468 0.088-0.642 0.233 0.095-0.114 0.151-0.26 0.151-0.42 0-0.195-0.085-0.37-0.219-0.491-0.178-0.165-0.417-0.266-0.679-0.266-0.185 0-0.358 0.050-0.507 0.138l-0.665-1.123c-0.46-0.73-1-1.49-1-1.49l2.28-2.77s0.81 0.5 1.48 0.88c0.33 0.19 0.9 0.44 1.33 0.64-0.68 0.51-1.25 1-1.080 1.34 0.297 0.214 0.668 0.343 1.069 0.343 0.376 0 0.726-0.113 1.018-0.307 0.373-0.251 0.84-0.403 1.343-0.403 0.347 0 0.677 0.072 0.976 0.203 0.554 0.374 1.574 1.294 2.504 1.874v0c1.17 0.85 1.4 1.4 1.12 1.68z"></path></g>
<g id="vaadin:harddrive-o"><path d="M2 12h1v1h-1v-1z"></path><path d="M4 12h3v1h-3v-1z"></path><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM3.7 2h8.6l2.7 8h-13.9l2.6-8zM1 14v-3h14v3h-14z"></path></g>
<g id="vaadin:harddrive"><path d="M13 1h-10l-2.7 8h15.4z"></path><path d="M0 10v5h16v-5h-16zM3 13h-1v-1h1v1zM7 13h-3v-1h3v1z"></path></g>
<g id="vaadin:hash"><path d="M15 6v-2h-2.6l0.6-2.8-2-0.4-0.7 3.2h-3l0.7-2.8-2-0.4-0.7 3.2h-3.3v2h2.9l-0.9 4h-3v2h2.6l-0.6 2.8 2 0.4 0.7-3.2h3l-0.7 2.8 2 0.4 0.7-3.2h3.3v-2h-2.9l0.9-4h3zM9 10h-3l1-4h3l-1 4z"></path></g>
<g id="vaadin:header"><path d="M11 0v7h-6v-7h-3v16h3v-7h6v7h3v-16z"></path></g>
<g id="vaadin:headphones"><path d="M14 8.3v-2.3c0-3.3-2.7-6-6-6s-6 2.7-6 6v2.3c-1.2 0.5-2 1.7-2 3.1v1.2c0 1.8 1.3 3.2 3 3.4h2v-8h-1v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-1v8h2c1.7-0.2 3-1.7 3-3.4v-1.2c0-1.4-0.8-2.6-2-3.1zM4 15h-1v-6h1v6zM13 15h-1v-6h1v6z"></path></g>
<g id="vaadin:headset"><path d="M14.82 8c-0.309-0.851-0.969-1.511-1.799-1.813l-0.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173 0.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-0.552-0.448-1-1-1h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73h-1.18z"></path></g>
<g id="vaadin:health-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M9 5h5v1h-5v-1z"></path><path d="M9 7h5v1h-5v-1z"></path><path d="M9 9h2v1h-2v-1z"></path><path d="M6.5 5c0 0 0 0 0 0-0.6 0-1.1 0.6-1.5 1-0.4-0.4-0.9-1-1.5-1 0 0 0 0 0 0-1.5 0-2.1 1.9-1 2.9l2.5 2.1 2.5-2.1c1.1-1 0.5-2.9-1-2.9z"></path></g>
<g id="vaadin:heart-o"><path d="M11.7 2c-0.9 0-2.7 0.5-3.7 2.1-1-1.6-2.8-2.1-3.8-2.1-2.3 0-4.2 1.9-4.2 4.2 0 4 7.4 8.5 7.7 8.7l0.3 0.2 0.3-0.2c0.3-0.2 7.7-4.8 7.7-8.7 0-2.3-1.9-4.2-4.3-4.2zM8 13.9c-2.2-1.4-7-5-7-7.7 0-1.8 1.5-3.2 3.2-3.2 0.1 0 2.5 0.1 3.3 2.4l0.5 1.4 0.5-1.4c0.8-2.3 3.2-2.4 3.3-2.4 1.7 0 3.2 1.4 3.2 3.2 0 2.7-4.8 6.3-7 7.7z"></path></g>
<g id="vaadin:heart"><path d="M12 2c0 0-3 0-4 3-1-3-4-3-4-3-2.2 0-4 1.8-4 4 0 4.1 8 9 8 9s8-5 8-9c0-2.2-1.8-4-4-4z"></path></g>
<g id="vaadin:home-o"><path d="M16 6.6l-8-5.2-2 1.3v-1.7h-2v3l-4 2.6 1.9 2.7 0.1-0.1v5.8h5v-4h2v4h5v-5.8l0.1 0.1 1.9-2.7zM1.4 6.9l6.6-4.3 6.6 4.3-0.7 1-5.9-3.9-5.9 3.9-0.7-1zM13 14h-3v-4h-4v4h-3v-5.4l5-3.3 5 3.3v5.4z"></path></g>
<g id="vaadin:home"><path d="M8 1.4l-2 1.3v-1.7h-2v3l-4 2.6 0.6 0.8 7.4-4.8 7.4 4.8 0.6-0.8z"></path><path d="M8 4l-6 4v7h5v-3h2v3h5v-7z"></path></g>
<g id="vaadin:hospital"><path d="M15 4v-4h-7v4h-8v12h6v-3h4v3h6v-12h-1zM4 11h-2v-2h2v2zM4 8h-2v-2h2v2zM7 11h-2v-2h2v2zM7 8h-2v-2h2v2zM10 3v-1h1v-1h1v1h1v1h-1v1h-1v-1h-1zM11 11h-2v-2h2v2zM11 8h-2v-2h2v2zM14 11h-2v-2h2v2zM14 8h-2v-2h2v2z"></path></g>
<g id="vaadin:hourglass-empty"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-end"><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1s-1.62-3.5-3-3.5-3 3.5-3 3.5h-1v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass-start"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.573-0.385 0.984-0.939 1.17-1.589l-5.995-0.020c0.191 0.67 0.603 1.225 1.15 1.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-8v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:hourglass"><path d="M6.16 4.6c1.114 0.734 1.84 1.979 1.84 3.394 0 0.002 0 0.004 0 0.006v-0c0-0.002 0-0.004 0-0.006 0-1.415 0.726-2.66 1.825-3.384 0.23-0.199 0.426-0.395 0.609-0.602l-4.874-0.007c0.19 0.214 0.386 0.41 0.593 0.594z"></path><path d="M11.18 6.060c1.107-0.808 1.819-2.101 1.82-3.56v-0.5h1v-2h-12v2h1v0.5c0.001 1.459 0.713 2.752 1.808 3.551 0.672 0.43 1.121 1.13 1.192 1.939-0.093 0.848-0.551 1.564-1.209 2.003-1.081 0.814-1.772 2.078-1.79 3.503l-0 0.503h-1v2h12v-2h-1v-0.5c-0.018-1.429-0.709-2.692-1.769-3.492-0.68-0.454-1.138-1.169-1.23-1.996 0.071-0.831 0.52-1.532 1.169-1.946zM9 8c0.072 1.142 0.655 2.136 1.519 2.763 0.877 0.623 1.445 1.61 1.481 2.732l0 0.505h-1.77c-0.7-0.87-1.71-2-2.23-2s-1.53 1.13-2.23 2h-1.77v-0.5c0.036-1.127 0.604-2.114 1.459-2.723 0.886-0.642 1.468-1.635 1.54-2.766-0.063-1.124-0.641-2.091-1.498-2.683-0.914-0.633-1.499-1.662-1.502-2.827v-0.5h8v0.5c-0.003 1.166-0.587 2.195-1.479 2.813-0.88 0.607-1.458 1.574-1.521 2.678z"></path></g>
<g id="vaadin:inbox"><path d="M10 6v-6h-4v6h-2l4 5 4-5z"></path><path d="M13 1h-2v1h1.3l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h1.3v-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:indent"><path d="M0 0h16v3h-16v-3z"></path><path d="M6 4h10v3h-10v-3z"></path><path d="M6 8h10v3h-10v-3z"></path><path d="M0 12h16v3h-16v-3z"></path><path d="M0 4.5v6l4-3z"></path></g>
<g id="vaadin:info-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6h2v7h-2v-7z"></path><path d="M7 3h2v2h-2v-2z"></path></g>
<g id="vaadin:info-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM9 13h-2v-7h2v7zM9 5h-2v-2h2v2z"></path></g>
<g id="vaadin:info"><path d="M6 5h4v11h-4v-11z"></path><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:input"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M2 6h1v4h-1v-4z"></path></g>
<g id="vaadin:insert"><path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path><path d="M16 1.4l-1.4-1.4-6.8 6.8-1.8-1.8v5h5l-1.8-1.8z"></path></g>
<g id="vaadin:institution"><path d="M8 0l-8 3v2h16v-2z"></path><path d="M0 14h16v2h-16v-2z"></path><path d="M16 7v-1h-16v1h1v5h-1v1h16v-1h-1v-5h1zM4 12h-1v-5h1v5zM7 12h-1v-5h1v5zM10 12h-1v-5h1v5zM13 12h-1v-5h1v5z"></path></g>
<g id="vaadin:invoice"><path d="M4.4 10.2c-0.6 0.1-1.4-0.3-1.7-0.4l-0.5 0.9c0 0 0.9 0.4 1.7 0.5v0.8h1v-0.9c0.9-0.3 1.4-1.1 1.5-1.8 0-0.8-0.6-1.4-1.9-1.9-0.4-0.2-1.1-0.5-1.1-0.9 0-0.5 0.4-0.8 1-0.8 0.7 0 1.4 0.3 1.4 0.3l0.4-0.9c0 0-0.5-0.2-1.2-0.4v-0.7h-1v0.7c-0.9 0.2-1.5 0.8-1.6 1.7 0 1.2 1.3 1.7 1.8 1.9 0.6 0.2 1.3 0.6 1.3 0.9 0 0.4-0.4 0.9-1.1 1z"></path><path d="M0 2v12h16v-12h-16zM15 13h-14v-10h14v10z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path></g>
<g id="vaadin:italic"><path d="M8 0h3l-3 16h-3z"></path></g>
<g id="vaadin:key-o"><path d="M13 0l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.3 0-0.6-0.1-0.9l1.1-1.1v-2h2v-2h2l1-1v-4h-3zM12 6h-1.7l1.7-1.4v1.4zM15 3.6l-0.4 0.4h-1.9l2.3-2v1.6zM7.3 7.6l0.7 0.4 2-1.7v2.3l-0.8 0.8-0.3 0.4 0.1 0.5c0 0.2 0.1 0.5 0.1 0.7 0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c0.3 0 0.5 0 0.8 0.1l0.5 0.1 0.4-0.3 6.6-5.9h1.6l-7.7 6.6z"></path><path d="M6 11.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path></g>
<g id="vaadin:key"><path d="M8.1 7c-0.2-0.1-0.4-0.2-0.6-0.3l7.5-6.7h-2l-7 6.1c-0.3-0.1-0.6-0.1-1-0.1-2.8 0-5 2.2-5 5s2.3 5 5 5 5-2.2 5-5c0-0.6-0.1-1.2-0.3-1.7l1.3-1.3v-2h2v-2h2l1-1v-3l-7.9 7zM4 13.2c-0.7 0-1.2-0.6-1.2-1.2s0.6-1.2 1.2-1.2 1.2 0.6 1.2 1.2-0.5 1.2-1.2 1.2z"></path></g>
<g id="vaadin:keyboard-o"><path d="M15 5v7h-14v-7h14zM16 4h-16v9h16v-9z"></path><path d="M4 10h8v1h-8v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M11 8h1v1h-1v-1z"></path><path d="M9 8h1v1h-1v-1z"></path><path d="M7 8h1v1h-1v-1z"></path><path d="M5 8h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M12 6v1h1v2h1v-3z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path></g>
<g id="vaadin:keyboard"><path d="M0 4v9h16v-9h-16zM10 6h1v1h-1v-1zM8 6h1v1h-1v-1zM10 8v1h-1v-1h1zM6 6h1v1h-1v-1zM8 8v1h-1v-1h1zM4 6h1v1h-1v-1zM6 8v1h-1v-1h1zM2 6h1v1h-1v-1zM3 11h-1v-1h1v1zM3 8h1v1h-1v-1zM12 11h-8v-1h8v1zM12 9h-1v-1h1v1zM14 11h-1v-1h1v1zM14 9h-1v-2h-1v-1h2v3z"></path></g>
<g id="vaadin:laptop"><path d="M14 11v-9h-12v9h-2v2h16v-2h-2zM10 12h-4v-1h4v1zM13 10h-10v-7h10v7z"></path></g>
<g id="vaadin:layout"><path d="M0 0v16h16v-16h-16zM1 3h4v12h-4v-12zM15 15h-9v-12h9v12z"></path></g>
<g id="vaadin:level-down-bold"><path d="M9 16l4-7h-3v-9h-7l2 3h2v6h-3z"></path></g>
<g id="vaadin:level-down"><path d="M5 1h6v11h2l-3 3-3-3h2v-9h-6z"></path></g>
<g id="vaadin:level-left-bold"><path d="M0 7l7-4v3h9v7l-3-2v-2h-6v3z"></path></g>
<g id="vaadin:level-left"><path d="M15 12v-6h-11v-2l-3 3 3 3v-2h9v6z"></path></g>
<g id="vaadin:level-right-bold"><path d="M16 7l-7-4v3h-9v7l3-2v-2h6v3z"></path></g>
<g id="vaadin:level-right"><path d="M1 12v-6h11v-2l3 3-3 3v-2h-9v6z"></path></g>
<g id="vaadin:level-up-bold"><path d="M9 0l4 7h-3v9h-7l2-3h2v-6h-3z"></path></g>
<g id="vaadin:level-up"><path d="M11 15h-6v-11h-2l3-3 3 3h-2v9h6z"></path></g>
<g id="vaadin:lifebuoy"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-1.8 4-4 4s-4-1.8-4-4zM12.6 9.8c0.3-0.5 0.4-1.2 0.4-1.8s-0.1-1.3-0.4-1.8l1.5-1.5c0.6 1 0.9 2.1 0.9 3.3s-0.3 2.3-0.8 3.3l-1.6-1.5zM11.3 1.8l-1.5 1.6c-0.5-0.3-1.2-0.4-1.8-0.4s-1.3 0.1-1.8 0.4l-1.5-1.6c1-0.5 2.1-0.8 3.3-0.8s2.3 0.3 3.3 0.8zM1.8 4.7l1.5 1.5c-0.2 0.5-0.3 1.2-0.3 1.8s0.1 1.3 0.4 1.8l-1.5 1.5c-0.6-1-0.9-2.1-0.9-3.3s0.3-2.3 0.8-3.3zM4.7 14.2l1.5-1.5c0.5 0.2 1.2 0.3 1.8 0.3s1.3-0.1 1.8-0.4l1.5 1.5c-1 0.6-2.1 0.9-3.3 0.9s-2.3-0.3-3.3-0.8z"></path></g>
<g id="vaadin:lightbulb"><path d="M8 0c-2.761 0-5 2.239-5 5 0.013 1.672 0.878 3.138 2.182 3.989l0.818 2.011c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.41c0.342 0.55 0.915 0.929 1.581 0.999 0.684-0.071 1.258-0.449 1.594-0.99l0.415-0.009c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5l0.8-2c1.322-0.862 2.187-2.328 2.2-3.998 0-2.763-2.239-5.002-5-5.002zM10.25 8.21l-0.25 0.17-0.11 0.29-0.89 2.14c-0.042 0.111-0.147 0.189-0.27 0.19h-1.51c-0.103-0.020-0.186-0.093-0.219-0.188l-0.871-2.142-0.13-0.29-0.25-0.18c-1.045-0.7-1.729-1.868-1.75-3.197-0-2.212 1.791-4.003 4-4.003s4 1.791 4 4c-0.017 1.336-0.702 2.509-1.736 3.201z"></path><path d="M10.29 3c-0.574-0.612-1.387-0.995-2.289-1l-0.001 1c0.585 0.002 1.115 0.238 1.5 0.62 0.278 0.386 0.459 0.858 0.499 1.37l1.001 0.009c-0.045-0.756-0.305-1.443-0.718-2.011z"></path></g>
<g id="vaadin:line-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M16 0.070l-5.68 4.97-5.47-1.7-4.85 3.76v1.9l5.15-4 5.53 1.72 5.32-4.66v-1.99z"></path></g>
<g id="vaadin:line-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M9 8l-3-3-4 4v2l4-4 3 3 7-7v-2z"></path></g>
<g id="vaadin:line-h"><path d="M0 7h16v1h-16v-1z"></path></g>
<g id="vaadin:line-v"><path d="M8 0h1v16h-1v-16z"></path></g>
<g id="vaadin:lines-list"><path d="M0 1h3v2h-3v-2z"></path><path d="M0 5h3v2h-3v-2z"></path><path d="M0 9h3v2h-3v-2z"></path><path d="M0 13h3v2h-3v-2z"></path><path d="M4 1h12v2h-12v-2z"></path><path d="M4 5h12v2h-12v-2z"></path><path d="M4 9h12v2h-12v-2z"></path><path d="M4 13h12v2h-12v-2z"></path></g>
<g id="vaadin:lines"><path d="M0 1h16v2h-16v-2z"></path><path d="M0 5h16v2h-16v-2z"></path><path d="M0 9h16v2h-16v-2z"></path><path d="M0 13h16v2h-16v-2z"></path></g>
<g id="vaadin:link"><path d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"></path><path d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"></path></g>
<g id="vaadin:list-ol"><path d="M4 0h12v4h-12v-4z"></path><path d="M4 6h12v4h-12v-4z"></path><path d="M4 12h12v4h-12v-4z"></path><path d="M1 0l-0.9 0.5 0.2 0.7 0.7-0.3v3.1h1v-4z"></path><path d="M2.2 13.9c0.3-0.2 0.5-0.5 0.5-0.8 0-0.5-0.4-1-1.3-1-0.5 0-1 0.1-1.2 0.3h-0.1l0.2 0.8 0.1-0.1c0.1-0.1 0.4-0.2 0.7-0.2s0.4 0.1 0.4 0.3c0 0.4-0.5 0.4-0.6 0.4h-0.4v0.7h0.4c0.3 0 0.6 0.1 0.6 0.4 0 0.2-0.2 0.4-0.6 0.4s-0.7-0.2-0.8-0.2l-0.1-0.1v0.9h0.1c0.2 0.2 0.6 0.3 1.1 0.3 1 0 1.6-0.5 1.6-1.2 0-0.4-0.2-0.8-0.6-0.9z"></path><path d="M0.1 6.4l0.3 1c0 0 0.7-0.6 1.2-0.3 1.1 0.8-1.6 2.4-1.6 2.4v0.5h3v-1h-1.2c0.6-0.5 1.2-1.2 1-1.9-0.5-1.9-2.7-0.7-2.7-0.7z"></path></g>
<g id="vaadin:list-select"><path d="M1 0h12v2h-12v-2z"></path><path d="M1 8h13v2h-13v-2z"></path><path d="M1 11h11v2h-11v-2z"></path><path d="M1 14h14v2h-14v-2z"></path><path d="M0 3v4h16v-4h-16zM11 6h-10v-2h10v2z"></path></g>
<g id="vaadin:list-ul"><path d="M0 1h3v3h-3v-3z"></path><path d="M0 6h3v3h-3v-3z"></path><path d="M0 11h3v3h-3v-3z"></path><path d="M5 1h11v3h-11v-3z"></path><path d="M5 6h11v3h-11v-3z"></path><path d="M5 11h11v3h-11v-3z"></path></g>
<g id="vaadin:list"><path d="M0 0h4v3h-4v-3z"></path><path d="M0 4h4v3h-4v-3z"></path><path d="M0 12h4v3h-4v-3z"></path><path d="M0 8h4v3h-4v-3z"></path><path d="M5 0h11v3h-11v-3z"></path><path d="M5 4h11v3h-11v-3z"></path><path d="M5 12h11v3h-11v-3z"></path><path d="M5 8h11v3h-11v-3z"></path></g>
<g id="vaadin:location-arrow-circle-o"><path d="M1 8c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3.1-7-7zM0 8c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8v0z"></path><path d="M2 9l10-5-5 10v-5z"></path></g>
<g id="vaadin:location-arrow-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 14v-5h-5l10-5-5 10z"></path></g>
<g id="vaadin:location-arrow"><path d="M0 9l16-9-9 16v-7z"></path></g>
<g id="vaadin:lock"><path d="M12 8v-3.1c0-2.2-1.6-3.9-3.8-3.9h-0.3c-2.1 0-3.9 1.7-3.9 3.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-1zM9 14h-1v-2c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1v3zM10 8h-4v-3.1c0-1.1 0.9-1.9 1.9-1.9h0.3c1 0 1.8 0.8 1.8 1.9v3.1z"></path></g>
<g id="vaadin:magic"><path d="M0 5h3v1h-3v-1z"></path><path d="M5 0h1v3h-1v-3z"></path><path d="M6 11h-1v-2.5l1 1z"></path><path d="M11 6h-1.5l-1-1h2.5z"></path><path d="M3.131 7.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M10.131 0.161l0.707 0.707-2.97 2.97-0.707-0.707 2.97-2.97z"></path><path d="M0.836 0.199l3.465 3.465-0.707 0.707-3.465-3.465 0.707-0.707z"></path><path d="M6.1 4.1l-2.1 2 9.8 9.9 2.2-2.1-9.9-9.8zM6.1 5.5l2.4 2.5-0.6 0.6-2.5-2.5 0.7-0.6z"></path></g>
<g id="vaadin:magnet"><path d="M11 0h5v4h-5v-4z"></path><path d="M11 5v3c0 1.6-1.4 3-3 3s-3-1.4-3-3v-3h-5v3c0 4.4 3.6 8 8 8s8-3.6 8-8v-3h-5z"></path><path d="M0 0h5v4h-5v-4z"></path></g>
<g id="vaadin:mailbox"><path d="M13 1h-10l-3 9v5h16v-5l-3-9zM11 10v2h-6v-2h-3.9l2.7-8h8.6l2.7 8h-4.1z"></path></g>
<g id="vaadin:male"><path d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M12.79 7.32l-2.6-2.63c-0.421-0.426-1.004-0.69-1.65-0.69h-1.070c-0 0-0 0-0.001 0-0.648 0-1.235 0.264-1.659 0.69l-2.6 2.63c-0.216 0.129-0.358 0.362-0.358 0.628 0 0.403 0.327 0.73 0.73 0.73 0.266 0 0.499-0.142 0.626-0.355l1.792-1.793v9.47h1.5v-5h1v5h1.5v-9.47l1.75 1.8c0.135 0.175 0.344 0.287 0.58 0.287 0.403 0 0.73-0.327 0.73-0.73 0-0.228-0.105-0.432-0.269-0.566z"></path></g>
<g id="vaadin:map-marker"><path d="M8 0c-2.8 0-5 2.2-5 5s4 11 5 11c1 0 5-8.2 5-11s-2.2-5-5-5zM8 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"></path></g>
<g id="vaadin:margin-bottom"><path d="M0 0v14h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-13h-16zM15 12h-14v-11h14v11z"></path><path d="M0 15h1v1h-1v-1z"></path><path d="M1 14h1v1h-1v-1z"></path><path d="M2 15h1v1h-1v-1z"></path><path d="M3 14h1v1h-1v-1z"></path><path d="M4 15h1v1h-1v-1z"></path><path d="M5 14h1v1h-1v-1z"></path><path d="M6 15h1v1h-1v-1z"></path><path d="M7 14h1v1h-1v-1z"></path><path d="M8 15h1v1h-1v-1z"></path><path d="M9 14h1v1h-1v-1z"></path><path d="M10 15h1v1h-1v-1z"></path><path d="M11 14h1v1h-1v-1z"></path><path d="M12 15h1v1h-1v-1z"></path><path d="M13 14h1v1h-1v-1z"></path><path d="M14 15h1v1h-1v-1z"></path><path d="M15 14h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-left"><path d="M2 0v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h13v-16h-14zM15 15h-11v-14h11v14z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-right"><path d="M14 2v-1h-1v-1h-13v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1zM12 15h-11v-14h11v14z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path></g>
<g id="vaadin:margin-top"><path d="M15 2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v13h16v-14h-1zM15 15h-14v-11h14v11z"></path><path d="M15 0h1v1h-1v-1z"></path><path d="M14 1h1v1h-1v-1z"></path><path d="M13 0h1v1h-1v-1z"></path><path d="M12 1h1v1h-1v-1z"></path><path d="M11 0h1v1h-1v-1z"></path><path d="M10 1h1v1h-1v-1z"></path><path d="M9 0h1v1h-1v-1z"></path><path d="M8 1h1v1h-1v-1z"></path><path d="M7 0h1v1h-1v-1z"></path><path d="M6 1h1v1h-1v-1z"></path><path d="M5 0h1v1h-1v-1z"></path><path d="M4 1h1v1h-1v-1z"></path><path d="M3 0h1v1h-1v-1z"></path><path d="M2 1h1v1h-1v-1z"></path><path d="M1 0h1v1h-1v-1z"></path><path d="M0 1h1v1h-1v-1z"></path></g>
<g id="vaadin:margin"><path d="M0 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M13 2h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1zM12 12h-8v-8h8v8z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path></g>
<g id="vaadin:medal"><path d="M10 12.2c-0.3 0-0.5-0.1-0.8-0.2l-1.2-0.5-1.2 0.5c-0.2 0.1-0.5 0.2-0.8 0.2-0.2 0-0.3 0-0.5-0.1l-0.5 3.9 3-2 3 2-0.6-3.9c-0.1 0.1-0.3 0.1-0.4 0.1z"></path><path d="M12.9 5.9c-0.1-0.2-0.1-0.5 0-0.7l0.6-1.2c0.2-0.4 0-0.9-0.5-1.1l-1.3-0.5c-0.2-0.1-0.4-0.3-0.5-0.5l-0.5-1.3c-0.1-0.4-0.4-0.6-0.7-0.6-0.1 0-0.3 0-0.4 0.1l-1.3 0.6c-0.1 0-0.2 0-0.3 0s-0.2 0-0.3-0.1l-1.3-0.5c-0.1-0.1-0.3-0.1-0.4-0.1-0.3 0-0.6 0.2-0.8 0.5l-0.5 1.4c0 0.2-0.2 0.4-0.4 0.5l-1.4 0.5c-0.4 0.1-0.6 0.6-0.4 1.1l0.6 1.3c0.1 0.2 0.1 0.5 0 0.7l-0.6 1.2c-0.2 0.4 0 0.9 0.5 1.1l1.3 0.5c0.2 0.1 0.4 0.3 0.5 0.5l0.5 1.3c0.1 0.4 0.4 0.6 0.7 0.6 0.1 0 0.2 0 0.3-0.1l1.3-0.6c0.1 0 0.2-0.1 0.3-0.1s0.2 0 0.3 0.1l1.3 0.6c0.1 0.1 0.2 0.1 0.3 0.1 0.3 0 0.6-0.2 0.8-0.5l0.5-1.3c0.1-0.2 0.3-0.4 0.5-0.5l1.3-0.5c0.4-0.2 0.7-0.7 0.5-1.1l-0.5-1.4zM8 9.6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c0 2.2-1.8 4-4 4z"></path><path d="M11 5.6c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></g>
<g id="vaadin:megafone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:megaphone"><path d="M15.5 5.4l-0.5-0.4v-4c0-0.6-0.4-1-1-1s-1 0.4-1 1v0.5c-2 0.9-5 2.5-8 2.5h-2.5c-1.4 0-2.5 1.2-2.5 2.5 0 0.9 0.5 1.7 1.2 2.1l1.1 5.9c0 0.3 0.3 0.5 0.7 0.5 0.1 0 0.1 0 0.2 0l3.6-0.7c0.4-0.1 0.6-0.4 0.5-0.7-0.3-0.6-0.8-1.5-1.2-1.8-0.2-0.1-0.5-0.9-0.7-1.8h0.6v-0.9c2.7 0.3 6 1.6 7 2.4v0.5c0 0.6 0.4 1 1 1s1-0.4 1-1v-4l0.4-0.3c0.4-0.3 0.6-0.7 0.6-1.1v-0.2c0-0.4-0.2-0.7-0.5-1zM2 5h3v1h-3v-1zM5.6 12.6c0.1 0 0.3 0.3 0.5 0.7l-2.8 0.7-1-5h1.9c0.2 1.3 0.6 3.2 1.4 3.6zM13 10.3c-1.6-0.8-4.4-2-7-2.3v-3c2.6-0.3 5.4-1.4 7-2.3v7.6z"></path></g>
<g id="vaadin:meh-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M4 10h8v1h-8v-1z"></path></g>
<g id="vaadin:menu"><path d="M0 1h16v3h-16v-3z"></path><path d="M0 6h16v3h-16v-3z"></path><path d="M0 11h16v3h-16v-3z"></path></g>
<g id="vaadin:microphone"><path d="M8 10v0c-1.7 0-3-1.3-3-3v-4c0-1.6 1.3-3 3-3v0c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z"></path><path d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-0.4c-2 0-3.8-1.6-3.8-3.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 2.2 1.8 4.1 4 4.4v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.6-0.4-1-1-1z"></path></g>
<g id="vaadin:minus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M3 7h10v2h-10v-2z"></path></g>
<g id="vaadin:minus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-10v-2h10v2z"></path></g>
<g id="vaadin:minus-square-o"><path d="M4 7h8v2h-8v-2z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:minus"><path d="M2 7h12v2h-12v-2z"></path></g>
<g id="vaadin:mobile-browser"><path d="M16 0h-13v5h-3v11h7v-3h9v-13zM6 1h9v1h-9v-1zM4 1h1v1h-1v-1zM4 15h-1v-1h1v1zM6 13h-5v-7h5v7zM15 12h-8v-7h-3v-2h11v9z"></path></g>
<g id="vaadin:mobile-retro"><path d="M11 0h-1v2h-6v14h7v-16zM6 14h-1v-1h1v1zM6 12h-1v-1h1v1zM6 10h-1v-1h1v1zM8 14h-1v-1h1v1zM8 12h-1v-1h1v1zM8 10h-1v-1h1v1zM10 14h-1v-1h1v1zM10 12h-1v-1h1v1zM10 10h-1v-1h1v1zM10 8h-5v-4h5v4z"></path></g>
<g id="vaadin:mobile"><path d="M4 1v14h8v-14h-8zM9 14h-2v-1h2v1zM11 12h-6v-9h6v9z"></path></g>
<g id="vaadin:modal-list"><path d="M3 6h2v1h-2v-1z"></path><path d="M6 6h7v1h-7v-1z"></path><path d="M3 8h2v1h-2v-1z"></path><path d="M6 8h7v1h-7v-1z"></path><path d="M3 10h2v1h-2v-1z"></path><path d="M6 10h7v1h-7v-1z"></path><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:modal"><path d="M0 1v14h16v-14h-16zM15 14h-14v-10h14v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:money-deposit"><path d="M8 16l-2-3h1v-2h2v2h1l-2 3z"></path><path d="M15 1v8h-14v-8h14zM16 0h-16v10h16v-10z"></path><path d="M8 2c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 5c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money-exchange"><path d="M16 14l-3 2v-1h-4.75l2-2h2.75v-1l3 2z"></path><path d="M0 2l3-2v1h4.75l-2 2h-2.75v1l-3-2z"></path><path d="M9.74 0l-9.74 9.74 6.26 6.26 9.74-9.74zM1.39 9.74l8.35-8.35 4.87 4.87-8.35 8.35z"></path><path d="M4.17 9.74l-0.7 0.7 2.090 2.090 0.7-0.7 0.74 0.69 2.74-2.78c-0.445 0.445-1.060 0.721-1.74 0.721-1.359 0-2.461-1.102-2.461-2.461 0-0.68 0.275-1.295 0.721-1.74l-2.78 2.74z"></path><path d="M12.52 5.57l-2.090-2.090-0.7 0.7-0.73-0.7-2.74 2.78c0.445-0.445 1.060-0.721 1.74-0.721 1.359 0 2.461 1.102 2.461 2.461 0 0.68-0.275 1.295-0.721 1.74l2.78-2.74-0.7-0.7z"></path></g>
<g id="vaadin:money-withdraw"><path d="M8 0l2 3h-1v2h-2v-2h-1l2-3z"></path><path d="M15 7v8h-14v-8h14zM16 6h-16v10h16v-10z"></path><path d="M8 8c1.657 0 3 1.343 3 3s-1.343 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 11c0-1.657 1.343-3 3-3h-5v1h-1v4h1v1h5c-1.657 0-3-1.343-3-3z"></path></g>
<g id="vaadin:money"><path d="M15 4v8h-14v-8h14zM16 3h-16v10h16v-10z"></path><path d="M8 5c1.7 0 3 1.3 3 3s-1.3 3-3 3h5v-1h1v-4h-1v-1h-5z"></path><path d="M5 8c0-1.7 1.3-3 3-3h-5v1h-1v4h1v1h5c-1.7 0-3-1.3-3-3z"></path></g>
<g id="vaadin:moon-o"><path d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4 0.3-2.7 0.9-3.8-3.4 0.9-6 4.1-6 7.9 0 4.5 3.6 8.1 8.1 8.1 3.1 0 5.8-1.8 7.2-4.4-0.6 0.2-1.3 0.3-2.1 0.3zM8.1 15c-3.9 0-7.1-3.2-7.1-7.1 0-2.5 1.3-4.7 3.3-6-0.2 0.6-0.2 1.2-0.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"></path></g>
<g id="vaadin:moon"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8 15c-3.9 0-7-3.1-7-7 0-2.4 1.2-4.6 3.2-5.9-0.1 0.6-0.2 1.3-0.2 1.9 0 4.9 4 8.9 8.9 9-1.3 1.3-3 2-4.9 2z"></path></g>
<g id="vaadin:morning"><path d="M14 10l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 10c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:movie"><path d="M12 7v-3h-12v9h12v-3l4 2v-7l-4 2zM9 11h-7v-5h7v5z"></path><path d="M5 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 8.4c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:music"><path d="M4 3v9.4c-0.4-0.2-0.9-0.4-1.5-0.4-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-7.3l7-2.3v5.1c-0.4-0.3-0.9-0.5-1.5-0.5-1.4 0-2.5 0.9-2.5 2s1.1 2 2.5 2 2.5-0.9 2.5-2v-11l-9 3z"></path></g>
<g id="vaadin:mute"><path d="M15.2 0l-4.2 4.2v-1.2c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 0.9 0.4 1.7 1 2.2l-0.8 0.8c-0.7-0.6-1.2-1.5-1.2-2.5v-2.5c-0.6 0-1 0.4-1 1v1.5c0 1.3 0.6 2.4 1.5 3.2l-4.5 4.6v0.7h0.7l15.3-15.4v-0.6h-0.8z"></path><path d="M12.5 5.1l-0.5 0.5v1.9c0 1.9-1.8 3.5-3.8 3.5h-0.4c-0.3 0-0.6-0.1-0.9-0.1l-0.9 0.7c0.3 0.1 0.6 0.2 1 0.3v2.1c-3 0-2.5 2-2.5 2h7c0 0 0.5-2-2.5-2v-2.1c2.2-0.4 4-2.2 4-4.4v-1.5c0-0.4-0.2-0.7-0.5-0.9z"></path><path d="M11 7v-0.4l-3.3 3.4c0.1 0 0.2 0 0.3 0 1.7 0 3-1.4 3-3z"></path></g>
<g id="vaadin:native-button"><path d="M15 12h-14c-0.6 0-1-0.4-1-1v-6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v6c0 0.6-0.4 1-1 1z"></path></g>
<g id="vaadin:newspaper"><path d="M2 4h11v4h-11v-4z"></path><path d="M2 2h11v1h-11v-1z"></path><path d="M8 13h3v1h-3v-1z"></path><path d="M8 11h5v1h-5v-1z"></path><path d="M8 9h5v1h-5v-1z"></path><path d="M2 13h5v1h-5v-1z"></path><path d="M2 11h5v1h-5v-1z"></path><path d="M2 9h5v1h-5v-1z"></path><path d="M15 2v-2h-15v14.5c0 0.828 0.672 1.5 1.5 1.5h13c0.828 0 1.5-0.672 1.5-1.5v-12.5h-1zM1.5 15c-0.276 0-0.5-0.224-0.5-0.5v-13.5h13v12.5c0 1.5 1 1.5 1 1.5h-13.5z"></path></g>
<g id="vaadin:notebook"><path d="M2 0v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c-0.001 0.012-0.002 0.026-0.002 0.040 0 0.265 0.215 0.48 0.48 0.48 0.001 0 0.001 0 0.002 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v1h-0.52c-0.265 0-0.48 0.215-0.48 0.48 0 0 0 0 0 0v0c0 0.265 0.215 0.48 0.48 0.48 0 0 0 0 0 0h0.52v2h12v-15.88h-12zM3.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 12c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 8c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 4c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM3.5 2c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5zM12 6h-6v-3h6v3z"></path></g>
<g id="vaadin:nurse"><path d="M15.2 12c-0.658-1.414-2.067-2.376-3.701-2.376-0.077 0-0.154 0.002-0.23 0.006l-3.269 3.9-3.28-3.9c-0.049-0.002-0.106-0.003-0.163-0.003-1.648 0-3.072 0.958-3.746 2.348-0.422 0.9-0.707 1.917-0.808 2.988l1.997 0.037v1h12v-1h2c-0.104-1.107-0.388-2.124-0.824-3.057z"></path><path d="M6.57 8.73c-0.038 0.374-0.322 0.671-0.685 0.729l2.115 2.541 2.12-2.52c-0.368-0.059-0.652-0.356-0.69-0.727-0-0.613 0.8-0.413 1.43-1.453 0-0.030 2.88-7.3-2.86-7.3s-2.86 7.27-2.86 7.27c0.63 1.050 1.44 0.85 1.43 1.46z"></path></g>
<g id="vaadin:office"><path d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"></path></g>
<g id="vaadin:open-book"><path d="M15 4.7v-0.7c-1.159-1.163-2.734-1.91-4.484-1.999-0.112-0.012-0.222-0.018-0.334-0.018-0.874 0-1.657 0.394-2.179 1.013-0.556-0.617-1.357-1.007-2.249-1.007-0.090 0-0.178 0.004-0.266 0.012-1.754 0.089-3.33 0.836-4.488 1.999l-0 0.7-1 0.3v10l6.7-1.4 0.3 0.4h2l0.3-0.4 6.7 1.4v-10zM5.48 11.31c-1.275 0.037-2.467 0.358-3.526 0.902l0.046-7.792c0.885-0.835 2.066-1.365 3.369-1.42 0.806 0.054 1.534 0.303 2.159 0.701l-0.019 7.869c-0.555-0.166-1.193-0.262-1.854-0.262-0.062 0-0.124 0.001-0.185 0.003zM14 12.19c-1.013-0.522-2.205-0.843-3.468-0.88-0.056-0.001-0.108-0.002-0.161-0.002-0.66 0-1.297 0.096-1.899 0.274l0.047-7.902c0.601-0.381 1.322-0.627 2.096-0.679 1.324 0.055 2.501 0.586 3.386 1.422l-0.003 7.768z"></path></g>
<g id="vaadin:option-a"><path d="M12.5 10h-1.5v-4h1.5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5c-1.381 0-2.5 1.119-2.5 2.5v1.5h-4v-1.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5h1.5v4h-1.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5v-1.5h4v1.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM11 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0.828-0.672 1.5-1.5 1.5h-1.5v-1.5zM5 12.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5h1.5v1.5zM5 5h-1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5v1.5zM10 10h-4v-4h4v4zM12.5 14c-0.828 0-1.5-0.672-1.5-1.5v-1.5h1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:option"><path d="M4 11c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h-1c-0.552 0-1 0.448-1 1z"></path><path d="M0 0v16h16v-16h-16zM11 9c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2v-1h-2v1c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2h1v-2h-1c-1.105 0-2-0.895-2-2s0.895-2 2-2c1.105 0 2 0.895 2 2v1h2v-1c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2h-1v2h1z"></path><path d="M12 5c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h1c0.552 0 1-0.448 1-1z"></path><path d="M5 4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v-1c0-0.552-0.448-1-1-1z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M10 11c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1h-1v1z"></path></g>
<g id="vaadin:options"><path d="M5 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M3.5 0c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM3.5 6c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M3.5 8c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM3.5 14c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"></path><path d="M8 2h8v3h-8v-3z"></path><path d="M8 10h8v3h-8v-3z"></path></g>
<g id="vaadin:orientation"><path d="M11 2.1c2 0 3 1.3 3 2.9h-1l1.5 2 1.5-2h-1c0-2.2-2-3.9-4-3.9v-1.1l-2 1.5 2 1.5v-0.9z"></path><path d="M9 9h6v6h-7v-15h-8v16h16v-8h-7v1zM7 8h-1v1h1v6h-6v-14h6v7z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path></g>
<g id="vaadin:out"><path d="M3.5 8c0.3 0 0.5 0.2 0.5 0.5v2c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5v0zM3.5 7v0c-0.8 0-1.5 0.7-1.5 1.5v2c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-2c0-0.8-0.7-1.5-1.5-1.5v0z"></path><path d="M8 7v3.5c0 0.3-0.2 0.5-0.5 0.5s-0.5-0.2-0.5-0.5v-3.5h-1v3.5c0 0.8 0.7 1.5 1.5 1.5v0c0.8 0 1.5-0.7 1.5-1.5v-3.5h-1z"></path><path d="M13 7h-3v1h1v4h1v-4h1z"></path><path d="M15 6v-1h-2.4l-3.7-3c0.1-0.2 0.1-0.3 0.1-0.5 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.2 0 0.3 0.1 0.5l-3.7 3h-2.4v9h1v1h15v-9h-1zM6.7 2.8c0.3 0.1 0.5 0.2 0.8 0.2s0.5-0.1 0.8-0.2l2.7 2.2h-7l2.7-2.2zM14 13h-13v-7h13v7z"></path></g>
<g id="vaadin:outbox"><path d="M6 5v6h4v-6h2l-4-5-4 5z"></path><path d="M13 2h-2l0.9 1h0.4l2.6 8h-3.9v2h-6v-2h-3.9l2.6-8h0.4l0.9-1h-2l-3 9v5h16v-5z"></path></g>
<g id="vaadin:package"><path d="M8 0l-8 2v10l8 4 8-4v-10l-8-2zM8 1l2.1 0.5-5.9 1.9-2.3-0.8 6.1-1.6zM8 14.9l-7-3.5v-8.1l3 1v3.4l1 0.3v-3.3l3 1v9.2zM8.5 4.8l-2.7-0.9 6.2-1.9 2.4 0.6-5.9 2.2z"></path></g>
<g id="vaadin:padding-bottom"><path d="M16 16v-16h-16v16h16zM1 13h1v-1h-1v-11h14v12h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-left"><path d="M0 16h16v-16h-16v16zM3 1v1h1v-1h11v14h-12v-1h-1v1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-right"><path d="M16 0h-16v16h16v-16zM13 15v-1h-1v1h-11v-14h12v1h1v-1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path></g>
<g id="vaadin:padding-top"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v11h-14v-12h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path></g>
<g id="vaadin:padding"><path d="M0 0v16h16v-16h-16zM15 3h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v1h1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v-1h1v1h1v1z"></path><path d="M3 2h1v1h-1v-1z"></path><path d="M4 3h1v1h-1v-1z"></path><path d="M6 3h1v1h-1v-1z"></path><path d="M5 2h1v1h-1v-1z"></path><path d="M7 2h1v1h-1v-1z"></path><path d="M9 2h1v1h-1v-1z"></path><path d="M8 3h1v1h-1v-1z"></path><path d="M10 3h1v1h-1v-1z"></path><path d="M12 3h1v1h-1v-1z"></path><path d="M11 2h1v1h-1v-1z"></path><path d="M13 2h1v1h-1v-1z"></path><path d="M12 5h1v1h-1v-1z"></path><path d="M13 4h1v1h-1v-1z"></path><path d="M12 7h1v1h-1v-1z"></path><path d="M13 6h1v1h-1v-1z"></path><path d="M12 9h1v1h-1v-1z"></path><path d="M13 8h1v1h-1v-1z"></path><path d="M12 11h1v1h-1v-1z"></path><path d="M13 10h1v1h-1v-1z"></path><path d="M12 13h1v1h-1v-1z"></path><path d="M13 12h1v1h-1v-1z"></path><path d="M2 3h1v1h-1v-1z"></path><path d="M3 4h1v1h-1v-1z"></path><path d="M2 5h1v1h-1v-1z"></path><path d="M3 6h1v1h-1v-1z"></path><path d="M2 7h1v1h-1v-1z"></path><path d="M3 8h1v1h-1v-1z"></path><path d="M2 9h1v1h-1v-1z"></path><path d="M3 10h1v1h-1v-1z"></path><path d="M2 11h1v1h-1v-1z"></path><path d="M2 13h1v1h-1v-1z"></path><path d="M3 12h1v1h-1v-1z"></path><path d="M4 11h1v1h-1v-1z"></path><path d="M4 13h1v1h-1v-1z"></path><path d="M5 12h1v1h-1v-1z"></path><path d="M6 13h1v1h-1v-1z"></path><path d="M7 12h1v1h-1v-1z"></path><path d="M9 12h1v1h-1v-1z"></path><path d="M8 13h1v1h-1v-1z"></path><path d="M11 12h1v1h-1v-1z"></path><path d="M10 13h1v1h-1v-1z"></path></g>
<g id="vaadin:paint-roll"><path d="M16 6.9v-4.9h-2v-2h-13v1h-1v3h1v1h13v-2h1v3.1l-8 1v1.9h-1v0.9c0 0 0.5 0 0.5 0.9s-0.5 0.6-0.5 1.5v2.8c0 0 0 0.9 1.5 0.9s1.5-0.9 1.5-0.9v-2.8c0-0.9-0.5-0.7-0.5-1.5s0.5-0.9 0.5-0.9v-0.9h-1v-1.1l8-1z"></path></g>
<g id="vaadin:paintbrush"><path d="M5.6 11.6l-1.2-1.2c-0.8-0.2-2-0.1-2.7 1-0.8 1.1-0.3 2.8-1.7 4.6 0 0 3.5 0 4.8-1.3 1.2-1.2 1.2-2.2 1-3l-0.2-0.1z"></path><path d="M5.8 8.1c-0.2 0.3-0.5 0.7-0.7 1 0 0.2-0.1 0.3-0.2 0.4l1.5 1.5c0.1-0.1 0.3-0.2 0.4-0.3 0.3-0.2 0.7-0.4 1-0.7 0.4 0 0.6-0.2 0.8-0.4l-2.2-2.2c-0.2 0.2-0.4 0.4-0.6 0.7z"></path><path d="M15.8 0.2c-0.3-0.3-0.7-0.3-1-0.1 0 0-3 2.5-5.9 5.1-0.4 0.4-0.7 0.7-1.1 1-0.2 0.2-0.4 0.4-0.6 0.5l2.1 2.1c0.2-0.2 0.4-0.4 0.5-0.7 0.3-0.4 0.6-0.7 0.9-1.1 2.5-3 5.1-5.9 5.1-5.9 0.3-0.2 0.3-0.6 0-0.9z"></path></g>
<g id="vaadin:palete"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:palette"><path d="M8.25 0c-6.38 0-9.11 7.38-8.010 9.92 0.82 1.89 2.62 0.080 3.34 1 1.88 2.46-2.11 3.81 0.090 4.68 2.59 1.060 12.33 0.4 12.33-8.53 0-2.69-1.34-7.070-7.75-7.070zM4.47 9c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM6 3.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5-0.672 1.5-1.5 1.5c-0.011 0-0.021-0-0.032-0-0.814-0.017-1.468-0.682-1.468-1.5 0-0 0-0 0-0zM8.47 14c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 11c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0zM12.47 6c-0.815-0.017-1.47-0.682-1.47-1.5 0-0.828 0.672-1.5 1.5-1.5s1.5 0.671 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5-0.011 0-0.021-0-0.032-0z"></path></g>
<g id="vaadin:panel"><path d="M0 0v16h16v-16h-16zM13 15h-12v-12h12v12zM15 15h-1v-1h1v1zM15 13h-1v-8h1v8zM15 4h-1v-1h1v1z"></path></g>
<g id="vaadin:paperclip"><path d="M2.7 15.3c-0.7 0-1.4-0.3-1.9-0.8-0.9-0.9-1.2-2.5 0-3.7l8.9-8.9c1.4-1.4 3.8-1.4 5.2 0s1.4 3.8 0 5.2l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c1-1 1-2.7 0-3.7s-2.7-1-3.7 0l-8.9 8.9c-0.8 0.8-0.6 1.7 0 2.2 0.6 0.6 1.5 0.8 2.2 0l8.9-8.9c0.2-0.2 0.2-0.5 0-0.7s-0.5-0.2-0.7 0l-7.4 7.4c-0.2 0.2-0.5 0.2-0.7 0s-0.2-0.5 0-0.7l7.4-7.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-8.9 8.9c-0.6 0.4-1.3 0.7-1.9 0.7z"></path></g>
<g id="vaadin:paperplane-o"><path d="M16 0l-16 8 4.7 1.6 0.3 5.4 2.5-2.8 2.5 3.8 6-16zM7.5 10.4l4.3-5.9-6.2 4.3-3-1 11.6-5.8-4.5 11.8-2.2-3.4z"></path></g>
<g id="vaadin:paperplane"><path d="M0 8l4.9 1.4h0.1v-0.1l7.1-5.3-1.1 1.2-6.2 6.6 0.2 3.2 2.9-3.2 2.1 4.2 6-16z"></path></g>
<g id="vaadin:paragraph"><path d="M5.5 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h2.5v7h2v-14h1v14h2v-14h2v-2h-9.5z"></path></g>
<g id="vaadin:password"><path d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z"></path><path d="M6 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M9 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M12 8c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:paste"><path d="M13 4h-3v-4h-10v14h6v2h10v-9l-3-3zM3 1h4v1h-4v-1zM15 15h-8v-10h5v3h3v7zM13 7v-2l2 2h-2z"></path></g>
<g id="vaadin:pause"><path d="M0 1h7v14h-7v-14z"></path><path d="M9 1h7v14h-7v-14z"></path></g>
<g id="vaadin:pencil"><path d="M1 11.9l-1 4.1 4.1-1 9.2-9.2-3.1-3.1-9.2 9.2zM1.5 15l-0.4-0.5 0.4-2 2 2-2 0.5zM10.9 4.4l-8.1 8-0.6-0.6 8.1-8 0.6 0.6z"></path><path d="M15.3 0.7c-1.1-1.1-2.6-0.5-2.6-0.5l-1.5 1.5 3.1 3.1 1.5-1.5c0-0.1 0.6-1.5-0.5-2.6zM13.4 1.6l-0.5-0.5c0.6-0.6 1.1-0.1 1.1-0.1l-0.6 0.6z"></path></g>
<g id="vaadin:phone-landline"><path d="M15.88 3.86l-0.61-1.31c-0.155-0.326-0.443-0.568-0.792-0.658-1.938-0.528-4.161-0.851-6.453-0.891-2.342 0.041-4.565 0.363-6.687 0.934-0.165 0.048-0.453 0.29-0.605 0.609l-0.613 1.317c-0.075 0.152-0.119 0.331-0.12 0.52v0.87c-0.001 0.012-0.001 0.026-0.001 0.041 0 0.392 0.318 0.71 0.71 0.71 0.011 0 0.022-0 0.033-0.001l2.518 0c0.412-0.010 0.742-0.346 0.742-0.76 0-0.018-0.001-0.035-0.002-0.053l0-0.838c-0-0.004-0-0.008-0-0.012 0-0.229 0.119-0.43 0.298-0.546 0.947-0.508 2.069-0.806 3.26-0.806 0.156 0 0.31 0.005 0.464 0.015 0.122-0.011 0.288-0.017 0.456-0.017 1.178 0 2.287 0.291 3.261 0.805 0.143 0.099 0.262 0.3 0.262 0.529 0 0.004-0 0.009-0 0.013l0 0.859c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.413 0.33 0.75 0.741 0.76l2.521 0c0.009 0 0.020 0.001 0.031 0.001 0.392 0 0.71-0.318 0.71-0.71 0-0.014-0-0.029-0.001-0.043l0-0.868c-0.001-0.189-0.045-0.368-0.123-0.527z"></path><path d="M12 8.3c-0.624-0.797-1.001-1.815-1.001-2.92 0-0.028 0-0.056 0.001-0.084l-0-0.296h-1v1h-4v-1h-1v0.33c0 0.024 0.001 0.052 0.001 0.080 0 1.105-0.377 2.122-1.009 2.93l-2.992 3.66v3h14v-3zM8 13c-1.657 0-3-1.343-3-3s1.343-3 3-3c1.657 0 3 1.343 3 3s-1.343 3-3 3z"></path><path d="M10 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:phone"><path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path></g>
<g id="vaadin:picture"><path d="M16 14h-16v-12h16v12zM1 13h14v-10h-14v10z"></path><path d="M2 10v2h12v-1c0 0 0.2-1.7-2-2-1.9-0.3-2.2 0.6-3.8 0.6-1.1 0-0.9-1.6-3.2-1.6-1.7 0-3 2-3 2z"></path><path d="M13 6c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:pie-bar-chart"><path d="M5 11h3v5h-3v-5z"></path><path d="M1 14h3v2h-3v-2z"></path><path d="M13 12h3v4h-3v-4z"></path><path d="M9 9h3v7h-3v-7z"></path><path d="M5 0c-2.761 0-5 2.239-5 5s2.239 5 5 5c2.761 0 5-2.239 5-5s-2.239-5-5-5zM5 9c-2.209 0-4-1.791-4-4s1.791-4 4-4v4h4c0 2.209-1.791 4-4 4z"></path></g>
<g id="vaadin:pie-chart"><path d="M9 1c3.2 0.2 5.7 2.8 6 6h-6v-6zM8.5 0c-0.2 0-0.3 0-0.5 0v8h8c0-0.2 0-0.3 0-0.5 0-4.1-3.4-7.5-7.5-7.5v0z"></path><path d="M7 9v-8c-3.9 0.3-7 3.5-7 7.5 0 4.1 3.4 7.5 7.5 7.5 4 0 7.2-3.1 7.5-7h-8z"></path></g>
<g id="vaadin:piggy-bank-coin"><path d="M15.93 7.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.411h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 7.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 7c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 9.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.001s0-0.13 0-0.13 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 9.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path><path d="M8 3h-1v-0.17h0.25v-1.090h-0.25l0.55-0.55h0.2v1.64h0.25v0.17z"></path><path d="M7.5 0.75c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5zM7.5 0c-1.243 0-2.25 1.007-2.25 2.25s1.007 2.25 2.25 2.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25v0z"></path></g>
<g id="vaadin:piggy-bank"><path d="M15.93 5.75c-0.061-0.2-0.165-0.371-0.3-0.51-0.105-0.113-0.241-0.197-0.394-0.238 0.074 0.117 0.141 0.252 0.191 0.396 0.056 0.147 0.092 0.304 0.103 0.467 0.008 0.067 0.012 0.138 0.012 0.21s-0.004 0.143-0.012 0.214c-0.035-0.115-0.083-0.208-0.142-0.292-0.123-0.166-0.288-0.299-0.48-0.383-0.119-0.053-0.248-0.082-0.384-0.082-0.346 0-0.648 0.186-0.811 0.464-0.050 0.082-0.090 0.171-0.12 0.266-1.182-1.968-3.309-3.271-5.741-3.271-0.124 0-0.247 0.003-0.369 0.010-0.763 0.001-1.517 0.11-2.231 0.313-0.062-0.434-0.632-1.314-3.252-1.314l0.8 2.51c-0.507 0.411-0.927 0.905-1.247 1.465l-1.553 0.025s-0.17 4 1 4h0.54c0.379 0.638 0.868 1.171 1.445 1.589l0.015 2.41h1.080c1.31 0 1.92 0 1.92-0.75v-0.39c0.451 0.088 0.97 0.139 1.5 0.139s1.049-0.051 1.551-0.147l-0.051 0.398c0 0.75 0.62 0.75 1.94 0.75h1.060v-2.39c0.932-0.651 1.613-1.605 1.903-2.717 0.057-0.027 0.114-0.024 0.172-0.024s0.115-0.003 0.172-0.010c0.251-0.046 0.48-0.144 0.679-0.283 0.266-0.188 0.474-0.454 0.591-0.765 0.028-0.093 0.049-0.191 0.063-0.292l0.001-0.010c0.221-0.262 0.372-0.59 0.419-0.951 0.012-0.084 0.019-0.171 0.019-0.259 0-0.197-0.032-0.386-0.091-0.563zM3.51 5.75c0.414 0 0.75 0.336 0.75 0.75s-0.336 0.75-0.75 0.75c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75zM5.88 5c-0.046 0.015-0.099 0.024-0.154 0.024-0.194 0-0.362-0.11-0.445-0.271-0.013-0.038-0.019-0.078-0.019-0.12 0-0.19 0.136-0.348 0.315-0.383 0.571-0.141 1.224-0.221 1.896-0.221 0.038 0 0.075 0 0.113 0.001 0.026-0 0.064-0.001 0.101-0.001 0.672 0 1.324 0.080 1.949 0.232 0.126 0.024 0.262 0.182 0.262 0.372 0 0.042-0.007 0.082-0.019 0.119-0.070 0.129-0.197 0.223-0.346 0.247l-0.153 0c-0.512-0.127-1.101-0.2-1.706-0.2-0.016 0-0.031 0-0.047 0-0.011-0-0.026-0-0.042-0-0.605 0-1.193 0.073-1.756 0.211zM14.58 7.93c-0.13 0.095-0.285 0.165-0.453 0.199l-0.127 0.011s0-0.14 0-0.14 0-0.21 0-0.31c0.165 0.125 0.374 0.2 0.6 0.2 0.007 0 0.014-0 0.021-0zM14.66 7.25c-0.018 0.003-0.040 0.004-0.061 0.004-0.176 0-0.327-0.103-0.398-0.252-0.044-0.084-0.069-0.18-0.069-0.283s0.025-0.199 0.070-0.283c0.059-0.082 0.157-0.138 0.269-0.138 0.059 0 0.113 0.015 0.161 0.042 0.181 0.070 0.308 0.244 0.308 0.448 0 0 0 0.001 0 0.001 0.009 0.062 0.014 0.133 0.014 0.205s-0.005 0.143-0.015 0.213c-0.066 0.012-0.144 0.024-0.224 0.024-0.019 0-0.039-0.001-0.058-0.002z"></path></g>
<g id="vaadin:pill"><path d="M14.8 1.4l-0.2-0.2c-0.7-0.8-1.8-1.2-2.8-1.2s-2.1 0.4-2.9 1.2l-7.7 7.7c-1.6 1.6-1.6 4.1 0 5.7l0.2 0.2c0.7 0.8 1.8 1.2 2.8 1.2s2.1-0.4 2.9-1.2l7.8-7.8c1.5-1.5 1.5-4.1-0.1-5.6zM14.1 6.4l-3.9 3.9-3.5-3.6-3.8 3.8c-1.1 1.1-1.1 2.5-1 3.5v0c-1.2-1.2-1.2-3.1 0-4.3l7.8-7.8c0.5-0.6 1.3-0.9 2.1-0.9s1.6 0.3 2.2 0.9l0.2 0.2c0.5 0.5 0.8 1.3 0.8 2.1s-0.3 1.6-0.9 2.2z"></path></g>
<g id="vaadin:pills"><path d="M3.5 8l6.3-6.3c0.4-0.4 1-0.7 1.7-0.7s1.3 0.3 1.8 0.7c1 1 1 2.6 0 3.5l-2.8 2.8h1.4l2-2c1.4-1.4 1.4-3.6 0-4.9-0.7-0.7-1.6-1-2.5-1s-1.7 0.2-2.4 0.9l-6.3 6.4c-0.3 0.2-0.5 0.5-0.7 0.9 0.5-0.2 1-0.3 1.5-0.3z"></path><path d="M7.3 5.6l-2.4 2.4h4.7z"></path><path d="M12.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5zM12.5 15h-4.5v-4h-4.5c-1.1 0-2 0.6-2.5 1.2 0.2-1.2 1.2-2.2 2.5-2.2h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"></path></g>
<g id="vaadin:pin-post"><path d="M15 4v-1h-6c0-1.69 1-2 1-2v-1h-5v1s1 0.31 1 2h-6v12h2v1h14v-12h-1zM14 14h-13v-10h4v1h2v2h1v-2h2v-1h4v10z"></path></g>
<g id="vaadin:pin"><path d="M11 6.5v-5.5h1v-1h-8v1h1v5.5c0 0-2 1.5-2 3.5 0 0.5 1.9 0.7 4 0.7v2.2c0 0.7 0.2 1.4 0.5 2.1l0.5 1 0.5-1c0.3-0.6 0.5-1.3 0.5-2.1v-2.2c2.1 0 4-0.3 4-0.7 0-2-2-3.5-2-3.5zM7 6.6c0 0-0.5 0.3-1.6 1.4-1 1-1.5 1.9-1.5 1.9s0.1-1 0.8-1.9c0.9-1.1 1.3-1.4 1.3-1.4v-5.6h1v5.6z"></path></g>
<g id="vaadin:play-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6 4v8l6-4z"></path></g>
<g id="vaadin:play-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM6 12v-8l6 4-6 4z"></path></g>
<g id="vaadin:play"><path d="M2 1v14l12-7z"></path></g>
<g id="vaadin:plug"><path d="M14.7 3.1c-0.4-0.4-1-0.4-1.4 0l-2.8 2.8-1.5-1.4 2.8-2.8c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-2.8 2.8-1.4-1.4-1.4 1.4 0.7 0.7-1.4 1.4c-1.4 1.4-1.5 3.5-0.5 5.1-1.7 1.5-2.6 3.8-2.6 5.7h2c0-1.3 0.4-3.2 2.1-4.4 1.5 0.8 3.4 0.5 4.6-0.7l1.4-1.4 0.7 0.7 1.4-1.4-1.4-1.4 2.8-2.8c0.5-0.5 0.5-1.1 0.1-1.5z"></path></g>
<g id="vaadin:plus-circle-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M13 7h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></path></g>
<g id="vaadin:plus-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM13 9h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"></path></g>
<g id="vaadin:plus-minus"><path d="M10 7h6v2h-6v-2z"></path><path d="M4 5h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path><path d="M6 2l3 12h1l-3-12z"></path></g>
<g id="vaadin:plus-square-o"><path d="M12 7h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></path><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:plus"><path d="M14 7h-5v-5h-2v5h-5v2h5v5h2v-5h5v-2z"></path></g>
<g id="vaadin:pointer"><path d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z"></path></g>
<g id="vaadin:power-off"><path d="M10 2.3v3.3c1.2 0.7 2 2 2 3.4 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.5 0.8-2.8 2-3.4v-3.3c-2.9 0.9-5 3.5-5 6.7 0 3.9 3.1 7 7 7s7-3.1 7-7c0-3.2-2.1-5.8-5-6.7z"></path><path d="M7 1h2v7h-2v-7z"></path></g>
<g id="vaadin:presentation"><path d="M16 1h-7v-1h-2v1h-7v11h5l-2 4h2.2l2-4h1.5l2 4h2.3l-2-4h5v-11zM15 11h-14v-9h14v9z"></path><path d="M6 4v5l4-2.5z"></path></g>
<g id="vaadin:print"><path d="M0 10v4h2v2h12v-2h2v-4h-16zM13 15h-10v-3h10v3z"></path><path d="M12 6v-4l-2.7-2h-5.3v6h-4v3h16v-3h-4zM9 1l1.3 1h-1.3v-1zM11 7h-6v-6h3v2h3v4zM15 8h-1v-1h1v1z"></path></g>
<g id="vaadin:progressbar"><path d="M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z"></path><path d="M2 7h7v2h-7v-2z"></path></g>
<g id="vaadin:puzzle-piece"><path d="M14.9 0.9c-1.1-1-2.5-1.3-3.1-0.4-0.7 1.1 0.5 1.7-0.3 2.5-0.5 0.6-2-0.8-2-0.8l-0.8-0.8-1.4 1.4c-0.6 0.7-2.1 1.5-2.6 1.1-0.7-0.6 0.1-1.8-0.5-2.6-0.7-1-2.1-0.8-3 0.3-1 1.1-1.4 2.4-0.5 3 1.1 0.7 1.9-0.3 2.7 0.5 0.4 0.4-0.2 1.7-0.5 2.1l-2.3 2.3 6.5 6.5 1.7-1.7c0.7-0.7 1.5-2 1.1-2.4-0.6-0.7-1.7 0.1-2.5-0.4-1-0.7-0.8-2 0.3-3s2.5-1.3 3.1-0.4c0.7 1.1-0.4 1.8 0.4 2.6 0.4 0.4 1.6-0.2 2-0.6l2.1-2.1-1.1-1.1c-0.6-0.6-1.9-2-1.4-2.5 0.6-0.7 1.7 0.2 2.5-0.4 0.9-0.8 0.6-2.1-0.4-3.1z"></path></g>
<g id="vaadin:pyramid-chart"><path d="M10.29 5l-2.29-4-2.29 4h4.58z"></path><path d="M2.29 11l-2.29 4h16l-2.29-4h-11.42z"></path><path d="M13.14 10l-2.28-4h-5.72l-2.28 4h10.28z"></path></g>
<g id="vaadin:qrcode"><path d="M6 0h-6v6h6v-6zM5 5h-4v-4h4v4z"></path><path d="M2 2h2v2h-2v-2z"></path><path d="M0 16h6v-6h-6v6zM1 11h4v4h-4v-4z"></path><path d="M2 12h2v2h-2v-2z"></path><path d="M10 0v6h6v-6h-6zM15 5h-4v-4h4v4z"></path><path d="M12 2h2v2h-2v-2z"></path><path d="M2 7h-2v2h3v-1h-1z"></path><path d="M7 9h2v2h-2v-2z"></path><path d="M3 7h2v1h-2v-1z"></path><path d="M9 12h-2v1h1v1h1v-1z"></path><path d="M6 7v1h-1v1h2v-2z"></path><path d="M8 4h1v2h-1v-2z"></path><path d="M9 8v1h2v-2h-3v1z"></path><path d="M7 6h1v1h-1v-1z"></path><path d="M9 14h2v2h-2v-2z"></path><path d="M7 14h1v2h-1v-2z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M9 3v-2h-1v-1h-1v4h1v-1z"></path><path d="M12 14h1v2h-1v-2z"></path><path d="M12 12h2v1h-2v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M14 10v1h1v1h1v-2h-1z"></path><path d="M15 13h-1v3h2v-2h-1z"></path><path d="M10 10v1h3v-2h-2v1z"></path><path d="M12 7v1h2v1h2v-2h-2z"></path></g>
<g id="vaadin:question-circle-o"><path d="M9 10h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2z"></path><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M6.9 11h2v2h-2v-2z"></path></g>
<g id="vaadin:question-circle"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM8.9 13h-2v-2h2v2zM11 8.1c-0.4 0.4-0.8 0.6-1.2 0.7-0.6 0.4-0.8 0.2-0.8 1.2h-2c0-2 1.2-2.6 2-3 0.3-0.1 0.5-0.2 0.7-0.4 0.1-0.1 0.3-0.3 0.1-0.7-0.2-0.5-0.8-1-1.7-1-1.4 0-1.6 1.2-1.7 1.5l-2-0.3c0.1-1.1 1-3.2 3.6-3.2 1.6 0 3 0.9 3.6 2.2 0.4 1.1 0.2 2.2-0.6 3z"></path></g>
<g id="vaadin:question"><path d="M9 11h-3c0-3 1.6-4 2.7-4.6 0.4-0.2 0.7-0.4 0.9-0.6 0.5-0.5 0.3-1.2 0.2-1.4-0.3-0.7-1-1.4-2.3-1.4-2.1 0-2.5 1.9-2.5 2.3l-3-0.4c0.2-1.7 1.7-4.9 5.5-4.9 2.3 0 4.3 1.3 5.1 3.2 0.7 1.7 0.4 3.5-0.8 4.7-0.5 0.5-1.1 0.8-1.6 1.1-0.9 0.5-1.2 1-1.2 2z"></path><path d="M9.5 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:quote-left"><path d="M7 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path><path d="M16 7v7h-7v-7.1c0-4.8 4.5-5.4 4.5-5.4l0.6 1.4c0 0-2 0.3-2.4 1.9-0.4 1.2 0.4 2.2 0.4 2.2h3.9z"></path></g>
<g id="vaadin:quote-right"><path d="M9 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path><path d="M0 9v-7h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-0.6-1.4c0 0 2-0.3 2.4-1.9 0.4-1.2-0.4-2.2-0.4-2.2h-3.9z"></path></g>
<g id="vaadin:random"><path d="M13 12h-2c-1 0-1.7-1.2-2.4-2.7-0.3 0.7-0.6 1.5-1 2.3 0.8 1.4 1.8 2.4 3.4 2.4h2v2l3-3-3-3v2z"></path><path d="M5.4 6.6c0.3-0.7 0.6-1.5 1-2.2-0.8-1.4-1.9-2.4-3.4-2.4h-3v2h3c1 0 1.7 1.2 2.4 2.6z"></path><path d="M16 3l-3-3v2h-2c-2.7 0-3.9 3-5 5.7-0.8 2.1-1.7 4.3-3 4.3h-3v2h3c2.6 0 3.8-2.8 4.9-5.6 0.9-2.2 1.8-4.4 3.1-4.4h2v2l3-3z"></path></g>
<g id="vaadin:raster-lower-left"><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:raster"><path d="M7 7h1v1h-1v-1z"></path><path d="M5 7h1v1h-1v-1z"></path><path d="M3 7h1v1h-1v-1z"></path><path d="M1 7h1v1h-1v-1z"></path><path d="M6 6h1v1h-1v-1z"></path><path d="M4 6h1v1h-1v-1z"></path><path d="M2 6h1v1h-1v-1z"></path><path d="M0 6h1v1h-1v-1z"></path><path d="M7 5h1v1h-1v-1z"></path><path d="M5 5h1v1h-1v-1z"></path><path d="M3 5h1v1h-1v-1z"></path><path d="M1 5h1v1h-1v-1z"></path><path d="M6 4h1v1h-1v-1z"></path><path d="M4 4h1v1h-1v-1z"></path><path d="M2 4h1v1h-1v-1z"></path><path d="M0 4h1v1h-1v-1z"></path><path d="M7 3h1v1h-1v-1z"></path><path d="M5 3h1v1h-1v-1z"></path><path d="M3 3h1v1h-1v-1z"></path><path d="M1 3h1v1h-1v-1z"></path><path d="M6 2h1v1h-1v-1z"></path><path d="M4 2h1v1h-1v-1z"></path><path d="M2 2h1v1h-1v-1z"></path><path d="M0 2h1v1h-1v-1z"></path><path d="M7 1h1v1h-1v-1z"></path><path d="M5 1h1v1h-1v-1z"></path><path d="M3 1h1v1h-1v-1z"></path><path d="M1 1h1v1h-1v-1z"></path><path d="M6 0h1v1h-1v-1z"></path><path d="M4 0h1v1h-1v-1z"></path><path d="M2 0h1v1h-1v-1z"></path><path d="M0 0h1v1h-1v-1z"></path><path d="M15 7h1v1h-1v-1z"></path><path d="M13 7h1v1h-1v-1z"></path><path d="M11 7h1v1h-1v-1z"></path><path d="M9 7h1v1h-1v-1z"></path><path d="M14 6h1v1h-1v-1z"></path><path d="M12 6h1v1h-1v-1z"></path><path d="M10 6h1v1h-1v-1z"></path><path d="M8 6h1v1h-1v-1z"></path><path d="M15 5h1v1h-1v-1z"></path><path d="M13 5h1v1h-1v-1z"></path><path d="M11 5h1v1h-1v-1z"></path><path d="M9 5h1v1h-1v-1z"></path><path d="M14 4h1v1h-1v-1z"></path><path d="M12 4h1v1h-1v-1z"></path><path d="M10 4h1v1h-1v-1z"></path><path d="M8 4h1v1h-1v-1z"></path><path d="M15 3h1v1h-1v-1z"></path><path d="M13 3h1v1h-1v-1z"></path><path d="M11 3h1v1h-1v-1z"></path><path d="M9 3h1v1h-1v-1z"></path><path d="M14 2h1v1h-1v-1z"></path><path d="M12 2h1v1h-1v-1z"></path><path d="M10 2h1v1h-1v-1z"></path><path d="M8 2h1v1h-1v-1z"></path><path d="M15 1h1v1h-1v-1z"></path><path d="M13 1h1v1h-1v-1z"></path><path d="M11 1h1v1h-1v-1z"></path><path d="M9 1h1v1h-1v-1z"></path><path d="M14 0h1v1h-1v-1z"></path><path d="M12 0h1v1h-1v-1z"></path><path d="M10 0h1v1h-1v-1z"></path><path d="M8 0h1v1h-1v-1z"></path><path d="M7 15h1v1h-1v-1z"></path><path d="M5 15h1v1h-1v-1z"></path><path d="M3 15h1v1h-1v-1z"></path><path d="M1 15h1v1h-1v-1z"></path><path d="M6 14h1v1h-1v-1z"></path><path d="M4 14h1v1h-1v-1z"></path><path d="M2 14h1v1h-1v-1z"></path><path d="M0 14h1v1h-1v-1z"></path><path d="M7 13h1v1h-1v-1z"></path><path d="M5 13h1v1h-1v-1z"></path><path d="M3 13h1v1h-1v-1z"></path><path d="M1 13h1v1h-1v-1z"></path><path d="M6 12h1v1h-1v-1z"></path><path d="M4 12h1v1h-1v-1z"></path><path d="M2 12h1v1h-1v-1z"></path><path d="M0 12h1v1h-1v-1z"></path><path d="M7 11h1v1h-1v-1z"></path><path d="M5 11h1v1h-1v-1z"></path><path d="M3 11h1v1h-1v-1z"></path><path d="M1 11h1v1h-1v-1z"></path><path d="M6 10h1v1h-1v-1z"></path><path d="M4 10h1v1h-1v-1z"></path><path d="M2 10h1v1h-1v-1z"></path><path d="M0 10h1v1h-1v-1z"></path><path d="M7 9h1v1h-1v-1z"></path><path d="M5 9h1v1h-1v-1z"></path><path d="M3 9h1v1h-1v-1z"></path><path d="M1 9h1v1h-1v-1z"></path><path d="M6 8h1v1h-1v-1z"></path><path d="M4 8h1v1h-1v-1z"></path><path d="M2 8h1v1h-1v-1z"></path><path d="M0 8h1v1h-1v-1z"></path><path d="M15 15h1v1h-1v-1z"></path><path d="M13 15h1v1h-1v-1z"></path><path d="M11 15h1v1h-1v-1z"></path><path d="M9 15h1v1h-1v-1z"></path><path d="M14 14h1v1h-1v-1z"></path><path d="M12 14h1v1h-1v-1z"></path><path d="M10 14h1v1h-1v-1z"></path><path d="M8 14h1v1h-1v-1z"></path><path d="M15 13h1v1h-1v-1z"></path><path d="M13 13h1v1h-1v-1z"></path><path d="M11 13h1v1h-1v-1z"></path><path d="M9 13h1v1h-1v-1z"></path><path d="M14 12h1v1h-1v-1z"></path><path d="M12 12h1v1h-1v-1z"></path><path d="M10 12h1v1h-1v-1z"></path><path d="M8 12h1v1h-1v-1z"></path><path d="M15 11h1v1h-1v-1z"></path><path d="M13 11h1v1h-1v-1z"></path><path d="M11 11h1v1h-1v-1z"></path><path d="M9 11h1v1h-1v-1z"></path><path d="M14 10h1v1h-1v-1z"></path><path d="M12 10h1v1h-1v-1z"></path><path d="M10 10h1v1h-1v-1z"></path><path d="M8 10h1v1h-1v-1z"></path><path d="M15 9h1v1h-1v-1z"></path><path d="M13 9h1v1h-1v-1z"></path><path d="M11 9h1v1h-1v-1z"></path><path d="M9 9h1v1h-1v-1z"></path><path d="M14 8h1v1h-1v-1z"></path><path d="M12 8h1v1h-1v-1z"></path><path d="M10 8h1v1h-1v-1z"></path><path d="M8 8h1v1h-1v-1z"></path></g>
<g id="vaadin:records"><path d="M4 9h4v2h-4v-2z"></path><path d="M16 2h-1v-2h-10v2h-2v1.25l-0.6 0.75h-1.4v1.75l-1 1.25v9h12l4-5v-9zM2 5h8v2h-8v-2zM11 15h-10v-7h10v7zM12 7h-1v-3h-7v-1h8v4zM14 4.5l-1 1.25v-3.75h-7v-1h8v3.5z"></path></g>
<g id="vaadin:recycle"><path d="M8 3.1l1.4 2.2-1.6 1.1 1.3 0.3 2.8 0.6 0.6-2.7 0.4-1.4-1.8 1.1-2-3.3h-2.2l-2.6 4.3 1.7 1z"></path><path d="M16 12l-2.7-4.3-1.7 1 2 3.3h-2.6v-2l-3 3 3 3v-2h3.7z"></path><path d="M2.4 12v0l1.4-2.3 1.7 1.1-0.9-4.2-2.8 0.7-1.3 0.3 1.6 1-2.1 3.4 1.3 2h5.7v-2z"></path></g>
<g id="vaadin:refresh"><path d="M2.6 5.6c0.9-2.1 3-3.6 5.4-3.6 3 0 5.4 2.2 5.9 5h2c-0.5-3.9-3.8-7-7.9-7-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.4-1.4z"></path><path d="M16 9h-4.1l1.5 1.4c-0.9 2.1-3 3.6-5.5 3.6-2.9 0-5.4-2.2-5.9-5h-2c0.5 3.9 3.9 7 7.9 7 3 0 5.6-1.7 7-4.1l1.1 1.1v-4z"></path></g>
<g id="vaadin:reply-all"><path d="M16 8c0-5-4.9-5-4.9-5h-2.1v-3l-6 6 6 6v-3h2.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path><path d="M0 6l6 6v-1.5l-4.5-4.5 4.5-4.5v-1.5z"></path></g>
<g id="vaadin:reply"><path d="M16 8c0-5-4.9-5-4.9-5h-5.1v-3l-6 6 6 6v-3h5.2c3.5 0 1.8 7 1.8 7s3-4.1 3-8z"></path></g>
<g id="vaadin:resize-h"><path d="M0 7h16v2h-16v-2z"></path><path d="M7 6h2v-3h2l-3-3-3 3h2z"></path><path d="M9 10h-2v3h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:resize-v"><path d="M7 0h2v16h-2v-16z"></path><path d="M3 5l-3 3 3 3v-2h3v-2h-3z"></path><path d="M16 8l-3-3v2h-3v2h3v2z"></path></g>
<g id="vaadin:retweet"><path d="M2 1h12v5h2l-3 3-3-3h2v-3h-8v2h-2z"></path><path d="M14 14h-12v-5h-2l3-3 3 3h-2v3h8v-2h2z"></path></g>
<g id="vaadin:rhombus"><path d="M8 0l-8 8 8 8 8-8-8-8zM2 8l6-6 6 6-6 6-6-6z"></path></g>
<g id="vaadin:road-branch"><path d="M16 4h-16v3h3.2l3.8 3.6c1.6 1.5 3.6 2.4 5.8 2.4h3.2v-3h-3.2c-1.4 0-2.7-0.5-3.7-1.5l-1.6-1.5h8.5v-3z"></path></g>
<g id="vaadin:road-branches"><path d="M16 4v-3h-16v3h1.7l7.7 9.5c1.3 1.6 3.1 2.5 5 2.5h1.6v-3h-1.5c-1 0-1.9-0.5-2.7-1.4l-1.3-1.6h5.5v-3h-8l-2.4-3h10.4z"></path></g>
<g id="vaadin:road-split"><path d="M14 13v-1c0-0.2 0-4.1-2.8-5.4-2.2-1-2.2-3.5-2.2-3.6v-3h-2v3c0 0.1 0 2.6-2.2 3.6-2.8 1.3-2.8 5.2-2.8 5.4v1h-2l3 3 3-3h-2v-1c0 0 0-2.8 1.7-3.6 1.1-0.5 1.8-1.3 2.3-2 0.5 0.8 1.2 1.5 2.3 2 1.7 0.8 1.7 3.6 1.7 3.6v1h-2l3 3 3-3h-2z"></path></g>
<g id="vaadin:road"><path d="M9 11v4h7l-4-14h-3v3h-2v-3h-3l-4 14h7v-4h2zM7 6h2v3h-2v-3z"></path></g>
<g id="vaadin:rocket"><path d="M16 0c0 0-3.5-0.4-6.7 2.8-1.6 1.5-2.9 3.5-3.9 5.3l-2.5-0.6-1.6 1.6 2.8 1.4c-0.3 0.6-0.4 1-0.4 1l0.8 0.8c0 0 0.4-0.2 1-0.4l1.4 2.8 1.6-1.6-0.5-2.5c1.7-1 3.8-2.3 5.3-3.8 3.1-3.2 2.7-6.8 2.7-6.8zM12.8 4.8c-0.4 0.4-1.1 0.4-1.6 0-0.4-0.4-0.4-1.1 0-1.6 0.4-0.4 1.1-0.4 1.6 0 0.4 0.4 0.4 1.1 0 1.6z"></path><path d="M4 14.2c-0.8 0.8-2.6 0.4-2.6 0.4s-0.4-1.8 0.4-2.6c0.8-0.8 1.5-0.9 1.5-0.9s-1.3-0.3-2.1 0.6c-1.6 1.6-1 4.2-1 4.2s2.6 0.6 4.2-1c0.9-0.9 0.6-2.2 0.6-2.2s-0.2 0.7-1 1.5z"></path></g>
<g id="vaadin:rotate-left"><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:rotate-right"><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:rss-square"><path d="M0 0v16h16v-16h-16zM3.6 14c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.6 1.6-1.6 1.6zM7.6 14c0-3.1-2.5-5.6-5.6-5.6v-2.4c4.4 0 8 3.6 8 8h-2.4zM11.6 14c0-5.3-4.3-9.6-9.6-9.6v-2.4c6.6 0 12 5.4 12 12h-2.4z"></path></g>
<g id="vaadin:rss"><path d="M4.4 13.8c0 1.215-0.985 2.2-2.2 2.2s-2.2-0.985-2.2-2.2c0-1.215 0.985-2.2 2.2-2.2s2.2 0.985 2.2 2.2z"></path><path d="M10.6 16h-3.1c0-4.1-3.4-7.5-7.5-7.5v0-3.1c5.9 0 10.6 4.7 10.6 10.6z"></path><path d="M12.8 16c0-7.1-5.7-12.8-12.8-12.8v-3.2c8.8 0 16 7.2 16 16h-3.2z"></path></g>
<g id="vaadin:safe-lock"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zM11.13 14.25l-0.37-0.9-0.92 0.38 0.37 0.9c-0.659 0.23-1.419 0.363-2.21 0.363s-1.551-0.133-2.259-0.378l0.419-0.885-0.92-0.38-0.37 0.9c-1.355-0.69-2.43-1.765-3.102-3.080l0.882-0.41-0.38-0.93-0.9 0.37c-0.23-0.659-0.363-1.419-0.363-2.21s0.133-1.551 0.378-2.259l0.885 0.419 0.38-0.92-0.9-0.37c0.691-1.351 1.766-2.423 3.080-3.092l0.41 0.882 0.92-0.38-0.37-0.9c0.659-0.23 1.419-0.363 2.21-0.363s1.551 0.133 2.259 0.378l-0.419 0.885 0.92 0.38 0.37-0.9c1.355 0.69 2.43 1.765 3.102 3.080l-0.882 0.41 0.38 0.92 0.9-0.37c0.23 0.659 0.363 1.419 0.363 2.21s-0.133 1.551-0.378 2.259l-0.885-0.419-0.38 0.92 0.9 0.37c-0.69 1.355-1.765 2.43-3.080 3.102z"></path><path d="M10.36 3.62l-1.16 2.79c-0.329-0.253-0.746-0.407-1.199-0.41h0.279l1.15-2.77c-0.426-0.14-0.917-0.223-1.427-0.23-0.023-0-0.047-0-0.071-0-2.795 0-5.060 2.265-5.060 5.060s2.265 5.060 5.060 5.060c2.795 0 5.060-2.265 5.060-5.060 0-1.904-1.052-3.563-2.606-4.426z"></path></g>
<g id="vaadin:safe"><path d="M1 0v16h3v-1h8v1h3v-16h-14zM14 10h-1v-5h1v5zM14 3h-1v-1h-10v11h10v-1h1v2h-12v-13h12v2zM8.5 7.5c0 1.1-0.9 2-2 2s-2-0.9-2-2 0.9-2 2-2 2 0.9 2 2z"></path><path d="M7.5 7.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scale-unbalance"><path d="M15.81 9l-2.47-4.93 0.83-0.15c0.239-0.044 0.418-0.251 0.418-0.5 0-0.281-0.227-0.508-0.508-0.508-0.032 0-0.063 0.003-0.093 0.009l-0.777 0.14c-0.993-0.755-2.25-1.21-3.613-1.21-0.21 0-0.418 0.011-0.623 0.032-0.036-0.5-0.457-0.882-0.967-0.882-0.003 0-0.005 0-0.008 0-0.552 0-1 0.448-1 1v0.2c-1.714 0.336-3.151 1.327-4.066 2.697l-0.754 0.153c-0.257 0.024-0.457 0.239-0.457 0.5 0 0.277 0.225 0.502 0.502 0.502 0.016 0 0.032-0.001 0.047-0.002l0.088 0 0.35-0.050-2.52 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.56-5.12h0.1c0.172-0.031 0.311-0.144 0.379-0.297 0.021-0.093 0.701-1.583 3.271-2.363v10.78h-1v1h-2v1h8v-1h-2v-1h-1v-11.12c0.201-0.031 0.434-0.049 0.67-0.049 1.152 0 2.205 0.419 3.016 1.114l-0.006-0.005-2.49 5.060h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 11h-4l2-3.94zM11 9l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scale"><path d="M15.81 10l-2.5-5h0.69c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.79c-1.056-1.145-2.541-1.881-4.198-1.95l-0.012-0.050c0-0.552-0.448-1-1-1s-1 0.448-1 1v0.050c-1.681 0.073-3.178 0.807-4.247 1.947l-0.753 0.003c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.69l-2.5 5h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19l-2.55-5.090c0.064-0.039 0.118-0.089 0.159-0.148 0.873-1.019 2.148-1.669 3.575-1.702l0.006 10.94h-1v1h-2v1h8v-1h-2v-1h-1v-10.94c1.418 0.030 2.679 0.682 3.524 1.693 0.053 0.084 0.117 0.145 0.193 0.186l-2.527 5.061h-0.19c0 1.1 1.34 2 3 2s3-0.9 3-2h-0.19zM5 10h-4l2-3.94zM11 10l2-3.94 2 3.94h-4z"></path></g>
<g id="vaadin:scatter-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M5 11c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M8 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M14 5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 10c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:scissors"><path d="M16 3.1c0 0-2.1-1.1-3.5-1-0.3 0-0.5 0.1-0.7 0.2l-4.3 3.4-1.8-1.5c0.1-0.3 0.2-0.6 0.3-1 0.1-1.8-1.4-3.4-3.3-3.2-1.2 0.1-2.3 1-2.6 2.2-0.3 1.3 0.2 2.5 1.2 3.2l3.3 2.6-3.3 2.6c-1 0.7-1.5 1.9-1.2 3.2 0.3 1.2 1.4 2 2.6 2.2 1.9 0.2 3.4-1.4 3.2-3.2 0-0.3-0.1-0.7-0.3-1l1.8-1.5 4.3 3.4c0.2 0.1 0.4 0.2 0.7 0.2 1.4 0.1 3.5-1 3.5-1l-5.7-4.9 5.8-4.9zM2.8 4.6c-0.9-0.1-1.6-0.9-1.5-1.8s0.9-1.6 1.8-1.5c0.9 0.1 1.6 0.9 1.5 1.8 0 0.9-0.9 1.6-1.8 1.5zM3.1 14.7c-0.9 0.1-1.7-0.6-1.8-1.5s0.6-1.7 1.5-1.8c0.9-0.1 1.7 0.6 1.8 1.5s-0.6 1.7-1.5 1.8zM12.4 3.2c0 0 0.1 0 0.2 0 0.4 0 0.9 0.1 1.4 0.2l-6.8 5.7-0.9-1.1 6.1-4.8zM14 12.6c-0.5 0.2-1 0.3-1.4 0.2-0.1 0-0.2 0-0.2 0l-4-3.2 1-0.9 4.6 3.9z"></path></g>
<g id="vaadin:screwdriver"><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:search-minus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M3 5h6v2h-6v-2z"></path></g>
<g id="vaadin:search-plus"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path><path d="M7 3h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path></g>
<g id="vaadin:search"><path d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"></path></g>
<g id="vaadin:select"><path d="M15 4h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6c0-0.6-0.4-1-1-1zM12 9l-2-2h4l-2 2z"></path></g>
<g id="vaadin:server"><path d="M3 5v3h10v-3h-10zM7 7h-3v-1h3v1z"></path><path d="M3 4h10l-2-4h-6z"></path><path d="M3 12h10v-3h-10v3zM11 10h1v1h-1v-1zM9 10h1v1h-1v-1z"></path><path d="M3 16h10v-3h-10v3zM4 14h3v1h-3v-1z"></path></g>
<g id="vaadin:share-square"><path d="M11 3h-3.6c0 0-4.4-0.2-4.4 4.3 0 3.5 2 6.7 2 6.7s-0.4-7 2.3-7h3.7v3l5-5-5-5v3z"></path><path d="M14 9v6h-13v-13h9v-1h-10v15h15v-8z"></path></g>
<g id="vaadin:share"><path d="M10 3h-5.1c0 0-4.9 0-4.9 5 0 3.9 3 8 3 8s-1.7-7 1.8-7h5.2v3l6-6-6-6v3z"></path></g>
<g id="vaadin:shield"><path d="M1 0c0 0 0 3.2 0 7 0 5.6 7 9 7 9s7-3.4 7-9c0-3.8 0-7 0-7h-14zM14 7c0 4.2-4.6 7.1-6 7.9v-13.9h6v6z"></path></g>
<g id="vaadin:shift-arrow"><path d="M8 2l-7 7h4v5h6v-5h4zM10 8v5h-4v-5h-2.5l4.5-4.58 4.5 4.58h-2.5z"></path></g>
<g id="vaadin:shift"><path d="M0 2v12h16v-12h-16zM6 8v3h-2v-3h-2l3-3 3 3h-2z"></path></g>
<g id="vaadin:shop"><path d="M0 15h16v1h-16v-1z"></path><path d="M0 0v6c0.005 0.732 0.401 1.37 0.991 1.715l0.009 6.285h9v-5h3v5h2v-6.28c0.599-0.35 0.995-0.988 1-1.719v-6.001h-16zM4 2h2v4c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4zM2 7c-0.552 0-1-0.448-1-1v-4h2v4c0 0.552-0.448 1-1 1zM8 12h-5v-3h5v3zM9 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM12 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4zM15 6c0 0.552-0.448 1-1 1s-1-0.448-1-1v-4h2v4z"></path></g>
<g id="vaadin:sign-in-alt"><path d="M0 0h2v16h-2v-16z"></path><path d="M3 10h8v3l5-5-5-5v3h-8z"></path></g>
<g id="vaadin:sign-in"><path d="M7 1v2l1 1v-2h7v12h-7v-2l-1 1v2h9v-14z"></path><path d="M10 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:sign-out-alt"><path d="M14 0h2v16h-2v-16z"></path><path d="M8 6h-8v4h8v3l5-5-5-5z"></path></g>
<g id="vaadin:sign-out"><path d="M9 4v-3h-9v14h9v-3h-1v2h-7v-12h7v2z"></path><path d="M16 8l-5-4v2h-5v4h5v2z"></path></g>
<g id="vaadin:signal"><path d="M6.9 13.2l1.1 1.1 1.1-1.1c-0.3-0.3-0.7-0.5-1.1-0.5s-0.9 0.2-1.1 0.5z"></path><path d="M8 4.6c2.7 0 5.1 1.1 6.9 2.8l1.1-1.1c-2-2-4.9-3.3-8-3.3s-6 1.3-8 3.3l1.1 1.1c1.8-1.7 4.2-2.8 6.9-2.8z"></path><path d="M2.3 8.6l1.1 1.1c1.2-1.1 2.8-1.8 4.6-1.8s3.4 0.7 4.6 1.9l1.1-1.1c-1.4-1.6-3.5-2.5-5.7-2.5s-4.3 0.9-5.7 2.4z"></path><path d="M4.6 10.9l1.1 1.1c0.6-0.6 1.4-0.9 2.3-0.9s1.7 0.4 2.3 0.9l1.1-1.1c-0.8-0.9-2.1-1.4-3.4-1.4s-2.6 0.5-3.4 1.4z"></path></g>
<g id="vaadin:sitemap"><path d="M14.5 12v-4.5h-6v-3.5h1.5v-4h-4v4h1.5v3.5h-6v4.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4h-1.5v-3.5h5v3.5h-1.5v4h4v-4z"></path></g>
<g id="vaadin:slider"><path d="M16 6h-3.6c-0.7-1.2-2-2-3.4-2s-2.8 0.8-3.4 2h-5.6v4h5.6c0.7 1.2 2 2 3.4 2s2.8-0.8 3.4-2h3.6v-4zM1 9v-2h4.1c0 0.3-0.1 0.7-0.1 1s0.1 0.7 0.1 1h-4.1zM9 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 1.7-1.3 3-3 3z"></path></g>
<g id="vaadin:sliders"><path d="M7 0h2v3h-2v-3z"></path><path d="M6 4v3h1v9h2v-9h1v-3z"></path><path d="M2 0h2v8h-2v-8z"></path><path d="M1 9v3h1v4h2v-4h1v-3z"></path><path d="M12 0h2v10h-2v-10z"></path><path d="M11 11v3h1v2h2v-2h1v-3z"></path></g>
<g id="vaadin:smiley-o"><path d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path><path d="M8 13.2c-2 0-3.8-1.2-4.6-3.1l0.9-0.4c0.6 1.5 2.1 2.4 3.7 2.4s3.1-1 3.7-2.4l0.9 0.4c-0.8 2-2.6 3.1-4.6 3.1z"></path><path d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></g>
<g id="vaadin:sort"><path d="M11 7h-6l3-4z"></path><path d="M5 9h6l-3 4z"></path></g>
<g id="vaadin:sound-disable"><path d="M4 5h-4v6h4l5 4v-14z"></path><path d="M15.9 5.6l-0.8-0.7-2.3 2.4-2.4-2.4-0.8 0.7 2.4 2.4-2.4 2.4 0.8 0.7 2.4-2.4 2.3 2.4 0.8-0.7-2.4-2.4z"></path></g>
<g id="vaadin:spark-line"><path d="M14 6c-1.105 0-2 0.895-2 2 0 0.060 0 0.11 0 0.16l-0.81 0.25-2.3-3.48-1.73 4.32-1.16-5.81-2.3 4.78-1.64-1.31-2.060 1.090v1.080l1.94-1 2.11 1.7 1.56-3.22 1.23 6.19 2.27-5.68 1.68 2.52 1.55-0.48c0.364 0.54 0.973 0.89 1.664 0.89 1.105 0 2-0.895 2-2s-0.895-2-2-2c-0.001 0-0.003 0-0.004 0zM14 9c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path></g>
<g id="vaadin:specialist"><path d="M4.1 8c0.2 0.6 0.3 1.1 0.3 1.1 0.8 1.3 1.8 1.1 1.8 1.8 0 0.3-0.2 0.6-0.5 0.7l2.3 1.8 2.3-1.7c-0.3-0.2-0.5-0.4-0.5-0.7 0-0.8 1-0.5 1.8-1.8 0 0 0.2-0.4 0.3-1.1v0c0.3-1.1 0.6-3.1 0.5-4.1h-1.5c0-0.3 0.1-0.6 0.1-1h1.1c-0.3-1.4-1-2-2.2-2.3-0.5-0.4-1.2-0.7-1.9-0.7s-1.4 0.3-1.9 0.7c-1.2 0.3-1.8 0.9-2.2 2.3h1.1c0 0.4 0.1 0.7 0.2 1h-1.6c-0.1 1 0.2 3 0.5 4v0zM11.2 8.5c-0.1 0.1-0.2 0.2-0.3 0.3l-0.5 0.6c-0.4 0.5-0.8 0.8-1.4 0.9l-0.4 0.1c-0.4 0.1-0.9 0.1-1.4 0l-0.4-0.1c-0.6-0.2-1.1-0.5-1.5-1.1l-0.2-0.4c-0.1-0.1-0.2-0.2-0.3-0.3l-0.7-0.5 3.1-0.9c0.5-0.1 1-0.2 1.5 0l3.2 0.9-0.7 0.5zM6 3c0-1.1 0.9-2 2-2s2 0.9 2 2c0 1.1-0.9 2-2 2s-2-0.9-2-2z"></path><path d="M15.5 14.2c-1.3-2.4-2.6-2-3.9-2.2 0 0 0 0-0.1 0l-3.5 2.6-3.5-2.6c0 0 0 0-0.1 0-1.4 0.1-2.6-0.2-3.9 2.2-0.2 0.4-0.4 1.1-0.5 1.8h16c-0.1-0.7-0.3-1.4-0.5-1.8z"></path></g>
<g id="vaadin:spinner-arc"><path d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path></g>
<g id="vaadin:spinner-third"><path d="M12.9 3.1c1.3 1.2 2.1 3 2.1 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9 0.8-3.7 2.1-4.9l-0.8-0.8c-1.4 1.5-2.3 3.5-2.3 5.7 0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-0.9-4.2-2.3-5.7l-0.8 0.8z"></path></g>
<g id="vaadin:spinner"><path d="M9.9 0.2l-0.2 1c3 0.8 5.3 3.5 5.3 6.8 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-3.3 2.3-6 5.3-6.8l-0.2-1c-3.5 0.9-6.1 4.1-6.1 7.8 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.7-2.6-6.9-6.1-7.8z"></path></g>
<g id="vaadin:spline-area-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M10 7c-2 0-2.080-1-4-1-2.34 0-4 3-4 3v5h14v-12c-2 0-3.86 5-6 5z"></path></g>
<g id="vaadin:spline-chart"><path d="M1 15v-15h-1v16h16v-1h-15z"></path><path d="M12 5c-0.69 1-1.41 2-2 2-0.026 0.001-0.056 0.001-0.087 0.001-0.601 0-1.164-0.16-1.65-0.44-0.623-0.35-1.387-0.562-2.2-0.562-0.022 0-0.045 0-0.067 0-1.6 0.116-3.009 0.864-3.991 1.993l-0.006 2.347c0.77-1.12 2.32-2.84 4-2.84 0.014-0 0.031-0 0.048-0 0.579 0 1.121 0.156 1.587 0.428 0.643 0.358 1.429 0.573 2.264 0.573 0.035 0 0.071-0 0.106-0.001 1.395 0 2.335-1.32 3.245-2.6s1.75-2.4 2.75-2.4v-1.5c-1.81 0-3 1.61-4 3z"></path></g>
<g id="vaadin:split-h"><path d="M0 1v14h16v-14h-16zM1 4h6.5v10h-6.5v-10zM15 14h-6.5v-10h6.5v10zM15 3h-1v-1h1v1z"></path></g>
<g id="vaadin:split-v"><path d="M0 1v14h16v-14h-16zM14 2h1v1h-1v-1zM15 4v4.5h-14v-4.5h14zM1 14v-4.5h14v4.5h-14z"></path></g>
<g id="vaadin:split"><path d="M0 11h6v5h-6v-5z"></path><path d="M11 10v-2l-0.64 0.64c-0.851-0.81-1.38-1.952-1.38-3.217 0-0.149 0.007-0.296 0.022-0.441l1.999 0.018v-5h-6v5h2c0.013 0.127 0.020 0.274 0.020 0.423 0 1.265-0.529 2.407-1.378 3.216l-0.642-0.638v2h2l-0.65-0.65c1.028-0.991 1.667-2.38 1.667-3.919 0-0.152-0.006-0.302-0.018-0.45-0.010 0.149-0.016 0.299-0.016 0.45 0 1.539 0.639 2.928 1.665 3.917l-0.648 0.652h2z"></path><path d="M10 11h6v5h-6v-5z"></path></g>
<g id="vaadin:spoon"><path d="M10.5 4.8c0-1.8-0.9-4.8-3-4.8s-3 3-3 4.8c0 1.5 0.8 2.8 2.2 3.1-0.5 1.6-0.7 4.6-0.7 4.6v2c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5v-2c0-0.6-0.2-3.2-0.7-4.6 1.4-0.3 2.2-1.6 2.2-3.1z"></path></g>
<g id="vaadin:square-shadow"><path d="M14 2v-2h-14v14h2v2h14v-14h-2zM13 13h-12v-12h12v12z"></path></g>
<g id="vaadin:star-half-left-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8v-9.1l1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star-half-left"><path d="M5.6 5.4l-5.5 0.8 3.9 3.8-0.9 5.5 4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-half-right-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM4.4 13.7l0.7-4-2.9-2.8 4-0.6 1.8-3.6v9.1l-3.6 1.9z"></path></g>
<g id="vaadin:star-half-right"><path d="M10.5 5.4l5.5 0.8-4 3.8 0.9 5.5-4.9-2.6v-12.5z"></path></g>
<g id="vaadin:star-o"><path d="M15.9 6.2l-5.5-0.8-2.4-5-2.4 5-5.5 0.8 3.9 3.8-0.9 5.4 4.9-2.5 4.9 2.6-0.9-5.5 3.9-3.8zM8 11.8l-3.6 1.9 0.7-4-2.9-2.8 4-0.6 1.8-3.6 1.8 3.6 4 0.6-2.9 2.8 0.7 4-3.6-1.9z"></path></g>
<g id="vaadin:star"><path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path></g>
<g id="vaadin:start-cog"><path d="M4 0v6h1.7l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v0.2l6.1-3.4-12-7z"></path><path d="M4.5 10.5c-0.2 0-0.4 0.1-0.5 0.2-0.3 0.2-0.5 0.5-0.5 0.8s0.2 0.7 0.5 0.8c0.1 0.1 0.3 0.2 0.5 0.2 0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path><path d="M9 12v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.3 0.3-0.6 0.4-0.9l1.1-0.3zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:step-backward"><path d="M14 15v-14l-10 7z"></path><path d="M2 1h2v14h-2v-14z"></path></g>
<g id="vaadin:step-forward"><path d="M2 1v14l10-7z"></path><path d="M12 1h2v14h-2v-14z"></path></g>
<g id="vaadin:stethoscope"><path d="M5.7 15.2c0.3 0.3 1 0.8 1.8 0.8 2.7 0 3.3-2 3.4-3.6 0.2-2.3 0.8-2.2 1.1-2.2 0.7 0 0.9 0.4 0.9 1.1-0.6 0.4-1 1-1 1.7 0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2c-0.1 0-0.1 0-0.2 0-0.2-0.9-0.7-1.8-1.8-1.8-1.6 0-2 1.4-2.1 2.9-0.1 2.1-0.8 2.9-2.3 2.9-0.4 0-0.8-0.2-1-0.4-0.6-0.5-0.5-2.3-0.5-2.3 2 0 4-1.8 4.7-4.8l-0.2-0.1c0.3-1.2 0.5-2.6 0.5-3.6 0-1.1-0.3-1.9-1-2.5s-1.5-0.8-2.1-0.8c-0.2-0.3-0.5-0.5-0.9-0.5-0.5 0-1 0.4-1 1s0.4 1 1 1c0.4 0 0.7-0.2 0.8-0.5 0.5 0 1 0.2 1.5 0.6s0.7 0.9 0.7 1.7c0 0.9-0.2 2.2-0.5 3.5l-0.2-0.1c-0.3 1.1-1.3 3.6-3.3 3.6h-1c-2 0-3-2.5-3.3-3.6l-0.2 0.1c-0.3-1.3-0.5-2.6-0.5-3.5 0-0.8 0.2-1.3 0.7-1.7 0.4-0.4 1-0.5 1.5-0.6 0.1 0.3 0.4 0.5 0.8 0.5 0.6 0 1-0.4 1-1s-0.4-1-1-1c-0.4 0-0.7 0.2-0.9 0.5-0.6 0-1.4 0.2-2.1 0.8s-1 1.4-1 2.5c0 1 0.2 2.4 0.5 3.7l-0.2 0.1c0.7 2.9 2.7 4.7 4.7 4.7 0 0-0.1 2.2 0.7 2.9zM14 14c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1-0.5 1-1 1z"></path></g>
<g id="vaadin:stock"><path d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"></path><path d="M0 16h3v-1h10v1h3v-2h-16v2z"></path></g>
<g id="vaadin:stop-cog"><path d="M1 0v7.2l0.5-0.5 1.2 0.6c0 0 0.1 0 0.1 0l0.2-0.6 0.3-0.7h2.4l0.2 0.7 0.2 0.6c0 0 0.1 0 0.1 0l1.2-0.6 1.8 1.8-0.6 1.2c0 0 0 0.1 0 0.1l0.6 0.2 0.7 0.2v2.4l-0.7 0.2-0.6 0.2c0 0 0 0.1 0 0.1l0.6 1.2-0.4 0.7h7.2v-15h-15z"></path><path d="M5.5 11.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path><path d="M7.9 12.4l1.1-0.4v-1l-1.1-0.4c-0.1-0.3-0.2-0.6-0.4-0.9l0.5-1-0.7-0.7-1 0.5c-0.3-0.2-0.6-0.3-0.9-0.4l-0.4-1.1h-1l-0.4 1.1c-0.3 0.1-0.6 0.2-0.9 0.4l-1-0.5-0.7 0.7 0.5 1.1c-0.2 0.3-0.3 0.6-0.4 0.9l-1.1 0.3v1l1.1 0.4c0.1 0.3 0.2 0.6 0.4 0.9l-0.5 1 0.7 0.7 1.1-0.5c0.3 0.2 0.6 0.3 0.9 0.4l0.3 1.1h1l0.4-1.1c0.3-0.1 0.6-0.2 0.9-0.4l1 0.5 0.7-0.7-0.5-1.1c0.2-0.2 0.3-0.5 0.4-0.8zM4.5 13.5c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2c0 1.1-0.9 2-2 2z"></path></g>
<g id="vaadin:stop"><path d="M1 1h14v14h-14v-14z"></path></g>
<g id="vaadin:stopwatch"><path d="M8.5 8.14v-3.64h-1v3.64c-0.301 0.176-0.5 0.498-0.5 0.866 0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.368-0.199-0.69-0.495-0.863z"></path><path d="M8 2c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM8 14.5c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5-0.006 3.035-2.465 5.494-5.499 5.5z"></path><path d="M6 0h4v1.5h-4v-1.5z"></path><path d="M0.005 4.438l2.713-2.939 1.102 1.017-2.713 2.939-1.102-1.017z"></path><path d="M12.186 2.519l1.102-1.017 2.713 2.939-1.102 1.017-2.713-2.939z"></path></g>
<g id="vaadin:storage"><path d="M16 4l-8.060-4-7.94 4v1h1v11h2v-9h10v9h2v-11h1v-1zM4 6v-1h2v1h-2zM7 6v-1h2v1h-2zM10 6v-1h2v1h-2z"></path><path d="M6 9h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M6 13h-1v-1h-1v3h3v-3h-1v1z"></path><path d="M10 13h-1v-1h-1v3h3v-3h-1v1z"></path></g>
<g id="vaadin:strikethrough"><path d="M10.5 7c-0.5-0.3-1-0.5-1.4-0.7-2-0.9-2.1-1.1-2-1.9s0.4-1 0.6-1.2c0.9-0.5 2.8-0.1 3.5 0.2l1.1-2.8c-0.4-0.2-3.7-1.4-6.1 0-0.8 0.5-1.9 1.5-2.1 3.4-0.2 1.3 0.1 2.3 0.7 3h-4.8v1h16v-1h-5.5z"></path><path d="M7.7 9c0 0 0.1 0 0.1 0.1 2 0.9 2.4 1.2 2.2 2.5-0.2 0.9-0.5 1.1-0.8 1.3-1.1 0.6-3.3 0-4.4-0.5l-1.2 2.6c0.3 0.1 2.3 1 4.5 1 0.9 0 1.8-0.2 2.6-0.6 0.9-0.5 2-1.4 2.4-3.4 0.2-1.3 0-2.3-0.4-3.1h-5z"></path></g>
<g id="vaadin:subscript"><path d="M16 15v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:suitcase"><path d="M11 3v-2h-6v2h-5v12h16v-12h-5zM4 14h-1v-10h1v10zM10 3h-4v-1h4v1zM13 14h-1v-10h1v10z"></path></g>
<g id="vaadin:sun-down"><path d="M10 3h-1v-2h-2v2h-1l2 3 2-3z"></path><path d="M14 13l-1.58-1.18 0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:sun-o"><path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path></g>
<g id="vaadin:sun-rise"><path d="M6 4h1v2h2v-2h1l-2-3-2 3z"></path><path d="M12.42 11.82l0.78-1.82-2-0.23-0.2-1.97-1.82 0.78-1.18-1.58-1.18 1.58-1.82-0.78-0.23 2-1.97 0.2 0.78 1.82-1.58 1.18h-2v1h16v-1h-2zM4 13c0.075-2.178 1.822-3.925 3.993-4 2.185 0.075 3.932 1.821 4.007 3.993l-8 0.007z"></path></g>
<g id="vaadin:superscript"><path d="M16 5v1h-4v-1c0 0 3.3-1.6 2.6-3.2-0.5-1.1-2-0.2-2-0.2l-0.5-0.9c0 0 1.9-1.4 3.1-0.2 2.4 2.3-1.4 4.5-1.4 4.5h2.2z"></path><path d="M12 3h-3.4l-2.6 3-2.6-3h-3.4l4.3 5-4.3 5h3.4l2.6-3 2.6 3h3.4l-4.3-5z"></path></g>
<g id="vaadin:sword"><path d="M15.8 0.5l-0.1-0.2-0.2-0.1c-0.1 0-2.5-0.8-4.2 0.9l-6.7 6.6c-0.9-0.6-1.7-1.2-1.8-1l-0.4 0.3c-0.2 0.2 0.9 1.7 1.8 2.7l-2.5 3.4c-0.3-0.3-0.8-0.3-1.1 0l-0.3 0.3c-0.3 0.3-0.3 0.8 0 1.1l1 1c0.3 0.3 0.8 0.3 1.1 0l0.3-0.3c0.3-0.3 0.3-0.8 0-1.1v0l3.5-2.5c1 0.9 2.5 2 2.7 1.8l0.4-0.4c0.1-0.1-0.4-1-1.1-1.8l6.7-6.7c1.7-1.5 0.9-3.9 0.9-4zM7.7 10.5l-0.8-0.8 6.2-6.9-6.9 6.2-0.7-0.7 6.5-6.5c1-1 2.3-0.8 2.9-0.7 0.1 0.6 0.3 1.9-0.7 2.8l-6.5 6.6z"></path></g>
<g id="vaadin:tab-a"><path d="M9 10h-9v-4h9v-2l5 4-5 4v-2z"></path><path d="M14 4h2v8h-2v-8z"></path></g>
<g id="vaadin:tab"><path d="M0 2v12h16v-12h-16zM13 11h-1v-3l-3 3v-2h-6v-2h6v-2l3 3v-3h1v6z"></path></g>
<g id="vaadin:table"><path d="M0 1v15h16v-15h-16zM5 15h-4v-2h4v2zM5 12h-4v-2h4v2zM5 9h-4v-2h4v2zM5 6h-4v-2h4v2zM10 15h-4v-2h4v2zM10 12h-4v-2h4v2zM10 9h-4v-2h4v2zM10 6h-4v-2h4v2zM15 15h-4v-2h4v2zM15 12h-4v-2h4v2zM15 9h-4v-2h4v2zM15 6h-4v-2h4v2z"></path></g>
<g id="vaadin:tablet"><path d="M0 2v12h16v-12h-16zM13 13h-11v-10h11v10zM15 9h-1v-2h1v2z"></path></g>
<g id="vaadin:tabs"><path d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"></path></g>
<g id="vaadin:tag"><path d="M8 1h-7v7l7 7 7-7zM3.75 5c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25s-0.56 1.25-1.25 1.25z"></path></g>
<g id="vaadin:tags"><path d="M9 2h-1.5l7 7-5.3 5.2 0.8 0.8 6-6z"></path><path d="M6 2h-6v6l7 7 6-6-7-7zM2.8 6c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.2 1.2-1.2 1.3 0.5 1.3 1.2-0.6 1.2-1.2 1.2z"></path></g>
<g id="vaadin:tasks"><path d="M6 0h10v4h-10v-4z"></path><path d="M6 6h10v4h-10v-4z"></path><path d="M6 12h10v4h-10v-4z"></path><path d="M3 1v2h-2v-2h2zM4 0h-4v4h4v-4z"></path><path d="M3 13v2h-2v-2h2zM4 12h-4v4h4v-4z"></path><path d="M5.3 5.9l-0.6-0.8-0.9 0.9h-3.8v4h4v-2.8l1.3-1.3zM2.7 7l-0.7 0.7-0.8-0.7h1.5zM1 8.2l0.9 0.8h-0.9v-0.8zM3 9h-0.9l0.9-0.9v0.9z"></path></g>
<g id="vaadin:taxi"><path d="M15 6.1l-1.4-2.9c-0.4-0.7-1.1-1.2-2-1.2h-0.6v-1.3c0-0.4-0.3-0.7-0.7-0.7h-4.6c-0.4 0-0.7 0.3-0.7 0.7v1.3h-0.7c-0.8 0-1.6 0.5-1.9 1.2l-1.4 2.9c-0.6 0.1-1 0.6-1 1.1v3.5c0 0.6 0 1.1 1 1.2v2c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-1.9h8v1.9c0 0.6 0.4 1.1 1 1.1h0.9c0.6 0 1.1-0.5 1.1-1.1v-2c1-0.1 1-0.6 1-1.2v-3.5c0-0.5-0.4-1-1-1.1zM4 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8zM10 11h-4v-1h4v1zM2.1 6l1.2-2.4c0.2-0.4 0.6-0.6 1-0.6h7.4c0.4 0 0.8 0.2 1 0.6l1.2 2.4h-11.8zM15 8.4c0 0.3-0.3 0.6-0.6 0.6h-1.8c-0.3 0-0.6-0.3-0.6-0.6v-0.8c0-0.3 0.3-0.6 0.6-0.6h1.8c0.3 0 0.6 0.3 0.6 0.6v0.8z"></path></g>
<g id="vaadin:teeth"><path d="M4.6 7.6c-0.1 0.1-0.5 0.4-1.6 0.4 1.1 0 1.5 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.5-0.4-0.9 0-1.3-0.2-1.5-0.4z"></path><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.4 0 8-3.6 8-8s-3.6-8-8-8zM13.1 11.6c-1 0-1.4-0.8-1.6-1.6-0.2 0.9-0.6 2-1.8 2-1.1 0-1.5-1.1-1.7-2-0.2 1-0.6 2-1.7 2s-1.6-1.1-1.8-2c-0.2 0.8-0.6 1.6-1.6 1.6-2 0-1.9-3-1.9-3s0.2-0.6 1.7-0.6c-1.5 0-1.7-0.5-1.7-0.5s-0.1-3 1.9-3c1 0 1.4 0.8 1.6 1.6 0.2-0.9 0.6-2 1.8-2 1.1-0.1 1.5 1 1.7 1.9 0.2-1 0.6-2 1.7-2s1.6 1.1 1.8 2c0.2-0.8 0.6-1.6 1.6-1.6 2 0 1.9 3 1.9 3s-0.3 0.6-1.8 0.6c-1.2 0-1.6-0.3-1.8-0.4-0.2 0.2-0.7 0.4-1.6 0.4-1.2 0-1.6-0.2-1.8-0.4-0.1 0.1-0.6 0.4-1.6 0.4 1 0 1.4 0.3 1.6 0.4 0.2-0.2 0.6-0.4 1.8-0.4 1 0 1.4 0.2 1.7 0.4 0-0.1 0.5-0.4 1.7-0.4 1.5 0 1.8 0.6 1.8 0.6s0.1 3-1.9 3z"></path></g>
<g id="vaadin:terminal"><path d="M6 12h9v1h-9v-1z"></path><path d="M1.1 13h1.2l3.7-5-3.7-5h-1.3l3.8 5z"></path></g>
<g id="vaadin:text-height"><path d="M15 3h1l-1.5-3-1.5 3h1v10h-1l1.5 3 1.5-3h-1z"></path><path d="M1 0v3h4v13h3v-13h4v-3z"></path></g>
<g id="vaadin:text-input"><path d="M2 2h1v4h-1v-4z"></path><path d="M1 0c-0.6 0-1 0.4-1 1v14c0 0.6 0.4 1 1 1h15v-16h-15zM13 15h-12v-14h12v14zM15 15v0h-1v-1h1v1zM15 13h-1v-10h1v10zM15 2h-1v-1h1v1z"></path></g>
<g id="vaadin:text-label"><path d="M12.5 4.9c-1.4 0-2.5 0.8-2.6 0.9l1.2 1.6c0 0 0.7-0.5 1.4-0.5 1.4 0 1.5 1.2 1.5 1.6-0.4-0.1-1.1-0.3-2-0.1-1.4 0.3-2.8 2-2.1 3.9 0.7 1.8 3.1 2.1 4.1 0.6v1h2v-5.3c0-2.7-1.9-3.7-3.5-3.7zM11.5 11.4c-0.1-1.9 1.5-1.9 2.5-1.8v1c0 1.2-2.3 2.3-2.5 0.8z"></path><path d="M6.9 14h2.1l-3.2-12h-2.7l-3.1 12h2.1l1-4h2.7l1.1 4zM3.6 8l0.8-3.2 0.9 3.2h-1.7z"></path></g>
<g id="vaadin:text-width"><path d="M15 14.5l-3-1.5v1h-9v-1l-3 1.5 3 1.5v-1h9v1z"></path><path d="M0 0v3h6v9h3v-9h6v-3z"></path></g>
<g id="vaadin:thin-square"><path d="M15 1h-14v14h14v-14zM14 14h-12v-12h12v12z"></path></g>
<g id="vaadin:thumbs-down-o"><path d="M15.6 7.3c0.1-0.3 0.3-0.7 0.2-1.2 0-0.6-0.3-1.1-0.5-1.3 0.1-0.3 0.1-0.6 0-1.1s-0.4-0.8-0.6-1c0.1-0.3 0.1-0.8-0.3-1.4-0.4-1-1.2-1.3-3.6-1.3-1.7 0-3.3 0.8-4.6 1.5-0.4 0.2-1 0.5-1.2 0.5v0h-5v9h5v-0.9l2.7 2.7 1 2.8c0.2 0.2 0.4 0.4 0.8 0.4h0.1c0 0 0 0 0 0 0.5 0 2-0.1 2.4-1.9 0.2-0.9-0.1-2.2-0.5-3.1h2.3c0.7-0.1 2.1-0.6 2.2-2.1 0-0.7-0.2-1.3-0.4-1.6zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1zM13.8 10h-2.5c-0.3 0-0.5 0.1-0.7 0.4-0.2 0.2-0.2 0.5-0.1 0.8 0.5 1.2 0.7 2.2 0.6 2.8-0.2 0.9-0.9 1.1-1.4 1.1l-1-2.7c0-0.1-0.1-0.2-0.2-0.3l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.1v-6c0.4 0 0.8-0.2 1.7-0.6 1.1-0.6 2.7-1.4 4.1-1.4 2.5 0 2.7 0.4 2.9 0.7 0.3 0.5 0.1 0.9 0.1 0.9l-0.2 0.4 0.4 0.3c0 0 0.4 0.2 0.5 0.7 0.1 0.4 0 0.7 0 0.7l-0.3 0.3 0.3 0.3c0 0 0.4 0.3 0.4 0.9 0 0.5-0.2 0.7-0.2 0.7l-0.4 0.3 0.4 0.4c0 0 0.4 0.4 0.3 1.2 0 1.1-1.1 1.2-1.2 1.2z"></path></g>
<g id="vaadin:thumbs-down"><path d="M15.6 7.8c0 0 0.5 0.5 0.4 1.6 0 1.5-1.6 1.6-1.6 1.6h-2.4c-0.2 0-0.3 0.2-0.3 0.4 0.3 0.7 0.8 2.1 0.6 3.1-0.3 1.4-1.5 1.5-1.9 1.5-0.1 0-0.2-0.1-0.2-0.2l-1-2.8c0 0 0-0.1-0.1-0.1l-2.6-2.8c-0.1-0.1-0.2-0.1-0.3-0.1h-0.2v-7h0.2c0.7 0 3.2-2 5.4-2s2.7 0.3 3.1 1c0.4 0.7 0.1 1.3 0.1 1.3s0.5 0.3 0.6 1c0.1 0.7-0.1 1.1-0.1 1.1s0.5 0.4 0.5 1.2c0.1 0.9-0.2 1.2-0.2 1.2z"></path><path d="M0 11h5v-8h-5v8zM2.5 7.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:thumbs-up-o"><path d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z"></path></g>
<g id="vaadin:thumbs-up"><path d="M15.6 8.2c0 0 0.5-0.5 0.4-1.6 0-1.5-1.6-1.6-1.6-1.6h-2.4c-0.2 0-0.3-0.2-0.3-0.4 0.3-0.7 0.8-2.1 0.6-3.1-0.3-1.4-1.5-1.5-1.9-1.5-0.1 0-0.2 0.1-0.2 0.2l-1 2.8c0 0 0 0.1-0.1 0.1l-2.6 2.8c-0.1 0.1-0.2 0.1-0.3 0.1h-0.2v7h0.2c0.7 0 3.2 2 5.4 2s2.7-0.3 3.1-1c0.4-0.7 0.1-1.3 0.1-1.3s0.5-0.3 0.6-1c0.1-0.7-0.1-1.1-0.1-1.1s0.5-0.4 0.5-1.2c0.1-0.9-0.2-1.2-0.2-1.2z"></path><path d="M0 14h5v-8h-5v8zM2.5 10.5c0.6 0 1 0.4 1 1s-0.4 1-1 1-1-0.4-1-1c0-0.6 0.4-1 1-1z"></path></g>
<g id="vaadin:ticket"><path d="M14 3h-12c0 1.1-0.9 2-2 2v6c1.1 0 2 0.9 2 2h12c0-1.1 0.9-2 2-2v0-6c-1.1 0-2-0.9-2-2zM13 12h-10v-8h10v8z"></path><path d="M4 5h8v6h-8v-6z"></path></g>
<g id="vaadin:time-backward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M8 0c-3 0-5.6 1.6-6.9 4.1l-1.1-1.1v4h4l-1.5-1.5c1-2 3.1-3.5 5.5-3.5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.8 0-3.4-0.8-4.5-2.1l-1.5 1.3c1.4 1.7 3.6 2.8 6 2.8 4.4 0 8-3.6 8-8s-3.6-8-8-8z"></path></g>
<g id="vaadin:time-forward"><path d="M8 4h-1v5h4v-1h-3z"></path><path d="M16 7v-4l-1.1 1.1c-1.3-2.5-3.9-4.1-6.9-4.1-4.4 0-8 3.6-8 8s3.6 8 8 8c2.4 0 4.6-1.1 6-2.8l-1.5-1.3c-1.1 1.3-2.7 2.1-4.5 2.1-3.3 0-6-2.7-6-6s2.7-6 6-6c2.4 0 4.5 1.5 5.5 3.5l-1.5 1.5h4z"></path></g>
<g id="vaadin:timer"><path d="M9.060 9.060c0.271-0.271 0.439-0.646 0.439-1.060s-0.168-0.789-0.439-1.060c-0.59-0.59-6.72-4.6-6.72-4.6s4 6.13 4.59 6.72c0.272 0.274 0.649 0.444 1.065 0.444s0.793-0.17 1.065-0.444z"></path><path d="M8 0v3h1v-1.41c3.153 0.495 5.536 3.192 5.536 6.445 0 3.601-2.919 6.52-6.52 6.52s-6.52-2.919-6.52-6.52c0-1.256 0.355-2.428 0.97-3.423l-0.916-1.322c-0.958 1.303-1.533 2.939-1.533 4.71 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8-0.006 0-0.012 0-0.017 0z"></path></g>
<g id="vaadin:toolbox"><path d="M0 8h6v2h4v-2h6v6h-16z"></path><path d="M7 7h2v2h-2v-2z"></path><path d="M11 4v-2h-6v2h-5v3h6v-1h4v1h6v-3h-5zM6 4v-1h4v1h-4z"></path></g>
<g id="vaadin:tools"><path d="M10.3 8.2l-0.9 0.9 0.9 0.9-1.2 1.2 4.3 4.3c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1l-5.2-5.2zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path><path d="M3.6 8l0.9-0.6 1.5-1.7 0.9 0.9 0.9-0.9-0.1-0.1c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.1 1.6 3.7 3.6 4z"></path><path d="M8 10.8l0.9-0.8-0.9-0.9 5.7-5.7 1.2-0.4 1.1-2.2-0.7-0.7-2.3 1-0.5 1.2-5.6 5.7-0.9-0.9-0.8 0.9c0 0 0.8 0.6-0.1 1.5-0.5 0.5-1.3-0.1-2.8 1.4-0.5 0.5-2.1 2.1-2.1 2.1s-0.6 1 0.6 2.2 2.2 0.6 2.2 0.6 1.6-1.6 2.1-2.1c1.4-1.4 0.9-2.3 1.3-2.7 0.9-0.9 1.6-0.2 1.6-0.2zM4.9 10.4l0.7 0.7-3.8 3.8-0.7-0.7z"></path></g>
<g id="vaadin:tooth"><path d="M11.3 16c-1.2 0-1.7-3.9-1.7-4.1-0.1-1.3-1-2.1-1.6-2.2-0.6 0-1.4 0.9-1.6 2.2 0 0.2-0.5 4.1-1.7 4.1s-1.8-4.4-1.9-4.4c-0.2-1.4 0.1-3.4 0.2-4-0.4-1.2-1.8-5.6-0.5-7 0.5-0.4 1.1-0.6 1.9-0.6 0.6 0 1.3 0.1 2 0.3 0.6 0.1 1.1 0.2 1.6 0.2s1-0.1 1.6-0.2c0.7-0.2 1.4-0.3 2-0.3 0.8 0 1.4 0.2 1.8 0.7 1.3 1.4-0.1 5.8-0.5 7 0.1 0.5 0.4 2.5 0.2 3.9 0.1 0-0.5 4.4-1.8 4.4zM8 8.7c1.3 0.1 2.4 1.4 2.6 3.1 0.1 1.2 0.5 2.4 0.7 2.9 0.3-0.6 0.7-2.1 0.9-3.3 0.2-1.4-0.2-3.7-0.2-3.7v-0.2c0.7-2.1 1.4-5.3 0.8-6.1-0.3-0.3-0.7-0.4-1.2-0.4s-1.2 0.1-1.8 0.3c-0.6 0.1-1.2 0.2-1.8 0.2s-1.2-0.1-1.8-0.2c-0.6-0.2-1.3-0.3-1.8-0.3s-0.9 0.1-1.1 0.4c-0.7 0.7 0 4 0.8 6.1v0.2c0 0-0.4 2.3-0.2 3.7 0.2 1.2 0.6 2.7 0.9 3.3 0.2-0.6 0.6-1.7 0.7-2.9 0.1-1.6 1.2-3 2.5-3.1z"></path></g>
<g id="vaadin:touch"><path d="M12.62 6c-0.093-0.023-0.2-0.036-0.31-0.036s-0.217 0.013-0.319 0.038c-0.045-0.33-0.192-0.616-0.402-0.843-0.257-0.259-0.614-0.42-1.008-0.42-0.018 0-0.036 0-0.053 0.001-0-0-0.004-0-0.007-0-0.22 0-0.43 0.044-0.621 0.124-0.062-0.183-0.163-0.336-0.29-0.464-0.261-0.25-0.617-0.403-1.008-0.403-0.036 0-0.072 0.001-0.107 0.004l0.005-0c0.315-0.414 0.505-0.938 0.505-1.506 0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 0.813 0.388 1.535 0.989 1.992l0.006 2.664c-0.554 0.015-1.054 0.233-1.432 0.581-0.568 0.619-0.568 1.579-0.568 2.779 0 0.23 0 0.47 0 0.72 0.032 1.127 0.573 2.121 1.402 2.764l0.358 0.356c1.24 1.27 2.38 1.65 5.020 1.65 2.88 0 4.22-1.61 4.22-5.060v-2.51c0-0.77-0.22-2.12-1.38-2.43zM13 8.35v2.59c0 3.37-1.29 4.060-3.22 4.060-2.6 0-3.4-0.39-4.3-1.33l-0.36-0.37c-0.657-0.468-1.088-1.215-1.12-2.065-0-0.265-0-0.505-0-0.735-0.033-0.178-0.053-0.383-0.053-0.592 0-0.538 0.126-1.047 0.351-1.498 0.186-0.132 0.431-0.228 0.698-0.24l0.003 0.7v-0.22l-0.34 1.5c-0.010 0.022-0.016 0.048-0.016 0.075 0 0.103 0.083 0.186 0.186 0.186 0.075 0 0.14-0.045 0.17-0.11l1-1.211c0.003-0.014 0.005-0.029 0.005-0.045s-0.002-0.031-0.005-0.046l0-5.609c-0-0.012-0.001-0.026-0.001-0.039 0-0.256 0.083-0.492 0.223-0.684 0.091-0.096 0.223-0.158 0.369-0.158 0.010 0 0.020 0 0.030 0.001-0.001-0-0.001-0-0.001-0 0.21 0 0.38 0.17 0.38 0.38 0 0.004-0 0.007-0 0.011l0 3.869c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.32c0.010-0.251 0.217-0.451 0.47-0.451 0.011 0 0.021 0 0.032 0.001 0.023-0.005 0.051-0.008 0.079-0.008 0.232 0 0.42 0.188 0.42 0.42 0 0.010-0 0.020-0.001 0.029l0 1.329c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.64c0.034-0.218 0.22-0.383 0.445-0.383 0.019 0 0.038 0.001 0.057 0.004 0.013-0.002 0.030-0.003 0.047-0.003 0.112 0 0.214 0.043 0.291 0.113 0.1 0.129 0.16 0.294 0.16 0.473 0 0.006-0 0.012-0 0.017l0 0.819c0.003 0.252 0.193 0.459 0.438 0.49 0.021 0.003 0.043 0.004 0.066 0.004 0.241 0 0.442-0.166 0.496-0.39 0.026-0.112 0.082-0.204 0.16-0.273 0.033-0.015 0.071-0.024 0.111-0.024s0.078 0.009 0.112 0.024c0.38 0.249 0.628 0.674 0.628 1.157 0 0.057-0.003 0.113-0.010 0.169l0.001-0.007z"></path></g>
<g id="vaadin:train"><path d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"></path></g>
<g id="vaadin:trash"><path d="M13 3s0-0.51-2-0.8v-0.7c-0.017-0.832-0.695-1.5-1.53-1.5-0 0-0 0-0 0h-3c-0.815 0.017-1.47 0.682-1.47 1.5 0 0 0 0 0 0v0.7c-0.765 0.068-1.452 0.359-2.007 0.806l-0.993-0.006v1h12v-1h-1zM6 1.5c0.005-0.274 0.226-0.495 0.499-0.5l3.001-0c0 0 0.001 0 0.001 0 0.282 0 0.513 0.22 0.529 0.499l0 0.561c-0.353-0.042-0.763-0.065-1.178-0.065-0.117 0-0.233 0.002-0.349 0.006-0.553-0-2.063-0-2.503 0.070v-0.57z"></path><path d="M2 5v1h1v9c1.234 0.631 2.692 1 4.236 1 0.002 0 0.003 0 0.005 0h1.52c0.001 0 0.003 0 0.004 0 1.544 0 3.002-0.369 4.289-1.025l-0.054-8.975h1v-1h-12zM6 13.92q-0.51-0.060-1-0.17v-6.75h1v6.92zM9 14h-2v-7h2v7zM11 13.72c-0.267 0.070-0.606 0.136-0.95 0.184l-0.050-6.904h1v6.72z"></path></g>
<g id="vaadin:tree-table"><path d="M6 10v-2h-2v-1h1v-2h-3v2h1v6h3v-2h-2v-1z"></path><path d="M0 0v16h16v-16h-16zM7 15h-6v-12h6v12zM11 15h-3v-12h3v12zM15 15h-3v-12h3v12z"></path></g>
<g id="vaadin:trendind-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-down"><path d="M16 14h-4l1.29-1.29-4.29-4.3-3 3-6-6v-2.82l6 6 3-3 5.71 5.7 1.28-1.29 0.010 4z"></path></g>
<g id="vaadin:trending-up"><path d="M16 2h-4l1.29 1.29-4.29 4.3-3-3-6 6v2.82l6-6 3 3 5.71-5.7 1.28 1.29 0.010-4z"></path></g>
<g id="vaadin:trophy"><path d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z"></path></g>
<g id="vaadin:truck"><path d="M6 3h10v7h-10v-7z"></path><path d="M15 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path><path d="M13 11c1.3 0 2.4 0.8 2.8 2h0.2v-2h-3z"></path><path d="M5 5h-4l-1 4v4h1.2c0.4-1.2 1.5-2 2.8-2s2.4 0.8 2.8 2h3.4c0.4-1.2 1.5-2 2.8-2h-8v-6zM4 9h-3l0.8-3h2.2v3z"></path><path d="M6 14c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path></g>
<g id="vaadin:twin-col-select"><path d="M0 2v12h16v-12h-16zM7 13h-6v-10h6v10zM15 13h-6v-10h6v10z"></path><path d="M10 4h4v1h-4v-1z"></path><path d="M2 4h4v1h-4v-1z"></path><path d="M2 6h4v1h-4v-1z"></path><path d="M2 8h4v1h-4v-1z"></path></g>
<g id="vaadin:twitter-square"><path d="M0 0v16h16v-16h-16zM12.8 5.6c0 0.1 0 0.2 0 0.3 0 3.3-2.5 7-7 7-1.4 0-2.7-0.4-3.8-1.1 0.2 0 0.4 0 0.6 0 1.2 0 2.2-0.4 3.1-1.1-1.1 0-2-0.7-2.3-1.7 0.2 0 0.3 0 0.5 0s0.4 0 0.6-0.1c-1.1-0.2-2-1.2-2-2.4 0 0 0 0 0 0 0.3 0.2 0.7 0.3 1.1 0.3-0.7-0.4-1.1-1.2-1.1-2 0-0.5 0.1-0.9 0.3-1.2 1.2 1.5 3.1 2.4 5.1 2.5 0-0.2-0.1-0.4-0.1-0.6 0-1.4 1.1-2.5 2.5-2.5 0.7 0 1.3 0.3 1.8 0.8 0.6-0.1 1.1-0.3 1.6-0.6-0.2 0.6-0.6 1.1-1.1 1.4 0.5-0.1 1-0.2 1.4-0.4-0.3 0.6-0.7 1-1.2 1.4z"></path></g>
<g id="vaadin:twitter"><path d="M16 3c-0.6 0.3-1.2 0.4-1.9 0.5 0.7-0.4 1.2-1 1.4-1.8-0.6 0.4-1.3 0.6-2.1 0.8-0.6-0.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 0.3 0 0.5 0.1 0.7-2.7-0.1-5.2-1.4-6.8-3.4-0.3 0.5-0.4 1-0.4 1.7 0 1.1 0.6 2.1 1.5 2.7-0.5 0-1-0.2-1.5-0.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2-0.3 0.1-0.6 0.1-0.9 0.1-0.2 0-0.4 0-0.6-0.1 0.4 1.3 1.6 2.3 3.1 2.3-1.1 0.9-2.5 1.4-4.1 1.4-0.3 0-0.5 0-0.8 0 1.5 0.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3 0-0.1 0-0.3 0-0.4 0.7-0.5 1.3-1.1 1.7-1.8z"></path></g>
<g id="vaadin:umbrella"><path d="M5.36 0.9l-0.27-0.57c-0.083-0.197-0.275-0.333-0.499-0.333-0.1 0-0.193 0.027-0.274 0.074-0.217 0.074-0.372 0.279-0.372 0.52 0 0.087 0.020 0.169 0.056 0.242l0.319 0.577c-6.2 3.49-3.9 10.59-3.9 10.59h0.060c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21l0.12-0.060c0.477-0.742 0.998-1.387 1.58-1.97l3.37 7.070c0.246 0.619 0.729 1.098 1.334 1.335 0.168 0.053 0.343 0.080 0.524 0.080 0.254 0 0.495-0.053 0.713-0.149l0.359-0.176c0.263-0.145 0.462-0.38 0.558-0.662 0.117-0.276 0.183-0.586 0.183-0.913 0-0.401-0.1-0.778-0.277-1.108-0.102-0.189-0.311-0.324-0.551-0.324-0.076 0-0.149 0.014-0.217 0.038-0.182 0.089-0.308 0.277-0.308 0.495 0 0.093 0.023 0.18 0.064 0.257s0.529 1.067-0.101 1.337-1.19-0.73-1.19-0.73l-3.42-7.060c0.372-0.043 0.803-0.067 1.24-0.067s0.868 0.024 1.292 0.072l0.068-0.065c0.25-0.12 0.8-1.64 2.050-2.25s2.78-0.090 3-0.21h0.060s-3.98-6.41-10.62-3.58zM7.36 6.36c-1.034 0.399-1.834 1.209-2.211 2.224-0.55-1.082-0.909-2.375-1.007-3.74-0.142-2.244 0.608-2.924 0.608-2.924l0.77-0.32c1.084 0.101 2.052 0.534 2.816 1.195 0.976 0.895 1.747 2.009 2.233 3.265-0.339-0.021-0.752-0.067-1.175-0.067-0.724 0-1.417 0.134-2.054 0.379z"></path></g>
<g id="vaadin:underline"><path d="M2 15h12v1h-12v-1z"></path><path d="M11 0v8.4c0 1.5-1.1 2.6-2.6 2.6h-0.8c-1.5 0-2.6-1.1-2.6-2.6v-8.4h-3v8.4c0 3.1 2.5 5.6 5.6 5.6h0.9c3.1 0 5.6-2.5 5.6-5.6v-8.4h-3.1z"></path></g>
<g id="vaadin:unlink"><path d="M8 0h1v4h-1v-4z"></path><path d="M8 12h1v4h-1v-4z"></path><path d="M7 9h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1h4v-2h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h4v-2z"></path><path d="M13 5h-4v2h4c0.552 0 1 0.448 1 1s-0.448 1-1 1h-4v2h4c1.657 0 3-1.343 3-3s-1.343-3-3-3z"></path><path d="M4.51 15.44l2.49-3.44h-1.23l-2.080 2.88 0.82 0.56z"></path><path d="M12.49 15.44l-2.49-3.44h1.23l2.080 2.88-0.82 0.56z"></path><path d="M12.49 0.99l-2.49 3.010h1.23l2.080-2.66-0.82-0.35z"></path><path d="M4.51 0.99l2.49 3.010h-1.23l-2.080-2.66 0.82-0.35z"></path></g>
<g id="vaadin:unlock"><path d="M8 8v-3.1c0-2.2-1.8-3.9-3.9-3.9h-0.3c-2.2 0-3.8 1.7-3.8 3.9v2.1h2v-2.1c0-1.1 0.7-1.9 1.8-1.9h0.3c1 0 1.9 0.8 1.9 1.9v3.1h-1l0.1 5c0 0-0.1 3 4.9 3s5-3 5-3v-5h-7zM11 14h-1v-1.8c-0.6 0-1-0.6-1-1.1 0-0.6 0.4-1.1 1-1.1s1 0.4 1 0.9v3.1z"></path></g>
<g id="vaadin:upload-alt"><path d="M0 14h16v2h-16v-2z"></path><path d="M8 0l-5 5h3v8h4v-8h3z"></path></g>
<g id="vaadin:upload"><path d="M11 10v2h-6v-2h-5v6h16v-6h-5zM4 14h-2v-2h2v2z"></path><path d="M13 5l-5-5-5 5h3v6h4v-6z"></path></g>
<g id="vaadin:user-card"><path d="M15 3v10h-14v-10h14zM16 2h-16v12h16v-12z"></path><path d="M8 5h6v1h-6v-1z"></path><path d="M8 7h6v1h-6v-1z"></path><path d="M8 9h3v1h-3v-1z"></path><path d="M5.4 7h-0.4v-0.1c0.6-0.2 1-0.8 1-1.4 0-0.8-0.7-1.5-1.5-1.5s-1.5 0.7-1.5 1.5c0 0.7 0.4 1.2 1 1.4v0.1h-0.4c-0.9 0-1.6 0.7-1.6 1.6v2.4h5v-2.4c0-0.9-0.7-1.6-1.6-1.6z"></path></g>
<g id="vaadin:user-check"><path d="M7.5 14.4c-0.8-0.8-0.8-2 0-2.8s2-0.8 2.8 0l0.6 0.6 1.9-2.1c-0.7-0.4-1.3-0.4-2-0.4-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h8l-1.6-1.6z"></path><path d="M12.8 16h2.1c0 0-0.1-0.9-0.2-2l-1.9 2z"></path><path d="M11 16c-0.3 0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.4 0l1.3 1.3 3.3-3.6c0.4-0.4 1-0.4 1.4-0.1 0.4 0.4 0.4 1 0.1 1.4l-4 4.3c-0.3 0.3-0.5 0.4-0.8 0.4 0 0 0 0 0 0z"></path></g>
<g id="vaadin:user-clock"><path d="M14 13h-3v-3h1v2h2z"></path><path d="M16 12.5c0-2.5-2-4.5-4.5-4.5-0.7 0-1.4 0.2-2 0.5 0.2-0.3 0.8-0.3 1.4-1.2 0 0 2.7-7.3-2.9-7.3s-2.9 7.3-2.9 7.3c0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h10.4c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 1.9-1.6 3.5-3.5 3.5h3.4c0 0 0-0.2 0-0.5 0.6-0.8 1.1-1.8 1.1-3z"></path></g>
<g id="vaadin:user-heart"><path d="M14.2 16h0.6c0 0 0-0.2 0-0.6l-0.6 0.6z"></path><path d="M8.6 13.9c-0.7-0.7-1-1.8-0.8-2.8s0.8-1.8 1.7-2.1c0-0.1-0.1-0.2-0.1-0.2 0-0.6 0.8-0.4 1.4-1.5 0 0 2.7-7.3-2.9-7.3-5.5 0-2.8 7.3-2.8 7.3 0.6 1 1.4 0.8 1.4 1.5s-0.7 0.7-1.4 0.8c-1.1 0.1-2.1-0.1-3.1 1.7-0.6 1.1-0.9 4.7-0.9 4.7h9.6l-2.1-2.1z"></path><path d="M14.9 10.1c-0.2-0.1-0.5-0.1-0.7-0.1-0.7 0-1.3 0.6-1.7 1.1-0.4-0.5-1-1.1-1.7-1.1-0.3 0-0.5 0-0.7 0.1-1.2 0.4-1.4 2-0.5 2.9l3 2.9 3-2.9c0.8-0.9 0.5-2.5-0.7-2.9z"></path></g>
<g id="vaadin:user-star"><path d="M8.92 13.67l-1.61-1.53-1.5-1.42 2-0.29 2.25-0.32 0.29-0.57c-0.006 0-0.013 0-0.020 0-0.482 0-0.884-0.34-0.979-0.794-0.001-0.617 0.799-0.417 1.429-1.457 0.080-0.020 2.82-7.29-2.78-7.29s-2.86 7.27-2.86 7.27c0.63 1 1.44 0.85 1.43 1.45s-0.74 0.8-1.43 0.87c-1.14 0.13-2.14-0.13-3.14 1.76-0.6 1.090-0.85 4.65-0.85 4.65h7.36v-0.17z"></path><path d="M11.72 16h0.56l-0.28-0.14-0.28 0.14z"></path><path d="M12 14.73l2.47 1.27-0.47-2.69 2-1.9-2.76-0.39-1.24-2.45-1.24 2.45-2.76 0.39 2 1.9-0.47 2.69 2.47-1.27z"></path></g>
<g id="vaadin:user"><path d="M8 0c-5.6 0-2.9 7.3-2.9 7.3 0.6 1 1.4 0.8 1.4 1.5 0 0.6-0.7 0.8-1.4 0.9-1.1 0-2.1-0.2-3.1 1.6-0.6 1.1-0.9 4.7-0.9 4.7h13.7c0 0-0.3-3.6-0.8-4.7-1-1.9-2-1.6-3.1-1.7-0.7-0.1-1.4-0.3-1.4-0.9s0.8-0.4 1.4-1.5c0 0.1 2.7-7.2-2.9-7.2z"></path></g>
<g id="vaadin:users"><path d="M5.3 9.7c-0.4 0-0.9-0.2-0.9-0.6s0.5-0.3 0.9-1c0 0 1.8-4.9-1.8-4.9s-1.8 4.9-1.8 4.9c0.4 0.7 0.9 0.6 0.9 1s-0.5 0.6-0.9 0.6c-0.6 0.1-1.1 0-1.7 0.6v5.7h5c0.2-1.7 0.7-5.2 1.1-6.1 0 0 0.1-0.1 0.1-0.1-0.2-0.1-0.5-0.1-0.9-0.1z"></path><path d="M16 9.5c-0.7-0.8-1.3-0.7-2-0.8-0.5-0.1-1.1-0.2-1.1-0.7s0.6-0.3 1.1-1.2c0 0 2.1-5.9-2.2-5.9-4.4 0.1-2.3 6-2.3 6 0.5 0.8 1.1 0.7 1.1 1.1 0 0.5-0.6 0.6-1.1 0.7-0.9 0.1-1.7 0-2.5 1.5-0.4 0.9-1 5.8-1 5.8h10v-6.5z"></path></g>
<g id="vaadin:vaadin-h"><path d="M15.21 0.35c-0.436 0-0.79 0.354-0.79 0.79v0 0.46c0 0.5-0.32 0.85-1.070 0.85h-3.55c-1.61 0-1.73 1.19-1.8 1.83v0c-0.060-0.64-0.18-1.83-1.79-1.83h-3.57c-0.75 0-1.090-0.37-1.090-0.86v-0.45c0-0.006 0-0.013 0-0.020 0-0.425-0.345-0.77-0.77-0.77-0 0-0 0-0 0h0c-0 0-0 0-0 0-0.431 0-0.78 0.349-0.78 0.78 0 0.004 0 0.007 0 0.011v-0.001 1.32c0 1.54 0.7 2.31 2.34 2.31h3.66c1.090 0 1.19 0.46 1.19 0.9 0 0 0 0.090 0 0.13 0.048 0.428 0.408 0.758 0.845 0.758s0.797-0.33 0.845-0.754l0-0.004s0-0.080 0-0.13c0-0.44 0.1-0.9 1.19-0.9h3.61c1.61 0 2.32-0.77 2.32-2.31v-1.32c0-0.436-0.354-0.79-0.79-0.79v0z"></path><path d="M11.21 7.38c-0.012-0-0.026-0.001-0.040-0.001-0.453 0-0.835 0.301-0.958 0.714l-0.002 0.007-2.21 4.21-2.3-4.2c-0.122-0.425-0.507-0.731-0.963-0.731-0.013 0-0.026 0-0.039 0.001l0.002-0c-0.012-0-0.025-0.001-0.039-0.001-0.58 0-1.050 0.47-1.050 1.050 0 0.212 0.063 0.41 0.171 0.575l-0.002-0.004 3.29 6.1c0.15 0.333 0.478 0.561 0.86 0.561s0.71-0.228 0.858-0.555l0.002-0.006 3.34-6.1c0.090-0.152 0.144-0.335 0.144-0.53 0-0.58-0.47-1.050-1.050-1.050-0.005 0-0.010 0-0.014 0h0.001z"></path></g>
<g id="vaadin:vaadin-v"><path d="M5.8 7.16h-0.13c-0.44 0-0.9-0.1-0.9-1.19v-3.62c0-1.64-0.77-2.35-2.31-2.35h-1.32c-0.436 0-0.79 0.354-0.79 0.79v0c0 0.436 0.354 0.79 0.79 0.79v0h0.46c0.5 0 0.85 0.32 0.85 1.070v3.55c0 1.61 1.19 1.73 1.83 1.8v0c-0.64 0.060-1.83 0.18-1.83 1.79v3.55c0 0.75-0.37 1.090-0.86 1.090h-0.45c-0.006-0-0.013-0-0.020-0-0.425 0-0.77 0.345-0.77 0.77 0 0 0 0 0 0v-0c0 0 0 0 0 0 0 0.431 0.349 0.78 0.78 0.78 0.004 0 0.007-0 0.011-0h1.319c1.54 0 2.31-0.7 2.31-2.34v-3.59c0-1.090 0.46-1.19 0.9-1.19h0.13c0.428-0.048 0.758-0.408 0.758-0.845s-0.33-0.797-0.754-0.845l-0.004-0z"></path><path d="M15.1 7.19v0l-6.1-3.32c-0.152-0.090-0.335-0.144-0.53-0.144-0.58 0-1.050 0.47-1.050 1.050 0 0.005 0 0.010 0 0.014v-0.001c-0 0.012-0.001 0.026-0.001 0.040 0 0.453 0.301 0.835 0.714 0.958l0.007 0.002 4.21 2.26-4.24 2.25c-0.425 0.122-0.731 0.507-0.731 0.963 0 0.013 0 0.026 0.001 0.039l-0-0.002c-0 0.012-0.001 0.025-0.001 0.039 0 0.58 0.47 1.050 1.050 1.050 0.212 0 0.41-0.063 0.575-0.171l-0.004 0.002 6.1-3.29c0.333-0.15 0.561-0.478 0.561-0.86s-0.228-0.71-0.555-0.858l-0.006-0.002z"></path></g>
<g id="vaadin:viewport"><path d="M1 4h-1v-4h4v1h-3z"></path><path d="M12 1v-1h4v4h-1v-3z"></path><path d="M15 12h1v4h-4v-1h3z"></path><path d="M4 15v1h-4v-4h1v3z"></path><path d="M13 3v10h-10v-10h10zM14 2h-12v12h12v-12z"></path></g>
<g id="vaadin:vimeo-square"><path d="M0 0v16h16v-16h-16zM13.9 5.3c-0.7 3.8-4.4 7-5.5 7.7s-2.2-0.3-2.5-1.1c-0.4-0.9-1.7-5.7-2-6.1-0.4-0.3-1.4 0.5-1.4 0.5l-0.5-0.7c0 0 2-2.4 3.6-2.7s1.6 2.5 2 4.1c0.4 1.5 0.6 2.4 1 2.4 0.3 0 1-0.9 1.7-2.2s0-2.5-1.4-1.6c0.5-3.3 5.7-4.1 5-0.3z"></path></g>
<g id="vaadin:vimeo"><path d="M15.9 4.4c-0.9 5-5.9 9.3-7.4 10.3s-2.9-0.4-3.4-1.4c-0.5-1.3-2.2-7.6-2.7-8.2-0.4-0.5-1.8 0.6-1.8 0.6l-0.6-0.9c0 0 2.7-3.3 4.8-3.7 2.2-0.4 2.2 3.4 2.7 5.5 0.5 2 0.9 3.2 1.3 3.2s1.3-1.1 2.2-2.9c0.9-1.7 0-3.3-1.9-2.2 0.8-4.3 7.7-5.4 6.8-0.3z"></path></g>
<g id="vaadin:volume-down"><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-off"><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume-up"><path d="M15 8.5c0 2.3-0.8 4.5-2 6.2l0.7 0.8c1.5-1.9 2.4-4.4 2.4-7 0-3.1-1.2-5.9-3.2-8l-0.5 1c1.6 1.8 2.6 4.3 2.6 7z"></path><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:volume"><path d="M11.8 2.4l-0.5 1c1.1 1.4 1.7 3.2 1.7 5.1 0 1.7-0.5 3.2-1.3 4.6l0.7 0.8c1.1-1.5 1.7-3.4 1.7-5.4-0.1-2.3-0.9-4.4-2.3-6.1z"></path><path d="M10.8 4.4l-0.5 1.1c0.5 0.9 0.8 1.9 0.8 3 0 1-0.3 2-0.7 2.9l0.7 0.9c0.6-1.1 1-2.4 1-3.7-0.1-1.6-0.5-3-1.3-4.2z"></path><path d="M4 5h-4v6h4l5 4v-14z"></path></g>
<g id="vaadin:wallet"><path d="M14.5 4h-12.12c-0.057 0.012-0.123 0.018-0.19 0.018-0.552 0-1-0.448-1-1 0-0.006 0-0.013 0-0.019l12.81-0.499v-1.19c0.005-0.041 0.008-0.089 0.008-0.138 0-0.652-0.528-1.18-1.18-1.18-0.049 0-0.097 0.003-0.144 0.009l-11.374 1.849c-0.771 0.289-1.31 1.020-1.31 1.877 0 0.011 0 0.023 0 0.034l-0 10.728c-0 0.003-0 0.006-0 0.010 0 0.828 0.672 1.5 1.5 1.5 0 0 0 0 0 0h13c0 0 0 0 0 0 0.828 0 1.5-0.672 1.5-1.5 0-0.004-0-0.007-0-0.011v-8.999c0-0.012 0.001-0.027 0.001-0.041 0-0.801-0.649-1.45-1.45-1.45-0.018 0-0.036 0-0.053 0.001zM13 11c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5z"></path></g>
<g id="vaadin:warning"><path d="M8 1l-8 14h16l-8-14zM8 13c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM7 10v-4h2v4h-2z"></path></g>
<g id="vaadin:workplace"><path d="M11,3 L11,0 L2,0 L2,14 L0,14 L0,15 L7,15 L7,10 L9,10 L9,8 L14,8 L14,3 L11,3 Z M6,10 L4,10 L4,8 L6,8 L6,10 Z M6,7 L4,7 L4,5 L6,5 L6,7 Z M6,4 L4,4 L4,2 L6,2 L6,4 Z M9,7 L7,7 L7,5 L9,5 L9,7 Z M9,4 L7,4 L7,2 L9,2 L9,4 Z M13,7 L11,7 L11,5 L13,5 L13,7 Z M14,11 L16,11 L16,16 L8,16 L8,11 L10,11 L10,9 L14,9 L14,11 Z" fill-rule="nonzero"></path></g>
<g id="vaadin:wrench"><path d="M15.5 13.4l-7.8-7.8c0.2-0.5 0.3-1 0.3-1.6 0-2.2-1.8-4-4-4-0.6 0-1.1 0.1-1.6 0.3l2.9 2.9-2.1 2.1-2.9-2.9c-0.2 0.5-0.3 1-0.3 1.6 0 2.2 1.8 4 4 4 0.6 0 1.1-0.1 1.6-0.3l7.8 7.8c0.6 0.6 1.5 0.6 2.1 0s0.6-1.5 0-2.1zM6.8 7.6l-1.4-1.4 0.9-0.9 1.4 1.4-0.9 0.9zM14.2 15c-0.4 0-0.8-0.3-0.8-0.8 0-0.4 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 0.5-0.3 0.8-0.8 0.8z"></path></g>
<g id="vaadin:youtube-square"><path d="M7.9 6c0.2 0 0.3-0.2 0.3-0.5v-1.4c0-0.3-0.1-0.5-0.3-0.5s-0.3 0.2-0.3 0.5v1.4c0 0.3 0.1 0.5 0.3 0.5z"></path><path d="M7.1 11.9c-0.1 0.2-0.3 0.3-0.4 0.3s-0.1 0-0.1-0.1c0 0 0-0.1 0-0.2v-2.5h-0.6v2.6c0 0.2 0 0.4 0.1 0.5 0.1 0.2 0.2 0.2 0.4 0.2s0.4-0.1 0.7-0.4v0.4h0.6v-3.3h-0.7v2.5z"></path><path d="M3.8 8.9h0.7v3.8h0.7v-3.8h0.7v-0.7h-2.1z"></path><path d="M9.4 9.3c-0.2 0-0.4 0.2-0.6 0.4v-1.5h-0.6v4.4h0.6v-0.3c0.2 0.2 0.4 0.4 0.6 0.4s0.4-0.1 0.5-0.4c0-0.1 0.1-0.4 0.1-0.7v-1.3c0-0.3 0-0.5-0.1-0.7-0.1-0.1-0.2-0.3-0.5-0.3zM9.4 11.7c0 0.3-0.1 0.4-0.3 0.4-0.1 0-0.2 0-0.3-0.1v-2c0.1-0.1 0.2-0.1 0.3-0.1 0.2 0 0.3 0.2 0.3 0.5v1.3z"></path><path d="M11.3 9.3c-0.3 0-0.5 0.1-0.7 0.3-0.1 0.2-0.2 0.4-0.2 0.8v1.2c0 0.4 0.1 0.6 0.2 0.8 0.2 0.2 0.4 0.3 0.7 0.3s0.6-0.1 0.7-0.4c0.1-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.2 0-0.4v-0.1h-0.6c0 0.2 0 0.4 0 0.4 0 0.2-0.1 0.2-0.3 0.2s-0.3-0.2-0.3-0.5v-0.6h1.2v-0.7c0-0.4-0.1-0.6-0.2-0.8 0 0.1-0.3-0.1-0.6-0.1zM11.6 10.6h-0.6v-0.3c0-0.3 0.1-0.5 0.3-0.5s0.3 0.2 0.3 0.5v0.3z"></path><path d="M0 0v16h16v-16h-16zM9.3 3.1h0.6v2.5c0 0.1 0 0.2 0 0.2 0 0.1 0 0.2 0.1 0.2s0.2-0.1 0.4-0.3v-2.6h0.6v3.3h-0.6v-0.3c-0.2 0.3-0.5 0.4-0.7 0.4s-0.3-0.1-0.4-0.2c0-0.1-0.1-0.3-0.1-0.5v-2.7zM7 4.2c0-0.3 0-0.6 0.2-0.8s0.4-0.3 0.7-0.3c0.3 0 0.5 0.1 0.7 0.3 0.1 0.2 0.2 0.4 0.2 0.8v1.2c0 0.4-0.1 0.6-0.2 0.8-0.2 0.2-0.4 0.3-0.7 0.3s-0.5-0.1-0.7-0.3c-0.2-0.2-0.2-0.4-0.2-0.8v-1.2zM5.3 2l0.5 1.8 0.5-1.8h0.7l-0.8 2.7v1.8h-0.7v-1.8c-0.1-0.4-0.2-0.8-0.4-1.5-0.2-0.4-0.3-0.8-0.5-1.2h0.7zM12.8 12.9c-0.1 0.5-0.6 0.9-1.1 1-1.2 0.1-2.5 0.1-3.7 0.1s-2.5 0-3.7-0.1c-0.5-0.1-1-0.4-1.1-1-0.2-0.8-0.2-1.6-0.2-2.4 0-0.7 0-1.5 0.2-2.3 0.1-0.5 0.6-0.9 1.1-1 1.2-0.1 2.5-0.1 3.7-0.1s2.5 0 3.7 0.1c0.5 0.1 1 0.4 1.1 1 0.2 0.8 0.2 1.6 0.2 2.3 0 0.8 0 1.6-0.2 2.4z"></path></g>
<g id="vaadin:youtube"><path d="M6.6 0h-0.9l-0.6 2.3-0.6-2.3h-1c0.2 0.6 0.4 1.1 0.6 1.7 0.3 0.8 0.5 1.5 0.5 1.9v2.4h0.9v-2.4l1.1-3.6zM9 4.5v-1.5c0-0.5-0.1-0.8-0.3-1.1s-0.5-0.4-0.9-0.4c-0.4 0-0.7 0.2-0.9 0.5-0.2 0.2-0.3 0.5-0.3 1v1.6c0 0.5 0.1 0.8 0.3 1 0.2 0.3 0.5 0.4 0.9 0.4s0.7-0.2 0.9-0.5c0.2-0.1 0.3-0.5 0.3-1zM8.2 4.7c0 0.4-0.1 0.6-0.4 0.6s-0.4-0.2-0.4-0.6v-1.9c0-0.4 0.1-0.6 0.4-0.6s0.4 0.2 0.4 0.6v1.9zM12 6v-4.5h-0.8v3.4c-0.2 0.3-0.3 0.4-0.5 0.4-0.1 0-0.2-0.1-0.2-0.2 0 0 0-0.1 0-0.3v-3.3h-0.8v3.5c0 0.3 0 0.5 0.1 0.7 0 0.2 0.2 0.3 0.5 0.3s0.6-0.2 0.9-0.5v0.5h0.8z"></path><path d="M12.4 10.5c-0.3 0-0.4 0.2-0.4 0.6v0.4h0.8v-0.4c0-0.4-0.1-0.6-0.4-0.6z"></path><path d="M9.5 10.5c-0.1 0-0.3 0.1-0.4 0.2v2.7c0.1 0.1 0.3 0.2 0.4 0.2 0.2 0 0.3-0.2 0.3-0.6v-1.9c0-0.4-0.1-0.6-0.3-0.6z"></path><path d="M14.4 8.3c-0.2-0.7-0.8-1.3-1.4-1.3-1.6-0.2-3.3-0.2-5-0.2s-3.3 0-5 0.2c-0.6 0-1.2 0.6-1.4 1.3-0.2 1-0.2 2.1-0.2 3.1s0 2.1 0.2 3.1c0.2 0.7 0.7 1.2 1.4 1.3 1.7 0.2 3.3 0.2 5 0.2s3.3 0 5-0.2c0.7-0.1 1.3-0.6 1.4-1.3 0.2-1 0.2-2.1 0.2-3.1s0-2.1-0.2-3.1zM5.2 9.2h-1v5.1h-0.9v-5.1h-0.9v-0.9h2.8v0.9zM7.6 14.3h-0.8v-0.5c-0.3 0.4-0.6 0.5-0.9 0.5s-0.4-0.1-0.5-0.3c0-0.1-0.1-0.3-0.1-0.7v-3.5h0.8v3.2c0 0.2 0 0.3 0 0.3 0 0.1 0.1 0.2 0.2 0.2 0.2 0 0.3-0.1 0.5-0.4v-3.3h0.8v4.5zM10.6 12.9c0 0.4 0 0.7-0.1 0.9-0.1 0.3-0.3 0.5-0.6 0.5s-0.6-0.2-0.8-0.5v0.4h-0.8v-5.9h0.8v1.9c0.3-0.3 0.5-0.5 0.8-0.5s0.5 0.2 0.6 0.5c0.1 0.2 0.1 0.5 0.1 0.9v1.8zM13.6 12.2h-1.6v0.8c0 0.4 0.1 0.6 0.4 0.6 0.2 0 0.3-0.1 0.4-0.3 0 0 0-0.2 0-0.5h0.8v0.1c0 0.3 0 0.4 0 0.5 0 0.2-0.1 0.3-0.2 0.5-0.2 0.3-0.5 0.5-1 0.5-0.4 0-0.7-0.2-1-0.5-0.2-0.2-0.3-0.6-0.3-1v-1.5c0-0.5 0.1-0.8 0.2-1 0.2-0.3 0.5-0.5 1-0.5 0.4 0 0.7 0.2 0.9 0.5 0.2 0.2 0.2 0.6 0.2 1v0.8z"></path></g>
</defs></svg>
</vaadin-iconset>`;document.head.appendChild(_l.content);A("vaadin-notification-card",M`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class po extends Y(tt(O)){static get template(){return R`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),ae&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(e){e?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const e=window.innerHeight,i=window.innerWidth>e,a=document.documentElement.clientHeight;i&&a>e?this.style.bottom=`${a-e}px`:this.style.bottom="0"}_onVaadinOverlayClose(e){const t=e.detail.sourceEvent;t&&t.composedPath().indexOf(this)>=0&&e.preventDefault()}}class vo extends Y(O){static get template(){return R`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class yt extends Mr(tt(O)){static get template(){return R`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}static show(e,t){return vl(e)?yt._createAndShowNotification(i=>{Pn(e,i)},t):yt._createAndShowNotification(i=>{i.innerText=e},t)}static _createAndShowNotification(e,t){const i=document.createElement(yt.is);return t&&Number.isFinite(t.duration)&&(i.duration=t.duration),t&&t.position&&(i.position=t.position),t&&t.theme&&i.setAttribute("theme",t.theme),i.renderer=e,document.body.appendChild(i),i.opened=!0,i.addEventListener("opened-changed",a=>{a.detail.value||i.remove()}),i}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),Sr(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}requestContentUpdate(){!this.renderer||this.renderer(this._card,this)}_rendererChanged(e,t,i){if(!i)return;const a=this._oldRenderer!==e;this._oldRenderer=e,a&&(i.innerHTML="",delete i._$litPart$),t&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return yt._container||(yt._container=document.createElement("vaadin-notification-container"),document.body.appendChild(yt._container)),yt._container}_openedChanged(e){e?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const e=()=>{this._card.removeEventListener("animationend",e),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",e),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(!!this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const e=getComputedStyle(this._card).getPropertyValue("animation-name");if(e&&e!=="none"){const t=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",t)};this._card.addEventListener("animationend",t)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(e,t){t&&(clearTimeout(this._durationTimeoutId),e>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),e)))}}customElements.define(po.is,po);customElements.define(vo.is,vo);customElements.define(yt.is,yt);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let fo=0;function ml(r,e=[],t={}){const i=t.moduleId||`custom-style-module-${fo}`;fo+=1;const a=document.createElement("dom-module");r&&a.setAttribute("theme-for",r);const n=!!(e.length&&t.moduleId),o=[].concat(t.include||[]);o.length===0?a.__allStyles=e:n||(a.__partialStyles=e),a.innerHTML=`
    <template>
      ${o.map(s=>`<style include=${s}></style>`)}
      ${n?`<style>${e.map(s=>s.cssText).join(`
`)}</style>`:""}
    </template>
  `,a.register(i)}function i2(r){return zr(r.querySelector("template")).map(e=>Ql(e.textContent))}function r2(){const e=ie.prototype.modules;return Object.keys(e).map(t=>{const i=e[t],a=i.getAttribute("theme-for");return i.__allStyles=i.__allStyles||i2(i).concat(i.__partialStyles||[]),{themeFor:a,moduleId:t,styles:i.__allStyles}})}window.Vaadin=window.Vaadin||{};window.Vaadin.styleModules={getAllThemes:r2,registerStyles:ml};jt&&jt.length>0&&(jt.forEach(r=>{ml(r.themeFor,r.styles,{moduleId:r.moduleId,include:r.include})}),jt.length=0);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fi extends O{static create(e,t){const i=new this;return i.__template=t,i.__component=e,i}static get is(){return"vaadin-template-renderer-templatizer"}constructor(){super(),this.__template=null,this.__component=null,this.__TemplateClass=null,this.__templateInstances=new Set}render(e,t={}){let i=e.__templateInstance;if(this.__hasTemplateInstance(i)&&this.__isTemplateInstanceAttachedToDOM(i)){this.__updateProperties(i,t);return}this.__hasTemplateInstance(i)&&this.__disposeOfTemplateInstance(i),i=this.__createTemplateInstance(t),e.__templateInstance=i,e.innerHTML="",e.appendChild(i.root)}__updateProperties(e,t){e.item===t.item&&e._setPendingProperty("item"),e.__properties=t,e.setProperties(t)}__createTemplateInstance(e){this.__createTemplateClass(e);const t=new this.__TemplateClass(e);return t.__properties=e,this.__templateInstances.add(t),t}__disposeOfTemplateInstance(e){this.__templateInstances.delete(e)}__hasTemplateInstance(e){return this.__templateInstances.has(e)}__isTemplateInstanceAttachedToDOM(e){return e.children.length===0?!1:!!e.children[0].parentElement}__createTemplateClass(e){if(this.__TemplateClass)return;const t=Object.keys(e).reduce((i,a)=>({...i,[a]:!0}),{});this.__TemplateClass=Nt(this.__template,this,{parentModel:!0,instanceProps:t,forwardHostProp(i,a){this.__templateInstances.forEach(n=>{n.forwardHostProp(i,a)})},notifyInstanceProp(i,a,n){let o;o=a.split(".")[0],o=o[0].toUpperCase()+o.slice(1);const s=`_on${o}PropertyChanged`;this[s]&&this[s](i,a,n)}})}}customElements.define(Fi.is,Fi);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $e extends Fi{static get is(){return"vaadin-template-renderer-grid-templatizer"}_onItemPropertyChanged(e,t,i){if(t==="item"||!Array.isArray(this.__grid.items))return;const a=this.__grid.items.indexOf(e.item);t=t.replace(/^item\./,""),t=`items.${a}.${t}`,this.__grid.notifyPath(t,i)}_onExpandedPropertyChanged(e,t,i){e.__properties.expanded!==i&&(i?this.__grid.expandItem(e.item):this.__grid.collapseItem(e.item))}_onSelectedPropertyChanged(e,t,i){e.__properties.selected!==i&&(i?this.__grid.selectItem(e.item):this.__grid.deselectItem(e.item))}_onDetailsOpenedPropertyChanged(e,t,i){e.__properties.detailsOpened!==i&&(i?this.__grid.openItemDetails(e.item):this.__grid.closeItemDetails(e.item))}get __grid(){return this.__component.__gridElement?this.__component:this.__component._grid}}customElements.define($e.is,$e);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Gt(r,e,t=Fi){const i=t.create(r,e),a=(n,o,s)=>{i.render(n,s)};return e.__templatizer=i,a.__templatized=!0,a}function Qt(r,e,t){const i=r[e];if(i&&!i.__templatized){const a=r.localName;throw new Error(`Cannot use both a template and a renderer for <${a} />.`)}r[e]=t}function a2(r){r.__suppressTemplateWarning||r.hasAttribute("suppress-template-warning")||(console.warn(`WARNING: <template> inside <${r.localName}> is deprecated. Use a renderer function instead (see https://vaad.in/template-renderer)`),r.__suppressTemplateWarning=!0)}function n2(r,e){if(e.matches(".row-details")){const t=Gt(r,e,$e);Qt(r,"rowDetailsRenderer",t)}}function o2(r,e){if(e.matches(".header")){const i=Gt(r,e);Qt(r,"headerRenderer",i);return}if(e.matches(".footer")){const i=Gt(r,e);Qt(r,"footerRenderer",i);return}if(e.matches(".editor")){const i=Gt(r,e,$e);Qt(r,"editModeRenderer",i);return}const t=Gt(r,e,$e);Qt(r,"renderer",t)}function s2(r,e){if(a2(r),r.__gridElement){n2(r,e);return}if(r.__gridColumnElement){o2(r,e);return}const t=Gt(r,e);Qt(r,"renderer",t)}function gl(r){ut.getFlattenedNodes(r).filter(e=>e instanceof HTMLTemplateElement).forEach(e=>{e.__templatizer||s2(r,e)})}function l2(r){r.__templateObserver||(r.__templateObserver=new ut(r,()=>{gl(r)}))}window.Vaadin=window.Vaadin||{};window.Vaadin.templateRendererCallback=r=>{gl(r),l2(r)};A("vaadin-radio-button",M`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_radio-button-size: var(--vaadin-radio-button-size, calc(var(--lumo-size-m) / 2));
    }

    :host([has-label]) ::slotted(label) {
      padding-block: var(--lumo-space-xs);
      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);
    }

    [part='radio'] {
      width: var(--_radio-button-size);
      height: var(--_radio-button-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_radio-button-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ni extends Gn(L1(Tr(Er(tt(Y(pt(O))))))){static get is(){return"vaadin-radio-button"}static get template(){return R`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        [part='radio'],
        ::slotted(input),
        ::slotted(label) {
          grid-row: 1;
        }

        [part='radio'],
        ::slotted(input) {
          grid-column: 1;
        }

        [part='radio'] {
          width: var(--vaadin-radio-button-size, 1em);
          height: var(--vaadin-radio-button-size, 1em);
        }

        [part='radio']::before {
          display: block;
          content: '\\202F';
          line-height: var(--vaadin-radio-button-size, 1em);
          contain: paint;
        }

        /* visually hidden */
        ::slotted(input) {
          opacity: 0;
          cursor: inherit;
          margin: 0;
          align-self: stretch;
          -webkit-appearance: none;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div part="radio"></div>
        <slot name="input"></slot>
        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}ready(){super.ready(),this.addController(new Or(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Pr(this.inputElement,this._labelController)),this.addController(new F1(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated()))}__warnDeprecated(){console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-radio-button> is deprecated.
  Please use <label slot="label"> wrapper or the label property instead.`)}}customElements.define(Ni.is,Ni);const h2=M`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;A("vaadin-radio-group",[r0,al,h2],{moduleId:"lumo-radio-group"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _o extends cl(oe(Cr(Le(tt(Y(O)))))){static get is(){return"vaadin-radio-group"}static get template(){return R`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{value:{type:String,notify:!0,value:"",observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup"),this._fieldName=`${this.localName}-${Yn()}`,this._observer=new ut(this,({addedNodes:e,removedNodes:t})=>{this.__filterRadioButtons(e).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(t).forEach(this.__unregisterRadioButton)}),this._tooltipController=new It(this),this.addController(this._tooltipController)}__filterRadioButtons(e){return e.filter(t=>t instanceof Ni)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(e=>e.checked)}get isHorizontalRTL(){return this.getAttribute("dir")==="rtl"&&this._theme!=="vertical"}_onKeyDown(e){super._onKeyDown(e);const t=e.composedPath().find(i=>i instanceof Ni);["ArrowLeft","ArrowUp"].includes(e.key)&&(e.preventDefault(),this.__selectNextRadioButton(t)),["ArrowRight","ArrowDown"].includes(e.key)&&(e.preventDefault(),this.__selectPrevRadioButton(t))}_invalidChanged(e){super._invalidChanged(e),e?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")}__selectNextRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(e,t){const i=(this.__radioButtons.length+e+t)%this.__radioButtons.length,a=this.__radioButtons[i];a.disabled?this.__selectIncRadioButton(i,t):(a.focusElement.focus(),a.focusElement.click())}__registerRadioButton(e){e.name=this._fieldName,e.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(e.disabled=!0),e.checked&&this.__selectRadioButton(e)}__unregisterRadioButton(e){e.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),e.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(e){e.target.checked&&this.__selectRadioButton(e.target)}__valueChanged(e,t){if(!(t===void 0&&e==="")){if(e){const i=this.__radioButtons.find(a=>a.value===e);i?(this.__selectRadioButton(i),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${e}" was not found.`)}else this.__selectRadioButton(null),this.removeAttribute("has-value");t!==void 0&&this.validate()}}__readonlyChanged(e,t){!e&&t===void 0||t!==e&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(e,t){super._disabledChanged(e,t),!(!e&&t===void 0)&&t!==e&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),e||this.validate()}__selectRadioButton(e){e?this.value=e.value:this.value="",this.__radioButtons.forEach(t=>{t.checked=t===e}),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(e=>{this.readonly?e.disabled=e!==this.__selectedRadioButton:e.disabled=this.disabled})}}customElements.define(_o.is,_o);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-text-field",a0,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const c2=r=>class extends dl(r){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_setFocused(t){super._setFocused(t),t||this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_valueChanged(t,i){super._valueChanged(t,i),i!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const d2=r=>class extends o0(r){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const t=this.inputElement;t&&t.value.length>0&&!this.checkValidity()&&(t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=L.debounce(this._inputDebouncer,lt.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(t){this._checkInputValue(),super._onInput(t)}_preventInvalidInputChanged(t){t&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-text-field",ul,{moduleId:"vaadin-text-field-styles"});class mo extends d2(c2(Y(tt(O)))){static get is(){return"vaadin-text-field"}static get template(){return R`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Or(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Pr(this.inputElement,this._labelController)),this._tooltipController=new It(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(mo.is,mo);const u2=M`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;A("vaadin-tooltip-overlay",[Dr,u2],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */A("vaadin-tooltip-overlay",M`
    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let fe;class go extends t0(_t){static get is(){return"vaadin-tooltip-overlay"}static get template(){return fe||(fe=super.template.cloneNode(!0),fe.content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),fe.content.querySelector('[part~="content"]').innerHTML="<slot></slot>"),fe}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(t=>{this.style.setProperty(`--vaadin-tooltip-offset-${t}`,e.getPropertyValue(`--vaadin-tooltip-offset-${t}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),i=e.width/2-t.width/2;if(this.style.left){const a=t.left+i;a>0&&(this.style.left=`${a}px`)}if(this.style.right){const a=parseFloat(this.style.right)+i;a>0&&(this.style.right=`${a}px`)}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),i=e.height/2-t.height/2;this.style.top=`${t.top+i}px`}}}}customElements.define(go.is,go);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const te=500;let yl=te,bl=te,Ml=te;const We=new Set;let _e=!1,me=null,ge=null;class p2{constructor(e){this.host=e}open(e={immediate:!1}){const{immediate:t,hover:i,focus:a}=e,n=i&&this.hoverDelay>0,o=a&&this.focusDelay>0;!t&&(n||o)&&!this.__closeTimeout?this.__warmupTooltip(o):this.__showTooltip()}close(e){!e&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),_e&&(this.__abortCooldown(),this.__scheduleCooldown())}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const e=this.host;return e.focusDelay!=null&&e.focusDelay>0?e.focusDelay:yl}get hoverDelay(){const e=this.host;return e.hoverDelay!=null&&e.hoverDelay>0?e.hoverDelay:bl}get hideDelay(){const e=this.host;return e.hideDelay!=null&&e.hideDelay>0?e.hideDelay:Ml}_isOpened(){return this.host[this.openedProp]}_setOpened(e){this.host[this.openedProp]=e}__flushClosingTooltips(){We.forEach(e=>{e._stateController.close(!0),We.delete(e)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),_e=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(e){this._isOpened()||(_e?this.__showTooltip():this.__scheduleWarmUp(e))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){ge&&(clearTimeout(ge),ge=null)}__abortWarmUp(){me&&(clearTimeout(me),me=null)}__scheduleClose(){this._isOpened()&&(We.add(this.host),this.__closeTimeout=setTimeout(()=>{We.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){ge=setTimeout(()=>{ge=null,_e=!1},this.hideDelay)}__scheduleWarmUp(e){const t=e?this.focusDelay:this.hoverDelay;me=setTimeout(()=>{me=null,_e=!0,this.__showTooltip()},t)}}class yo extends Mr(tt(O)){static get is(){return"vaadin-tooltip"}static get template(){return R`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(e,t)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},_overlayElement:Object,__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(e){yl=e!=null&&e>=0?e:te}static setDefaultHideDelay(e){Ml=e!=null&&e>=0?e:te}static setDefaultHoverDelay(e){bl=e!=null&&e>=0?e:te}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Yn()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(([e])=>{this.__onTargetVisibilityChange(e.isIntersecting)},{threshold:1}),this._stateController=new p2(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computeOpened(e,t,i,a){return a&&(e?t:i)}__computePosition(e,t){return e||t}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(e,t){e?document.addEventListener("keydown",this.__onKeyDown,!0):t&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(e){if(e){const t=this.getRootNode().getElementById(e);t?this.target=t:console.warn(`No element with id="${e}" found to show tooltip.`)}}__targetChanged(e,t){t&&(t.removeEventListener("mouseenter",this.__onMouseEnter),t.removeEventListener("mouseleave",this.__onMouseLeave),t.removeEventListener("focusin",this.__onFocusin),t.removeEventListener("focusout",this.__onFocusout),t.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(t),Kn(t,"aria-describedby",this._uniqueId)),e&&(e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)}),Qn(e,"aria-describedby",this._uniqueId))}__onFocusin(e){this.manual||!Wn()||this.target.contains(e.relatedTarget)||!this.__isShouldShow()||(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0}))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||!this.__isShouldShow()||this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0}))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const t=this.__isTargetHidden;if(this.__isTargetHidden=!e,t&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,t){this._overlayElement&&(e||t)&&this._overlayElement.requestContentUpdate()}__generatorChanged(e,t,i){e&&((t!==this.__oldTextGenerator||i!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=t,this.__oldContext=i)}}customElements.define(yo.is,yo);A("vaadin-progress-bar",M`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const zl=document.createElement("template");zl.innerHTML=`
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
`;document.head.appendChild(zl.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const v2=r=>class extends r{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(t,i,a){const n=this._normalizeValue(t,i,a);this.style.setProperty("--vaadin-progress-value",n)}_valueChanged(t){this.setAttribute("aria-valuenow",t)}_minChanged(t){this.setAttribute("aria-valuemin",t)}_maxChanged(t){this.setAttribute("aria-valuemax",t)}_normalizeValue(t,i,a){let n;return!t&&t!==0?n=0:i>=a?n=1:(n=(t-i)/(a-i),n=Math.min(Math.max(n,0),1)),n}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bo extends tt(Y(v2(O))){static get template(){return R`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(bo.is,bo);A("vaadin-upload",M`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='primary-buttons'] > * {
      display: inline-block;
      white-space: nowrap;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }

    [part='drop-label-icon'] {
      display: inline-block;
    }

    [part='drop-label-icon']::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }

    [part='file-list'] > *:not(:first-child) > * {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload"});const f2=M`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  [part='progress'] {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }

  [part='progress'][complete],
  [part='progress'][error] {
    display: none;
  }
`;A("vaadin-upload-file",[i0,f2],{moduleId:"lumo-upload-file"});/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wl=document.createElement("template");wl.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-upload-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(wl.content);/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mo extends oe(Y(O)){static get template(){return R`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!file.complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!file.error]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[file.name]]</div>
            <div part="status" hidden$="[[!file.status]]" id="status">[[file.status]]</div>
            <div part="error" id="error" hidden$="[[!file.error]]">[[file.error]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!file.held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!file.error]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <vaadin-progress-bar
        part="progress"
        id="progress"
        value$="[[_formatProgressValue(file.progress)]]"
        error$="[[file.error]]"
        indeterminate$="[[file.indeterminate]]"
        uploading$="[[file.uploading]]"
        complete$="[[file.complete]]"
      ></vaadin-progress-bar>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object,i18n:Object,tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}ready(){super.ready(),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const i=Boolean(e);this.hasAttribute(t)!==i&&(i?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(Mo.is,Mo);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ft=document.createElement("div");ft.style.position="fixed";ft.style.clip="rect(0px, 0px, 0px, 0px)";ft.setAttribute("aria-live","polite");document.body.appendChild(ft);let je;function qe(r,e={}){const t=e.mode||"polite",i=e.timeout===void 0?150:e.timeout;t==="alert"?(ft.removeAttribute("aria-live"),ft.removeAttribute("role"),je=L.debounce(je,Lt,()=>{ft.setAttribute("role","alert")})):(je&&je.cancel(),ft.removeAttribute("role"),ft.setAttribute("aria-live",t)),ft.textContent="",setTimeout(()=>{ft.textContent=r},i)}/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zo extends tt(Y(O)){static get template(){return R`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }

        [part='file-list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>

      <div part="primary-buttons">
        <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
          <slot name="add-button">
            <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
              [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
            </vaadin-button>
          </slot>
        </div>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon">
            <div part="drop-label-icon"></div>
          </slot>
          <slot name="drop-label" id="dropLabel"> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]</slot>
        </div>
      </div>
      <slot name="file-list">
        <ul id="fileList" part="file-list">
          <template is="dom-repeat" items="[[files]]" as="file">
            <li>
              <vaadin-upload-file file="[[file]]" i18n="[[i18n]]"></vaadin-upload-file>
            </li>
          </template>
        </ul>
      </slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:kr},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this))}_formatSize(e){if(typeof this.i18n.formatSize=="function")return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),a=Math.max(0,Math.min(3,i-1));return`${parseFloat((e/t**i).toFixed(a))} ${this.i18n.units.size[i]}`}_splitTimeByUnits(e){const t=[60,60,24,1/0],i=[0];for(let a=0;a<t.length&&e>0;a++)i[a]=e%t[a],e=Math.floor(e/t[a]);return i}_formatTime(e,t){if(typeof this.i18n.formatTime=="function")return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(i=>(i<10?"0":"")+i).join(":")}_formatFileProgress(e){const t=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${t})`}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),!this.nodrop&&!this._dragover&&(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if(typeof this.headers=="string")try{this.headers=JSON.parse(this.headers)}catch{this.headers=void 0}Object.entries(this.headers).forEach(([t,i])=>{e.setRequestHeader(t,i)}),this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,a){e.elapsed=a,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(a*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/a/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=e||this.files,e=e.filter(t=>!t.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),i=e.xhr=this._createXhr();let a,n;i.upload.onprogress=h=>{clearTimeout(a),n=Date.now();const c=(n-t)/1e3,d=h.loaded,_=h.total,m=~~(d/_*100);e.loaded=d,e.progress=m,e.indeterminate=d<=0||d>=_,e.error?e.indeterminate=e.status=void 0:e.abort||(m<100?(this._setStatus(e,_,d,c),a=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(i.readyState===4){if(clearTimeout(a),e.indeterminate=e.uploading=!1,e.abort){this._notifyFileChanges(e);return}if(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0})))return;i.status===0?e.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)}};const o=new FormData;if(e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0})))return;o.append(e.formDataName,e,e.name),i.open(this.method,e.uploadTarget,!0),this._configureXhr(i),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:i,formData:o},cancelable:!0}))&&i.send(o)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){const t=`files.${this.files.indexOf(e)}.`;Object.keys(e).forEach(i=>{this.notifyPath(t+i,e[i])})}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));return}if(this.maxFileSize>=0&&e.size>this.maxFileSize){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));return}const t=e.name.match(/\.[^.]*$|$/)[0],i=this.accept.replace(/[+.]/g,"\\$&"),a=new RegExp(`^(${i.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")})$`,"i");if(this.accept&&!(a.test(e.type)||a.test(t))){this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}));return}e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)}_removeFile(e){this.files.indexOf(e)>-1&&(this.files=this.files.filter(t=>t!==e))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_onFileReject(e){qe(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_onUploadStart(e){qe(`${e.detail.file.name}: 0%`,{mode:"alert"})}_onUploadSuccess(e){qe(`${e.detail.file.name}: 100%`,{mode:"alert"})}_onUploadError(e){qe(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return e===1?t.one:t.many}_isMultiple(e){return e!==1}}customElements.define(zo.is,zo);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Al=document.createElement("template");Al.innerHTML=`<vaadin-iconset name="lumo" size="1000">
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs>
</svg>
</vaadin-iconset>`;document.head.appendChild(Al.content);const _2=M`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;A("vaadin-vertical-layout",_2,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wo extends tt(Y(O)){static get template(){return R`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(wo.is,wo);(function(){function r(o){return window.Vaadin.Flow.tryCatchWrapper(o,"Vaadin Context Menu")}function e(o,s){try{return window.Vaadin.Flow.clients[o].getByNodeId(s)}catch(l){console.error("Could not get node %s from app %s",s,o),console.error(l)}}function t(o,s){o.$connector||(o.$connector={generateItems:r(l=>{const h=i(s,l);o.items=h})})}function i(o,s){const l=e(o,s);if(!!l)return Array.from(l.children).map(h=>{const c={component:h,checked:h._checked,theme:h.__theme};return h.localName=="vaadin-context-menu-item"&&h._containerNodeId&&(c.children=i(o,h._containerNodeId)),h._item=c,c})}function a(o,s){o._item&&(o._item.checked=s)}function n(o,s){o._item&&(o._item.theme=s)}window.Vaadin.Flow.contextMenuConnector={initLazy(...o){return r(t)(...o)},generateItemsTree(...o){return r(i)(...o)},setChecked(...o){return r(a)(...o)},setTheme(...o){return r(n)(...o)}}})();(function(){function r(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Context Menu Target")}function e(t){t.$contextMenuTargetConnector||(t.$contextMenuTargetConnector={openOnHandler:r(function(i){i.preventDefault(),i.stopPropagation(),this.$contextMenuTargetConnector.openEvent=i;let a={};t.getContextMenuBeforeOpenDetail&&(a=t.getContextMenuBeforeOpenDetail(i)),t.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:a}))}),updateOpenOn:r(function(i){this.removeListener(),this.openOnEventType=i,customElements.whenDefined("vaadin-context-menu").then(r(()=>{xt[i]?at(t,i,this.openOnHandler):t.addEventListener(i,this.openOnHandler)}))}),removeListener:r(function(){this.openOnEventType&&(xt[this.openOnEventType]?E1(t,this.openOnEventType,this.openOnHandler):t.removeEventListener(this.openOnEventType,this.openOnHandler))}),openMenu:r(function(i){i.open(this.openEvent)}),removeConnector:r(function(){this.removeListener(),t.$contextMenuTargetConnector=void 0})})}window.Vaadin.Flow.contextMenuTargetConnector={init(...t){return r(e)(...t)}}})();function K(r,e){if(e.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+e.length+" present")}function Qe(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qe=function(t){return typeof t}:Qe=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qe(r)}function m2(r){return K(1,arguments),r instanceof Date||Qe(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function Ke(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ke=function(t){return typeof t}:Ke=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ke(r)}function it(r){K(1,arguments);var e=Object.prototype.toString.call(r);return r instanceof Date||Ke(r)==="object"&&e==="[object Date]"?new Date(r.getTime()):typeof r=="number"||e==="[object Number]"?new Date(r):((typeof r=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function ga(r){if(K(1,arguments),!m2(r)&&typeof r!="number")return!1;var e=it(r);return!isNaN(Number(e))}function nt(r){if(r===null||r===!0||r===!1)return NaN;var e=Number(r);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function g2(r,e){K(2,arguments);var t=it(r).getTime(),i=nt(e);return new Date(t+i)}function Cl(r,e){K(2,arguments);var t=nt(e);return g2(r,-t)}var y2=864e5;function b2(r){K(1,arguments);var e=it(r),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),a=t-i;return Math.floor(a/y2)+1}function ne(r){K(1,arguments);var e=1,t=it(r),i=t.getUTCDay(),a=(i<e?7:0)+i-e;return t.setUTCDate(t.getUTCDate()-a),t.setUTCHours(0,0,0,0),t}function xl(r){K(1,arguments);var e=it(r),t=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(t+1,0,4),i.setUTCHours(0,0,0,0);var a=ne(i),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var o=ne(n);return e.getTime()>=a.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function M2(r){K(1,arguments);var e=xl(r),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var i=ne(t);return i}var z2=6048e5;function El(r){K(1,arguments);var e=it(r),t=ne(e).getTime()-M2(e).getTime();return Math.round(t/z2)+1}var w2={};function se(){return w2}function Bt(r,e){var t,i,a,n,o,s,l,h;K(1,arguments);var c=se(),d=nt((t=(i=(a=(n=e==null?void 0:e.weekStartsOn)!==null&&n!==void 0?n:e==null||(o=e.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&a!==void 0?a:c.weekStartsOn)!==null&&i!==void 0?i:(l=c.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&t!==void 0?t:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=it(r),m=_.getUTCDay(),y=(m<d?7:0)+m-d;return _.setUTCDate(_.getUTCDate()-y),_.setUTCHours(0,0,0,0),_}function s0(r,e){var t,i,a,n,o,s,l,h;K(1,arguments);var c=it(r),d=c.getUTCFullYear(),_=se(),m=nt((t=(i=(a=(n=e==null?void 0:e.firstWeekContainsDate)!==null&&n!==void 0?n:e==null||(o=e.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:_.firstWeekContainsDate)!==null&&i!==void 0?i:(l=_.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(d+1,0,m),y.setUTCHours(0,0,0,0);var C=Bt(y,e),b=new Date(0);b.setUTCFullYear(d,0,m),b.setUTCHours(0,0,0,0);var x=Bt(b,e);return c.getTime()>=C.getTime()?d+1:c.getTime()>=x.getTime()?d:d-1}function A2(r,e){var t,i,a,n,o,s,l,h;K(1,arguments);var c=se(),d=nt((t=(i=(a=(n=e==null?void 0:e.firstWeekContainsDate)!==null&&n!==void 0?n:e==null||(o=e.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:c.firstWeekContainsDate)!==null&&i!==void 0?i:(l=c.locale)===null||l===void 0||(h=l.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&t!==void 0?t:1),_=s0(r,e),m=new Date(0);m.setUTCFullYear(_,0,d),m.setUTCHours(0,0,0,0);var y=Bt(m,e);return y}var C2=6048e5;function Tl(r,e){K(1,arguments);var t=it(r),i=Bt(t,e).getTime()-A2(t,e).getTime();return Math.round(i/C2)+1}function D(r,e){for(var t=r<0?"-":"",i=Math.abs(r).toString();i.length<e;)i="0"+i;return t+i}var x2={y:function(e,t){var i=e.getUTCFullYear(),a=i>0?i:1-i;return D(t==="yy"?a%100:a,t.length)},M:function(e,t){var i=e.getUTCMonth();return t==="M"?String(i+1):D(i+1,2)},d:function(e,t){return D(e.getUTCDate(),t.length)},a:function(e,t){var i=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.toUpperCase();case"aaa":return i;case"aaaaa":return i[0];case"aaaa":default:return i==="am"?"a.m.":"p.m."}},h:function(e,t){return D(e.getUTCHours()%12||12,t.length)},H:function(e,t){return D(e.getUTCHours(),t.length)},m:function(e,t){return D(e.getUTCMinutes(),t.length)},s:function(e,t){return D(e.getUTCSeconds(),t.length)},S:function(e,t){var i=t.length,a=e.getUTCMilliseconds(),n=Math.floor(a*Math.pow(10,i-3));return D(n,t.length)}};const Pt=x2;var Ut={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},E2={G:function(e,t,i){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return i.era(a,{width:"abbreviated"});case"GGGGG":return i.era(a,{width:"narrow"});case"GGGG":default:return i.era(a,{width:"wide"})}},y:function(e,t,i){if(t==="yo"){var a=e.getUTCFullYear(),n=a>0?a:1-a;return i.ordinalNumber(n,{unit:"year"})}return Pt.y(e,t)},Y:function(e,t,i,a){var n=s0(e,a),o=n>0?n:1-n;if(t==="YY"){var s=o%100;return D(s,2)}return t==="Yo"?i.ordinalNumber(o,{unit:"year"}):D(o,t.length)},R:function(e,t){var i=xl(e);return D(i,t.length)},u:function(e,t){var i=e.getUTCFullYear();return D(i,t.length)},Q:function(e,t,i){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return D(a,2);case"Qo":return i.ordinalNumber(a,{unit:"quarter"});case"QQQ":return i.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return i.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return i.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,i){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return D(a,2);case"qo":return i.ordinalNumber(a,{unit:"quarter"});case"qqq":return i.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return i.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return i.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,i){var a=e.getUTCMonth();switch(t){case"M":case"MM":return Pt.M(e,t);case"Mo":return i.ordinalNumber(a+1,{unit:"month"});case"MMM":return i.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return i.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return i.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,i){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return D(a+1,2);case"Lo":return i.ordinalNumber(a+1,{unit:"month"});case"LLL":return i.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return i.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return i.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,i,a){var n=Tl(e,a);return t==="wo"?i.ordinalNumber(n,{unit:"week"}):D(n,t.length)},I:function(e,t,i){var a=El(e);return t==="Io"?i.ordinalNumber(a,{unit:"week"}):D(a,t.length)},d:function(e,t,i){return t==="do"?i.ordinalNumber(e.getUTCDate(),{unit:"date"}):Pt.d(e,t)},D:function(e,t,i){var a=b2(e);return t==="Do"?i.ordinalNumber(a,{unit:"dayOfYear"}):D(a,t.length)},E:function(e,t,i){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return i.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return i.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return i.day(a,{width:"short",context:"formatting"});case"EEEE":default:return i.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,i,a){var n=e.getUTCDay(),o=(n-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return D(o,2);case"eo":return i.ordinalNumber(o,{unit:"day"});case"eee":return i.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return i.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return i.day(n,{width:"short",context:"formatting"});case"eeee":default:return i.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,i,a){var n=e.getUTCDay(),o=(n-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return D(o,t.length);case"co":return i.ordinalNumber(o,{unit:"day"});case"ccc":return i.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return i.day(n,{width:"narrow",context:"standalone"});case"cccccc":return i.day(n,{width:"short",context:"standalone"});case"cccc":default:return i.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,i){var a=e.getUTCDay(),n=a===0?7:a;switch(t){case"i":return String(n);case"ii":return D(n,t.length);case"io":return i.ordinalNumber(n,{unit:"day"});case"iii":return i.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return i.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return i.day(a,{width:"short",context:"formatting"});case"iiii":default:return i.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,i){var a=e.getUTCHours(),n=a/12>=1?"pm":"am";switch(t){case"a":case"aa":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,i){var a=e.getUTCHours(),n;switch(a===12?n=Ut.noon:a===0?n=Ut.midnight:n=a/12>=1?"pm":"am",t){case"b":case"bb":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,i){var a=e.getUTCHours(),n;switch(a>=17?n=Ut.evening:a>=12?n=Ut.afternoon:a>=4?n=Ut.morning:n=Ut.night,t){case"B":case"BB":case"BBB":return i.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return i.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return i.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,i){if(t==="ho"){var a=e.getUTCHours()%12;return a===0&&(a=12),i.ordinalNumber(a,{unit:"hour"})}return Pt.h(e,t)},H:function(e,t,i){return t==="Ho"?i.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Pt.H(e,t)},K:function(e,t,i){var a=e.getUTCHours()%12;return t==="Ko"?i.ordinalNumber(a,{unit:"hour"}):D(a,t.length)},k:function(e,t,i){var a=e.getUTCHours();return a===0&&(a=24),t==="ko"?i.ordinalNumber(a,{unit:"hour"}):D(a,t.length)},m:function(e,t,i){return t==="mo"?i.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Pt.m(e,t)},s:function(e,t,i){return t==="so"?i.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Pt.s(e,t)},S:function(e,t){return Pt.S(e,t)},X:function(e,t,i,a){var n=a._originalDate||e,o=n.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return Co(o);case"XXXX":case"XX":return Dt(o);case"XXXXX":case"XXX":default:return Dt(o,":")}},x:function(e,t,i,a){var n=a._originalDate||e,o=n.getTimezoneOffset();switch(t){case"x":return Co(o);case"xxxx":case"xx":return Dt(o);case"xxxxx":case"xxx":default:return Dt(o,":")}},O:function(e,t,i,a){var n=a._originalDate||e,o=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Ao(o,":");case"OOOO":default:return"GMT"+Dt(o,":")}},z:function(e,t,i,a){var n=a._originalDate||e,o=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Ao(o,":");case"zzzz":default:return"GMT"+Dt(o,":")}},t:function(e,t,i,a){var n=a._originalDate||e,o=Math.floor(n.getTime()/1e3);return D(o,t.length)},T:function(e,t,i,a){var n=a._originalDate||e,o=n.getTime();return D(o,t.length)}};function Ao(r,e){var t=r>0?"-":"+",i=Math.abs(r),a=Math.floor(i/60),n=i%60;if(n===0)return t+String(a);var o=e||"";return t+String(a)+o+D(n,2)}function Co(r,e){if(r%60===0){var t=r>0?"-":"+";return t+D(Math.abs(r)/60,2)}return Dt(r,e)}function Dt(r,e){var t=e||"",i=r>0?"-":"+",a=Math.abs(r),n=D(Math.floor(a/60),2),o=D(a%60,2);return i+n+t+o}const T2=E2;var xo=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Ol=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},O2=function(e,t){var i=e.match(/(P+)(p+)?/)||[],a=i[1],n=i[2];if(!n)return xo(e,t);var o;switch(a){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",xo(a,t)).replace("{{time}}",Ol(n,t))},P2={p:Ol,P:O2};const ya=P2;function Pl(r){var e=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return e.setUTCFullYear(r.getFullYear()),r.getTime()-e.getTime()}var S2=["D","DD"],I2=["YY","YYYY"];function Sl(r){return S2.indexOf(r)!==-1}function Il(r){return I2.indexOf(r)!==-1}function Bi(r,e,t){if(r==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(r==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var k2={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},D2=function(e,t,i){var a,n=k2[e];return typeof n=="string"?a=n:t===1?a=n.one:a=n.other.replace("{{count}}",t.toString()),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"in "+a:a+" ago":a};const R2=D2;function Gr(r){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):r.defaultWidth,i=r.formats[t]||r.formats[r.defaultWidth];return i}}var $2={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},L2={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},F2={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},N2={date:Gr({formats:$2,defaultWidth:"full"}),time:Gr({formats:L2,defaultWidth:"full"}),dateTime:Gr({formats:F2,defaultWidth:"full"})};const B2=N2;var H2={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},V2=function(e,t,i,a){return H2[e]};const Y2=V2;function ye(r){return function(e,t){var i=t!=null&&t.context?String(t.context):"standalone",a;if(i==="formatting"&&r.formattingValues){var n=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):n;a=r.formattingValues[o]||r.formattingValues[n]}else{var s=r.defaultWidth,l=t!=null&&t.width?String(t.width):r.defaultWidth;a=r.values[l]||r.values[s]}var h=r.argumentCallback?r.argumentCallback(e):e;return a[h]}}var U2={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},W2={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},j2={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},q2={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},G2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Q2={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},K2=function(e,t){var i=Number(e),a=i%100;if(a>20||a<10)switch(a%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},X2={ordinalNumber:K2,era:ye({values:U2,defaultWidth:"wide"}),quarter:ye({values:W2,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:ye({values:j2,defaultWidth:"wide"}),day:ye({values:q2,defaultWidth:"wide"}),dayPeriod:ye({values:G2,defaultWidth:"wide",formattingValues:Q2,defaultFormattingWidth:"wide"})};const Z2=X2;function be(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.width,a=i&&r.matchPatterns[i]||r.matchPatterns[r.defaultMatchWidth],n=e.match(a);if(!n)return null;var o=n[0],s=i&&r.parsePatterns[i]||r.parsePatterns[r.defaultParseWidth],l=Array.isArray(s)?tp(s,function(d){return d.test(o)}):J2(s,function(d){return d.test(o)}),h;h=r.valueCallback?r.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;var c=e.slice(o.length);return{value:h,rest:c}}}function J2(r,e){for(var t in r)if(r.hasOwnProperty(t)&&e(r[t]))return t}function tp(r,e){for(var t=0;t<r.length;t++)if(e(r[t]))return t}function ep(r){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(r.matchPattern);if(!i)return null;var a=i[0],n=e.match(r.parsePattern);if(!n)return null;var o=r.valueCallback?r.valueCallback(n[0]):n[0];o=t.valueCallback?t.valueCallback(o):o;var s=e.slice(a.length);return{value:o,rest:s}}}var ip=/^(\d+)(th|st|nd|rd)?/i,rp=/\d+/i,ap={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},np={any:[/^b/i,/^(a|c)/i]},op={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},sp={any:[/1/i,/2/i,/3/i,/4/i]},lp={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},hp={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},cp={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},dp={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},up={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},pp={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},vp={ordinalNumber:ep({matchPattern:ip,parsePattern:rp,valueCallback:function(e){return parseInt(e,10)}}),era:be({matchPatterns:ap,defaultMatchWidth:"wide",parsePatterns:np,defaultParseWidth:"any"}),quarter:be({matchPatterns:op,defaultMatchWidth:"wide",parsePatterns:sp,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:be({matchPatterns:lp,defaultMatchWidth:"wide",parsePatterns:hp,defaultParseWidth:"any"}),day:be({matchPatterns:cp,defaultMatchWidth:"wide",parsePatterns:dp,defaultParseWidth:"any"}),dayPeriod:be({matchPatterns:up,defaultMatchWidth:"any",parsePatterns:pp,defaultParseWidth:"any"})};const fp=vp;var _p={code:"en-US",formatDistance:R2,formatLong:B2,formatRelative:Y2,localize:Z2,match:fp,options:{weekStartsOn:0,firstWeekContainsDate:1}};const kl=_p;var mp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,yp=/^'([^]*?)'?$/,bp=/''/g,Mp=/[a-zA-Z]/;function zp(r,e,t){var i,a,n,o,s,l,h,c,d,_,m,y,C,b,x,E,$,J;K(2,arguments);var W=String(e),N=se(),et=(i=(a=t==null?void 0:t.locale)!==null&&a!==void 0?a:N.locale)!==null&&i!==void 0?i:kl,ot=nt((n=(o=(s=(l=t==null?void 0:t.firstWeekContainsDate)!==null&&l!==void 0?l:t==null||(h=t.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&s!==void 0?s:N.firstWeekContainsDate)!==null&&o!==void 0?o:(d=N.locale)===null||d===void 0||(_=d.options)===null||_===void 0?void 0:_.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(ot>=1&&ot<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var vt=nt((m=(y=(C=(b=t==null?void 0:t.weekStartsOn)!==null&&b!==void 0?b:t==null||(x=t.locale)===null||x===void 0||(E=x.options)===null||E===void 0?void 0:E.weekStartsOn)!==null&&C!==void 0?C:N.weekStartsOn)!==null&&y!==void 0?y:($=N.locale)===null||$===void 0||(J=$.options)===null||J===void 0?void 0:J.weekStartsOn)!==null&&m!==void 0?m:0);if(!(vt>=0&&vt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!et.localize)throw new RangeError("locale must contain localize property");if(!et.formatLong)throw new RangeError("locale must contain formatLong property");var ht=it(r);if(!ga(ht))throw new RangeError("Invalid time value");var mt=Pl(ht),Tt=Cl(ht,mt),gt={firstWeekContainsDate:ot,weekStartsOn:vt,locale:et,_originalDate:ht},le=W.match(gp).map(function(Q){var u=Q[0];if(u==="p"||u==="P"){var p=ya[u];return p(Q,et.formatLong)}return Q}).join("").match(mp).map(function(Q){if(Q==="''")return"'";var u=Q[0];if(u==="'")return wp(Q);var p=T2[u];if(p)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Il(Q)&&Bi(Q,e,String(r)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Sl(Q)&&Bi(Q,e,String(r)),p(Tt,Q,et.localize,gt);if(u.match(Mp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+u+"`");return Q}).join("");return le}function wp(r){var e=r.match(yp);return e?e[1].replace(bp,"'"):r}function Ap(r,e){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}function Xe(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xe=function(t){return typeof t}:Xe=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xe(r)}function Dl(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&ba(r,e)}function ba(r,e){return ba=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},ba(r,e)}function Rl(r){var e=xp();return function(){var i=Hi(r),a;if(e){var n=Hi(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Cp(this,a)}}function Cp(r,e){return e&&(Xe(e)==="object"||typeof e=="function")?e:Ma(r)}function Ma(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Hi(r){return Hi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Hi(r)}function l0(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Eo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function h0(r,e,t){return e&&Eo(r.prototype,e),t&&Eo(r,t),r}function za(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Ep=10,$l=function(){function r(){l0(this,r),za(this,"subPriority",0)}return h0(r,[{key:"validate",value:function(t,i){return!0}}]),r}(),Tp=function(r){Dl(t,r);var e=Rl(t);function t(i,a,n,o,s){var l;return l0(this,t),l=e.call(this),l.value=i,l.validateValue=a,l.setValue=n,l.priority=o,s&&(l.subPriority=s),l}return h0(t,[{key:"validate",value:function(a,n){return this.validateValue(a,this.value,n)}},{key:"set",value:function(a,n,o){return this.setValue(a,n,this.value,o)}}]),t}($l),Op=function(r){Dl(t,r);var e=Rl(t);function t(){var i;l0(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),za(Ma(i),"priority",Ep),za(Ma(i),"subPriority",-1),i}return h0(t,[{key:"set",value:function(a,n){if(n.timestampIsSet)return a;var o=new Date(0);return o.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),o.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),o}}]),t}($l);function Pp(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function To(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Sp(r,e,t){return e&&To(r.prototype,e),t&&To(r,t),r}var I=function(){function r(){Pp(this,r)}return Sp(r,[{key:"run",value:function(t,i,a,n){var o=this.parse(t,i,a,n);return o?{setter:new Tp(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}},{key:"validate",value:function(t,i,a){return!0}}]),r}();function Ze(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ze=function(t){return typeof t}:Ze=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ze(r)}function Ip(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Oo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function kp(r,e,t){return e&&Oo(r.prototype,e),t&&Oo(r,t),r}function Dp(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&wa(r,e)}function wa(r,e){return wa=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},wa(r,e)}function Rp(r){var e=Lp();return function(){var i=Vi(r),a;if(e){var n=Vi(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return $p(this,a)}}function $p(r,e){return e&&(Ze(e)==="object"||typeof e=="function")?e:Aa(r)}function Aa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Lp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vi(r){return Vi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Vi(r)}function Po(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Fp=function(r){Dp(t,r);var e=Rp(t);function t(){var i;Ip(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Po(Aa(i),"priority",140),Po(Aa(i),"incompatibleTokens",["R","u","t","T"]),i}return kp(t,[{key:"parse",value:function(a,n,o){switch(n){case"G":case"GG":case"GGG":return o.era(a,{width:"abbreviated"})||o.era(a,{width:"narrow"});case"GGGGG":return o.era(a,{width:"narrow"});case"GGGG":default:return o.era(a,{width:"wide"})||o.era(a,{width:"abbreviated"})||o.era(a,{width:"narrow"})}}},{key:"set",value:function(a,n,o){return n.era=o,a.setUTCFullYear(o,0,1),a.setUTCHours(0,0,0,0),a}}]),t}(I),Np=6e4,Bp=36e5,Hp=1e3,q={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},bt={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function G(r,e){return r&&{value:e(r.value),rest:r.rest}}function B(r,e){var t=e.match(r);return t?{value:parseInt(t[0],10),rest:e.slice(t[0].length)}:null}function Mt(r,e){var t=e.match(r);if(!t)return null;if(t[0]==="Z")return{value:0,rest:e.slice(1)};var i=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,n=t[3]?parseInt(t[3],10):0,o=t[5]?parseInt(t[5],10):0;return{value:i*(a*Bp+n*Np+o*Hp),rest:e.slice(t[0].length)}}function Ll(r){return B(q.anyDigitsSigned,r)}function V(r,e){switch(r){case 1:return B(q.singleDigit,e);case 2:return B(q.twoDigits,e);case 3:return B(q.threeDigits,e);case 4:return B(q.fourDigits,e);default:return B(new RegExp("^\\d{1,"+r+"}"),e)}}function Yi(r,e){switch(r){case 1:return B(q.singleDigitSigned,e);case 2:return B(q.twoDigitsSigned,e);case 3:return B(q.threeDigitsSigned,e);case 4:return B(q.fourDigitsSigned,e);default:return B(new RegExp("^-?\\d{1,"+r+"}"),e)}}function c0(r){switch(r){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Fl(r,e){var t=e>0,i=t?e:1-e,a;if(i<=50)a=r||100;else{var n=i+50,o=Math.floor(n/100)*100,s=r>=n%100;a=r+o-(s?100:0)}return t?a:1-a}function Nl(r){return r%400===0||r%4===0&&r%100!==0}function Je(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Je=function(t){return typeof t}:Je=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Je(r)}function Vp(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function So(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Yp(r,e,t){return e&&So(r.prototype,e),t&&So(r,t),r}function Up(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ca(r,e)}function Ca(r,e){return Ca=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Ca(r,e)}function Wp(r){var e=qp();return function(){var i=Ui(r),a;if(e){var n=Ui(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return jp(this,a)}}function jp(r,e){return e&&(Je(e)==="object"||typeof e=="function")?e:xa(r)}function xa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qp(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ui(r){return Ui=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Ui(r)}function Io(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Gp=function(r){Up(t,r);var e=Wp(t);function t(){var i;Vp(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Io(xa(i),"priority",130),Io(xa(i),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),i}return Yp(t,[{key:"parse",value:function(a,n,o){var s=function(h){return{year:h,isTwoDigitYear:n==="yy"}};switch(n){case"y":return G(V(4,a),s);case"yo":return G(o.ordinalNumber(a,{unit:"year"}),s);default:return G(V(n.length,a),s)}}},{key:"validate",value:function(a,n){return n.isTwoDigitYear||n.year>0}},{key:"set",value:function(a,n,o){var s=a.getUTCFullYear();if(o.isTwoDigitYear){var l=Fl(o.year,s);return a.setUTCFullYear(l,0,1),a.setUTCHours(0,0,0,0),a}var h=!("era"in n)||n.era===1?o.year:1-o.year;return a.setUTCFullYear(h,0,1),a.setUTCHours(0,0,0,0),a}}]),t}(I);function ti(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ti=function(t){return typeof t}:ti=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ti(r)}function Qp(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ko(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Kp(r,e,t){return e&&ko(r.prototype,e),t&&ko(r,t),r}function Xp(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ea(r,e)}function Ea(r,e){return Ea=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Ea(r,e)}function Zp(r){var e=tv();return function(){var i=Wi(r),a;if(e){var n=Wi(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Jp(this,a)}}function Jp(r,e){return e&&(ti(e)==="object"||typeof e=="function")?e:Ta(r)}function Ta(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wi(r){return Wi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Wi(r)}function Do(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var ev=function(r){Xp(t,r);var e=Zp(t);function t(){var i;Qp(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Do(Ta(i),"priority",130),Do(Ta(i),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),i}return Kp(t,[{key:"parse",value:function(a,n,o){var s=function(h){return{year:h,isTwoDigitYear:n==="YY"}};switch(n){case"Y":return G(V(4,a),s);case"Yo":return G(o.ordinalNumber(a,{unit:"year"}),s);default:return G(V(n.length,a),s)}}},{key:"validate",value:function(a,n){return n.isTwoDigitYear||n.year>0}},{key:"set",value:function(a,n,o,s){var l=s0(a,s);if(o.isTwoDigitYear){var h=Fl(o.year,l);return a.setUTCFullYear(h,0,s.firstWeekContainsDate),a.setUTCHours(0,0,0,0),Bt(a,s)}var c=!("era"in n)||n.era===1?o.year:1-o.year;return a.setUTCFullYear(c,0,s.firstWeekContainsDate),a.setUTCHours(0,0,0,0),Bt(a,s)}}]),t}(I);function ei(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ei=function(t){return typeof t}:ei=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ei(r)}function iv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ro(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function rv(r,e,t){return e&&Ro(r.prototype,e),t&&Ro(r,t),r}function av(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Oa(r,e)}function Oa(r,e){return Oa=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Oa(r,e)}function nv(r){var e=sv();return function(){var i=ji(r),a;if(e){var n=ji(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return ov(this,a)}}function ov(r,e){return e&&(ei(e)==="object"||typeof e=="function")?e:Pa(r)}function Pa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ji(r){return ji=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ji(r)}function $o(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var lv=function(r){av(t,r);var e=nv(t);function t(){var i;iv(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),$o(Pa(i),"priority",130),$o(Pa(i),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),i}return rv(t,[{key:"parse",value:function(a,n){return Yi(n==="R"?4:n.length,a)}},{key:"set",value:function(a,n,o){var s=new Date(0);return s.setUTCFullYear(o,0,4),s.setUTCHours(0,0,0,0),ne(s)}}]),t}(I);function ii(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ii=function(t){return typeof t}:ii=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ii(r)}function hv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Lo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function cv(r,e,t){return e&&Lo(r.prototype,e),t&&Lo(r,t),r}function dv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Sa(r,e)}function Sa(r,e){return Sa=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Sa(r,e)}function uv(r){var e=vv();return function(){var i=qi(r),a;if(e){var n=qi(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return pv(this,a)}}function pv(r,e){return e&&(ii(e)==="object"||typeof e=="function")?e:Ia(r)}function Ia(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function qi(r){return qi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},qi(r)}function Fo(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var fv=function(r){dv(t,r);var e=uv(t);function t(){var i;hv(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Fo(Ia(i),"priority",130),Fo(Ia(i),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),i}return cv(t,[{key:"parse",value:function(a,n){return Yi(n==="u"?4:n.length,a)}},{key:"set",value:function(a,n,o){return a.setUTCFullYear(o,0,1),a.setUTCHours(0,0,0,0),a}}]),t}(I);function ri(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ri=function(t){return typeof t}:ri=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ri(r)}function _v(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function No(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function mv(r,e,t){return e&&No(r.prototype,e),t&&No(r,t),r}function gv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&ka(r,e)}function ka(r,e){return ka=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},ka(r,e)}function yv(r){var e=Mv();return function(){var i=Gi(r),a;if(e){var n=Gi(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return bv(this,a)}}function bv(r,e){return e&&(ri(e)==="object"||typeof e=="function")?e:Da(r)}function Da(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Mv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Gi(r){return Gi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Gi(r)}function Bo(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var zv=function(r){gv(t,r);var e=yv(t);function t(){var i;_v(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Bo(Da(i),"priority",120),Bo(Da(i),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),i}return mv(t,[{key:"parse",value:function(a,n,o){switch(n){case"Q":case"QQ":return V(n.length,a);case"Qo":return o.ordinalNumber(a,{unit:"quarter"});case"QQQ":return o.quarter(a,{width:"abbreviated",context:"formatting"})||o.quarter(a,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(a,{width:"wide",context:"formatting"})||o.quarter(a,{width:"abbreviated",context:"formatting"})||o.quarter(a,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(a,n){return n>=1&&n<=4}},{key:"set",value:function(a,n,o){return a.setUTCMonth((o-1)*3,1),a.setUTCHours(0,0,0,0),a}}]),t}(I);function ai(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ai=function(t){return typeof t}:ai=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ai(r)}function wv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ho(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Av(r,e,t){return e&&Ho(r.prototype,e),t&&Ho(r,t),r}function Cv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ra(r,e)}function Ra(r,e){return Ra=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Ra(r,e)}function xv(r){var e=Tv();return function(){var i=Qi(r),a;if(e){var n=Qi(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Ev(this,a)}}function Ev(r,e){return e&&(ai(e)==="object"||typeof e=="function")?e:$a(r)}function $a(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Tv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qi(r){return Qi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Qi(r)}function Vo(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Ov=function(r){Cv(t,r);var e=xv(t);function t(){var i;wv(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Vo($a(i),"priority",120),Vo($a(i),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),i}return Av(t,[{key:"parse",value:function(a,n,o){switch(n){case"q":case"qq":return V(n.length,a);case"qo":return o.ordinalNumber(a,{unit:"quarter"});case"qqq":return o.quarter(a,{width:"abbreviated",context:"standalone"})||o.quarter(a,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(a,{width:"wide",context:"standalone"})||o.quarter(a,{width:"abbreviated",context:"standalone"})||o.quarter(a,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(a,n){return n>=1&&n<=4}},{key:"set",value:function(a,n,o){return a.setUTCMonth((o-1)*3,1),a.setUTCHours(0,0,0,0),a}}]),t}(I);function ni(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ni=function(t){return typeof t}:ni=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ni(r)}function Pv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Yo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Sv(r,e,t){return e&&Yo(r.prototype,e),t&&Yo(r,t),r}function Iv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&La(r,e)}function La(r,e){return La=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},La(r,e)}function kv(r){var e=Rv();return function(){var i=Ki(r),a;if(e){var n=Ki(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Dv(this,a)}}function Dv(r,e){return e&&(ni(e)==="object"||typeof e=="function")?e:Fa(r)}function Fa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Rv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ki(r){return Ki=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Ki(r)}function Uo(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var $v=function(r){Iv(t,r);var e=kv(t);function t(){var i;Pv(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Uo(Fa(i),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),Uo(Fa(i),"priority",110),i}return Sv(t,[{key:"parse",value:function(a,n,o){var s=function(h){return h-1};switch(n){case"M":return G(B(q.month,a),s);case"MM":return G(V(2,a),s);case"Mo":return G(o.ordinalNumber(a,{unit:"month"}),s);case"MMM":return o.month(a,{width:"abbreviated",context:"formatting"})||o.month(a,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(a,{width:"wide",context:"formatting"})||o.month(a,{width:"abbreviated",context:"formatting"})||o.month(a,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(a,n){return n>=0&&n<=11}},{key:"set",value:function(a,n,o){return a.setUTCMonth(o,1),a.setUTCHours(0,0,0,0),a}}]),t}(I);function oi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?oi=function(t){return typeof t}:oi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oi(r)}function Lv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Wo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Fv(r,e,t){return e&&Wo(r.prototype,e),t&&Wo(r,t),r}function Nv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Na(r,e)}function Na(r,e){return Na=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Na(r,e)}function Bv(r){var e=Vv();return function(){var i=Xi(r),a;if(e){var n=Xi(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Hv(this,a)}}function Hv(r,e){return e&&(oi(e)==="object"||typeof e=="function")?e:Ba(r)}function Ba(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Xi(r){return Xi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Xi(r)}function jo(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Yv=function(r){Nv(t,r);var e=Bv(t);function t(){var i;Lv(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),jo(Ba(i),"priority",110),jo(Ba(i),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),i}return Fv(t,[{key:"parse",value:function(a,n,o){var s=function(h){return h-1};switch(n){case"L":return G(B(q.month,a),s);case"LL":return G(V(2,a),s);case"Lo":return G(o.ordinalNumber(a,{unit:"month"}),s);case"LLL":return o.month(a,{width:"abbreviated",context:"standalone"})||o.month(a,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(a,{width:"wide",context:"standalone"})||o.month(a,{width:"abbreviated",context:"standalone"})||o.month(a,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(a,n){return n>=0&&n<=11}},{key:"set",value:function(a,n,o){return a.setUTCMonth(o,1),a.setUTCHours(0,0,0,0),a}}]),t}(I);function Uv(r,e,t){K(2,arguments);var i=it(r),a=nt(e),n=Tl(i,t)-a;return i.setUTCDate(i.getUTCDate()-n*7),i}function si(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?si=function(t){return typeof t}:si=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},si(r)}function Wv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function qo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function jv(r,e,t){return e&&qo(r.prototype,e),t&&qo(r,t),r}function qv(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ha(r,e)}function Ha(r,e){return Ha=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Ha(r,e)}function Gv(r){var e=Kv();return function(){var i=Zi(r),a;if(e){var n=Zi(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Qv(this,a)}}function Qv(r,e){return e&&(si(e)==="object"||typeof e=="function")?e:Va(r)}function Va(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Kv(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zi(r){return Zi=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Zi(r)}function Go(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Xv=function(r){qv(t,r);var e=Gv(t);function t(){var i;Wv(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Go(Va(i),"priority",100),Go(Va(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),i}return jv(t,[{key:"parse",value:function(a,n,o){switch(n){case"w":return B(q.week,a);case"wo":return o.ordinalNumber(a,{unit:"week"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){return n>=1&&n<=53}},{key:"set",value:function(a,n,o,s){return Bt(Uv(a,o,s),s)}}]),t}(I);function Zv(r,e){K(2,arguments);var t=it(r),i=nt(e),a=El(t)-i;return t.setUTCDate(t.getUTCDate()-a*7),t}function li(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?li=function(t){return typeof t}:li=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},li(r)}function Jv(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Qo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function tf(r,e,t){return e&&Qo(r.prototype,e),t&&Qo(r,t),r}function ef(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ya(r,e)}function Ya(r,e){return Ya=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Ya(r,e)}function rf(r){var e=nf();return function(){var i=Ji(r),a;if(e){var n=Ji(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return af(this,a)}}function af(r,e){return e&&(li(e)==="object"||typeof e=="function")?e:Ua(r)}function Ua(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function nf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ji(r){return Ji=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Ji(r)}function Ko(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var of=function(r){ef(t,r);var e=rf(t);function t(){var i;Jv(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Ko(Ua(i),"priority",100),Ko(Ua(i),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),i}return tf(t,[{key:"parse",value:function(a,n,o){switch(n){case"I":return B(q.week,a);case"Io":return o.ordinalNumber(a,{unit:"week"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){return n>=1&&n<=53}},{key:"set",value:function(a,n,o){return ne(Zv(a,o))}}]),t}(I);function hi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?hi=function(t){return typeof t}:hi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(r)}function sf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Xo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function lf(r,e,t){return e&&Xo(r.prototype,e),t&&Xo(r,t),r}function hf(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Wa(r,e)}function Wa(r,e){return Wa=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Wa(r,e)}function cf(r){var e=uf();return function(){var i=tr(r),a;if(e){var n=tr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return df(this,a)}}function df(r,e){return e&&(hi(e)==="object"||typeof e=="function")?e:ci(r)}function ci(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function uf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tr(r){return tr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},tr(r)}function Qr(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var pf=[31,28,31,30,31,30,31,31,30,31,30,31],vf=[31,29,31,30,31,30,31,31,30,31,30,31],ff=function(r){hf(t,r);var e=cf(t);function t(){var i;sf(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Qr(ci(i),"priority",90),Qr(ci(i),"subPriority",1),Qr(ci(i),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),i}return lf(t,[{key:"parse",value:function(a,n,o){switch(n){case"d":return B(q.date,a);case"do":return o.ordinalNumber(a,{unit:"date"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){var o=a.getUTCFullYear(),s=Nl(o),l=a.getUTCMonth();return s?n>=1&&n<=vf[l]:n>=1&&n<=pf[l]}},{key:"set",value:function(a,n,o){return a.setUTCDate(o),a.setUTCHours(0,0,0,0),a}}]),t}(I);function di(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?di=function(t){return typeof t}:di=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},di(r)}function _f(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Zo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function mf(r,e,t){return e&&Zo(r.prototype,e),t&&Zo(r,t),r}function gf(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&ja(r,e)}function ja(r,e){return ja=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},ja(r,e)}function yf(r){var e=Mf();return function(){var i=er(r),a;if(e){var n=er(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return bf(this,a)}}function bf(r,e){return e&&(di(e)==="object"||typeof e=="function")?e:ui(r)}function ui(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Mf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function er(r){return er=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},er(r)}function Kr(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var zf=function(r){gf(t,r);var e=yf(t);function t(){var i;_f(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Kr(ui(i),"priority",90),Kr(ui(i),"subpriority",1),Kr(ui(i),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),i}return mf(t,[{key:"parse",value:function(a,n,o){switch(n){case"D":case"DD":return B(q.dayOfYear,a);case"Do":return o.ordinalNumber(a,{unit:"date"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){var o=a.getUTCFullYear(),s=Nl(o);return s?n>=1&&n<=366:n>=1&&n<=365}},{key:"set",value:function(a,n,o){return a.setUTCMonth(0,o),a.setUTCHours(0,0,0,0),a}}]),t}(I);function d0(r,e,t){var i,a,n,o,s,l,h,c;K(2,arguments);var d=se(),_=nt((i=(a=(n=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(s=t.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:d.weekStartsOn)!==null&&a!==void 0?a:(h=d.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&i!==void 0?i:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=it(r),y=nt(e),C=m.getUTCDay(),b=y%7,x=(b+7)%7,E=(x<_?7:0)+y-C;return m.setUTCDate(m.getUTCDate()+E),m}function pi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pi=function(t){return typeof t}:pi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pi(r)}function wf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Jo(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Af(r,e,t){return e&&Jo(r.prototype,e),t&&Jo(r,t),r}function Cf(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&qa(r,e)}function qa(r,e){return qa=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},qa(r,e)}function xf(r){var e=Tf();return function(){var i=ir(r),a;if(e){var n=ir(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Ef(this,a)}}function Ef(r,e){return e&&(pi(e)==="object"||typeof e=="function")?e:Ga(r)}function Ga(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Tf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ir(r){return ir=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ir(r)}function ts(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Of=function(r){Cf(t,r);var e=xf(t);function t(){var i;wf(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),ts(Ga(i),"priority",90),ts(Ga(i),"incompatibleTokens",["D","i","e","c","t","T"]),i}return Af(t,[{key:"parse",value:function(a,n,o){switch(n){case"E":case"EE":case"EEE":return o.day(a,{width:"abbreviated",context:"formatting"})||o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(a,{width:"wide",context:"formatting"})||o.day(a,{width:"abbreviated",context:"formatting"})||o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(a,n){return n>=0&&n<=6}},{key:"set",value:function(a,n,o,s){return a=d0(a,o,s),a.setUTCHours(0,0,0,0),a}}]),t}(I);function vi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?vi=function(t){return typeof t}:vi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(r)}function Pf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function es(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Sf(r,e,t){return e&&es(r.prototype,e),t&&es(r,t),r}function If(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Qa(r,e)}function Qa(r,e){return Qa=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Qa(r,e)}function kf(r){var e=Rf();return function(){var i=rr(r),a;if(e){var n=rr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Df(this,a)}}function Df(r,e){return e&&(vi(e)==="object"||typeof e=="function")?e:Ka(r)}function Ka(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Rf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rr(r){return rr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},rr(r)}function is(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var $f=function(r){If(t,r);var e=kf(t);function t(){var i;Pf(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),is(Ka(i),"priority",90),is(Ka(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),i}return Sf(t,[{key:"parse",value:function(a,n,o,s){var l=function(c){var d=Math.floor((c-1)/7)*7;return(c+s.weekStartsOn+6)%7+d};switch(n){case"e":case"ee":return G(V(n.length,a),l);case"eo":return G(o.ordinalNumber(a,{unit:"day"}),l);case"eee":return o.day(a,{width:"abbreviated",context:"formatting"})||o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"});case"eeeee":return o.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(a,{width:"wide",context:"formatting"})||o.day(a,{width:"abbreviated",context:"formatting"})||o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(a,n){return n>=0&&n<=6}},{key:"set",value:function(a,n,o,s){return a=d0(a,o,s),a.setUTCHours(0,0,0,0),a}}]),t}(I);function fi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fi=function(t){return typeof t}:fi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fi(r)}function Lf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function rs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Ff(r,e,t){return e&&rs(r.prototype,e),t&&rs(r,t),r}function Nf(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Xa(r,e)}function Xa(r,e){return Xa=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Xa(r,e)}function Bf(r){var e=Vf();return function(){var i=ar(r),a;if(e){var n=ar(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Hf(this,a)}}function Hf(r,e){return e&&(fi(e)==="object"||typeof e=="function")?e:Za(r)}function Za(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ar(r){return ar=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ar(r)}function as(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Yf=function(r){Nf(t,r);var e=Bf(t);function t(){var i;Lf(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),as(Za(i),"priority",90),as(Za(i),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),i}return Ff(t,[{key:"parse",value:function(a,n,o,s){var l=function(c){var d=Math.floor((c-1)/7)*7;return(c+s.weekStartsOn+6)%7+d};switch(n){case"c":case"cc":return G(V(n.length,a),l);case"co":return G(o.ordinalNumber(a,{unit:"day"}),l);case"ccc":return o.day(a,{width:"abbreviated",context:"standalone"})||o.day(a,{width:"short",context:"standalone"})||o.day(a,{width:"narrow",context:"standalone"});case"ccccc":return o.day(a,{width:"narrow",context:"standalone"});case"cccccc":return o.day(a,{width:"short",context:"standalone"})||o.day(a,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(a,{width:"wide",context:"standalone"})||o.day(a,{width:"abbreviated",context:"standalone"})||o.day(a,{width:"short",context:"standalone"})||o.day(a,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(a,n){return n>=0&&n<=6}},{key:"set",value:function(a,n,o,s){return a=d0(a,o,s),a.setUTCHours(0,0,0,0),a}}]),t}(I);function Uf(r,e){K(2,arguments);var t=nt(e);t%7===0&&(t=t-7);var i=1,a=it(r),n=a.getUTCDay(),o=t%7,s=(o+7)%7,l=(s<i?7:0)+t-n;return a.setUTCDate(a.getUTCDate()+l),a}function _i(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_i=function(t){return typeof t}:_i=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_i(r)}function Wf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ns(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function jf(r,e,t){return e&&ns(r.prototype,e),t&&ns(r,t),r}function qf(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Ja(r,e)}function Ja(r,e){return Ja=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Ja(r,e)}function Gf(r){var e=Kf();return function(){var i=nr(r),a;if(e){var n=nr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return Qf(this,a)}}function Qf(r,e){return e&&(_i(e)==="object"||typeof e=="function")?e:tn(r)}function tn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Kf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nr(r){return nr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},nr(r)}function os(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var Xf=function(r){qf(t,r);var e=Gf(t);function t(){var i;Wf(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),os(tn(i),"priority",90),os(tn(i),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),i}return jf(t,[{key:"parse",value:function(a,n,o){var s=function(h){return h===0?7:h};switch(n){case"i":case"ii":return V(n.length,a);case"io":return o.ordinalNumber(a,{unit:"day"});case"iii":return G(o.day(a,{width:"abbreviated",context:"formatting"})||o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"}),s);case"iiiii":return G(o.day(a,{width:"narrow",context:"formatting"}),s);case"iiiiii":return G(o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"}),s);case"iiii":default:return G(o.day(a,{width:"wide",context:"formatting"})||o.day(a,{width:"abbreviated",context:"formatting"})||o.day(a,{width:"short",context:"formatting"})||o.day(a,{width:"narrow",context:"formatting"}),s)}}},{key:"validate",value:function(a,n){return n>=1&&n<=7}},{key:"set",value:function(a,n,o){return a=Uf(a,o),a.setUTCHours(0,0,0,0),a}}]),t}(I);function mi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?mi=function(t){return typeof t}:mi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(r)}function Zf(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ss(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Jf(r,e,t){return e&&ss(r.prototype,e),t&&ss(r,t),r}function t3(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&en(r,e)}function en(r,e){return en=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},en(r,e)}function e3(r){var e=r3();return function(){var i=or(r),a;if(e){var n=or(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return i3(this,a)}}function i3(r,e){return e&&(mi(e)==="object"||typeof e=="function")?e:rn(r)}function rn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function r3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function or(r){return or=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},or(r)}function ls(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var a3=function(r){t3(t,r);var e=e3(t);function t(){var i;Zf(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),ls(rn(i),"priority",80),ls(rn(i),"incompatibleTokens",["b","B","H","k","t","T"]),i}return Jf(t,[{key:"parse",value:function(a,n,o){switch(n){case"a":case"aa":case"aaa":return o.dayPeriod(a,{width:"abbreviated",context:"formatting"})||o.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(a,{width:"wide",context:"formatting"})||o.dayPeriod(a,{width:"abbreviated",context:"formatting"})||o.dayPeriod(a,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(a,n,o){return a.setUTCHours(c0(o),0,0,0),a}}]),t}(I);function gi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gi=function(t){return typeof t}:gi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(r)}function n3(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function hs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function o3(r,e,t){return e&&hs(r.prototype,e),t&&hs(r,t),r}function s3(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&an(r,e)}function an(r,e){return an=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},an(r,e)}function l3(r){var e=c3();return function(){var i=sr(r),a;if(e){var n=sr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return h3(this,a)}}function h3(r,e){return e&&(gi(e)==="object"||typeof e=="function")?e:nn(r)}function nn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function c3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sr(r){return sr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},sr(r)}function cs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var d3=function(r){s3(t,r);var e=l3(t);function t(){var i;n3(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),cs(nn(i),"priority",80),cs(nn(i),"incompatibleTokens",["a","B","H","k","t","T"]),i}return o3(t,[{key:"parse",value:function(a,n,o){switch(n){case"b":case"bb":case"bbb":return o.dayPeriod(a,{width:"abbreviated",context:"formatting"})||o.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(a,{width:"wide",context:"formatting"})||o.dayPeriod(a,{width:"abbreviated",context:"formatting"})||o.dayPeriod(a,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(a,n,o){return a.setUTCHours(c0(o),0,0,0),a}}]),t}(I);function yi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?yi=function(t){return typeof t}:yi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(r)}function u3(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ds(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function p3(r,e,t){return e&&ds(r.prototype,e),t&&ds(r,t),r}function v3(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&on(r,e)}function on(r,e){return on=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},on(r,e)}function f3(r){var e=m3();return function(){var i=lr(r),a;if(e){var n=lr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return _3(this,a)}}function _3(r,e){return e&&(yi(e)==="object"||typeof e=="function")?e:sn(r)}function sn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function m3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function lr(r){return lr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},lr(r)}function us(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var g3=function(r){v3(t,r);var e=f3(t);function t(){var i;u3(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),us(sn(i),"priority",80),us(sn(i),"incompatibleTokens",["a","b","t","T"]),i}return p3(t,[{key:"parse",value:function(a,n,o){switch(n){case"B":case"BB":case"BBB":return o.dayPeriod(a,{width:"abbreviated",context:"formatting"})||o.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(a,{width:"wide",context:"formatting"})||o.dayPeriod(a,{width:"abbreviated",context:"formatting"})||o.dayPeriod(a,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(a,n,o){return a.setUTCHours(c0(o),0,0,0),a}}]),t}(I);function bi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?bi=function(t){return typeof t}:bi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bi(r)}function y3(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ps(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function b3(r,e,t){return e&&ps(r.prototype,e),t&&ps(r,t),r}function M3(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&ln(r,e)}function ln(r,e){return ln=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},ln(r,e)}function z3(r){var e=A3();return function(){var i=hr(r),a;if(e){var n=hr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return w3(this,a)}}function w3(r,e){return e&&(bi(e)==="object"||typeof e=="function")?e:hn(r)}function hn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function A3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hr(r){return hr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},hr(r)}function vs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var C3=function(r){M3(t,r);var e=z3(t);function t(){var i;y3(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),vs(hn(i),"priority",70),vs(hn(i),"incompatibleTokens",["H","K","k","t","T"]),i}return b3(t,[{key:"parse",value:function(a,n,o){switch(n){case"h":return B(q.hour12h,a);case"ho":return o.ordinalNumber(a,{unit:"hour"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){return n>=1&&n<=12}},{key:"set",value:function(a,n,o){var s=a.getUTCHours()>=12;return s&&o<12?a.setUTCHours(o+12,0,0,0):!s&&o===12?a.setUTCHours(0,0,0,0):a.setUTCHours(o,0,0,0),a}}]),t}(I);function Mi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Mi=function(t){return typeof t}:Mi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mi(r)}function x3(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function fs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function E3(r,e,t){return e&&fs(r.prototype,e),t&&fs(r,t),r}function T3(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&cn(r,e)}function cn(r,e){return cn=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},cn(r,e)}function O3(r){var e=S3();return function(){var i=cr(r),a;if(e){var n=cr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return P3(this,a)}}function P3(r,e){return e&&(Mi(e)==="object"||typeof e=="function")?e:dn(r)}function dn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function S3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cr(r){return cr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},cr(r)}function _s(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var I3=function(r){T3(t,r);var e=O3(t);function t(){var i;x3(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),_s(dn(i),"priority",70),_s(dn(i),"incompatibleTokens",["a","b","h","K","k","t","T"]),i}return E3(t,[{key:"parse",value:function(a,n,o){switch(n){case"H":return B(q.hour23h,a);case"Ho":return o.ordinalNumber(a,{unit:"hour"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){return n>=0&&n<=23}},{key:"set",value:function(a,n,o){return a.setUTCHours(o,0,0,0),a}}]),t}(I);function zi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?zi=function(t){return typeof t}:zi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zi(r)}function k3(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ms(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function D3(r,e,t){return e&&ms(r.prototype,e),t&&ms(r,t),r}function R3(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&un(r,e)}function un(r,e){return un=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},un(r,e)}function $3(r){var e=F3();return function(){var i=dr(r),a;if(e){var n=dr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return L3(this,a)}}function L3(r,e){return e&&(zi(e)==="object"||typeof e=="function")?e:pn(r)}function pn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function F3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function dr(r){return dr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},dr(r)}function gs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var N3=function(r){R3(t,r);var e=$3(t);function t(){var i;k3(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),gs(pn(i),"priority",70),gs(pn(i),"incompatibleTokens",["h","H","k","t","T"]),i}return D3(t,[{key:"parse",value:function(a,n,o){switch(n){case"K":return B(q.hour11h,a);case"Ko":return o.ordinalNumber(a,{unit:"hour"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){return n>=0&&n<=11}},{key:"set",value:function(a,n,o){var s=a.getUTCHours()>=12;return s&&o<12?a.setUTCHours(o+12,0,0,0):a.setUTCHours(o,0,0,0),a}}]),t}(I);function wi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wi=function(t){return typeof t}:wi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wi(r)}function B3(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ys(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function H3(r,e,t){return e&&ys(r.prototype,e),t&&ys(r,t),r}function V3(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&vn(r,e)}function vn(r,e){return vn=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},vn(r,e)}function Y3(r){var e=W3();return function(){var i=ur(r),a;if(e){var n=ur(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return U3(this,a)}}function U3(r,e){return e&&(wi(e)==="object"||typeof e=="function")?e:fn(r)}function fn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function W3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ur(r){return ur=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ur(r)}function bs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var j3=function(r){V3(t,r);var e=Y3(t);function t(){var i;B3(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),bs(fn(i),"priority",70),bs(fn(i),"incompatibleTokens",["a","b","h","H","K","t","T"]),i}return H3(t,[{key:"parse",value:function(a,n,o){switch(n){case"k":return B(q.hour24h,a);case"ko":return o.ordinalNumber(a,{unit:"hour"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){return n>=1&&n<=24}},{key:"set",value:function(a,n,o){var s=o<=24?o%24:o;return a.setUTCHours(s,0,0,0),a}}]),t}(I);function Ai(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ai=function(t){return typeof t}:Ai=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(r)}function q3(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ms(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function G3(r,e,t){return e&&Ms(r.prototype,e),t&&Ms(r,t),r}function Q3(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&_n(r,e)}function _n(r,e){return _n=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},_n(r,e)}function K3(r){var e=Z3();return function(){var i=pr(r),a;if(e){var n=pr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return X3(this,a)}}function X3(r,e){return e&&(Ai(e)==="object"||typeof e=="function")?e:mn(r)}function mn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Z3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pr(r){return pr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},pr(r)}function zs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var J3=function(r){Q3(t,r);var e=K3(t);function t(){var i;q3(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),zs(mn(i),"priority",60),zs(mn(i),"incompatibleTokens",["t","T"]),i}return G3(t,[{key:"parse",value:function(a,n,o){switch(n){case"m":return B(q.minute,a);case"mo":return o.ordinalNumber(a,{unit:"minute"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){return n>=0&&n<=59}},{key:"set",value:function(a,n,o){return a.setUTCMinutes(o,0,0),a}}]),t}(I);function Ci(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ci=function(t){return typeof t}:Ci=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ci(r)}function t5(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ws(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function e5(r,e,t){return e&&ws(r.prototype,e),t&&ws(r,t),r}function i5(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&gn(r,e)}function gn(r,e){return gn=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},gn(r,e)}function r5(r){var e=n5();return function(){var i=vr(r),a;if(e){var n=vr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return a5(this,a)}}function a5(r,e){return e&&(Ci(e)==="object"||typeof e=="function")?e:yn(r)}function yn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function n5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vr(r){return vr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},vr(r)}function As(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var o5=function(r){i5(t,r);var e=r5(t);function t(){var i;t5(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),As(yn(i),"priority",50),As(yn(i),"incompatibleTokens",["t","T"]),i}return e5(t,[{key:"parse",value:function(a,n,o){switch(n){case"s":return B(q.second,a);case"so":return o.ordinalNumber(a,{unit:"second"});default:return V(n.length,a)}}},{key:"validate",value:function(a,n){return n>=0&&n<=59}},{key:"set",value:function(a,n,o){return a.setUTCSeconds(o,0),a}}]),t}(I);function xi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xi=function(t){return typeof t}:xi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(r)}function s5(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Cs(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function l5(r,e,t){return e&&Cs(r.prototype,e),t&&Cs(r,t),r}function h5(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&bn(r,e)}function bn(r,e){return bn=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},bn(r,e)}function c5(r){var e=u5();return function(){var i=fr(r),a;if(e){var n=fr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return d5(this,a)}}function d5(r,e){return e&&(xi(e)==="object"||typeof e=="function")?e:Mn(r)}function Mn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function u5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fr(r){return fr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},fr(r)}function xs(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var p5=function(r){h5(t,r);var e=c5(t);function t(){var i;s5(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),xs(Mn(i),"priority",30),xs(Mn(i),"incompatibleTokens",["t","T"]),i}return l5(t,[{key:"parse",value:function(a,n){var o=function(l){return Math.floor(l*Math.pow(10,-n.length+3))};return G(V(n.length,a),o)}},{key:"set",value:function(a,n,o){return a.setUTCMilliseconds(o),a}}]),t}(I);function Ei(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ei=function(t){return typeof t}:Ei=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ei(r)}function v5(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Es(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function f5(r,e,t){return e&&Es(r.prototype,e),t&&Es(r,t),r}function _5(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&zn(r,e)}function zn(r,e){return zn=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},zn(r,e)}function m5(r){var e=y5();return function(){var i=_r(r),a;if(e){var n=_r(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return g5(this,a)}}function g5(r,e){return e&&(Ei(e)==="object"||typeof e=="function")?e:wn(r)}function wn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function y5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _r(r){return _r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_r(r)}function Ts(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var b5=function(r){_5(t,r);var e=m5(t);function t(){var i;v5(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Ts(wn(i),"priority",10),Ts(wn(i),"incompatibleTokens",["t","T","x"]),i}return f5(t,[{key:"parse",value:function(a,n){switch(n){case"X":return Mt(bt.basicOptionalMinutes,a);case"XX":return Mt(bt.basic,a);case"XXXX":return Mt(bt.basicOptionalSeconds,a);case"XXXXX":return Mt(bt.extendedOptionalSeconds,a);case"XXX":default:return Mt(bt.extended,a)}}},{key:"set",value:function(a,n,o){return n.timestampIsSet?a:new Date(a.getTime()-o)}}]),t}(I);function Ti(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ti=function(t){return typeof t}:Ti=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ti(r)}function M5(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Os(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function z5(r,e,t){return e&&Os(r.prototype,e),t&&Os(r,t),r}function w5(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&An(r,e)}function An(r,e){return An=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},An(r,e)}function A5(r){var e=x5();return function(){var i=mr(r),a;if(e){var n=mr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return C5(this,a)}}function C5(r,e){return e&&(Ti(e)==="object"||typeof e=="function")?e:Cn(r)}function Cn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function x5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function mr(r){return mr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},mr(r)}function Ps(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var E5=function(r){w5(t,r);var e=A5(t);function t(){var i;M5(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Ps(Cn(i),"priority",10),Ps(Cn(i),"incompatibleTokens",["t","T","X"]),i}return z5(t,[{key:"parse",value:function(a,n){switch(n){case"x":return Mt(bt.basicOptionalMinutes,a);case"xx":return Mt(bt.basic,a);case"xxxx":return Mt(bt.basicOptionalSeconds,a);case"xxxxx":return Mt(bt.extendedOptionalSeconds,a);case"xxx":default:return Mt(bt.extended,a)}}},{key:"set",value:function(a,n,o){return n.timestampIsSet?a:new Date(a.getTime()-o)}}]),t}(I);function Oi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Oi=function(t){return typeof t}:Oi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oi(r)}function T5(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Ss(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function O5(r,e,t){return e&&Ss(r.prototype,e),t&&Ss(r,t),r}function P5(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&xn(r,e)}function xn(r,e){return xn=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},xn(r,e)}function S5(r){var e=k5();return function(){var i=gr(r),a;if(e){var n=gr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return I5(this,a)}}function I5(r,e){return e&&(Oi(e)==="object"||typeof e=="function")?e:En(r)}function En(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function k5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gr(r){return gr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},gr(r)}function Is(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var D5=function(r){P5(t,r);var e=S5(t);function t(){var i;T5(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Is(En(i),"priority",40),Is(En(i),"incompatibleTokens","*"),i}return O5(t,[{key:"parse",value:function(a){return Ll(a)}},{key:"set",value:function(a,n,o){return[new Date(o*1e3),{timestampIsSet:!0}]}}]),t}(I);function Pi(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Pi=function(t){return typeof t}:Pi=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pi(r)}function R5(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ks(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function $5(r,e,t){return e&&ks(r.prototype,e),t&&ks(r,t),r}function L5(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&Tn(r,e)}function Tn(r,e){return Tn=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},Tn(r,e)}function F5(r){var e=B5();return function(){var i=yr(r),a;if(e){var n=yr(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return N5(this,a)}}function N5(r,e){return e&&(Pi(e)==="object"||typeof e=="function")?e:On(r)}function On(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function B5(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yr(r){return yr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},yr(r)}function Ds(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var H5=function(r){L5(t,r);var e=F5(t);function t(){var i;R5(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return i=e.call.apply(e,[this].concat(n)),Ds(On(i),"priority",20),Ds(On(i),"incompatibleTokens","*"),i}return $5(t,[{key:"parse",value:function(a){return Ll(a)}},{key:"set",value:function(a,n,o){return[new Date(o),{timestampIsSet:!0}]}}]),t}(I),V5={G:new Fp,y:new Gp,Y:new ev,R:new lv,u:new fv,Q:new zv,q:new Ov,M:new $v,L:new Yv,w:new Xv,I:new of,d:new ff,D:new zf,E:new Of,e:new $f,c:new Yf,i:new Xf,a:new a3,b:new d3,B:new g3,h:new C3,H:new I3,K:new N3,k:new j3,m:new J3,s:new o5,S:new p5,X:new b5,x:new E5,t:new D5,T:new H5};function Si(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Si=function(t){return typeof t}:Si=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(r)}function Rs(r,e){var t;if(typeof Symbol>"u"||r[Symbol.iterator]==null){if(Array.isArray(r)||(t=Y5(r))||e&&r&&typeof r.length=="number"){t&&(r=t);var i=0,a=function(){};return{s:a,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(h){throw h},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,o=!1,s;return{s:function(){t=r[Symbol.iterator]()},n:function(){var h=t.next();return n=h.done,h},e:function(h){o=!0,s=h},f:function(){try{!n&&t.return!=null&&t.return()}finally{if(o)throw s}}}}function Y5(r,e){if(!!r){if(typeof r=="string")return $s(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $s(r,e)}}function $s(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}var U5=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,W5=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,j5=/^'([^]*?)'?$/,q5=/''/g,G5=/\S/,Q5=/[a-zA-Z]/;function Ls(r,e,t,i){var a,n,o,s,l,h,c,d,_,m,y,C,b,x,E,$,J,W;K(3,arguments);var N=String(r),et=String(e),ot=se(),vt=(a=(n=i==null?void 0:i.locale)!==null&&n!==void 0?n:ot.locale)!==null&&a!==void 0?a:kl;if(!vt.match)throw new RangeError("locale must contain match property");var ht=nt((o=(s=(l=(h=i==null?void 0:i.firstWeekContainsDate)!==null&&h!==void 0?h:i==null||(c=i.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&l!==void 0?l:ot.firstWeekContainsDate)!==null&&s!==void 0?s:(_=ot.locale)===null||_===void 0||(m=_.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(ht>=1&&ht<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var mt=nt((y=(C=(b=(x=i==null?void 0:i.weekStartsOn)!==null&&x!==void 0?x:i==null||(E=i.locale)===null||E===void 0||($=E.options)===null||$===void 0?void 0:$.weekStartsOn)!==null&&b!==void 0?b:ot.weekStartsOn)!==null&&C!==void 0?C:(J=ot.locale)===null||J===void 0||(W=J.options)===null||W===void 0?void 0:W.weekStartsOn)!==null&&y!==void 0?y:0);if(!(mt>=0&&mt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(et==="")return N===""?it(t):new Date(NaN);var Tt={firstWeekContainsDate:ht,weekStartsOn:mt,locale:vt},gt=[new Op],le=et.match(W5).map(function(F){var P=F[0];if(P in ya){var Z=ya[P];return Z(F,vt.formatLong)}return F}).join("").match(U5),Q=[],u=Rs(le),p;try{var v=function(){var P=p.value;!(i!=null&&i.useAdditionalWeekYearTokens)&&Il(P)&&Bi(P,et,r),!(i!=null&&i.useAdditionalDayOfYearTokens)&&Sl(P)&&Bi(P,et,r);var Z=P[0],Ne=V5[Z];if(Ne){var u0=Ne.incompatibleTokens;if(Array.isArray(u0)){var p0=Q.find(function(v0){return u0.includes(v0.token)||v0.token===Z});if(p0)throw new RangeError("The format string mustn't contain `".concat(p0.fullToken,"` and `").concat(P,"` at the same time"))}else if(Ne.incompatibleTokens==="*"&&Q.length>0)throw new RangeError("The format string mustn't contain `".concat(P,"` and any other token at the same time"));Q.push({token:Z,fullToken:P});var Rr=Ne.run(N,P,vt.match,Tt);if(!Rr)return{v:new Date(NaN)};gt.push(Rr.setter),N=Rr.rest}else{if(Z.match(Q5))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Z+"`");if(P==="''"?P="'":Z==="'"&&(P=K5(P)),N.indexOf(P)===0)N=N.slice(P.length);else return{v:new Date(NaN)}}};for(u.s();!(p=u.n()).done;){var f=v();if(Si(f)==="object")return f.v}}catch(F){u.e(F)}finally{u.f()}if(N.length>0&&G5.test(N))return new Date(NaN);var g=gt.map(function(F){return F.priority}).sort(function(F,P){return P-F}).filter(function(F,P,Z){return Z.indexOf(F)===P}).map(function(F){return gt.filter(function(P){return P.priority===F}).sort(function(P,Z){return Z.subPriority-P.subPriority})}).map(function(F){return F[0]}),z=it(t);if(isNaN(z.getTime()))return new Date(NaN);var w=Cl(z,Pl(z)),H={},k=Rs(g),j;try{for(k.s();!(j=k.n()).done;){var X=j.value;if(!X.validate(w,Tt))return new Date(NaN);var ct=X.set(w,H,Tt);Array.isArray(ct)?(w=ct[0],Ap(H,ct[1])):w=ct}}catch(F){k.e(F)}finally{k.f()}return w}function K5(r){return r.match(j5)[1].replace(q5,"'")}(function(){const r=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker")};window.Vaadin.Flow.datepickerConnector={initLazy:e=>r(function(t){if(t.$connector)return;t.$connector={};const i=function(o){try{new Date().toLocaleDateString(o)}catch{return console.warn("The locale is not supported, using default locale setting(en-US)."),"M/d/yyyy"}let l=new Date(Date.UTC(1234,4,6)).toLocaleDateString(o,{timeZone:"UTC"});return l=l.replace(/([a-zA-Z]+)/g,"'$1'").replace("06","dd").replace("6","d").replace("05","MM").replace("5","M").replace("1234","yyyy"),l.includes("d")&&l.includes("M")&&l.includes("y")?l:(console.warn("The locale is not supported, using default locale setting(en-US)."),"M/d/yyyy")},a=r(function(o){if(!o||o.length===0)throw new Error("Array of custom date formats is null or empty");function s(d){if(d.includes("yyyy")&&!d.includes("yyyyy"))return d.replace("yyyy","yy");if(d.includes("YYYY")&&!d.includes("YYYYY"))return d.replace("YYYY","YY")}function l(d){return d.includes("y")?!d.includes("yyy"):d.includes("Y")?!d.includes("YYY"):!1}function h(d){const _=o[0],m=Wt(`${d.year}-${d.month+1}-${d.day}`);return zp(m,_)}function c(d){const _=n();for(let m of o){const y=s(m);if(y){const b=Ls(d,y,_);if(ga(b)){let x=b.getFullYear();return t.$connector._lastParsedYear&&x===t.$connector._lastParsedYear%100&&(x=t.$connector._lastParsedYear),{day:b.getDate(),month:b.getMonth(),year:x}}}const C=Ls(d,m,_);if(ga(C)){let b=C.getFullYear();return t.$connector._lastParsedYear&&b%100===t.$connector._lastParsedYear%100&&l(m)?b=t.$connector._lastParsedYear:t.$connector._lastParsedYear=b,{day:C.getDate(),month:C.getMonth(),year:b}}}return t.$connector._lastParsedYear=void 0,!1}return{formatDate:h,parseDate:c}});function n(){const{referenceDate:o}=t.i18n;return o?new Date(o.year,o.month-1,o.day):new Date}t.$connector.updateI18n=r(function(o,s){const l=s&&s.dateFormats&&s.dateFormats.length>0;s&&s.referenceDate&&(s.referenceDate=n0(new Date(s.referenceDate)));const h=l?s.dateFormats:[i(o)],c=a(h);t.i18n=Object.assign({},t.i18n,s,c)})})(e)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.dndConnector={__ondragenterListener:function(r){const e=r.currentTarget.__dropEffect;r.currentTarget.hasAttribute("disabled")||(e&&(r.dataTransfer.dropEffect=e),e&&e!=="none"&&(r.currentTarget.classList.contains("v-drag-over-target")?r.currentTarget["__skip-leave"]=!0:r.currentTarget.classList.add("v-drag-over-target"),r.preventDefault(),r.stopPropagation()))},__ondragoverListener:function(r){if(!r.currentTarget.hasAttribute("disabled")){const e=r.currentTarget.__dropEffect;e&&(r.dataTransfer.dropEffect=e),r.preventDefault(),r.stopPropagation()}},__ondragleaveListener:function(r){r.currentTarget["__skip-leave"]?r.currentTarget["__skip-leave"]=!1:r.currentTarget.classList.remove("v-drag-over-target"),r.stopPropagation()},__ondropListener:function(r){const e=r.currentTarget.__dropEffect;e&&(r.dataTransfer.dropEffect=e),r.currentTarget.classList.remove("v-drag-over-target"),r.preventDefault(),r.stopPropagation()},updateDropTarget:function(r){r.__active?(r.addEventListener("dragenter",this.__ondragenterListener,!1),r.addEventListener("dragover",this.__ondragoverListener,!1),r.addEventListener("dragleave",this.__ondragleaveListener,!1),r.addEventListener("drop",this.__ondropListener,!1)):(r.removeEventListener("dragenter",this.__ondragenterListener,!1),r.removeEventListener("dragover",this.__ondragoverListener,!1),r.removeEventListener("dragleave",this.__ondragleaveListener,!1),r.removeEventListener("drop",this.__ondropListener,!1),r.classList.remove("v-drag-over-target"))},__dragstartListener:function(r){r.stopPropagation(),r.dataTransfer.setData("text/plain",""),r.currentTarget.hasAttribute("disabled")?r.preventDefault():(r.currentTarget.__effectAllowed&&(r.dataTransfer.effectAllowed=r.currentTarget.__effectAllowed),r.currentTarget.classList.add("v-dragged"))},__dragendListener:function(r){r.currentTarget.classList.remove("v-dragged")},updateDragSource:function(r){r.draggable?(r.addEventListener("dragstart",this.__dragstartListener,!1),r.addEventListener("dragend",this.__dragendListener,!1)):(r.removeEventListener("dragstart",this.__dragstartListener,!1),r.removeEventListener("dragend",this.__dragendListener,!1))}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class Bl extends O{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Ct.debounce(this.__renderDebouncer,Ar,()=>this.__render()),nl(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=T(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!T(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),sl()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:T(e).querySelector("template");if(!t){let i=new MutationObserver(()=>{if(T(this).querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return i.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=T(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length&&T(this).previousSibling!==t[t.length-1])for(let a=0,n;a<t.length&&(n=t[a]);a++)T(e).insertBefore(n,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){ol()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Jr||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class X5 extends Bl{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(Ee&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(a,n,o)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),n=Object.assign(s.changedProps,n)),a(n,o);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:a,changedProps:{}}),o)for(const l in n){const h=Et(l);s.changedProps[h]=this.__dataHost[h]}else Object.assign(s.changedProps,n)},this.__instance=t._stampTemplate(this.__template,i),T(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,il(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class Z5 extends Bl{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Nt(this.__template,this,{mutableData:!0,forwardHostProp:function(t,i){this.__instance&&(this.if?this.__instance.forwardHostProp(t,i):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Et(t)]=!0))}})),this.__instance=new this.__ctor,T(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=T(e[0]).parentNode;if(t){t=T(t);for(let i=0,a;i<e.length&&(a=e[i]);i++)t.removeChild(a)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const Fs=Js?X5:Z5;customElements.define(Fs.is,Fs);class Ns extends O{static get template(){return R`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(e){this.firstChild&&typeof this.firstChild.click=="function"&&e.target===this&&(e.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=Ct.debounce(this._debouncer,Fh,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);e!==null&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(e.hasAttribute&&(e.hasAttribute("disabled")||e.hasAttribute("hidden"))||!e.children)return null;for(var t=0;t<e.children.length;t++){var i=this._getFirstFocusableDescendant(e.children[t]);if(i!==null)return i}return null}_isFocusable(e){return e.hasAttribute&&typeof e.hasAttribute=="function"&&(e.hasAttribute("disabled")||e.hasAttribute("hidden"))?!1:e.tabIndex===0}_onAnimationEnd(e){e.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(Ns.is,Ns);(function(){const r=function(t){return window.Vaadin.Flow.tryCatchWrapper(t,"Vaadin Grid")};let e=!1;window.Vaadin.Flow.gridConnector={initLazy:t=>r(function(i){if(i.$connector)return;e||(e=!0,dt.prototype.ensureSubCacheForScaledIndexOriginal=dt.prototype.ensureSubCacheForScaledIndex,dt.prototype.ensureSubCacheForScaledIndex=r(function(u){if(!this.grid.$connector){this.ensureSubCacheForScaledIndexOriginal(u);return}this.itemCaches[u]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,u)}),dt.prototype.isLoadingOriginal=dt.prototype.isLoading,dt.prototype.isLoading=r(function(){return this.grid.$connector?Boolean(this.grid.$connector.hasEnsureSubCacheQueue()||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(u=>this.itemCaches[u].isLoading())[0]):this.isLoadingOriginal()}),dt.prototype.doEnsureSubCacheForScaledIndex=r(function(u){if(!this.itemCaches[u]){const p=new dt.prototype.constructor(this.grid,this,this.items[u]);p.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[u]=p,this.itemkeyCaches[this.grid.getItemId(p.parentItem)]=p,this.grid._loadPage(0,p)}}),dt.prototype.getCacheAndIndexByKey=r(function(u){for(let v in this.items)if(this.grid.getItemId(this.items[v])===u)return{cache:this,scaledIndex:v};const p=Object.keys(this.itemkeyCaches);for(let v=0;v<p.length;v++){const f=p[v];let z=this.itemkeyCaches[f].getCacheAndIndexByKey(u);if(z)return z}}),dt.prototype.getLevel=r(function(){let u=this,p=0;for(;u.parentCache;)u=u.parentCache,p++;return p}));const a={},n={},o={},s=50,l=20;let h=[],c,d=[],_;const m=150;let y,C={};const b="null";C[b]=[0,0];const x=["SINGLE","NONE","MULTI"];let E={},$="SINGLE",J=!1;i.size=0,i.itemIdPath="key",i.$connector={},i.$connector.hasEnsureSubCacheQueue=r(()=>d.length>0),i.$connector.hasParentRequestQueue=r(()=>h.length>0),i.$connector.hasRootRequestQueue=r(()=>Object.keys(a).length>0||y&&y.isActive()),i.$connector.beforeEnsureSubCacheForScaledIndex=r(function(u,p){d.push({cache:u,scaledIndex:p,itemkey:i.getItemId(u.items[p]),level:u.getLevel()}),_=Ct.debounce(_,Lh,()=>{for(;d.length;)i.$connector.flushEnsureSubCache()})}),i.$connector.doSelection=r(function(u,p){if($==="NONE"||!u.length||p&&i.hasAttribute("disabled"))return;$==="SINGLE"&&(i.selectedItems=[],E={});const v=u.filter(f=>f!==null);i.selectedItems=i.selectedItems.concat(v),u.forEach(f=>{f&&(E[f.key]=f,p&&(f.selected=!0,i.$server.select(f.key)));const g=!i.activeItem||!f||f.key!=i.activeItem.key;!p&&$==="SINGLE"&&g&&(i.activeItem=f)})}),i.$connector.doDeselection=r(function(u,p){if($==="NONE"||!u.length||p&&i.hasAttribute("disabled"))return;const v=i.selectedItems.slice();for(;u.length;){const f=u.shift();for(let g=0;g<v.length;g++){const z=v[g];if(f&&f.key===z.key){v.splice(g,1);break}}f&&(delete E[f.key],p&&(delete f.selected,i.$server.deselect(f.key)))}i.selectedItems=v}),i.__activeItemChanged=r(function(u,p){$=="SINGLE"&&(u?E[u.key]||i.$connector.doSelection([u],!0):p&&E[p.key]&&(i.__deselectDisallowed?i.activeItem=p:i.$connector.doDeselection([p],!0)))}),i._createPropertyObserver("activeItem","__activeItemChanged",!0),i.__activeItemChangedDetails=r(function(u,p){i.__disallowDetailsOnClick||u==null&&p===void 0||(u&&!u.detailsOpened?i.$server.setDetailsVisible(u.key):i.$server.setDetailsVisible(null))}),i._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),i.$connector._getPageIfSameLevel=r(function(u,p,v){let f=i._cache.getCacheAndIndex(p),g=f.cache.parentItem,z=g?i.getItemId(g):b;return u!==z?v:i._getPageForIndex(f.scaledIndex)}),i.$connector.getCacheByKey=r(function(u){let p=i._cache.getCacheAndIndexByKey(u);if(p)return p.cache}),i.$connector.flushEnsureSubCache=r(function(){let u=d.splice(0,1)[0],p=u.itemkey;const v=i._getVisibleRows();let f=v[0].index,g=v[v.length-1].index,z=g-f,w=Math.max(0,f-z),H=Math.min(g+z,i._effectiveSize);for(let k=w;k<=H;k++){let j=i._cache.getItemForIndex(k);if(i.getItemId(j)===p){if(i._isExpanded(j))return u.cache.doEnsureSubCacheForScaledIndex(u.scaledIndex),!0;break}}return!1}),i.$connector.flushParentRequests=r(function(){let u=h.splice(0,l);return u.length?(i.$server.setParentRequestedRanges(u),!0):!1}),i.$connector.beforeParentRequest=r(function(u,p,v){h.push({firstIndex:u,size:p,parentKey:v}),c=Ct.debounce(c,ia.after(s),()=>{for(;h.length;)i.$connector.flushParentRequests()})}),i.$connector.fetchPage=r(function(u,p,v){const f=i._getVisibleRows();let g=f.length>0?f[0].index:0,z=f.length>0?f[f.length-1].index:0,w=z-g,H=Math.max(0,g-w),k=Math.min(z+w,i._effectiveSize),j=p,X=p;for(let Z=H;Z<=k;Z++)j=Math.min(j,i.$connector._getPageIfSameLevel(v,Z,j)),X=Math.max(X,i.$connector._getPageIfSameLevel(v,Z,X));let ct=Math.max(0,j),F=v!==b?X:Math.min(X,Math.floor(i.size/i.pageSize)),P=C[v];if(P||(P=[-1,-1]),P[0]!=ct||P[1]!=F){P=[ct,F],C[v]=P;let Z=F-ct+1;u(ct*i.pageSize,Z*i.pageSize)}}),i.dataProvider=r(function(u,p){if(u.pageSize!=i.pageSize)throw"Invalid pageSize";let v=u.page;if(u.parentItem){let f=i.getItemId(u.parentItem);n[f]||(n[f]={});let g=i.$connector.getCacheByKey(f),z=g&&g.itemkeyCaches?g.itemkeyCaches[f]:void 0;o[f]&&o[f][v]&&z?(v=Math.min(v,Math.floor(o[f].size/i.pageSize)),d=[],p(o[f][v],o[f].size),ht(),d=[],i.requestContentUpdate()):(n[f][v]=p,i.$connector.fetchPage((w,H)=>i.$connector.beforeParentRequest(w,H,u.parentItem.key),v,f))}else v=Math.min(v,Math.floor(i.size/i.pageSize)),o[b]&&o[b][v]?p(o[b][v]):(a[v]=p,y=Ct.debounce(y,ia.after(i._hasData?m:0),()=>{i.$connector.fetchPage((f,g)=>i.$server.setRequestedRange(f,g),v,b)}))});const W=r(function(u,p){p!==void 0&&!J&&i.$server.sortersChanged(i._sorters.map(function(v){return{path:v.path,direction:v.direction}}))});i.$connector.setSorterDirections=r(function(u){J=!0,setTimeout(r(()=>{try{const p=Array.from(i.querySelectorAll("vaadin-grid-sorter"));i._sorters.forEach(v=>{p.includes(v)||p.push(v)}),p.forEach(v=>{u.filter(f=>f.column===v.getAttribute("path"))[0]||(v.direction=null)}),i.multiSortPriority!=="append"&&(u=u.reverse()),u.forEach(({column:v,direction:f})=>{p.forEach(g=>{g.getAttribute("path")===v&&g.direction!==f&&(g.direction=f)})})}finally{J=!1}}))}),i._createPropertyObserver("_previousSorters",W),i._updateItem=r(function(u,p){Ce.prototype._updateItem.call(i,u,p),u.hidden||Array.from(u.children).forEach(v=>{v._content&&v._content.__templateInstance&&v._content.__templateInstance.children&&Array.from(v._content.__templateInstance.children).forEach(f=>{f._attachRenderedComponentIfAble&&f._attachRenderedComponentIfAble(),f.children&&Array.from(f.children).forEach(g=>{g._attachRenderedComponentIfAble&&g._attachRenderedComponentIfAble()})})}),$===x[1]&&(u.removeAttribute("aria-selected"),Array.from(u.children).forEach(v=>v.removeAttribute("aria-selected")))});const N=r(function(u,p){if(u==null||i.$server.updateExpandedState==null)return;let v=i.getItemId(u);if(i.$server.updateExpandedState(v,p),!p){delete o[v];let f=i.$connector.getCacheByKey(v);f&&f.itemkeyCaches&&f.itemkeyCaches[v]&&delete f.itemkeyCaches[v],f&&f.itemkeyCaches&&Object.keys(f.itemCaches).filter(g=>f.items[g].key===v).forEach(g=>delete f.itemCaches[g]),delete C[v]}});i.expandItem=r(function(u){N(u,!0),Ce.prototype.expandItem.call(i,u)}),i.collapseItem=r(function(u){N(u,!1),Ce.prototype.collapseItem.call(i,u)});const et=function(u){if(!u||!Array.isArray(u))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(u);let p=Array.from(i.detailsOpenedItems),v=!1;for(let f=0;f<u.length;++f){const g=u[f];!g||(g.detailsOpened?i._getItemIndexInArray(g,p)<0&&p.push(g):i._getItemIndexInArray(g,p)>=0&&p.splice(i._getItemIndexInArray(g,p),1),E[g.key]&&(E[g.key]=g,g.selected=!0,v=!0))}i.detailsOpenedItems=p,v&&(i.selectedItems=Object.keys(E).map(function(f){return E[f]}))},ot=function(u,p){let v;if((p||b)!==b){v=o[p][u];let f=i.$connector.getCacheByKey(p);if(f&&f.itemkeyCaches){let g=f.itemkeyCaches[p];const z=n[p],w=z&&z[u];vt(u,v,w,g)}}else v=o[b][u],vt(u,v,a[u],i._cache);return v},vt=function(u,p,v,f){if(!v){let g=u*i.pageSize,z=g+i.pageSize;if(p){if(f&&f.items)for(let w=g;w<z;w++)f.items[w]&&(f.items[w]=p[w-g])}else if(f&&f.items)for(let w=g;w<z;w++)delete f.items[w]}},ht=function(){i._cache.updateSize(),i._effectiveSize=i._cache.effectiveSize,i.__updateVisibleRows()},mt=function(u){if(!u||!i.$||i.$.items.childElementCount===0)return;const p=u.map(f=>f.key),v=i._getVisibleRows().filter(f=>f._item&&p.includes(f._item.key)).map(f=>f.index);v.length>0&&i.__updateVisibleRows(v[0],v[v.length-1])};i.$connector.set=r(function(u,p,v){if(u%i.pageSize!=0)throw"Got new data to index "+u+" which is not aligned with the page size of "+i.pageSize;let f=v||b;const g=u/i.pageSize,z=Math.ceil(p.length/i.pageSize);for(let w=0;w<z;w++){let H=g+w,k=p.slice(w*i.pageSize,(w+1)*i.pageSize);o[f]||(o[f]={}),o[f][H]=k,i.$connector.doSelection(k.filter(X=>X.selected)),i.$connector.doDeselection(k.filter(X=>!X.selected&&E[X.key]));const j=ot(H,f);j&&(et(j),mt(j))}});const Tt=function(u){let p=u.parentUniqueKey||b;if(o[p]){for(let v in o[p])for(let f in o[p][v])if(i.getItemId(o[p][v][f])===i.getItemId(u))return{page:v,index:f,parentKey:p}}return null};i.$connector.updateHierarchicalData=r(function(u){let p=[];for(let f=0;f<u.length;f++){let g=Tt(u[f]);if(g){o[g.parentKey][g.page][g.index]=u[f];let z=g.parentKey+":"+g.page;p[z]||(p[z]={parentKey:g.parentKey,page:g.page})}}let v=Object.keys(p);for(let f=0;f<v.length;f++){let g=p[v[f]];const z=ot(g.page,g.parentKey);z&&(et(z),mt(z))}}),i.$connector.updateFlatData=r(function(u){for(let p=0;p<u.length;p++){let v=Tt(u[p]);if(v){o[v.parentKey][v.page][v.index]=u[p];const f=parseInt(v.page)*i.pageSize+parseInt(v.index);i._cache.items[f]&&(i._cache.items[f]=u[p])}}et(u),mt(u)}),i.$connector.clearExpanded=r(function(){i.expandedItems=[],d=[],h=[]}),i.$connector.clear=r(function(u,p,v){let f=v||b;if(!o[f]||Object.keys(o[f]).length===0)return;if(u%i.pageSize!=0)throw"Got cleared data for index "+u+" which is not aligned with the page size of "+i.pageSize;let g=Math.floor(u/i.pageSize),z=Math.ceil(p/i.pageSize);for(let k=0;k<z;k++){let j=g+k,X=o[f][j];i.$connector.doDeselection(X.filter(F=>E[F.key])),delete o[f][j];const ct=ot(j,v);ct&&et(ct),mt(X)}let w=i._cache;if(v){const k=i._cache.getCacheAndIndexByKey(f);w=k.cache.itemCaches[k.scaledIndex]}const H=u+z*i.pageSize;for(let k=u;k<H;k++){delete w.items[k];const j=w.itemCaches[k];delete w.itemCaches[k];const X=j&&j.parentItem.key;X&&delete w.itemkeyCaches[X]}i._cache.updateSize()}),i.$connector.reset=r(function(){i.size=0,gt(o),gt(i._cache.items),gt(C),_&&_.cancel(),c&&c.cancel(),y&&y.cancel(),_=void 0,c=void 0,d=[],h=[],ht()});const gt=u=>Object.keys(u).forEach(p=>delete u[p]);i.$connector.updateSize=u=>i.size=u,i.$connector.updateUniqueItemIdPath=u=>i.itemIdPath=u,i.$connector.expandItems=r(function(u){let p=Array.from(i.expandedItems);u.filter(v=>!i._isExpanded(v)).forEach(v=>p.push(v)),i.expandedItems=p}),i.$connector.collapseItems=r(function(u){let p=Array.from(i.expandedItems);u.forEach(v=>{let f=i._getItemIndexInArray(v,p);f>=0&&p.splice(f,1)}),i.expandedItems=p,u.forEach(v=>i.$connector.removeFromQueue(v))}),i.$connector.removeFromQueue=r(function(u){let p=i.getItemId(u);delete n[p],i.$connector.removeFromArray(d,v=>v.itemkey===p),i.$connector.removeFromArray(h,v=>v.parentKey===p)}),i.$connector.removeFromArray=r(function(u,p){if(u.length)for(let v=u.length-1;v--;)p(u[v])&&u.splice(v,1)}),i.$connector.confirmParent=r(function(u,p,v){o[p]||(o[p]={}),o[p].size=v,v===0&&(o[p][0]=[]);let f=Object.getOwnPropertyNames(n[p]||{});for(let g=0;g<f.length;g++){let z=f[g],w=C[p]||[0,0];const H=n[p][z];if(o[p]&&o[p][z]||z<w[0]||z>w[1]){delete n[p][z];let k=o[p][z]||new Array(v);H(k,v)}else H&&v===0&&(delete n[p][z],H([],v))}i.$server.confirmParentUpdate(u,p),i.loading||i.__updateVisibleRows()}),i.$connector.confirm=r(function(u){let p=Object.getOwnPropertyNames(a);for(let v=0;v<p.length;v++){let f=p[v],g=C[b]||[0,0];const z=i.size?Math.ceil(i.size/i.pageSize)-1:0,w=Math.min(g[1],z),H=a[f];o[b]&&o[b][f]||f<g[0]||+f>w?(delete a[f],o[b][f]?H(o[b][f]):(H(new Array(i.pageSize)),i.requestContentUpdate()),i._debounceIncreasePool&&i._debounceIncreasePool.flush()):H&&i.size===0&&(delete a[f],H([]))}i.$server.confirmUpdate(u)}),i.$connector.ensureHierarchy=r(function(){for(let u in o)u!==b&&delete o[u];gt(C),i._cache.itemCaches={},i._cache.itemkeyCaches={},ht()}),i.$connector.setSelectionMode=r(function(u){if((typeof u=="string"||u instanceof String)&&x.indexOf(u)>=0)$=u,E={},i.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"}),i.$connector.updateMultiSelectable=r(function(){!i.$||($===x[0]?i.$.table.setAttribute("aria-multiselectable",!1):$===x[1]?i.$.table.removeAttribute("aria-multiselectable"):i.$.table.setAttribute("aria-multiselectable",!0))}),i._createPropertyObserver("isAttached",()=>i.$connector.updateMultiSelectable()),i.$connector.setVerticalScrollingEnabled=r(function(u){le(i.$.table,u)});const le=function(u,p){u.style.overflowY=p?"":"hidden",u.removeEventListener("wheel",u.__wheelListener),!p&&u.addEventListener("wheel",u.__wheelListener=r(v=>{v.deltaX?Object.defineProperty(v,"deltaY",{value:0}):v.stopImmediatePropagation()}))};i.addEventListener("vaadin-context-menu-before-open",r(function(u){const{key:p,columnId:v}=u.detail;i.$server.updateContextMenuTargetItem(p,v)})),i.getContextMenuBeforeOpenDetail=r(function(u){const p=u.detail.sourceEvent||u,v=i.getEventContext(p),f=v.item&&v.item.key||"",g=v.column&&v.column.id||"";return{key:f,columnId:g}}),i.addEventListener("click",r(u=>Q(u,"item-click"))),i.addEventListener("dblclick",r(u=>Q(u,"item-double-click"))),i.addEventListener("column-resize",r(u=>{i._getColumnsInOrder().filter(v=>!v.hidden).forEach(v=>{v.dispatchEvent(new CustomEvent("column-drag-resize"))}),i.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:u.detail.resizedColumn._flowId}}))})),i.addEventListener("column-reorder",r(u=>{const p=i._columnTree.slice(0).pop().filter(v=>v._flowId).sort((v,f)=>v._order-f._order).map(v=>v._flowId);i.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:p}}))})),i.addEventListener("cell-focus",r(u=>{const p=i.getEventContext(u);["header","body","footer"].indexOf(p.section)!==-1&&i.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:p.item?p.item.key:null,internalColumnId:p.column?p.column._flowId:null,section:p.section}}))}));function Q(u,p){if(u.defaultPrevented)return;const v=u.target,f=i.getEventContext(u),g=f.section;G1(v)||v instanceof HTMLLabelElement||f.item&&g!=="details"&&(u.itemKey=f.item.key,f.column&&(u.internalColumnId=f.column._flowId),i.dispatchEvent(new CustomEvent(p,{detail:u})))}i.cellClassNameGenerator=r(function(u,p){const v=p.item.style;if(!!v)return(v.row||"")+" "+(u&&v[u._flowId]||"")}),i.dropFilter=r(u=>!u.item.dropDisabled),i.dragFilter=r(u=>!u.item.dragDisabled),i.addEventListener("grid-dragstart",r(u=>{i._isSelected(u.detail.draggedItems[0])?(i.__selectionDragData?Object.keys(i.__selectionDragData).forEach(p=>{u.detail.setDragData(p,i.__selectionDragData[p])}):(i.__dragDataTypes||[]).forEach(p=>{u.detail.setDragData(p,u.detail.draggedItems.map(v=>v.dragData[p]).join(`
`))}),i.__selectionDraggedItemsCount>1&&u.detail.setDraggedItemsCount(i.__selectionDraggedItemsCount)):(i.__dragDataTypes||[]).forEach(p=>{u.detail.setDragData(p,u.detail.draggedItems[0].dragData[p])})}))})(t)}})();const br=window;br.Vaadin=br.Vaadin||{};br.Vaadin.setLitRenderer=(r,e,t,i,a,n)=>{const o=Function(`
    "use strict";

    const [render, html, returnChannel] = arguments;

    return (root, {item, index}, itemKey) => {
      ${a.map(l=>`
          const ${l} = (...args) => {
            if (itemKey !== undefined) {
              returnChannel('${l}', itemKey, args[0] instanceof Event ? [] : [...args]);
            }
          }`).join("")}

      render(html\`${t}\`, root)
    }
  `)(Pn,Kl,i),s=(l,h,{index:c,item:d})=>{l.__litRenderer!==s&&(l.innerHTML="",delete l._$litPart$,l.__litRenderer=s);const _={};for(const m in d)m.startsWith(n)&&(_[m.replace(n,"")]=d[m]);o(l,{index:c,item:_},d.key)};s.__rendererId=n,r[e]=s};br.Vaadin.unsetLitRenderer=(r,e,t)=>{var i;((i=r[e])==null?void 0:i.__rendererId)===t&&(r[e]=void 0)};const Hl=document.createElement("template");Hl.innerHTML=`<style>
  ${Sn.cssText}
  ${Gs.cssText}
</style>`;document.head.appendChild(Hl.content);(function(){function r(t){const i=t._card;i&&(i.className=t.className)}const e=new MutationObserver(t=>{t.forEach(i=>{i.type==="attributes"&&i.attributeName==="class"&&r(i.target)})});window.Vaadin.Flow.notificationConnector={initLazy:function(t){t.$connector||(t.$connector={},t.addEventListener("opened-changed",i=>{i.detail.value&&r(t)}),e.observe(t,{attributes:!0,attributeFilter:["class"]}),r(t))}}})();{class r extends da{static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},indeterminate:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, indeterminate, selectAllHidden)"]}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){super.disconnectedCallback(),this._grid&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent))}_defaultHeaderRenderer(t,i){let a=t.firstElementChild;a||(a=document.createElement("vaadin-checkbox"),a.id="selectAllCheckbox",a.setAttribute("aria-label","Select All"),a.classList.add("vaadin-grid-select-all-checkbox"),a.addEventListener("click",this._onSelectAllClick.bind(this)),t.appendChild(a));const n=this.selectAll;a.hidden=this.selectAllHidden,a.checked=n,a.indeterminate=this.indeterminate}_defaultRenderer(t,i,{item:a,selected:n}){let o=t.firstElementChild;o||(o=document.createElement("vaadin-checkbox"),o.setAttribute("aria-label","Select Row"),o.addEventListener("click",this._onSelectClick.bind(this)),t.appendChild(o)),o.__item=a,o.checked=n}_onSelectClick(t){t.currentTarget.checked?this._grid.$connector.doDeselection([t.currentTarget.__item],!0):this._grid.$connector.doSelection([t.currentTarget.__item],!0)}_onSelectAllClick(t){if(t.preventDefault(),this._grid.hasAttribute("disabled")){t.currentTarget.checked=!t.currentTarget.checked;return}this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(t){}_onDeselectEvent(t){t.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(r.is,r),Vaadin.GridFlowSelectionColumnElement=r}const J5=function(r,e=!1){const t=document.createElement("template");t.innerHTML=r,document.head[e?"insertBefore":"appendChild"](t.content,document.head.firstChild)};let Fe;const Bs=document.getElementsByTagName("script");for(let r=0;r<Bs.length;r++){const e=Bs[r];if(e.getAttribute("type")=="module"&&e.getAttribute("data-app-id")&&!e["vaadin-bundle"]){Fe=e;break}}if(!Fe)throw new Error("Could not find the bundle script to identify the application id");Fe["vaadin-bundle"]=!0;window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const Vl=window.Vaadin.Flow.fallbacks;Vl[Fe.getAttribute("data-app-id")]={};Vl[Fe.getAttribute("data-app-id")].loadFallback=function(){return Xl(()=>import("./generated-flow-imports-fallback.a61a0ac1.js"),["./generated-flow-imports-fallback.a61a0ac1.js","./indexhtml.8be683d2.js"],import.meta.url)};const i_=Object.freeze(Object.defineProperty({__proto__:null,addCssBlock:J5},Symbol.toStringTag,{value:"Module"}));export{pa as $,Sh as A,Oe as B,A as C,Ct as D,f1 as E,ut as F,Tr as G,tt as H,pt as I,Yn as J,Le as K,It as L,Jn as M,hu as N,uu as O,Vh as P,ae as Q,Cu as R,Cd as S,Y as T,U1 as U,ru as V,G0 as W,S4 as X,oe as Y,Dr as Z,tl as _,Xs as a,t0 as a0,_t as a1,Xd as a2,qe as a3,r0 as a4,al as a5,cl as a6,Cr as a7,H0 as a8,su as a9,Sn as aA,Gs as aB,ie as aC,to as aD,Wn as aE,Ft as aF,eo as aG,Lt as aH,Xn as aI,Li as aJ,au as aK,R1 as aL,e0 as aM,Wu as aN,ju as aO,at as aP,lu as aQ,cu as aR,yo as aS,i_ as aT,a0 as aa,Ht as ab,kd as ac,$1 as ad,Sr as ae,qu as af,jn as ag,kr as ah,d2 as ai,dl as aj,Or as ak,Pr as al,ul as am,Mr as an,so as ao,At as ap,Wt as aq,mo as ar,L as as,lt as at,Qn as au,Kn as av,G1 as aw,i0 as ax,c2 as ay,Vt as az,P0 as b,gh as c,U as d,Nt as e,Pu as f,rt as g,Au as h,Fn as i,sl as j,O as k,a4 as l,Ar as m,fd as n,n4 as o,r4 as p,R as q,o4 as r,Ee as s,ia as t,Ks as u,Lh as v,T as w,Fh as x,ol as y,nl as z};
