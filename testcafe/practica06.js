/*
    practica 5
*/
import { selector } from "testcafe";
import page from "./pageModel";

fixture('Práctica 6 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('probaras boton agregar', async t => {
    await t
        .click(page.linkRemoveElements)
    
    await t
        .expect(page.baseButtonRemove.nth(0).visible).notOk()
        .click(page.buttonAddElement)
        .expect(page.baseButtonRemove.nth(0).visible).ok()
});

test('probaras boton romover', async t => {
    await t
        .click(page.linkRemoveElements)
    
    await t
        .click(page.buttonAddElement, {speed : 0.5})
    
    await t
        .click(page.baseButtonRemove.nth(0), {speed : 0.5})
    
    await t
        .expect(page.baseButtonRemove.nth(0).visible).notOk()
});


test('agregar varios', async t => {
    await t
        .click(page.linkRemoveElements)
    
    for (let index = 0; index < 5; index++) {
        await t
            .click(page.buttonAddElement, {speed : 0.5})        
    }

    await t /* button with index 4 is present */
        .expect(page.baseButtonRemove.nth(4).visible).ok()
});
