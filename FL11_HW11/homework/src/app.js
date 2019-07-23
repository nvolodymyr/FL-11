'use strict';
let rootNode = document.getElementById('root');
const MAX_LENGTH = 10;
const ZERO = 0;
const KEY_CODE = 13;
const TWO = 2;
let addButton = document.querySelector('.but');
let actionText = document.getElementById('actionText');
let actionList = document.querySelector('.todo-cat-list');
let dazzle = document.querySelector('.dazzle');
let oneAction = document.querySelector('.todo-action');

actionText.addEventListener('input', () => {
    if (actionText.value.trim !== null) {
        addButton.classList.add('enabled')
    } else {
        addButton.classList.remove('enabled');
    }
});

function checkAmount() {
    if (!actionText.value.trim()) {
        return;
    }
    if (actionList.children.length < MAX_LENGTH) {
        actionList.appendChild(addActionElement(actionText.value));
        listenerItems();
        actionText.value = '';
        addButton.classList.remove('enabled');
    }
    if (actionList.children.length >= MAX_LENGTH) {
        actionText.disabled = true;
        dazzle.style.display = 'block';
    }
}
addButton.addEventListener('click', checkAmount);
actionText.addEventListener(`keyup`, function(e) {
    if (e.keyCode === KEY_CODE) {
        e.preventDefault();
        addButton.click();
    }
});
let addActionElement = (text) => {
    const CHE_IKON = document.createElement('i');
    CHE_IKON.className = 'material-icons';
    CHE_IKON.textContent = 'check_box_outline_blank';
    const DEL_ELEM = document.createElement('i');
    DEL_ELEM.className = 'material-icons delete-color';
    DEL_ELEM.textContent = 'delete';
    const SPAN_ELEMENT = document.createElement('span');
    SPAN_ELEMENT.textContent = text;
    const PEN_ELEMENT = document.createElement('i');
    PEN_ELEMENT.className = 'material-icons delete-color create pen';
    PEN_ELEMENT.textContent = 'create';
    const DIV = document.createElement('div');
    DIV.setAttribute('draggable', true);
    DIV.className = 'todo-action';
    DIV.appendChild(CHE_IKON);
    DIV.appendChild(SPAN_ELEMENT);
    DIV.appendChild(PEN_ELEMENT);
    DIV.appendChild(DEL_ELEM);
    return DIV;
}
actionList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.textContent === 'check_box_outline_blank') {
        target.textContent = 'check_box';
        target.classList.add('checked');
    }
    if (target.textContent === 'delete') {
        target.parentElement.remove();
        checkAmount();
        if (actionList.children.length <= MAX_LENGTH) {
            dazzle.style.display = 'none';
        }
        if (actionList.children.length >= MAX_LENGTH) {
            addButton.classList.remove('disabled');
            actionText.disabled = false;
            dazzle.hidden = true;
        }
    }
}, false);

function listenerItems() {
    let elemEdit = actionList.querySelectorAll('.create');
    for (let i = 0; i < elemEdit.length; i++) {
        elemEdit[i].addEventListener('click', editElement, false);

    }
}

function editElement() {
    let inputText = document.createElement('input');
    let elemSave = document.createElement('i');
    let wrapFieldSet = document.createElement('div');
    let mainFieldSet = this.parentElement;
    let mainElements = mainFieldSet.children;
    let span = mainFieldSet.querySelector('span');
    elemSave.classList.add('material-icons', 'delete-color');
    elemSave.textContent = 'save';
    inputText.type = 'text';
    inputText.value = span.textContent;
    changeClasses(mainElements, 'hide', false);
    mainFieldSet.appendChild(wrapFieldSet);
    wrapFieldSet.appendChild(inputText);
    wrapFieldSet.appendChild(elemSave);
    elemSave.addEventListener('click', () => {
        changeItem(inputText.value);
    }, false);

    function changeItem(value) {
        span.innerHTML = value;
        changeClasses(mainElements, 'hide', true);
        wrapFieldSet.remove();
    }
}

function changeClasses(data, className, removeClasses = false) {
    for (let i = 0; i < data.length; i++) {
        if (removeClasses) {
            data[i].classList.remove(className)
        } else {
            data[i].classList.add(className);
        }

    }
}

function actionTarget(event) {
    const target = event.target;
    if (target.hasAttribute('draggable')) {
        return target;
    } else if (target.tagName === 'I' || target.tagName === 'SPAN') {
        return target.parentElement;
    } else {
        return;
    }
}
let draggableElement = null;
let dropPosition = null;
actionList.addEventListener('dragstart', (e) => {
    draggableElement = actionTarget(e);
    if (!draggableElement) {
        return;
    }
    draggableElement.style.opacity = '.7';
}, false);
actionList.addEventListener('dragend', () => {
    draggableElement.style.opacity = '';
});
actionList.addEventListener('dragover', (e) => {
    e.preventDefault();
    let dropPosition = actionTarget(e);
    if (!dropPosition) {
        return;
    }
    // let rect = dropPosition.getBoundingClientRect();
    // let midline = rect.top + (rect.bottom - rect.top) / TWO;
});
actionList.addEventListener('dragleave', (e) => {
    let dropPosition = actionTarget(e);
    if (!dropPosition) {
        return;
    }
});
actionList.addEventListener('drop', function(e) {
    dropPosition = actionTarget(e);
    if (!dropPosition) {
        return;
    }
    e.preventDefault();
    let rect = dropPosition.getBoundingClientRect();
    let midline = rect.top + (rect.bottom - rect.top) / TWO;
    let afterDropPosition = midline <= e.clientY ? dropPosition.nextSibling : dropPosition;
    actionList.insertBefore(draggableElement, afterDropPosition);
});