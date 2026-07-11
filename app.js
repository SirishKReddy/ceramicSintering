(() => {
  const root = document.getElementById('root');
  const localBundle = './.build/appjs.00.b64';
  const rawBundle = 'https://raw.githubusercontent.com/SirishKReddy/ceramicSintering/main/.build/appjs.00.b64';

  function showError(message) {
    if (!root) return;
    root.innerHTML = `
      <main style="min-height:100vh;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#eaf6ff;background:#050b13">
        <h1 style="font-size:22px;margin:0 0 12px">Ceramic simulator could not start</h1>
        <p style="line-height:1.5;color:#b8c7d9">${message}</p>
        <button onclick="location.reload()" style="min-height:44px;padding:10px 16px;border:0;border-radius:10px;background:#39d98a;color:#06110b;font-weight:700">Reload</button>
      </main>`;
  }

  async function fetchText(url) {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}`);
    return response.text();
  }

  async function loadBundle() {
    try {
      return await fetchText(localBundle);
    } catch (localError) {
      console.warn('Local Pages asset unavailable; using GitHub raw fallback.', localError);
      return fetchText(`${rawBundle}?v=881ca0d610b35429bccef1f96df3e2170e8e9f24`);
    }
  }

  if (!window.React || !window.ReactDOM) {
    showError('The React browser libraries did not load. Check the internet connection and reload this page.');
    return;
  }

  loadBundle()
    .then((encoded) => {
      const clean = encoded.replace(/\s+/g, '');
      const binary = atob(clean);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
      const source = new TextDecoder('utf-8').decode(bytes);
      (0, eval)(source);
    })
    .catch((error) => {
      console.error(error);
      showError('The simulation file could not be loaded. Wait about one minute for GitHub Pages to finish updating, then reload.');
    });
})();