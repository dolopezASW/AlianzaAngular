export class Client{
    public name:string;
    public phone:string;
    public email:string;
    public startDate:Date;
    public endDate:Date;

    public constructor(name:string, phone:string, email:string, startDate:Date, endDate:Date){
        this.name=name;
        this.phone=phone;
        this.email=email;
        this.startDate=startDate;
        this.endDate=endDate;
    }
}