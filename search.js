const form = document.querySelector("main");
const btn=document.getElementById("search-button");
const searchinput=document.getElementById("search-input");
const searchResult = document.querySelector(".result");
const lastcont=document.querySelector(".last-cont");
const recipeee=document.querySelector("recipe");
const Search=document.querySelector("ui-linkedin-big-button")

// let inputData="";
// let page=1;



let getData=async (searchinput)=>{
      const res=await fetch("https://forkify-api.herokuapp.com/api/search?q="+searchinput)
      const data=await res.json()
      const cardData=data.recipes
      console.log(cardData)
      
      lastcont.innerHTML = `RECIPE LIST FOR: ${searchinput.toUpperCase()}`


      showCards(cardData)
    
    

}
let showCards=(res)=>{
    searchResult.innerHTML="";
    // searchResult.innerHTML='loadind...'
    // Search.innerHTML='Loading...'
    // const searchResult=window.open("","","width=500,height=500");
    // setTimeout(function(){searchResult.close()},100);
    

    res.forEach(element =>{


        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card" >
        <img src=${element.image_url} style="width:290px" id="img">
        <h1 class="upper-text">${element.title}</h1>
        <h4 class="lower-text">${element.publisher}</h4>
        
        <div>
            <a id="btndetail" role = "button" href = "DetailsButton.html?id=${element.recipe_id}">Details</a>
            <a role="button" href=${element.source_url} id="btnrecipe">Recipe URL</a>
        </div>
       </div>
        `
        
        searchResult.appendChild(div)

        

    

        
    })

    
}


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const searchinputvalue=searchinput.value;
    getData(searchinputvalue);

})



