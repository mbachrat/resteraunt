import Icon from './ital.jpeg';
import IconTwo from './italtwo.jpeg';
import IconThree from './italthree.jpeg';



export default function component() {
    const element = document.createElement('div');
    element.classList.add('content')
    const header = document.createElement('h1');
    // title
    let title = document.createTextNode("Italian Resto")
    header.appendChild(title);
    header.classList.add('hello');
    
    element.appendChild(header);

//image
const hero = document.createElement('div');
hero.classList.add('hero')

const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.width = '25vw';
  const myIcontwo = new Image();
  myIcontwo.src = IconTwo;
  myIcontwo.style.width = '25vw';
  const myIconthree = new Image();
  myIconthree.src = IconThree;
  myIconthree.style.width = '25vw';

  hero.appendChild(myIcon);
  hero.appendChild(myIcontwo);
  hero.appendChild(myIconthree);

  element.appendChild(hero);

  //description

  const desc = document.createElement('p');
  desc.classList.add('text');
  let texts = document.createTextNode("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum");

  desc.appendChild(texts);
  element.appendChild(desc);

    //connect to div

    document.body.appendChild(element);
   
  }
 
  