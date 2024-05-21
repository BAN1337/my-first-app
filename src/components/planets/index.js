import React, {Fragment, useState, useEffect} from 'react'
import Planet from './planet'
import Form from './form'

async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data
}

/*const clickOnPlanet = (name) => {
    console.log(`Um click no Planeta ${name}`)
}*/

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

    const clickOnPlanet = (name) => {
        console.log(`Um click no Planeta ${name}`)
    }

    const removeLast = () => {
        let new_planets = [...planets]
        new_planets.pop()
        setPlanets(new_planets)
    }

    const duplicateLast = () => {
        let last_planet = planets[planets.length - 1]
        setPlanets([...planets, last_planet])
    }
    
    return (
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={removeLast}>Remove Last</button>
            <button onClick={duplicateLast}>Duplicate Last</button>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr/>
            {planets.map((planet, index) =>
                <Planet 
                id = {planet.id}
                name = {planet.name}
                description = {planet.description}
                link = {planet.link}
                img_url = {planet.img_url}
                clickOnPlanet = {clickOnPlanet}
                title_with_underline = {planet.title_with_underline}
                gray = {planet.gray}
                key = {index}
                />
            )}
        </Fragment>
    )
}

/*class Planets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            planets: []
        }
    }

    componentDidMount(){
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    }

    clickOnPlanet = (name) => {
        console.log(`Um click no Planeta ${name}`)
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLast = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }
    
    render(){
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLast}>Duplicate Last</button>
                <hr/>
                {this.state.planets.map((planet, index) =>
                    <Planet 
                    id = {planet.id}
                    name = {planet.name}
                    description = {planet.description}
                    link = {planet.link}
                    img_url = {planet.img_url}
                    clickOnPlanet = {this.clickOnPlanet}
                    title_with_underline = {planet.title_with_underline}
                    gray = {planet.gray}
                    key = {index}
                    />
                )}
            </Fragment>
        )
    }
}*/

/*class Planets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            planets: [
                {
                    name : 'Mercúrio',
                    title_with_underline: true,
                    description: 'O planeta Mercúrio possui três recordes: é o mais rápido, o mais próximo do sol e o menor planeta do sistema solar. Mercúrio é o primeiro planeta do sistema solar, a contar a partir da proximidade com o Sol, distando-se em apenas 57,9 milhões de quilômetros da estrela em média.',
                    link: 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)',
                    img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg',
                    gray: true,
                    clickOnPlanet: clickOnPlanet
                },
                {
                    name: 'Plutão',
                    description: 'Plutão é um planeta anão que orbita o nosso sistema solar. Ele está localizado em uma região desse sistema chamada de Cinturão de Kuiper, em uma zona muito afastada do sol e que, portanto, apresenta uma baixíssima influência desse astro.',
                    img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/220px-Pluto_in_True_Color_-_High-Res.jpg',
                    gray: true,
                    clickOnPlanet: clickOnPlanet
                }
            ]
        }
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLast = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }
    
    render(){
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLast}>Duplicate Last</button>
                <hr/>
                {this.state.planets.map(planet =>
                    <Planet 
                    name = {planet.name}
                    title_with_underline = {planet.title_with_underline}
                    description = {planet.description}
                    link = {planet.link}
                    img_url = {planet.img_url}
                    gray = {planet.gray}
                    clickOnPlanet = {planet.clickOnPlanet}
                    />
                )}
            </Fragment>
        )
    }
}*/

/*const Planets = () => {
    return (
        <Fragment>
            <h3>Planet List</h3>
            <button>Show Message!</button>
            <hr/>
            <Planet name = 'Mercúrio'
            title_with_underline = {true}
            description = 'O planeta Mercúrio possui três recordes: é o mais rápido, o mais próximo do sol e o menor planeta do sistema solar. Mercúrio é o primeiro planeta do sistema solar, a contar a partir da proximidade com o Sol, distando-se em apenas 57,9 milhões de quilômetros da estrela em média.'
            link = 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)'
            img_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg'
            gray = {true}
            clickOnPlanet = {clickOnPlanet}
            />
            <hr/>
            <Planet name = 'Plutão'
            description = 'Plutão é um planeta anão que orbita o nosso sistema solar. Ele está localizado em uma região desse sistema chamada de Cinturão de Kuiper, em uma zona muito afastada do sol e que, portanto, apresenta uma baixíssima influência desse astro.'
            img_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/220px-Pluto_in_True_Color_-_High-Res.jpg'
            gray = {true}
            clickOnPlanet = {clickOnPlanet}
            />
        </Fragment>
    )
}*/

export default Planets