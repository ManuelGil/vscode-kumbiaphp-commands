import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

import controller from './commands/controller';
import model from './commands/model';

export function activate(context: vscode.ExtensionContext) {
  const commandFileController = vscode.commands.registerCommand('kumbiaphp.file.controller', () => {
    controller(vscode, fs, path);
  });
  const commandFileModel = vscode.commands.registerCommand('kumbiaphp.file.model', () => {
    model(vscode, fs, path);
  });

  context.subscriptions.push(commandFileController);
  context.subscriptions.push(commandFileModel);
}

export function deactivate() {}
