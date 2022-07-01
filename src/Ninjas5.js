import React from 'react'
import './Ninjas.css'
const Ninjas4 = ({ ninjas, deleteNinja}) => {

        return (
            <div className="ninja-list">
                {
                    ninjas.map(ninja => {
                        return (
                            <div className="ninja"  key= { ninja.id }>
                                 <div> Name : { ninja.name } </div>
                                 <div> Age : { ninja.age }</div>
                                 <div> Belt : { ninja.belt } </div>   
                                 <button onClick = { () => {deleteNinja(ninja.id)}} > Delete ninja</button>
                                 
                            </div>
                        ) 
                    })
                }
        </div>
    );
    
}

export default Ninjas4;