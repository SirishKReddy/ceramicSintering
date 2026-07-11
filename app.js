(() => {
  const root = document.getElementById('root');

  function showError(message) {
    if (!root) return;
    root.innerHTML = `
      <main style="min-height:100vh;padding:24px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#eaf6ff;background:#050b13">
        <h1 style="font-size:22px;margin:0 0 12px">Ceramic simulator could not start</h1>
        <p style="line-height:1.5;color:#b8c7d9">${message}</p>
        <button onclick="location.reload()" style="min-height:44px;padding:10px 16px;border:0;border-radius:10px;background:#39d98a;color:#06110b;font-weight:700">Reload</button>
      </main>`;
  }

  if (!window.React || !window.ReactDOM) {
    showError('The React browser libraries did not load. Check the internet connection and reload this page.');
    return;
  }

  fetch('./.build/appjs.00.b64', { cache: 'no-cache' })
    .then((response) => {
      if (!response.ok) throw new Error(`Simulation bundle returned HTTP ${response.status}`);
      return response.text();
    })
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
      showError('The simulation file could not be loaded. Reload the page. If the problem continues, the repository build is incomplete.');
    });
})();
