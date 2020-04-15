$(readyNow);

function readyNow() {
    console.log('JQ');
    getTestData();
    $('#addPerson').on('click', addPerson);
}

function addPerson(){
    $.ajax({
        type:'POST',
        url:'/tester',
        data: {
            name: 'Thy',//will become req.body
        }
    }).then(function(response){
        console.log('back from server with', response);
        //DOM does not reflect array in server, do another GET
    }).catch(function (err){
        alert('ERROR IN PORT');
        // console.log(err);
    })
}

function getTestData() {
    console.log('in getTestData');
    //AJAX GET call to /tester
    $.ajax({
        type: 'GET',
        url: '/tester'
    }).then(function (response) {
        console.log('back from server with', response);
        //append to dom...
        appendToDom(response);
    }).catch(function (err) {
        alert('problem! check console');
        console.log(err);
    })
}//end getTestData

function appendToDom(listOfPeople) {
    $("#personList").empty();
    for(let person of listOfPeople){
        $('#personList').append(`<li>${person}</li>`);
    };
    //target UL, add each person to DOM
};