// 'createSlice' для створення слайсу
import { createSlice } from "@reduxjs/toolkit";

// Створення slice для стану фільтрів
const filtersSlice = createSlice({
  name: "filters", // Ім'я slice
  initialState: {
    status: "all", // Початкове значення фільтра — показувати всі завдання
  },
  reducers: {
    // Редюсер для оновлення фільтра стану
    setStatusFilter(state, action) {
      state.status = action.payload; // Оновлюємо значення фільтра (в action.payload - all/active/complited)
    },
  },
});

// Експортуємо action для оновлення фільтра
export const { setStatusFilter } = filtersSlice.actions;

// Експортуємо редюсер для використання в store
export default filtersSlice.reducer;
