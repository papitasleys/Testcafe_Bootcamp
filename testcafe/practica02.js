/*
    practica numero 2
*/

import { assert } from 'console';
import { selector } from 'testcafe';
import page from './pageModel';

fixture('Práctica 2 con testcafe').page('https://the-internet.herokuapp.com/');

test('Probar dar click en el enlace', async (t) => {
    await t.click(page.link2);

    // .expect(page.text21.innerText).contains('A/B Test Control');
    if ((await page.text21.innerText) == 'Other thing') {
        console.log('test passed');
        console.log(await page.text21.innerText);
    } else {
        console.log('test failed');
        await t
            .expect (true).notOK();
    }
})
