// let cart = document.querySelector('.shop-table tbody')
// import { data } from './data.js'

// if (localStorage.getItem('kho') === null) {
//     // Nếu không tồn tại, tạo một mảng rỗng và lưu vào localStorage
//     const emptyArray = [];
//     localStorage.setItem('kho', JSON.stringify(emptyArray));
// }


// const khoData = JSON.parse(localStorage.getItem('kho'));
// let sanPhamDaTimThay = data.filter(product => khoData.includes(product.id));
// let htmlCart = ""
// sanPhamDaTimThay.forEach(e=>{
//     htmlCart += `<tr>
//     <td>
//       <img src="${e.thum}" alt="">
//     </td>
//     <td>
//       <div class="shop-details">
//         <div class="productname">
//         ${e.name}
//         </div>
//         <p>
//           <img alt="" src="images/tải xuống.jpg">
//           <a class="review_num" href="#">
//             200 lượt đánh giá
//           </a>
//         </p>
//         <div class="color-choser">
//           <span class="text">
//             Màu sắc : 
//           </span>
//           <ul>
//             <li>
//               <a class="black-bg " href="#">
//                 black
//               </a>
//             </li>
//             <li>
//               <a class="red-bg" href="#">
//                 light red
//               </a>
//             </li>
//           </ul>
//         </div>
//         <p>
//           Mã sản phẩm : 
//           <strong class="pcode">
//             Understand
//           </strong>
//         </p>
//       </div>
//     </td>
//     <td>
//       <h5>
//       ${e.price}
//       </h5>
//     </td>
//     <td>
//       <select name="">
//         <option selected value="1">
//           1
//         </option>
//         <option value="1">
//           2
//         </option>
//         <option value="1">
//           3
//         </option>
//       </select>
//     </td>
//     <td>
//       <h5>
//         <strong class="red">
//           200.000
//         </strong>
//       </h5>
//     </td>
//     <td>
//       <a href="#">
//         <img src="images/remove.png" alt="">
//       </a>
//     </td>
//   </tr>`
// })

// cart.innerHTML = htmlCart
// console.log(sanPhamDaTimThay);