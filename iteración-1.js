// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const btnToClick$$ = document.querySelector('#btnToClick');

btnToClick$$.addEventListener('click', function(event) {
    console.log(event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus$$ = document.querySelector('.focus');
focus$$.addEventListener('focus', function() {
    console.log(focus$$.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el 
// valor del input.

const value$$ = document.querySelector('.value');
value$$.addEventListener('input', function() {
    console.log(value$$.value);
})