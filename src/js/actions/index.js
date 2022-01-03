import {
  ADD_TASK,
  CHANGE_STATUS,
  DELETE_TASK,
  LOAD_TASKS,
} from "../constants/action-types";

export function addTask(payload) {
  return { type: ADD_TASK, payload };
}
export function deleteTask(payload) {
  return { type: DELETE_TASK, payload };
}
export function changeStatus(payload) {
  return { type: CHANGE_STATUS, payload };
}
export function loadTasks(payload) {
  return { type: LOAD_TASKS, payload };
}
