import  puppeteer from 'puppeteer'

const gameUrl = 'https://www.bigboygames.com.br/mario-kart-8-deluxe-switch-2912-p989541'

async function configuration() {
    if(!gameUrl) {
        console.log('Aguardando URL para busca de preço')
        return
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(gameUrl);

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