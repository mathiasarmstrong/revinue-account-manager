
// Loader configurations
var ngAnnotateLoader = { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate' };
var eslintLoader = { test: /\.js$/, exclude: /\.js$/, loader: 'eslint-loader' };
var importglobLoader = { test: /\.js$/, loader: 'import-glob'};

// Transpile preloaders
var babelLoader = { test: /\.js$/, exclude: /node_modules/, loader: 'babel' };
var babelConfig = { presets:['es2015'] };

var typeScriptLoader = { test: /\.ts$/, loader: 'awesome-typescript-loader' };


// This is the config for the coverage reporter
var ispartaLoader = { test: /\.js$/, exclude: /\.spec\.js$/, loader: 'isparta' };
var ispartaConfig = { embedSource:true, noAutoWrap:true};
/**
 * Basic setup for all webpack Configs
 */
function WebpackConfig(){
  this.module = {
    loaders:[ ngAnnotateLoader ],
    preLoaders:[ babelLoader ]
  }
  this.resolveLoader = {
    modulesDirectories: ["web_loaders", "web_modules", "node_loaders", "node_modules", 'ampush_modules']
  }
  this.babel = babelConfig;
  this.resolve = { extensions: ['', '.ts', '.webpack.js', '.web.js', '.js'] }
}

/**
 * Webpack Config for gulp Build
 * @type {WebPackConfig}
 */
var build = new WebpackConfig();
build.module.preLoaders.push(eslintLoader, typeScriptLoader);
build.output = { filename: '[name]/[name].module.js' };

/**
 * Webpack Config for test
 * @type {WebpackConfig}
 */
var test = new WebpackConfig();
test.module.preLoaders.push(ispartaLoader, eslintLoader, importglobLoader, typeScriptLoader);
test.ipsarta = ispartaConfig;

module.exports = { test:test, build:build };
