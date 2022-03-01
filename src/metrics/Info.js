import React from "react";

function Info(props) {

    return(
        <div className="w-1/2 px-2 ml-2 rounded overflow-hidden shadow-md">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Info</div>
                <div><strong>Channel Title: </strong><span 
                className="text-gray-700 text-base">{props.title.channelTitle}</span></div>
                <div><strong>Video Title: </strong><span 
                className="text-gray-700 text-base">{props.title.title}</span></div>
                <div><strong>Views: </strong><span 
                className="text-gray-700 text-base">{props.title.views}</span></div>
            </div>
        </div>
    );
}

export default Info;
