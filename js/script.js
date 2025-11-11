const container = document.getElementById("recipeContainer");
    const loader = document.getElementById("loader");
    const modal = document.getElementById("recipeModal");
    const closeModal = document.getElementById("closeModal");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearBtn");

    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDifficulty = document.getElementById("modalDifficulty");
    const modalMealType = document.getElementById("modalMealType");
    const modalIngredients = document.getElementById("modalIngredients");
    const modalInstructions = document.getElementById("modalInstructions");

    async function loadRecipes(query = "") {
      loader.style.display = "block";
      container.innerHTML = "";

      const url = query
        ? `https://dummyjson.com/recipes/search?q=${query}`
        : `https://dummyjson.com/recipes?limit=20`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        const recipes = data.recipes || [];

        loader.style.display = "none";

        if (recipes.length === 0) {
          container.innerHTML =
            '<p style="grid-column:1/-1;text-align:center;">No recipes found 🍴</p>';
          return;
        }

        recipes.forEach((recipe) => {
          const div = document.createElement("div");
          div.classList.add("recipe");
          div.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
              <h3>${recipe.name}</h3>
              <p>${recipe.cuisine || "Unknown Cuisine"}</p>
            </div>
          `;
          div.addEventListener("click", () => {
            modalImg.src = recipe.image;
            modalTitle.textContent = recipe.name;
            modalDifficulty.textContent = recipe.difficulty;
            modalMealType.textContent = recipe.mealType.join(", ");
            modalIngredients.innerHTML = recipe.ingredients
              .map((i) => `<li>${i}</li>`)
              .join("");
            modalInstructions.textContent = recipe.instructions;
            modal.style.display = "flex";
          });
          container.appendChild(div);
        });
      } catch (err) {
        loader.innerHTML = "⚠️ Error loading recipes.";
      }
    }

    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.trim();
      loadRecipes(query);
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      loadRecipes();
    });

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchBtn.click();
    });

    closeModal.addEventListener("click", () => (modal.style.display = "none"));
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });

    loadRecipes();