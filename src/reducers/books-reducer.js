import {SELECT_BOOK} from '../action-types/book-action-types'
import {DELETE_BOOK} from '../action-types/book-action-types'

const initialState = { books : [
        {'title': 'ከአድማስ ባሻገር', author : 'በዓሉ ግርማ'},
        {'title': 'ፍቅር እስከ መቃብር', author:'ሀዲስ ዓለማየሁ'},
        {'title': 'የተቆለፈበት ቁልፍ ', author:'ምህረት ደበበ'},
        {'title': 'እመጓ', author:'ዓለማየሁ ዋሴ'},
        {'title': 'ትኩሳት', author:'ስብሐት ገብረ እግዚአብሔር'},
        {'title': 'ኦሮማይ ', author:'በዓሉ ግርማ'},
        {'title': 'ከአሜን ባሻገር ', author:'በዕውቀቱ ስዩም'},
        {'title': 'ሰመመን ', author:'ሲሳይ ንጉሱ'},
        {'title': 'Dertogada ', author:'ይስማዕከ ወርቁ'},
        {'title': 'አልወለድም  ', author:' አቤ ጉበኛ'},
        {'title': 'ሌላሠው ', author:'ምህረት ደበበ'},
        {'title': 'ቆንጆዎቹ ', author:'ሠርቅ ዳንኤል'},
        {'title': 'ደራሲው ', author:'በዓሉ ግርማ'},
        {'title': 'አራቱ ኃያላን ', author:'ዳንኤል ክብረት'},


    ], selectedBooks: []
};

const booksReducer = (state = initialState, action) => {
                            switch (action.type) {
                                case SELECT_BOOK:{
                                    const found = state.selectedBooks.findIndex((book) => book.title === action.selectedBook.title);

                                    if (found === -1) {
                                        return Object.assign({}, {...state, selectedBooks: [...state.selectedBooks,action.selectedBook]});
                                    }

                                    return state;
                                }
                                case DELETE_BOOK: {
                                    //why won't this work>> state.selectedBooks = [] ; return state; ?
                                    return Object.assign({}, {...state, selectedBooks: []});
                                }
                                default:
                                    return state
                            }
};

export default booksReducer;