# babel-plugin-x-import
Modules are loaded as needed(for [xbrick ui](https://github.com/iFDit/xbrick))

# Install
`````shell
npm install --save-dev babel-plugin-x-import
`````
# Usage
`````js
// in webpack.config.js
// ...other config
{
  loader: 'babel-loader',
  options: {
    plugins: ['babel-plugin-x-import']
  }
}
`````
# Example
`````jsx
// before
import { Alert, AlertStyles } from 'xbrick'
↓↓↓↓↓
// after
import { Alert } from 'xbrick/lib/alert/Alert'
import { AlertStyles } from 'xbrick/lib/alert/Alert'
`````
