
// state is previous state => not application state
export default function (state = null, action) {
    console.log('reducer active book previous state', state);
    console.log('reducer active book action', action);

    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}
