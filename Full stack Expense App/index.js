async function handleFormSubmit(event){
    event.preventDefault();

    const userDetails = {
        amount : event.target.amount.value,
        description : event.target.desc.value,
        category : event.target.cat.value,
    }
    console.log(userDetails)
    try{
        const response = await axios.post(`http://localhost:3000/expense`,userDetails)
        showUserOnScreen(response.data);
        event.target.reset();
    }catch(error){
        console.log("ERROR:( ",error);
    }
}
document.addEventListener("DOMContentLoaded",async() => {
    try{
        const response = await axios.get(`http://localhost:3000/expense`);
        response.data.forEach(expense => showUserOnScreen(expense));
    }catch(error){
        console.log("ERROR :(" , error)
    }
})

function showUserOnScreen(data){
    
    const ul = document.getElementById('listItem');
    const li = document.createElement('li');
   
    li.innerHTML = `
            <label>${data.amount} - </label> 
            <label> ${data.description} - </label> 
            <label> ${data.category} - </label> 
            <button class='dBtn' data-id="${data.id}">DELETE</button>
            <button class='eBtn' data-id="${data.id}">EDIT</button>
            <div class='editForm' style="display: none;">
                <input type='text' class='editAmount' value="${data.amount}">
                <input type='text' class='editDesc' value="${data.description}">
                <input type='text' class='editCat' value="${data.category}">
                <button class='sBtn' data-id="${data.id}">SAVE</button>
                <button class='cBtn' data-id="${data.id}">CANCEL</button>
         </div>`;
    ul.appendChild(li);
}
    // const deleteBtn = document.querySelectorAll('.dBtn');
    // deleteBtn.forEach((delBtn) => {
    //     delBtn.onclick = async () => {
    //         try{
    //           await axios.delete(`http://localhost:3000/expense/${data.id}`);
    //           li.parentElement.removeChild(li);
    //         }catch(error){
    //           console.log("ERROR :(",error);
    //         }
    //     }
    // });

    // ul.addEventListener('click', (event) => {
document.getElementById('listItem').addEventListener('click', async (event) => {
    const target = event.target;
    
    if (target.classList.contains('dBtn')) {
        const li = target.parentElement;
        const id = target.getAttribute('data-id');
        try {
            await axios.delete(`http://localhost:3000/expense/${id}`);
            li.parentElement.removeChild(li);
        }catch (error) {
            console.log("ERROR :(", error);
        }
    }else if (target.classList.contains('eBtn')) {
        const editForm = target.nextElementSibling;
        editForm.style.display = "block";
    } else if (target.classList.contains('sBtn')) {
        const editForm = target.parentElement;
        const id = target.getAttribute('data-id');
        const newAmount = editForm.querySelector('.editAmount').value;
        const newDesc = editForm.querySelector('.editDesc').value;
        const newCat = editForm.querySelector('.editCat').value;
        saveChanges(id, newAmount, newDesc,newCat);
    } else if(target.classList.contains('cBtn')){
        const editForm = target.parentElement;
        editForm.style.display = "none";
    }
});

function saveChanges(id,a,d,c){
    const updatedDetails = {
        amount:a,
        description:d,
        category:c
    }
    axios.put(`http://localhost:3000/expense/${id}`,updatedDetails)
    .then(() => getData())
    .catch(err => console.log("ERROR :(",err))
};

