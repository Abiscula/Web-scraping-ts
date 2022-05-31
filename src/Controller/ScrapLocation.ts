import Email from "../utils/Email"

export class ScrapLocation {

    async bigBoyGames(page: any) {

        const price = await page.evaluate(() => {
            let priceSpan: any = document.querySelector("#info_preco")
            let children = priceSpan?.children[1].innerText
            children = children.slice(3).replace(',', '.')
            return Number(children)
        })
        if(price < 280) {
            const screenshot = await page.screenshot({
                encoding: 'base64',
            });
            console.log('end')
            new Email(screenshot)
        }
    }

    async Amazon(page: any) {

        const price = await page.evaluate(() => {
            const XPath = '//div[@id="corePrice_feature_div"]/div/span'
            const priceSpan: any = document.evaluate(XPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
            let children = priceSpan.innerText
            children = children.slice(2, 8).replace(',', '.')
            return Number(children)
        })
        console.log(price)
        if(price < 320) {
            const screenshot = await page.screenshot({
                encoding: 'base64',
            });
            console.log('end')
            new Email(screenshot)
        }
    }
}