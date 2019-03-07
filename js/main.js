let news = document.querySelector('.news')
let status = false
news.addEventListener('click' , function(e){
    
    if(e.target.textContent === 'Read more'){
        e.target.textContent = 'hide'
        let content = e.target.parentElement.querySelector('p').nextElementSibling
        content.setAttribute('style' , ' opacity : 1 ; transition : 1s ; display : block')
       
    }
    else if(e.target.textContent === 'hide'){
       
       e.target.textContent = 'Read more'
        let content = e.target.parentElement.querySelector('p').nextElementSibling
        content.setAttribute('style' , 'opacity : 0 ; transition : 1s ; display : none  ')
    }
    
})



let featured_effects = document.querySelectorAll('.featured_effects')

for(let i = 0 ; i < featured_effects.length ; i++){
    featured_effects[i].addEventListener('mouseover' , function(){
       
    })
}