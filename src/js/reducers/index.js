import {
  ADD_TASK,
  CHANGE_STATUS,
  DELETE_TASK,
  LOAD_TASKS,
} from "../constants/action-types";

const initialState = {
  tasks: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id)
            task.status = action.payload.category;
          return task;
        }),
      };
    }
    case LOAD_TASKS: {
      return {
        ...state,
        tasks: [...action.payload],
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
