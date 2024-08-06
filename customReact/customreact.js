function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.append(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.append(domElement)
}



const reactElement = {
    type: 'a',
    props:{
        href:'https://gogle.com',
        target: '_blank'
    },
    children: "Click me to visist googoo"
}

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer) 