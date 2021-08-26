import React from 'react'

const TabHeader = ({ icon, category, getLength }) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return (

        <div className='tab-header'>
            <div className='center'>
                <div className='center icon'>{icon}</div>
                <span>{capitalize(category)}</span>
                </div>
            <div>{getLength(category)}</div>
        </div>

    )
}

export default TabHeader
