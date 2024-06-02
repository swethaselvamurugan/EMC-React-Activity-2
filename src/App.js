import Dog from "./components/dog.js"
import one from "./assets/images/dog-1.jpg"
import two from "./assets/images/dog-2.jpg"
import three from "./assets/images/dog-3.jpg"
import four from "./assets/images/dog-4.jpg"
import five from "./assets/images/dog-5.jpg"
import six from "./assets/images/dog-6.jpg"
import seven from "./assets/images/dog-7.jpg"
import eight from "./assets/images/dog-8.jpg"

var arr = [
  {
    name: "The Innocent Look",
    source: one
  },
  {
    name: "Julie's Rabbit Ears",
    source: two
  },
  {
    name: "Big Eyed Buggy",
    source: three
  },
  {
    name: "The Saint Doggo",
    source: four
  },
  {
    name: "The Saint Doggo",
    source: five
  },
  {
    name: "Big Eyed Buggy",
    source: six
  },
  {
    name: "Julie's Rabbit Ears",
    source: seven
  },
  {
    name: "The Innocent Look",
    source: eight
  }
]

function App(){
  return(
  <>
    {
      arr.map(function(item){
        return(
          <Dog source={item.source} name={item.name}></Dog>
        )
      })
    }
  </>
  )
}

export default App