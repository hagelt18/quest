import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Hint from './hint';
import CaptionImage from './caption-image';
import './inventory.css'
import BackpackClosed from '../assets/images/bp.png';
import BackpackOpen from '../assets/images/bpo.png';
import WarpWhistle from '../assets/images/warp-whistle.png';
import MusicBox from '../assets/images/music-box.png';
import { loadData } from '../data/save-data';

export default () => {

    const [open, setOpen] = useState(false);
    const history = useHistory();

    const openInventory = () => {
        setOpen(true);
    }

    const closeInventory = () => {
        setOpen(false);
    }

    const data = loadData();

    const onWarpWhistleClicked = () => { history.push('/help') };
    const onMusicBoxClicked = () => { history.push('/piano') };

    const renderInventoryContainer = () => {
        if (!open) {
            return null;
        }

        return (
            <div className="inventory-content">
                <CaptionImage image={WarpWhistle} caption="Help" altText="Get Help" onClick={onWarpWhistleClicked} />
                <Hint />
                {data.instrumentUnlocked && (
                    <CaptionImage image={MusicBox} caption="Piano" altText="Piano" onClick={onMusicBoxClicked} />
                )}
                <button>
                </button>
            </div>
        );
    }

    const iconStyle = { width: '48px', height: '48px' };
    return (
        <div className={`inventory ${!open ? 'closed' : ''}`}>
            {renderInventoryContainer()}
            <div className="inventory-backpack" >
                {open ?
                    <img
                        src={BackpackOpen}
                        alt="Backpack Open"
                        style={iconStyle}
                        onClick={closeInventory}
                    />
                    :
                    <img
                        src={BackpackClosed}
                        alt="Backpack Closed"
                        style={iconStyle}
                        onClick={openInventory}
                    />
                }
            </div>
        </div>
    );
}