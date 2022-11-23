let body = document.body

// Task 1

let div_elem_1 = body.firstElementChild
let h1 = document.querySelector('h1')
h1.innerText = 'Text'
h1.className = 'First h1'
div_elem_1.append(h1)
console.log(div_elem_1);

// Task 2

let h2 = document.createElement('h2')
let p = document.createElement('p')
h2.innerText = 'New block'
p.innerText = 'Text for new block'
p.setAttribute('height', 'low')

div_elem_2 = div_elem_1.nextElementSibling
div_elem_2.append(h2, p)

// Task 3

a.elem1 = document.createElement('a')
a.elem2 = document.createElement('a')

a_elem_1.innerText = 'Text'
a_elem_1.setAttribute('href', 'htpps://www.google.com') 
a_elem_2.setAttribute('href', 'htpps://www.github.com') 

div_elem_3 = div_elem_2.nextElementSibling
div_elem_3.before(a_elem_1)
div_elem_3.before(a_elem_2)


// Task 3

div_elem_4 = div_elem_3.nextElementSibling

for(let i = 1; i <= 6; i++){
    let h_elem = document.createElement('h' + 1)
    h_elem.innerText = 'Header' + i
    div_elem_4.append(h_elem)
}


