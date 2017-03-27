export const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';
export function toggleTodoCompleted(index) {
  return {
    type: TOGGLE_TODO_COMPLETED,
    index
  }
}

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export function fetchTodos() {
  return async (dispatch) => {
    // 在這裡實作你的 async action，使用 fetch 來請求 API ，
    // 並在正確的時機 dispatch FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE 這三種 action
    
  }
}