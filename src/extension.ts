// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { window, ExtensionContext } from 'vscode';

import * as quotes from './data/tips.json' ;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(_: ExtensionContext) {

	const randomIndex = Math.floor(Math.random() * 70)

	window.showInformationMessage(`${quotes[randomIndex].title}! ${quotes[randomIndex].body}`);

}

// this method is called when your extension is deactivated
export function deactivate() {}
