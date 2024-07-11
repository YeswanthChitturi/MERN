// import {useState} from 'react'
//  function Home(){
//     const [name,setName]=useState("");
//     const [ShowName, setShowName] = useState("");
//     const handleChange=(e)=>{
//         setName(e.target.value);}
//     const handleButton=(e)=>{
//         setShowName(Welcome,{name});
//     }
//     return(
//         <div>
//             input:<input type="text" placeholder="Enter name" value={name} onChange={handleChange}/><br/>
//             <button onClick={handleButton}>Submit</button>
//             <p>Welcome {ShowName}</p>
//         </div>
//     )
// }
// export default Home;

describe('Home Page To Test',()=>{
    it('Check The Input Feild',()=>{
        cy.visit('/');
        cy.get('input').type('Cinderella')
        cy.get('button').type('Submit')
        cy.should().beVisible()
    })
})












