export const testUserAgentForMobileDevice = () => {
	const userAgent = window.navigator.userAgent;
	// Simple regex check - for large scale apps, better to use third-party libraries
	const isMobileDevice =
		/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent);

	return isMobileDevice;
};
