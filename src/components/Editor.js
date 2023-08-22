// React Imports
import React, { useEffect, useRef, useState } from "react";
// CodeMirror & its Plugin Imports
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { xcodeDark } from "@uiw/codemirror-theme-xcode";
// Icon Imports
import {
	ResetIcon,
	ExpandIcon,
	DownloadIcon,
	FallbackResetIcon,
	FallbackExpandIcon,
	FallbackDownloadIcon,
} from "../assets/images";
// Other Imports
import { EXTENSION_MAP, INITIAL_CONTENT_MAP } from "../constants";

// Language configuration for CodeMirror component based on langauage
const LANG_CONFIG_MAP = {
	javascript: [javascript({ jsx: true })],
	html: [html({})],
	css: [css({})],
};

export default function Editor(props) {
	const { language, displayName, value, onChange, animationQueue } = props;

	// Create a BLOB file for making the content in the editor downloadable
	const file = new Blob([value], { type: "text/plain" });

	// state to check if device is mobile or not
	const [isMobileDevice, setIsMobileDevice] = useState(
		window.matchMedia("(max-width: 480px)").matches
	);
	// state to collapse/expand editor
	const [openEditor, setOpenEditor] = useState(!isMobileDevice);
	// state to show toolbar button's icons on hover or show always
	const [toolBarButtonsHover, setToolBarButtonsHover] =
		useState(isMobileDevice);
	// state to open/close reset dropdown
	const [showResetDropdown, setShowResetDropdown] = useState(false);
	// timer reference
	const timerRef = useRef(null);

	useEffect(() => {
		// Event listener to track screen size changes to/from mobile screen
		window.matchMedia("(max-width: 480px)").addEventListener("change", (e) => {
			setIsMobileDevice(e.matches);
		});

		// Event listener to close reset button dropdown on click on window
		window.addEventListener("click", (e) => {
			// If click is on reset dropdown, close after delay to make dropdown click item animation to be visible
			if (e.target.id === "reset-dropdown") {
				timerRef.current = setTimeout(function () {
					setShowResetDropdown(false);
				}, 200);
			}
			// If click is on reset button and on mobile device - do nothing as we already open it on the onClick prop of the button for mobile devices
			else if (isMobileDevice && e.target.id === "reset-button") {
			}
			// All other clicks - close the dropdown
			else setShowResetDropdown(false);
		});

		// Remove event listeners and clear timeout on component unmount to avoid stack overflow
		return () => {
			window
				.matchMedia("(max-width: 480px)")
				.removeEventListener("change", (e) => {
					setIsMobileDevice(e.matches);
				});

			window.removeEventListener("click", (e) => {
				if (e.target.id === "reset-dropdown") {
					timerRef.current = setTimeout(function () {
						setShowResetDropdown(false);
					}, 200);
				} else if (isMobileDevice && e.target.id === "reset-button") {
				} else setShowResetDropdown(false);
			});

			clearTimeout(timerRef.current);
		};
		// eslint-disable-next-line
	}, []);

	// Whenever device size changes, we want the editor configs to get affected
	useEffect(() => {
		setOpenEditor(!isMobileDevice);
		setToolBarButtonsHover(isMobileDevice);
	}, [isMobileDevice]);

	const handleChange = (value, viewUpdate) => onChange(value);

	const handleResetEditor = () => onChange(INITIAL_CONTENT_MAP[language]);

	const handleClearEditor = () => onChange("");

	const handleOnMouseEnterOnToolBarButtons = () =>
		!isMobileDevice && setToolBarButtonsHover(true);

	const handleOnMouseExitFromToolBarButtons = () =>
		!isMobileDevice && setToolBarButtonsHover(false);

	const handleOnResetButtonHover = () => {
		if (!isMobileDevice) {
			setShowResetDropdown(true);
			handleOnMouseEnterOnToolBarButtons();
		}
	};

	const handleOnResetButtonHoverExit = () => {
		if (!isMobileDevice) {
			setShowResetDropdown(false);
			handleOnMouseExitFromToolBarButtons();
		}
	};

	const handleResetButtonClick = () =>
		isMobileDevice && setShowResetDropdown(true);

	// Reset button dropdown component
	const DropDown = () => (
		<div
			id="reset-dropdown"
			className={`reset-dropdown ${showResetDropdown ? "expanded" : ""}`}
			onMouseEnter={handleOnResetButtonHover}
			onMouseLeave={handleOnResetButtonHoverExit}
		>
			<div
				id="reset-dropdown"
				className="reset-dropdown-item"
				onClick={handleResetEditor}
			>
				Reset Editor
			</div>
			<div
				id="reset-dropdown"
				className="reset-dropdown-item"
				onClick={handleClearEditor}
			>
				Clear Editor
			</div>
		</div>
	);

	return (
		<div
			style={{
				animation: `${animationQueue}s ease-out 0s 1 slideInLeft`,
			}}
			className={`editor-container ${openEditor ? "" : "collapsed"}`}
		>
			<div className="editor-toolbar">
				<div className="editor-title" title={displayName}>
					{displayName}
				</div>
				<div>
					<div className="editor-buttons-container">
						<button type="button" className="editor-button">
							<img
								id="reset-button"
								width="17px"
								height="17px"
								className="editor-icon reset-icon"
								alt="Reset icon"
								title="Reset editor"
								src={toolBarButtonsHover ? ResetIcon : FallbackResetIcon}
								onClick={handleResetButtonClick}
								onMouseEnter={handleOnResetButtonHover}
								onMouseLeave={handleOnResetButtonHoverExit}
							/>
							<DropDown />
						</button>
						<button type="button" className="editor-button">
							{/* Wrapping img tag with anchor tag with target set to _blank to download the file on click of the icon button */}
							<a
								download={`file.${EXTENSION_MAP[language]}`}
								target="_blank"
								rel="noreferrer"
								href={URL.createObjectURL(file)}
								style={{
									textDecoration: "inherit",
									color: "inherit",
								}}
							>
								<img
									width="17px"
									height="17px"
									className="editor-icon download-icon"
									alt="Download icon"
									title={`Download ${language} file`}
									src={
										toolBarButtonsHover ? DownloadIcon : FallbackDownloadIcon
									}
									onMouseEnter={handleOnMouseEnterOnToolBarButtons}
									onMouseLeave={handleOnMouseExitFromToolBarButtons}
								/>
							</a>
						</button>
						<button
							type="button"
							className="editor-button"
							onClick={() => setOpenEditor((prevOpen) => !prevOpen)}
						>
							<img
								width="17px"
								height="17px"
								className="editor-icon expand-icon"
								alt="Expand/Minimise icon"
								title="Expand/Minimise"
								src={toolBarButtonsHover ? ExpandIcon : FallbackExpandIcon}
								onMouseEnter={handleOnMouseEnterOnToolBarButtons}
								onMouseLeave={handleOnMouseExitFromToolBarButtons}
							/>
						</button>
					</div>
				</div>
			</div>

			{/* CodeMirror Editor with its configurations */}
			<CodeMirror
				value={value}
				height="100%"
				className="code-mirror-wrapper"
				extensions={LANG_CONFIG_MAP[language]}
				theme={xcodeDark}
				onChange={handleChange}
			/>
		</div>
	);
}
