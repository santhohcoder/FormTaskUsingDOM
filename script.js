let form = document.createElement("form");
form.setAttribute("class", "form");
const section = document.getElementById('mainsection');
section.append(form);

const createrow = (rowname, classname) => {
    let row = document.createElement("tr");
    row.id = rowname;
    row.setAttribute("class", classname)
    return row;
}
const createdata = (id, datas) => {
    var data = document.createElement("td");
    data.setAttribute("id", id);
    data.textContent = datas;
    return data;
}

const createlabel = (labelname, classname) => {
    let label = document.createElement("label");
    label.textContent = labelname;
    label.setAttribute("class", classname);
    label.setAttribute("for", labelname);
    // label.setAttribute("required", true);
    return label;
};

const createtextbox = (typename, idname) => {
    let textbox = document.createElement("input");
    textbox.setAttribute("type", typename);
    textbox.setAttribute("id", idname);
    textbox.setAttribute("required", true);
    return textbox;
};

const createradiobutton = (btnname, value, classname) => {
    let radiobtn = document.createElement("input");
    radiobtn.setAttribute("type", "radio");
    radiobtn.setAttribute("name", btnname);
    radiobtn.setAttribute("class", classname);
    radiobtn.id = btnname;
    radiobtn.value = value;
    return radiobtn;
};


let div1 = document.createElement("div");
div1.setAttribute("class", "div1");
div1.append(createlabel("Enter your First Name", "first"));
div1.append(createtextbox("text", 'Firstname'));


let div2 = document.createElement("div");
div2.setAttribute("class", "div2");
div2.append(createlabel("Enter your Last Name", "last"));
div2.append(createtextbox("text", 'Lastname'));

let div3 = document.createElement("div");
div3.setAttribute("class", "div3");
div3.append(createlabel("Enter your addresss", "add"));
div3.append(createtextbox("text", "address"));

let div4 = document.createElement("div");
div4.setAttribute("class", "div4");
div4.append(createlabel("Enter your pincode", "pin"));
div4.append(createtextbox("number", "pincode"));

let div5 = document.createElement("div");
div5.setAttribute("class", "div5");
div5.append(createlabel("Enter your Gender", "gender"));
div5.append(createtextbox("text", "choosegender"));

let divr = document.createElement("div");
divr.setAttribute("class", "divr");

let p = document.createElement("p");
const text = document.createTextNode("Select any 2 food items you like from 5 choices.");
p.append(text);

let div6 = document.createElement("div");
div6.setAttribute("class", "div6");
div6.append(createradiobutton("radio5", "dosa", "radios"));
div6.append(createlabel("dosa", "dosa"));

let div11 = document.createElement("div");
div11.setAttribute("class", "div11");
div11.append(createradiobutton("radio1", "idly", "radios"));
div11.append(createlabel("idly", "idly"));

let div12 = document.createElement("div");
div12.setAttribute("class", "div12");
div12.append(createradiobutton("radio2", "pongal", "radios"));
div12.append(createlabel("pongal", "pongal"));

let div13 = document.createElement("div");
div13.setAttribute("class", "div13");
div13.append(createradiobutton("radio3", "poori", "radios"));
div13.append(createlabel("poori", "poori"));

let div10 = document.createElement("div");
div10.setAttribute("class", "div10");
div10.append(createradiobutton("radio4", "upma", "radios"));
div10.append(createlabel("upma", "upma"));

divr.append(p, div11, div6, div12, div13, div10);

let div7 = document.createElement("div");
div7.setAttribute("class", "div7");
div7.append(createlabel("Enter the State you belong", "state"));
div7.append(createtextbox("text", "state"));

let div8 = document.createElement("div");
div8.setAttribute("class", "div8");
div8.append(createlabel("Enter the Country you belong", "country"));
div8.append(createtextbox("text", "country"));


let btn = document.createElement("button");
btn.textContent = "Submit";


// form.append(div11,div6,div12,div13,div10);
form.append(div1, div2, div3, div4, div5, divr, div7, div8, btn);

let table = document.createElement("table");
table.setAttribute("id", "tableone");
table.setAttribute("class", "table");

var heading = document.createElement("h1");
heading.textContent = "Table to display all datas stored";
heading.id = "headingid";

var row1 = createrow("row1", "tablerow1");
row1.append(createdata("data1", "FirstName"));
row1.append(createdata("data2", "LastName"));
row1.append(createdata("data3", "Address"));
row1.append(createdata("data4", "Pincode"));
row1.append(createdata("data5", "Gender"));
row1.append(createdata("data6", "State"));
row1.append(createdata("data7", "Country"));
row1.append(createdata("data8", "Choice of Food"));


var row2 = createrow("row2", "tablerow2");
row2.append(createdata("data21", " "));
row2.append(createdata("data22", " "));
row2.append(createdata("data23", " "));
row2.append(createdata("data24", " "));
row2.append(createdata("data25", " "));
row2.append(createdata("data26", " "));
row2.append(createdata("data27", " "));
row2.append(createdata("data28", "     "));

table.append(row1, row2);


section.append(form, heading, table);

var datacollect = (event) => {

    event.preventDefault();
    var count = 0;
    var favfood = " ";

    var fname = document.getElementById("Firstname").value;
    var lname = document.getElementById("Lastname").value;
    var add = document.getElementById("address").value;
    var pinc = document.getElementById("pincode").value;
    var gen = document.getElementById("choosegender").value;
    var st = document.getElementById("state").value;
    var co = document.getElementById("country").value;


    if (document.getElementById("radio1").checked === true) {
        count++;
        favfood += document.getElementById("radio1").value + ",";
    }
    else if (document.getElementById("radio2").checked === true) {
        count++;
        favfood += document.getElementById("radio2").value + ",";
    }
    if (document.getElementById("radio3").checked === true) {
        count++;
        favfood += document.getElementById("radio3").value + ",";
    }
    if (document.getElementById("radio4").checked === true) {
        count++;
        favfood += document.getElementById("radio4").value + ",";
    }
    if (document.getElementById("radio5").checked === true) {
        count++;
        favfood += document.getElementById("radio5").value + ",";
    }
    console.log(count);
    if (count >= 2) {

        document.getElementById("data21").innerText = fname;
        document.getElementById("data22").innerText = lname;
        document.getElementById("data23").innerHTML = add;
        document.getElementById("data24").textContent = pinc;
        document.getElementById("data25").textContent = gen;
        document.getElementById("data26").innerHTML = st;
        document.getElementById("data27").textContent = co;
        document.getElementById("data28").textContent = favfood;

        document.getElementById("Firstname").value = " ";
        document.getElementById("Lastname").value = " ";
        document.getElementById("address").value = " ";
        document.getElementById("pincode").value = " ";
        document.getElementById("choosegender").value = " ";
        document.getElementById("radio1").checked = false;
        document.getElementById("radio2").checked = false;
        document.getElementById("radio3").checked = false;
        document.getElementById("radio4").checked = false;
        document.getElementById("radio5").checked = false;
        document.getElementById("state").value = " ";
        document.getElementById("country").value = " ";
    }
    else
        alert("Please Select Atleast 2 checkbox from fav food");


};

form.addEventListener("submit", datacollect);



