import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';
// import WebSocketInitiator from './utils/websocket-initiator';
// import FooterToolsInitiator from './utils/footer-tools-initiator';
// import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navmenu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

// FooterToolsInitiator.init({
//   subscribeButton: document.querySelector('#subscribePushNotification'),
//   unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
// });
