import PropTypes from 'prop-types'
import Button from './Button'
import AddTask from './AddTask'

const Header = (props) => {
    
  
    return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add'} onClick={props.onShow} />
    </header>
  )
}

Header.defaultProps = {
    title: 'TODO App'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header