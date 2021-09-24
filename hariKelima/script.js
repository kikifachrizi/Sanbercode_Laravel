
var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]
let cari = document.getElementById('searchItem');
let tampil = document.getElementById('listBarang');

let jmlh = 0;
function addCart(){
    // add to cart
let btn = document.getElementById('cart');
let count = document.getElementById('point');
let tmbl = document.querySelectorAll('#addCart.btn');


for(let i=0;i<tmbl.length;i++){
    tmbl[i].addEventListener('click',function(e){
        e.preventDefault();
        jmlh++;
        // console.log(jmlh);
        count.innerHTML = `(${jmlh})`;
    });
}
}









let cardLoop = '';

for(let i = 0;i < items.length;i++){
    cardLoop += `
    <!-- Component Card dari Bootstrap --> 
    <div class ="col-4 mt-2"> 
    <div class="card" style="width: 18rem;">
        <img src="img/${items[i][4]}" class="card-img-top" height="200px" width="200px" alt="...">
        <div class="card-body">
            <h5 class="card-title" id="itemName">${items[i][1]}</h5>
            <p class="card-text" id="itemDesc">${items[i][3]}</p>
            <p class="card-text">Rp ${items[i][2]}</p>
            <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
        </div>
    </div>
    </div>
    `;
    
}

tampil.innerHTML = cardLoop;

addCart();



// cari
cari.addEventListener("click", function(event){
    event.preventDefault();
    let text = document.getElementById('keyword').value;
    let result = filteredItems(text);
    // console.log(result);
    let cardLoop = '';
    for(let j =0;j<result.length;j++){
        cardLoop += 
        `
        <!-- Component Card dari Bootstrap --> 
        <div class ="col-4 mt-2"> 
        <div class="card" style="width: 18rem;">
            <img src="img/${result[j][4]}" class="card-img-top" height="200px" width="200px" alt="...">
            <div class="card-body">
                <h5 class="card-title" id="itemName">${result[j][1]}</h5>
                <p class="card-text" id="itemDesc">${result[j][3]}</p>
                <p class="card-text">Rp ${result[j][2]}</p>
                <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
            </div>
        </div>
        </div>
        `;
    }

    tampil.innerHTML = cardLoop;
    addCart();
});



function filteredItems(text){
    let filterItems = [];

    for(let j=0;j<items.length;j++){
        let item = items[j];
        let namaItem = item[1];
        let check = namaItem
        .toLowerCase()
        .includes(text.toLowerCase());
        // check adalah kunci untuk mengecek apakah text(keyboard/mouse) termasuk ke dalam nama produk -> kuncinya adalah includes

        if(check == true ){
            filterItems.push(item);
        }

    }

        
    return filterItems;
}

// filteredItems('mouse');







