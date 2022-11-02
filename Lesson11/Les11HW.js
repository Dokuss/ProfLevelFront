// Решение ДЗ
let users = [
    { id: 1, name: 'Alex', lastname: 'Folon', age: 24 },
    { id: 2, name: 'Willyam', lastname: 'Maxwell', age: 31 },
]

function addUser(name, lastname, age) {
    users.push({ id: (users.length + 1), name, lastname, age })
}

// Задача: упростить функцию updateUser
// Используя методы массива

function updateUser(id, name, lastname, age) {
    let findUser = users.findIndex(elem => elem.id == id)
    users[findUser].name = name
    users[findUser].lastname = lastname
    users[findUser].age = age
}

function deleteUser(id) {
    users.splice(users.findIndex(elem => elem.id == id), 1)
}

addUser('Tigran', 'Movsisyan', 29)
addUser('Tigran', 'Movsisyan', 29)
addUser('Tigran', 'Movsisyan', 29)
addUser('Tigran', 'Movsisyan', 29)
addUser('Tigran', 'Movsisyan', 29)

updateUser(4, 'John', 'Snow', 29)

deleteUser(10)

console.log(users)