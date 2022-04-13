import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
const UserMessage = () => {
    return (
        <div className='message'>
            <div>
                <span>
                    <BsEnvelope />
                    <div className="mCount">5</div>
                </span>
            </div>
            <div className="messages show">
                <ul>
                    <li>
                        <a href="#" target='_blank'>
                            Zihadul send a Email
                        </a>
                        <div className="nDelete">
                            <FaTrash />
                        </div>
                    </li>
                    <li>
                        <a href="#" target='_blank'>
                            Zihadul send a Email
                        </a>
                        <div className="nDelete">
                            <FaTrash />
                        </div>
                    </li>
                    <li>
                        <a href="#" target='_blank'>
                            Zihadul send a Email
                        </a>
                        <div className="nDelete">
                            <FaTrash />
                        </div>
                    </li>
                    <li>
                        <a href="#" target='_blank'>
                            Zihadul send a Email
                        </a>
                        <div className="nDelete">
                            <FaTrash />
                        </div>
                    </li>
                    <li>
                        <a href="#" target='_blank'>
                            Zihadul send a Email
                        </a>
                        <div className="nDelete">
                            <FaTrash />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserMessage;