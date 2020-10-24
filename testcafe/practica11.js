import page from './pageModel';

fixture('Práctica 11 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar eslaider', async (t) => {
    await t
        .click(page.linkSlider)

    await t
        .click(page.sliderMain)
        .typeText(page.sliderMain, "3.5",{speed:0.1})
        .expect(page.sliderMain.value).eql('3.5')
        
});

//hacer prueba presionando izq y der