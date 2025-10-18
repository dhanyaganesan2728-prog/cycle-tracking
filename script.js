// script.js
document.addEventListener('DOMContentLoaded', function(){
  // mascot messages (cycle)
  const mascotMsg = document.getElementById('mascot-msg');
  if (mascotMsg){
    const msgs = [
      "Hi! I'm Cy — your cycle buddy 🌸",
      "Add symptoms. I'll remind you about meds & water.",
      "Try Secret Mode if you want privacy 😉",
      "Log daily check-ins — earn badges!"
    ];
    let i=0;
    setInterval(()=> {
      mascotMsg.textContent = msgs[i % msgs.length];
      i++;
    }, 3500);
  }

  // Secret Mode toggle
  const secretBtn = document.getElementById('btn-secret');
  const overlay = document.getElementById('secret-overlay');
  const secretClose = document.getElementById('secret-close');

  function openSecret(){ overlay.classList.add('active'); }
  function closeSecret(){ overlay.classList.remove('active'); }

  if (secretBtn) secretBtn.addEventListener('click', openSecret);
  if (secretClose) secretClose.addEventListener('click', closeSecret);
  overlay.addEventListener('click', function(e){
    if (e.target === overlay) closeSecret();
  });

  // Simple calculator inside secret overlay
  let display = document.querySelector('.calc .display');
  if (display){
    let input = '';
    function update(){ display.textContent = input || '0'; }
    function press(v){
      if (v === 'C') input = '';
      else if (v === '=') {
        try { input = String(eval(input)); }
        catch(e){ input = 'Err'; }
      } else input += v;
      update();
    }
    document.querySelectorAll('.calc .key').forEach(k=>{
      k.addEventListener('click', ()=> press(k.dataset.val));
    });
    update();
  }
});
