import React from 'react';
import { Link } from 'react-router-dom';
import Hint from './hint';
import { Container, Navbar, Footer } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

export default () => {

    const renderContent = () => {
        return (
            <Container>
                <Link to={`/help`}>
                    <button>
                        <FontAwesomeIcon color="cyan" size="3x" icon={faComment} />
                    </button>
                </Link>
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