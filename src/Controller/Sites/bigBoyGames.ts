import Email from "../../utils/Email"
import { findGameInDB } from "../../utils/findGameInDb"

export async function BigBoyGames(page: any) {
    
    const gamePrice = await findGameInDB('BigBoyGames')

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