import Email from "../../utils/Email"

export async function Amazon(page: any) {

    const price = await page.evaluate(() => {
        const XPath = '//div[@id="corePrice_feature_div"]/div/span'
        const priceSpan: any = document.evaluate(XPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        let children = priceSpan.innerText
        children = children.slice(2, 8).replace(',', '.')
        return Number(children)
    })
    if(price < 280) {
        const screenshot = await page.screenshot({
            encoding: 'base64',
        })
        new Email(screenshot)
    }
}