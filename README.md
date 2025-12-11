# XLP UI — React Component Library

A modern, accessible React component library built with **Chakra UI v3**, **TypeScript**, and **Vite**.

## 🚀 Features

- ⚡ **Fast builds** with [Vite](https://vitejs.dev)
- 🎨 **Beautiful components** powered by [Chakra UI](https://chakra-ui.com)
- 📖 **Storybook documentation** for visual testing
- 🌗 **Dark mode support** out of the box
- ♿ **Accessible** - WAI-ARIA compliant
- 📦 **Tree-shakeable** - Import only what you need
- 🔷 **TypeScript first** - Full type safety

---

## 📦 Installation

```bash
npm install xlp-ui @chakra-ui/react @emotion/react
# or
yarn add xlp-ui @chakra-ui/react @emotion/react
# or
pnpm add xlp-ui @chakra-ui/react @emotion/react
```

---

## 🏁 Quick Start

Wrap your application with `XlpProvider`:

```tsx
import { XlpProvider, XlpButton, XlpBadge } from 'xlp-ui';

function App() {
  return (
    <XlpProvider>
      <XlpButton colorPalette="blue">Click Me</XlpButton>
      <XlpBadge colorPalette="green">New</XlpBadge>
    </XlpProvider>
  );
}
```

---

## 🧱 Components

### Buttons

| Component       | Description                                 |
|-----------------|---------------------------------------------|
| `XlpButton`     | Customizable button with variants and sizes |
| `XlpIconButton` | Icon-only button with accessibility         |

### Forms

| Component        | Description               |
|------------------|---------------------------|
| `XlpInput`       | Text input field          |
| `XlpTextarea`    | Multi-line text input     |
| `XlpSelect`      | Dropdown select component |
| `XlpCheckbox`    | Checkbox input            |
| `XlpRadioGroup`  | Radio button group        |
| `XlpSwitch`      | Toggle switch             |
| `XlpNumberInput` | Number input with stepper |

### Data Display

| Component      | Description                            |
|----------------|----------------------------------------|
| `XlpBadge`     | Status indicator badge                 |
| `XlpTag`       | Tag/chip for labeling                  |
| `XlpAvatar`    | User avatar with fallback              |
| `XlpTable`     | Data table component                   |
| `XlpAccordion` | Collapsible content sections           |
| `XlpCard`      | Card container with header/body/footer |

### Feedback

| Component       | Description                |
|-----------------|----------------------------|
| `XlpAlert`      | Alert messages with status |
| `XlpSpinner`    | Loading spinner            |
| `XlpProgress`   | Progress bar               |
| `XlpSkeleton`   | Loading placeholder        |
| `XlpEmptyState` | Empty content placeholder  |

### Overlay

| Component    | Description   |
|--------------|---------------|
| `XlpModal`   | Dialog modal  |
| `XlpDrawer`  | Sliding panel |
| `XlpTooltip` | Hover tooltip |
| `XlpPopover` | Click popover |

### Navigation

| Component       | Description           |
|-----------------|-----------------------|
| `XlpTabs`       | Tabbed navigation     |
| `XlpMenu`       | Dropdown menu         |
| `XlpBreadcrumb` | Breadcrumb navigation |

### Layout

| Component     | Description      |
|---------------|------------------|
| `XlpDivider`  | Visual separator |
| `XlpProvider` | Theme provider   |

---

## 🎨 Theming

XLP UI comes with a custom theme. Access theme tokens in your components:

```tsx
import { xlpTheme, semanticTokens } from 'xlp-ui';
```

---

## 📖 Storybook

Run Storybook locally to explore components:

```bash
npm run storybook
```

Build Storybook for deployment:

```bash
npm run build-storybook
```

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build:lib

# Run Storybook
npm run storybook
```

---

## 📄 Publishing to NPM

1. Update the version in `package.json`
2. Build the library: `npm run build:lib`
3. Publish: `npm publish`

---

## 📜 License

MIT © XLP Team

## 📺 Watch the Tutorial

This project was built as part of a step-by-step YouTube tutorial:
🎥 [Build & Publish React Component Library](https://youtu.be/iC8bmSuBDZ8)

---

## 🔧 Tech Stack

* React
* Vite
* Tailwind CSS
* TypeScript
* npm

---
