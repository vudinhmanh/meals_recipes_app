import axiosClient from '../axiosClient'
export function searchMeals({ commit }, key) {
    axiosClient.get(`search.php?s=${key}`)
    .then(({data}) => {
        commit('setSearchedMeals', data.meals)
    })
}