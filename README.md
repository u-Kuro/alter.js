# Alter.js

Alter.js is a lightweight JavaScript library for immediate manipulation of CSS styles and animations on one or multiple elements. It provides a simple and intuitive way to dynamically modify the visual appearance and behavior of elements on your web page.

## Features

- Apply custom CSS styles to elements programmatically
- Initiate CSS animations with specified parameters, including duration and keyframes
- Supports manipulation of single elements or multiple elements at once

## Installation

You can install Alter.js via npm:

```shell
npm install alter-js
```
Alternatively, you can include the script in your HTML file:
```php
<script src="path/to/alter.js"></script>
```

## Usage
To use Alter.js, simply call the `alter()` function with the target element(s) and the desired parameters. Here's a basic example:
```js
const element = document.getElementById('myElement');

alter(element, {
  duration: 1000, // Not Adding a duration will skip code execution to the last keyframe
  keyframes: [
    { transform: 'scale(1)' },
    { transform: 'scale(1.5)' },
    { transform: 'scale(1)' }
  ]
});
```
You can also apply styles to multiple Elements:
```js
const elements = document.getElementByClassName('.myElements');

alter(elements, {
  styles: {
    color: 'red',
    backgroundColor: 'yellow'
  }
});
```
