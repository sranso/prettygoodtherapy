import Head from 'next/head'
import Header from './Header'

const Layout = props => (
	<>
		<Head>
			<title>Pretty Good Therapy</title>
	        <meta property="og:title" content="Pretty Good Therapy" key="title" />
	        <meta name="description" content="Pretty good therapy, availalbe to everyone. If you need real therapy, please seek it. Built by Sarah Ransohoff." />

			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177913389-2"></script>
			<script dangerouslySetInnerHTML={{ __html: `
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());

			  gtag('config', 'UA-177913389-2');
			  `}}>
			</script>

			<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
			<link rel="manifest" href="/static/site.webmanifest"/>
			<link href="https://fonts.googleapis.com/css2?family=Bilbo&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;0,900;1,100&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet"/>
		</Head>

	    <Header />
	    {props.children}
	</>
);

export default Layout;
