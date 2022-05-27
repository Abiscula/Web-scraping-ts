import Email from "../utils/Email"

export class ScrapLocation {

    async bigBoyGames(page: any) {

        const price = await page.evaluate(() => {
            let priceSpan: any = document.querySelector("#info_preco")
            let children = priceSpan?.children[1].innerText
            children = children.slice(3).replace(',', '.')
            return Number(children)
        })
        if(price < 320) {
            // await page.screenshot({ path: 'example.png' })
            const screenshot = await page.screenshot({
                encoding: 'base64',
            });
            console.log('end')
            new Email(screenshot)
        }
    }
}