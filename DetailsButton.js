const serachWindow = window.location.search;
const param = new URLSearchParams(serachWindow);
const id = param.get("id");
console.log(id);







const ingresult = document.querySelector(".all-ing");
const ingredentData =  async (id) =>{

    try{
        const ingdata =  await fetch("https://forkify-api.herokuapp.com/api/get?rId="+id);

        if(!ingdata.ok){
            throw new Error("somthing is not good");
        }

        const ingjsondata = await ingdata.json();
        console.log(ingjsondata);
        // const ingrecipeData = ingjsondata.recipe;

        const ingdiv = document.createElement("div");
        ingdiv.className = "main";

        ingdiv.innerHTML = `
        <div class = "image-container">
        <a class="back" href="search.html" role="button">Back to recipe list</a>
        <br>
        <img class="image" src="${ingjsondata.recipe.image_url}" alt="xyz">
    </div>
    <div class="product-container">
        <div class = "name">${ingjsondata.recipe.title}</div>
        <p class="title">Provided By ${ingjsondata.recipe.publisher}</p>
        <a class="web" target="_blank" href="${ingjsondata.recipe.publisher_url}">Publiser Webpage</a>
        <a class="recipeurl" target="_blank" href="${ingjsondata.recipe.source_url}">Recipe Url</a>
        <div class="ing">Ingredients</div>

    </div>
        `
        ingresult.appendChild(ingdiv);

        const ingredient = ingjsondata.recipe.ingredients;
        console.log(ingredient);

        const ingproduct = document.querySelector(".product-container");

        

        ingredient.forEach(element => {
            const ingredientdiv = document.createElement("div");
            ingredientdiv.innerHTML = `
            <div class="ing-name">
            <h5>${element}</h5>
            </div>
            `
            ingproduct.appendChild(ingredientdiv);

        });







    }catch(e){
        console.log(e);
    }
}

ingredentData(id);