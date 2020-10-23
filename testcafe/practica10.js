/*
    practica 10
*/

import page from './pageModel';

fixture('Práctica 9 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar click secundario', async (t) => {
    await t
        .click(page.linkContextMenu)

    await t
        .setNativeDialogHandler()
        .rightClick(page.hotspotPopo)
        
});