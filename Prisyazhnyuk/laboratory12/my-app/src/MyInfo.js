import React from "react";
import './MyInfo.css'
class App extends Component {

 <h2>Famous people</h2>
   
state={
people:[
    <Name={<h1>'Никола Тесла'</h1>} year born={'1856'} specialization={' изобретатель в области электротехники и радиотехники'}/>
<a href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D0%BB%D0%B0,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0" style="text-align: center"><img src="https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D0%BB%D0%B0,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0" alt="Foto"></a>
    <Name={<h1>'Илон Маск'</h1>} year born={'1917'} specialization={'предприниматель, изобретатель, инженер и миллиардер.'} />
<a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D0%BA,_%D0%98%D0%BB%D0%BE%D0%BD" class="title-lecture" style="text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/2019-06-11-tesla-shareholder-meeting-elon-musk.jpg/274px-2019-06-11-tesla-shareholder-meeting-elon-musk.jpg" alt="Foto"></a>  
    <Name={<h1>'Лэй Цзюнь'</h1>} year born={'1969'} specialization={'основатель и генеральный директор компании Xiaomi. Миллиардер'} />
<a href="https://ru.wikipedia.org/wiki/%D0%9B%D1%8D%D0%B9_%D0%A6%D0%B7%D1%8E%D0%BD%D1%8C" class="title-lecture" style="text-align: center"><img src="https://24tv.ua/resources/photos/news/640x360_DIR/201807/999224.jpg?202004134347" alt="Foto"></a>
],
pageTitle :'React components'
}
changeTitleHandler = (newTitle) =>{
this.setState({
pageTitle: newTitle
})
}
onChangeName (name, index){
const people = this.state.people[index]
people.name = name
const people = [...this.state.people]
people[index] = people
this.setState({people})
}
render() {
let people = null

 people = this.state.people.map(( people, index) =>{
return(
<People 
key={index}
name={people.name}
year={people.year}
specialization={people.specialization}
onChangeTitle={this.changeTitleHandler.bind(this, people.name)}
onChangeName={event => this.onChangeName(event.target.value,
index)}
/>
)
})
return (
<div className="App">
<h2>{this.state.pageTitle}</h2>
<div style={{
paddingTOP: '60px'
}}>
{people}
</div>
</div>
);
}
}
export default App;
<input 
type="text"
onChange={props.onChangeName}
value={props.name}
className={inputClasses.join(' ')}
/>
<button onClick={props.onChangeTitle}>Up</button>
</div>
);
}
}
export default App;