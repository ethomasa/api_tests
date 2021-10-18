class Page {
    constructor(url) {
        this.url = url
    }
    open() {
        console.log('Opening page', this.url)
    }
    refresh() {
        console.log('refreshing...', this.url)
    }

}

class ContactPage extends Page{

    constructor(url, title, header) {
        super(url)
        this.title = title
        this.title = header


}
open() {
    console.log('Opening page', this.url, 'with title', this.title)
  }
  get loginBtn() {
    console.log('login btn selector')
  }

}
/*const p1 = new Page('http://automationbro.com');
console.log(p1.url)

p1.open()
p1.refresh()*/

const p2 = new Page('http://google.com')
console.log(p2.url)
p2.open()
p2.refresh()

const contact = new ContactPage('http://automationbro1.com/contact', 'Contact Page', 'header22')
contact.open()
contact.loginBtn()