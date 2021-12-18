const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TASKS":
      return {
        ...state,
        tasks: [...action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "CHANGE_STATUS":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id)
            task.status = action.payload.newStatus;
          return task;
        }),
      };
    default:
      return state;
  }
};

export default AppReducer;
