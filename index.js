
fetch("./api.json").then((response)=>{
    return response.json();
}).then((data)=>{

    let product =document.getElementById("hello")
    for(let i=0;i<data.length;i++){
        product.innerHTML+=`
        ${data.map((item) => {
            return   ` 
        <div class="product-container" key={i}>
    <img class="product_image" src=${item.product_image}>
    <div class="info">
    <h2 class='name'> ${item.name}</h2>
    <p class="desc"> ${item.desc} </p>
    <div class="price">Rs.${item.price}</div>
    <button type="button" id="btn">Add to cart </button>`}).join('')}
    </div> ` ;} 
}).catch((error)=>{
    return console.log(error)
})


