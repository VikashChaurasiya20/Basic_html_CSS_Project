# Jumping Letters

A tiny, dependency‑free web animation that makes letters "jump" when clicked. Built with plain HTML, CSS, and JavaScript.

## Demo
Open `index.html` in your browser and click the letters.

## Features
- Interactive click-to-jump animation
- Pure CSS keyframes + vanilla JS
- Responsive, centered layout with a gradient background

## Getting Started
1. Clone or download this project.
2. Open `index.html` directly in any modern browser.
   - No build step or server required.

## Project Structure
```
.
├─ index.html   # Markup with clickable letters
├─ style.css    # Styles and jump animation keyframes
└─ script.js    # Click handlers to trigger animations
```

## How It Works
- `index.html` renders each letter inside a `div.letter` as individual `span` elements.
- `script.js` attaches a click listener to each `span` and adds the `active` class on click.
- `style.css` defines the `jump` keyframes and animates any `span.active`.

## Customization
- Letters/word: Edit the `span` elements inside the `.letter` container in `index.html`.
- Font and size: Tweak `.letter` and `.letter span` rules in `style.css` (e.g., `font-family`, `font-size`).
- Animation timing: Change `.letter span.active { animation: jump 2s ease-in-out; }` duration/easing.
- Motion path: Adjust the `@keyframes jump` transforms to your liking.
- Colors/background: Update the `body` gradient in `style.css`.

## Browser Support
Works in modern browsers that support CSS transforms and animations.

## Notes
- Each click adds the `active` class; if you want the animation to replay on every click, you can remove and re-add the class in JavaScript after the animation ends using the `animationend` event.

```js
// Optional: retrigger animation on every click
const letters = document.querySelectorAll('.letter span');
letters.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.remove('active');
    // Force reflow to restart animation
    void el.offsetWidth;
    el.classList.add('active');
  });
});
```
