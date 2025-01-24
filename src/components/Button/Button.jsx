// Бібліотека для комбінування класів
import clsx from "clsx";

// Стилі CSS
import css from "./Button.module.css";

// Компонент кнопки (використовується в компоненті 'StatusFilter')
export const Button = ({
  selected = false, // Чи є кнопка обраною (за замовчуванням false)
  type = "button", // Тип кнопки (за замовчуванням "button")
  children, // Текст або елементи всередині кнопки
  ...otherProps // Інші властивості, передані в компонент
}) => {
  return (
    <button
      className={clsx(css.btn, {
        // Додає клас "isSelected", якщо кнопка обрана
        [css.isSelected]: selected,
      })}
      // Встановлює тип кнопки
      type={type}
      // Передає інші властивості (наприклад, onClick)
      {...otherProps}
    >
      {children} {/* Вміст кнопки */}
    </button>
  );
};
