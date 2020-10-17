/*
    practica numero 2
*/

import { selector } from "testcafe";
import page from "./pageModel";

fixture("Práctica 2 con testcafe")
    .page("https://the-internet.herokuapp.com/");

test("Probar dar click en el enlace", async (t) => {
    await t
        .click(page.link2)

    await t
    // .expect(page.text21.innerText).contains('A/B Test Control');
    if (page.text21.innerText == 'A/B Test Control' || 'A/B Test Variation' || 'A/B Test Variation 1') {
        console.log('test passed')
        console.log(page.text21.innerText)
    } else {
        console.log('test failed')
    }
});

