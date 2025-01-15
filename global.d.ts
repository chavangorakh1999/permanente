declare module "*.svg" {
	import * as React from "react";

	// Define the ReactComponent export to allow passing SVG properties like `fill`
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	// Default export for importing as a URL string
	const content: string;
	export default content;
}
