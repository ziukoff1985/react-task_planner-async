// Хук для відправки екшенів Redux
import { useDispatch } from "react-redux";

// Компонент Button для форми
import { Button } from "../Button/Button";

// Операція для додавання нового завдання (з файлу operations.js)
import { addTask } from "../../redux/operations";

// Стилі CSS
import css from "./TaskForm.module.css";

// Компонент форми
export const TaskForm = () => {
  // 'Dispatch' для відправки екшенів у Redux
  const dispatch = useDispatch();

  // Функція-обробник відправки форми
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // Додаємо нове завдання
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      {/* Поле введення тексту завдання */}
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      {/* Кнопка для додавання завдання */}
      <Button type="submit">Add task</Button>
    </form>
  );
};
