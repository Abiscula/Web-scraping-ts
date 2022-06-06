import puppeteer from 'puppeteer'
import { Amazon } from '../Controller/Sites/Amazon'
import { BigBoyGames } from '../Controller/Sites/bigBoyGames'
import { getGameURL } from '../utils/getGameURL'

async function configuration(siteName: string) {
    const gameURL = getGameURL(siteName)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    
    await page.setViewport({ width: 1366, height: 768 })
    await page.goto(await gameURL)
    browser.close()
    return page
}

export function startScraping() {
    setInterval(async () => {
        BigBoyGames(await configuration('BigBoyGames'))
        Amazon(await configuration('Amazon'))

    }, Math.floor(Math.random() * (40000 - 30000)) + 30000)
}
