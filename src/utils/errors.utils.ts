import { errors } from "puppeteer";

export const loginErrors = (error:any) => {
    let errors = {logs: "", password: ""};

    if (error.message.includes("_id"))
    {
        errors.logs = "Incorrect 'Username' or 'Email'";
    }

    if (error.message.includes("Incorrect logs"))
    {
        errors.password = "Incorrect logs or password"
    }

    return errors;
};

export const registerErrors = (error:any) => {
    let errors = {username: "", email: "", password: ""};

    if (error.message.includes('username') && error.message.includes('shorter'))
    {
        errors.username = "Username is too short";
    }
    
    if (error.message.includes('password') && error.message.includes('shorter'))
    {
        errors.password = "Password is too short";
    }
    
    if (error.message.includes('username') && error.message.includes('shorter'))
    {
        errors.email = "Email is not a valid email";
    }
    
    return errors;
}

export const createWikiErrors = (error:any) => {
    let errors = {name: "", desc: ""};

    if (error.message.includes('name') && error.message.includes('maximum'))
    {
        errors.name = "Name is too long !";
    }
    
    if (error.message.includes('name') && error.message.includes('required'))
    {
        errors.name = "Wiki need a name";
    }

    if (error.message.includes('description') && error.message.includes('maximum'))
    {
        errors.desc = "Description is too long";
    }

    return errors;
}

export const createPageErrors = (error:any) => {
    let errors = {name: ""};

    if (error.message.includes('name') && error.message.includes('maximum'))
    {
        errors.name = "Page's name is too long !"
    }
    
    if (error.message.includes('name') && error.message.includes('required'))
    {
        errors.name = "Page's name is required !"
    }

    return errors;
}

export const updatePageErrors = (error:any) => {
    let errors = {name: ""}

    if (error === "too_long")
    {
        errors.name = "Name page is too long";
    }

    return errors;   
};