const isFetching: boolean = false
const isLoading: boolean = true

const int: number = 42
const float: number = 4.25
const num: number = 3e10

const message: string = 'Hello TS'

// arr
const numArr: number[] = [1, 1, 2, 3, 5, 8, 13] // объявление типа данных через обычный конструктор
// generic arr
const numArr2: Array<number> = [1, 2, 3] // объявление типа данных через конструктор дженерика

// Func
function someFunc(value: number) {
    return value
}

// generic Func
function djen<T>(value: T): T {
    return value
}

// djen<string>('str')
// djen<string>(1) ERROR
// djen<number>(1)
// djen<number>('str') ERROR
// djen<boolean>(true)
// djen<boolean>(1) ERROR

function genericGetValue<T>(value: T): T {
    return value
}

console.log(genericGetValue<number>(42)) //42 number
console.log(genericGetValue('Hello World')) // Hello World string
console.log(genericGetValue<number[]>([1, 2, 3])) // [1, 2, 3] number[]

// Tuple
const contact: [number, string] = [1, 'Joni']

// Any
let variable: any = 42
variable = 'str'

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infLoop(): never {
    while (true) {}
}

function recurs(): never {
    return recurs()
}

// Type
type Login = string
const login: Login = 'admin'
// const login2: Login = 2 ERROR

type ID = string | number

const id1: ID = 2
const id2: ID = '32'

// null | undefined
type empty = null | undefined
