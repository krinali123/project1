export const isLogin = () =>{
    if(sessionStorage.getItem("user")){
        return true
    }
    else{
        return false
    }
}