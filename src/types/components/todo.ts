import { ITodo } from "../apis/todo";

export interface ITodoList {
  todoList: null | ITodo[];
  selectedTodo: null | string;
  setSelectedTodo: React.Dispatch<React.SetStateAction<null | string>>;
}
