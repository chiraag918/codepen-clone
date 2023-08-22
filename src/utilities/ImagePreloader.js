import { useEffect, useState } from "react";
import CircularLoader from "../components/CircularLoader";

const ImagePreloader = ({ images, children }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const imagePromises = images.map((src) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = src;
				img.onload = resolve;
				img.onerror = reject;
			});
		});

		Promise.all(imagePromises)
			.then(() => {
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error preloading images:", error);
				setIsLoading(false);
			});
	}, [images]);

	return isLoading ? <CircularLoader /> : children;
};

export default ImagePreloader;
