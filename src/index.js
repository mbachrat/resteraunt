import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';

//create tab buttons
let tab = document.createElement('div');
tab.classList.add('tab')

let btnHome = document.createElement('button');
    btnHome.classList.add('home');
    btnHome.innerHTML = 'HOME'
    btnHome.addEventListener("click", clear)
let btnMenu = document.createElement('button');
    btnMenu.classList.add('menu');
    btnMenu.innerHTML = 'MENU'
    btnMenu.addEventListener("click", clearTwo)
let btnContact = document.createElement('button');
    btnContact.classList.add('contact');
    btnContact.innerHTML = 'CONTACT'
    btnContact.addEventListener("click", clearThree)

tab.append(btnHome, btnMenu, btnContact);
console.log(tab);

document.body.appendChild(tab)
home()



function clear() {
let i;

let test = document.getElementsByClassName('content');

if(test == null) {
    home()
}
else {
    for (i = test.length - 1; i >= 0; --i) {
        test[i].remove();
      }
      home()

}

}

function clearTwo() {
    let i;
    
    let test = document.getElementsByClassName('content');
   
    
    
    if(test == null) {
        menu()
    }
    else {
        for (i = test.length - 1; i >= 0; --i) {
            test[i].remove();
          }
          menu()
    }
    
    }

    function clearThree() {
        let i;
        
        let test = document.getElementsByClassName('content');
        
        
        
        if(test == null) {
            contact()
        }
        else {
            for (i = test.length - 1; i >= 0; --i) {
                test[i].remove();
              }
              contact()
        
        }
        
        }









// function component() {
//     const element = document.createElement('div');
//     const header = document.createElement('h1');
//     // title
//     let title = document.createTextNode("Italian Resto")
//     header.appendChild(title);
//     header.classList.add('hello');
    
//     element.appendChild(header);

//     // picture



//     // description





//     document.body.appendChild(element);

    // return element;
//   }
 
//   document.body.appendChild(component());



//trying to create a connection to seperate modules
//     const element = document.createElement('div');
//    const btn = document.createElement('button');
 
 
//    btn.innerHTML = 'Click me';
//    btn.addEventListener('click', changes);
  
//    element.appendChild(btn);
//    document.body.appendChild(element);


  


//   function changes() {
//     component
//   }

//   document.body.appendChild(changes());