
let injector = document.querySelector(`#section_main`);

injector.insertAdjacentHTML(`beforeend`,
    `<article id="main_article">
<span>
<input type="value" id="post_input">
<button class="POST">POST</button>

</span>
<span>

<button class="PATCH">PATCH</button>

</span>
<span>

<button class="DELETE">DELETE</button>

</span>
</article>

<article id="GET">



</article>`
);




function POSTsuccess(response) {

    let output = document.querySelector(`#main_article`);


    output.insertAdjacentHTML(`beforeend`, `<h3>success</h3>`);

};

function POSTfailure() {

    let output = document.querySelector(`#main_article`);

    output.insertAdjacentHTML(`beforeend`, `<h3>failure</h3>`);
};


let post_input = document.querySelector(`#post_input`);
let post_input_value = post_input[`value`];

function POST_click(details) {



    axios({

        url: `https://jsonplaceholder.typicode.com/posts`,

        method: `POST`,

        data: {

            title: post_input_value

        }

    }).then(POSTsuccess).catch(POSTfailure);
};

let post_button = document.querySelectorAll(`.POST`);
for (let counter = 0; counter < post_button.length; counter = counter + 1) {
    post_button[counter].addEventListener(`click`, POST_click);



};

function PATCHsuccess(response) {

    let output = document.querySelector(`#main_article`);


    output.insertAdjacentHTML(`beforeend`, `<h3>success</h3>`);

};

function PATCHfailure() {

    let output = document.querySelector(`#main_article`);

    output.insertAdjacentHTML(`beforeend`, `<h3>failure</h3>`);
};



function PATCH_click(details) {



    axios({

        url: `https://jsonplaceholder.typicode.com/posts/1`,

        method: `PATCH`,

        data: {

            title: `this is the replacement`,

            body: post_input_value

        }

    }).then(PATCHsuccess).catch(PATCHfailure);


};

let patch_button = document.querySelectorAll(`.PATCH`);
for (let counter = 0; counter < patch_button.length; counter = counter + 1) {
    patch_button[counter].addEventListener(`click`, PATCH_click);




};




function DELETEsucess() {


    let output = document.querySelector(`#main_article`);


    output.insertAdjacentHTML(`beforeend`, `<h3>success</h3>`);


};


function DELETEfailure() {


    let output = document.querySelector(`#main_article`);


    output.insertAdjacentHTML(`beforeend`, `<h3>failure</h3>`);


};

function DELETE_click(details) {


    axios({

        url: `https://jsonplaceholder.typicode.com/posts/1`,

        method: `DELETE`


    }).then(DELETEsucess).catch(DELETEfailure);


};


let delete_button = document.querySelectorAll(`.DELETE`);
for (let counter = 0; counter < delete_button.length; counter = counter + 1) {
    delete_button[counter].addEventListener(`click`, DELETE_click);




};






function GETsuccess(response) {
    let axiosgetpage = document.querySelector(`#GET`);



    for (let counter = 0; counter < response[`data`].length; counter = counter + 1) {


        axiosgetpage.insertAdjacentHTML(`beforeend`,

            `<span>
        
        
        <h3>${response[`data`][counter][`title`]}</h3>
        
                
        <p>${response[`data`][counter][`body`]}</p>
        
        
        
        <span>`



        )

    }



};

function GETfailure() {
    let axiosgetpage = document.querySelector(`#GET`);
    axiosgetpage.insertAdjacentHTML(`beforeend`, `<h3>failure</h3>`);


};



axios({


    url: `https://jsonplaceholder.typicode.com/posts`,

    method: `GET`


}).then(GETsuccess).catch(GETfailure);