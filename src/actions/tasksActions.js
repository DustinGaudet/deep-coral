export const createTask = ({payload: {id, task}}) => ({
  type: "CREATE_TASK",
  id,
  task
})

export const updateTask = ({payload: {id, task}}) => ({
  type: "UPDATE_TASK",
  id,
  task
})

export const deleteTask = ({payload: {id, task}}) => ({
  type: "DELETE_TASK",
  id
})