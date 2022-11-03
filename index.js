"use strict";
//inertface 정의
//변수 todo 타입으로 Todo 인터페이스선언
let todo;
//변수 todo는 Todo 인터페이스를 준수해야함
todo = { id: 1, content: 'typescript', completed: false };
let todos = [];
// 파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: 'typescripts', completed: false };
const nextTodo = { id: 2, content: 'react', completed: true };
addTodo(newTodo);
addTodo(nextTodo);
console.log(todos);
// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const getPlus = (num) => {
    return num * num;
};
console.log(getPlus(5)); //25
const multy = (num1, num2) => {
    return num1 * num2;
};
console.log(multy(4, 5));
