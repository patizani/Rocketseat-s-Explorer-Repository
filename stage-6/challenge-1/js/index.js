import { Router } from './router.js'

const router = new Router()
router.add('/','/pages/home.html', '/images/mountains-universe-1.png')
router.add('/index.html','/pages/home.html', 'images/mountains-universe-1.png')
router.add('/universo','/pages/universo.html', 'images/mountains-universe-2.png')
router.add('/exploracao','/pages/exploracao.html', 'images/mountains-universe-3.png')
router.add(404,'/pages/404.html','images/mountains-universe-404.jpg')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()