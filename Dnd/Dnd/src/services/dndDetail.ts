import axios from "axios"
import { dnd_BASE_URL } from '@/utils/constant'
import { IdndDetailResponse } from '@/interface/dndDetail'
import { IResponse, handleResponse } from "@/utils/handleresponse"



interface IGetdndDetailResponse extends IResponse {
    status: number | undefined,
    data?: IdndDetailResponse,
}

export const dndDetailServices = {
    getdndDetail: async (index: string): Promise<IGetdndDetailResponse> => {
        // const response = await axios.get(`${dnd_BASE_URL}/monsters/${name}`)
        // return response
        try {
            const response = await axios.get(`${dnd_BASE_URL}/monsters/${index}`)
            return handleResponse.success(response)
        } catch (error: any) {

            return handleResponse.error(error)
        }

    }
}