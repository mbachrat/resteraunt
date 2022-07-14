import Icon from './menu.png';


export default function component() {
    const element = document.createElement('div');
    element.classList.add('content')
    const header = document.createElement('h1');
    // title
    let title = document.createTextNode("MENU")
    header.appendChild(title);
    header.classList.add('hello');
     element.appendChild(header);

//menu image
const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.width = '80vw';
  myIcon.style.margin = '10vw';

  element.appendChild(myIcon);




    document.body.appendChild(element);
    
  }
 
