# Alter.js

Alter.js is a lightweight JavaScript library for immediate manipulation of CSS styles and animations on one or multiple elements. It provides a simple and intuitive way to dynamically modify the visual appearance and behavior of elements on your web page ( [ALTER NPMJS](https://www.npmjs.com/package/@kushii/alter.js) ).

## Features

- Apply custom CSS styles to elements programmatically
- Initiate CSS animations with specified parameters, including duration and keyframes
- Supports manipulation of single elements or multiple elements at once

## Installation

You can install Alter.js via npm:

```shell
npm install @kushii/alter.js
```
Alternatively, you can include the cdn in your HTML file:
```php
<script src="https://cdn.jsdelivr.net/gh/u-Kuro/alter.js/alter.js"></script>
```
```php
<script src="https://cdn.jsdelivr.net/gh/u-Kuro/alter.js/alter.min.js"></script>
```

## Usage
To use Alter.js, simply call the `alter()` function with the target element(s) and the desired parameters. Here's a basic example:
```js
alter('#myElement', {
  keyframes: [
    { opacity: '1' },
    { opacity: '0' }
  ],
  duration: 200,
  easing: 'ease',
  callback: () => {
    Object.assign(element.style, { opacity: 0, display: 'none' });
  }
});
```
You can also apply styles to multiple Elements:
```js
const elements = document.getElementByClassName('.myElements');

alter(elements, {
  styles: {
    color: 'white',
    backgroundColor: 'black'
  }
});
```
