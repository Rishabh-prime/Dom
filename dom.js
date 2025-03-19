const body = document.querySelector('body');
const heading = document.querySelector('h1');
const div = document.getElementById('div_one');
const headingtwo = document.querySelector('h2');
const paragraph = document.querySelector('p');
const button = document.getElementById('btn');

let isToggled = false;
button.addEventListener('click', function () {
    if (!isToggled) {
        // Apply new styles
        heading.style.fontSize = '6rem';
        heading.style.color = 'brown';
        div.style.backgroundColor = 'lightgray'; // Set a color (previously missing)
        headingtwo.style.color = 'brown';
        paragraph.style.color = 'brown';
        button.style.backgroundColor = 'brown';
        button.style.color = 'white';
        body.style.backgroundColor = 'beige';
    } else {
        // Revert to original styles
        heading.style.fontSize = '';
        heading.style.color = '';
        div.style.backgroundColor = '';
        headingtwo.style.color = '';
        paragraph.style.color = '';
        button.style.backgroundColor = '';
        button.style.color = '';
        body.style.backgroundColor = '';
    }
    
    isToggled = !isToggled; // Toggle the state
});


// !! Createing the second div 
creatediv = document.querySelector('#create-div');

let deltebtn =false;
creatediv.addEventListener('click',function(){
    if(!deltebtn){
        const divtwo = document.createElement('div');
       divtwo.id = 'div_three';
    const creatingh2 = document.createElement('h2');
    creatingh2.textContent = 'This is the second div';
    const creatingp = document.createElement('p');
    creatingp.textContent = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    divtwo.appendChild(creatingh2);
    divtwo.appendChild(creatingp);
    creatediv.textContent = 'delte div';
    body.appendChild(divtwo);

    }else{

        const divthree = document.getElementById('div_three');
        body.removeChild(divthree);
        creatediv.textContent = 'Create Div';

    }
    deltebtn =!deltebtn;
}

)


// !! creating multiple div 

const divfour = document.querySelector('#div_four');
const createmulti = document.getElementById('multi_div');
const color = ['red','blue','green','yellow','pink','purple','orange','cyan','white','brown'];
// const id= ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"];
let multidelete = false;

// !! creating multiple div

createmulti.addEventListener('click', function () {
   
    if(!multidelete){
        
        for(let i=0; i<10; i++){
        const divinfour = document.createElement('div');
        divinfour.className = 'divinfour';
        divinfour.id = Math.random().toString(36).substring(2, 10);
        divinfour.style.backgroundColor = color[i];

        const divinfourh2 = document.createElement('h2');
        divinfourh2.textContent = 'This is the multiple div';
        divinfour.appendChild(divinfourh2);

        const divinfourp = document.createElement('p');
        divinfourp.textContent = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        
        divinfour.appendChild(divinfourp);
        divfour.appendChild(divinfour);
        createmulti.textContent = 'Delete Div';

        }
    }
    
    else{
        const divinfour = document.querySelectorAll('.divinfour');
        divinfour.forEach(function(div){
            divfour.removeChild(div);
        })
        createmulti.textContent = 'Multi Div';
    }
    multidelete = !multidelete;
});











