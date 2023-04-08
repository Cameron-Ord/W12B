
let injector = document.querySelector(`#section_main`);

injector.insertAdjacentHTML(`beforeend`,
`<article>
<span>
<input type="value" id="post_input">
<button class="POST">POST</button>

</span>
<span>
<input type="value" id="patch_input">
<button class="PATCH">PATCH</button>

</span>
<span>
<input type="value" id="delete_input">
<button class="DELETE">DELETE</button>

</span>
</article>`
);




function POSTsuccess(response){

    let output = document.querySelector(`#section_secondary`);


    output.insertAdjacentHTML(`beforeend`, `<h3>success</h3>`);

}

function POSTfailure(){

    let output = document.querySelector(`#section_secondary`);

    output.insertAdjacentHTML(`beforeend`, `<h3>failure</h3>`);
}

function POST_click(details){

    let post_input = document.querySelector(`#post_input`);
    let post_input_value = post_input[`value`];

    axios.request({

        url: `https://jsonplaceholder.typicode.com/posts`,

        method: `POST`,

        data: {

            title: post_input_value
            
        }

    }).then(POSTsuccess).catch(POSTfailure);
}; 

let post_button = document.querySelectorAll(`.POST`);
for(let counter = 0; counter < post_button.length; counter = counter +1){
post_button[counter].addEventListener(`click`, POST_click);



}