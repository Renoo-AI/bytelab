// ByteLearn Game Engine - Redirect mode
// game.html is now the hub SPA. This file handles legacy direct access.

(function() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get('mode') || 'attack';
  const world = params.get('world') || '0';
  const level = params.get('level');

  if (level !== null) {
    window.location.href = `levels/${world}/${level}/index.html`;
  } else {
    window.location.href = `game.html?mode=${mode}&world=${world}`;
  }
})();
