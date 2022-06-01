import { Sites } from "../db/model/Sites";

export async function getGameURL(siteName: string) {
    const { dataValues:  { gameUrl } }: any = await Sites.findOne({ where: {site: siteName}})
    return gameUrl
}