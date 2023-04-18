const container = document.querySelector('.todos');
const addButton = document.querySelector('.add-button');

let todoItems = [
    {
        id: 1,
        item: 'Watch a movie',
        done: false,
    },
    {
        id: 2,
        item: 'Walk my dog',
        done: true,
    },
    {
        id: 3,
        item: 'Buy snacks',
        done: false,
    },
];

const createTodo = (todo) => {
    const card = document.createElement('div');
    card.className = 'card';
    const todoText = document.createElement('p');
    todoText.className = 'todo-item';
    const controls = document.createElement('div');
    todoText.innerText = todo.item;
    controls.className = 'controls';
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.id = todo.id;
    deleteBtn.innerHTML = '<img height="35px" src="./delete.svg" alt="" />';
    deleteBtn.addEventListener('click', (e) => {
        console.log(Math.random());
        todoItems = todoItems.filter(
            (item) => item['id'] != e.target.parentNode.id
        );
        container.innerHTML = '';
        console.log(e.target.parentNode.id);
        console.log(todoItems);
        addTodos(todoItems);
    });
    controls.append(checkbox, deleteBtn);
    card.append(todoText, controls);
    return card;
};

const addTodos = (todos) => {
    todos.map((todo) => {
        container.appendChild(createTodo(todo));
    });
};

addTodos(todoItems);

const addBtn = document.querySelector('.add-button');
const inputText = document.querySelector('#input');

inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addBtn.click();
    }
});

const add = () => {
    if (inputText.value.trim() !== '') {
        const newTodo = {
            id: todoItems.length + 1,
            item: inputText.value,
            done: false,
        };
        todoItems.unshift(newTodo);
        container.innerHTML = '';
        console.log(inputText.value);
        inputText.value = '';
        addTodos(todoItems);
    }
};

addBtn.addEventListener('click', add);
