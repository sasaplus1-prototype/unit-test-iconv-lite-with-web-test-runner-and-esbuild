import { assert } from '@esm-bundle/chai';
import { convertToShiftJis } from './index';

it('convert to Shift_JIS', function() {
  const text = convertToShiftJis('あいうえお');

  assert.deepStrictEqual(text, new Uint8Array([
    0x82, 0xa0,
    0x82, 0xa2,
    0x82, 0xa4,
    0x82, 0xa6,
    0x82, 0xa8,
  ]));
});
