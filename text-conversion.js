// /public/text-conversion.js
(function () {
  function decodeB64(x) {
    try { return atob(x || ""); } catch { return ""; }
  }

  // Undo the +3 Caesar shift used in your payload (letters only)
  function unshift3(s) {
    return (s || "").replace(/[a-z]/gi, (ch) => {
      const base = ch <= "Z" ? 65 : 97;      // A or a
      const n = ch.charCodeAt(0) - base;     // 0..25
      return String.fromCharCode(((n - 3 + 26) % 26) + base);
    });
  }

  function tryRender() {
    const el = document.getElementById("zkx");
    if (!el) return false;

    // data-* contain base64 of Caesar(+3)-shifted strings
    const u = unshift3(decodeB64(el.getAttribute("data-a"))); // username
    const d = unshift3(decodeB64(el.getAttribute("data-b"))); // domain
    const t = unshift3(decodeB64(el.getAttribute("data-c"))); // tld
    if (!u || !d || !t) return false;

    const addr = `${u}@${d}.${t}`;
    const a = document.createElement("a");
    a.href = `mailto:${addr}`;
    a.textContent = addr;
    el.replaceWith(a);
    return true;
  }

  function renderEmail() {
    if (tryRender()) return;

    // If hydration inserts #zkx later, swap as soon as it appears.
    const obs = new MutationObserver(() => {
      if (tryRender()) obs.disconnect();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true });

    setTimeout(tryRender, 0); // dev safety net
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderEmail);
  } else {
    renderEmail();
  }

  // Handy for debugging
  window.__tapRenderEmail = renderEmail;
})();
