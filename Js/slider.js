
var  tab   =  document.querySelectorAll('.slider img')
var  tabLi =  document.querySelectorAll('.marquer li')
var  T     = tab.length;
var next   =  document.querySelector('.slider #next');
var prev   =  document.querySelector('.slider #previous');
var fig    = document.querySelector('.slider figure')



var id = 0;
var leTemps = 3500;

//Previous ou forBack
prev.addEventListener('click', function() {

    if(id === 0)
    {
       id = T-1;
    }else 
        {
               id--;       
        }

        afficher(id)
        fig.classList.remove('derouler_animation')
         
})

//Next  ou Forward
next.addEventListener('click', function() {

    if(id === (T-1))
    {
       id = 0;
    }else 
        {
               id++;   
        }
        afficher(id)
     
})
 
//Function d'affichage

 function afficher(params) {
    //On masque tous les autres elements
    for(let i = 0; i< T; ++i)
    {
        tab[i].style.display = "none"
        tabLi[i].classList.remove('active')
    }
    //on aafiche l'element courant
    tab[params].style.display = "block"
    tabLi[params].classList.toggle('active')
 }


///
setInterval(function() {
   prev.click()
},leTemps)



 