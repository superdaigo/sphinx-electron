var packager = require('electron-packager');
var config = require('./package.json');
var fs = require("fs");
var version_string = {
  CompanyName: config.company,
  FileDescription: config.description,
  OriginalFilename: config.name,
  FileVersion: config.version,
  ProductVersion: config.version,
  ProductName: config.name,
  InternalName: config.name
}

var packager_config = {
  dir: './',
  out: '../build/app',
  name: config.name,
  platform: config.platform,
  arch: config.arch,
  version: config.electron_version,
  'app-bundle-id': config.osx.app_bundle_id,
  'app-version': config.version,
  'helper-bundle-id': config.osx.helper_bundle_id,
  overwrite: true,
  asar: true,
  prune: true,
  ignore: "node_modules",
  'version-string': version_string
}

if(config.osx.app_icns) {
  packager_config.icon = config.osx.app_icns;
}

function done (err, appPath) {
  function callback_realpath (err, real_path) {
    if (err) {console.log(err);}
    else {console.log(real_path);}
  }
  function print_real_path (path) {
    fs.realpath(path, callback_realpath);
  }
  appPath.forEach(print_real_path);
  console.log("Done");
}

packager(packager_config, done);
