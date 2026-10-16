document.addEventListener('DOMContentLoaded',function(){var toggle=document.querySelector('.menu-toggle');var nav=document.querySelector('.main-nav');if(toggle&&nav){toggle.addEventListener('click',function(){var open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});}});
document.addEventListener('DOMContentLoaded',function(){
  var button=document.querySelector('.theme-toggle');
  if(!button)return;
  var icon=button.querySelector('.theme-toggle-icon');
  var label=button.querySelector('.theme-toggle-label');
  function setTheme(theme){
    document.body.setAttribute('data-theme',theme);
    try{localStorage.setItem('cart2mart-theme',theme)}catch(e){}
    var light=theme==='light';
    button.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');
    button.setAttribute('title',light?'Switch to dark mode':'Switch to light mode');
    if(icon)icon.textContent=light?'☾':'☼';
    if(label)label.textContent=light?'Dark':'Light';
  }
  var saved='dark';try{saved=localStorage.getItem('cart2mart-theme')||'dark'}catch(e){}
  setTheme(saved);
  button.addEventListener('click',function(){setTheme(document.body.getAttribute('data-theme')==='light'?'dark':'light')});
});
