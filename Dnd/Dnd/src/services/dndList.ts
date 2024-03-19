import axios from "axios"
import { dnd_BASE_URL } from '@/utils/constant'
import { IdndListResponse } from '@/interface/dndList'

interface IGetdndListResponse {
    status: number | undefined,
    data: IdndListResponse,
}

export const dndListServices = {
    getdndList: async (): Promise<IGetdndListResponse> => {
        const response = await axios.get(`${dnd_BASE_URL}/monsters`)
        return response

    }
}