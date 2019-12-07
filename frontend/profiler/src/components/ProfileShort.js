import React from 'react'

export default function ProfileShort() {
    return (
        <div>
            <div className="card center z-depth-2" style={{height: "300px", borderRadius: "8px"}}>
                <h5 style={{paddingTop: "1.18%"}}><strong>Abdullah Al Mehedi</strong></h5>
                <i className="material-icons center large">account_circle</i>
                <div className="row container">
                    <div className="col s4 l4">
                        <p><strong>01911132339</strong></p>
                    </div>
                    <div className=" col s4 l4">
                        <p><strong>mehedi@gmail.com</strong></p>
                    </div>
                    <div className=" col s4 l4">
                        <p><strong>Uttara, Dhaka-1207</strong></p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
