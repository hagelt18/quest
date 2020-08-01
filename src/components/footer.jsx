import React from 'react';
import { Link } from 'react-router-dom';
import Hint from './hint';
import { Container, Navbar, Grid, Row, Col, Footer } from 'react-bootstrap';

export default () => {

    const renderContent = () => {
        return (
            <Container>
                <Link to={`/help`}><button>☎</button></Link>
                <Hint />
            </Container>
        );
    }

    return (
        <footer className='footer mt-auto py-3 bg-dark text-white'>
            {renderContent()}
        </footer>
    )
}