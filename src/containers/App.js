import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://my.api.mockaroo.com/robots.json?key=689f73b0')
        .then(response => response.json())
        .then(robots => {this.setState({robots: robots.filter(robot => robot.email.length <= 27)})})
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter( 
            robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase())
            })

            return !robots.length ?
            <div className='vh-100 dt w-100'> 
            <h1 className="dtc v-mid tc">Loading</h1>
            </div>:
            (
            <div className='tc'>
                <h1 className = 'f1 mb1 mt2 pa2' >RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundry>                
                </Scroll>
            </div>
        )
    }
}

export default App;