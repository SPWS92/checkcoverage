// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');

/**
 * @param {vscode.ExtensionContext} context
 */
const activate = (context) => {
  let disposable = vscode.commands.registerCommand('checkcoverage.checkCoverage', async () => {
    const file = vscode.window.activeTextEditor.document.fileName.replace('src', 'coverage');
    const filePath = `file://${file}.html`;

    checkFileExistence(`${file}.html`) && openFile(filePath);
  });

  context.subscriptions.push(disposable);
}

const checkFileExistence = file => {
  try {
    const exists = fs.existsSync(file);
    if (!exists) {
      vscode.window.showErrorMessage(`Unable to find file: ${file}`);
    }
    return exists;
  }
  catch (err) {
    vscode.window.showErrorMessage(`Unable to find file: ${file}`);
    console.log(`Unable to find ${file}`);
    console.log(err);
  }
}

const openFile = file => {
  try {
    vscode.env.openExternal(file)
  } catch (err) {
    vscode.window.showErrorMessage(`Unable to open file: ${file}`);
    console.log(err);
  }
}

module.exports = {
  activate,
  deactivate: () => {}
}
