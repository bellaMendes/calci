let show=document.getElementById('show');
let screenValue='';
buttons=document.querySelectorAll('button');
for(item of buttons)
{
    item.addEventListener('click',(f)=>{
        text=f.target.innerText;
        if(text=='x')
        {
            text='*';
            screenValue+=text;
            show.value=screenValue;
            
        }
        else if(text=='C')
        { 
            screenValue="";
            show.value=screenValue;
        }
        else if(text=='=')
        {
            show.value=eval(screenValue);
        }
        else{
            screenValue+=text;
            show.value=screenValue;
        }

    })
}
