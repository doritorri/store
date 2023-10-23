// import { data } from './data.js'
// let hot = document.querySelector('#hot li .row')
// let featured = document.querySelector('#featured li .row')


// console.log(data);

// let listItemHot = data.filter(product => product.type === 'noibat');
// let listItemFeatured = data.filter(product => product.type === 'banchay');
// let htmlHot = ""
// let htmlFeatured = ""
// listItemHot.forEach(e => {
//     htmlHot += `<div class="col-md-3 col-sm-6">
//     <div class="products">
//        <div class="offer">- %20</div>
//        <div class="thumbnail"><a href="details.html"><img
//                 src="${e.thum}" alt="Product Name"></a></div>
//        <div class="productname"> . </div>
//        <h4 class="price">${e.name}</h4>
//        <div class="button_group"><button class="button add-cart"  data-mydata="${e.id}"
//              type="button"">${e.price}</button><button class="button compare" type="button"><i
//                 class="fa fa-exchange"></i></button><button class="button wishlist"
//              type="button"><i class="fa fa-heart-o"></i></button></div>
//     </div>
//  </div>`
// })

// hot.innerHTML = htmlHot

// listItemFeatured.forEach(e => {
//     htmlFeatured += `<div class="col-md-3 col-sm-6">
//     <div class="products">
//        <div class="offer">- %20</div>
//        <div class="thumbnail"><a href="details.html"><img
//                 src="${e.thum}" alt="Product Name"></a></div>
//        <div class="productname"> . </div>
//        <h4 class="price">${e.name}</h4>
//        <div class="button_group"><button class="button add-cart"  data-mydata="${e.id}"
//              type="button"">${e.price}</button><button class="button compare" type="button"><i
//                 class="fa fa-exchange"></i></button><button class="button wishlist"
//              type="button"><i class="fa fa-heart-o"></i></button></div>
//     </div>
//  </div>`
// })

// featured.innerHTML = htmlFeatured


// let listButton = document.querySelectorAll(".button.add-cart")

// listButton.forEach(e=>{
//     e.onclick = ()=>{
//         // localStorage.setItem('kho', [e.getAttribute("data-mydata")]);
//         if (localStorage.getItem('kho') === null) {
//             // Nếu không tồn tại, tạo một mảng rỗng và lưu vào localStorage
//             const emptyArray = [];
//             localStorage.setItem('kho', JSON.stringify(emptyArray));
//           }
//           const khoData = JSON.parse(localStorage.getItem('kho'));
//           khoData.push(Number(e.getAttribute("data-mydata")))
//           localStorage.setItem('kho', JSON.stringify(khoData));
//           console.log(khoData);
//     }
// })

