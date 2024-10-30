import React from "react";

export default function loading() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <div className='flex space-x-2'>
        <div className='h-4 w-4 rounded-full bg-primary animate-bounce' />
        <div className='h-4 w-4 rounded-full bg-secondary animate-bounce delay-200' />
        <div className='h-4 w-4 rounded-full bg-primary animate-bounce delay-400' />
      </div>
    </main>
  );
}
