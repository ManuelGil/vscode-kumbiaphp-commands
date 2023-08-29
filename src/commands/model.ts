import save from './functions';

const content = `<?php

/**
 * Modelo {class}
 *
 * @category App
 * @package Models
 */
class {class} extends ActiveRecord
{
    public function index()
    {
        //
    }
}

`;

let value: string = '';
let filename: string = '';
let body: string = '';

const model = async (vscode: any, fs: any, path: any) => {
  value = await vscode.window.showInputBox({
    prompt: 'Nombre de la clase',
    placeHolder: 'Nombre de la clase',
    validateInput: (text: string) => {
      if (!/^[A-Z][a-zA-Z]+$/.test(text)) {
        return '¡Formato inválido! El nombre de la clase debe empezar con mayúscula y no contiene carácteres especiales';
      }
    },
  });

  filename = '/default/app/models/' + value.toLowerCase() + '.php';

  body = content.replace(/\{class\}/g, value);

  save(vscode, fs, path, filename, body);
};

export default model;
