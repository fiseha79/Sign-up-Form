function onChange() {
    
    const msg = document.querySelector('#error');
    const content = document.createElement('h4');
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    if (confirm.value === password.value) {

       content.textContent = 'Password Valid';
       msg.appendChild(content);
    } else {
        content.textContent = '*Password Does not Match';

       
        msg.appendChild(content);
        msg.style.color = 'red';
        
    }
    
    
    

  }

 
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', onChange);