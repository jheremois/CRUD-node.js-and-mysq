/*
Color change function:
*/
const color_change = (div) =>{
    var chage = document.getElementById(div)

    chage.style.transformOrigin = 'all'
    chage.style.transitionDuration = '5000ms'

    setTimeout(() => {
        chage.style.background = '#355C7D'    
    }, 100);

    setTimeout(() => {
        chage.style.background = '#153d5f'    
    }, 4000);

    setTimeout(() => {
        chage.style.background = '#3f78aa'    
    }, 8000);
    
    setTimeout(() => {
        chage.style.background = '#1e3a53'    
    }, 12000);
    
}

/*
    run function:
*/
color_change('head')
setInterval(() => {
    color_change('head')
}, 13000);



/*
    chage font weight:
*/

const font_w = (font) =>{
    for (let i = 0; i < font.length; i++) {
     
        font[i].style.fontWeight = '100'

    }
}

let h2s = document.querySelectorAll('#titl')

font_w(h2s)