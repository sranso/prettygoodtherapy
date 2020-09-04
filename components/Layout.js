import Head from 'next/head'
import styles from './Layout.module.css'
import Header from './Header'

const Layout = props => (
	<body className={styles.body}>
		<Head>
			<title>Pretty Good Therapy</title>
	        <meta property="og:title" content="Pretty Good Therapy" key="title" />
	        <meta name="description" content="Pretty good therapy, availalbe to everyone. If you need real therapy, please seek it. Built by Sarah Ransohoff." />
			<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
			<link rel="manifest" href="/static/site.webmanifest"/>
			<link href="https://fonts.googleapis.com/css2?family=Bilbo&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
		</Head>

	    <Header />
	    {props.children}
    </body>
);

export default Layout;
