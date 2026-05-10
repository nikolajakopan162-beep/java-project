function App() {
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = '';
  const strictModeDiv = document.createElement('div');
  strictModeDiv.id = 'strict-mode';
  const appContent = document.createTextNode('Hello from vanilla JS App!');
  strictModeDiv.appendChild(appContent);
  root.appendChild(strictModeDiv);
  console.time('App render');
  console.timeEnd('App render');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', App);
} else {
  App();
}