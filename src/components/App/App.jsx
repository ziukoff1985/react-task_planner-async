import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "../AppBar/AppBar";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { fetchTasks } from "../../redux/operations";
import css from "./App.module.css";
import { selectError, selectIsLoading } from "../../redux/selectors";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
}
