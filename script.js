const btn = document.getElementById('btn');
const tbody = document.querySelector('tbody');
const addTableData = [];
function saveData(){
    tbody.innerHTML = "";
    
    addTableData.map((data,index)=>{
        const tr = document.createElement('tr');
        const tdId = document.createElement('td');
        tdId.textContent = index+1;
        const tdName = document.createElement('td');
        tdName.textContent = data.Name;
        const tdRoll = document.createElement('td');
        tdRoll.textContent = data.Roll;
        const tdSubject = document.createElement('td');
        tdSubject.textContent = data.Subject;
        const tdMarks = document.createElement('td');
        tdMarks.textContent = data.Marks;
        const tdMarksBy = document.createElement('td');
        tdMarksBy.textContent = data.MarksBy;
        tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdRoll);
    tr.appendChild(tdSubject);
    tr.appendChild(tdMarks);
    tr.appendChild(tdMarksBy);

    tbody.appendChild(tr);
    })

}

function createNewRow(){
    //console.log("row");
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.textContent = addTableData.length + 1;
    //const inputId = document.createElement('input');
    //tdId.appendChild(inputId);
    const tdName = document.createElement('td');
    const inputName = document.createElement('input');
    inputName.setAttribute('type','text');
    tdName.appendChild(inputName);
    const tdRoll = document.createElement('td');
    const inputRoll = document.createElement('input');
    inputRoll.setAttribute('type','number');
    tdRoll.appendChild(inputRoll);
    const tdSubject = document.createElement('td');
    const inputSubject = document.createElement('input');
    inputSubject.setAttribute('type','text');
    tdSubject.appendChild(inputSubject);
    const tdMarks = document.createElement('td');
    const inputMarks = document.createElement('input');
    inputMarks.setAttribute('type','number');
    tdMarks.appendChild(inputMarks);
    const tdMarksBy = document.createElement('td');
    const inputMarksBy = document.createElement('input');
    inputMarks.setAttribute('type','email')
    inputMarksBy.setAttribute('type','text');
    tdMarksBy.appendChild(inputMarksBy);
    const tdBtn = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'Save';
    tdBtn.appendChild(button);

    
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdRoll);
    tr.appendChild(tdSubject);
    tr.appendChild(tdMarks);
    tr.appendChild(tdMarksBy);
    tr.appendChild(tdBtn);

    tbody.appendChild(tr);

    button.addEventListener('click',function(){
        const inputNameValue = inputName.value;
    const inputRollValue = inputRoll.value;
    const inputSubjectValue = inputSubject.value;
    const inputMarksValue = inputMarks.value;
    const inputMarksByValue = inputMarksBy.value;
    const object = {};
    if(inputNameValue && inputRollValue && inputSubjectValue && inputMarksValue && inputMarksByValue){
        //const obj = {
            object.Name=inputNameValue,
            object.Roll=inputRollValue,
            object.Subject=inputSubjectValue,
            object.Marks=inputMarksValue,
            object.MarksBy=inputMarksByValue,
        //};
        console.log(object);
        //console.log("string");
        addTableData.push(object);
        //SaveData();
    }
    
    else{
        alert("Please enter all the fields");
    }
    console.log(object);
    saveData();
})
    };
btn.addEventListener('click',createNewRow);
console.log(addTableData);

