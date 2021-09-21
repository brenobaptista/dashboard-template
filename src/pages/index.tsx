import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'

const Home = (): JSX.Element => (
  <div className='text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 font-sans antialiased'>
    <div className='flex'>
      <Sidebar />
      <Wrapper />
    </div>
  </div>
)

export default Home
