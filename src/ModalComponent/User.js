class User {
    constructor(firstName, lastName, loginId, mobileNo, email, question, answer, appUser){
        this.firstName = firstName;
        this.lastName = lastName;
        this.loginId = loginId;
        this.mobileNo = mobileNo;
        this.email = email;
        this.question = question;
        this.answer = answer;
        this.appUser = appUser
    }
}

export default User