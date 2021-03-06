/*!
 * hash160.js - hash160 implementation for bcoin
 * Copyright (c) 2016-2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

const {Hash160} = require('./binding');
const HMAC = require('../hmac');

Hash160.hash = function hash() {
  return new Hash160();
};

Hash160.hmac = function hmac() {
  return new HMAC(Hash160, 64);
};

Hash160.mac = function mac(data, key) {
  return Hash160.hmac().init(key).update(data).final();
};

Hash160.native = 2;
Hash160.id = 'hash160';
Hash160.size = 20;
Hash160.bits = 160;
Hash160.blockSize = 64;
Hash160.zero = Buffer.alloc(20, 0x00);
Hash160.ctx = new Hash160();

module.exports = Hash160;
