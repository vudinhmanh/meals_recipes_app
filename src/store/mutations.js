export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || [];
}
export function setMealsByLetter(state, meals) {
    state.mealsByLetter = meals || [];
}
export function setCategory(state, allCategories) {
    state.allCategories = allCategories;
}
export function setMealsByCategory(state, meals) {
    state.mealsByCategories = meals || [];
}
export function setMealsByIngredient(state, meals) {
    state.mealsByIngredients = meals || [];
}
export function setCategoryTittle(state, category) {
    state.selectedCategory = category
}