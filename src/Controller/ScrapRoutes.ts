import { Request, Response } from 'express';

export class ScrapRoutes {

    static gameToSearch(req: Request, res: Response) {
        const { site, game_name, game_url, game_price } = req.body

        //criar lógica para salvar url no banco de dados
        //site deve ser definido como PK
        

        return res.status(200).send(`${game_name} adicionado ao alerta de preços`)
    }

}