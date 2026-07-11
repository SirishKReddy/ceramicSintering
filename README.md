# Ceramic Pedestal Electrical Reliability Simulator

A mobile-first React + Canvas teaching simulation for AlN electrostatic-chuck / ceramic-pedestal electrical reliability.

## What the simulation compares

- **Case A:** controlled AlN microstructure
- **Case B:** off-target sodium, increased grain-boundary secondary phase, and fluorine damage

The model visualizes charge movement, Na⁺ drift, fluorine attack, local field concentration, leakage, breakdown probability, Joule heating, and residual charge.

## Physics-based model structure

- `E = V / t`
- Arrhenius temperature dependence of resistivity
- `J = E / ρ`, `I = JA`, and `P = IV`
- Exponential trap/charge relaxation
- Weibull breakdown probability form

The sodium window, field-acceleration factor, fluorine damage law, grain geometry, and numerical constants are intentionally simplified teaching assumptions. They are not NGK, Lam, or production pedestal data.

## Source and runtime

The interactive UI and both canvases are implemented in one React source component: `docs/CeramicPedestalSimulation.jsx`.

`requestAnimationFrame` redraws the scientific diagram and plots. The browser loads React and the compiled `docs/app.js` runtime.

## Mobile validation

The Playwright mobile test uses a 390 × 844 CSS-pixel iPhone-sized viewport with touch enabled. It checks Play, Pause, Reset, every slider and plot selector, responsive canvas sizing, overflow, reload behavior, and JavaScript errors.