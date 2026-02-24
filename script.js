
let interview_List = [];
let reject_List = [];




function Toggle(id) {
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


//Toggling from main/all selction
const main_container = document.getElementById("all-cards");

main_container.addEventListener('click', function (event) {

    if (event.target.classList.contains("int")) {
        const parent = event.target.parentNode.parentNode;
        const company = parent.querySelector(".company").innerText;
        const skill = parent.querySelector(".skill").innerText;
        const about = parent.querySelector(".about").innerText;
        const apply_status = parent.querySelector(".apply-status").innerText;
        const work_descript = parent.querySelector(".work-descript").innerText;

        //console.log(company,skill,about,apply_status,work_descript);

         const status = parent.querySelector(".apply-status");
         status.classList.remove('bg-blue-100');
         status.classList.remove('btn-error');
         status.classList.add('btn-success');
         status.innerText = "INTERVIEW";
         

        const cardinfo = {
            company,
            skill,
            about,
            apply_status:'INTERVIEW',
            work_descript
        }


        //console.log(cardinfo);
        const ExistInt = interview_List.find(item => item.company == cardinfo.company);

        if (!ExistInt) {
            interview_List.push(cardinfo);
        }
        reject_List = reject_List.filter(item => item.company != cardinfo.company);
        RenderInterview();
        RenderRejcet();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);
    }

    else if (event.target.classList.contains("rej")) {
        const parent = event.target.parentNode.parentNode;

        const company = parent.querySelector(".company").innerText;
        const skill = parent.querySelector(".skill").innerText;
        const about = parent.querySelector(".about").innerText;
        const apply_status = parent.querySelector(".apply-status").innerText;
        const work_descript = parent.querySelector(".work-descript").innerText;

        //console.log(company,skill,about,apply_status,work_descript);

         const status = parent.querySelector(".apply-status");
         status.classList.remove('bg-blue-100');
         status.classList.remove('btn-success');
         status.classList.add('btn-error');
         status.innerText = "REJECT";

        const cardinfo = {
            company,
            skill,
            about,
            apply_status:'REJECT',
            work_descript
        }


        //console.log(cardinfo);
        const ExistRej = reject_List.find(item => item.company == cardinfo.company);

        if (!ExistRej) {
            reject_List.push(cardinfo);
        }
        interview_List = interview_List.filter(item => item.company != cardinfo.company);
        RenderInterview();
        RenderRejcet();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);
    }


    //console.log(interview_List);
})


const Interview_container = document.getElementById("interview");


//Toggling from Interview Section
Interview_container.addEventListener('click', function (event) {

    if (event.target.classList.contains("int")) {
        const parent = event.target.parentNode.parentNode;
        //console.log(parent.getAttribute("id"));

        const company = parent.querySelector(".company").innerText;
        const skill = parent.querySelector(".skill").innerText;
        const about = parent.querySelector(".about").innerText;
        const apply_status = parent.querySelector(".apply-status").innerText;
        const work_descript = parent.querySelector(".work-descript").innerText;

        //console.log(company,skill,about,apply_status,work_descript);

        const status = parent.querySelector(".apply-status");
        status.classList.remove('btn-error','bg-blue-100');
    

        //Update AllJobs status
        //updateJobStatus(parent.);
        

        const cardinfo = {
            company,
            skill,
            about,
            apply_status:'INTERVIEW',
            work_descript
        }
        
        //console.log(cardinfo);
        const ExistInt = interview_List.find(item => item.company == cardinfo.company);

        if (!ExistInt) {
            interview_List.push(cardinfo);
        }
        reject_List = reject_List.filter(item => item.company != cardinfo.company);
        RenderInterview();
        RenderRejcet();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);
         
    }

    else if (event.target.classList.contains("rej")) {
        const parent = event.target.parentNode.parentNode;

        const company = parent.querySelector(".company").innerText;
        const skill = parent.querySelector(".skill").innerText;
        const about = parent.querySelector(".about").innerText;
        const apply_status = parent.querySelector(".apply-status").innerText;
        const work_descript = parent.querySelector(".work-descript").innerText;

        //console.log(company,skill,about,apply_status,work_descript);

        const cardinfo = {
            company,
            skill,
            about,
            apply_status:'REJECT',
            work_descript
        }
        //button color set default
        const status = parent.querySelector(".apply-status");
        status.classList.remove('btn-success','bg-blue-100');

        //console.log(cardinfo);
        const ExistRej = reject_List.find(item => item.company == cardinfo.company);

        if (!ExistRej) {
            reject_List.push(cardinfo);
        }
        interview_List = interview_List.filter(item => item.company != cardinfo.company);
        RenderInterview();
        RenderRejcet();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);

        const parentSection = document.getElementById("all-cards");
        updateAllJobInterviewStatus(parentSection,cardinfo.company);
    }
})


//Toggling from Reject section
const reject_container = document.getElementById("reject");

reject_container.addEventListener('click', function (event) {

    if (event.target.classList.contains("int")) {
        const parent = event.target.parentNode.parentNode;

        const company = parent.querySelector(".company").innerText;
        const skill = parent.querySelector(".skill").innerText;
        const about = parent.querySelector(".about").innerText;
        const apply_status = parent.querySelector(".apply-status").innerText;
        const work_descript = parent.querySelector(".work-descript").innerText;

        //console.log(company,skill,about,apply_status,work_descript);

        const status = parent.querySelector(".apply-status");
        status.classList.remove('btn-error','bg-blue-100');

        const cardinfo = {
            company,
            skill,
            about,
            apply_status:'INTERVIEW',
            work_descript
        }


        //console.log(cardinfo);
        const ExistInt = interview_List.find(item => item.company == cardinfo.company);

        if (!ExistInt) {
            interview_List.push(cardinfo);
        }
        reject_List = reject_List.filter(item => item.company != cardinfo.company);
        RenderInterview();
        RenderRejcet();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);

         const parentSection = document.getElementById("all-cards");
         updateAllJobRejectStatus(parentSection,cardinfo.company);
    }

    else if (event.target.classList.contains("rej")) {
        const parent = event.target.parentNode.parentNode;

        const company = parent.querySelector(".company").innerText;
        const skill = parent.querySelector(".skill").innerText;
        const about = parent.querySelector(".about").innerText;
        const apply_status = parent.querySelector(".apply-status").innerText;
        const work_descript = parent.querySelector(".work-descript").innerText;

        //console.log(company,skill,about,apply_status,work_descript);

        const status = parent.querySelector(".apply-status");
        status.classList.remove('btn-success','bg-blue-100');

        const cardinfo = {
            company,
            skill,
            about,
            apply_status:'REJECT',
            work_descript
        }


        //console.log(cardinfo);
        const ExistRej = reject_List.find(item => item.company == cardinfo.company);

        if (!ExistRej) {
            reject_List.push(cardinfo);
        }
        interview_List = interview_List.filter(item => item.company != cardinfo.company);
        RenderInterview();
        RenderRejcet();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);
        
    }
})

//Deletion**

//DeleteFrom main container
main_container.addEventListener('click', function (event) {

    if (event.target.classList.contains("Delete-btn")) {

        const parent = event.target.parentNode.parentNode.parentNode;
        parent.remove();

        const company_add = parent.querySelector(".company").innerText;

        //console.log(company_add);
        interview_List = interview_List.filter(item => item.company != company_add);
        reject_List = reject_List.filter(item => item.company != company_add);

        RenderInterview();
        RenderRejcet();
        updateCount();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);    
    }

})


////DeleteFrom Interview container
Interview_container.addEventListener('click', function (event) {

    if (event.target.classList.contains("Delete-btn")) {

        const parent = event.target.parentNode.parentNode.parentNode;
        parent.remove();

        const company_add = parent.querySelector(".company").innerText;

        //console.log(company_add);
        interview_List = interview_List.filter(item => item.company != company_add);
        reject_List = reject_List.filter(item => item.company != company_add);

        //DeleteJobMain 
        const parentSection = document.getElementById("all-cards");
        DelteInJobInterview(parentSection,company_add);

        RenderInterview();
        RenderRejcet();
        updateCount();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);
        
        
        
    }

})

//Delete From Reject Container
reject_container.addEventListener('click', function (event) {

    if (event.target.classList.contains("Delete-btn")) {

        const parent = event.target.parentNode.parentNode.parentNode;
        parent.remove();

        const company_add = parent.querySelector(".company").innerText;

        //console.log(company_add);
        interview_List = interview_List.filter(item => item.company != company_add);
        reject_List = reject_List.filter(item => item.company != company_add);

        //DeleteJobMain 
        const parentSection = document.getElementById("all-cards");
        DelteInJobInterview(parentSection,company_add);

        RenderInterview();
        RenderRejcet();
        updateCount();
        updateInterviewCount(interview_List.length);
        updateRejectCount(reject_List.length);
        
        
        
    }

})

//Render Functions
function RenderInterview() {

    

    const par = document.getElementById("int-non-empty-div");
    par.innerHTML = '';

    for (card of interview_List) {

        let div = document.createElement('div');
        div.classList.add('space-y-3', 'shadow-md', 'p-6')
        div.innerHTML = `
        <div class="flex justify-between items-center">
                    <div>
                        <p class="company text-[20px] font-bold text-blue-950">${card.company}</p>
                        <p class="skill text-[16px] text-gray-500">${card.skill}</p>
                    </div>
                    <button class="cursor-pointer"> <img class="Delete-btn size-6" src="assets/Trash.png" alt="">
                    </button>
        </div>
                <p class="about text-[16px] text-gray-500">${card.about}</p>
                <button class="apply-status btn btn-success w-max cursor-default">${card.apply_status}</button>
                <p class="work-descript text-[16px]">${card.work_descript}</p>
                <div>
                    <button class="int btn btn-outline btn-success">INTERVIEW</button>
                    <button class="rej btn btn-outline btn-error">REJECTED</button>
                </div>`;
        par.appendChild(div);

    }


}

function RenderRejcet() {


    const par = document.getElementById("rej-non-empty-div");
    par.innerHTML = '';

    for (card of reject_List) {

        let div = document.createElement('div');
        div.classList.add('space-y-3', 'shadow-md', 'p-6')
        div.innerHTML = `
        <div class="flex justify-between items-center">
                    <div>
                        <p class="company text-[20px] font-bold text-blue-950">${card.company}</p>
                        <p class="skill text-[16px] text-gray-500">${card.skill}</p>
                    </div>
                    <button class="cursor-pointer"> <img class="Delete-btn size-6" src="assets/Trash.png" alt="">
                    </button>
                </div>
                <p class="about text-[16px] text-gray-500">${card.about}</p>
                <button class="apply-status btn btn-error w-max cursor-default">${card.apply_status}</button>
                <p class="work-descript text-[16px]">${card.work_descript}</p>
                <div>
                    <button class="int btn btn-outline btn-success">INTERVIEW</button>
                    <button class="rej btn btn-outline btn-error">REJECTED</button>
                </div>`;
        par.appendChild(div);
    }

}








