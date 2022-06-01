import Email from "../../utils/Email"

export async function BigBoyGames(page: any) {

    const price = await page.evaluate(() => {
        let priceSpan: any = document.querySelector("#info_preco")
        let children = priceSpan?.children[1].innerText
        children = children.slice(3).replace(',', '.')
        return Number(children)
    })
    if(price < 280) {
        const screenshot = await page.screenshot({
            encoding: 'base64',
        })
        new Email(screenshot)
    }
}