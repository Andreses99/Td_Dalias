window.addEventListener("scroll",function(){
    
    var header=document.querySelector("header");
    header.classList.toggle('down', window.scrollY>0);
  

    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener("click",()=>{
        menu.classList.add('active');
       menuBtn.style.display = 'none'

    });
    closeBtn.addEventListener("click",()=>{
        menu.classList.remove('active');
        menuBtn.style.display = 'block'
    });

});
