const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
entry: './src/index.html',
mode: 'development',
module: {
  rules: [
    {
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
    /* Embed files. */
    { 
      test: /\.(html|css)$/, 
      loader: 'raw-loader',
      exclude: /\.async\.(html|css)$/
    },
    /* Async loading. */
    {
      test: /\.async\.(html|css)$/, 
      loaders: ['file?name=[name].[hash].[ext]', 'extract']
    }
  ]
},
output: {
  filename: 'main.js'
},
watchOptions: {
  aggregateTimeout: 500,
  poll: 500
},
plugins: [
  new BrowserSyncPlugin(
    // BrowserSync options
    {
      // browse to http://localhost:3000/ during development
      host: 'localhost',
      port: 3000,
      // reload: true,
      // files: ['./src/app/*.html', './src/app/*.css'],
      // open: false
      

       // works but no proxy 
       // open: false,
       // server: {baseDir: ['dist']}


      // proxy the Webpack Dev Server endpoint
      // (which should be serving on http://localhost:3100/)
      // through BrowserSync
      proxy: '192.168.33.17:3000',
      open: false,//true leads to bs error headless environment, do not move
      // reload: false,
      files: ['./src/app/**/*.css', './src/app/**/*.html', './src/app/index.html'],
    

    },
    // plugin options
    {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
        reload: false,
      
    }
  )
 ]
}



