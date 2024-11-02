let stranG = document.querySelector('.strang');
let add = document.querySelector('#add-frnd');
let remoVe = document.querySelector('#remove-frnd');
let flag = 0;
add.addEventListener('click', () => {
    if (flag == 0) {
        stranG.innerHTML = 'Friends';
        add.style.backgroundColor = "red"
        add.innerHTML = "Remove Friend";
        alert(`You are friends now `);
        flag = 1;
    } else {
        stranG.innerHTML = 'Stranger';
        add.innerHTML = "Add Friend";
        alert(`Are you sure you want to delete this friend`);
        add.style.backgroundColor = "rgb(30, 147, 30)"
        ;flag = 0;
    }
 });
// add.addEventListener('click', ()=>{
    
//  stranG.innerHTML = 'Friends';
//     alert(`You are friends now `)
// });
// remoVe.addEventListener('click', ()=>{
    
//       stranG.innerHTML = 'Stranger';
//     alert(`You are friends now `)
// });