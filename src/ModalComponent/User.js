class User {
    constructor(id, firstName, lastName, loginId, mobileNo, email, question, answer, appUser){
        this.id =id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.loginId = loginId;
        this.mobileNo = mobileNo;
        this.email = email;
        this.question = question;
        this.answer = answer;
        this.appUser = appUser
    }
    
    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }

}