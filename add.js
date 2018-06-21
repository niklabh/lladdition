const List = require('./List')
const reverse = require('./reverse')

const add = (list1, list2) => {
  const list = new List()
  let carry = 0

  reverse(list1)
  reverse(list2)

  let ctr1 = list1.head
  let ctr2 = list2.head

  while (ctr1 || ctr2) {
    const data = (ctr1 ? ctr1.data : 0) + (ctr2 ? ctr2.data : 0) + carry

    list.add(data % 10)
    carry = Math.floor(data / 10)

    if (ctr1) {
      ctr1 = ctr1.next
    }

    if (ctr2) {
      ctr2 = ctr2.next
    }
  }

  if (carry) {
    list.add(carry)
  }

  reverse(list1)
  reverse(list2)

  return list
}

if (require.main === module) {
  const l1 = new List()
  const l2 = new List()

  l1.add(4)
  l1.add(3)
  l1.add(2)
  l1.add(9)

  l2.add(8)
  l2.add(7)
  l2.add(6)
  l2.add(1)

  const l = add(l1, l2)

  l1.display()
  l2.display()
  l.display()
}

module.exports = add
