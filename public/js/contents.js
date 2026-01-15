
// sidePannel 슬라이드 토글
document.addEventListener("DOMContentLoaded",()=>{
  const toggleBtn=document.querySelector('[data-toggle="side-panel"]');
  const sidePannel=document.querySelector('[data-panel="side"]');

  if(!toggleBtn||!sidePannel) return;

  toggleBtn.addEventListener("click",()=>{
    const isOpen=toggleBtn.getAttribute("aria-expanded")==="true";
    toggleBtn.setAttribute("aria-expanded",String(!isOpen));
    sidePannel.classList.toggle("is-closed");
  });
});

// 탭버튼
document.addEventListener('DOMContentLoaded',()=>{
  const tabs=document.querySelectorAll('.tabDefault button');
  const panels=document.querySelectorAll('[data-tab-content]');

  function activateTab(btn){
    const targetId=btn.dataset.target;

    tabs.forEach(b=>b.classList.remove('on'));
    panels.forEach(p=>p.classList.remove('is-active'));

    btn.classList.add('on');
    document.getElementById(targetId)?.classList.add('is-active');
  }

  tabs.forEach(btn=>{
    btn.addEventListener('click',()=>activateTab(btn));
    if(btn.classList.contains('on')) activateTab(btn);
  });
});



