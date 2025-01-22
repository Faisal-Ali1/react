
// for creating element
const React = {
    createElement : function(tag , property , text){
        let element = document.createElement(tag);

        if(Array.isArray(text)){
            for(let value of text){
                let list = document.createElement("li");
                list.innerText = value;
                element.append(list);
            }
        }
        else{
            element.innerText = text;
        }
        
        for(let key in property){
            element.style[key] = property[key];
        }

        return element;
    },
}

// for manuplating DOM / rendering on web
const ReactDom = { 
    render : function(element , root){
        root.append(element);
    }
}

let header1 = React.createElement('h1' , {'backgroundColor' : 'black' , 'color' : 'white'} , "Hllo World");
let header2 = React.createElement('h2' , {'backgroundColor' : 'brown' , 'color' : 'white'} , 'How are you all?');
let header3 = React.createElement('ul' , {} , ['HTML' , 'CSS' , 'JS' , 'TS']);

ReactDom.render(header1 , document.querySelector("#contaner"));
ReactDom.render(header2 , document.querySelector("#contaner"));
ReactDom.render(header3 , document.querySelector("#contaner"));

