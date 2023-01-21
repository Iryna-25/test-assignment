import { useEffect, useState } from "react";
import { getPositions } from "../../Services/API";
import { InputStyle, FormWrapper, Hint, Label, InputCheckbox, InputUpload, ButtonSignUpForm } from "./Form.styled";


const Form = () => {
    const [positions, setPositions] = useState([]);
    const [form, setForm] = useState ({
        name: "",
        email: "",
        phone: "",
        position: "",
        photo: null,
    });

    useEffect(() => {
        getPositions().then(data => {
            setPositions(data.positions) 
        })
    }, []);
    // console.log(positions)

    const onHandleChange = e => {
        const {name, value, type, files} = e.target;
        setForm(prevState => ({
            ...prevState, 
            [name]: type === "file" ? files[0] : value
        })) 
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(form)

    }

    return (
        <section>
            <h2>Working with POST request</h2>     
            <FormWrapper onSubmit={handleSubmit}>

                <InputStyle                
                    placeholder="Your name"
                    type="text" 
                    value={form.name} 
                    name="name" 
                    onChange={onHandleChange}
                />

                <InputStyle 
                    placeholder="Email"
                    type="email" 
                    value={form.email} 
                    name="email" 
                    onChange={onHandleChange}
                />

                <InputStyle 
                    placeholder="Phone"
                    type="tel" 
                    value={form.phone} 
                    name="phone" 
                    onChange={onHandleChange}
                />
                
                <Hint>+38 (XXX) XXX - XX - XX</Hint>

                <h3>Select your position</h3>

                {positions.map((position) => (
                    <Label htmlFor="" key={position.id} >
                        <InputCheckbox 
                            onChange={onHandleChange} 
                            type="radio" 
                            value={position.id} 
                            name="position"
                        />
                        {position.name}
                    </Label>
                ))}
                
                <InputUpload 
                    onChange={onHandleChange} 
                    type="file" 
                    name="photo" 
                />
                
                <ButtonSignUpForm type="submit"> Sign up </ButtonSignUpForm>
            </FormWrapper>
        </section>
    )
};
export default Form;