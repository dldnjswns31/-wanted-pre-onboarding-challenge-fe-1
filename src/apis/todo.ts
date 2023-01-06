import { INewTodo } from "./../types/todo";
import { axiosInstance } from "./core/axiosInstance";

export const getTodos = async () => {
  try {
    const { data } = await axiosInstance("/todos");
    return data;
  } catch (err) {
    throw err;
  }
};

export const getTodosById = async (id: string) => {
  try {
    const { data } = await axiosInstance(`/todos/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const createTodo = async (todo: INewTodo) => {
  const { title, content } = todo;
  try {
    return await axiosInstance.post("/todos", { title, content });
  } catch (err) {
    throw err;
  }
};

export const updateTodo = async (todo: INewTodo, id: string) => {
  const { title, content } = todo;

  try {
    return await axiosInstance.put(`/todos/${id}`, { title, content });
  } catch (err) {
    throw err;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    return await axiosInstance.delete("/todos", { params: { id } });
  } catch (err) {
    throw err;
  }
};
