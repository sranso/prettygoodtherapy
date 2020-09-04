import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
}

const Header = () => (
  <>
    <Link href="/">
      <a style={linkStyle}>Pretty Good Therapy</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </>
);

export default Header;
