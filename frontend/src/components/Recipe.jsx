//Recipe.jsx

import React, { useState } from 'react';

function Recipe() {
  // This state will store the rating given by the user (starts at 0)
  const [rating, setRating] = useState(0);

  // This function will update the rating when the user selects a new value
  const handleRatingChange = (event) => {
    setRating(event.target.value);  // Updates the rating when a new value is selected
  };

  return (
    <div className="recipe">
      {/* Recipe Title */}
      <h2>Recipe Title: Mummy's Meatballs</h2>

      {/* Recipe Ingredients */}
      <p><strong>Ingredients:</strong> Meatballs, Blood Sauce, Garlic</p>

      {/* Recipe Story */}
      <p>
        <strong>Story:</strong> 
        These meatballs were prepared by an ancient mummy who had spent centuries perfecting the recipe. 
        Legend has it that the mummy, awakened from the dead, wandered through the desert in search of the perfect 
        ingredients. After years of searching, the mummy finally found the magical "blood sauce" — a blend of spices 
        and secret ingredients passed down through generations of cursed chefs. The garlic adds a nice twist to keep 
        the creatures of the night away, or perhaps, to attract them, depending on who you ask...
      </p>

      {/* Rating Section */}
      <div className="rating">
        <label htmlFor="rating">Rate this recipe:</label>

        {/* Rating Input: Number field from 1 to 5 */}
        <input
          type="number"
          id="rating"
          value={rating}  // Shows the current rating
          onChange={handleRatingChange}  // Calls this function when the user selects a new rating
          min="1"  // Minimum rating allowed
          max="5"  // Maximum rating allowed
        />
      </div>

      {/* Displaying the rating */}
      <p><strong>Your Rating:</strong> {rating}</p>
    </div>
  );
}

export default Recipe;