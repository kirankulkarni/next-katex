import Link from 'next/link';

export default function Home() {
  return (
    <ul className='mx-20 my-20 list-disc list'>
      <li className='text-xl text-blue-500 underline underline-offset-2'>
        <Link href='/without-katex'>
          Text rendering without using Katex
        </Link>
      </li>
      <li className='text-xl text-blue-500 underline underline-offset-2'>
        <Link href='/with-katex'>Text rendering with Katex</Link>
      </li>
    </ul>
  );
}
