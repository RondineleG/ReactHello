import React from 'react';
import { Grid, Row } from 'react-bootstrap';

const layout = (props) => {
    return (
        <Grid>
            <Row>
                Teste
            </Row>
            <main>
                {props.children}
            </main>
        </Grid>
    )
}

export default layout;