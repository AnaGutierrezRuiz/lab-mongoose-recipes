const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: "A title is required"
  },
  level: {
    type: String,
    enum: [ "Easy Peasy", "Amateur Chef", "Ultrapro Chef"]
  },
  ingredients: {
    type: [ String ]
  },
  cuisine: {
    type: String,
    required: "A cuisine is required"
  },
  dishType: {
    type: String,
    enum: [ "breaskfast", "main-course", "soup", "snack", "drink", "dessert", "other"]
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number,
    minValue: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
