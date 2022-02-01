## Animation

### Transition

Efekt skokowy, dzięki czemu mamy przed i po hoverze, musimy ustawić animację na main elemencie

```css
.circle {
  transition: 0.7s background ease-in-out;
  transition-delay: 1s;
  transition-property: background, border-radius;
}

.circle:hover {
  border-radius: 0;
}
```

<br>

### @keyframes

```css
.circle {
  animation-name: pulse;
  animation-duration: 1s;
  animation-timing-function: linear;

  /* zacznie się na początku */
  animation-play-state: running;

  /* zatrzymanie w końcowym momencie */
  animation-fill-mode: both;

  animation-teration-count: infinite;
}

@keyframes pulse {
  0% {
    width: 6rem;
  }

  50% {
    width: 12rem;
  }

  100% {
    width: 6rem;
  }
}

/* @keyframes pulse {
  from {
    width: 6rem;
  }

  to {
    width: 12rem;
  }
} */
```

<br>

### Timming functions and curves

`bucic-bezier(.03, 1.04, .93, -0.45)`
