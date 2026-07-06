//tính kế thừa
// class Animal{
//     constructor(name,age){
//         this.age=age
//         this.name=name
//     }
//     eat(){
//         console.log(`con ${this.name} đang ăn`)
//     }
//     sleep(){
//         console.log(`con ${this.name} đang ngủ`)
//     }
//     run(){
//         console.log(`con ${this.name} đang chạy`)
//     }
//     old(){
//         console.log(`con này có số tuổi là ${this.age}`)
//     }
//     getInfo() {
//         console.log(`Con này tên là ${this.name}, ${this.age} tuổi`);
//     }
// }
// class Dog extends Animal{
//     constructor(name,age,breed){
//         super(name,age)
//         this.breed=breed
//     }
//         // Ghi đè (Override) phương thức eat của Animal
//     eat(){
//         super.eat()
//         console.log(`Con ${this.name} đang ăn thức ăn cho chó`);
//     }
//     // Thêm phương thức
//     getGender(){
//         if (this.breed === "Đực") {
//             return "Giống đực";
//         } else if (this.breed === "Cái") {
//             return "Giống cái";
//         }
//         return "Không xác định";

//     }
// }


// class Animal {
//     constructor(data){
//         this.name=data.name
//         this.age=data.age
//     }
//      eat(){
//         console.log(`con ${this.name} đang ăn`)
//     }
//     sleep(){
//         console.log(`con ${this.name} đang ngủ`)
//     }
//     run(){
//         console.log(`con ${this.name} đang chạy`)
//     }
//     old(){
//         console.log(`con này có số tuổi là ${this.age}`)
//     }
//     getInfo() {
//         console.log(`Con này tên là ${this.name}, ${this.age} tuổi`);
//     }
// }


// class Dog extends Animal{
//     //ghi đè constructor của cha,nhớ truyền đúng tham số
//     constructor(data){
//         super(data)
//         this.gender=data.gender
//     }
//         // Ghi đè (Override) phương thức eat của Animal
//     eat(){
//         super.eat()
//         console.log(`Con ${this.name} đang ăn thức ăn chó`);
//     }
//     // Thêm phương thức
//     getGender(){
//         if (this.gender === "Đực") {
//             return "Giống đực";
//         } else if (this.gender === "Cái") {
//             return "Giống cái";
//         }
//         return "Không xác định";

//     }
// }


// ===== class.js =====
// ===== class.js =====
import { z } from 'zod'

// Schema đơn giản, ít lỗi
const DogSchema = z.object({
    name: z.string().default('Unknown'),
    age: z.union([
        z.number(),
        z.string().transform(val => parseInt(val) || 0)
    ]).default(0),
    gender: z.string().default('Không xác định'),
    breed: z.string().default('Unknown'),
    weight: z.union([
        z.number(),
        z.string().transform(val => parseFloat(val) || 0)
    ]).default(0),
    isActive: z.union([
        z.boolean(),
        z.string().transform(val => val === 'true' || val === '1' || val === 'on')
    ]).default(true),
    tricks: z.union([
        z.array(z.string()),
        z.string().transform(val => val.split(',').map(s => s.trim()).filter(Boolean))
    ]).default([]),
    birthDate: z.union([
        z.date(),
        z.string().transform(val => {
            const d = new Date(val)
            return isNaN(d.getTime()) ? null : d
        })
    ]).nullable().default(null),
    ownerEmail: z.string().default(''),
    owner: z.string().default('Unknown'),
})

// Class Animal
class Animal {
    constructor(data = {}) {
        this.name = data.name || 'Unknown'
        this.age = data.age || 0
        this.createdAt = new Date()
        this._id = `animal_${Date.now()}`
    }
    
    eat() {
        console.log(`con ${this.name} đang ăn`)
        return this
    }
    
    sleep() {
        console.log(`con ${this.name} đang ngủ`)
        return this
    }
    
    run() {
        console.log(`con ${this.name} đang chạy`)
        return this
    }
    
    old() {
        console.log(`con này có số tuổi là ${this.age}`)
        return this
    }
    
    getInfo() {
        console.log(`Con này tên là ${this.name}, ${this.age} tuổi`)
        return this
    }
}

// Class Dog
class Dog extends Animal {
    constructor(data = {}) {        
        const result = DogSchema.safeParse(data)
        
        if (!result.success) {
            console.error('❌ Validation errors:')
            result.error.issues.forEach(issue => {
                console.error(`  - ${issue.path.join('.')}: ${issue.message}`)
                console.error(`    Value: ${JSON.stringify(data[issue.path[0]])}`)
            })
            
            // Fallback an toàn
            // const safeData = {
            //     name: data.name || 'Unknown',
            //     age: parseInt(data.age) || 0,
            //     gender: data.gender || 'Không xác định',
            //     breed: data.breed || 'Unknown',
            //     weight: parseFloat(data.weight) || 0,
            //     isActive: data.isActive === 'true' || data.isActive === true,
            //     tricks: data.tricks ? data.tricks.split(',').map(s => s.trim()).filter(Boolean) : [],
            //     birthDate: data.birthDate ? new Date(data.birthDate) : null,
            //     ownerEmail: data.ownerEmail ? data.ownerEmail.trim() : '',
            //     owner: data.owner || 'Unknown'
            //}
            
            super({ name: safeData.name, age: safeData.age })
            this.gender = safeData.gender
            this.breed = safeData.breed
            this.weight = safeData.weight
            this.isActive = safeData.isActive
            this.tricks = safeData.tricks
            this.birthDate = safeData.birthDate
            this.ownerEmail = safeData.ownerEmail
            this.owner = safeData.owner
            this._errors = result.error.issues
        } else {
            const parsed = result.data
            super({ name: parsed.name, age: parsed.age })
            this.gender = parsed.gender
            this.breed = parsed.breed
            this.weight = parsed.weight
            this.isActive = parsed.isActive
            this.tricks = parsed.tricks
            this.birthDate = parsed.birthDate
            this.ownerEmail = parsed.ownerEmail
            this.owner = parsed.owner
            this._errors = []
            console.log('✅ Validation passed!')
            console.log(`  - name: ${parsed.name} (${typeof parsed.name})`)
            console.log(`  - age: ${parsed.age} (${typeof parsed.age})`)
            console.log(`  - weight: ${parsed.weight} (${typeof parsed.weight})`)
            console.log(`  - isActive: ${parsed.isActive} (${typeof parsed.isActive})`)
            console.log(`  - gender: ${parsed.gender} (${typeof parsed.gender})`)
            console.log(`  - breed: ${parsed.breed} (${typeof parsed.breed})`)
            console.log(`  - tricks: ${JSON.stringify(parsed.tricks)} (${typeof parsed.tricks})`)
            console.log(`  - birthDate: ${parsed.birthDate} (${parsed.birthDate instanceof Date ? 'Date' : typeof parsed.birthDate})`)
            console.log(`  - ownerEmail: ${parsed.ownerEmail} (${typeof parsed.ownerEmail})`)
            console.log(`  - owner: ${parsed.owner} (${typeof parsed.owner})`)

        }
        
        this.isVaccinated = false
        this.type = 'Dog'
        this._id = `dog_${Date.now()}`
    }
    
    eat() {
        super.eat()
        console.log(`🐕 Con ${this.name} đang ăn thức ăn cho chó`)
        return this
    }
    
    bark() {
        console.log(`🔊 Con ${this.name} sủa: Gâu Gâu!`)
        return this
    }
    
    getGender() {
        const map = {
            'Đực': 'Giống đực 🐕‍🦺',
            'Cái': 'Giống cái 🐕'
        }
        return map[this.gender] || 'Không xác định ❓'
    }
    
    learnTrick(trick) {
        if (trick && typeof trick === 'string') {
            const t = trick.trim()
            if (t.length >= 2) {
                this.tricks.push(t)
                console.log(`✨ ${this.name} đã học: ${t}`)
            }
        }
        return this
    }
    
    hasErrors() {
        return this._errors && this._errors.length > 0
    }
    
    getErrors() {
        return this._errors || []
    }
}

export { Animal, Dog, DogSchema }

