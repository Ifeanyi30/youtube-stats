import React from "react";

function Tags(props) {
    let tags = props.tags.map(tag => {
        return <li key={tag}>-{tag}</li>
    })

    return(
        <div className="w-1/2 px-2 mr-2 rounded overflow-hidden shadow-md">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Tags</div>
                <ul className="text-gray-700 text-base p-4">
                    {tags}
                </ul>
            </div>
        </div>
    );
}

export default Tags;