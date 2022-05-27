import  puppeteer from 'puppeteer'

const url = 'https://www.bigboygames.com.br/mario-kart-8-deluxe-switch-2912-p989541'

async function configuration() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    return page
};


async function bigBoyGames(page: any) {

    const price = await page.evaluate(() => {
        let priceSpan: any = document.querySelector("#info_preco")
        let Children = priceSpan?.children[1].innerText
        return Children
    })
    console.log(price)
}

export async function startTracking() {
    const page = await configuration();
    
    setInterval(() => {
        bigBoyGames(page);
    }, 30000)
}