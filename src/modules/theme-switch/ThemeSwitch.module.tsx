import {Switch, useColorMode} from '@chakra-ui/react';

import './theme-switch.module.scss';

function ThemeSwitch (props : any) {
    const { colorMode, toggleColorMode } = useColorMode()
    return(
        // <label className="switch" htmlFor={props.id}>
        //     <input type="checkbox" name={props.name} checked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} className="switch-input" id={props.id} />
        //     <div className="custom-switch"></div>
        // </label>
        <Switch size="md" colorScheme='orange' isChecked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} />
    )
}

export default ThemeSwitch;