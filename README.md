# esc-colors

Lightweight (446 bytes) alternative to colors.

## Project goals

* No dependencies
* Small, simple, easy to audit, yourself
* Works on Linux or Mac (ANSI terminals)
* No nonsense
* Dependable, there won't be any radical updates in future.

If I want to add features I'll make a new package and will rather mention it in this readme than change this package.

## Installation

1. `npm install esc-colors`

## Example

```JavaScript
import colors from 'esc-colors';

console.log(colors.green('Hello world'));

Object.entries(colors).forEach( ([ colorName, colorF ]) => console.log(colorF(colorName)) );
```
![image](https://github.com/user-attachments/assets/3b13c0e8-eee0-4e23-be84-546f8bf77b81)

## Notes

Have fun!

### Say thanks

Star the repo
https://github.com/softwarecreations/esc-colors

### PR's or issues

Welcome

### License

MIT
