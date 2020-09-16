let foo = 'bar'

{
  let foo = 'qux'
}

console.log(foo)

// it will print out bar due to the scope of the block