var ingredients = [];

for (var i = 1; i < 16; i++) {
    if (data['strIngredient' + i] !== '') {
        ingredients.push(data['strIngredient' + i])        
    }
}

var measurements =[];
for (var i = 1; i < 16; i++) {
    if (data['strMeasure' + i] !== '') {
        ingredients.push(data['strMeasure' + i])        
    }
}