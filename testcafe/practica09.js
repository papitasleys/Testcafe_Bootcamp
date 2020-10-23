/*
    practica 9
*/

import page from './pageModel';

fixture('Práctica 9 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar pushar teclas', async (t) => {
    await t
        .click(page.linkKeyPress);
        
    await t
        .pressKey('backspace')
        .wait(500)

    await t
        .pressKey('c')
        .wait(500)
        .expect(page.textKeyPressResult.innerText).contains('You entered: C')
        .expect(page.textKeyPressResult.innerText).notContains('You entered: backspace')

        .pressKey('tab')
        .wait(500)
        .expect(page.textKeyPressResult.innerText).contains('You entered: TAB')

        .pressKey('ENTER')
        .wait(500)
        .expect(page.textKeyPressResult.innerText).contains('You entered: ENTER')

        .pressKey('esc')
        .wait(500)
        .expect(page.textKeyPressResult.innerText).contains('You entered: ESC')

        .pressKey('capslock')
        .wait(500)
        .expect(page.textKeyPressResult.innerText).contains('You entered: CAPS_LOCK')

        .pressKey('space')
        .wait(500)
        .expect(page.textKeyPressResult.innerText).contains('You entered: SPACE')

        .pressKey('shift')
        .wait(500)
        .expect(page.textKeyPressResult.innerText).contains('You entered: SHIFT')

        .pressKey('up')
        .wait(500)
        .expect(page.textKeyPressResult.innerText).contains('You entered: UP') 
});