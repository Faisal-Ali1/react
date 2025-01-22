let contaner = document.querySelector("#contaner");

let React = {
    createElement: (tag, content, styles) => {

        let head = document.createElement(tag);

        // this section is for creating li and appending it in ul
        if (Array.isArray(content) && tag === 'ul') {
            for (let item of content) {
                let list = document.createElement("li");
                list.innerText = item;
                head.append(list);
            }

        }
        // this section is for creating tags and append it in div 
        else if (typeof content === 'object' && tag === 'div') {

            for (let [key , value] in Object.entries(content)) {
                if (key === 'ul') {
                    let box = document.createElement(key);
                    for (let values of value) {
                        let list = document.createElement("li")
                        list.innerText = values;
                        box.append(list);
                    }
                    head.append(box);

                }
                else {
                    let element = document.createElement(key);
                    element.innerText = content[key];
                    head.append(element);
                }

            }
        }
        else {
            head.innerText = content;
        }

        // Styling area
        for (let key in styles) {
            head.style[key] = styles[key]
        }


        contaner.append(head);

    }
}


React.createElement("h1", "Hllo World", { 'backgroundColor': 'black', 'color': 'white' });
React.createElement("p", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in enim maxime quae fuga doloremque neque dolorem eum officia! Error aspernatur expedita suscipit debitis illum iure accusantium accusamus alias neque!", { 'backgroundColor': 'antiquewhite', 'color': 'black', 'padding': '1rem', 'margin': '1rem', 'textAlign': 'center' });
React.createElement('ul', ['HTML', 'CSS', "JS", 'TS', 'REACT', 'NODE JS'], { 'border': '1px solid black', 'width': '10rem' });
React.createElement('div', { 'h2': "Quantum Computers", 'p': "Hllo how are you" }, { 'backgroundColor': 'black', 'color': 'white', 'padding': '0.5rem 1rem' });

React.createElement('div', { 'ul': ['HTML', 'CSS', 'JS', 'TS'] }, {});