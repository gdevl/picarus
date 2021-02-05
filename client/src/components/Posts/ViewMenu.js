import React, { useState } from 'react';

const ViewMenu = ({ view, setView }) => {
    const handleChange = (event) => {
        setView(event.target.value);
    };

    return (
        <div className="viewmenu__container">
            <select
                className="viewmenu__select"
                value={view}
                onChange={handleChange}
            >
                <option value="public">Public</option>
                <option value="following">Following</option>
                <option value="me">Me</option>
            </select>
        </div>
    );
};

export default ViewMenu;
