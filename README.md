# Web 🕸️ Simulator - CodePen clone 🧬

A responsive CodePen clone built using React. The `@uiw/react-codemirror` package is reponsible for building & customising the code editors. The app is divided into two sections, editor & simulator containers. The editor container consists of 3 editors each for HTML, CSS & JS. The simulator is an iframe view, where the code from the editors, compile down to render website inside it.

### [Deployment Link 🔗](https://websim.chiraag.dev)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Frontend Libraries](#libraries)
- [Prerequisites](#prerequesites)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

<a name="features"></a>

## Features 🏆

- Write and edit HTML, CSS, and JavaScript code in a live editor.
- See the live preview of your code output.
- Responsive design for both desktop and mobile devices.
- Theme for the app is inspired by MacOS.
- Editors have 3 toolbar buttons - Reset, Save & Expand/Collapse.
- 🔴 Reset on click, reveals a dropdown, from where the user can clear the editor or reset it to the default template.
- 🟡 Save is used to save the contents of the editors as respective(.html/.css/.js) files.
- 🟢 Expand/Collapse as the name suggests, expands or collapses the editor.
- Contents of the editors are synced to local storage 😮 to prevent data loss on page reload.
- Each Re-render happens every 250ms to efficiently render content instead of re-rendering on each keystroke on the editors.
- Cool animations 🎭 and effects make the user experience awesome.

<a name="installation"></a>

## Installation 💿

👉🏼 Clone this repository to your local machine:

```bash
git clone https://github.com/chiraag918/codepen-clone.git
```

👉🏼 Navigate to the project directory:

```bash
cd codepen-clone
```

👉🏼 Install the required dependencies:

```bash
npm install
```

👉🏼 Build using:

```bash
npm run build
```

<a name="usage"></a>

## Usage 🍽️

👉🏼 Start the app using:

```bash
npm start
```

Open your browser and visit http://localhost:3000 to access the CodePen clone.

<a name="libraries"></a>

## Frontend Libraries 🖼️

[React JS(UI)](https://reactjs.org/docs/getting-started.html),
[@uiw/react-codemirror](https://www.npmjs.com/package/@uiw/react-codemirror),
[sass](https://sass-lang.com/documentation/),
[npm](https://www.npmjs.com/)

<a name="prerequesites"></a>

## Prerequisites

For local developments, the application requires NodeJS (version 20.5.0). To make sure this is available on the local machine, try running the following command:

```bash
$ node --version
v20.5.0
```

<a name="screenshots"></a>

## Screenshots 📸

#### Desktop:

<img width="1792" alt="Screenshot 2023-08-22 at 9 53 17 PM" src="https://github.com/chiraag918/codepen-clone/assets/39455997/f31711aa-7154-4540-bace-df672cdb469d">

#### Mobile:

<img width="466" alt="Screenshot 2023-08-24 at 4 01 04 AM" src="https://github.com/chiraag918/codepen-clone/assets/39455997/ebf86203-1e0f-4510-aff2-d02a20b9e9f6">

<a name="contributing"></a>

## Contributing 🙏🏼

Contributions to improve the application are welcome. To contribute, follow these steps:

- Fork the repository on GitHub.
- Create a new branch with a descriptive name for your feature or bug fix.
- Make your changes and commit them with a clear message.
- Push your branch to your forked repository.
- Open a pull request to the main repository, explaining the changes you made.

<a name="license"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
