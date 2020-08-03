import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hint from './hint';
import CaptionImage from './caption-image';
import './inventory.css'
import BackpackClosed from '../assets/images/bp.png';
import BackpackOpen from '../assets/images/bpo.png';
import WarpWhistle from '../assets/images/warp-whistle.png';
import MusicBox from '../assets/images/music-box.png';

export default () => {

    const [open, setOpen] = useState(false);

    const openInventory = () => {
        setOpen(true);
    }

    const closeInventory = () => {
        setOpen(false);
    }

    const renderInventoryContainer = () => {
        if (!open) {
            return null;
        }

        return (
            <div className="inventory-content">
                <Link to={`/help`}>
                    <CaptionImage image={WarpWhistle} caption="Help" altText="Get Help" />
                </Link>
                <Hint />
                <Link to={`/piano`}>
                    <CaptionImage image={MusicBox} caption="Piano" altText="Piano" />
                </Link>
                <button>
                </button>
            </div>
        );
    }

    return (
        <div className="inventory">
            <div className="inventory-backpack">
                {open ?
                    <img
                        src={BackpackOpen}
                        alt="Backpack Open"
                        style={{ width: '48px', height: '48px' }}
                        onClick={closeInventory}
                    />
                    :
                    <img
                        src={BackpackClosed}
                        alt="Backpack Closed"
                        style={{ width: '48px', height: '48px' }}
                        onClick={openInventory}
                    />
                }
            </div>
            {renderInventoryContainer()}
        </div>
    );
}