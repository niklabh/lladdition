const List = require('./List')

// reversal visualisation

//    p    c    n
//    |    |    |

// -> 2 -> 3 -> 4 ->

//   p    c    n
//   |    |    |

// - 2 -> 3    4 ->

//   p    c    n
//   |    |    |

// - 2 <- 3    4 ->

//         p   c   n
//         |   |   |

// - 2 <- 3    4 ->

const reverse = (list) => {
  const head = list.head
  let prev, curr, next

  if (!head || !head.next) {
    return head
  }

  curr = head
  next = curr.next

  while (curr) {
    curr.next = prev

    prev = curr
    curr = next

    if (curr) {
      next = curr.next
    }
  }

  list.head = prev
}

module.exports = reverse

if (require.main === module) {
  const l = new List()

  l.add(4)
  l.add(3)
  l.add(2)
  l.add(1)

  l.display()
  reverse(l)
  l.display()
}
