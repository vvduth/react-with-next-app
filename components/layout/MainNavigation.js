import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Holo.</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All places</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add a new place</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
