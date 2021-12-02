# Check Coverage README
This is an incredibly basic extension to find the related test coverage file of the currently opened file in VS Code.
This extension currently works off the assumption that your project structure is as follows: <br>
 --> Project root <br>
 ----> coverage <br>
 ----> src

# Install via VSIX
First of all, ensure you have Node v14 or higher.


  - Clone the repo
  - Install vsce globally with `npm install -g vsce`
  - Run `vsce package`
  - Open VS Code
  - Select the "Extensions" option in the left panel
  - Click the three dots at the top of the Extensions panel
  - Select "Install from VSIX"
  - Select the newly created VSIX file

# Usage
Once you have installed the extension press `command + shift + p` and select Check Coverage

## Release Notes

Initial release to add basic functionality.

### 1.0.0

Initial release of checkcoverage
