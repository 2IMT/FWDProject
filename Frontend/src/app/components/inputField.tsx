'use client';

import '../globals.css'
import styles from '../styles/inputField.module.css'
import React from 'react'

export interface InputFieldProps {
    labelName: string;
    inputName: string;
    inputPlaceholder?: string;
    inputType?: string;
}

export default class InputField extends React.Component<InputFieldProps, {}> {
    labelName: string;
    inputName: string;
    inputPlaceholder: string;
    inputType: string;

    constructor(props: InputFieldProps) {
        super(props);
        this.setState({ value: "" });

        this.labelName = props.labelName;
        this.inputName = props.inputName;
        this.inputPlaceholder = props.inputPlaceholder == null ? "" : props.inputPlaceholder;
        this.inputType = props.inputType == null ? "text" : props.inputType;
    }

    render() {
        return (
            <div className={styles.inputField}>
                <label>{this.labelName}</label>
                <input type={this.inputType} name={this.inputName} placeholder={this.inputPlaceholder} />
            </div>
        )
    }
}