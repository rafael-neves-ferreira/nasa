import axios from "axios";

const api = axios.create({
    baseURL: "https://cafest-back.dev-rafael-ferreira.com/api/"
})

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const response = await api.get('cupons/verify', { params: { code: req?.query?.code } })

        if (response.status !== 200) {
            return res.status(response.status).end()
        }
        return res.status(200).json(response.data)
    } else {
        return res.status(405).end()
    }
}