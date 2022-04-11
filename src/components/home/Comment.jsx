import React from 'react';
import {BsTrash} from 'react-icons/bs'
const Comment = () => {
    return (
        <div className="comments">
         <div className="main-reply-comment">
             <div className="image-comment-time-name">
             <img src="https://i.ibb.co/WpVNgJc/react-1.jpg" alt="" />
             <div className="name-time-comment">
                 <div className="name-time">
                     <h4>Zihadul Islam</h4>
                     <span>10 days ago</span>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, obcaecati!</p>
                 <div className="replay-btn">
                     <button>Replay</button>
                 </div>
             </div>
             </div>
             <div className="action">
                 <BsTrash />
             </div>
         </div>
        </div>
    );
};

export default Comment;