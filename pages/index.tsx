import CounterComponent from '@/components/CounterComponent';
import Head from 'next/head';
import useDarkMode from '../hooks/useDarkMode'; // Import your custom hook

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Counter App Task</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css" />
      </Head>
      <div className="mb-4">
        <button onClick={toggleDarkMode} className="button-style">
          {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
      </div>
      <div className="flex space-x-">
        <CounterComponent title={'Counter 1'}/>
        <CounterComponent title={'Counter 2'} showTextBox={true}/>
      </div>
    </div>
  )
}