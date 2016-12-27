import * as React from 'react';

interface LayoutProps extends React.Props<any> {
	children?: JSX.Element;
}

function Layout({ children }: LayoutProps) {
	return (
		<div>
			<h1>Hello, world!</h1>
			{children}
		</div>
	);
}

export default Layout;
