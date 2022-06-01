import { Sites } from "../../db/model/Sites"
import Email from "../../utils/Email"

export async function Amazon(page: any) {
    const { dataValues:  { gamePrice } }: any = await Sites.findOne({ where: {site: 'Amazon'}})
    
    const price = await page.evaluate(() => {
        const XPath = '//div[@id="corePrice_feature_div"]/div/span'
        const priceSpan: any = document.evaluate(XPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        let children = priceSpan.innerText
        if(children) {
            children = children.slice(2, 8).replace(',', '.')
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