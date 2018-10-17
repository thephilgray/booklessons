import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <Link href="/teach">
        <a>Teach</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Nav;
