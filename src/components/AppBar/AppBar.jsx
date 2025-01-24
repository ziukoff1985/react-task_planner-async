// Компонент перемикача фільтру за статусом (all/active/complited)
import { StatusFilter } from "../StatusFilter/StatusFilter";

// Компонент для відображення лічильника завдань (active/complited)
import { TaskCounter } from "../TaskCounter/TaskCounter";

// Стилі CSS
import css from "./AppBar.module.css";

// Компонент хедера (лічильника завдань + перемикач фільтру за статусом)
export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      {/* Перша секція: заголовок і лічильник завдань */}
      <section className={css.section}>
        {/* Заголовок */}
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter /> {/* Лічильник завдань */}
      </section>
      {/* Друга секція: заголовок і перемикач фільтру за статусом */}
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2> {/* Заголовок */}
        <StatusFilter /> {/* Перемикач фільтру за статусом */}
      </section>
    </header>
  );
};
