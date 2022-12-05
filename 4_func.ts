interface IMyPosition {
    x: number
    y: number
}

interface IDefaultPosition extends IMyPosition {
    default: string
}

// Перегрузка
function position(): IMyPosition // если параметры не были переданы, наследуемся от IMyPosition
function position(a: number): IDefaultPosition // с 1 параметром наследуемся от IDefaultPosition
function position(a: number, b: number): IMyPosition // если переданы все параметры, то наследуемся от IMyPosition

// Параметры данной функции не обязательны
function position(a?: number, b?: number) {
    if (!a && !b) {
        // если параметры не были переданы
        return { x: undefined, y: undefined }
    }

    if (a && !b) {
        // если передан епрвый параметр
        return { x: a, y: undefined, default: a.toString() }
    }

    // если оба переданы
    return { x: a, y: b }
}
