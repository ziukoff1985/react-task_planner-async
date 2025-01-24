// Імпорт функції для створення Redux store
import { configureStore } from "@reduxjs/toolkit";

// Імпорт редюсерів для завдань і фільтрів
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

// Створення Redux store з підключенням редюсерів
export const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Редюсер для управління станом завдань
    filters: filtersReducer, // Редюсер для управління фільтрами
  },
});
