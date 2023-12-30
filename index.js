let projects_links_div = document.querySelectorAll('.projects_links_div');

// console.log(projects_links_div)
for (const element of projects_links_div) {
    console.log(element.children[0].setAttribute('target' , '_blank'))
    console.log(element.children[1].setAttribute('target' , '_blank'))
}



let home = document.querySelector('.home').clientHeight
let about = document.querySelector('.about').clientHeight
let sumHeight = home + about;

const html_bar = document.getElementById('html_bar')
const css_bar = document.getElementById('css_bar')
const js_bar = document.getElementById('js_bar')
const react_bar = document.getElementById('react_bar')

window.addEventListener( 'scroll' ,
    (e)=>{
        // console.log(this.scrollY)

        if (this.scrollY > sumHeight /1.6 )
        {

            // console.log('okay')
            html_bar.style.width = '89%'
            css_bar.style.width = '80%'
            js_bar.style.width = '86%'
            react_bar.style.width = '70%'
            // subtracting()
            // html_bar.style.transition = '.8s ease-in-out 0s'
        }
        else if(this.scrollY < sumHeight / 1.7)
        {
            html_bar.style.width = '19%'
            css_bar.style.width = '13%'
            js_bar.style.width = '16%'
            react_bar.style.width = '10%'
        }
    }
)


function addingNum(){
    let num = 19
    let count = setInterval(() => {
        if(num <= 89)
        {
            num = num + 1
            console.log(num)
        }
        else{
            clearInterval(count)
        }

    }, 18);
}
// addingNum()

function subtracting(){
    let num = 89;
   let count = setInterval(() => {
        if(num >= 19)
        {
            num = num - 1
            console.log(num)
        }
        else{
            clearInterval(count)
        }
    }, 18);
}

let btn_copy_number = document.getElementById('btn_copy_number')
let btn_copy_email = document.getElementById('btn_copy_email')
btn_copy_number.onclick = copyFunc('+923082449203')
btn_copy_email.addEventListener('click' , copyFunc('aliirtiza643@gmail.com'))
btn_copy_number.onmouseenter = hoverFun(btn_copy_number);
btn_copy_email.onmouseenter = hoverFun(btn_copy_email);
function hoverFun(element){
    return ()=>{
        element.style.cursor = 'pointer'
    }
}
function copyFunc(val){
    return ()=>{
        navigator.clipboard.writeText(val)
    }
}

let skillsPercentChange = document.getElementById('skillsPercentChange');
let html_percent = document.getElementById('html_percent')
let css_percent = document.getElementById('css_percent');
let js_percent = document.getElementById('js_percent');
let react_percent = document.getElementById('react_percent');
skillsPercentChange.onclick = percentChange;
function percentChange(){
    // console.log(html_percent.innerHTML = '89%')
    let i = 19;
   let percentInterval = setInterval(() => {
    if (i < 89)
    {
        i = i + 1;
        html_percent.innerHTML = `${i}%`;
        if( i <= 86)
        {
            js_percent.innerHTML = `${i}%`;
            if(i <= 80)
            {
                css_percent.innerHTML = `${i}%`;
                if(i <= 70)
                {
                    react_percent.innerHTML = `${i}%`;
                }
            }
        }
    }
    else{
        clearInterval(percentInterval)
    }
    }, 25);
}