import Axios from 'axios'
import React, { Component } from 'react'

export default class covid extends Component {

    state={
        datos:[],
        ultimoelemento:''
    }

    componentDidMount=async()=>{
        this.obtenerdatos()
    }

    obtenerdatos=async()=>{
        const res = await Axios.get('https://api.covid19api.com/total/dayone/country/Colombia')
        console.log(res);
        this.setState({datos:res.data})
        this.setState({ultimoelemento:this.state.datos[this.state.datos.length-1]})
        console.log(this.state.ultimoelemento);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <i className="fas fa-head-side-cough fa-7x mt-3"></i>
                <h1 className="mx-5 mt-5"> reporte covid-19 </h1>
                </div>
                <table className="table border mt-4">
                    <thead className="bg-white text-center">
                        <tr>
                            <th scope="col">Pais <i className="fas fa-flag ml-3"></i></th>
                            <th scope="col">Contagiados <i className="fas fa-virus ml-3"></i></th>
                            <th scope="col">Recuperados <i className="fas fa-kiss-wink-heart ml-3"></i></th>
                            <th scope="col">Muertos <i className="fas fa-dizzy ml-3"></i></th>
                        </tr>
                    </thead>
                    <tbody className="font-weight-bold">
                        <tr>
                            <th>{this.state.ultimoelemento.Country}</th>
                            <td>{this.state.ultimoelemento.Confirmed}</td>
                            <td>{this.state.ultimoelemento.Recovered}</td>
                            <td>{this.state.ultimoelemento.Deaths}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
