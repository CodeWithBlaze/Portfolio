function toggleNavbar(){const a=document.getElementById("navbar-menu").classList;a.contains("navbar-in")?(a.remove("navbar-in"),a.add("navbar-out")):(document.getElementById("navbar-menu").style.display="block",a.remove("navbar-out"),a.add("navbar-in"))}window.addEventListener("resize",()=>{if(961<window.innerWidth){const a=document.getElementById("navbar-menu");a.style.display="block",a.classList.remove("navbar-out")}});