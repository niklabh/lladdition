const List = require('./List')

const recurse = (list, ctr1, ctr2) => {
  if (!ctr1 && !ctr2) {
    return 0
  }

  let carry = recurse(list, ctr1 && ctr1.next, ctr2 && ctr2.next)
  const data = (ctr1 ? ctr1.data : 0) + (ctr2 ? ctr2.data : 0) + carry

  list.add(data % 10)
  carry = Math.floor(data / 10)

  return carry
}

const add = (list1, list2) => {
  const list = new List()
  const carry = recurse(list, list1.head, list2.head)

  if (carry) {
    list.add(carry)
  }

  return list
}

if (require.main === module) {
  const l1 = new List()
  const l2 = new List()

  l1.add(4)
  l1.add(3)
  l1.add(2)
  l1.add(9)
  l1.add(3)
  l1.add(9)
  l1.add(2)

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
