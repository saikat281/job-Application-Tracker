

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
        interviewSection.classList.remove("hidden");
    }
    else{
        rejectSection.classList.remove("hidden");
    }
}