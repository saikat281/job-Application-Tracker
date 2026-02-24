
const allSection = document.getElementById("all-jobs");
const interviewSection = document.getElementById("interview");
const rejectSection = document.getElementById("reject");

function filtering(id) {

    allSection.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectSection.classList.add("hidden");

    if (id === 'all-btn') {

        //RejectSectionJobCount(handle_bug)
        const available_jobs = document.getElementById("available-jobs");
        allCardCount = allCount_cards.children.length;
        available_jobs.innerText = allCardCount;

        allSection.classList.remove("hidden");
    }
    else if (id === 'interview-btn') {
        const int_empty = document.getElementById("int-empty-div");
        const int_non_empty = document.getElementById("int-non-empty-div");
        int_empty.classList.add("hidden");
        int_non_empty.classList.add("hidden");

        interviewSection.classList.remove("hidden"); //major
        allSection.classList.add("hidden");
        rejectSection.classList.add("hidden");


        //interviewSectionJobCount(handle_bug)
        const available_jobs = document.getElementById("available-jobs");
        available_jobs.innerText = interview_List.length;
         

        if (interview_List.length != 0) {
            int_non_empty.classList.remove("hidden");
        }
        else {
            int_empty.classList.remove("hidden");
        }
    }


    else {
        const rej_empty = document.getElementById("rej-empty-div");
        const rej_non_empty = document.getElementById("rej-non-empty-div");
        rej_empty.classList.add("hidden");
        rej_non_empty.classList.add("hidden");

        rejectSection.classList.remove("hidden"); //major
        allSection.classList.add("hidden");
        interviewSection.classList.add("hidden");

        //RejectSectionJobCount(handle_bug)
        const available_jobs = document.getElementById("available-jobs");
        available_jobs.innerText = reject_List.length;

        if (reject_List.length != 0) {
            rej_non_empty.classList.remove("hidden");
        }
        else {
            rej_empty.classList.remove("hidden");
        }
    }
}


//Update AllCount
const allCount_cards = document.getElementById("all-cards");
let allCardCount = allCount_cards.children.length;
let total_cnt = document.getElementById("total-cnt");
let available_jobs = document.getElementById("available-jobs");
total_cnt.innerText = allCardCount;
available_jobs.innerText = allCardCount;
//UpdateAllCountFunction
function updateCount() {
    allCardCount = allCount_cards.children.length;
    total_cnt.innerText = allCardCount;
    available_jobs.innerText = allCardCount;
    //console.log(allCardCount);
    if(allCardCount == 0)
    {
        const emptyAllCards = allSection.querySelector(".empty-cards");
        emptyAllCards.classList.remove("hidden");
    }
}

//UpdateInterviewCount
let inter_count = document.getElementById("interview-cnt");
//UpdateInterviewCountFunction
function updateInterviewCount(count){
    inter_count.innerText = count;
}


//UpdateRejcetCount
let reject_count = document.getElementById("reject-cnt");
//UpdateRejcetCountFunction
function updateRejectCount(count){
    reject_count.innerText = count;
}


//Update status in all-jobs section when updating from interviewSection/RejectSection
function updateAllJobRejectStatus(Parent_section,s_Company){

    const selected_div = Parent_section.querySelector(`.card[data-company="${s_Company}"]`);
    //console.log(selected_div);
    const selected = selected_div.querySelector(".apply-status");
    //selected.innerHTML = '';
    selected.classList.remove('btn-error','bg-blue-100')
    selected.classList.add('btn-success');
    selected.innerText = "INTERVIEW"
   
}
function updateAllJobInterviewStatus(Parent_section,s_Company){
    const selected_div = Parent_section.querySelector(`.card[data-company="${s_Company}"]`);
    //console.log(selected_div);
    const selected = selected_div.querySelector(".apply-status");
    //selected.innerHTML = '';
    selected.classList.remove('btn-success','bg-blue-100')
    selected.classList.add('btn-error');
    selected.innerText = "REJECT";
}


//Delete in all-job from interview/Reject Section
function DelteInJobInterview(parent_section,s_Company){
    const selected_div = parent_section.querySelector(`.card[data-company="${s_Company}"]`);
    //console.log(selected_div);
    selected_div.remove();
}
