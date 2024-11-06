import './App.css';

const Card = ({ clientName, description, progress, imgInfo, date }) => {
  return (
    <div className='m-2 bg-white flex flex-col gap-2 py-2'>
      <div className='flex flex-row justify-between px-2'>
        <p className='text-wrap'>Client Name</p>
        <p>{clientName}</p>
      </div>
      <div className='flex flex-row justify-between px-2 text-sm'>
        <p>{description}</p>
        <p>{progress}</p>
      </div>
      <div className='flex flex-row justify-between px-2'>
        <p>{imgInfo}</p>
        <p>{imgInfo}</p>
        <p>12+</p>
        <p>15</p>
        <p>25</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

function App() {
  const clients = [
    {
      clientName: 'Sadik Istiak',
      description: 'Lorem ipsum dolor sit amet curn...',
      progress: '1/2',
      imgInfo: 'img',
      date: 'dd-mm-yyyy'
    },
    {
      clientName: 'Sadik Istiak',
      description: 'Lorem ipsum dolor sit amet curn...',
      progress: '1/2',
      imgInfo: 'img',
      date: 'dd-mm-yyyy'
    },
    {
      clientName: 'Sadik Istiak',
      description: 'Lorem ipsum dolor sit amet curn...',
      progress: '1/2',
      imgInfo: 'img',
      date: 'dd-mm-yyyy'
    },
    {
      clientName: 'Sadik Istiak',
      description: 'Lorem ipsum dolor sit amet curn...',
      progress: '1/2',
      imgInfo: 'img',
      date: 'dd-mm-yyyy'
    },
    {
      clientName: 'Sadik Istiak',
      description: 'Lorem ipsum dolor sit amet curn...',
      progress: '1/2',
      imgInfo: 'img',
      date: 'dd-mm-yyyy'
    },
    {
      clientName: 'Sadik Istiak',
      description: 'Lorem ipsum dolor sit amet curn...',
      progress: '1/2',
      imgInfo: 'img',
      date: 'dd-mm-yyyy'
    },
    {
      clientName: 'Sadik Istiak',
      description: 'Lorem ipsum dolor sit amet curn...',
      progress: '1/2',
      imgInfo: 'img',
      date: 'dd-mm-yyyy'
    },
    {
      clientName: 'Sadik Istiak',
      description: 'Lorem ipsum dolor sit amet curn...',
      progress: '1/2',
      imgInfo: 'img',
      date: 'dd-mm-yyyy'
    },
  ];

  return (
    <div className='w-full h-screen flex flex-row overflow-x-auto overflow-y-hidden'>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
        <div className='flex h-[7%] flex-row justify-between px-2 py-4'>
          <p>Incomplete</p>
          <p>0</p>
        </div>
        <div className='flex flex-col gap-2 h-[93%] overflow-y-auto'>
          {clients.map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              imgInfo={client.imgInfo}
              date={client.date}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
        <div className='flex h-[7%] flex-row justify-between px-2 py-4'>
          <p>To Do</p>
          <p>0</p>
        </div>
        <div className='flex flex-col gap-2 h-[93%] overflow-y-auto'>
          {clients.slice(0, 7).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              imgInfo={client.imgInfo}
              date={client.date}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
        <div className='flex h-[7%] flex-row justify-between px-2 py-4'>
          <p>Doing</p>
          <p>0</p>
        </div>
        <div className='flex flex-col gap-2 h-[93%] overflow-y-auto'>
          {clients.slice(0, 9).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              imgInfo={client.imgInfo}
              date={client.date}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
        <div className='flex h-[7%] flex-row justify-between px-2 py-4'>
          <p>Under Review</p>
          <p>0</p>
        </div>
        <div className='flex flex-col gap-2 h-[93%] overflow-y-auto'>
          {clients.slice(0, 9).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              imgInfo={client.imgInfo}
              date={client.date}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
        <div className='flex h-[7%] flex-row justify-between px-2 py-4'>
          <p>Completed</p>
          <p>0</p>
        </div>
        <div className='flex flex-col gap-2 h-[93%] overflow-y-auto'>
          {clients.slice(0, 7).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              imgInfo={client.imgInfo}
              date={client.date}
            />
          ))}
        </div>
      </div>
      <div className='min-w-[18%] bg-gray-300 mx-3 my-4'>
        <div className='flex h-[7%] flex-row justify-between px-2 py-4'>
          <p>Overdue</p>
          <p>0</p>
        </div>
        <div className='flex flex-col gap-2 h-[93%] overflow-y-auto'>
          {clients.slice(0, 10).map((client, index) => (
            <Card
              key={index}
              clientName={client.clientName}
              description={client.description}
              progress={client.progress}
              imgInfo={client.imgInfo}
              date={client.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
