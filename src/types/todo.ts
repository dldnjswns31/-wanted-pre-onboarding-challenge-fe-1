export interface INewTodo {
  title: string;
  content: string;
}

export interface ITodo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getTodoList: () => void;
  handleModalOpen: () => void;
}
