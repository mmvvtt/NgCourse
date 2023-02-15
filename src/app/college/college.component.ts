import { Component } from "@angular/core";


@Component({

    selector: "app-college",
    templateUrl: "./college.component.html",
    styleUrls: ["./college.component.css"]
})


export class CollegeComponent {

    serverName: any = "Production Server";
    collegeName: string = "MCIT";

    flag: boolean = true;
    empname: string = "Place Holder";

    username: string = "temp";
    password: string = "123";

    onClick (){
        console.log("Button Click event executed from TS");
        this.flag = !this.flag;
    }

    onLogin(){
        console.log("Entered username is: "+this.username+" and the password is: "+this.password);
    }

    onClear(){
        this.username = '';
        this.password = '';
    }

}