// 'createSlice' для створення слайсу
// 'isAnyOf' утиліта - використовується в 'addMatcher'
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

// Імпорт асинхронних операції, створені через 'createAsyncThunk' (з файлу operations.js)
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

// Функція для обробки стану "pending"
const handlePending = (state) => {
  state.isLoading = true; // Встановлює стан 'isLoading'
};

// Функція для обробки стану "rejected"
const handleRejected = (state, action) => {
  state.isLoading = false; // Завантаження завершено
  state.error = action.payload; // Оновлюємо стан помилки
};

// Створення slice для стану завдань
const tasksSlice = createSlice({
  name: "tasks", // Ім'я slice
  initialState: {
    items: [], // Початковий стан списку завдань
    isLoading: false, // Стан завантаження
    error: null, // Повідомлення про помилку
  },
  // 'extraReducers' для обробки 'зовнішніх екшенів' з асинхронних операцій, створених через createAsyncThunk (в файлі operations.js)
  extraReducers: (builder) => {
    builder
      // Обробка fulfilled запиту для отримання всіх завдань (при першому завантаженні)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false; // Оновлення стану завантаження
        state.error = null; // Оновлення стану помилки
        state.items = action.payload; // Зберігаємо отримані завдання
      })
      // Обробка fulfilled запиту для додавання нового завдання
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload); // Додаємо нове завдання до списку
      })
      // Обробка fulfilled запиту для видалення завдання
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (task) => task.id !== action.payload.id
        );
      })
      // Обробка fulfilled запиту для перемикання стану виконання завдання (complited)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      // Використовуємо 'addMatcher' для обробки стану "pending" для всіх асинхронних операцій
      .addMatcher(
        isAnyOf(
          fetchTasks.pending,
          addTask.pending,
          deleteTask.pending,
          toggleCompleted.pending
        ),
        handlePending // Функція для обробки стану "pending"
      )
      // Використовуємо 'addMatcher' для обробки стану 'rejected' для всіх асинхронних операцій
      .addMatcher(
        isAnyOf(
          fetchTasks.rejected,
          addTask.rejected,
          deleteTask.rejected,
          toggleCompleted.rejected
        ),
        handleRejected // Функція для обробки стану "rejected"
      );
  },
});

// Експортуємо редюсер для використання в store
export default tasksSlice.reducer;
