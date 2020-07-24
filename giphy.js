
$('#submit').bind("click",function(e){
    e.preventDefault()
    // console.log({$('input').val()};)
    getParameters($("input").val(),"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym")
    
})

$("#remove").bind("click",function(e){
    e.preventDefault()
    $('div img').remove();
})

async function getParameters(q,api_key){
    try {let x = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q,api_key}})//"api_key" : "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
    if(x.data.data[0].url){
    $('#imageHolder').append("<img>")
    $('img').attr("src",`${x.data.data[0].url}`)
    }
    } catch(e){

    }
}

