

function filtering(id){

    const allSection = document.getElementById("all-jobs");
    const interviewSection = document.getElementById("interview");
    const rejectSection = document.getElementById("reject");
    allSection.classList.add("hidden");
    interviewSection.classList.add("hidden");
    rejectSection.classList.add("hidden");
    
    if(id ==='all-btn'){
        allSection.classList.remove("hidden");
    }
    else if(id ==='interview-btn'){
        const int_empty = document.getElementById("int-empty-div");
        const int_non_empty = document.getElementById("int-non-empty-div");
        int_empty.classList.add("hidden");
        int_non_empty.classList.add("hidden");

        interviewSection.classList.remove("hidden"); //major

        if(interview_List.length != 0){
            int_non_empty.classList.remove("hidden");
        }
        else{
            int_empty.classList.remove("hidden");
        }
    }
    else{
        const rej_empty = document.getElementById("rej-empty-div");
        const rej_non_empty = document.getElementById("rej-non-empty-div");
        rej_empty.classList.add("hidden");
        rej_non_empty.classList.add("hidden");

        rejectSection.classList.remove("hidden"); //major

        if(reject_List.length != 0){
            rej_non_empty.classList.remove("hidden");
        }
        else{
            rej_empty.classList.remove("hidden");
        }
    }
}

