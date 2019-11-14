document.addEventListener('keyup', function(e) {
    if (e.key === "Enter") {
        var input = document.getElementsByClassName("control-panel__input")[0].value;
        //alert(input);
        input = input.trim();
        if (input === "") return;
        addRow(input);
        document.getElementsByClassName("control-panel__input")[0].value = "";
    }
});

function addRow(text) {
    const div = document.createElement('li');

    div.className = 'task__item';

    div.innerHTML = `
            <div class="item-view">
                <label class="item-view__checkbox">
                    <input class="checkbox-status"
                           type="checkbox"
                           onchange="checkboxHandler(this)"
                           aria-label="Complete task: ` +  text + `">
                    <span class="checkbox"></span>
                </label>
                <span class="item-view__text">`+ text + `</span>
                <button class="item-view__delete" onclick="removeRow(this)"></button>
            </div>
            <div class="item-edit" hidden="hidden">
                <input class="item-edit__input"
                       type="text"
                       value=" ` + text + `"
                       aria-label="Edit task: ` + text + `">
            </div>
  `;

    if (document.getElementsByClassName("empty_ist").length > 0) {
        hideDefaultComponent();
    }
    document.getElementsByClassName("tasks__inner")[0].appendChild(div);

}

function removeRow(node) {
    document.getElementsByClassName('tasks__inner')[0].removeChild(node.parentNode.parentNode);
    if (document.getElementsByClassName('task__item').length === 0) {
        showDefaultComponent("List is currently empty")
    }
}


function checkboxHandler(element) {
    const text = element.parentNode.parentNode.children[1];
    if (element.checked) {
        text.style.textDecoration = "line-through";
    }
    else {
        text.style.textDecoration = "none";
    }
}

function showDefaultComponent(text) {
    const div = document.createElement('li');

    div.className = 'empty_ist';
    div.style.textAlign = "center";
    div.style.fontSize = "20px";
    div.style.padding = "20px";

    div.innerHTML = text;
    document.getElementsByClassName("tasks__inner")[0].appendChild(div);
}

function hideDefaultComponent() {
    const root = document.getElementsByClassName('tasks__inner')[0];
    root.children[0].remove();
}

function clearAll() {
    const root = document.getElementsByClassName('tasks__inner')[0];
    while (root.children.length > 0) {
        root.children[0].remove();
    }
    showDefaultComponent("List is currently empty");
}
