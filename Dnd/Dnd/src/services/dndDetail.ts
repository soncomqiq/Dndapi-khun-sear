import axios from "axios"
import { dnd_BASE_URL } from '@/utils/constant'
import { IdndDetailResponse } from '@/interface/dndDetail'

interface IGetdndDetailResponse {
    status: number | undefined,
    data: IdndDetailResponse,
}

export const dndDetailServices = {
    getdndDetail: async (name: string): Promise<IGetdndDetailResponse> => {
        const response = await axios.get(`${dnd_BASE_URL}/monsters/${name}`)
        return response

    }
}