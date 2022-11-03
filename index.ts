//inertface 정의

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

//변수 todo 타입으로 Todo 인터페이스선언
let todo: Todo;

//변수 todo는 Todo 인터페이스를 준수해야함
todo = { id: 1, content: 'typescript', completed: false };

let todos: Todo[] = [];

// 파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

const newTodo: Todo = { id: 1, content: 'typescripts', completed: false };
const nextTodo: Todo = { id: 2, content: 'react', completed: true };
addTodo(newTodo);
addTodo(nextTodo);
console.log(todos);

// 함수 인터페이스의 정의
interface Plus {
  (num: number): number;
}
// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const getPlus: Plus = (num: number) => {
  return num * num;
};

console.log(getPlus(5)); //25

const multy = (num1: number, num2: number): number => {
  return num1 * num2;
};

console.log(multy(4, 5));
