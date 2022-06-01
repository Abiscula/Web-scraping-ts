import { Request, Response } from 'express';
import { Sites } from '../db/model/Sites';


export class ScrapRoutes {

    static async gameToSearch(req: Request, res: Response) {
        const { site, game_name, game_url, game_price } = req.body

        try {
            const db = await Sites.findAll({ where: {site: site}})
            if(db.length === 0) {
                await Sites.create({ site: site, gameName: game_name,  gameUrl: game_url, gamePrice: game_price })
            } else {
                await Sites.update(
                    { gameName: game_name,  gameUrl: game_url, gamePrice: game_price },
                    { where: { site: site } })
            }

            return res.status(200).json(db)
        }catch(err) {
            console.log(err)
            return res.status(400).json(err)
        }

    }

}