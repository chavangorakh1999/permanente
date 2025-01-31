interface Window {
	electronAPI: {
		getPlatform: () => Promise<string>;
		onUpdate: (callback: (event: any, data: any) => void) => void;
	};
}
