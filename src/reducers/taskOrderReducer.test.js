import taskOrderReducer from './taskOrderReducer'

const oldState = {
  "root": ["00001","00002","00003","00004"],
  "00001": ["00005","00006","00007","00008"]
}

describe('Basic taskOrderReducer tests', () => {
  it('CREATE_ORDERED_TASKLIST', () => {
    const action = {
      type: "CREATE_ORDERED_TASKLIST",
      payload: {
        id: "00003",
        orderedTasklist: ["00009"]
      }
    }
    const expectedState = {
      "root": ["00001","00002","00003","00004"],
      "00001": ["00005","00006","00007","00008"],
      "00003": ["00009"]
    }
    expect(JSON.stringify(taskOrderReducer(oldState, action))).toEqual(JSON.stringify(expectedState))
  })
  it('UPDATE_ORDERED_TASKLIST', () => {
    const action = {
      type: "UPDATE_ORDERED_TASKLIST",
      payload: {
        id: "00001",
        orderedTasklist: ["00005","00006","00007","00008","00009"]
      }
    }
    const expectedState = {
      "root": ["00001","00002","00003","00004"],
      "00001": ["00005","00006","00007","00008","00009"]
    }
    expect(JSON.stringify(taskOrderReducer(oldState, action))).toEqual(JSON.stringify(expectedState))
  })
  it('DELETE_ORDERED_TASKLIST', () => {
    const action = {
      type: "DELETE_ORDERED_TASKLIST",
      payload: {
        id: "00001",
      }
    }
    const expectedState = {
      "root": ["00001","00002","00003","00004"]
    }
    expect(JSON.stringify(taskOrderReducer(oldState, action))).toEqual(JSON.stringify(expectedState))
  })
    
});