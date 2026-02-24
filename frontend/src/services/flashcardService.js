import { API_PATHS } from "../utils/apiPath.js";
import axiosInstance from "../utils/axiosInstance.js";

const getAllFlashcardSets = async () => {
    try {
        const response = await axiosInstance.get(API_PATHS.FLASHCARDS.GET_ALL_FLASHCARD_SETS)
        return response.data
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch flashcard sets' }
    }
}

const getFlashcardsForDocument = async (documentId) => {
    try {
        const response = await axiosInstance.get(API_PATHS.FLASHCARDS.GET_FLASHCARDS_FOR_DOC)
        return response.data
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch flashcards' }

    }
}

const reviewFlashcard = async (cardId, cardIndex) => {
    try {
        const response = await axiosInstance.post(API_PATHS.FLASHCARDS.REVIEW_FLASHCARD(cardId), { cardIndex })
        return response.data
    } catch (error) {
        throw error.response?.data || { message: 'Failed to review flashcards' }

    }
}

const toogleStar = async (cardId) => {
    try {
        const response = await axiosInstance.put(API_PATHS.FLASHCARDS.TOOGLE_STAR(cardId))
        return response.data
    } catch (error) {
        throw error.response?.data || { message: 'Failed to star flashcard' }

    }
}

const deleteFlashcardSet = async (id) => {
    try {
        const response = await axiosInstance.delete(API_PATHS.FLASHCARDS.DELETE_FLASHCARD_SET(id))
        return response.data
    } catch (error) {
        throw error.response?.data || { message: 'Failed to delete flashcardset' }
    }
}


const flashcardService = {
    getAllFlashcardSets,
    getFlashcardsForDocument,
    reviewFlashcard,
    toogleStar,
    deleteFlashcardSet
}

export default flashcardService