import puppeteer from 'puppeteer'
import { Amazon } from '../Controller/Sites/Amazon'
import { BigBoyGames } from '../Controller/Sites/bigBoyGames'


const bigBoyURL = 'https://www.bigboygames.com.br/mario-kart-8-deluxe-switch-2912-p989541'
const amazonURL = 'https://www.amazon.com.br/Mario-Kart-8-Deluxe-Switch/dp/B01N1037CV/ref=sr_1_1?keywords=mario+kart+8&qid=1653966926&sprefix=%2Caps%2C164&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147'
let interval = 30000

async function configuration(game_url: string) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 768 })
    await page.goto(game_url)
    return page
}

export function startScraping() {
    setInterval(async () => {
        interval === 40000 ? interval = 30000 : interval += 1000

        BigBoyGames(await configuration(bigBoyURL))
        Amazon(await configuration(amazonURL))

    }, interval)
}
