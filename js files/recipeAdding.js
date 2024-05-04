function addRecipe() {
    let recipeName = document.getElementById("recipeName").value;
    let ingredients = document.getElementById("ingredients").value;
    let instructions = document.getElementById("instructions").value;
    let imageUrl = document.getElementById("imageUrl").value;
    let procedure = document.getElementById("procedure").value;

    let recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe-card";

    recipeDiv.innerHTML = `
        <h2>${recipeName}</h2>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
        <img src="${imageUrl}" alt="${recipeName}" class="recipe-image">
        <p><strong>Procedure:</strong> ${procedure}</p>
    `;

    document.getElementById("recipeContainer").appendChild(recipeDiv);

    document.getElementById("recipeName").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instructions").value = "";
    document.getElementById("imageUrl").value = "";
    document.getElementById("procedure").value = "";
}