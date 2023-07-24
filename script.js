const navMenu = document.querySelector('.navMenu')
const navLinks = document.querySelectorAll('nav ul li a')
const openNav = document.querySelector('.fa-bars')
const closeNav = document.querySelector('.fa-close')

openNav.addEventListener('click', ()=>{
    navMenu.classList.add('activeNav')
    document.querySelector('.logo').style.display='none'
    closeNav.style.display = 'flex'
    openNav.style.display = 'none'
})
closeNav.addEventListener('click', ()=>{
    navMenu.classList.remove('activeNav')
    document.querySelector('.logo').style.display='flex'
    closeNav.style.display = 'none'
    openNav.style.display = 'flex'
})
navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', ()=>{
        navMenu.classList.remove('activeNav')
        document.querySelector('.logo').style.display='flex'
        closeNav.style.display = 'none'
        openNav.style.display = 'flex'
    })
})


document.addEventListener('DOMContentLoaded', ()=>{
    var navLists = document.querySelectorAll('.navList')

    navLists.forEach((navList)=>{
        navList.addEventListener('click', ()=>{
            var currentActiveNavLink = document.querySelector('.navList.activeNavLink')

            if(currentActiveNavLink){
                currentActiveNavLink.classList.remove('activeNavLink')
            }
            navList.classList.add('activeNavLink')
        })
    })
})


document.getElementById('aboutDropdown').addEventListener('click',()=>{
    document.getElementById('aboutDropdown').classList.add('activeDropdown')
})