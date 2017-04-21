export const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';
export function toggleTodoCompleted() {
  return {
    type: TOGGLE_TODO_COMPLETED,
  }
}

export const TOGGLE_SCORE_COMPLETED = 'TOGGLE_SCORE_COMPLETED';
export function toggleScoreCompleted() {
  return {
    type: TOGGLE_SCORE_COMPLETED,
  }
}

export const TOGGLE_AREA_COMPLETED = 'TOGGLE_AREA_COMPLETED';
export function toggleAreaCompleted() {
  return {
    type: TOGGLE_AREA_COMPLETED,
  }
}

export const SEARCH_TITLE_COMPLETED = 'SEARCH_TITLE_COMPLETED';
export function searchTitleCompleted(searchTitle) {
  return {
    type: SEARCH_TITLE_COMPLETED,
    searchTitle,
  }
}

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export function fetchTodos() {
  return async (dispatch) => {
    // 在這裡實作你的 async action，使用 fetch 來請求 API ，
    // 並在正確的時機 dispatch FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE 這三種 action
    dispatch({
      type: FETCH_TODOS_REQUEST
    });

    try {
      const httpResponse = await fetch("http://test-zzpengg.c9users.io:8080/house/findHouseData")
      .then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })

      console.log(httpResponse);
      console.log(httpResponse.data[0].title);
      if(httpResponse.text != 'house find success'){
        throw new Error(`${httpResponse.status(httpResponse.statusText)}`);
      }

      dispatch({
        type: FETCH_TODOS_SUCCESS,
        response: httpResponse
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_TODOS_FAILURE,
        error: error.message
      })
    }
  }
}
