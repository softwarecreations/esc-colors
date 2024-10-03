'use strict';

export const colors = {
  red    : s => `\u001b[31m${s}\u001b[0m`,
  green  : s => `\u001b[32m${s}\u001b[0m`,
  yellow : s => `\u001b[33m${s}\u001b[0m`,
  blue   : s => `\u001b[34m${s}\u001b[0m`,
  magenta: s => `\u001b[35m${s}\u001b[0m`,
  cyan   : s => `\u001b[36m${s}\u001b[0m`,
  white  : s => `\u001b[37m${s}\u001b[0m`,
  black  : s => `\u001b[30m${s}\u001b[0m`,
  gray   : s => `\u001b[90m${s}\u001b[0m`,
};

export default colors;
