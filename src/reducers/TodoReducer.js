import { TOGGLE_TODO_COMPLETED, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './../actions/TodoAction'

const initState = {
  status: null,
  data: [],
  error: null
}

export default function TodoReducer(state = initState, action) {
  switch (action.type) {
    // 這裡應該要參考上面的 initState 資料結構，補上 fetch 請求會發生的三種 action 對應的 reducer 資料合併處理
    case FETCH_TODOS_REQUEST:
      return ;
    case FETCH_TODOS_SUCCESS:
      return ;
    case FETCH_TODOS_FAILURE:
      return ;

    case TOGGLE_TODO_COMPLETED:
      return {
        ...state,
        data: state.data.map((todo, index) => {
          if (index == action.index) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted
            };
          }
          return todo; 
        })
      };
    default:
      return state;
  }

}