const categoriesItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);
categoriesItem.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('ul li').length}`);
});