
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
window.onload = function () {
    title.value = '';
    price.value = '';
    taxes.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
  };
  
  let mode = 'create';
  let index;
//get total
//check when write anything into price inputs
function getTotal(){
    if(price.value != ''){
        //.value to get value
        // + to convert from string to integr 
        let result = (+price.value + +taxes.value ) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#390677';
    }
    else{
        total.innerHTML = '';
        total.style.background = '#6200ea';
    }
    
}

//create product
let datapro;
 if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product);

 }else{
    datapro = [];
 }
submit.onclick = function (){
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        discount:discount.value,
        total:total.innerHTML,//from element because it is not static 
        count:+count.value,
        category:category.value,

    }
    //count
    if(title.value != '' &&
         price.value !='' 
         && category.value !='' &&
         count.value <= 1000
        )
    {
        if(mode === 'create')
            {
            if(newpro.count > 1){
                for(let j = 0 ; j < newpro.count ; j++)
                {
                    datapro.push(newpro);
                }
             }else{
                datapro.push(newpro);
             }
           }else{
            datapro[index] = newpro;
            mode = 'create';
            submit.innerHTML = 'create';
            count.style.display = 'block';
           }
           clearData();

    }
  
    
    //save local storge
    localStorage.setItem('product',JSON.stringify(datapro));
    showData();
}


//clear inputs
function clearData(){
    title.value ='';
    price.value ='';
    taxes.value ='';
    discount.value ='';
    total.innerHTML ='';
    count.value ='';
    category.value ='';
}
//read
function showData(){
    getTotal();
    let table = '';
    for (let i = 0 ; i < datapro.length ; i++){
        table += `<tr>
          <td>${i + 1}</td>
          <td>${datapro[i].title}</td>
          <td>${datapro[i].price}</td>
          <td>${datapro[i].taxes}</td>
          <td>${datapro[i].discount}</td>
          <td>${datapro[i].total}</td>
          <td>${datapro[i].category}</td>
          <td><button onclick="updateData(${i})" class="update">update</button></td>
          <td><button onclick="deleteData(${i})" class="delete">delete</button></td>
        </tr>`;
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteall');
    if(datapro.length > 0){
        btnDelete.innerHTML = `        
              <button onclick="deleteall()" >Delete All (${datapro.length})</button>
                        `
    }else{
        btnDelete.innerHTML ='';
    }

}
showData()

//delete
function deleteData(i){

    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro);
    showData();
}
function deleteall(){
    
        datapro = [];
        localStorage.removeItem('product');
        showData();
}


//update
function updateData(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    discount.value = datapro[i].discount;
    getTotal();
    count.style.display = 'none';
    category.value = datapro[i].category;
    submit.innerHTML = 'Update';
    mode = 'update';
    index = i;
    scroll(

        {tpo : 0,
         behavior: "smooth",   
        }
    )

}
//search
let searchmode = 'title';
function getmode(id){
    let search = document.getElementById('search');
    if(id == 'searchTitle'){
        searchmode = 'title';
        
    }else{
        searchmode = 'category';
        
    }
    search.placeholder='Search By '+ searchmode;
 search.focus();
 search.value = '';
 showData();
}
function searchdata(value){
    let table = '';
    if(searchmode == 'title'){
        for(let c = 0 ; c < datapro.length ; c++)
        {
            if(datapro[c].title.toLowerCase().includes(value.toLowerCase()))
            {
                table += `
          <tr>
          <td>${c}</td>
          <td>${datapro[c].title}</td>
          <td>${datapro[c].price}</td>
          <td>${datapro[c].taxes}</td>
          <td>${datapro[c].discount}</td>
          <td>${datapro[c].total}</td>
          <td>${datapro[c].category}</td>
          <td><button onclick="updateData(${c})" class="update">update</button></td>
          <td><button onclick="deleteData(${c})" class="delete">delete</button></td>
          </tr>`;
            }
        }
    }else{
        for(let c = 0 ; c < datapro.length ; c++)
            {
                if(datapro[c].category.toLowerCase().includes(value.toLowerCase()))
                {
                    table += `
              <tr>
              <td>${c}</td>
              <td>${datapro[c].title}</td>
              <td>${datapro[c].price}</td>
              <td>${datapro[c].taxes}</td>
              <td>${datapro[c].discount}</td>
              <td>${datapro[c].total}</td>
              <td>${datapro[c].category}</td>
              <td><button onclick="updateData(${c})" class="update">update</button></td>
              <td><button onclick="deleteData(${c})" class="delete">delete</button></td>
              </tr>`;
                }
            }
    }
    document.getElementById('tbody').innerHTML = table;

}
document.getElementById("logout").addEventListener("click", function () {
    // Remove current user from localStorage
    localStorage.removeItem("currentUser");
  
    // Redirect to login page
    window.location.href = "login.html";
  });


