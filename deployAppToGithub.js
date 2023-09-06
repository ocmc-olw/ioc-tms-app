/**
 * Created by Michael Colburn, Dec 2016
 *
 * Run this from the command line,
 *
 * node deployAppToGithub
 *
 * Be sure that you update the version number first in package.json
 *
 * This script will create a zip of the contents of the ioc-tms-website.v2023.06.02.01 file,
 * place it in the deploy directory,
 * and push it to github.
 *
 * If the deploy directory does not exist, it will clone the current
 * ioc-tms-app from github and put that in a new deploy directory.
 */
require('shelljs/global'); // see http://documentup.com/shelljs/shelljs
var pjson = require('./package.json');
console.log(pjson.version);

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

if (test('-d', './deploy')) {
  // we are happy
} else {
  if (exec('git clone https://github.com/OCMC-Translation-Projects/ioc-tms-website deploy').code === 0) {
    echo('cloned ioc-liturgical-tms-website from github');
  } else {
    echo('Error: Git clone failed');
    exit(1);
  }
}
ls;
exec(
    'cd ioc-tms-website.v2023.06.02.01' +
    '; zip -r ../deploy/ioc-tms-website.v' + pjson.version + '.zip *; cd ..'
        + '; cd deploy'
    + '; ls'
    + '; git add ' + 'ioc-tms-website.v' + pjson.version + '.zip'
    + '; git commit -m ' + '"v' + pjson.version + '"'
    + '; git push origin'
    , function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});

