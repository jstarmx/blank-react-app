const path = require('path');

const root = path.join(__dirname, '..');

exports.BUILD = path.join(root, 'docs');
exports.IMAGES = path.join(root, 'app', 'images');
exports.SCRIPTS = path.join(root, 'app', 'scripts');
exports.STYLES = path.join(root, 'app', 'styles');
exports.VIEWS = path.join(root, 'app', 'views');
