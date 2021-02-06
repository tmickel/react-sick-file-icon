# react-sick-file-icon

A hacky library to render icons for files in React.

Supports all file types from the [File Icons](https://github.com/file-icons/atom) project (from Atom and VSCode extensions) -- hundreds!

The icon is automatically determined based on the filename.

Currently, only light mode is supported. Folder icons are not supported.

To change the size of the icon, apply a font-size CSS.
## Install

I didn't publish this on npm yet.

```bash
npm install --save git+https://github.com/tmickel/react-sick-file-icon.git
```
## Usage

```jsx
import { SickFileIcon } from "react-sick-file-icon";
import "react-sick-file-icon/src/icons.css";

...

<SickFileIcon filename={"hello.jsx"} isFolder={false} />
```