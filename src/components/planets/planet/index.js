import React, {useState, useEffect} from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/gray_img/DescriptionWithLink'
import { Link } from 'react-router-dom'
/*import Form from '../../planet/form'*/

/*async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}*/

const Planet = (props) => {

    /*const[satellites, setSatellites] = useState([])*/

    /*useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, [])*/

    /*const addSatellite = (new_sattelite) => {
        setSatellites([...satellites, new_sattelite])
    }*/

    let title
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            <Link to={`/planet/${props.id}`}>{title}</Link>
            <DescriptionWithLink description = {props.description} link = {props.link}/>
            <GrayImg img_url = {props.img_url} gray={props.gray}/>
            <hr/>
            {/*<h4>Satélites</h4>
            <hr/>
            <Form addSatellite = {addSatellite}/>
            <hr/>
            <ul>
                {satellites.map((satelite, index) =>
                    <li key={index}>{satelite.name}</li>
                )}
            </ul>
            <hr/>*/}
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