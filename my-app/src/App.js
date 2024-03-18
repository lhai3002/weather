import { InputText } from 'primereact/inputtext';
import './App.css';
import CreateTodo from './pages/CreateTodo';
import { TodoList } from './pages/TodoList';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

function App() {
  return (
    //   <Card className='w-25rem mx-auto justify-content-between'>
    //  <CreateTodo/>
    //  <TodoList/>
    //   </Card>
    <div className='grid'>
      <div className='col-8'>
        <div className='grid flex '>
          <div className='overflow-hidden col-8 p-0 flex justify-content-between border-round-xl bg-gray-600'>
            <div className='p-4'>
              <h1 className='m-0 text-xl'>Thời tiết Hà Nội</h1>
              <div className='my-2'>ádfdkjasfkdas</div>
              <div>ádfdkjasfkdas</div>
            </div>
            <div className='w-12rem '>
              <img style={{transform: "translateY(30px) scale(1.6)"}} className='w-20rem' src='/msp.svg' />
            </div>
          </div>
          <div className='p-0 col-4 flex flex-column align-items-center '>
           <div className='  w-7rem'>
           <Image className='block ' src='/aa.svg' />
           </div>
           <div className='font-bold text-5xl'>
            16c
           </div>
          </div>
        </div>
      </div>
      <div className='col-4'>
        dfdasf
      </div>
    </div>
  );
}

export default App;
