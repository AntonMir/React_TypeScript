// // Название класса всегда с большой буквы
// class Animal {
//     static type = 'ANIMAL'

//     // инициализируем начальные значения класса в специальном методе
//     constructor(options) {
//         // options - объект параметров, который будет передаваться в класс наследования
//         // const animal = new Animal(...params)

//         //  инициализируем параметры класса через явное указание на этот класс через this
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log(`I am ${this.name}`)
//     }
// }

// // const animal = new Animal({
// //     name: 'Fox',
// //     age: 5,
// //     hasTail: true,
// // })

// // animal.voice()

// // наследуемся
// class Cat extends Animal {
//     // статическая переменная, которая доступна только у конкретного класса
//     static type = 'CAT'

//     constructor(newOptions) {
//         // вызывает родительский конструктор, без которого выйдет ошибка и передаем туда параметры как в родительском конструкторе
//         super(newOptions)

//         this.color = newOptions.color
//     }

//     voice() {
//         // super позволяет вызвать так же и родительский метод
//         // прописываем без вызова
//         super.voice()
//         console.log('Im a cat')
//     }
// }

// const cat = new Cat({
//     name: 'Felix',
//     age: 2,
//     hasTail: true,
//     color: 'black', // если не указать ее в конструкторе, то она не присвоится
// })

// cat.voice()

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.backgroundColor = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue',
})

class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}

const circle1 = new Circle({
    selector: '#circle1',
    size: 100,
    color: 'yellow',
})
