// Создадим интерфейс для прямоугольника
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

// ? - объявление значения для переменной не является обязательной задачей
// readonly - модификатор, убирает возможность изменения данной переменной

// Создадим объект с типом нашего интерфейса
const rect1: Rect = {
    id: '123',
    size: {
        width: 10,
        height: 10,
    },
}
// значение color не обязательно

// rect1.id = '232'
// id параметр неизменяемый

rect1.size = {
    width: 10,
    height: 15,
}
// size можно менять как угодно

// интерфейс, с функцией подсчета площади
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 15,
        height: 15,
    },
    getArea(): number {
        return this.size.width * this.size.height
    },
}

rect5.getArea()

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '20px',
}
