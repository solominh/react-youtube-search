
// state is previous state => not application state
export default function (state = null, action) {

    console.log('reducer books previous state', state);
    console.log('reducer books action', action);

    return [
        { title: 'book1', page: 10 },
        { title: 'book2', page: 20 },
        { title: 'book3', page: 30 },
        { title: 'book4', page: 40 },
    ]
}
