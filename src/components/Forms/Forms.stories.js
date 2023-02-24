import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';
import Select from './Select';
import './Forms.css'

storiesOf('Forms', module)
    .add('Small Text Input', () => <TextInput 
        label='Email' 
        placeholder='Email'
        size="small"
    />)
    .add('Medium Text Input', () => <TextInput 
        label='Email' 
        placeholder='Email'
        size="medium"
    />)
    .add('Large Text Input', () => <TextInput 
        label='Email' 
        placeholder='Email'
        size="large"
    />)

    .add('Small Select Outlined', () => <Select 
        size='small'
        outlined
    />)
    .add('Medium Select Outlined', () => <Select 
        size='medium'
        outlined
    />)
    .add('Large Select Outlined', () => <Select 
        size='large'
        outlined
    />)

    .add('Small Select Filed', () => <Select 
        size='small'
        filled
    />)
    .add('Medium Select Filled', () => <Select 
        size='medium'
        filled
    />)
    .add('Large Select Filled', () => <Select 
        size='large'
        filled
    />)
    