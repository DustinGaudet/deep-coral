export const createOrderedTasklist = ({payload: {id, orderedTasklist}}) => ({
  type: "CREATE_ORDERED_TASKLIST",
  id,
  orderedTasklist
})

export const updateOrderedTasklist = ({payload: {id, orderedTasklist}}) => ({
  type: "UPDATE_ORDERED_TASKLIST",
  id,
  orderedTasklist
})

export const deleteOrderedTasklist = ({payload: {id, orderedTasklist}}) => ({
  type: "DELETE_ORDERED_TASKLIST",
  id
})