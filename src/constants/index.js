export const initialHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Loader Example</title>
</head>
<body>
  <div class="loader"></div>
  <div class="content">
    <h1>Start Coding</h1>
    <p>Reset the editor by clicking/hovering on the red button</p>
		<p>Save contents of editor by clicking on the yellow button</p>
  </div>
  <script src="script.js"></script>
</body>
</html>`;

export const initialCssContent = `body {
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
	align-content:center;
	margin: 0;
  padding: 0;
	overflow:scroll;
	color: white;
  background-color: black;
  font-family: Arial, sans-serif;
}

.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.content {
  text-align: center;
}

h1 {
  font-size: 24px;
  margin: 0;
}

p {
  margin: 0;
	font-size: 16px;
	margin-top: 8px;
}
`;

export const initialJsContent = `// This is a placeholder for any JavaScript you might want to add`;

export const INITIAL_CONTENT_MAP = {
	javascript: initialJsContent,
	html: initialHtmlContent,
	css: initialCssContent,
};

export const EXTENSION_MAP = {
	javascript: "js",
	html: "html",
	css: "css",
};
