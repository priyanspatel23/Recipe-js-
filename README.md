# ðŸ” Recipe Explorer

**Recipe Explorer** is a simple and visually appealing web app that allows users to explore various recipes from different cuisines.  
It fetches recipe data from an external API and displays them in a clean, responsive grid layout with images, cuisine types, and search functionality.

---

## ðŸš€ Features

- ðŸ“œ Fetches live recipe data from an API (DummyJSON or custom endpoint)
- ðŸ• Displays recipe cards with image, name, and cuisine
- ðŸ” Search bar to quickly find recipes by name
- ðŸ§­ "Clear" button to reset search results
- ðŸ“± Fully responsive design for all devices
- ðŸŽ¨ Clean and modern UI using HTML, CSS, and JavaScript

---

## ðŸ§© Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **API Integration** 

---

## ðŸ“¡ API Reference

Example API endpoint used:

```js
https://dummyjson.com/recipes
```

Each recipe includes:
- `name`
- `image`
- `cuisine`
- `ingredients`
- `instructions`

---

## ðŸ§  How It Works

1. The app fetches recipe data from the API when the page loads.
2. It dynamically generates recipe cards using JavaScript.
3. The search bar allows filtering recipes by name.
4. The "Clear" button resets the recipe grid to show all recipes again.

---

## ðŸ–¼ï¸ Screenshot

![Recipe Explorer Screenshot](<img width="1920" height="1641" alt="screencapture-file-D-Full-Stack-javascript-API-recipe-api-index-html-2025-11-11-19_47_01" src="https://github.com/user-attachments/assets/4b0dd158-46c0-4bbd-81ed-7e1db2099b8a" />
)

---

## âš™ï¸ How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/recipe-explorer.git
   ```
2. Open the project folder:
   ```bash
   cd recipe-explorer
   ```
3. Run the app:
   - Simply open `index.html` in your browser  
   OR  
   - Use a local server (e.g. VS Code Live Server)

---

## ðŸ“ Project Structure

```
recipe-explorer/
â”‚
â”œâ”€â”€ index.html        # Main HTML page
â”œâ”€â”€ style.css         # Styling and layout
â”œâ”€â”€ script.js         # JavaScript for API and UI logic
â”œâ”€â”€ assets/           # Images or icons (optional)
â””â”€â”€ README.md         # Project documentation
```

---

## ðŸ™Œ Credits

- Recipe data powered by [DummyJSON API](https://dummyjson.com/)
- UI designed and developed by **Priyans Patel**

---

## ðŸ§¾ License

This project is open source and available under the [MIT License](LICENSE).

---

### ðŸ’¡ Future Enhancements

- Add detailed recipe pages with ingredients and steps  
- Add â€œFavorite Recipesâ€ feature using localStorage  
- Dark mode toggle  
- Filter by cuisine type
