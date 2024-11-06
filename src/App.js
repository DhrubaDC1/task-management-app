import './App.css';
import FilePickerModal from './components/filePicker';
import { useState } from 'react';

const Card = ({ clientName, description, progress, date, fileCount, isModalOpen, setIsModalOpen }) => {
  return (
    <div className='m-2 bg-white flex flex-col gap-2 py-2'>
      <div className='flex flex-row justify-between px-2 font-semibold items-center'>
        <div className='flex flex-row gap-2 justify-center items-center'>
        <img className='rounded-full w-8 h-8' src="logo1.jpg"/>
        <p className='text-wrap'>Client Name</p>
        </div>
        <div className='flex flex-row gap-2 justify-center items-center'>
        <img className='rounded-full w-8 h-8' src="logo2.jpg"/>
        <p>{clientName}</p>
        </div>
      </div>
      <div className='flex flex-row justify-between px-2 text-sm'>
        <p>{description}</p>
        <div className='flex flex-row gap-1 justify-center items-center bg-gray-300 px-1 rounded-md'>
        <img className='w-3 h-3' src="todo.png"/>
        <p>{progress}</p>
        </div>
      </div>
      <div className='flex flex-row justify-between px-2 items-center text-sm font-semibold'>
        <img className='w-6 h-6 rounded-full' src="logo3.jpg"/>
        <img className='w-6 h-6 rounded-full' src="logo4.jpg"/>
        <div className='bg-gray-300 flex justify-center items-center rounded-full w-6 h-6'>
        <p>12+</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-1'>
          <img className='w-5 h-5' src="chat.png"/>
          <p>15</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-1' onClick={() => setIsModalOpen(true)}>
          <img className='w-5 h-5' src="clip.png"/>
          <p>{fileCount}</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-1'>
        <img className='w-5 h-5' src="calendar.png" alt="" />
        <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

const clients = [
  {
    clientName: 'Sadik Istiak',
    description: 'Lorem ipsum dolor sit amet curn...',
    progress: '1/2',
    date: '30-12-2022'
  },
  {
    clientName: 'Sadik Istiak',
    description: 'Lorem ipsum dolor sit amet curn...',
    progress: '1/2',
    date: '30-12-2022'
  },
  {
    clientName: 'Sadik Istiak',
    description: 'Lorem ipsum dolor sit amet curn...',
    progress: '1/2',
    date: '30-12-2022'
  },
  {
    clientName: 'Sadik Istiak',
    description: 'Lorem ipsum dolor sit amet curn...',
    progress: '1/2',
    date: '30-12-2022'
  },
  {
    clientName: 'Sadik Istiak',
    description: 'Lorem ipsum dolor sit amet curn...',
    progress: '1/2',
    date: '30-12-2022'
  },
  {
    clientName: 'Sadik Istiak',
    description: 'Lorem ipsum dolor sit amet curn...',
    progress: '1/2',
    date: '30-12-2022'
  },
  {
    clientName: 'Sadik Istiak',
    description: 'Lorem ipsum dolor sit amet curn...',
    progress: '1/2',
    date: '30-12-2022'
  },
  {
    clientName: 'Sadik Istiak',
    description: 'Lorem ipsum dolor sit amet curn...',
    progress: '1/2',
    date: '30-12-2022'
  },
];
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let count = 0;
  const [fileCount, setFileCount] = useState(0);
  const handleFileSubmit = (files) => {
    console.log(`Number of files selected: ${files.length}`);
    setFileCount(files.length);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className='w-full h-screen flex flex-row scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-gray-200 scrollbar-thumb-rounded overflow-x-auto overflow-y-hidden'>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
        <div className='flex h-[7%] flex-row justify-between p-4'>
          <div className='flex flex-row gap-2 justify-center items-center font-semibold'>
          <img className='w-6 h-6' src="cross.png"/>
          <p>Incomplete</p>
          </div>
          <div className='bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md'>
            <p>{count}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 h-[93%] scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-gray-200 scrollbar-thumb-rounded overflow-y-auto'>
          {clients.map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              date={client.date}
              fileCount={fileCount}
              isModalOpen = {isModalOpen}
              setIsModalOpen = {setIsModalOpen}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
      <div className='flex h-[7%] flex-row justify-between p-4'>
          <div className='flex flex-row gap-2 justify-center items-center font-semibold'>
          <img className='w-6 h-6' src="todo.png"/>
          <p>To Do</p>
          </div>
          <div className='bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md'>
            <p>{count}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 h-[93%] scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-gray-200 scrollbar-thumb-rounded overflow-y-auto'>
          {clients.slice(0, 7).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              date={client.date}
              fileCount={fileCount}
              isModalOpen = {isModalOpen}
              setIsModalOpen = {setIsModalOpen}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
      <div className='flex h-[7%] flex-row justify-between p-4'>
          <div className='flex flex-row gap-2 justify-center items-center font-semibold'>
          <img className='w-6 h-6' src="doing.png"/>
          <p>Doing</p>
          </div>
          <div className='bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md'>
            <p>{count}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 h-[93%] scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-gray-200 scrollbar-thumb-rounded overflow-y-auto'>
          {clients.slice(0, 9).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              date={client.date}
              fileCount={fileCount}
              isModalOpen = {isModalOpen}
              setIsModalOpen = {setIsModalOpen}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
      <div className='flex h-[7%] flex-row justify-between p-4'>
          <div className='flex flex-row gap-2 justify-center items-center font-semibold'>
          <img className='w-6 h-6' src="under_review.png"/>
          <p>Under Review</p>
          </div>
          <div className='bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md'>
            <p>{count}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 h-[93%] scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-gray-200 scrollbar-thumb-rounded overflow-y-auto'>
          {clients.slice(0, 9).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              date={client.date}
              fileCount={fileCount}
              isModalOpen = {isModalOpen}
              setIsModalOpen = {setIsModalOpen}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
      <div className='flex h-[7%] flex-row justify-between p-4'>
          <div className='flex flex-row gap-2 justify-center items-center font-semibold'>
          <img className='w-6 h-6' src="completed.png"/>
          <p>Completed</p>
          </div>
          <div className='bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md'>
            <p>{count}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 h-[93%] scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-gray-200 overflow-y-auto'>
          {clients.slice(0, 7).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              date={client.date}
              fileCount={fileCount}
              isModalOpen = {isModalOpen}
              setIsModalOpen = {setIsModalOpen}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
      <div className='flex h-[7%] flex-row justify-between p-4'>
          <div className='flex flex-row gap-2 justify-center items-center font-semibold'>
          <img className='w-6 h-6' src="overdue.png"/>
          <p>Overdue</p>
          </div>
          <div className='bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md'>
            <p>{count}</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 h-[93%] scrollbar-thin scrollbar-thumb-blue-950 scrollbar-track-gray-200 scrollbar-thumb-rounded overflow-y-auto'>
          {clients.slice(0, 10).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              date={client.date}
              fileCount={fileCount}
              isModalOpen = {isModalOpen}
              setIsModalOpen = {setIsModalOpen}
            />
          ))}
        </div>
      </div>
            {/* Modal Component */}
            <FilePickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFileSubmit}
      />

    </div>
  );
}

export default App;
