// Імпорт функції 'createAsyncThunk' для створення асинхронних операцій
import { createAsyncThunk } from "@reduxjs/toolkit";

// Імпорт бібліотеки 'axios' для HTTP-запитів
import axios from "axios";

// Базовий URL для 'axios'
axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// Операція для отримання всіх завдань
export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll", // Ім'я операції
  async (_, thunkAPI) => {
    // Функція виконавця
    try {
      // Виконання GET-запиту
      const response = await axios.get("/tasks");
      // Повернення отриманих даних
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Операція для додавання нового завдання
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      // Виконання POST-запиту
      const response = await axios.post("/tasks", { text });
      // Повернення даних нового завдання
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Операція для видалення завдання
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      // Виконання DELETE-запиту
      const response = await axios.delete(`/tasks/${taskId}`);
      // Повернення даних видаленого завдання
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Операція для перемикання стану виконання завдання (completed or not)
export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        // Перемикання значення поля completed
        completed: !task.completed,
      });
      // Повернення даних завдання з оновленим 'completed'
      return response.data;
    } catch (e) {
      // Обробка помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
