// public/content.js
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href =
  'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'; // Adjust the version as needed

document.head.appendChild(link);

var tabsContainer = document.createElement('div');
tabsContainer.id = 'tabsContainer';
tabsContainer.className = 'h-12 bg-gray-100 fixed flex items-center';
tabsContainer.style.top = '1.175rem';
tabsContainer.style.zIndex = '100';
tabsContainer.style.width = 'calc(100% - 38px)';
tabsContainer.style.margin = '0 1.175rem';

console.log('Container created');

setTimeout(() => {
  const chatContainer = document.getElementsByClassName('two _1jJ70')[0];
  if (chatContainer) {
    chatContainer.style.height = '39rem';
    chatContainer.style.top = '4.175rem';
    chatContainer.parentNode.insertBefore(tabsContainer, chatContainer);
  }
}, 10000);

// Restricting the Whatsapp root element height
// const whatsappRoot = document.getElementById('app');
// if (whatsappRoot) {
//   whatsappRoot.style.position = 'absolute';
//   whatsappRoot.style.top = '3.8rem';
//   whatsappRoot.style.height = 'calc(100% - 3.8rem)';
// }

// Loading js file
var script = document.createElement('script');
const jsFile = './static/main.js';

script.defer = true;
script.src = chrome.runtime.getURL(jsFile);
document.body.appendChild(script);
console.log('Main.js fiel injected');
