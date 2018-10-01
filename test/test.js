const assert = require('power-assert');
const rmb = require('../index.js');

describe('rmb', function () {
  it('0.01 to 壹分', function () {
    assert(rmb(0.01) === '壹分');
  });

  it('0.1 to 壹角', function () {
    assert(rmb(0.1) === '壹角');
  });

  it('1.1 to 壹元壹角', function () {
    assert(rmb(1.1) === '壹元壹角');
  });

  it('10.01 to 壹拾元零壹分', function () {
    assert(rmb(10.01) === '壹拾元零壹分');
  });

  it('100.01 to 壹佰元零壹分', function () {
    assert(rmb(100.01) === '壹佰元零壹分');
  });

  it('1001.11 to 壹仟零壹元壹角壹分', function () {
    assert(rmb(1001.11) === '壹仟零壹元壹角壹分');
  });

  it('"abc" to 零元整', function () {
    assert(rmb("abc") === '零元整');
  });

  it('0 to 零元整', function () {
    assert(rmb(0) === '零元整');
  });

  it('1 to 壹元整', function () {
    assert(rmb(1) === '壹元整');
  });

  it('10 to 壹拾元整', function () {
    assert(rmb(10) === '壹拾元整');
  });

  it('210 to 贰佰壹拾元整', function () {
    assert(rmb(210) === '贰佰壹拾元整');
  });

  it('3210 to 叁仟贰佰壹拾元整', function () {
    assert(rmb(3210) === '叁仟贰佰壹拾元整');
  });

  it('43210 to 肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(43210) === '肆万叁仟贰佰壹拾元整');
  });

  it('543210 to 伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(543210) === '伍拾肆万叁仟贰佰壹拾元整');
  });

  it('6543210 to 陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(6543210) === '陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('76543210 to 柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(76543210) === '柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('876543210 to 捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(876543210) === '捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('9876543210 to 玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(9876543210) === '玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('109876543210 to 壹仟零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(109876543210) === '壹仟零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('1009876543210 to 壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(1009876543210) === '壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('4321009876543210 to 肆仟叁佰贰拾壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(4321009876543210) === '肆仟叁佰贰拾壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('54321009876543210 to 伍万肆仟叁佰贰拾壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整', function () {
    assert(rmb(54321009876543210) === '伍万肆仟叁佰贰拾壹万零玖拾捌亿柒仟陆佰伍拾肆万叁仟贰佰壹拾元整');
  });

  it('100 to 壹佰元整', function () {
    assert(rmb(100) === '壹佰元整');
  });

  it('1000 to 壹仟元整', function () {
    assert(rmb(1000) === '壹仟元整');
  });

  it('10000 to 壹万元整', function () {
    assert(rmb(10000) === '壹万元整');
  });

  it('100000 to 壹拾万元整', function () {
    assert(rmb(100000) === '壹拾万元整');
  });

  it('1000000 to 壹佰万元整', function () {
    assert(rmb(1000000) === '壹佰万元整');
  });

  it('10000000 to 壹仟万元整', function () {
    assert(rmb(10000000) === '壹仟万元整');
  });

  it('100000000 to 壹亿元整', function () {
    assert(rmb(100000000) === '壹亿元整');
  });

  it('1000000000 to 壹拾亿元整', function () {
    assert(rmb(1000000000) === '壹拾亿元整');
  });

  it('10000000000 to 壹佰亿元整', function () {
    assert(rmb(10000000000) === '壹佰亿元整');
  });

  it('100000000000 to 壹仟亿元整', function () {
    assert(rmb(100000000000) === '壹仟亿元整');
  });

  it('1000000000000 to 壹万亿元整', function () {
    assert(rmb(1000000000000) === '壹万亿元整');
  });

  it('10000000000000 to 壹拾万亿元整', function () {
    assert(rmb(10000000000000) === '壹拾万亿元整');
  });

  it('100000000000000 to 壹佰万亿元整', function () {
    assert(rmb(100000000000000) === '壹佰万亿元整');
  });

  it('1000000000000000 to 壹仟万亿元整', function () {
    assert(rmb(1000000000000000) === '壹仟万亿元整');
  });

  it('10000000000000000 to 壹万万亿元整', function () {
    assert(rmb(10000000000000000) === '壹万万亿元整');
  });

  it('100000000000000000 to 壹零万万亿元整', function () {
    assert(rmb(100000000000000000) === '壹零万万亿元整');
  });

  it('1000000000000000000 to 壹零零万万亿元整', function () {
    assert(rmb(1000000000000000000) === '壹零零万万亿元整');
  });

  it('10000000000000000000 to 壹零零零万万亿元整', function () {
    assert(rmb(10000000000000000000) === '壹零零零万万亿元整');
  });

  it('10000000010000000 to 壹万万亿壹仟万元整', function () {
    assert(rmb(10000000010000000) === '壹万万亿壹仟万元整');
  });

  it('10000000001000000 to 壹万万亿零壹佰万元整', function () {
    assert(rmb(10000000001000000) === '壹万万亿零壹佰万元整');
  });

  it('10100000001000000 to 壹万零壹佰万亿零壹佰万元整', function () {
    assert(rmb(10100000001000000) === '壹万零壹佰万亿零壹佰万元整');
  });

  it('10100100001000000 to 壹万零壹佰万壹仟亿零壹佰万元整', function () {
    assert(rmb(10100100001000000) === '壹万零壹佰万壹仟亿零壹佰万元整');
  });

  it('10100010001000000 to 壹万零壹佰万零壹佰亿零壹佰万元整', function () {
    assert(rmb(10100010001000000) === '壹万零壹佰万零壹佰亿零壹佰万元整');
  });

  it('10100010001001000 to 壹万零壹佰万零壹佰亿零壹佰万壹仟元整', function () {
    assert(rmb(10100010001001000) === '壹万零壹佰万零壹佰亿零壹佰万壹仟元整');
  });

  it('10100010001000100 to 壹万零壹佰万零壹佰亿零壹佰万壹零佰元整', function () {
    assert(rmb(10100010001000100) === '壹万零壹佰万零壹佰亿零壹佰万零壹佰元整');
  });
});
