import './Grid.css';

export const Grid = (props) => {
    return (
        <div className={`Grid ${props.className || 'main'}`}>
            {props.children}
        </div>
    )
}

export const SideGrid = (props) => {
    return <Grid {...props} className="side" />
}
