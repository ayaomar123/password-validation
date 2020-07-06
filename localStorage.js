var myArr=[];
var myObj={
    name: "",
    Email:"",
    password:"",
    confimPassword:"",
    Phone:""
    }
        
    function pushData(e){
        e.preventDefault();
        var name = document.getElementById('name').value;
        var Email = document.getElementById('Email').value;
        var password = document.getElementById('password').value;
        var confimPassword = document.getElementById('confimPassword').value;
        var Phone = document.getElementById('Phone').value;
       
        myObj.name=name;
        myObj.Email=Email;
        myObj.password=password;
        myObj.confimPassword=confimPassword;
        myObj.Phone=Phone;
        myArr.push(myObj);
           
        var pval = "";
        for(i = 0; i < myArr.length; i++){
            pval = pval + myArr[i] + "<br/>";
            }
            console.log(myArr);
        }  
        const submitbtn = document.getElementById('submit');
        submitbtn.addEventListener('click',pushData);

        submitbtn.addEventListener('click',()=>{
            if(localStorage.getItem(password.value) != localStorage.getItem(confimPassword.value)){
                alert('oops! your passwords are not Identical,please try again!');
                var mypass= document.getElementById('password');
               var myConfpass= document.getElementById('confimPassword');
               mypass.style.background = "red";
               myConfpass.style.background="red";
                
            }
            else{
                localStorage.setItem(password.value,JSON.stringify(myObj) );
            }

            var table = document.getElementById("table-data");
            row = table.insertRow(1);
            cell0 = row.insertCell(0);
            cell1 = row.insertCell(1);
            cell2 = row.insertCell(2);
            cell3 = row.insertCell(3);
            cell4 = row.insertCell(4);
            cell0.innerHTML = myObj.name;
            cell1.innerHTML = myObj.Email;
            cell2.innerHTML = myObj.password;
            cell3.innerHTML = myObj.confimPassword;
            cell4.innerHTML = myObj.Phone;
            });
            