// Хук для отримання даних із Redux
import { useSelector } from "react-redux";

// Селектор для отримання кількості завдань (з файлу 'selectors.js')
import { selectTaskCount } from "../../redux/selectors";

// Стилі CSS
import css from "./TaskCounter.module.css";

// Компонент лічильник завдань (active/complited)
export const TaskCounter = () => {
  // Отримуємо кількість активних і завершених завдань
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <div>
      {/* Відображення кількості активних завдань */}
      <p className={css.text}>Active: {active}</p>
      {/* Відображення кількості завершених завдань */}
      <p className={css.text}>Completed: {completed}</p>
    </div>
  );
};
