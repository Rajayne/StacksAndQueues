# StacksAndQueues

### Queues

1. Make a Queue class.
2. Create methods for:

   - enqueuing
   - dequeuing
   - peeking
   - checking if queue is empty.

3. Throw an error when attempting to dequeue from an empty queue.

### Stacks

1. Make a Stack class
2. Create methods for:

   - pushing
   - popping
   - peeking
   - checking if stack is empty.

3. Throw an error when attempting to pop from an empty stack.

## Further Study

### Composition

1. Use a LinkedList class internally to manage stacks or queues to avoid duplicate code:

```
class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
    this.\_list = new LinkedList();
  }
}
```

2. Make a new version using an array instead of a linked list.
3. Which do you prefer?

### Deque

1. Build a deque using a doubly-linked list.
2. Include all of the expected methods for a deque.

## Challenges

For these challenges, use either a stack or a queue (or a combination of both!)

### Browser Back/Forward

Design a browser back/forward system using two stacks to visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, then forward again to EBay, then onto Apple, etc).

Write pseudo-code for this.

### String Reversal

Write a function that reverses a string by handling one letter at a time. You cannot use an array, nor can you use any string-reversal built-in method.

### Balanced Brackets

Write a function that is passed a string which can contain any text, including different kinds of brackets: `{} [] ()`.

It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

> Balanced Example:

```
hello (no brackets)
(hi) [there]
(hi [there])
(((hi)))
```

> Imbalanced Example:

```
(hello (bracket left open at end)
(nope] (wrong type closed)
((ok) [nope)] (closed out of order)
```

### Josephus Survivor

This is a classic algorithm problem, based on a Biblical-era tale.

Imagine a group of 10 people in a circle, numbered 1 to 10. If we started at the first person (#1) and killed every three people, it would look like this:

```
1  2  3  4  5  6  7  8  9  10
      !        !        !
```

This continues, though, looping around again, starting with where we left of at #10 (we’ll mark the freshly-removed as red/! and the previously-removed in striked-out gray/X):

```
1  2  3  4  5  6  7  8  9  10
   !  X        X  !     X
```

And again, starting where that left off, at #8, and continuing:

```
1  2  3  4  5  6  7  8  9  10
!  X  X        X  X  !  X

1  2  3  4  5  6  7  8  9  10
X  X  X     !  X  X  X  X

1  2  3  4  5  6  7  8  9  10
X  X  X     X  X  X  X  X  !
```

At this point, only #4 remains, so that person would be our “survivor”.

Write an algorithm that, given a number of people, and the “skip”, which person will be the survivor.

```
find_survivor(10, 3) // 4
```

There are different ways you can solve this, but a good solution uses one of the structures covered in this exercise.

> **Hint:** Use a linked list (or DLL). Make the list “circular”—last item points back to the first item— will allow traversing, removing items until one remains.

### Calculator

Build a “polish notation calculator”.

Polish notation is a different way to write an artithmetic expression. Instead of writing **1 + 2 \* 3**, as we would in “infix” style, it is written with the operators to the left of their arguments as **+ 1 \* 2 3**. You can read a polish notation expression backwards to see exactly what it does — in this case, multiply 2 times 3, and add that result to 1.

Example Problems:

```
calc("+ 1 2") # 1 + 2 == 3

calc("_ 2 + 1 2") # 2 _ (1 + 2) == 6

calc("+ 9 _ 2 3") # 9 + (2 _ 3) == 15

calc("- 1 2") # 1 - 2 == -1

calc("- 9 _ 2 3") # 9 - (2 _ 3) == 3

calc("/ 6 - 4 2") # 6 / (4 - 2) == 3
Want a hint?
```

> **Hint:** Turn the expression into a string and work through it backwards.

### Hacker Rack Challenges

Pick and work on challenges from HackerRank:

[Queues](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=queues)

[Stacks](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=stacks)
