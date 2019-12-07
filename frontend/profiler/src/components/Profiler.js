import React, { Component } from 'react';
import './profile.css';
import Header from './Header';
import ProfileShort from './ProfileShort';
import Footer from './Footer';
import Form from './Form';
import {saveProfile} from './saveProfile';


export default class Profiler extends Component {

    componentDidMount() {
        saveProfile()
    }

    render() {
        return (
            <div>
                <Header />
                <ProfileShort />
                <Form />
                
            <Footer />
            </div>
        );
    }
}
