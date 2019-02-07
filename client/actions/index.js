export function updateVerb(verb) {
  return {
    type: 'UPDATE_VERB',
    payload: {
      verb,
    },
  };
}

export function updatePath(path) {
  return {
    type: 'UPDATE_PATH',
    payload: {
      path,
    },
  };
}

export function updateFirstText(firstText) {
  return {
    type: 'UPDATE_FIRST_TEXT',
    payload: {
      firstText,
    },
  };
}

export function updateSecondText(secondText) {
  return {
    type: 'UPDATE_SECOND_TEXT',
    payload: {
      secondText,
    },
  };
}

export function updateHTMLoutput(htmlOutput) {
  return {
    type: 'UPDATE_HTML',
    payload: {
      htmlOutput,
    },
  };
}

export function sendRequest(requestFields) {
  const { verb, path, params } = requestFields;

  const fetchOptions = {
    method: verb,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'plain/text'
    },
    credentials: 'include',
  }

  if (verb !== 'GET') {
    fetchOptions['body'] = params
  }

  return dispatch => {
    dispatch(requestStartAction());

    return fetch(`/shopify/api${path}`, fetchOptions)
      .then(response => response.json())
      .then(json => dispatch(requestCompleteAction(json)))
      .catch(error => {
        dispatch(requestErrorAction(error));
      });
  };
}

export function saveSnippet(requestFields) {



   console.log("save-snippet");
}

function requestStartAction() {
  return {
    type: 'REQUEST_START',
    payload: {},
  };
}

function requestCompleteAction(json) {
  const responseBody = JSON.stringify(json, null, 2);

  return {
    type: 'REQUEST_COMPLETE',
    payload: {
      responseBody
    },
  };
}

function requestErrorAction(requestError) {
  return {
    type: 'REQUEST_ERROR',
    payload: {
      requestError,
    },
  };
}
