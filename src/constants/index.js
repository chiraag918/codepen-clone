export const initialHtmlContent = `<html>
<head>
	<title>loader</title>
	</head>
<body>
	<div>RESET THE EDITORS & START CODING!!!</div>
	<div class="spin">
		<div class="inner"></div>
	</div>
  <div class="note-container">
    <div class="note">To reset, click/hover on RED button on toolbar</div>
    <div class="note">To download, click on YELLOW button on toolbar</div>
  </div>
</body>
</html> `;

export const initialCssContent = `body,.spin{
	position:relative;
 display:flex;
 justify-content:space-evenly;
 flex-direction:column;
 color: white;
 font-size: 18px;
 align-items:center;
}
body{
 background:black;
 width:100%;
 height:100vh;
 overflow:hidden;
}
.spin{
 width:150px;
 height:150px;
 border-radius:50%;
 box-shadow: 2px 2px 8px white,
						 4px 4px 8px #fff;
 border:10px solid #fff;
	border-bottom:10px solid transparent;
 border-top:10px solid transparent;
 animation: spin 1.4s linear infinite;
}
.note-container{
	 display:flex;
	 flex-direction: column;
	 align-items:center;
}
.note{
	 font-size:15px;
	 margin-top:10px;
}
.inner{
 width: 120px;
 height:120px;
 border-radius: 50%;
 border: 8px solid #eee;
	border-right:10px solid transparent;
 animation: inner 1s linear infinite;
}
@keyframes inner{
 0%{
	 transform: rotate(0deg);
 }
 20%{
	 transform: rotate(10deg);
 }
 50%{
	 transform: rotate(100deg);
 }
 75%{
	 transform: rotate(200deg);
 }
 100%{
	 transform: rotate(360deg);
 }
}
@keyframes spin{
 0%{
	 transform: rotate(0deg);
 }
 100%{
	 transform: rotate(-360deg);
 }
}`;

export const initialJsContent = ``;

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
