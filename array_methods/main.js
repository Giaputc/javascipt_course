const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Duyệt và in ra phần tử mảng
// numbers.forEach((num) => {
//     console.log(num);
// });

// map:biển đổi mảng
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// const strings = numbers.map(num => String(num));
// console.log(typeof strings[0])
// console.log(strings)

//ứng dụng map 
// const users = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 15 }
// ];
// const name=users.map((user)=>user.name)
// console.log(name)

// const formatted = users.map((user) => ({
//     fullName: user.name,
//     age: user.age,
//     isAdult: user.age >= 18
// }));
// console.log(formatted);

//filter:lọc mảng
// const evenNumbers = numbers.filter(num => num >5 && num<7);
// console.log(evenNumbers);
 //ứng dụng 
// const users = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Bob', age: 18 },
//     { name: 'Alice', age: 10 }
// ];
// const adults = users.filter(user => user.age >= 18);
// console.log(adults);

//kết hợp filter và map
// const products = [
//     { id: 1, name: 'Laptop', price: 15000, category: 'electronics' },
//     { id: 2, name: 'Shirt', price: 500, category: 'clothing' },
//     { id: 3, name: 'Mouse', price: 300, category: 'electronics' },
//     { id: 4, name: 'Jeans', price: 800, category: 'clothing' }
// ];

// const electronicNames = products
//     .filter((product) => product.category === 'electronics')
//     .map((product) => product.name);

// console.log(electronicNames);


//reduce():TÍNH TOÁN TÍCH LŨY

// const money = [10, 20, 30, 40, 50];
// const total = money.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);


// const result = numbers.reduce((accumulator, currentValue, index, array) => {
//     console.log(`Lần ${index + 1}:`);
//     console.log(`  accumulator: ${accumulator}`);
//     console.log(`  currentValue: ${currentValue}`);
//     console.log(`  index: ${index}`);
//     console.log(`  array: [${array}]`);
//     console.log(`  Kết quả: ${accumulator} + ${currentValue} = ${accumulator + currentValue}`);
//     console.log('---');
//     return accumulator + currentValue;
// }, 0);
//ứng dụng:tính tiền theo tháng cao nhất,tháng nào trên trung bình 
//dùng trong html
//note:ví nó là tính tích lũy,nên trong html bạn cần điều kiện phàn tử cuối cùng 
// const products = [
//     { name: 'Laptop', price: 15000000 },
//     { name: 'Phone', price: 8000000 },
//     { name: 'Tablet', price: 5000000 }
// ];

// const html = products.reduce((acc, current, index, array) => {
//     const isLast = index === array.length - 1;
//     const className = isLast ? 'product last' : 'product';
//     acc += `
//         <div class="${className}">
//             <h3>${index + 1}. ${current.name}</h3>
//             <p>Giá: ${current.price.toLocaleString()} VND</p>
//         </div>
//     `;
    
//     return acc;
// }, '<div class="product-list">');

// const finalHTML = html + '</div>';
// document.getElementById("demo").innerHTML =finalHTML




//find() trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Nếu không tìm thấy, trả về undefined.\
// const found = numbers.find(num => num > 5);
// console.log(found);
//ứng dụng:giống filter nhưng chỉ khác nó sẽ kiếm phần tử đầu tiên 


//findIndex() trả về vị trí (index) của phần tử đầu tiên trong mảng thỏa mãn điều kiện. Nếu không tìm thấy, trả về -1.
// const index = numbers.findIndex(num => num > 5);
// console.log(index);

//ứng dụng:sửa,xóa phần tử mà muốn xóa


//some() kiểm tra có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay không. Trả về true hoặc false
// const kiem_tra=numbers.some(item=>item===11)
// console.log(kiem_tra)
//ứng dụng:kiểm tra phần tử  này có tồn tại trong mảng không

//every() kiểm tra TẤT CẢ các phần tử trong mảng có thỏa mãn điều kiện hay không. Trả về true nếu TẤT CẢ đều thỏa mãn, ngược lại trả về false

// const allPositive_true = numbers.every(num => num > 0);
// const allPositive_false = numbers.every(num => num < 0);
// console.log(allPositive_true);
// console.log(allPositive_false); 


//sort() sắp xếp các phần tử trong mảng theo thứ tự (tăng dần hoặc giảm dần) và thay đổi mảng gốc
//note:sort sẽ chuyển mảng sang string,để so sánh theo bảng mã unicode

//console.log("100000" < "21");  // true  (vì '1' < '2')

// ✅ Sắp xếp số tăng dần
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 7, 8, 10]

// ✅ Sắp xếp số giảm dần
numbers.sort((a, b) => b - a);
console.log(numbers); // [10, 8, 7, 5, 1]

// ✅ Sắp xếp string
const names = ['John', 'Alice', 'Bob', 'Charlie'];
names.sort();
console.log(names); 

// ✅ Sắp xếp object theo tuổi
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Alice', age: 28 }
];

// Tăng dần theo tuổi
users.sort((a, b) => a.age - b.age);
console.log(users);

// Giảm dần theo tuổi
users.sort((a, b) => b.age - a.age);
console.log(users);

// ✅ Sắp xếp theo tên
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);
