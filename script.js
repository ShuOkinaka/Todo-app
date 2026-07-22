/*練習7*/
const add3 = document.getElementById("add3");
const list2 = document.getElementById("list2");
const taskInput = document.getElementById("taskInput");
const counter = document.getElementById("counter");
const savedTodos = JSON.parse(localStorage.getItem("todos"));
const todos = savedTodos || [];
let editingIndex = -1;



//完了タスク数
function updateCounter(){
    let count = 0;
    document.querySelectorAll("li").forEach(function(li) {
    if (li.classList.contains("completed")) {
        count++;
    }
    });
    const total = document.querySelectorAll("li").length;
    counter.textContent= `完了:${count}/${total}`;
}

// 保存したToDoを画面に表示
if (savedTodos) {
    for (const todo of savedTodos) {
        createTodo(todo);
    }
}

//追加ボタン
add3.addEventListener("click", function() {
    const text2 = taskInput.value;
    
    //入力欄空白時に何も追加しない
    if( text2 === "") {
        return;
    }

    //-1なら追加、それ以外は編集
    if (editingIndex === -1) {
        todos.push(text2);
        localStorage.setItem("todos", JSON.stringify(todos));
        createTodo(text2);
    } else {
        todos[editingIndex] = text2;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
        editingIndex = -1;
    }

    taskInput.value = "";
    
});


function createTodo(text2) {
//削除ボタン
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent ="削除";
    deleteBtn.className = "delete-btn";

//完了ボタン
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "完了";
    completeBtn.className = "complete-btn";

//編集ボタン
    const editBtn = document.createElement("button");
    editBtn.textContent = "編集";
    editBtn.className = "edit-btn";

//li作り
    const li = document.createElement("li");
    li.textContent = text2;
    list2.appendChild(li);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    taskInput.value = "";

    updateCounter();

//削除ボタン押されたらそのliを全部消す
    deleteBtn.addEventListener("click", function () {
        const index = todos.indexOf(text2);
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        li.remove();
        updateCounter();
        
    })

//完了ボタン押されたらそのliに斜線つける
    completeBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
        updateCounter();
    });

//編集ボタン押されたら入力欄に今の文字を入れる
    editBtn.addEventListener("click", function() {
        taskInput.value = text2;
        
        editingIndex = todos.indexOf(text2);
    });
}

//画面から全部消して配列から作り出す
function renderTodos() {
    list2.innerHTML ="";

    for (const todo of todos) {
        createTodo(todo);
    }
}

//Enter keyの動作
taskInput.addEventListener("keydown", function(event) {
    if (event.isComposing){
        return;
    }

    if ( event.key === "Enter") {
        add3.click();
    }
});