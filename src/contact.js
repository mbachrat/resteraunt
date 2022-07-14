import Icon from './chef.jpeg'


export default function component() {
    const element = document.createElement('div');
    element.classList.add('content')
    const header = document.createElement('h1');
    // title
    let title = document.createTextNode("Contact Us")
    header.appendChild(title);
    header.classList.add('hello');

    element.appendChild(header);

//contact info

const contact = document.createElement('div')
const words = document.createElement('div')
const myIcon = new Image();
const name = document.createElement('h2');
const text = document.createElement('p');


myIcon.src = Icon;
myIcon.style.width = '40vw';
const chefName = document.createTextNode('Chef Fabiotzzi')
const chefDesc = document.createTextNode('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usin')

name.appendChild(chefName);
text.appendChild(chefDesc);

words.append(name, text)
contact.append(myIcon, words)
contact.classList.add('contact');



element.appendChild(contact)



    document.body.appendChild(element);
   
  }