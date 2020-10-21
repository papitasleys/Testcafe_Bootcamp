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
        .expect(page.baseRemoveElements.nth(0).visible).notOk()
        .click(page.buttonAddElement)
        .expect(page.baseRemoveElements.nth(0).visible).ok()
});

test('probaras boton romover', async t => {
    await t
        .click(page.linkRemoveElements)
    
    await t
        .click(page.buttonAddElement)
    
    await t
        .click(page.baseRemoveElements.nth(0))
        .expect(page.baseRemoveElements.nth(0).visible).notOk()
});

// tarea hacer mas pruebas
