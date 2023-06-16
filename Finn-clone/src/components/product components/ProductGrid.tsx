
const ProductGrid = () => {

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: '1fr',
        gap: '22px'

    }

     const productBoxStyles = {
        backgroundColor: 'lightblue',
        height: '200px',
        border: '1px solid grey',
        borderRadius: '10px'
    }


    return(
        <section>
        <h1>Populære annonser</h1>
        <div style={gridStyles}>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
            <div>
                <div style={productBoxStyles}>
                    photo

                </div>
                <div>
                    <p>place</p>
                    <h3>product desc</h3>
                    <p>optional 'total price'</p>

                </div>
            </div>
        </div>
        </section>
    )
}

export default ProductGrid;