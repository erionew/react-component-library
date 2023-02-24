import React from 'react';
import { storiesOf } from '@storybook/react';
import cart from './cart.svg'
import heart from './heart.svg'
import Button from './Button';

    

storiesOf('Button', module)
    //Normal primary buttons

    .add('Primary', () => <Button
        label="Primary"
        type='primary'
    />)
    .add('Primary Hover', () => <Button 
        label='Primary Hover'
        type='primary-hover'
    />)
    .add('Primary Outline', () => <Button 
        label='Primary Outline'
        type='primary-outline'
    />)
    .add('Primary Disabled', () => <Button 
        label='Primary Disabled'
        type='primary-disabled'
    />)
    
    //Large primary buttons

    .add('Large Primary', () => <Button
        label="Large Primary"
        type='primary'
        large
    />)
    .add('Large Primary Hover', () => <Button 
        label='Large Primary Hover'
        type='primary-hover'
        large
    />)
    .add('Large Primary Outline', () => <Button 
        label='Large Primary Outline'
        type='primary-outline'
        large
    />)
    .add('Large Primary Disabled', () => <Button 
        label='Large Primary Disabled'
        type='primary-disabled'
        large
    />)

    //---------- Danger Buttons ----------//

    //Normal Danger buttons

    .add('Danger', () => <Button
        label="Danger"
        type='danger'
    />)
    .add('Danger Hover', () => <Button 
        label='Danger Hover'
        type='danger-hover'
    />)
    .add('Danger Outline', () => <Button 
        label='Danger Outline'
        type='danger-outline'
    />)
    .add('Danger Disabled', () => <Button 
        label='Danger Disabled'
        type='danger-disabled'
    />)
    
    //Large Danger buttons

    .add('Large Danger', () => <Button
        label="Large Danger"
        type='danger'
        large
    />)
    .add('Large Danger Hover', () => <Button 
        label='Large Danger Hover'
        type='danger-hover'
        large
    />)
    .add('Large Danger Outline', () => <Button 
        label='Large Danger Outline'
        type='danger-outline'
        large
    />)
    .add('Large Danger Disabled', () => <Button 
        label='Large Danger Disabled'
        type='danger-disabled'
        large
    />)

     //---------- Warning Buttons ----------//

    //Normal Warning buttons

    .add('Warning', () => <Button
        label="Warning"
        type='warning'
    />)
    .add('Warning Hover', () => <Button 
        label='Warning Hover'
        type='warning-hover'
    />)
    .add('Warning Outline', () => <Button 
        label='Warning Outline'
        type='warning-outline'
    />)
    .add('Warning Disabled', () => <Button 
        label='Warning Disabled'
        type='warning-disabled'
    />)
    
    //Large Warning buttons

    .add('Large Warning', () => <Button
        label="Large Warning"
        type='warning'
        large
    />)
    .add('Large Warning Hover', () => <Button 
        label='Large Warning Hover'
        type='warning-hover'
        large
    />)
    .add('Large Warning Outline', () => <Button 
        label='Large Warning Outline'
        type='warning-outline'
        large
    />)
    .add('Large Warning Disabled', () => <Button 
        label='Large Warning Disabled'
        type='warning-disabled'
        large
    />)

     //---------- Success Buttons ----------//

    //Normal Success buttons

    .add('Success', () => <Button
        label="Success"
        type='success'
    />)
    .add('Success Hover', () => <Button 
        label='Success Hover'
        type='success-hover'
    />)
    .add('Success Outline', () => <Button 
        label='Success Outline'
        type='success-outline'
    />)
    .add('Success Disabled', () => <Button 
        label='Success Disabled'
        type='success-disabled'
    />)
    
    //Large Success buttons

    .add('Large Success', () => <Button
        label="Large Success"
        type='success'
        large
    />)
    .add('Large Success Hover', () => <Button 
        label='Large Success Hover'
        type='Success-hover'
        large
    />)
    .add('Large Success Outline', () => <Button 
        label='Large Success Outline'
        type='success-outline'
        large
    />)
    .add('Large Success Disabled', () => <Button 
        label='Large Success Disabled'
        type='success-disabled'
        large
    />)

     //---------- Default Buttons ----------//

    //Normal Default buttons

    .add('Default', () => <Button
        label="Default"
        type='default'
    />)
    .add('Default Hover', () => <Button 
        label='Default Hover'
        type='default-hover'
    />)
    .add('Default Outline', () => <Button 
        label='Default Outline'
        type='default-outline'
    />)
    .add('Default Disabled', () => <Button 
        label='Default Disabled'
        type='default-disabled'
    />)
    
    //Large Default buttons

    .add('Large Default', () => <Button
        label="Large Default"
        type='default'
        large
    />)
    .add('Large Default Hover', () => <Button 
        label='Large Default Hover'
        type='default-hover'
        large
    />)
    .add('Large Default Outline', () => <Button 
        label='Large Default Outline'
        type='default-outline'
        large
    />)
    .add('Large Default Disabled', () => <Button 
        label='Large Default Disabled'
        type='default-disabled'
        large
    />)

    //---------- Icon Button ----------//

    .add('Add To Cart', () => <Button 
        label='Add To Cart'
        type='primary-disabled'
        icon={cart}
    />)
    .add('Add To Cart, Icon Only', () => <Button 
        type='primary-disbled'
        icon={cart}
    />)
    .add('Add To Favorites', () => <Button 
        label='Add to Favorites'
        type='primary-disabled'
        icon={heart}
    />)
    .add('Add To Favorites, Icon Only', () => <Button 
        type='primary-disabled'
        icon={heart}
    />)

