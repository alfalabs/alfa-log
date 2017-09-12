var log = require('./index')('myModule');

console.log('-----------------------------');
log.t('timer1');

log.l('log.l','normal');
log.L('log.L','normal Bright');
log.e('log.e','error');
log.E('log.E','error Bright');
log.ERR('log.ERR','error Reverse');
log.w('log.w','warn');
log.W('log.W','warn Bright');
log.i('log.i','info');
log.I('log.I','info Bright');

log.g('log.g','green');
log.G('log.G','green Bright');
log.m('log.m','magenta');
log.M('log.M','magenta Bright');
log.c('log.c','cyan');
log.C('log.C','cyan Bright');

log.te('timer1');

console.log('------------------------------');
