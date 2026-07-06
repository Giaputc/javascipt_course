import {Dog} from './class.js'
// const dog_mickey=new Dog({
//     name:"mickey",
//     age:18,
//     gender:`Đực`
// })
// console.log(`${dog_mickey.age}`)



const apiData = {
    name: "  MiCkEy  ",
    age: "18",
    weight: "25.567",
    isActive: "true",
    gender: "Đực",
    tricks: "lắc tay, nằm xuống, bắt tay",
    birthDate: "2024-01-15",
    ownerEmail: "  nguyen@email.com  ",
    breed: "Golden Retriever",
    owner: "Nguyễn Văn A"
}

console.log('📥 API Data:', apiData)
const dog_mickey = new Dog(apiData)
export {
    dog_mickey}