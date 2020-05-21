
import React from "react";
import './MyInfo.css'
class App extends Component {

<h2>Famous people</h2>

    state={
        people:
            <Name={<h1>'Томас Эдисон'</h1>} year born={'1847'} specialization={' американский изобретатель и предприниматель'}/>
            <a href="https://ru.wikipedia.org/wiki/Эдисон,_Томас_Алва" style="text-align: center"><img src="https://ru.wikipedia.org/wiki/Эдисон,_Томас_Алва#/media/Файл:Thomas_Edison2-crop.jpg" alt="Foto"></a>
            <Name={<h1>'Альберт Эйнштейн'</h1>} year born={'1879'} specialization={' физик-теоретик, один из основателей современной теоретической физики.'} />
            <a href="https://ru.wikipedia.org/wiki/Эйнштейн,_Альберт" class="title-lecture" style="text-align: center"><img src="https://ru.wikipedia.org/wiki/Эйнштейн,_Альберт#/media/Файл:Einstein_1921_by_F_Schmutzer_-_restoration.jpg" alt="Foto"></a>
            <Name={<h1>'Исаак Ньютон'</h1>} year born={'1642'} specialization={' английский физик, математик, механик и астроном'} />
            <a href="https://ru.wikipedia.org/wiki/Ньютон,_Исаак" class="title-lecture" style="text-align: center"><img src="https://ru.wikipedia.org/wiki/Ньютон,_Исаак#/media/Файл:GodfreyKneller-IsaacNewton-1689.jpg" alt="Foto"></a>
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



