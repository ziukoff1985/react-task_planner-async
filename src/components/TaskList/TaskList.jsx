// Хук для отримання даних із Redux
import { useSelector } from "react-redux";

// Компонент для відображення завдання
import { Task } from "../Task/Task";

// Селектор для видимих завдань (з файлу 'selectors.js')
import { selectVisibleTasks } from "../../redux/selectors";

// Стилі CSS
import css from "./TaskList.module.css";

// Компонент списку завдань
export const TaskList = () => {
  // Отримуємо доступ до списку завдань для відображення
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {/* Відображення кожного завдання у списку */}
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          {/* Компонент для кожного завдання */}
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
