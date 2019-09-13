import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Interfaces are used to define the structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo;

    const id = todo.id; //number
    const title = todo.title; //string
    const completed = todo.completed; //boolean

   logTodo(id, completed, title)
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it completed? ${completed}
    `);
};