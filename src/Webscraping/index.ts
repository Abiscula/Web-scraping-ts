import puppeteer from 'puppeteer'
import { Amazon } from '../Controller/Sites/Amazon'
import { BigBoyGames } from '../Controller/Sites/bigBoyGames'
import { getGameURL } from '../utils/getGameURL'

let interval = 30000

async function configuration(siteName: string) {
    const gameURL = getGameURL(siteName)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    
    await page.setViewport({ width: 1366, height: 768 })
    await page.goto(await gameURL)
    return page
}

export function startScraping() {
    setInterval(async () => {
        interval === 40000 ? interval = 30000 : interval += 1000
        
        BigBoyGames(await configuration('BigBoyGames'))
        Amazon(await configuration('Amazon'))

    }, interval)
}
