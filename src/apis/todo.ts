import { ITodo } from "./../types/todo";
import { axiosInstance } from "./core/axiosInstance";

export const getTodos = async () => {
  try {
    const { data } = await axiosInstance("/todos");
    return data;
  } catch (err) {
    throw err;
  }
};

export const getTodosById = async (id: number) => {
  try {
    const { data } = await axiosInstance("/todos", {
      params: {
        id,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const createTodo = async (todo: ITodo) => {
  const { title, content } = todo;
  try {
    await axiosInstance.post("/todos", { title, content });
    return;
  } catch (err) {
    throw err;
  }
};

export const updateTodo = async (todo: ITodo, id: string) => {
  const { title, content } = todo;

  try {
    await axiosInstance.put("/todos", { title, content }, { params: { id } });
    return;
  } catch (err) {
    throw err;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await axiosInstance.delete("/todos", { params: { id } });
    return;
  } catch (err) {
    throw err;
  }
};
