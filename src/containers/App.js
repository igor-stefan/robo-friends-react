import React, {Component} from 'react'
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
import { setSearchField, requestRobots } from '../actions.js'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount(){
       this.props.onRequestRobots();  
    }

    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filterRobots = robots.filter( 
            robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase())
            })

            return isPending ?
            <div className='vh-100 dt w-100'> 
            <h1 className="dtc v-mid tc">Loading</h1>
            </div>:
            (
            <div className='tc'>
                <h1 className = 'f1 mb1 mt2 pa2' >RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundry>                
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);