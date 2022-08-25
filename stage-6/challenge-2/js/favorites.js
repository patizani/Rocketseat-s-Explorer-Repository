//classe que vai conter a lógica dos dados
//como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
  }
}

//classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    console.log(this.root)

    this.update()
  }

  update() {
    this.removeAllTr()

    load(){}
    const entries = [
      {
      login: 'patizani',
      name: "Patrícia Zanirati",
      public_repos: '76',
      followers: '120000'
      },
      {
      login: 'diego3g',
      name: "Diego Fernandes",
      public_repos: '76',
      followers: '120000'
      }
    ]

    entries.forEach( user => {
      console.log(user)
      })
  }

  createRow() {

    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="user">
      <img src="https://github.com/patizani.png" alt="">
      <a href="https://github.com/patizani" target="_blank">
        <p>Patrícia Zanirati</p>
        <span>patizani</span>
      </a>
    </td><!--para criar a coluna no body-->
    <td class="repositories">
      76
    </td>
    <td class="followers">
      9589
    </td>
    <td>
      <button class="remove">&times;</button>
    </td>`

    return tr
  }

  removeAllTr() {
    const tbody = this.root.querySelector('table tbody')

    console.log(tbody.querySelectorAll('tr'))
    tbody.querySelectorAll('tr')
      .forEach((tr) => {
        console.log(tr)
        tr.remove()
      })
  }
}