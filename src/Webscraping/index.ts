import puppeteer from 'puppeteer'
import { ScrapLocation } from '../Controller/ScrapLocation'

const bigBoyURL = 'https://www.bigboygames.com.br/mario-kart-8-deluxe-switch-2912-p989541'
const amazonURL = 'https://www.amazon.com.br/Mario-Kart-8-Deluxe-Switch/dp/B01N1037CV/ref=sr_1_1?keywords=mario+kart+8&qid=1653966926&sprefix=%2Caps%2C164&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147'

const scrapLocation = new ScrapLocation()

async function configuration(game_url: string) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({width: 1366, height: 768})
    await page.goto(game_url)
    return page
}


export async function startTracking() {
    scrapLocation.bigBoyGames(await configuration(bigBoyURL))
    scrapLocation.Amazon(await configuration(amazonURL))
}