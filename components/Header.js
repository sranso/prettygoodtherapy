import Link from 'next/link';

const Header = () => (
  <header>
    <Link href="/">
      <a>Come Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </header>
);

export default Header;
