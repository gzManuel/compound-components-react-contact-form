import React from 'react';

const Item = ({label,name,children}) => {
    return (
        <div>
            <div>
                <label for={name}>
                    {label}
                </label>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Item;