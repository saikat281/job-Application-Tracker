
let interview_arr = [];
let reject_arr = 


function Toggle(id){
    const all = document.getElementById("all-btn");
    const interview = document.getElementById("interview-btn");
    const reject = document.getElementById("reject-btn");

    

    all.classList.remove('text-white', 'bg-blue-500');
    interview.classList.remove('text-white', 'bg-blue-500');
    reject.classList.remove('text-white', 'bg-blue-500');
    //interview.classList.remove("text-white bg-blue-500");
    //reject.classList.remove("text-white bg-blue-500");
    
    all.classList.add("text-gray-500");
    interview.classList.add("text-gray-500");
    reject.classList.add("text-gray-500");

    const selected = document.getElementById(id);
    //console.log(selected.innerText)
    selected.classList.remove("text-gray-500");
    selected.classList.add('text-white', 'bg-blue-500');

    //Toggle section
    const allSection = document.getElementById("all-jobs");
    const interviewSection = document.getElementById("interview");
    const rejectSection = document.getElementById("reject");

    //Filtering
    filtering(id);
 
}

//Interview / Rejection

    const main_container = document.getElementById("all-cards");

    main_container.addEventListener('click',function(event){
        const parent = event.target.parentNode.parentNode;

        const company = parent.querySelector(".company").innerText ;
        const skill = parent.querySelector(".skill").innerText ; 
        const about = parent.querySelector(".about").innerText ;
        const apply_status = parent.querySelector(".apply-status").innerText;
        const work_descript = parent.querySelector(".work-descript").innerText;
        
        console.log(company,skill,about,apply_status,work_descript);
        // ,,,,
    })



