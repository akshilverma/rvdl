import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <h1>
      Read
      {' '}
      <Link href="/teams">
        <a>Teams page!</a>
      </Link>
    </h1>
  );
}
