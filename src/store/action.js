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