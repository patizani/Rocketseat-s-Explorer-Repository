export class Router {
  routes = {};
  imgs = {}

  add(routeName, page, src) {
    this.routes[routeName] = page;
    this.imgs[routeName] = src
}
  
  route(event) {
    event = event || window.event
    event.preventDefault() //evita o padrão de redirecionamento

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname }  = window.location
    const route = this.routes[pathname] || this.routes[404]
    const img = new Image;
    img.src = this.imgs[pathname] || this.imgs[404];

    fetch(route)
    .then(data => data.text())
    .then(img.onload)
    .then(html => {
      document.querySelector('#app').innerHTML = html;

      setTimeout(() => {                    
        document.body.style.backgroundImage = `url("${img.src}")`;
    }, "10")
    })
  }

}