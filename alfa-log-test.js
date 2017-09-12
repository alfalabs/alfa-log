var log = require('./index')('myModule');

//if (bright) {log.l('bright option selected\n');}

console.log('-');
log.t('timer1');

log.l('normal');
 log.L('normal Bright');
 log.e('error');
 log.E('error Bright');
 log.ERR('error Reverse');
 log.w('warn');
 log.W('warn Bright');
 log.i('info');
 log.I('info Bright');

log.g('green');
log.G('green Bright');
log.m('magenta');
log.M('magenta Bright');
log.c('cyan');
log.C('cyan Bright');

log.te('timer1');

console.log('-');
log.l('normal text', {a:1, b:2, c:'test'});


console.log('- - -');

log = require('./index')('myBrightModule',null,null,{bright:true});

console.log('bright option');

log.l('normal');
log.L('normal Bright');
log.e('error');
log.E('error Bright');
log.ERR('error Reverse');
log.w('warn');
log.W('warn Bright');
log.i('info');
log.I('info Bright');

log.g('green');
log.G('green Bright');
log.m('magenta');
log.M('magenta Bright');
log.c('cyan');
log.C('cyan Bright');