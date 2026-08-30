// 汉堡菜单：小屏时开关侧边栏
(function(){
  var burger = document.querySelector('.hamburger');
  var overlay = document.querySelector('.overlay');
  function closeMenu(){ document.body.classList.remove('menu-open'); }
  if(burger){
    burger.addEventListener('click', function(){
      document.body.classList.toggle('menu-open');
    });
  }
  if(overlay){ overlay.addEventListener('click', closeMenu); }
  var navLinks = document.querySelectorAll('.nav a');
  for(var i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click', closeMenu);
  }
})();

// 实时时钟
(function(){
  var WEEK = ['日','一','二','三','四','五','六'];
  function pad(n){ return n<10 ? '0'+n : ''+n; }
  function updateClock(){
    var now = new Date();
    var t = document.querySelector('.clock .time');
    var d = document.querySelector('.clock .date');
    if(t){ t.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds()); }
    if(d){ d.textContent = now.getFullYear() + '年' + (now.getMonth()+1) + '月' + now.getDate() + '日 · 星期' + WEEK[now.getDay()]; }
  }
  updateClock();
  setInterval(updateClock, 1000);
})();

// 微信复制
function copyWechat(){
  var text = 'uhyu33';
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      alert('微信号：uhyu33（已复制，可直接添加）');
    });
  } else {
    alert('微信号：uhyu33');
  }
}