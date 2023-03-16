import React from 'react'
 
import 'bootstrap/dist/css/bootstrap.min.css';
 
import { Button, Spinner } from 'react-bootstrap'
 
class App extends React.Component{
 
    render(){
        return(
            <div>
                <Button variant="dark" disabled>
                    <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>
                      Loading...
                </Button>
            </div>
        )
    }
     
}
 
export default App;