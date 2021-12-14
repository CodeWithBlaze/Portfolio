function toggleNavbar(){
    const list = document.getElementById('navbar-menu').classList;
    if(list.contains('navbar-in')){
        list.remove('navbar-in')
        list.add('navbar-out')
    }
    else{
        document.getElementById('navbar-menu').style.display='block';
        list.remove('navbar-out')
        list.add('navbar-in')
    }
        
}
window.addEventListener('resize',()=>{
    if(window.innerWidth > 961){
        const navbar = document.getElementById('navbar-menu')
        navbar.style.display = 'block';
        navbar.classList.remove('navbar-out')
    }
})