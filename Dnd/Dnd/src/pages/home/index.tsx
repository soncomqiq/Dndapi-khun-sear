import React, { useEffect } from 'react'
import { dndListServices, dndDetailServices } from '@/services'

const HomePage = () => {
    const callData = async () => {
        const data = await dndDetailServices.getdndDetail("adult-black-dragon")
        console.log('data', data.data)
    }
    useEffect(() => {
        callData()

    }, [])
    return (
        <div>HomePage</div>
    )
}

export default HomePage