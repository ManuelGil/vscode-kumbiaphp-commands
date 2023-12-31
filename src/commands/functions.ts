const save = (vscode: any, fs: any, path: any, filename: string, content: string, show: boolean = true) => {
  let folder;

  if (vscode.workspace.workspaceFolders) {
    folder = vscode.workspace.workspaceFolders[0].uri.fsPath;
  } else {
    vscode.window.showErrorMessage('¡No se ha logrado crear el archivo!');
    return;
  }

  const pathfile = path.join(folder, filename);

  if (!fs.existsSync(path.dirname(pathfile))) {
    fs.mkdirSync(path.dirname(pathfile));
  }

  fs.access(pathfile, (err: any) => {
    if (err) {
      fs.open(pathfile, 'w+', (err: any, fd: any) => {
        if (err) {
          throw err;
        }

        fs.writeFileSync(fd, content);

        if (show === true) {
          const openPath = vscode.Uri.file(pathfile);
          vscode.workspace.openTextDocument(openPath).then((filename: string) => {
            vscode.window.showTextDocument(filename);
          });
        }
      });

      vscode.window.showInformationMessage('¡El archivo fue creado con éxito!');
    } else {
      vscode.window.showWarningMessage('¡El archivo existe!');
    }
  });
};

export default save;
