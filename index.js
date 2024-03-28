var execFile = require('child_process').execFile;

module.exports.subnet = function(network, callback) {
  var args = [
    '-ss',
    '-r0',
    '-aqg',
    network
  ];

  execFile('/usr/bin/fping', args, function(err, stdout, stderr) {
    if ( err.code == 1 ) err = null;
    var hosts = stdout.toString().trim().split("\n");
    callback && callback(err, hosts);
  });
}

module.exports.network = exports.subnet;