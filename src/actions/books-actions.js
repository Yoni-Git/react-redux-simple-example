import {SELECT_BOOK,DELETE_BOOK} from '../action-types/book-action-types'

export const selectBookAction = book => {

    return {
        type: SELECT_BOOK,
        selectedBook: book
    }
};

/**
 * Notice here we are having an action creator function as a constant, second variation
 * @param book
 * @returns {{deletedBook: *, type: { DELETE_BOOK}}}
 */
export const deleteBookAction = book => {
    return {
        type: DELETE_BOOK,
        deletedBook: book
    }
}
