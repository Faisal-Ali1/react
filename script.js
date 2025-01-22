
// // for creating element
// const React = {
//     createElement : function(tag , property , text){
//         let element = document.createElement(tag);

//         if(Array.isArray(text)){
//             for(let value of text){
//                 element.append(value);
//             }
//         }
//         else{
//             element.innerText = text;
//         }
        
//         for(let key in property){
//             element.style[key] = property[key];
//         }

//         return element;
//     },
// }

// // for manuplating DOM / rendering on web
// const ReactDom = { 
//     render : function(element , root){
//         root.append(element);
//     }
// }

// let header1 = React.createElement('h1' , {'backgroundColor' : 'black' , 'color' : 'white'} , "Hllo World");
// let header2 = React.createElement('h2' , {'backgroundColor' : 'brown' , 'color' : 'white'} , 'How are you all?');
// let li1 = React.createElement('li' , {} , 'HTML');
// let li2 = React.createElement('li' , {} , 'CSS');
// let li3 = React.createElement('li' , {} , 'JS');
// let li4 = React.createElement('li' , {} , 'TS');
// let ul = React.createElement('ul' , {} , [li1 , li2 , li3 , li4]);

// ReactDom.render(header1 , document.querySelector("#contaner"));
// ReactDom.render(header2 , document.querySelector("#contaner"));
// ReactDom.render(ul , document.querySelector("#contaner"));

