import React, { useEffect } from 'react'
import { dndListServices, dndDetailServices } from '@/services'
import SearchForm from '@/components/searchForm'
const HomePage = () => {
    const callData = async () => {
        const data = await dndDetailServices.getdndDetail("adult-black-dragon")
        console.log('data', data.data)
    }
    useEffect(() => {
        callData()

    }, [])
    return (
        <div className='m-[auto]'>
            <div className=' '>
                <img src='/image/DnD.png' className='max-h-[120px] mt-[50px]' />
            </div>
            <SearchForm />
        </div>
    )
}

export default HomePage