// // class Typescript {
// //     version: string

// //     protected
// //     public
// //     private

// //     constructor(version: string) {
// //         this.version = version
// //     }

// //     info(name: string) {
// //         return `[${name}]: Typescript version is ${this.version}`
// //     }
// // }

// class Animal {
//     // доступно везде, но только для чтения
//     readonly age: number = 7

//     // protected - означает, что данное поле может быть доступно в родительском классе и
//     // во всех наследников класса, но не дуступно в экземплярах классов
//     protected voice: string = ''

//     // стандартное состояние, доступно для чтения и изменения всюду
//     public color: string = 'black'

//     // доступны для изменения только в родительском классе(там где был объявлен)
//     private go() {
//         console.log('Go')
//     }
// }

// class Cat extends Animal {
//     public setVoice(voice: string) {
//         this.voice = voice
//     }
// }

// const cat = new Cat()

// // protected не дает прочесть или изменить из экземпляра
// cat.voice // ERROR

// // private не дает прочесть или изменить везде, кроме класса родителя
// cat.go() // ERROR

// cat.color // все в порядке

// abstract class Component {
//     abstract render(): void
//     abstract info(): string
// }

// class AppComponent extends Component {
//     render(): void {
//         console.log('Render')
//     }

//     info(): string {
//         return 'Info'
//     }
// }
