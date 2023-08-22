// React Imports
import React, { useState, useEffect, useRef } from "react";
// Component Imports
import Editor from "./Editor";
// Other Imports
import useLocalStorage from "../hooks/useLocalStorage";
import {
	initialCssContent,
	initialHtmlContent,
	initialJsContent,
} from "../constants";
import { imageSources } from "../assets/images";
import ImagePreloader from "../utilities/ImagePreloader";

function App() {
	/* 
		States to maintain the content on the editors 
		Custom hook useLocalStorage - to sync editor content to local storage to avoid data loss on page reload
	*/
	const [html, setHtml] = useLocalStorage("html", initialHtmlContent);
	const [css, setCss] = useLocalStorage("css", initialCssContent);
	const [js, setJs] = useLocalStorage("js", initialJsContent);
	const [srcDoc, setSrcDoc] = useState("");

	const [showIframe, setShowIframe] = useState(false);
	const timerRef = useRef(null);

	// Refresh the iframe content every 250ms instead of re-rendering for every key-stroke on editors
	useEffect(() => {
		timerRef.current = setTimeout(() => {
			setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
		}, 250);

		return () => clearTimeout(timerRef.current);
	}, [html, css, js]);

	const handleTopPaneAnimationEnd = () => setShowIframe(true);

	return (
		<ImagePreloader images={imageSources}>
			<div
				className="container primary-container"
				onAnimationEnd={handleTopPaneAnimationEnd}
			>
				<Editor
					language="html"
					displayName="HTML"
					value={html}
					onChange={setHtml}
					animationQueue={0.6}
				/>
				<Editor
					language="css"
					displayName="CSS"
					value={css}
					onChange={setCss}
					animationQueue={0.55}
				/>
				<Editor
					language="javascript"
					displayName="JS"
					value={js}
					onChange={setJs}
					animationQueue={0.5}
				/>
			</div>
			{showIframe && (
				<div className="container iframe-container">
					<iframe
						srcDoc={srcDoc}
						title="output"
						// To only allow scripts to be injected on the iframe
						sandbox="allow-scripts"
						width="100%"
						height="100%"
					/>
				</div>
			)}
		</ImagePreloader>
	);
}

export default App;
