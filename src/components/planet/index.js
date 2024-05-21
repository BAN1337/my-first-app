import React, {useState, useEffect} from 'react'
import GrayImg from '../shared/gray_img'
import DescriptionWithLink from '../shared/gray_img/DescriptionWithLink'
import Form from './form'
import {useParams, useNavigate, Link, redirect} from 'react-router-dom'

async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = () => {

    const[satellites, setSatellites] = useState([])

    const [planet, setPlanet] = useState({})

    const [redirect, setRedirect] = useState(false)

    let {id} = useParams()
    let history = useNavigate();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        }, error => {
            setRedirect(true)
        })
    }, [])

    const goToHome = () => {
        history('/')
    }

    const addSatellite = (new_sattelite) => {
        setSatellites([...satellites, new_sattelite])
    }

    const clickOnPlanet = (name) => {
        console.log(`Um click no Planeta ${name}`)
    }

    let title
    if(planet.title_with_underline)
        title = <h4><u>{planet.name}</u></h4>
    else
        title = <h4>{planet.name}</h4>

    if(redirect)
        goToHome()

    return (
        <div onClick={() => (clickOnPlanet(planet.name))}>
            {title}
            <DescriptionWithLink description = {planet.description} link = {planet.link}/>
            <GrayImg img_url = {planet.img_url} gray={planet.gray}/>
            <h4>Satélites</h4>
            <hr/>
            <Form addSatellite = {addSatellite}/>
            <hr/>
            <ul>
                {satellites.map((satelite, index) =>
                    <li key={index}>{satelite.name}</li>
                )}
            </ul>
            <hr/>
            <Link to='/'>Voltar a listagem!</Link>
            <br/>
            <br/>
            <button type='button' onClick={goToHome}>Voltar a listagem!</button>
        </div>
    )
}

/*class Planet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            satellites: []
        }
    }

    componentDidMount(){
        getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }

    render(){
        let title
        if(this.props.title_with_underline)
            title = <h4><u>{this.props.name}</u></h4>
        else
            title = <h4>{this.props.name}</h4>

        return (
            <div onClick={() => this.props.clickOnPlanet(this.props.name)}>
                {title}
                <DescriptionWithLink description = {this.props.description} link = {this.props.link}/>
                <GrayImg img_url = {this.props.img_url} gray={this.props.gray}/>
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map((satelite, index) =>
                        <li key={index}>{satelite.name}</li>
                    )}
                </ul>
                <hr/>
            </div>
        )
    }
}*/


/*const Planet = (props) => {
    const names = ['a', 'b', 'c', 'd', 'e']

    let title
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            {title}
            <DescriptionWithLink description = {props.description} link = {props.link}/>
            <GrayImg img_url = {props.img_url} gray={props.gray}/>
            <hr/>
        </div>
    )
}*/

export default Planet