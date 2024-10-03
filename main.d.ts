declare module 'esc-colors' {
  type ColorFunction = (s: string) => string;

  const colors: {
    red    : ColorFunction;
    green  : ColorFunction;
    yellow : ColorFunction;
    blue   : ColorFunction;
    magenta: ColorFunction;
    cyan   : ColorFunction;
    white  : ColorFunction;
    black  : ColorFunction;
    gray   : ColorFunction;
  };

  export default colors;
}
