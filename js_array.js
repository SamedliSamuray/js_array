let students=[
    {
        name:'Ricardo',
        surname:'Quaresma',
        country:'Porteguise',
        age:38,
        nickname:'ciganito',
        point:78,
        hobbies:['football',['rock music', 'rap music', 'jazz music'],['swimming','diving']],

    },


    {
        name:'Cenk',
        surname:'Tosun',
        country:'Turkey',
        age:32,
        nickname:'Tosun Pasha',
        point:75,
        hobbies:['football',['argeology','history','researcher'],'game'],

    },
    {
        name:'Qurban',
        surname:'Qurbanov',
        country:'Azerbaijan',
        age:46,
        nickname:'Legend',
        point:99,
        hobbies:['football',['mugham','retro music','jazz'],'running'],

    },

    {
        name:'Lionel',
        surname:'Messi',
        country:'Argentina',
        age:35,
        nickname:'Alien',
        point:99,
        hobbies:['football','gaming','music','travel']

    },

    {
        name:'Aitana',
        surname:'Bonmati',
        country:'Spain',
        age:26,
        nickname:'Wonder Woman',
        point:89,
        hobbies:['football',,'travel'['rock music','rap music','jazz music'],'gaming'],

    },

    {
        name:'Alex',
        surname:'Morgan',
        country:'USA',
        age:34,
        nickname:'Baby Horse',
        point:99,
        hobbies:['football','artist','reader','architech','gaming'],

    },

    {
        
        name:'Necip',
        surname:'Uysal',
        country:'Turkey',
        age:33,
        nickname:'MAN',
        point:65,
        hobbies:['football','rap music',['artist','architech'],'gaming'],

    }
]

let sumPoint=0;


// Metod 1

// students.forEach(student => {
//     sumPoint+=student.point;

//     if(student.point<90){
//         console.log(`Tələbə : ${student.name} ${student.surname}, balınız kecid balından ${90-student.point} bal aşagıdır. Biraz daha çalışın.`);
//     }

// });

// let average=Math.round(sumPoint/students.length);
// console.log(`Tələbələrin  ortalama balı : ${average}`);




// Metod 2

students.map(student => {
    sumPoint += student.point;

    if (student.point < 90) {

 console.log(`Tələbə : ${student.name} ${student.surname}, balınız kecid balından ${90-student.point} bal aşagıdır. Biraz daha çalışın.`);
    
}
});

let average = Math.round(sumPoint / students.length);
console.log(`Tələbələrin ortalama balı: ${average}`);


