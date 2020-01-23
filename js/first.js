var productContainer=[];

function addProduct()
{
   var productName=document.getElementById("ProductNameInp").value;
   var productPrice=document.getElementById("ProductPriceInp").value;
   var ProductCategory=document.getElementById("ProductCategoryInp").value;
   var ProductDesc=document.getElementById("ProductDescInp").value;
  



   var Product=
   {
     name:productName,
     price:productPrice,
     category:ProductCategory,
     desc:ProductDesc,
    
   }
   productContainer.push(Product);
   displayProducts();
}

function displayProducts()
{
   var temp="";

   for(var i=0;i<productContainer.length;i++)
   {
      temp += `<div class="col-md-3"> <div class="product mb-4">
          <img src="images/mobile.jpg"class="img-fluid"/>
          <h4>`+productContainer[i].name+`<span class="ml-3 badge badge-primary">`+ productContainer[i].category+`</span></h4>
          <p> `+ productContainer[i].desc+`</p>
          <div class="price">`+ productContainer[i].price+`</div>
          <button  onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger btn-sm">Delete </button>
          <button id="upbutton" onclick="updateProduct(`+i+`)" class="btn btn-outline-warning btn-sm">update </button>
       </div>
       </div>`;
   }
   document.getElementById("productsRow").innerHTML=temp;
}

  function deleteProduct(indx)
  {
     var deletedProdut=productContainer.splice(indx,1);
     localStorage.setItem("productData",JSON.stringify(productContainer));
     displayProducts();
  }
  


  function updateProduct(inps) 
  {
     
   var productName = document.getElementById("productNameInp");

       productName.value=productContainer[inps].name;
   
       document.getElementById("upbutton").innerHTML ="update";

       document.getElementById("upbutton").onclick=function(){
        productContainer[inps].name= document.getElementById("productNameInp").value;
        localStorage.setItem("productData" ,JSON.stringify (productContainer));
        displayproduct();
        
       document.getElementById("upbutton").innerHTML ="add Product";
     
       document.getElementById("upbutton").onclick=function (){
        addProduct();
    
    

    }
   }
  }
