export const SlideUp: Record<string, any> = {
	visible: {
		opacity: 1,
		translateY: 0,
		transition: {
			duration: 0.5, // Animation duration
		},
	},
	hidden: { opacity: 0, translateY: 100 },
};
