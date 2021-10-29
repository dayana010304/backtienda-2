import User from "../models/UserModel.js"
const login = async (userData) => {
    try {
        const {email, password} = userData;
        console.log(userData)
        if(email){
            const user = await User.findOne({email: email, password: password}) || null;
            const userData = {
                email: user.email,
                role: user.role,
                shop: user.shop,
    
            }
            return userData;
        }
        else{
            return {
                error: "No existe el correo"
            }
        }
    }catch (error) {
        return {
            success: false,
            msg: "El usuario y contraseña no coinceden o no estas registrado"
        };
    }
}

const register = async (userData) => {
    try {
        const {email, password, role, shop} = userData;
        console.log(userData)

        const user = await User.findOne({email}) || null;
        if (user !== null){
            return{
                success: false,
                msg: "Usuario ya existe"
            }

        }

        let mayus = new RegExp(/^(?=.*[A-Z])/);
        let specialP = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+$/);
        let specialE = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+$/);

     
       /*const regEmailExp = new RegExp(/^[a-z0-9]{5,20}[a-z]{2,20}.[a-z]{3,6}$/)

        const regpasExp = new RegExp(/[a-zA-Z0-9]{8,20}.$/) */

        if (!specialE.test(email)){
            return { status: "El correo no tiene un formato valido" }  
        }
        else if (!specialP.test(password) && password.length < 8){
            return { status: "La cotraseña no tiene un formato valido" }  
        }else{
            user = new User({
                email: email, 
                password: password,
                role: role, 
                shop: shop
            });
            await user.save();
            return { status: "registered" }
        }
  
    } catch (error) {
        return {
            success: false,
            msg: "Error al registrar usuario"
        };
    }
}

const getUsers = async () => {
    const users = await User.find({});
    return users;
}

const userController = {
    register,
    login, 
    getUsers
}
export default userController;