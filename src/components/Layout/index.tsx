import * as React from 'react';
import Navigation from '../Navigation';
import './styles.scss';

interface ILayoutProps extends React.Props<any> {
	children?: JSX.Element;
}

class Layout extends React.Component<ILayoutProps, void> {
	public render() {
		return (
			<div className="layout">
				<Navigation />
				{this.props.children}
			</div>
		);
	}
}

export default Layout;
