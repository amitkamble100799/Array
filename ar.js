// Q1
/*"let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] " */
 let studentRecord1=[{name:"john",id:123,mark:98},
                    {name:"Baba",id:101,mark:23},
                    {name:"yoga",id:200,mark:45},
                    {name:"Wick",id:115,mark:75}
                 ];
 let studentName=studentRecord1.map(function(student){
     return student.name.toUpperCase();
 });
 console.log("Stundentsname",studentName); 
                 

// Q2
 let studentRecord2=[{name:"john",id:123,mark:98},
                    {name:"Baba",id:101,mark:23},
                    {name:"yoga",id:200,mark:45},
                    {name:"Wick",id:115,mark:75}
                 ];
 let highMark=studentRecord2.filter((student)=>{
     return student.mark>50;
 });
 console.log("highmarks",highMark);



// Q3
 let studentRecord3=[{name:"john",id:123,mark:98},
                    {name:"Baba",id:101,mark:23},
                    {name:"yoga",id:200,mark:45},
                    {name:"Wick",id:115,mark:75}
                 ];
 let result=studentRecord3.filter(student=>student.mark>50 && student.id>120);
 console.log("result",result);


// Q4
 let studentRecord4=[{name:"john",id:123,mark:98},
                    {name:"Baba",id:101,mark:23},
                    {name:"yoga",id:200,mark:45},
                    {name:"Wick",id:115,mark:75}
                 ];
 let TotalMark=studentRecord4.reduce((pre,cur)=>pre+cur.mark,0);
 console.log("total marks",TotalMark); 


// Q5
 let studentRecord5=[{name:"john",id:123,mark:98},
                    {name:"Baba",id:101,mark:23},
                    {name:"yoga",id:200,mark:45},
                    {name:"Wick",id:115,mark:75}
                 ];

 let process1=studentRecord5.filter(student=>student.mark>50);      
 let studentNameOnly=process1.map(student=>student.name);      
 console.log("studentRecord5",studentNameOnly);


// Q6
 let studentRecord=[{name:"john",id:123,mark:98},
                    {name:"Baba",id:101,mark:23},
                    {name:"yoga",id:200,mark:45},
                    {name:"Wick",id:115,mark:75}
                 ]
 let process=studentRecord.filter(student=>student.id>120);      
 let Sum=process.reduce((pre,cur)=>pre+cur.mark,0);
 console.log("sum",Sum);



// Q7
 let studentRecords = [
     {name: 'John', id: 123, marks : 98 },
     {name: 'Baba', id: 101, marks : 23 },
     {name: 'yaga', id: 200, marks : 45 },
     {name: 'Wick', id: 115, marks : 75 }
   ];
   let updated= studentRecords.map(student => {
     if (student.marks < 50) {
       return { ...student, marks: student.marks + 15 };
     } else {
       return student;
     }
   });
   let filteredRecords = updated.filter(record => record.marks > 50);
   let totalMarks = filteredRecords.reduce((pre,cur) => pre+cur.marks, 0);
   console.log("total marks"+ totalMarks);



// Q8
 let student1={name:"mahima",class:"first",rollNo:10};
 let student2={name:"falguni",class:"second",rollNo:20};
 let student3={name:"priya",class:"third",rollNo:30};
 let student4={name:"tina",class:"fourth",rollNo:40};
 let student5={name:"riya",class:"fifth",rollNo:50};
 let student6={name:"aditi",class:"sixth",rollNo:60};

 let Students=[student1,student2,student3,student4,student5,student6];

 console.log("stundes",Students);