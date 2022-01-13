const Nav = (props) => {
    const { products_count, onReset, onAdd } = props;
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container justify-content-center justify-content-lg-start">
                <span className="navbar-brand mb-0 h1">
                    Products Chosen: <span className="badge bg-primary">{products_count}</span>
                    <button className='btn btn-success' style={{ marginLeft: '15px' }} onClick={onAdd}>Add</button>
                    <button className='btn btn-warning' style={{ marginLeft: '15px' }} onClick={onReset}>Reset</button>
                </span>
            </div>
        </nav>
    );
}

export default Nav;