let body = document.body
let ul = document.createElement('ul')
body.prepend(ul)
console.log(ul);

let li_1 = document.createElement('li')
li_1.innerText = '1'
ul.prepend(li_1)

let li_2 = document.createElement('li')
li_2.innerText = '2'
ul.prepend(li_2)

let li_3 = document.createElement('li')
li_3.innerText = '3'
ul.prepend(li_3)

ul.append(li_1)
ul.append(li_2)
ul.append(li_3)
