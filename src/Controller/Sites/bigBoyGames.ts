import { Sites } from "../../db/model/Sites"
import Email from "../../utils/Email"

export async function BigBoyGames(page: any) {
    const { dataValues:  { gamePrice } }: any = await Sites.findOne({ where: {site: 'BigBoyGames'}})

    const price = await page.evaluate(() => {
        let priceSpan: any = document.querySelector("#info_preco")
        let children = priceSpan?.children[1].innerText
        if(children) {
            children = children.slice(3).replace(',', '.')
            return Number(children)
        } else {
            children = 999.99
            return children
        }
    })
    if(price <= gamePrice) {
        const screenshot = await page.screenshot({
            encoding: 'base64',
        })
        new Email(screenshot)
    }
}