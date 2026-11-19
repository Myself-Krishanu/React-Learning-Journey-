let About = ({id,element,children})=>{
    console.log(id,element)
        return (<nav>
            <h1>Hey I am About</h1>
            {children}
        </nav>)
}

export default About