import { Sites } from "../db/model/Sites"

export async function findGameInDB(siteName: string) {
    const { dataValues:  { gamePrice } }: any = await Sites.findOne({ where: {site: siteName}})
    return gamePrice
}