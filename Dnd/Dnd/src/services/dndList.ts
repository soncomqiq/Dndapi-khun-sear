import axios from "axios"
import { dnd_BASE_URL } from '@/utils/constant'
import { IdndListResponse } from '@/interface/dndList'
import { handleResponse, IResponse } from '@/utils/handleresponse'

interface IGetdndListResponse extends IResponse {
    status: number | undefined,
    data?: IdndListResponse,
}

export const dndListServices = {
    getdndList: async (): Promise<IGetdndListResponse> => {
        try {
            const response = await axios.get(`${dnd_BASE_URL}/monsters`)
            return handleResponse.success(response)
        } catch (error: any) {

            return handleResponse.error(error)
        }




    }
}