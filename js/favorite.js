var string = document.getElementsByTagName('tag')[0].getAttribute("id");
var tmplate, datajson, one;
// axios.get('../ejs/passage.ejs').then(res => {
//     console.log(res.data);
//     tmplate = res.data;
// }).catch(err => {
//     console.log(err);
// })

axios.get('../json/roles.json').then(response => {
    console.log(response.data);
//     datajson = response.data;
//     var html = ejs.render(tmplate, { passage: datajson.passage, tag: string });
//     document.getElementById("details").innerHTML = html;
// }).catch(err => {
//     console.log(err);
})