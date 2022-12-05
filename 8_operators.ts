// Объявим какой-то тип данных
type Person = {
    name: string
    age: number
}

// унаследуем ключи через перечисление keyof
type PersonKeys = keyof Person // 'name', 'age'

let key: PersonKeys = 'name' // доступные значения только name и age

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// наследуем тип данных от юзера за исключением _id и createdAt
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // name и email

// наследуем тип данных от юзера, но только name и email
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // name и email

let u1: UserKeysNoMeta1 = 'name' // только name и email
// u1 = '_id' ERROR
