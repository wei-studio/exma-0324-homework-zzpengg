import {
  TOGGLE_TODO_COMPLETED,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  TOGGLE_SCORE_COMPLETED,
  TOGGLE_AREA_COMPLETED,
  SEARCH_TITLE_COMPLETED,
  DELETE_DATA_COMPLETED,
  UPDATE_DATA_COMPLETED,
} from './../actions/TodoAction'

const initState = {
  searchTitle: '',
  rentOrder: 'asc',
  starOrder: 'asc',
  status: null,
  data: [],
  renderData: [],
  error: null
}

export default function TodoReducer(state = initState, action) {
  switch (action.type) {
    // 這裡應該要參考上面的 initState 資料結構，補上 fetch 請求會發生的三種 action 對應的 reducer 資料合併處理
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        status: 'request'
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        status: 'success',
        data: action.response.data,
        renderData: action.response.data,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        status: 'failure',
        error: action.error
      };

    case TOGGLE_TODO_COMPLETED:
      const sortAsc  = (a, b) => a.rent - b.rent;
      const sortDesc = (a, b) => b.rent - a.rent;
      return {
        ...state,
        rentOrder: (state.rentOrder === 'asc' ? 'desc' : 'asc'),
        renderData: state.data.sort(state.rentOrder === 'asc' ? sortDesc : sortAsc),
      };
    case TOGGLE_SCORE_COMPLETED:
      const sortScoreAsc  = (a, b) => a.score - b.score;
      const sortScoreDesc = (a, b) => b.score - a.score;
      return {
        ...state,
        starOrder: (state.starOrder === 'asc' ? 'desc' : 'asc'),
        renderData: state.data.sort(state.starOrder === 'asc' ? sortScoreDesc : sortScoreAsc),
      };
    case TOGGLE_AREA_COMPLETED:
      const sortAreaAsc  = (a, b) => a.area.toLowerCase().localeCompare(b.area.toLowerCase());
      const sortAreaDesc = (a, b) => b.area.toLowerCase().localeCompare(a.area.toLowerCase());
      return {
        ...state,
        areaOrder: (state.areaOrder === 'asc' ? 'desc' : 'asc'),
        renderData: state.data.sort(state.areaOrder === 'asc' ? sortAreaDesc : sortAreaAsc),
      };
    case SEARCH_TITLE_COMPLETED:
      let searchString = action.searchTitle.trim().toLowerCase();
      return {
        ...state,
        renderData: state.data.filter(function(str){
          return str.title.toLowerCase().match( searchString );
        }),
      };
    case DELETE_DATA_COMPLETED:
      let newData = state.renderData;
      newData.splice(action.index,1);
      return {
        ...state,
        renderData: newData,
      };
    case UPDATE_DATA_COMPLETED:
      newData = state.renderData;
      console.log(newData[action.index].rent);
      newData[action.index].rent = action.newRent;
      return {
        ...state,
        renderData: newData,
    };
    default:
      return state;
  }

}
