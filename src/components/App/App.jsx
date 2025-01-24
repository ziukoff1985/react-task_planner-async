// Імпорт основних хуків з React і Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Імпорт компонентів
import { AppBar } from "../AppBar/AppBar";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";

// Імпорт асинхронної операції для отримання завдань
import { fetchTasks } from "../../redux/operations";

import css from "./App.module.css"; // Імпорт CSS-стилів

// Імпорт селекторів для вибірки даних зі стану Redux
import { selectError, selectIsLoading } from "../../redux/selectors";

// Головний компонент Арр
export default function App() {
  const dispatch = useDispatch(); // Ініціалізація 'dispatch' для відправки 'екшенів'
  // Отримання значень зі стану Redux через селектори
  const isLoading = useSelector(selectIsLoading); // Cтан завантаження
  const error = useSelector(selectError); // Cтан помилки

  // 'useEffect' для виконання асинхронної операції 'fetchTasks' (перший рендер компонента)
  useEffect(() => {
    dispatch(fetchTasks()); // Виклик операції для завантаження списку завдань
  }, [dispatch]); // Залежність від 'dispatch'

  return (
    <div className={css.container}>
      <AppBar /> {/* Панель навігації */}
      <TaskForm /> {/* Форма для додавання завдань */}
      {isLoading && !error && <b>Request in progress...</b>}{" "}
      {/* Індикація завантаження */}
      <TaskList /> {/* Список завдань */}
    </div>
  );
}
