// Імпорт 'createSelector' для створення 'мемоізованих' селекторів
import { createSelector } from "@reduxjs/toolkit";

// Простий селектор для отримання списку завдань
export const selectTasks = (state) => state.tasks.items;

// Простий селектор для отримання стану 'isLoading'
export const selectIsLoading = (state) => state.tasks.isLoading;

// Простий селектор для отримання стану 'error'
export const selectError = (state) => state.tasks.error;

// Селектор для отримання значення стану фільтра
export const selectStatusFilter = (state) => state.filters.status;

// Мемоізований селектор для отримання видимих завдань на основі фільтра
export const selectVisibleTasks = createSelector(
  // Вхідні селектори
  [selectTasks, selectStatusFilter],
  // Функція перетворення даних
  (tasks, statusFilter) => {
    console.log("Calculating visible tasks");

    switch (statusFilter) {
      case "active":
        // Повертає тільки активні завдання
        return tasks.filter((task) => !task.completed);
      case "completed":
        // Повертає тільки виконані завдання
        return tasks.filter((task) => task.completed);
      default:
        // Повертає всі завдання
        return tasks;
    }
  }
);

// Мемоізований селектор для підрахунку кількості активних (Active) і виконаних (Completed) завдань
export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log("Calculating task count");

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        // Збільшення кількості виконаних завдань
        count.completed += 1;
      } else {
        // Збільшення кількості активних завдань
        count.active += 1;
      }
      // Повернення оновленого об'єкта підрахунку
      return count;
    },
    // Початкові значення лічильників
    { active: 0, completed: 0 }
  );
});
