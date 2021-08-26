import React from 'react'

const Header = ({ category,icon,getLength }) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    return (
        
            <div className={`header header-${category}`}>
                <h3 className='center'>
                    <span className='center icon'>{icon}</span>
                    <span>{capitalize(category)} Tasks</span>
                </h3>
                <div className='number'>{getLength(category)}</div>
            </div>
    )
}

export default Header
