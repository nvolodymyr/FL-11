const rootNode = document.getElementById('root');

// const todoItems = [
//     {isDone: false, id: 12345, description: 'Todo 1'}
// ];
let todoItems = [];
const STORAGE = {
    add(description) {
        const id = 'task_' + +new Date();
        const NEW_ITEM = { isDone: false, id, description };
        todoItems.push(NEW_ITEM);
        localStorage.setItem('todoItems', JSON.stringify(todoItems));
        return todoItems;
    },
    getAllTodoItems() {
        return JSON.parse(localStorage.getItem('todoItems'));
    },
    getComplete() {
        return this.getAllTodoItems().filter(item => item.isDone === true);
    },
    getNotCompleted() {
        return this.getAllTodoItems().filter(item => item.isDone === false);
    },
    getById(id) {
        return this.getAllTodoItems().find((item) =>
            item.id === id);
    },
    deleteById(id) {
        let newTodoList = this.getAllTodoItems().filter(item => item.id !== id);
        localStorage.setItem('todoItems', JSON.stringify(newTodoList));
        return todoItems;
    },
    getSorted() {
        return this.getNotCompleted().concat(this.getComplete());

    },
    setFromNotCompleteToCompleteById(id) {
        let newTodoList = this.getAllTodoItems().map(item => {
            if (item.id === id) {
                item.isDone = true;
            }
            return item;
        });
        localStorage.setItem('todoItems', JSON.stringify(newTodoList));
        return todoItems;
    },
    setFromCompleteToUnComleteById(id) {
        let newTodoList = this.getAllTodoItems().map(item => {
            if (item.id === id) {
                item.isDone = false;
            }
            return item;
        });
        localStorage.setItem('todoItems', JSON.stringify(newTodoList));
        return todoItems;
    },
    checkIdenticalValue(value) {
        let newTodoList = this.getAllTodoItems().filter(item => item.description === value)
        if (newTodoList.length) {
            return false;
        } else {
            return true;
        }

    },
    changeDescription(id, text) {
        let newTodoList = this.getAllTodoItems().map(item => {
            if (item.id === id) {
                item.description = text;
            }
            return item;
        });
        localStorage.setItem('todoItems', JSON.stringify(newTodoList));
        return todoItems;
    }

};
const createElement = (tag, attributes = {}, innerTEXT = '') => {
    const element = document.createElement(tag);

    if (Object.keys(attributes).length) {
        for (let key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key]);
            }
        }
    }

    if (innerTEXT) {
        element.appendChild(document.createTextNode(innerTEXT));
    }

    return element;
};
let template = {
    main(todoItems) {
        const section = createElement('section', { 'id': 'main-section' });
        const header = createElement('h1', {}, 'Simple TODO application');
        const addNewBtn = createElement('button', { 'id': 'add-new-task' }, 'Add new task');
        const todoList = createElement('ul', { 'id': 'todo-list' });
        const emptyList = createElement('p', { 'class': 'empty-todo' }, 'TODO is empty');

        addNewBtn.onclick = () => {
            window.location.hash = '/add';
        };
        section.appendChild(header);
        section.appendChild(addNewBtn);
        section.appendChild(todoList);
        section.appendChild(emptyList);

        if (todoItems.length) {
            for (const item of todoItems) {
                let li = createElement('li', { 'id': item.id });
                let checkbox = createElement('button', {
                    'class': item.isDone ? 'checkbox-done' : 'checkbox-undone'
                });
                let todoText = createElement('button', {
                    'class': 'todo-text',
                    'title': 'Click to edit'
                }, item.description);
                let remove = createElement('button', { 'class': 'remove' });

                checkbox.onclick = () => {
                    if (checkbox.className === 'checkbox-undone') {
                        checkbox.className = 'checkbox-done';
                        STORAGE.setFromNotCompleteToCompleteById(item.id);
                        todoList.appendChild(li);
                    } else if (checkbox.className === 'checkbox-done') {
                        checkbox.className = 'checkbox-undone';
                        STORAGE.setFromCompleteToUnComleteById(item.id);
                        todoList.appendChild(li);
                    }
                };
                todoText.onclick = () => {
                    window.location.hash = `/modify/${item.id}`;
                };

                remove.onclick = () => {
                    li.remove();
                    STORAGE.deleteById(item.id);
                };
                li.appendChild(checkbox);
                li.appendChild(todoText);
                li.appendChild(remove);
                todoList.appendChild(li);
            }
        }

        return section;
    },
    add() {
        const section = createElement('section', { 'id': 'add-section' });
        const header = createElement('h1', {}, 'Add task');
        const input = createElement('input', {
            'type': 'text',
            'placeholder': 'Task description'
        });
        const footer = createElement('footer');
        const cancel = createElement('button', { 'class': 'cancel-btn' }, 'Cancel');
        const save = createElement('button', {
            'class': 'save-changes-btn',
            'disabled': 'true'
        }, 'Save changes');

        input.onchange = input.onkeyup = () => {
            const description = input.value.trim();
            save.disabled = !description;
            if (event.code === 'Enter' && description) {
                save.click();
            }
        };

        cancel.onclick = () => {
            window.location.hash = '/main';
        };

        save.onclick = () => {
            STORAGE.add(input.value.trim());
            window.location.hash = '/main';
        };

        footer.appendChild(cancel);
        footer.appendChild(save);

        section.appendChild(header);
        section.appendChild(input);
        section.appendChild(footer);

        return section;
    },
    modify(item) {
        const section = this.add();
        section.id = 'modify-section';
        section.querySelector('h1').textContent = 'Modify item';
        section.querySelector('input').value = item.description;
        section.querySelector('.save-changes-btn').onclick = () => {
            if (STORAGE.checkIdenticalValue(section.querySelector('input').value.trim())) {
                STORAGE.changeDescription(item.id, section.querySelector('input').value.trim());
                window.location.hash = '/main';

            } else {
                alert(`the same value, pleace change the value`);
            }

        };
        return section;
    }
};
const route = {
    load() {
        const hash = window.location.hash;

        if (hash.endsWith('/add')) {
            this.add();
        } else if ((/\/modify\/task_\d+$/).test(hash)) {
            const id = hash.slice(hash.lastIndexOf('/') + 1);
            this.modify(id);
        } else {
            this.main();
        }
    },

    main() {
        window.history.pushState('', '/', window.location.pathname);

        document.title = 'Main page';

        rootNode.innerHTML = '';
        rootNode.appendChild(template.main(todoItems));
    },

    add() {
        document.title = 'Add new task';

        rootNode.innerHTML = '';
        rootNode.appendChild(template.add());
    },

    modify(id) {
        const item = STORAGE.getById(id);

        document.title = `Modify ${item.description}`;

        rootNode.innerHTML = '';
        rootNode.appendChild(template.modify(item));
    }
};
window.onload = window.onhashchange = () => {
    if (localStorage.getItem('todoItems')) {
        todoItems = STORAGE.getSorted();
    }

    route.load();
};