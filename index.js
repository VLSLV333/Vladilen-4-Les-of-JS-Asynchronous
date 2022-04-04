// console.log("Start");

// console.log("Start 2");



// function timeout2sec () {
//     console.log ("timeout2sec");
// }


// window.setTimeout( function () {
//     console.log("Inside timeout, after 5 seconds");
// }, 5000)


// setTimeout( timeout2sec, 2000)



console.log("End");


console.log("Start")

setTimeout(function() {
    console.log("Inside settimeout")
}, 0)

console.log("End")
console.log("End")

//                                                            Асинхронність - весь код написаний нами попає в стек, який має бути виконаний строка JS за строкою, поки весь синхронний код не буде відображено, але наприклад функція сет таймаут (не рідна функція JS її нам надає браузер АПІ), переводить записану в ній функцію в веб апі, де ця функція буде виконана з відповідно вказаною затримкою, після цього вона потрапить в CallBack Queue. Event loop чекає, поки стек буде повністю пустий і потім бере функції, які чекають в CallBack Queue і переводить їх в стек, так Event Loop буде переводити функції, поки CallBack Queue не буде повністю пустим.