import axiosClient from '../axiosClient'
export function searchMeals({ commit }, key) {
    axiosClient.get(`search.php?s=${key}`)
    .then(({data}) => {
        commit('setSearchedMeals', data.meals)
    })
}
export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setMealsByLetter', data.meals)
    })
}
export function searchMealsByCategory({commit}, category) {
    axiosClient.get(`filter.php?c=${category}`)
    .then(({data}) => {
        commit('setMealsByCategory', data.meals)
    })
}
export function searchMealsByIngredient({commit}, strMeal) {
    axiosClient.get(`filter.php?i=${strMeal}`)
    .then(({data}) => {
        commit('setMealsByIngredient', data.meals)
    })
}
export function updateCategory({commit}, category) {
    commit('setCategoryTittle', category)
}