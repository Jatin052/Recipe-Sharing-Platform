
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const recipeCards = document.querySelectorAll(".recipe-card");
    const vegButton = document.getElementById("vegButton");
    const nonVegButton = document.getElementById("nonVegButton");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        recipeCards.forEach(function (card) {
            const recipeTitle = card.querySelector("h2").textContent.toLowerCase();

            if (recipeTitle.includes(searchTerm)) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });

    vegButton.addEventListener("click", function () {
        filterRecipes("Veg");
    });

    nonVegButton.addEventListener("click", function () {
        filterRecipes("Non-Veg");
    });

    function filterRecipes(category) {
        recipeCards.forEach(function (card) {
            const recipeCategory = card.classList.contains(category.toLowerCase());

            if (recipeCategory || category === "All") {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    }
});