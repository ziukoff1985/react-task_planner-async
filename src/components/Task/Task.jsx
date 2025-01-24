// Хук для відправки екшенів Redux
import { useDispatch } from "react-redux";

// Іконка для кнопки видалення завдання
import { MdClose } from "react-icons/md";

// Стилі CSS
import css from "./Task.module.css";

// Операції для видалення та зміни статусу завдання (з файлу operations.js)
import { deleteTask, toggleCompleted } from "../../redux/operations";

// Компонент одного завдання
export const Task = ({ task }) => {
  // 'Dispatch' для відправки екшенів у Redux
  const dispatch = useDispatch();

  // Функція-обробник для видалення завдання
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Функція-обробник для перемикання статусу завдання (completed)
  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      {/* Чекбокс для зміни статусу завдання */}
      <input
        type="checkbox"
        className={css.checkbox}
        // Відображає стан завдання
        checked={task.completed}
        // Змінює статус (completed) при кліку
        onChange={handleToggle}
      />
      {/* Текст завдання */}
      <p className={css.text}>{task.text}</p>
      {/* Кнопка для видалення завдання */}
      <button className={css.btn} onClick={handleDelete}>
        {/* Іконка закриття */}
        <MdClose size={24} />
      </button>
    </div>
  );
};
