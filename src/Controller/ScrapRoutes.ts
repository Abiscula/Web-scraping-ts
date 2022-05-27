import { Request, Response } from 'express';

export class ScrapRoutes {

    static getBigBoyUrl(req: Request, res: Response) {
        const { game_name, game_url, game_price } = req.body

        //criar lógica para salvar url no banco de dados

        return res.status(200).send(`${game_name} adicionado ao alerta de preços`)
    }

}