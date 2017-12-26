// send injectString to background and pop
window.sendInjectString = () => {
  const injectString = localStorage.injectString
  if (injectString) chrome.runtime.sendMessage({ key: "injectString", value: injectString })
}