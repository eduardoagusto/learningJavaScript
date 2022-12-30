setInterval(()=>{
    let text = document.querySelector('#target').innerText;
    
    text = text.split("").pop() + text.slice(0, text.length - 1);
  
    document.getElementById("target").innerText = text;
  },100);