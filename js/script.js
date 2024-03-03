// 1. Header
const back = document.querySelector(".back");
const next = document.querySelector(".next");
const num = document.querySelector(".number");
const elem = document.querySelector(`.home-header-bg`);
const scrollbar = document.querySelector('.slider_bar');
let i = 1;

back.addEventListener('click',function()
{
    i--;
    if(i<0)
    {
        i=2;
    }
    console.log(i)
    if(i==2)
    {
        elem.style.backgroundImage = `url(./images/home-header-bg${i}.png)`;
        num.innerHTML = `0${i}`;
        scrollbar.style.marginLeft = '60px';
    }
    else if(i==1)
    {
        elem.style.backgroundImage = `url(./images/home-header-bg${i}.png)`;
        num.innerHTML = `0${i}`;
        scrollbar.style.marginLeft = '0px';
    }
    else if(i==0)
    {
        i = 3;
        elem.style.backgroundImage = `url(./images/home-header-bg${i}.png)`;
        num.innerHTML = `0${i}`;
        scrollbar.style.marginLeft = '120px';
    }
})


next.addEventListener('click',function()
{
    i++;
    if(i==4)
    {
        i=0;
    }
    console.log(i);
    if(i==1)
    {
        elem.style.backgroundImage = `url(./images/home-header-bg${i}.png)`;
        num.innerHTML = `0${i}`;
        scrollbar.style.marginLeft = '0px';
    }
    else if(i==2)
    {
        elem.style.backgroundImage = `url(./images/home-header-bg${i}.png)`;
        num.innerHTML = `0${i}`;
        scrollbar.style.marginLeft = '60px';
    }
    else if(i==3)
    {
        elem.style.backgroundImage = `url(./images/home-header-bg${i}.png)`;
        num.innerHTML = `0${i}`;
        scrollbar.style.marginLeft = '120px';
        i=0;
    }
})


const scrollbtn = document.querySelector('.footer_btn');


scrollbtn.addEventListener('click',function()
{
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    );
});
