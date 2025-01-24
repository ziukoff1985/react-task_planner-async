// Хуки для взаємодії з Redux
import { useSelector, useDispatch } from "react-redux";

// Компонент кнопки
import { Button } from "../Button/Button";

// Екшен для зміни фільтра (all/active/complited)
import { setStatusFilter } from "../../redux/filtersSlice";

// Стилі CSS
import css from "./StatusFilter.module.css";

// Селектор для отримання поточного значення фільтра
import { selectStatusFilter } from "../../redux/selectors";

// Компонент перемикання статусів фільтру (all/active/complited)
export const StatusFilter = () => {
  // Доступ до функції 'dispatch'
  const dispatch = useDispatch();
  // Отримуємо доступ до поточного статусу фільтра з Redux
  const filter = useSelector(selectStatusFilter);

  // Функція зміни фільтра через 'dispatch'
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      {/* Кнопка для фільтра "all" */}
      <Button
        // Виділена, якщо поточний фільтр "all"
        selected={filter === "all"}
        // Зміна фільтра на "all"
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      {/* Кнопка для фільтра "active" */}
      <Button
        // Виділена, якщо поточний фільтр "active"
        selected={filter === "active"}
        // Зміна фільтра на "active"
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      {/* Кнопка для фільтра "completed" */}
      <Button
        // Виділена, якщо поточний фільтр "completed"
        selected={filter === "completed"}
        // Зміна фільтра на "completed"
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
};
