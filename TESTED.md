# Mobile simulator validation

Tested in a browser at an iPhone-sized 390 × 844 viewport with device scale factor 3, mobile mode, and touch enabled.

Passed:

- Play advances animation time.
- Pause freezes time.
- Reset returns to 0 seconds and Bias ON.
- Manual time control works.
- Voltage, temperature, thickness, fluorine pressure, fluorine attack rate, sodium, secondary phase, and grain-boundary connectivity each change the model.
- All four scientific plot selections work.
- Touch controls work.
- Both canvases resize to the phone viewport.
- No horizontal overflow.
- Reload works.
- No JavaScript console or page errors.

The test used the same React JSX source and index page committed for GitHub Pages.
