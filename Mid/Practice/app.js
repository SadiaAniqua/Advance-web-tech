//console.log("hello world");
function getStudentData()
return new Promise((resolve,reject)) =>{
    console.log("Promise Strated......");

    setTimeout(()=> {
        const success = true;
        if (success) {
       
            resolve({
                id:2727272,
                name:"Hamim",
                cgpa:2.50
            });
        
    }
    else{
        reject("Failed to get student data");
    }
},2000);

getStudentData()
.then ((student)=> {
    console.log("Student data received!");
    console.log("ID:", student.id);

} )