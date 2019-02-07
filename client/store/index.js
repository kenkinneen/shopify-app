import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const htmlOptions = {
  firstText: 'Order within',
  secondText: 'to recieve your order in 3 business days',
  value:'ss'
}

const requestFields = {
  firstText: 'ss',
  verb: 'PUT',
  path: '/themes/41031794806/assets.json',
  params: JSON.stringify({
      "asset": {
    "key": "snippets/order-within-snippet.liquid",
    "value": "hhh"
  }
  })
};

const initState = {
  htmlOptions,
  requestFields,
  requestInProgress: false,
  requestError: null,
  responseBody: '',
};

function reducer(state = initState, action) {
  switch (action.type) {
    case 'UPDATE_VERB':
      return {
        ...state,
        responseBody: '',
        htmlOptions: {
          ...state.htmlOptions,
          firstText: action.payload.firstText,
        },
      };
    case 'UPDATE_PATH':
      return {
        ...state,
        responseBody: '',
        requestFields: {
          ...state.requestFields,
          path: action.payload.path,
        },
      };
    case 'UPDATE_HTML':
    return {
      ...state,
      responseBody: '',
      requestFields: {
        ...state.requestFields,
        params: action.payload.htmlOutput,
      },
    };
    case 'UPDATE_FIRST_TEXT':
      return {
        ...state,
        responseBody: '',
        htmlOptions: {
          ...state.htmlOptions,
          firstText: action.payload.firstText,
        },
      };
    case 'UPDATE_SECOND_TEXT':
      return {
        ...state,
        responseBody: '',
        htmlOptions: {
          ...state.htmlOptions,
          secondText: action.payload.secondText,
        },
      };
    case 'REQUEST_START':
      return {
        ...state,
        requestInProgress: true,
        requestError: null,
        responseBody: ''
      };
    case 'REQUEST_COMPLETE':
      return {
        ...state,
        requestInProgress: false,
        requestError: null,
        responseBody: action.payload.responseBody
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
        requestInProgress: false,
        requestError: action.payload.requestError,
      };
    default:
      return state;
  }
}

const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducer, middleware);

export default store;
