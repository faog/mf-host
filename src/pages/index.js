import React from 'react';
import dynamic from 'next/dynamic';

const RemoteButton = dynamic(() => import('content/Button'));

export default function Home() {
  return (
    <>
      <h4>Módulos federados - Host</h4>
      <RemoteButton />
    </>
  )
}