// Create element

let title = document.createElement('h1')

// atribut inicializing
title.className = 'title_text'
title.id = 'h_1'
title.setAttribute('for', 'div')
title.innerText = 'First Header'
// console.log(title);

// teg body

let body = document.body

// body.append(title)
body.prepend(title)


console.log(body);
