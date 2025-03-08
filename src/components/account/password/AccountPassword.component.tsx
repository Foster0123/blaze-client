import { useState } from 'react'
import { Input, Stack, Button, Text } from '@chakra-ui/react'
import { InputGroup } from './../../ui/input-group'
import { RiLockPasswordFill } from 'react-icons/ri'
import { PasswordInput } from '../../ui/password-input'
const PasswordUpdate = () => {
    return (
        <div className="account__page--component">
            <form className='account__page--component--item'>
                <h2 className="account__page--component--item--header">Update Password</h2>
                <Stack width='full'>
                    <InputGroup
                        startElement={<RiLockPasswordFill />}>
                        <PasswordInput
                            name="account_change_password_old"
                            placeholder="Password"
                            data-testid="account-change-password-old-password-input"
                        />
                    </InputGroup>
                    <Text fontSize="sm" fontWeight='semibold' textAlign='right' color='red.500'>
                        Incorrect Password
                    </Text>
                    <InputGroup
                        startElement={<RiLockPasswordFill />}>
                        <PasswordInput
                            name="account_change_password_new"
                            placeholder="Password"
                            data-testid="account-change-password-new-password-input"
                        />
                    </InputGroup>
                    <Text fontSize="sm" fontWeight='semibold' textAlign='right' color='red.500'>
                        Invalid Password
                    </Text>
                    <InputGroup
                        startElement={<RiLockPasswordFill />}>
                        <PasswordInput
                            name="account_change_password_confirm"
                            placeholder="Password"
                            data-testid="account-change-password-confirm-password-input"
                        />
                    </InputGroup>
                    <Text fontSize="sm" fontWeight='semibold' textAlign='right' color='red.500'>
                        Password Does Not Match
                    </Text>
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </div>
    )
}
export default PasswordUpdate
