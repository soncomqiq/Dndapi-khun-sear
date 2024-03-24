
import SearchForm from '@/components/searchForm'
import { useDndListStore } from '@/store/dndList'
import DndCard from '@/components/dndCard'


const HomePage = () => {
    const { dnd } = useDndListStore()

    console.log(dnd)

    return (
        <div className='m-[auto]'>
            <div className=' '>
                <img src='/image/DnD.png' className='max-h-[120px] mt-[50px]' />
            </div>
            <SearchForm />
            <div className='grid grid-cols-4 gap-[20px] mt-[50px]'>
                {dnd.data?.map((item) => {
                    return <DndCard data={item} />
                })}
            </div>
        </div>
    )
}

export default HomePage