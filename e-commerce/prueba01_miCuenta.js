import page from './pageModel';

fixture('Pruebas del módulo mi cuenta')
    .page('http://automationpractice.com/index.php');

test('Crear una cuenta nueva', async t => {});
test('Log in en mi cuenta creada', async t => {});
test('Log out de mi cuenta', async t => {});
test('Crear cuenta con un correo ya existente', async t => {});
test('Validar recuperar un pasword válido', async t => {});
test('Validar recuperar un password inválido', async t => {});
test('Cambiar información de la cuenta', async t => {});