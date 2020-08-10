import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './inventory.css'

import Hint from './hint';
import { Modal } from 'react-bootstrap';
import QuestInfo from './quest-info';
import { loadData } from '../data/save-data';

import CaptionImage from './caption-image';
import BackpackClosed from '../assets/images/bp.png';
import BackpackOpen from '../assets/images/bpo.png';
import WarpWhistle from '../assets/images/warp-whistle.png';
import MusicBox from '../assets/images/music-box.png';
import Map from '../assets/images/map.png';


export default () => {

    const [open, setOpen] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
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
    const onQuestInfoClicked = () => { setShowInfo(true) }
    const onQuestInfoClosed = () => { setShowInfo(false) }


    const renderQuestInfoModal = () => {
        return (
            <Modal style={{ color: 'black' }} show={showInfo} onHide={onQuestInfoClosed}>
                <Modal.Header closeButton>
                    <Modal.Title>Quest Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <QuestInfo />
                </Modal.Body>
            </Modal>
        )
    }
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
                <CaptionImage image={Map} caption="Info" altText="Quest Info" onClick={onQuestInfoClicked} />
                <button>
                </button>
            </div>
        );
    }

    const iconStyle = { width: '48px', height: '48px' };
    return (
        <div className="inventory-wrapper">
            {renderQuestInfoModal()}
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
        </div>
    );
}