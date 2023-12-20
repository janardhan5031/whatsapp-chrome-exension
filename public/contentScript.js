console.log("Content script file loaded successfully");

var root = document.getElementById("whatsapp-extension-root");
if (!root) {
  root = document.createElement("div");
  root.id = "whatsapp-extension-root";
  document.body.appendChild(root);
}

// Find the correct script and CSS filenames without the hash dynamically
var script = document.createElement("script");
var cssLink = document.createElement("link");

jsFile = "static/main-6Hvvlwwi.js";
script.defer = true;
script.src = chrome.runtime.getURL(jsFile);

document.body.appendChild(script);

// chrome.runtime.getPackageDirectoryEntry(function (root) {
//   root.getFile("manifest.json", {}, function (fileEntry) {
//     fileEntry.file(function (file) {
//       var reader = new FileReader();
//       reader.onloadend = function (e) {
//         try {
//           var manifest = JSON.parse(this.result);
//           var filenames = manifest.web_accessible_resources;

//           // Assume your main script and CSS files have fixed names
//           var mainScript = filenames.find(
//             (filename) => filename === "main-6Hvvlwwi.js"
//           );
//           var mainCss = filenames.find(
//             (filename) => filename === "main-cfVfczdt.css"
//           );

//           if (mainScript) {
//             script.src = chrome.runtime.getURL(mainScript);
//             cssLink.href = chrome.runtime.getURL(mainCss);

//             script.defer = true;

//             // Append the script and link elements to the document
//             document.body.appendChild(script);
//             document.head.appendChild(cssLink);
//           } else {
//             console.error("Main script not found.");
//           }
//         } catch (error) {
//           console.error("Error parsing manifest:", error);
//         }
//       };
//       reader.readAsText(file);
//     });
//   });
// });
