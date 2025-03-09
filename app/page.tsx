import Hello from "@/app/components/hello";
import React from 'react';
export default function Home() {
  console.log('what am i doing here?');

  return (
    <> 
    <h1 className="text-3xl">Welcome to Next.js</h1>
    <Hello />
    </>
  );
}