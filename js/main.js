realtime()
function realtime(){
    let date = Date();
    let time = document.getElementById('time').innerHTML = date.slice(16,24);

    setTimeout(realtime, 1000)
}
let doingArr = [];
let doneArr = [];
let completedArr = [];
let userId = 0

let user = document.getElementById('user');
let theme = document.getElementById('theme');
let description = document.getElementById('description');
let deadline = document.getElementById('deadline');
let date = Date();


function addTask(){
    
    let doing = document.getElementById('doing')
    doing.innerHTML += '<div class="border mt-3 p-2"><p><b>'+
    user.value.toUpperCase() +'</b></p><hr><p><b>'+
    theme.value+'</b></p><p>'+
    description.value +'</p><hr><p>Deadline: '+
    deadline.value +'</p><p>'+
    date.slice(16,24)+'</p>'+
    '<button onclick=toDone('+userId+') class="btn btn-warning w-100 mt-3">To Done</button>'+'</div>'

    let newTask = {
        userId: userId,
        user: user.value,
        theme: theme.value,
        description: description.value,
        deadline: deadline.value,
        date: date.slice(16,24)
    }
    doingArr.push(newTask)
    userId++
}

function toDone(id){
    let cache = []
    let doing = document.getElementById('doing');
    let done = document.getElementById('done');
    doing.innerHTML = "";
    done.innerHTML = "";
    for(let i = 0; i<doingArr.length; i++){
        if(doingArr[i].userId != id){
            cache.push(doingArr[i])
            
            doing.innerHTML += '<div class="border mt-3 p-2"><p><b>'+
            doingArr[i].user.toUpperCase() +'</b></p><hr><p><b>'+
            doingArr[i].theme+'</b></p><p>'+
            doingArr[i].description +'</p><hr><p>Deadline: '+
            doingArr[i].deadline+'</p><p>'+
            doingArr[i].date+'</p>'+
            '<button onclick=toDone('+ doingArr[i].userId +') class="btn btn-warning w-100 mt-3">To Done</button></div>'
            
        } else {
            doneArr.push(doingArr[i]) 
        }
    }
    doingArr = cache
    for(let i = 0; i<doneArr.length; i++){
        done.innerHTML += '<div class="border mt-3 p-2"><p><b>'+
        doneArr[i].user.toUpperCase() +'</b></p><hr><p><b>'+
        doneArr[i].theme+'</b></p><p>'+
        doneArr[i].description +'</p><hr><p>Deadline: '+
        doneArr[i].deadline+'</p><p>'+
        doneArr[i].date+'</p>'+
        '<button onclick=toDoing('+ doneArr[i].userId +') class="btn btn-danger w-100 mt-3">To Doing</button>'+
        '<button onclick=toCompleted('+ doneArr[i].userId +') class="btn btn-success w-100 mt-3">To Completed</button>'+'</div>'
    }
}

function toDoing(id){
    let cache = []
    let doing = document.getElementById('doing');
    let done = document.getElementById('done');
    doing.innerHTML = "";
    done.innerHTML = "";
    for(let i = 0; i<doneArr.length; i++){
        if(doneArr[i].userId != id){
            cache.push(doneArr[i])

            done.innerHTML += '<div class="border mt-3 p-2"><p><b>'+
            doneArr[i].user.toUpperCase() +'</b></p><hr><p><b>'+
            doneArr[i].theme+'</b></p><p>'+
            doneArr[i].description +'</p><hr><p>Deadline: '+
            doneArr[i].deadline+'</p><p>'+
            doneArr[i].date+'</p>'+
            '<button onclick=toDoing('+ doneArr[i].userId +') class="btn btn-danger w-100 mt-3">To Doing</button>'+
        '<button onclick=toCompleted('+ doneArr[i].userId +') class="btn btn-success w-100 mt-3">To Completed</button>'+'</div>'
        } else {
            doingArr.push(doneArr[i]) 
        }
    }
    doneArr = cache
    for(let i = 0; i<doingArr.length; i++){
        doing.innerHTML += '<div class="border mt-3 p-2"><p><b>'+
        doingArr[i].user.toUpperCase() +'</b></p><hr><p><b>'+
        doingArr[i].theme+'</b></p><p>'+
        doingArr[i].description +'</p><hr><p>Deadline: '+
        doingArr[i].deadline+'</p><p>'+
        doingArr[i].date+'</p>'+
        '<button onclick=toDone('+ doingArr[i].userId +') class="btn btn-warning w-100 mt-3">To Done</button></div>'


    }

}
function toCompleted(id){
    let cache = []
    let completed = document.getElementById('completed')
    let done = document.getElementById('done');
    doing.innerHTML = "";
    done.innerHTML = "";
    for(let i = 0; i<doneArr.length; i++){
        if(doneArr[i].userId != id){
            cache.push(doneArr[i])

            done.innerHTML += '<div class="border mt-3 p-2"><p><b>'+
            doneArr[i].user.toUpperCase() +'</b></p><hr><p><b>'+
            doneArr[i].theme+'</b></p><p>'+
            doneArr[i].description +'</p><hr><p>Deadline: '+
            doneArr[i].deadline+'</p><p>'+
            doneArr[i].date+'</p>'+
            '<button onclick=toDoing('+ doneArr[i].userId +') class="btn btn-danger w-100 mt-3">To Doing</button>'+
            '<button onclick=toCompleted('+ doneArr[i].userId +') class="btn btn-success w-100 mt-3">To Completed</button>'+'</div>'
        } else {
            completedArr.push(doneArr[i]) 
        }
    }
    doneArr = cache
    for(let i = 0; i<completedArr.length; i++){
        completed.innerHTML += '<div class="border mt-3 p-2"><p><b>'+
        completedArr[i].user.toUpperCase() +'</b></p><hr><p><b>'+
        completedArr[i].theme+'</b></p><p>'+
        completedArr[i].description +'</p><hr><p>Deadline: '+
        completedArr[i].deadline+'</p><p>'+
        completedArr[i].date+'</p>'

        
    }
}

