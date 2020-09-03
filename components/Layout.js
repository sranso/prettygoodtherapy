import Head from 'next/head'
import Header from './Header';

const layoutStyle = {
    padding: 20,
};

const Layout = props => (
	<div>
		<Head>
			<title>Pretty Good Therapy</title>
	        <meta property="og:title" content="Pretty Good Therapy" key="title" />
			<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
			<link rel="manifest" href="/static/site.webmanifest"/>
		</Head>
	    <div style={layoutStyle}>
	        <Header />
	        {props.children}
	    </div>
    </div>
);

export default Layout;
