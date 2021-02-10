# react-sick-file-icon

A hacky library to render icons for files in React.

Supports all file types from the [File Icons](https://github.com/file-icons/atom) project (from Atom and VSCode extensions) -- hundreds! The implementation internally uses a slightly trimmed down version of the data for the VSCode extension.

The icon is automatically determined based on the filename. Do not include path components.

Currently, only light mode is supported. Folder icons are not supported, except the default "boring" one.

To change the size of the icon, apply a font-size CSS.

## Install

```bash
npm install --save react-sick-file-icon
```

Your bundler must support CSS and woff2 files. In esbuild, this means:

```bash
npx esbuild ... --bundle --loader:.woff2=file ...
```

## Usage

```jsx
import { SickFileIcon } from "react-sick-file-icon";
import "react-sick-file-icon/src/icons.css";

...

<SickFileIcon filename={"hello.jsx"} isFolder={false} />
```
