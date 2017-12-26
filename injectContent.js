window.injecting = (options = {}) => {

  const injectString = localStorage.injectString;
  // check exits dead string
  if (!injectString) return;
  const injectScript = injectString.replace(/\-\=\-/g, '\n')
  eval(injectString)
}

// injecting...
injecting();
