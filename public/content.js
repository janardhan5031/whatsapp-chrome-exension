// public/content.js

var app = document.createElement("div");
app.id = "whatsapp-extension-root";
document.body.appendChild(app);

console.log("Container created");

// Restricting the Whatsapp root element height
const whatsappRoot = document.getElementById("app");
if (whatsappRoot) {
  whatsappRoot.style.position = "absolute";
  whatsappRoot.style.top = "3.8rem";
  whatsappRoot.style.height = "calc(100% - 3.8rem)";
}

// Loading js file
var script = document.createElement("script");
const jsFile = "./static/main.js";

script.defer = true;
script.src = chrome.runtime.getURL(jsFile);
document.body.appendChild(script);
console.log("Main.js fiel injected");

// Loading css file
var cssLink = document.createElement("link");
const cssFile = "./static/style.css";

cssLink.href = chrome.runtime.getURL(cssFile);
document.head.appendChild(cssLink);
console.log("Css file injected");
