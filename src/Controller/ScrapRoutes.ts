import { Request, Response } from 'express';
import { Sites } from '../db/model/Sites';


export class ScrapRoutes {

    static async gameToSearch(req: Request, res: Response) {
        const { site, game_name, game_url, game_price } = req.body

        const db = await Sites.findAll({ where: {site: site}})
        if(db.length === 0) {
            await Sites.create({ site: site, gameName: game_name,  gameUrl: game_url, gamePrice: game_price })
        } else {
            await Sites.update(
                { gameName: game_name,  gameUrl: game_url, gamePrice: game_price },
                { where: { site: site } })
        }

        const selectAll: any = await Sites.findAll()
        console.log(selectAll.forEach((data: any) => console.log(data['dataValues'])))

        return res.status(200).send(`${game_name} adicionado ao alerta de preços`)
    }

}