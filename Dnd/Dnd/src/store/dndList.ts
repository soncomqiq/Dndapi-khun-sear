import { create } from 'zustand'
import { IdndDetailResponse } from '@/interface/dndDetail'

const initStore = {
    dnd: {
        data: [],
        loading: false,
        error: null,
    },
    fetchDnd: {
        data: [],
        loading: false,
        error: null,
    }
}

type dndtype = {
    data: IdndDetailResponse[],
    loading: boolean,
    error: null | any,
}

type useDndListStoretype = {
    dnd: dndtype,
    fetchDnd: dndtype,
    setDndList: (value: dndtype) => void,
    setfetchDndList: (value: dndtype) => void,
    clearDnd: () => void,
}

export const useDndListStore = create<useDndListStoretype>((set) => ({
    ...initStore,
    setDndList: (value: dndtype) => set({ dnd: value }),
    setfetchDndList: (value: dndtype) => set({ fetchDnd: value }),
    clearDnd: () => set({ ...initStore }),
}))
