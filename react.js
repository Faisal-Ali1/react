let element = React.createElement('h1' , {} , "Hllo World");

let main = ReactDOM.createRoot(document.querySelector("#contaner"));
main.render(element);

let element1 = React.createElement('h2' , {} , 'Bye World');
let element2 = React.createElement('div' , {} , [element , element1]);
main.render(element2)
