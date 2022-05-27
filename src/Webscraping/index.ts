import puppeteer from 'puppeteer'
import { ScrapLocation } from '../Controller/ScrapLocation'

const gameUrl = 'https://www.bigboygames.com.br/mario-kart-8-deluxe-switch-2912-p989541'
const sites = new ScrapLocation()

async function configuration() {
    if(!gameUrl) {
        console.log('Aguardando URL para busca de preço')
        return
    }
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({width: 1366, height: 768})
    await page.goto(gameUrl)
    return page
}


export async function startTracking() {
    const page = await configuration()
    
    setInterval(() => {
        sites.bigBoyGames(page)
    }, 30000)
}