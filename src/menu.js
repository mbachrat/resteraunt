export default function component() {
    const element = document.createElement('div');
    element.classList.add('content')
    const header = document.createElement('h1');
    // title
    let title = document.createTextNode("MENU")
    header.appendChild(title);
    header.classList.add('hello');
    
    element.appendChild(header);
    document.body.appendChild(element);
    
  }
 
