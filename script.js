let form=document.createElement("form");
form.setAttribute("class","form");
const section=document.getElementById('mainsection');
section.append(form);

const createrow=(rowname,classname)=>{
    let row=document.createElement("tr");
    row.id=rowname;
    row.setAttribute("class",classname)
    return row;
}
const createdata=(id,datas)=>{
var data=document.createElement("td");
data.setAttribute("id",id);
data.textContent=datas;
return data;
}

const createlabel=(labelname,classname)=>{
let label=document.createElement("label");
label.textContent=labelname;
label.setAttribute("class",classname);
label.setAttribute("for",labelname);
label.setAttribute("required",true);
return label;
};

const createtextbox=(typename,idname)=>{
let textbox=document.createElement("input");
textbox.setAttribute("type",typename);
textbox.setAttribute("id",idname);
textbox.setAttribute("required",true);
return textbox;
};

const createradiobutton=(btnname,value)=>{
    let radiobtn=document.createElement("input");
    radiobtn.setAttribute("type","radio");
    radiobtn.setAttribute("name",btnname);
    radiobtn.id=btnname;
    radiobtn.value=value;
    // radiobtn.setAttribute("required",true);
    return radiobtn;
};


let div1=document.createElement("div");
div1.setAttribute("class","div1");
div1.append(createlabel("Enter your First Name","first"));
div1.append(createtextbox("text",'Firstname'));


let div2=document.createElement("div");
div2.setAttribute("class","div2");
div2.append(createlabel("Enter your Last Name","last"));
div2.append(createtextbox("text",'Lastname'));

let div3=document.createElement("div");
div3.setAttribute("class","div3");
div3.append(createlabel("Enter your addresss","add"));
div3.append(createtextbox("text","address"));

let div4=document.createElement("div");
div4.setAttribute("class","div4");
div4.append(createlabel("Enter your pincode","pin"));
div4.append(createtextbox("number","pincode"));

let div5=document.createElement("div");
div5.setAttribute("class","div5");
div5.append(createlabel("Enter your Gender","gender"));
div5.append(createtextbox("text","choosegender"));

let divr=document.createElement("div");
divr.setAttribute("class","divr");

let p=document.createElement("p");
const text = document.createTextNode("Select any 3 food items you like from below one.");
p. append(text);

let div6=document.createElement("div");
div6.setAttribute("class","div6");
div6.append(createradiobutton("radio5","dosa"));
div6.append(createlabel("dosa","dosa"));

let div11=document.createElement("div");
div11.setAttribute("class","div11");
div11.append(createradiobutton("radio1","idly"));
div11.append(createlabel("idly","idly"));

let div12=document.createElement("div");
div12.setAttribute("class","div12");
div12.append(createradiobutton("radio2","pongal"));
div12.append(createlabel("pongal","pongal"));

let div13=document.createElement("div");
div13.setAttribute("class","div13");
div13.append(createradiobutton("radio3","poori"));
div13.append(createlabel("poori","poori"));

let div10=document.createElement("div");
div10.setAttribute("class","div10");
div10.append(createradiobutton("radio4","upma",));
div10.append(createlabel("upma","upma"));

divr.append(p,div11,div6,div12,div13,div10);

let div7=document.createElement("div");
div7.setAttribute("class","div7");
div7.append(createlabel("Enter the State you belong","state"));
div7.append(createtextbox("text","state"));

let div8=document.createElement("div");
div8.setAttribute("class","div8");
div8.append(createlabel("Enter the Country you belong","country"));
div8.append(createtextbox("text","country"));


let btn=document.createElement("button");
btn.textContent="Submit";

// form.append(div11,div6,div12,div13,div10);
form.append(div1,div2,div3,div4,div5,divr,div7,div8,btn);

let table=document.createElement("table");
table.setAttribute("id","tableone");
table.setAttribute("class","table");

var heading=document.createElement("h1");
heading.textContent="Table to display all datas stored";
heading.id="headingid";

var row1=createrow("row1","tablerow1");
row1.append(createdata("data1","FirstName"));
row1.append(createdata("data2","LastName"));
row1.append(createdata("data3","Address"));
row1.append(createdata("data4","Pincode"));
row1.append(createdata("data5","Gender"));
row1.append(createdata("data6","State"));
row1.append(createdata("data7","Country"));
row1.append(createdata("data8","Choice of Food"));


var row2=createrow("row2","tablerow2");
row2.append(createdata("data21","FirstName"));
row2.append(createdata("data22","LastName"));
row2.append(createdata("data23","Address"));
row2.append(createdata("data24","Pincode"));
row2.append(createdata("data25","Gender"));
row2.append(createdata("data26","State"));
row2.append(createdata("data27","Country"));
row2.append(createdata("data28","Choice of Food"));

table.append(row1,row2);


section.append(form,heading,table);
var favfood="";
var datacollect=(event)=>{
    event.preventDefault();
    var fname=document.getElementById("Firstname").value;
    var lname=document.getElementById("Lastname").value;
    var add=document.getElementById("address").value;
    var pinc=document.getElementById("pincode").value;
    var gen=document.getElementById("choosegender").value;
    var dosas=document.getElementById("radio1").value;
    var st=document.getElementById("state").value;
    var co=document.getElementById("country").value;



    document.getElementById("data21").innerText=fname;
    document.getElementById("data22").innerText=lname;
    document.getElementById("data23").innerHTML=add;
    document.getElementById("data24").textContent=pinc;
    document.getElementById("data25").textContent=gen;
    document.getElementById("data26").innerHTML=st;
    document.getElementById("data27").textContent=co;
    document.getElementById("data28").textContent=favfood;

    document.getElementById("Firstname").value=" ";
    document.getElementById("Lastname").value=" ";
    document.getElementById("address").value=" ";
    document.getElementById("pincode").value=" ";
    document.getElementById("choosegender").value=" ";
    document.getElementById("radio1").value=" ";
    document.getElementById("radio2").value=" ";
    document.getElementById("radio3").value=" ";
    document.getElementById("radio4").value=" ";
    document.getElementById("radio5").value=" ";
    document.getElementById("state").value=" ";
    document.getElementById("country").value=" ";
    
};
var valuetake1=(event)=>{
// event.preventDefault();
var dosas=document.getElementById("radio1").value;
favfood+=dosas+" , ";
}
var valuetake2=(event)=>{
    // event.preventDefault();
    var dosas=document.getElementById("radio2").value;
    favfood+=dosas+" , ";

}
var valuetake3=(event)=>{
        // event.preventDefault();
        var dosas=document.getElementById("radio3").value;
        favfood+=dosas+" , ";
    
}
var valuetake4=(event)=>{
            // event.preventDefault();
            var dosas=document.getElementById("radio5").value;
            favfood+=dosas+" ,";
        
 }
 var valuetake5=(event)=>{
                //  event.preventDefault();
                var dosas=document.getElementById("radio4").value;
                favfood+=dosas+"  ";
            
 }

div11.addEventListener("click",valuetake1);
div12.addEventListener("click",valuetake2);
div13.addEventListener("click",valuetake3);
div6.addEventListener("click",valuetake4);
div10.addEventListener("click",valuetake5);

form.addEventListener("submit",datacollect);



