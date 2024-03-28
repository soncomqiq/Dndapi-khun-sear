import React, { useEffect } from 'react'
import { dndListServices, dndDetailServices } from '@/services'
import { useForm } from 'react-hook-form'
import { useDndListStore } from '@/store/dndList'
import { key } from 'localforage'
import { IdndDetailResponse } from '@/interface/dndDetail'


const useSearchForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { setfetchDndList, fetchDnd, setDndList } = useDndListStore()

    const keyword = watch("keyword")
    const type = watch("type")
    const size = watch("size")

    const callData = async () => {
        setfetchDndList({
            data: [],
            loading: true,
            error: null,
        })
        const responseList = await dndListServices.getdndList()
        const dndList = []


        if (responseList.status === 200) {
            const responseResults = responseList.data?.results || []
            for (const dnd of responseResults) {
                const response = await dndDetailServices.getdndDetail(dnd.index)
                const dndData = response.data

                if (dndData) {
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



            }
            setfetchDndList({
                data: dndList,
                loading: false,
                error: null,
            })
            const data = filterdnd(dndList, keyword, type, size)
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

    const filterdnd = (
        dndList: IdndDetailResponse[],
        keyword: string,
        type: string,
        size: string,
    ) => {
        const keywordFilter = dndList.filter((item) => item.name.includes(keyword))
        const typeFilter = type !== "all types" ? keywordFilter.filter((item) => item.type.includes(type)) : keywordFilter
        const sizeFilter = size !== "all size" ? typeFilter.filter((item) => item.size.includes(size)) : typeFilter
        return sizeFilter
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

    useEffect(() => {
        const data = filterdnd(fetchDnd.data, keyword, type, size)
        setDndList({
            data: data,
            loading: false,
            error: null,
        })

    }, [keyword, type, size])


    return {
        fieldKeyword: register("keyword"),
        fieldtype: register("type"),
        fieldsize: register("size"),
    }
}

export { useSearchForm }