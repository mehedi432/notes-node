import React from 'react'

export default function Form() {
    return (
        <div className="container" style={{marginTop : "-8%"}} >
                <div className="card z-depth-3" style={{borderRadius: "13px"}}>
                    <div className="row">

                        <form className="col s12">  
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="first_name" type="text" className="validate"/>
                                    <label htmlFor="last_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="last_name" type="text" className="validate"/>
                                    <label htmlFor="last_name">Last Name</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate"/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col l6 s12">
                                    <i className="material-icons prefix">cake</i>
                                    <input id="age" type="text" className="validate"/>
                                    <label htmlFor="email">Age</label>
                                </div>
                                <div className="col l6 s12">
                                    <select className="width" >
                                        <option value="" disabled selected>Select Gender
                                        </option>
                                        <option >Male</option>
                                        <option >Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col l6 s12">
                                    <i className="material-icons prefix">donut_large</i> 
                                    <input id="height" type="email" className="validate"/>
                                    <label htmlFor="email">Height</label>
                                </div>
                                <div className="input-field col l6 s12">
                                    <i className="material-icons prefix">line_weight</i>
                                    <input id="weight" type="email" className="validate"/>
                                    <label htmlFor="email">HWeight</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col  l6 s12">
                                    <i className="material-icons prefix">fingerprint</i>
                                    <input id="password" type="password" className="validate"/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field col l6 s12">
                                    <i className="material-icons prefix">fingerprint</i>
                                    <input id="password" type="password" className="validate"/>
                                    <label htmlFor="password">Password Again</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col  l6 s12">
                                    <i className="material-icons prefix">dialpad</i>
                                    <input id="password" type="password" className="validate"/>
                                    <label htmlFor="password">Mobile Number</label>
                                </div>
                                <div className="col l6  s12">
                                    <button className="waves-effect waves-light btn-large  teal darken-1"> send Verification Code</button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col  l6 s12">
                                    <i className="material-icons prefix">golf_course</i>
                                    <input id="password" type="password" className="validate"/>
                                    <label htmlFor="password">Verification Code</label>
                                </div>
                                <div className="col l6  s12">
                                    {/*<button> send Verification Code</button>*/}
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col l6 s12">
                                    <button className="waves-effect waves-light btn-large teal darken-1 white-text" type="submit" value="Submit">Submit</button>
                                </div>
                                <div className="col l6  s12">
                                    {/*<button> send Verification Code</button>*/}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
    )
}
