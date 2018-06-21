class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class List {
  constructor () {
    this.head = null
  }

  add (data) {
    const node = new Node(data)

    node.next = this.head
    this.head = node
  }

  remove () {
    if (!this.head) {
      return null
    }

    const data = this.head.data

    this.head = this.head.next

    return data
  }

  traverse (func) {
    let ptr = this.head

    while (ptr) {
      func(ptr.data)
      ptr = ptr.next
    }
  }

  display () {
    let str = ''

    this.traverse((data) => { str += `${data}->` })

    console.log(str)
  }
}

module.exports = List

if (require.main === module) {
  const ll = new List()

  ll.add(4)
  ll.add(3)
  ll.remove()
  ll.add(2)
  ll.add(1)

  ll.display()

}
