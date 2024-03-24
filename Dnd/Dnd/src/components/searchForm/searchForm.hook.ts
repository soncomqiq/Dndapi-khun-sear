import React, { useEffect } from 'react'
import { dndListServices, dndDetailServices } from '@/services'
import { useForm } from 'react-hook-form'
import { useDndListStore } from '@/store/dndList'
import { key } from 'localforage'


const useSearchForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { setfetchDndList, fetchDnd, setDndList } = useDndListStore()

    const keyword = watch("keyword")

    const callData = async () => {
        const responseList = await dndListServices.getdndList()
        const dndList = []
        setfetchDndList({
            data: [],
            loading: true,
            error: null,
        })

        if (responseList.status === 200) {
            const responseResults = responseList.data?.results || []
            for (const dnd of responseResults) {
                const response = await dndDetailServices.getdndDetail(dnd.index)
                const dndData = response.data
                if (dndData.image) {
                    dndList.push({
                        ...dndData, image: `https://www.dnd5eapi.co${dndData.image}`
                    })
                } else {
                    dndList.push({
                        ...dndData, image: `/image/unknow.webp`
                    })
                }


            }
            setfetchDndList({
                data: dndList,
                loading: false,
                error: null,
            })
            setDndList({
                data: dndList,
                loading: false,
                error: null,
            })

        } else {
            setfetchDndList({
                data: [],
                loading: false,
                error: responseList.error,
            })
        }
    }
    useEffect(() => {
        callData()

    }, [])

    useEffect(() => {
        const data = fetchDnd.data.filter((item) => item.name.includes(keyword))
        setDndList({
            data: data,
            loading: false,
            error: null,
        })

    }, [keyword])


    return {
        fieldKeyword: register("keyword")
    }
}

export { useSearchForm }