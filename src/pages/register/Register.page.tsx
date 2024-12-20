import { useState } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../configs/schema.config";

import { Stack, InputGroup, InputLeftAddon, InputRightAddon, Input, Checkbox, Button, Text } from "@chakra-ui/react";
import NavBar from "../../components/navbar/Navbar.component";
import Footer from "../../components/footer/Footer.component";
import Hr from "../../modules/underline/Underline.module";
import GoogleIcon from './../../assets/img/google.png'
import background from './../../assets/img/background-2.svg'
import './register.page.scss';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showRetypePassword, setShowRetypePassword] = useState(false)

    const toggleVisibility1 = () => setShowPassword(!showPassword)
    const toggleVisibility2 = () => setShowRetypePassword(!showRetypePassword)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(registerSchema),
        defaultValues: {
            name: null,
            username: null,
            email: null,
            password: null
        }
    })  
    return (
        <div className="signup-form-section" style={{ backgroundImage: `url('${background}')` }}>
            <NavBar />
            <div className="signin-form-container">
                <form action="" className="signin-form" method="POST">
                    <Stack>

                        <Text fontSize="4xl" textAlign="center">Register</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-person-fill"></i>
                            </InputLeftAddon>
                            <Input type="text" name="signup_fullname" placeholder="Fullname" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Name Invalid</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-person-circle"></i>
                            </InputLeftAddon>
                            <Input type="text" name="signup_username" placeholder="Username" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Username Invalid</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-envelope"></i>
                            </InputLeftAddon>
                            <Input type="text" name="signup_email" placeholder="Email" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Email Invalid</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-key"></i>
                            </InputLeftAddon>
                            <Input type={showPassword ? 'text' : 'password'} name="signup_password" placeholder="Password" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }} onClick={toggleVisibility1}>
                                <i style={{ fontSize: "16px" }} className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Password Not Valid</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-lock"></i>
                            </InputLeftAddon>
                            <Input name="signup_retype_password" type={showRetypePassword ? 'text' : 'password'} placeholder="Retype Password" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }} onClick={toggleVisibility2}>
                                <i style={{ fontSize: "16px" }} className={showRetypePassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="sm" color="var(--default-fg-error)">Password Doesnt Match</Text>
                        <Checkbox name="signup_remember">Remember Me</Checkbox>
                        <Button>Register</Button>
                        <Hr color="orange" height={2.5}/>
                        <Button colorScheme="orange" type="submit" leftIcon={<img src={GoogleIcon} width="25" height="25" alt="google icon" />}>Signup With Google</Button>
                    </Stack>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Register;