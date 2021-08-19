import { BaseSvg, IconProps } from 'icons';

export default ({ fill = '#a9adc0', width = '24px', height = '24px', style = {} }: IconProps) =>
  BaseSvg({
    // eslint-disable-next-line max-len
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="${fill}" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9425 10.8979C19.7457 10.9397 19.5694 11.0422 19.4418 11.189C19.2661 11.3669 18.9985 11.4363 18.7505 11.3681L17.8923 11.1442C17.6609 11.0836 17.48 10.9138 17.4155 10.6964C17.3691 10.5022 17.2971 10.3141 17.2009 10.1367C17.076 9.89428 17.134 9.60367 17.344 9.42023L18.5836 8.27835C18.8032 8.08386 19.1325 8.04747 19.3942 8.18879C19.4758 8.23195 19.5643 8.26221 19.6564 8.27835C19.9263 8.32448 20.2042 8.25921 20.4193 8.09923C20.6472 7.91355 20.7635 7.63448 20.7302 7.35281C20.6968 7.07113 20.5182 6.82283 20.2524 6.68868C19.9299 6.52641 19.5352 6.56172 19.2511 6.77824C19.0561 6.91834 18.9346 7.13035 18.9174 7.36037C18.9048 7.59817 18.7468 7.80765 18.5121 7.89772L16.7241 8.63659C16.4643 8.74083 16.1632 8.68781 15.9612 8.50225C15.7706 8.34554 15.5798 8.18877 15.3653 8.03206C15.12 7.87309 15.0137 7.58258 15.103 7.31559L15.2461 6.8678C15.258 6.8678 15.2759 6.87339 15.2937 6.87899C15.3116 6.88459 15.3295 6.89019 15.3414 6.89019C15.7047 6.95062 16.0709 6.79922 16.2688 6.50679C16.4667 6.21435 16.4572 5.83866 16.2447 5.5554C16.0322 5.27214 15.6587 5.13728 15.2989 5.21388C14.9391 5.29048 14.6641 5.56341 14.6024 5.90504C14.5594 6.08901 14.5935 6.28146 14.6977 6.44239C14.8078 6.66151 14.7803 6.91977 14.6262 7.11408C14.4536 7.32605 14.1592 7.41526 13.8872 7.33798C13.6488 7.27081 13.4342 7.22603 13.1958 7.18125C12.9399 7.1368 12.7299 6.9653 12.6475 6.73346L11.98 4.6736C11.9919 4.6736 12.0098 4.66801 12.0277 4.66241C12.0456 4.65681 12.0635 4.65121 12.0754 4.65121C12.3281 4.54416 12.517 4.337 12.5907 4.08601C12.6644 3.83501 12.6153 3.56621 12.4568 3.35261C12.2419 3.08148 11.88 2.95076 11.5271 3.01676C11.256 3.06854 11.0241 3.23213 10.8955 3.46223C10.767 3.69232 10.7556 3.96451 10.8643 4.20342C10.9537 4.37263 11.0948 4.51296 11.2696 4.60643C11.5026 4.72433 11.635 4.96417 11.6034 5.21096L11.4842 6.68868C11.4658 6.96286 11.2651 7.19626 10.9835 7.27081C10.5442 7.38063 10.1202 7.53844 9.72002 7.741C9.44195 7.8809 9.09822 7.82556 8.88564 7.60666L8.5042 7.20364L8.57572 7.13647C8.81861 6.87341 8.86857 6.49873 8.70226 6.18753C8.53595 5.87633 8.1862 5.69007 7.81647 5.71579C7.44673 5.74152 7.13003 5.97414 7.01435 6.30495C6.89867 6.63577 7.00687 6.99945 7.28838 7.22603C7.43924 7.35319 7.634 7.42477 7.83669 7.42754C8.09687 7.44025 8.323 7.59954 8.40884 7.83055L8.5042 8.05445C8.60313 8.28513 8.54695 8.54895 8.36116 8.72614C8.12635 8.9666 7.91863 9.22921 7.74133 9.50978C7.60189 9.7265 7.34209 9.8485 7.07382 9.82324L4.83289 9.62173V9.50978C4.82628 9.25229 4.69583 9.01148 4.47811 8.85486C4.26039 8.69824 3.97885 8.64268 3.71243 8.70375C3.25113 8.80315 2.94594 9.21568 3.00768 9.65638C3.06942 10.0971 3.47785 10.4214 3.95082 10.4054C4.15509 10.4106 4.35289 10.3379 4.49914 10.2039C4.70737 10.0624 4.98039 10.0368 5.21433 10.1367L6.59703 10.786C6.85671 10.9058 7.00908 11.1651 6.97846 11.4353C6.95072 11.6508 6.9348 11.8675 6.93078 12.0846C6.93398 12.3017 6.94989 12.5185 6.97846 12.7339C7.01157 12.9762 6.90202 13.2162 6.69239 13.3608L5.09036 14.4176C5.07844 14.4064 5.06652 14.3896 5.0546 14.3728C5.04268 14.356 5.03076 14.3392 5.01884 14.3281C4.83195 14.1324 4.55967 14.0284 4.28044 14.0459C4.00121 14.0633 3.74605 14.2004 3.58846 14.4176C3.31995 14.7752 3.37931 15.265 3.72653 15.5568C4.07375 15.8486 4.59865 15.8497 4.94732 15.5595C5.1045 15.4344 5.20648 15.2588 5.2334 15.0669C5.28986 14.8281 5.48267 14.6384 5.73403 14.5743L6.8545 14.3057C7.14928 14.2344 7.45903 14.3526 7.61737 14.5967C7.77038 14.842 7.94587 15.0742 8.14184 15.2908C8.32375 15.5024 8.34289 15.799 8.18952 16.0297L7.85576 16.567C7.82948 16.5435 7.79625 16.5279 7.7604 16.5222C7.50534 16.4201 7.21485 16.4315 6.96969 16.5531C6.72452 16.6747 6.55083 16.8937 6.4969 17.1492C6.42215 17.4746 6.56324 17.8103 6.8545 18C7.08038 18.1539 7.36857 18.203 7.63761 18.1333C7.90664 18.0635 8.1273 17.8827 8.2372 17.6417C8.31196 17.4637 8.32856 17.2689 8.28488 17.082C8.22598 16.8406 8.31845 16.5887 8.52327 16.4327L8.59479 16.3655C8.82472 16.1839 9.15433 16.1657 9.40534 16.3207C9.67077 16.4771 9.94991 16.6119 10.2397 16.7238C10.5214 16.838 10.694 17.1083 10.6688 17.3954L10.4304 19.2762H10.3112C9.80441 19.27 9.38822 19.6509 9.38166 20.1269C9.37509 20.603 9.78062 20.9939 10.2875 21C10.7943 21.0062 11.2105 20.6254 11.2172 20.1494C11.2198 19.962 11.1523 19.7798 11.0264 19.6344C10.8695 19.4394 10.8508 19.1756 10.9788 18.9627L12.0277 17.1044H12.2184C12.6612 17.1103 13.1026 17.0575 13.5296 16.9477C13.8012 16.8849 14.0873 16.9716 14.2686 17.1715L14.9838 18.0447C14.9567 18.0724 14.9243 18.0952 14.8885 18.1119C14.691 18.2967 14.5926 18.5551 14.6203 18.8155C14.648 19.076 14.799 19.3109 15.0315 19.4553C15.4223 19.6875 15.9361 19.6086 16.2279 19.2718C16.5197 18.9349 16.4973 18.4464 16.1758 18.1343C16.0343 18.0007 15.8501 17.9142 15.6513 17.888C15.3905 17.8534 15.1757 17.678 15.103 17.4402L14.96 16.97C14.8706 16.703 14.977 16.4125 15.2222 16.2536C15.5497 16.0519 15.8478 15.811 16.1091 15.5371C16.3151 15.3432 16.6236 15.2817 16.8958 15.3804L18.9221 16.1864C18.9102 16.1976 18.9043 16.2144 18.8983 16.2312C18.8923 16.248 18.8864 16.2648 18.8745 16.276C18.7315 16.7321 19.0087 17.2108 19.4941 17.3459C19.9795 17.481 20.4898 17.2215 20.6345 16.7658C20.7792 16.3102 20.5037 15.8305 20.0188 15.6938C19.8222 15.6452 19.6146 15.653 19.4228 15.7162C19.1761 15.7975 18.9019 15.746 18.7076 15.5819L17.4202 14.44C17.228 14.2576 17.1632 13.9882 17.2534 13.7459C17.4466 13.2203 17.5434 12.6676 17.5394 12.1115V11.9771L19.1605 11.8204C19.1568 11.8591 19.1651 11.898 19.1844 11.9324C19.246 12.1871 19.428 12.4016 19.6786 12.5149C19.9292 12.6282 20.2212 12.6281 20.4717 12.5145C20.7917 12.3689 20.9953 12.0648 20.9962 11.7308C21.0224 11.4738 20.9124 11.221 20.702 11.0547C20.4917 10.8884 20.2077 10.8298 19.9425 10.8979ZM8.9761 13.1145C8.52314 13.1145 8.40395 12.51 8.40395 11.9503C8.40395 11.3905 8.78538 10.9427 9.23833 10.9427C10.0727 10.9427 10.1919 11.5696 10.1919 12.1294C10.1919 12.6891 9.43382 13.1145 8.9761 13.1145ZM11.0741 14.7937C11.0741 15.3087 11.7655 15.7341 12.3853 15.7341C12.9701 15.7622 13.4699 15.3427 13.5058 14.7937C13.5058 14.2564 13.0528 14.0325 12.433 14.0325C11.8132 14.0325 11.0741 14.2788 11.0741 14.7937ZM12.2661 11.1443C11.5748 11.1443 10.7404 10.5845 10.7404 9.86804C10.7404 9.15157 11.5986 8.59183 12.2661 8.59183C12.9336 8.59183 13.5058 8.8829 13.5058 9.59937C13.5058 10.3158 12.9575 11.1443 12.2661 11.1443ZM13.7918 12.2681C13.7918 12.7159 14.3401 13.2981 15.0077 13.2981C15.6752 13.2981 16.2235 12.9398 16.2235 12.492C16.2235 12.0442 15.6752 11.686 15.0077 11.686C14.3401 11.686 13.7918 11.8203 13.7918 12.2681Z" fill="white"/></svg>`,
    width,
    height,
    style: { ...style },
  });
