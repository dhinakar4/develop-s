import App from './App' 


function mycom(){
    return(
        <div>
            <h6>Adding props to other component</h6>
            <br />
            <App name ="arun" age ={32} />
            <App name ="kavi" age={29}/>
            <img src="../src/assets/img1.jpg" alt="" />
        </div>
    )
} export default mycom;