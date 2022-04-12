import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
const UserMessage = () => {
    return (
        <div className='messages'>
            <div>
                <span>
                    <BsEnvelope />
                    <div className="nCount">5</div>
                </span>
            </div>
        </div>
    );
};

export default UserMessage;