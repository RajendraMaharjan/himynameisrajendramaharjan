import React from 'react'

const HeaderButton = ({btnCss,title,...props}) => {

    return (
        <>
            <div className="mx-auto">
                <a {...props}><button className={`see ${btnCss ?? ''}`}  >{title}<i className="fas fa-eye"></i></button></a>
            </div>
        </>
    )
}

export default HeaderButton
