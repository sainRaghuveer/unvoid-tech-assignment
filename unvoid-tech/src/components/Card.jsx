import { Box } from '@chakra-ui/react'
import React from 'react'

const Card = ({title,image, index}) => {
    return (
            <div style={{ marginTop: "10px", border:"1px solid gray", marginLeft:"10px", marginRight:"10px", backgroundColor:(index%2==0)?"white":"#edf2f7", color:"black" }} >
                <div style={{ marginRight: "10px", padding: "10px", borderRadius: "10px" }}>
                    <img style={{ borderRadius: "25px", height:"200px", width:"200px" }} src={image} alt={"name"} />
                    <p color='black'>{title}</p>
                </div>
            </div>  
    )
}

export default Card