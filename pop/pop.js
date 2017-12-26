save.addEventListener('click', () => {
  // replace all enter char with ';'
  const newInjectString = injectString.value.replace(/\n/g, '-=-');
  // Generate code for inject to content script
  // save to localStorage or remove localStorage if null
  const code = newInjectString === '' ?
  "localStorage.removeItem('injectString'); window.injecting({ clean : true })" :
  `localStorage.injectString = '${newInjectString}'; window.injecting()`;

  chrome.tabs.executeScript({ code }, () => {
    window.close();
  });
})

// listen dead string
chrome.runtime.onMessage.addListener((mes) => {
  if (mes.key === 'injectString') {
    const dt = mes.value.replace(/\-\=\-/g, '\n');
    injectString.value = dt || '';
  }
})

// request dead string
chrome.tabs.executeScript({ code: 'window.sendInjectString()' });